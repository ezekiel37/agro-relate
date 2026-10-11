import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  ApiError,
  UNAUTHORIZED_EVENT,
  User,
  clearToken,
  getMe,
  getToken,
  setToken,
} from "@/lib/api";

type AuthStatus = "loading" | "authenticated" | "anonymous";

interface AuthContextValue {
  user: User | null;
  status: AuthStatus;
  signIn: (token: string, user: User) => void;
  signOut: () => void;
  setUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = React.useState<User | null>(null);
  const [status, setStatus] = React.useState<AuthStatus>(() =>
    getToken() ? "loading" : "anonymous"
  );

  const signOut = React.useCallback(() => {
    clearToken();
    setUser(null);
    setStatus("anonymous");
    queryClient.clear();
  }, [queryClient]);

  const signIn = React.useCallback(
    (token: string, nextUser: User) => {
      queryClient.clear();
      setToken(token);
      setUser(nextUser);
      setStatus("authenticated");
    },
    [queryClient]
  );

  // Restore the session from a stored token on first load.
  React.useEffect(() => {
    if (!getToken()) return;
    let cancelled = false;
    getMe()
      .then((me) => {
        if (cancelled) return;
        setUser(me);
        setStatus("authenticated");
      })
      .catch((err) => {
        if (cancelled) return;
        // Only drop the token if the server rejected it; a network blip
        // (e.g. Render cold start) shouldn't log the user out.
        if (err instanceof ApiError && err.status === 401) signOut();
        else setStatus("anonymous");
      });
    return () => {
      cancelled = true;
    };
  }, [signOut]);

  React.useEffect(() => {
    window.addEventListener(UNAUTHORIZED_EVENT, signOut);
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, signOut);
  }, [signOut]);

  const value = React.useMemo(
    () => ({ user, status, signIn, signOut, setUser }),
    [user, status, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
