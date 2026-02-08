import React from "react";
import { Link } from "react-router-dom";
import AuthShell from "@/components/auth/AuthShell";

const Welcome: React.FC = () => {
  return (
    <AuthShell showShapes={false}>
      <div className="w-full max-w-md text-center">
        <h1 className="text-lg sm:text-xl font-600 text-agrogreen-dark">
          Welcome to AgroRelate
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          Choose your path to connect with profitable agricultural opportunities
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/signup/farmer"
            className="rounded-full bg-[#1E3C14] px-6 py-2 text-xs sm:text-sm font-medium text-white shadow-sm"
          >
            I'm a Farmer
          </Link>
          <Link
            to="/signup/investor"
            className="rounded-full bg-[#D9DED5] px-6 py-2 text-xs sm:text-sm font-medium text-[#5F665D]"
          >
            I'm an Investor
          </Link>
        </div>

        <p className="mt-5 text-xs text-gray-500">
          Already have an account?
          <Link to="/login" className="ml-1 font-600 text-agrogreen-dark">
            Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
};

export default Welcome;
