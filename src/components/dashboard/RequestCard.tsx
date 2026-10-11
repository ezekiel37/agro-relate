import React from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import type { ConnectionRequest } from "@/lib/api";
import { useCancelRequest, useRespondToRequest } from "@/hooks/use-dashboard";
import {
  RoleBadge,
  UserAvatar,
} from "./shared";
import { formatDate, primaryButton } from "@/lib/format";

const STATUS_STYLES = {
  pending: "bg-yellow-50 text-yellow-700",
  accepted: "bg-green-50 text-green-700",
  rejected: "bg-gray-100 text-gray-500",
};

const RequestCard: React.FC<{ request: ConnectionRequest; direction: "sent" | "received" }> = ({
  request,
  direction,
}) => {
  const respond = useRespondToRequest();
  const cancel = useCancelRequest();
  const other = direction === "received" ? request.fromUser : request.toUser;
  const busy = respond.isPending || cancel.isPending;
  const responding = respond.isPending ? respond.variables?.status : undefined;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-start">
      <UserAvatar name={other?.name} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-600 text-gray-800">{other?.name ?? "AgroRelate user"}</p>
          <RoleBadge role={other?.role} />
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ${STATUS_STYLES[request.status]}`}
          >
            {request.status}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-gray-400">
          {direction === "received" ? "Received" : "Sent"} {formatDate(request.createdAt)}
          {other?.location ? ` · ${other.location}` : ""}
        </p>
        {request.message ? (
          <p className="mt-2 whitespace-pre-line rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
            {request.message}
          </p>
        ) : null}
      </div>

      {request.status === "pending" ? (
        <div className="flex gap-2 sm:flex-col">
          {direction === "received" ? (
            <>
              <LoadingButton
                size="sm"
                className={primaryButton}
                loading={responding === "accepted"}
                loadingText="Accepting..."
                disabled={busy}
                onClick={() => respond.mutate({ id: request.id, status: "accepted" })}
              >
                Accept
              </LoadingButton>
              <LoadingButton
                size="sm"
                variant="outline"
                loading={responding === "rejected"}
                loadingText="Declining..."
                disabled={busy}
                onClick={() => respond.mutate({ id: request.id, status: "rejected" })}
              >
                Decline
              </LoadingButton>
            </>
          ) : (
            <LoadingButton
              size="sm"
              variant="outline"
              loading={cancel.isPending}
              loadingText="Cancelling..."
              onClick={() => cancel.mutate(request.id)}
            >
              Cancel request
            </LoadingButton>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default RequestCard;
