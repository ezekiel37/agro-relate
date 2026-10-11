import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";

const InvestorSignup: React.FC = () => {
  // The backend has no "investor" role yet (only farmer/buyer/supplier), so
  // we validate the form but don't create an account until it does.
  const handleSignup = async () => {
    toast.info("Investor sign-up is coming soon. We'll be in touch!");
  };

  return (
    <AuthShell backTo="/welcome">
      <div className="w-full max-w-[520px]">
        <div className="text-center">
          <h1 className="text-lg sm:text-xl font-600 text-gray-800">
            Invest in the Future of Farming
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Join AgroRelate and connect with farmers seeking funding for
            sustainable and profitable agricultural projects. Start building your
            investment portfolio today.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <SignupForm idPrefix="investor" onSubmit={handleSignup} />

          <p className="mt-4 text-center text-xs text-gray-500">
            Already have an account?
            <Link to="/login" className="ml-1 font-600 text-agrogreen-dark">
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  );
};

export default InvestorSignup;
