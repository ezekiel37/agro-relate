import React from "react";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";

const NewPassword: React.FC = () => {
  return (
    <AuthShell topLabel="Reset Password" tone="soft">
      <div className="w-full max-w-[420px] text-center">
        <img
          src="/images/agrorelate-logo.svg"
          alt="AgroRelate"
          className="mx-auto h-10 w-auto"
        />

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-base font-600 text-gray-700">Reset Your Password</h1>
          <p className="mt-1 text-xs text-gray-500">
            Enter your new password below
          </p>

          <form className="mt-4 space-y-4 text-left">
            <PasswordInput
              id="new-password"
              label="New Password"
              placeholder="Enter your new password"
            />
            <PasswordInput
              id="confirm-new-password"
              label="Confirm New Password"
              placeholder="Confirm your new password"
            />

            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-gray-500">
                Password Strength
              </span>
              <div className="h-0.5 w-full rounded-full bg-gray-200">
                <div className="h-0.5 w-16 rounded-full bg-gray-800" />
              </div>
            </div>

            <Button className="w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
              Set New Password
            </Button>
          </form>
        </div>
      </div>
    </AuthShell>
  );
};

export default NewPassword;
