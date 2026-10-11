import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";
import { register, setToken } from "@/lib/api";
import { SignupValues } from "@/lib/validation";

const FarmerSignup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = async ({ name, email, password }: SignupValues) => {
    const { token } = await register({ name, email, password, role: "farmer" });
    setToken(token);
    toast.success("Account created. Welcome to AgroRelate!");
    navigate("/");
  };

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

          <SignupForm idPrefix="farmer" onSubmit={handleSignup} />

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
