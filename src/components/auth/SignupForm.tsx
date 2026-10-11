import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignupValues, signupSchema } from "@/lib/validation";
import { ApiError } from "@/lib/api";
import FieldError from "./FieldError";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import TextField from "./TextField";

interface SignupFormProps {
  idPrefix: string;
  onSubmit: (values: SignupValues) => Promise<void>;
}

const SignupForm: React.FC<SignupFormProps> = ({ idPrefix, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
  });

  const submit = async (values: SignupValues) => {
    try {
      await onSubmit(values);
    } catch (err) {
      if (err instanceof ApiError) {
        for (const { field, message } of err.fieldErrors) {
          if (field === "name" || field === "email" || field === "password") {
            setError(field, { message });
          }
        }
        if (err.status === 409) {
          setError("email", { message: "An account with this email already exists" });
        }
        setError("root", { message: err.message });
      } else {
        setError("root", { message: "Something went wrong. Please try again." });
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(submit)} noValidate>
      <TextField
        id={`${idPrefix}-fullname`}
        label="Full Name"
        placeholder="Enter your first and last name"
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />

      <TextField
        id={`${idPrefix}-email`}
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        id={`${idPrefix}-password`}
        label="Password"
        placeholder="Create a password"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <PasswordInput
        id={`${idPrefix}-confirm-password`}
        label="Confirm Password"
        placeholder="Confirm your password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <PasswordStrength password={watch("password") ?? ""} />

      <div className="space-y-1">
        <label className="flex items-start gap-2 text-[11px] text-gray-500">
          <input
            type="checkbox"
            className="mt-0.5 h-3 w-3 rounded border-gray-300 text-agrogreen-dark"
            {...register("acceptTerms")}
          />
          <span>
            I agree with the{" "}
            <span className="text-gray-700">Terms of Service</span> and{" "}
            <span className="text-gray-700">Privacy Policy</span>
          </span>
        </label>
        <FieldError message={errors.acceptTerms?.message} />
      </div>

      <FieldError message={errors.root?.message} />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignupForm;
