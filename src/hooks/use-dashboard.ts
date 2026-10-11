import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  ApiError,
  ProfileInput,
  ProfileType,
  cancelConnectionRequest,
  createProfile,
  getMyProfile,
  listConnectionRequests,
  listConnections,
  listProfiles,
  respondToConnectionRequest,
  sendConnectionRequest,
  updateProfile,
} from "@/lib/api";

export const queryKeys = {
  myProfile: ["profile", "me"] as const,
  profiles: (filters: object) => ["profiles", filters] as const,
  requests: (type: string, status?: string) => ["requests", type, status ?? "any"] as const,
  connections: ["connections"] as const,
};

const errorMessage = (err: unknown) =>
  err instanceof ApiError ? err.message : "Something went wrong. Please try again.";

export const useMyProfile = () =>
  useQuery({ queryKey: queryKeys.myProfile, queryFn: getMyProfile });

export const useSaveProfile = (profileId?: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ProfileInput) =>
      profileId ? updateProfile(profileId, input) : createProfile(input),
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.myProfile, profile);
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
      toast.success(profileId ? "Profile updated." : "Profile created. You're now discoverable.");
    },
    onError: (err) => toast.error(errorMessage(err)),
  });
};

export const useProfiles = (filters: {
  type?: ProfileType;
  location?: string;
  product?: string;
  page: number;
}) =>
  useQuery({
    queryKey: queryKeys.profiles(filters),
    queryFn: () => listProfiles({ ...filters, limit: 12 }),
    placeholderData: (previous) => previous,
  });

export const useConnectionRequests = (
  type: "sent" | "received",
  status?: "pending" | "accepted" | "rejected"
) =>
  useQuery({
    queryKey: queryKeys.requests(type, status),
    queryFn: () => listConnectionRequests({ type, status, limit: 50 }),
  });

export const useConnections = () =>
  useQuery({ queryKey: queryKeys.connections, queryFn: () => listConnections({ limit: 50 }) });

const useInvalidateNetwork = () => {
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({ queryKey: ["requests"] });
    queryClient.invalidateQueries({ queryKey: queryKeys.connections });
  };
};

export const useSendRequest = () => {
  const invalidate = useInvalidateNetwork();
  return useMutation({
    mutationFn: sendConnectionRequest,
    onSuccess: () => {
      invalidate();
      toast.success("Connection request sent.");
    },
    onError: (err) => toast.error(errorMessage(err)),
  });
};

export const useRespondToRequest = () => {
  const invalidate = useInvalidateNetwork();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: "accepted" | "rejected" }) =>
      respondToConnectionRequest(id, status),
    onSuccess: (_data, { status }) => {
      invalidate();
      toast.success(status === "accepted" ? "Connection accepted." : "Request declined.");
    },
    onError: (err) => toast.error(errorMessage(err)),
  });
};

export const useCancelRequest = () => {
  const invalidate = useInvalidateNetwork();
  return useMutation({
    mutationFn: cancelConnectionRequest,
    onSuccess: () => {
      invalidate();
      toast.success("Request cancelled.");
    },
    onError: (err) => toast.error(errorMessage(err)),
  });
};
