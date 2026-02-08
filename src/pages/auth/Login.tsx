import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  return (
    <AuthShell backTo="/welcome">
      <div className="w-full max-w-[420px]">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-center text-base font-600 text-gray-700 mb-6">
            Welcome back!
          </h1>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="login-email" className="text-sm text-gray-700">
                Email Address
              </label>
              <Input
                id="login-email"
                type="email"
                placeholder="xyz@gmail.com"
                className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <PasswordInput
              id="login-password"
              label="Password"
              placeholder="Enter your password"
            />

            <div className="text-right">
              <Link to="/reset-password" className="text-xs text-gray-500 hover:text-gray-700">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-[#1E3C14] text-white hover:bg-[#162B0E]">
              Login
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
