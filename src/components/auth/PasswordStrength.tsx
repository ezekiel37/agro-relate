import React from "react";
import { passwordStrength } from "@/lib/validation";

const LEVELS = [
  { label: "Too weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-red-500" },
  { label: "Fair", color: "bg-yellow-500" },
  { label: "Good", color: "bg-lime-600" },
  { label: "Strong", color: "bg-[#1E3C14]" },
];

const PasswordStrength: React.FC<{ password: string }> = ({ password }) => {
  const score = passwordStrength(password);
  const level = LEVELS[score];

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[11px] font-semibold text-gray-500">
        <span>Password Strength</span>
        {password ? <span>{level.label}</span> : null}
      </div>
      <div className="h-1 w-full rounded-full bg-gray-200">
        <div
          className={`h-1 rounded-full transition-all ${level.color}`}
          style={{ width: `${password ? Math.max(score, 1) * 25 : 0}%` }}
        />
      </div>
    </div>
  );
};

export default PasswordStrength;
