import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import FieldError from "@/components/auth/FieldError";
import PasswordInput from "@/components/auth/PasswordInput";
import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ApiError, login } from "@/lib/api";
import { LoginValues, loginSchema } from "@/lib/validation";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const redirectTo = (location.state as { from?: string } | null)?.from ?? "/dashboard";
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema), mode: "onTouched" });

  const onSubmit = async (values: LoginValues) => {
    try {
      const { token, user } = await login(values);
      signIn(token, user);
      toast.success(`Welcome back, ${user.name}!`);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError("root", {
        message:
          err instanceof ApiError ? err.message : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <AuthShell backTo="/welcome">
      <div className="w-full max-w-[420px]">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-center text-base font-600 text-gray-700 mb-6">
            Welcome back!
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              id="login-email"
              label="Email Address"
              type="email"
              placeholder="xyz@gmail.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <PasswordInput
              id="login-password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="text-right">
              <Link to="/reset-password" className="text-xs text-gray-500 hover:text-gray-700">
                Forgot password?
              </Link>
            </div>

            <FieldError message={errors.root?.message} />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Don't have an account yet?
            <Link to="/welcome" className="ml-1 font-600 text-agrogreen-dark">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  );
};

export default Login;
