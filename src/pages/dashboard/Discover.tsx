import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import {
  useConnectionRequests,
  useConnections,
  useProfiles,
  useSendRequest,
} from "@/hooks/use-dashboard";
import {
  EmptyState,
  ErrorBlock,
  LoadingBlock,
  PageHeader,
  RoleBadge,
  UserAvatar,
} from "@/components/dashboard/shared";
import { ROLE_LABELS, primaryButton } from "@/lib/format";
import type { Profile, ProfileType } from "@/lib/api";
import { cn } from "@/lib/utils";

const TYPE_FILTERS: { value?: ProfileType; label: string }[] = [
  { label: "Everyone" },
  { value: "farmer", label: "Farmers" },
  { value: "buyer", label: "Buyers" },
  { value: "supplier", label: "Suppliers" },
];

type Relationship = "self" | "connected" | "sent" | "received" | "none";

const MESSAGE_LIMIT = 500;

const Discover: React.FC = () => {
  const { user } = useAuth();
  const [type, setType] = React.useState<ProfileType | undefined>();
  const [product, setProduct] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [applied, setApplied] = React.useState({ product: "", location: "" });
  const [page, setPage] = React.useState(1);
  const [target, setTarget] = React.useState<Profile | null>(null);
  const [message, setMessage] = React.useState("");

  const profiles = useProfiles({ type, page, ...applied });
  const sent = useConnectionRequests("sent", "pending");
  const received = useConnectionRequests("received", "pending");
  const connections = useConnections();
  const sendRequest = useSendRequest();

  const relationship = (userId: number): Relationship => {
    if (userId === user?.id) return "self";
    if (connections.data?.connections.some((c) => c.connectedUser.id === userId))
      return "connected";
    if (sent.data?.requests.some((r) => r.toUserId === userId)) return "sent";
    if (received.data?.requests.some((r) => r.fromUserId === userId)) return "received";
    return "none";
  };

  const applyFilters = (event: React.FormEvent) => {
    event.preventDefault();
    setApplied({ product: product.trim(), location: location.trim() });
    setPage(1);
  };

  const closeDialog = () => {
    setTarget(null);
    setMessage("");
  };

  const submitRequest = () => {
    if (!target) return;
    sendRequest.mutate(
      { toUserId: target.userId, message: message.trim() || undefined },
      { onSuccess: closeDialog }
    );
  };

  const pagination = profiles.data?.pagination;

  return (
    <>
      <PageHeader
        title="Discover"
        description="Find farmers, buyers and suppliers and start a conversation."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {TYPE_FILTERS.map((filter) => (
          <button
            key={filter.label}
            type="button"
            aria-pressed={type === filter.value}
            onClick={() => {
              setType(filter.value);
              setPage(1);
            }}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              type === filter.value
                ? "border-[#1E3C14] bg-[#1E3C14] text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <form onSubmit={applyFilters} className="mb-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <Input
          aria-label="Product"
          placeholder="Product, e.g. maize"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="h-10 bg-white"
        />
        <Input
          aria-label="Location"
          placeholder="Location, e.g. Kaduna"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-10 bg-white"
        />
        <Button type="submit" className={primaryButton}>
          <Search className="h-4 w-4" />
          Search
        </Button>
      </form>

      {profiles.isLoading ? (
        <LoadingBlock />
      ) : profiles.isError ? (
        <ErrorBlock onRetry={() => profiles.refetch()} />
      ) : !profiles.data?.profiles.length ? (
        <EmptyState
          title="No one matches yet"
          description="Try a different product or location, or clear the filters."
        />
      ) : (
        <div className={cn("grid gap-4 sm:grid-cols-2", profiles.isFetching && "opacity-60")}>
          {profiles.data.profiles.map((profile) => {
            const rel = relationship(profile.userId);
            return (
              <article
                key={profile.id}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <UserAvatar name={profile.user?.name} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-600 text-gray-800">
                      {profile.user?.name ?? "AgroRelate member"}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <RoleBadge role={profile.type} />
                      {profile.location ? (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          {profile.location}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

                {profile.description ? (
                  <p className="mt-3 line-clamp-3 text-sm text-gray-600">{profile.description}</p>
                ) : null}

                {profile.products?.length ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {profile.products.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#F4FFEA] px-2 py-0.5 text-[11px] capitalize text-[#1E3C14]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto pt-4">
                  {rel === "self" ? (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/dashboard/profile">This is you · Edit profile</Link>
                    </Button>
                  ) : rel === "connected" ? (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/dashboard/connections?tab=connected">Connected</Link>
                    </Button>
                  ) : rel === "sent" ? (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Request sent
                    </Button>
                  ) : rel === "received" ? (
                    <Button asChild size="sm" className={`w-full ${primaryButton}`}>
                      <Link to="/dashboard/connections?tab=received">Respond to request</Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className={`w-full ${primaryButton}`}
                      onClick={() => setTarget(profile)}
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {pagination && pagination.totalPages > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <span className="text-gray-500">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= pagination.totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      ) : null}

      <Dialog open={!!target} onOpenChange={(open) => (open ? null : closeDialog())}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect with {target?.user?.name ?? "this member"}</DialogTitle>
            <DialogDescription>
              Add a short note so they know why you'd like to connect
              {target ? ` with a ${ROLE_LABELS[target.type].toLowerCase()}` : ""}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1">
            <Textarea
              aria-label="Message"
              placeholder="Hi, I'd like to talk about a maize supply for next season..."
              value={message}
              maxLength={MESSAGE_LIMIT}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[110px]"
            />
            <p className="text-right text-[11px] text-gray-400">
              {message.length}/{MESSAGE_LIMIT}
            </p>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={closeDialog}>
              Cancel
            </Button>
            <Button className={primaryButton} disabled={sendRequest.isPending} onClick={submitRequest}>
              {sendRequest.isPending ? "Sending..." : "Send request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Discover;
