import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthShellProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  showShapes?: boolean;
  topLabel?: string;
  tone?: "white" | "soft";
  backTo?: string;
  backLabel?: string;
}

const AuthShell: React.FC<AuthShellProps> = ({
  children,
  className,
  contentClassName,
  showShapes = true,
  topLabel,
  tone = "white",
  backTo,
  backLabel = "Back",
}) => {
  const backgroundClass = tone === "soft" ? "bg-[#f0f0f0]" : "bg-white";

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        backgroundClass,
        className
      )}
    >
      {backTo ? (
        <Link
          to={backTo}
          className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      ) : null}

      {topLabel ? (
        <div className="absolute left-6 top-6 text-sm text-gray-400">
          {topLabel}
        </div>
      ) : null}

      {showShapes ? (
        <>
          <div className="pointer-events-none absolute left-[-150px] top-[58%] h-24 w-[360px] -translate-y-1/2 -rotate-12 rounded-full bg-gradient-to-r from-[#CFFFA0] to-[#E8FFD4] sm:h-28 sm:w-[440px]" />
          <div className="pointer-events-none absolute right-[-150px] top-[45%] h-24 w-[360px] -translate-y-1/2 rotate-12 rounded-full bg-gradient-to-r from-[#7CB33D] via-[#4D7E25] to-[#1E3C14] sm:h-28 sm:w-[440px]" />
        </>
      ) : null}

      <div
        className={cn(
          "relative z-10 flex min-h-screen items-center justify-center px-4 py-16",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthShell;
