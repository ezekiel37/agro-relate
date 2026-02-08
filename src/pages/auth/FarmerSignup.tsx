import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FarmerSignup: React.FC = () => {
  return (
    <AuthShell backTo="/welcome">
      <div className="w-full max-w-[460px]">
        <div className="text-center">
          <h1 className="text-lg sm:text-xl font-600 text-gray-700">
            Join AgroRelate as a Farmer
          </h1>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-center text-base font-600 text-gray-700 mb-6">
            Sign Up
          </h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="farmer-fullname" className="text-sm text-gray-700">
                Full Name
              </label>
              <Input
                id="farmer-fullname"
                placeholder="Enter your first and last name"
                className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="farmer-email" className="text-sm text-gray-700">
                Email Address
              </label>
              <Input
                id="farmer-email"
                type="email"
                placeholder="Enter your email address"
                className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <PasswordInput
              id="farmer-password"
              label="Password"
              placeholder="Create a password"
            />

            <PasswordInput
              id="farmer-confirm-password"
              label="Confirm Password"
              placeholder="Confirm your password"
            />

            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-gray-500">
                Password Strength
              </span>
              <div className="h-0.5 w-full rounded-full bg-gray-200">
                <div className="h-0.5 w-20 rounded-full bg-gray-800" />
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

export default FarmerSignup;
