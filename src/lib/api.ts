import type { ContactValues, LoginValues } from "./validation";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ?? "https://agrorelate-backend.onrender.com"
).replace(/\/$/, "");

const TOKEN_KEY = "agrorelate_token";

export type UserRole = "farmer" | "buyer" | "supplier" | "admin";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  location?: string;
  createdAt?: string;
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

async function request<T>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError(
      "Could not reach the server. Check your connection and try again.",
      0
    );
  }

  const json = await response.json().catch(() => null);

  if (!response.ok || json?.success === false) {
    throw new ApiError(
      json?.message ?? "Something went wrong. Please try again.",
      response.status,
      Array.isArray(json?.errors) ? json.errors : []
    );
  }

  return json?.data as T;
}

export const setToken = (token: string) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // Storage can be unavailable (private mode); the session just won't persist.
  }
};

export const register = (payload: {
  name: string;
  email: string;
  password: string;
  role: "farmer" | "buyer" | "supplier";
}) => request<AuthResponse>("/api/auth/register", payload);

export const login = (payload: LoginValues) =>
  request<AuthResponse>("/api/auth/login", payload);

export const sendContactMessage = (payload: ContactValues) => request<unknown>("/api/contact", payload);
