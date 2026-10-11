import axios, { AxiosError } from "axios";
import type { ContactValues, LoginValues } from "./validation";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ?? "https://agrorelate-backend.onrender.com"
).replace(/\/$/, "");

const TOKEN_KEY = "agrorelate_token";

/** Fired when the API rejects our token so the auth context can sign out. */
export const UNAUTHORIZED_EVENT = "agrorelate:unauthorized";

export type UserRole = "farmer" | "buyer" | "supplier" | "admin";
export type ProfileType = "farmer" | "buyer" | "supplier";
export type RequestStatus = "pending" | "accepted" | "rejected";

export interface UserSummary {
  id: number;
  name: string;
  email?: string;
  role: UserRole;
  location?: string | null;
}

export interface User extends UserSummary {
  createdAt?: string;
}

export interface Profile {
  id: number;
  userId: number;
  type: ProfileType;
  products: string[];
  description?: string | null;
  location?: string | null;
  phone?: string | null;
  website?: string | null;
  createdAt?: string;
  user?: UserSummary;
}

export interface ProfileInput {
  type: ProfileType;
  products: string[];
  description?: string;
  location?: string;
  phone?: string;
  website?: string;
}

export interface ConnectionRequest {
  id: number;
  fromUserId: number;
  toUserId: number;
  message?: string | null;
  status: RequestStatus;
  createdAt: string;
  fromUser?: UserSummary;
  toUser?: UserSummary;
}

export interface Connection {
  id: number;
  connectedUser: UserSummary & { profile?: Profile | null };
  connectedAt: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
}

interface AuthResponse {
  user: User;
  token: string;
}

export interface FieldError {
  field: string;
  message: string;
}

export class ApiError extends Error {
  status: number;
  fieldErrors: FieldError[];

  constructor(message: string, status: number, fieldErrors: FieldError[] = []) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const setToken = (token: string) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // Storage can be unavailable (private mode); the session just won't persist.
  }
};

export const clearToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    // Nothing to clear.
  }
};

// Render's free tier sleeps when idle and can take ~50s to wake, so allow a
// generous window before giving up instead of hanging forever.
export const REQUEST_TIMEOUT_MS = 60_000;

declare module "axios" {
  interface AxiosRequestConfig {
    /** Attach the stored bearer token. */
    withAuth?: boolean;
    /** Set false when a 401 means "wrong input", not "session expired". */
    signOutOn401?: boolean;
  }
}

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use((config) => {
  const token = config.withAuth ? getToken() : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (response) => {
    // The API reports some failures as { success: false } with a 2xx status.
    if (response.data?.success === false) {
      throw new ApiError(
        response.data.message ?? "Something went wrong. Please try again.",
        response.status
      );
    }
    return response;
  },
  (error: AxiosError<{ message?: string; errors?: FieldError[] }>) => {
    if (error.code === AxiosError.ECONNABORTED || error.code === AxiosError.ETIMEDOUT) {
      throw new ApiError(
        "The server is taking too long to respond. It may be starting up, so please try again in a moment.",
        0
      );
    }

    if (!error.response) {
      throw new ApiError(
        "Could not reach the server. Check your connection and try again.",
        0
      );
    }

    const { status, data } = error.response;
    if (error.config?.withAuth && status === 401 && error.config.signOutOn401 !== false) {
      window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
    }
    throw new ApiError(
      data?.message ?? "Something went wrong. Please try again.",
      status,
      Array.isArray(data?.errors) ? data.errors : []
    );
  }
);

type Query = Record<string, string | number | undefined>;

async function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options: { body?: unknown; query?: Query; auth?: boolean; signOutOn401?: boolean } = {}
): Promise<T> {
  // Drop empty filters so we don't send e.g. ?location= to the API.
  const params = Object.fromEntries(
    Object.entries(options.query ?? {}).filter(([, value]) => value !== undefined && value !== "")
  );

  const response = await http.request<{ data: T }>({
    method,
    url,
    data: options.body,
    params,
    withAuth: options.auth,
    signOutOn401: options.signOutOn401,
  });
  return response.data?.data as T;
}

// Auth
export const register = (payload: {
  name: string;
  email: string;
  password: string;
  role: ProfileType;
}) => request<AuthResponse>("POST", "/api/auth/register", { body: payload });

export const login = (payload: LoginValues) =>
  request<AuthResponse>("POST", "/api/auth/login", { body: payload });

export const getMe = () =>
  request<{ user: User }>("GET", "/api/auth/me", { auth: true }).then((d) => d.user);

export const updateMe = (payload: { name?: string; location?: string }) =>
  request<{ user: User }>("PUT", "/api/auth/me", { body: payload, auth: true }).then(
    (d) => d.user
  );

export const changePassword = (payload: { currentPassword: string; newPassword: string }) =>
  // The API answers a wrong current password with 401.
  request<unknown>("PUT", "/api/auth/password", {
    body: payload,
    auth: true,
    signOutOn401: false,
  });

// Profiles
export const getMyProfile = async () => {
  try {
    const { profile } = await request<{ profile: Profile }>("GET", "/api/profiles/me", {
      auth: true,
    });
    return profile;
  } catch (err) {
    // 404 just means the user hasn't created a profile yet.
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
};

export const createProfile = (payload: ProfileInput) =>
  request<{ profile: Profile }>("POST", "/api/profiles", { body: payload, auth: true }).then(
    (d) => d.profile
  );

export const updateProfile = (id: number, payload: ProfileInput) =>
  request<{ profile: Profile }>("PUT", `/api/profiles/${id}`, {
    body: payload,
    auth: true,
  }).then((d) => d.profile);

export const listProfiles = (query: {
  type?: ProfileType;
  location?: string;
  product?: string;
  page?: number;
  limit?: number;
}) =>
  request<{ profiles: Profile[]; pagination: Pagination }>("GET", "/api/profiles", {
    query,
  });

// Connection requests
export const sendConnectionRequest = (payload: { toUserId: number; message?: string }) =>
  request<{ request: ConnectionRequest }>("POST", "/api/requests", {
    body: payload,
    auth: true,
  });

export const listConnectionRequests = (query: {
  type?: "all" | "sent" | "received";
  status?: RequestStatus;
  page?: number;
  limit?: number;
}) =>
  request<{ requests: ConnectionRequest[]; pagination: Pagination }>(
    "GET",
    "/api/requests",
    { query, auth: true }
  );

export const respondToConnectionRequest = (id: number, status: "accepted" | "rejected") =>
  request<unknown>("PUT", `/api/requests/${id}`, { body: { status }, auth: true });

export const cancelConnectionRequest = (id: number) =>
  request<unknown>("DELETE", `/api/requests/${id}`, { auth: true });

export const listConnections = (query: { page?: number; limit?: number } = {}) =>
  request<{ connections: Connection[]; pagination: Pagination }>(
    "GET",
    "/api/requests/connections",
    { query, auth: true }
  );

// Contact
export const sendContactMessage = (payload: ContactValues) =>
  request<unknown>("POST", "/api/contact", { body: payload });
