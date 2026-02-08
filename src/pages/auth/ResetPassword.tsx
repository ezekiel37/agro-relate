import React from "react";
import AuthShell from "@/components/auth/AuthShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPassword: React.FC = () => {
  return (
    <AuthShell topLabel="Reset Password" tone="soft">
      <div className="w-full max-w-[460px] text-center">
        <img
          src="/images/agrorelate-logo.svg"
          alt="AgroRelate"
          className="mx-auto h-10 w-auto"
        />
        <h1 className="mt-4 text-base font-600 text-gray-700">
          Forgot your password?
        </h1>
        <p className="mt-2 text-xs text-gray-500">
          Enter the email address associated with your account, and we will send
          you a link to reset your password.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm">
          <div className="space-y-2">
            <label htmlFor="reset-email" className="text-sm text-gray-700">
              Email Address
            </label>
            <Input
              id="reset-email"
              type="email"
              placeholder="Enter your email address"
              className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
            />
          </div>

          <Button className="mt-6 w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
            Send password reset link
          </Button>
        </div>
      </div>
    </AuthShell>
  );
};

export default ResetPassword;
