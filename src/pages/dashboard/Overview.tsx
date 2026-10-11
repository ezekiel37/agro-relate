import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useConnectionRequests, useConnections, useMyProfile } from "@/hooks/use-dashboard";
import RequestCard from "@/components/dashboard/RequestCard";
import {
  Card,
  EmptyState,
  LoadingBlock,
  PageHeader,
} from "@/components/dashboard/shared";
import { primaryButton } from "@/lib/format";
import type { Profile } from "@/lib/api";

const PROFILE_FIELDS: (keyof Profile)[] = ["description", "location", "phone", "website"];

const profileCompleteness = (profile: Profile) => {
  const filled = PROFILE_FIELDS.filter((field) => !!profile[field]).length;
  const hasProducts = profile.products?.length > 0 ? 1 : 0;
  return Math.round(((filled + hasProducts) / (PROFILE_FIELDS.length + 1)) * 100);
};

const Stat: React.FC<{
  label: string;
  value?: number;
  icon: React.ElementType;
  to: string;
}> = ({ label, value, icon: Icon, to }) => (
  <Link to={to} className="block">
    <Card className="h-full p-3 transition-shadow hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-1 text-gray-500">
        <span className="text-[11px] font-medium leading-tight sm:text-xs">{label}</span>
        <Icon className="hidden h-4 w-4 shrink-0 sm:block" />
      </div>
      <p className="mt-2 text-xl font-600 text-gray-800 sm:text-2xl">{value ?? "–"}</p>
    </Card>
  </Link>
);

const Overview: React.FC = () => {
  const { user } = useAuth();
  const profile = useMyProfile();
  const received = useConnectionRequests("received", "pending");
  const sent = useConnectionRequests("sent", "pending");
  const connections = useConnections();
  const firstName = user?.name?.split(" ")[0];

  return (
    <>
      <PageHeader
        title={`Welcome back, ${firstName ?? "there"}`}
        description="Here's what's happening with your AgroRelate network."
      />

      {profile.isLoading ? (
        <LoadingBlock />
      ) : !profile.data ? (
        <Card className="mb-6 border-[#CFFFA0] bg-[#F4FFEA]">
          <p className="text-sm font-600 text-[#1E3C14]">Create your profile to get discovered</p>
          <p className="mt-1 text-sm text-gray-600">
            Without a profile, other farmers, buyers and suppliers can't find you or send you
            connection requests.
          </p>
          <Button asChild className={`mt-4 ${primaryButton}`}>
            <Link to="/dashboard/profile">Create profile</Link>
          </Button>
        </Card>
      ) : profileCompleteness(profile.data) < 100 ? (
        <Card className="mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-600 text-gray-700">Profile completeness</span>
            <span className="text-gray-500">{profileCompleteness(profile.data)}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-gray-100">
            <div
              className="h-1.5 rounded-full bg-[#1E3C14]"
              style={{ width: `${profileCompleteness(profile.data)}%` }}
            />
          </div>
          <Link
            to="/dashboard/profile"
            className="mt-3 inline-flex items-center gap-1 text-xs font-600 text-[#1E3C14]"
          >
            Complete your profile <ArrowRight className="h-3 w-3" />
          </Link>
        </Card>
      ) : null}

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <Stat
          label="Connections"
          value={connections.data?.pagination?.totalItems}
          icon={Users}
          to="/dashboard/connections?tab=connected"
        />
        <Stat
          label="Requests to review"
          value={received.data?.pagination?.totalItems}
          icon={Clock}
          to="/dashboard/connections?tab=received"
        />
        <Stat
          label="Awaiting reply"
          value={sent.data?.pagination?.totalItems}
          icon={Send}
          to="/dashboard/connections?tab=sent"
        />
      </div>

      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-600 text-gray-800">Requests to review</h2>
          <Link to="/dashboard/connections?tab=received" className="text-xs text-gray-500 hover:text-gray-800">
            View all
          </Link>
        </div>
        {received.isLoading ? (
          <LoadingBlock />
        ) : received.data?.requests.length ? (
          <div className="space-y-3">
            {received.data.requests.slice(0, 3).map((request) => (
              <RequestCard key={request.id} request={request} direction="received" />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No pending requests"
            description="Find farmers, buyers and suppliers to connect with."
            action={
              <Button asChild size="sm" className={primaryButton}>
                <Link to="/dashboard/discover">Discover people</Link>
              </Button>
            }
          />
        )}
      </section>
    </>
  );
};

export default Overview;
