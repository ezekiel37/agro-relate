import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Compass, LayoutDashboard, LogOut, Menu, Settings, UserRound, Users, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { useConnectionRequests } from "@/hooks/use-dashboard";
import { cn } from "@/lib/utils";
import { RoleBadge, UserAvatar } from "@/components/dashboard/shared";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/profile", label: "My Profile", icon: UserRound },
  { to: "/dashboard/discover", label: "Discover", icon: Compass },
  { to: "/dashboard/connections", label: "Connections", icon: Users },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const DashboardLayout: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pending = useConnectionRequests("received", "pending");
  const pendingCount = pending.data?.pagination?.totalItems ?? pending.data?.requests.length ?? 0;

  const handleSignOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  const nav = (
    <nav className="flex flex-col gap-1" aria-label="Dashboard">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-[#1E3C14] text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            )
          }
        >
          <Icon className="h-4 w-4" />
          <span className="flex-1">{label}</span>
          {to === "/dashboard/connections" && pendingCount > 0 ? (
            <span className="rounded-full bg-[#CFFFA0] px-2 text-[11px] font-600 text-[#1E3C14]">
              {pendingCount}
            </span>
          ) : null}
        </NavLink>
      ))}
    </nav>
  );

  const account = (
    <div className="border-t border-gray-100 pt-4">
      <div className="flex items-center gap-3">
        <UserAvatar name={user?.name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-600 text-gray-800">{user?.name}</p>
          <RoleBadge role={user?.role} />
        </div>
      </div>
      <button
        type="button"
        onClick={handleSignOut}
        className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F8F5]">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-gray-700"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 top-[65px] z-30 flex flex-col justify-between bg-white p-4 lg:hidden">
          {nav}
          {account}
        </div>
      ) : null}

      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-gray-200 bg-white p-5 lg:flex">
          <div>
            <div className="mb-8">
              <Logo />
            </div>
            {nav}
          </div>
          {account}
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 lg:py-10">
          <div className="mx-auto max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
