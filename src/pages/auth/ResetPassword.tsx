import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import { ResetRequestValues, resetRequestSchema } from "@/lib/validation";

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetRequestValues>({ resolver: zodResolver(resetRequestSchema) });

  // The backend has no forgot-password endpoint yet, so there is nothing to call.
  const onSubmit = () => {
    toast.info("Password reset isn't available yet. Please contact agrorelate93@gmail.com.");
  };

  return (
    <AuthShell topLabel="Reset Password" tone="soft" backTo="/login">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm"
        >
          <TextField
            id="reset-email"
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Button type="submit" className="mt-6 w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
            Send password reset link
          </Button>
        </form>
      </div>
    </AuthShell>
  );
};

export default ResetPassword;
