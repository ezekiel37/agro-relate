import type { UserRole } from "./api";

export const ROLE_LABELS: Record<UserRole, string> = {
  farmer: "Farmer",
  buyer: "Buyer",
  supplier: "Supplier",
  admin: "Admin",
};

export const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

export const initials = (name?: string) =>
  (name ?? "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

export const primaryButton = "bg-[#1E3C14] text-white hover:bg-[#162B0E]";
