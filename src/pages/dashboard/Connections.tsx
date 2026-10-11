import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConnectionRequests, useConnections } from "@/hooks/use-dashboard";
import RequestCard from "@/components/dashboard/RequestCard";
import {
  EmptyState,
  ErrorBlock,
  LoadingBlock,
  PageHeader,
  RoleBadge,
  UserAvatar,
} from "@/components/dashboard/shared";
import { formatDate, primaryButton } from "@/lib/format";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "connected", label: "Connected" },
  { key: "received", label: "Received" },
  { key: "sent", label: "Sent" },
] as const;
type Tab = (typeof TABS)[number]["key"];

const discoverAction = (
  <Button asChild size="sm" className={primaryButton}>
    <Link to="/dashboard/discover">Discover people</Link>
  </Button>
);

const ConnectedList: React.FC = () => {
  const connections = useConnections();
  if (connections.isLoading) return <LoadingBlock />;
  if (connections.isError) return <ErrorBlock onRetry={() => connections.refetch()} />;
  if (!connections.data?.connections.length)
    return (
      <EmptyState
        title="No connections yet"
        description="When someone accepts your request, or you accept theirs, they'll appear here with their contact details."
        action={discoverAction}
      />
    );

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {connections.data.connections.map(({ id, connectedUser, connectedAt }) => {
        const phone = connectedUser.profile?.phone;
        const location = connectedUser.profile?.location ?? connectedUser.location;
        return (
          <article key={id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <UserAvatar name={connectedUser.name} />
              <div className="min-w-0">
                <p className="truncate text-sm font-600 text-gray-800">{connectedUser.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <RoleBadge role={connectedUser.role} />
                  <span className="text-xs text-gray-400">Since {formatDate(connectedAt)}</span>
                </div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {connectedUser.email ? (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href={`mailto:${connectedUser.email}`} className="truncate hover:underline">
                    {connectedUser.email}
                  </a>
                </li>
              ) : null}
              {phone ? (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
                    {phone}
                  </a>
                </li>
              ) : null}
              {location ? (
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  {location}
                </li>
              ) : null}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

const RequestList: React.FC<{ direction: "sent" | "received" }> = ({ direction }) => {
  const requests = useConnectionRequests(direction);
  if (requests.isLoading) return <LoadingBlock />;
  if (requests.isError) return <ErrorBlock onRetry={() => requests.refetch()} />;
  if (!requests.data?.requests.length)
    return (
      <EmptyState
        title={direction === "received" ? "No requests received" : "You haven't sent any requests"}
        description={
          direction === "received"
            ? "Complete your profile so others can find you."
            : "Find someone to connect with in Discover."
        }
        action={discoverAction}
      />
    );

  return (
    <div className="space-y-3">
      {requests.data.requests.map((request) => (
        <RequestCard key={request.id} request={request} direction={direction} />
      ))}
    </div>
  );
};

const Connections: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const tab: Tab = TABS.some((t) => t.key === params.get("tab"))
    ? (params.get("tab") as Tab)
    : "connected";

  return (
    <>
      <PageHeader
        title="Connections"
        description="Manage your network and respond to connection requests."
      />

      <div role="tablist" className="mb-6 flex gap-1 rounded-xl bg-gray-100 p-1 sm:w-fit">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setParams({ tab: key }, { replace: true })}
            className={cn(
              "flex-1 rounded-lg px-4 py-1.5 text-sm transition-colors sm:flex-none",
              tab === key ? "bg-white font-600 text-gray-800 shadow-sm" : "text-gray-500"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "connected" ? <ConnectedList /> : <RequestList direction={tab} />}
    </>
  );
};

export default Connections;
