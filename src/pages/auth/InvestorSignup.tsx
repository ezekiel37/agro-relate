import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InvestorSignup: React.FC = () => {
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
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="investor-fullname" className="text-sm text-gray-700">
                Full Name
              </label>
              <Input
                id="investor-fullname"
                placeholder="Enter your first and last name"
                className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="investor-email" className="text-sm text-gray-700">
                Email Address
              </label>
              <Input
                id="investor-email"
                type="email"
                placeholder="Enter your email address"
                className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <PasswordInput
              id="investor-password"
              label="Password"
              placeholder="Create a password"
            />

            <PasswordInput
              id="investor-confirm-password"
              label="Confirm Password"
              placeholder="Confirm your password"
            />

            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-gray-500">
                Password Strength
              </span>
              <div className="h-0.5 w-full rounded-full bg-gray-200">
                <div className="h-0.5 w-24 rounded-full bg-gray-800" />
              </div>
            </div>

            <label className="flex items-start gap-2 text-[11px] text-gray-500">
              <input
                type="checkbox"
                className="mt-0.5 h-3 w-3 rounded border-gray-300 text-agrogreen-dark"
              />
              <span>
                I agree with the{" "}
                <span className="text-gray-700">Terms of Service</span> and{" "}
                <span className="text-gray-700">Privacy Policy</span>
              </span>
            </label>

            <Button className="mt-2 w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
              Sign Up
            </Button>
          </form>

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
