import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FieldError from "@/components/auth/FieldError";
import { emailSchema } from "@/lib/validation";

const newsletterSchema = z.object({ email: emailSchema });

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Subscribe to our newsletter",
  description = "Get monthly updates on investment opportunities, platform tips, and success stories.",
  buttonLabel = "Get Started",
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof newsletterSchema>>({ resolver: zodResolver(newsletterSchema) });

  // There is no newsletter endpoint in the backend yet; don't claim a subscription happened.
  const onSubmit = () => {
    toast.info("Newsletter sign-up is coming soon.");
    reset();
  };

  return (
    <section className="mt-12 border-t border-gray-100 pt-8">
      <div className="max-w-xl">
        <h3 className="text-sm font-600 text-gray-800">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Input
            type="email"
            aria-label="Email address"
            aria-invalid={!!errors.email}
            placeholder="Enter your email address"
            {...register("email")}
            className="h-9 rounded-full border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
          />
          <Button type="submit" className="h-9 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
            {buttonLabel}
          </Button>
        </form>
        <div className="mt-2">
          <FieldError message={errors.email?.message} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
