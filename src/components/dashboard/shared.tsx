import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/lib/api";
import { ROLE_LABELS, initials } from "@/lib/format";

export const UserAvatar: React.FC<{ name?: string; className?: string }> = ({
  name,
  className,
}) => (
  <div
    aria-hidden
    className={cn(
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8FFD4] text-sm font-600 text-[#1E3C14]",
      className
    )}
  >
    {initials(name)}
  </div>
);

export const RoleBadge: React.FC<{ role?: UserRole }> = ({ role }) =>
  role ? (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
      {ROLE_LABELS[role]}
    </span>
  ) : null;

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn("rounded-2xl border border-gray-200 bg-white p-5 shadow-sm", className)}>
    {children}
  </div>
);

export const PageHeader: React.FC<{
  title: string;
  description?: string;
  action?: React.ReactNode;
}> = ({ title, description, action }) => (
  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h1 className="text-xl font-600 text-gray-800">{title}</h1>
      {description ? <p className="mt-1 text-sm text-gray-500">{description}</p> : null}
    </div>
    {action}
  </div>
);

export const LoadingBlock: React.FC = () => (
  <div className="flex items-center justify-center py-12 text-gray-400">
    <Loader2 className="h-5 w-5 animate-spin" aria-label="Loading" />
  </div>
);

export const EmptyState: React.FC<{
  title: string;
  description?: string;
  action?: React.ReactNode;
}> = ({ title, description, action }) => (
  <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
    <p className="text-sm font-600 text-gray-700">{title}</p>
    {description ? <p className="mx-auto mt-1 max-w-sm text-xs text-gray-500">{description}</p> : null}
    {action ? <div className="mt-4">{action}</div> : null}
  </div>
);

export const ErrorBlock: React.FC<{ message?: string; onRetry?: () => void }> = ({
  message,
  onRetry,
}) => (
  <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-6 text-center text-sm text-red-700">
    <p>{message ?? "Couldn't load this. Please try again."}</p>
    {onRetry ? (
      <button type="button" onClick={onRetry} className="mt-2 font-600 underline">
        Retry
      </button>
    ) : null}
  </div>
);
