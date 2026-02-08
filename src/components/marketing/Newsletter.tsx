import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  helperText?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Subscribe to our newsletter",
  description = "Get monthly updates on investment opportunities, platform tips, and success stories.",
  buttonLabel = "Get Started",
  helperText = "Thank you for subscribing.",
}) => {
  return (
    <section className="mt-12 border-t border-gray-100 pt-8">
      <div className="max-w-xl">
        <h3 className="text-sm font-600 text-gray-800">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="Enter your email address"
            className="h-9 rounded-full border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
          />
          <Button className="h-9 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
            {buttonLabel}
          </Button>
        </div>
        <p className="mt-2 text-[11px] text-gray-400">{helperText}</p>
      </div>
    </section>
  );
};

export default Newsletter;
