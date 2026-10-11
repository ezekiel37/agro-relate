import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordStrength from "@/components/auth/PasswordStrength";
import { Button } from "@/components/ui/button";
import { NewPasswordValues, newPasswordSchema } from "@/lib/validation";

const NewPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPasswordValues>({ resolver: zodResolver(newPasswordSchema), mode: "onTouched" });

  // The backend has no reset-by-token endpoint yet, so there is nothing to call.
  const onSubmit = () => {
    toast.info("Password reset isn't available yet. Please contact agrorelate93@gmail.com.");
  };

  return (
    <AuthShell topLabel="Reset Password" tone="soft" backTo="/login">
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

          <form
            className="mt-4 space-y-4 text-left"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <PasswordInput
              id="new-password"
              label="New Password"
              placeholder="Enter your new password"
              autoComplete="new-password"
              error={errors.password?.message}
              {...register("password")}
            />
            <PasswordInput
              id="confirm-new-password"
              label="Confirm New Password"
              placeholder="Confirm your new password"
              autoComplete="new-password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <PasswordStrength password={watch("password") ?? ""} />

            <Button type="submit" className="w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
              Set New Password
            </Button>
          </form>
        </div>
      </div>
    </AuthShell>
  );
};

export default NewPassword;
