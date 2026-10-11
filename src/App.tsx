import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/auth/Welcome";
import FarmerSignup from "./pages/auth/FarmerSignup";
import InvestorSignup from "./pages/auth/InvestorSignup";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import NewPassword from "./pages/auth/NewPassword";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Farmers from "./pages/Farmers";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";
import RedirectIfAuthenticated from "./components/auth/RedirectIfAuthenticated";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import ProfilePage from "./pages/dashboard/ProfilePage";
import Discover from "./pages/dashboard/Discover";
import Connections from "./pages/dashboard/Connections";
import Settings from "./pages/dashboard/Settings";
import { ApiError } from "./lib/api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Don't retry client errors (401/403/404); do retry network blips.
      retry: (failureCount, error) =>
        !(error instanceof ApiError && error.status >= 400 && error.status < 500) &&
        failureCount < 2,
      refetchOnWindowFocus: false,
    },
  },
});

const guest = (element: React.ReactNode) => (
  <RedirectIfAuthenticated>{element}</RedirectIfAuthenticated>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/welcome" element={guest(<Welcome />)} />
          <Route path="/signup/farmer" element={guest(<FarmerSignup />)} />
          <Route path="/signup/investor" element={guest(<InvestorSignup />)} />
          <Route path="/login" element={guest(<Login />)} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/new" element={<NewPassword />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Overview />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="discover" element={<Discover />} />
            <Route path="connections" element={<Connections />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
