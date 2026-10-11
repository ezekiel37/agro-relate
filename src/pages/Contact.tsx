import React from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/marketing/Newsletter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import FieldError from "@/components/auth/FieldError";
import TextField from "@/components/auth/TextField";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ApiError, sendContactMessage } from "@/lib/api";
import { ContactValues, contactSchema } from "@/lib/validation";
import { cn } from "@/lib/utils";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const onSubmit = async (values: ContactValues) => {
    try {
      await sendContactMessage({ ...values, subject: values.subject || undefined });
      toast.success("Message sent. We'll get back to you shortly.");
      reset();
    } catch (err) {
      setError("root", {
        message:
          err instanceof ApiError ? err.message : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto max-w-5xl px-4 pb-16 pt-10">
        <div className="max-w-4xl">
          <h1 className="text-base font-600 text-gray-800">Contact Us</h1>
          <p className="mt-2 text-xs text-gray-500">
            We are here to listen. Reach out for help or collaboration and we
            will reply shortly.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField
                id="contact-name"
                label="Full Name"
                placeholder="Enter your full name"
                autoComplete="name"
                error={errors.name?.message}
                {...register("name")}
              />
              <TextField
                id="contact-email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
              />
              <TextField
                id="contact-subject"
                label="Subject"
                placeholder="Enter subject"
                error={errors.subject?.message}
                {...register("subject")}
              />
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm text-gray-700">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Type your message"
                  aria-invalid={!!errors.message}
                  className={cn(
                    "min-h-[120px] rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400",
                    errors.message && "border-red-500 focus-visible:border-red-500"
                  )}
                  {...register("message")}
                />
                <FieldError message={errors.message?.message} />
              </div>

              <FieldError message={errors.root?.message} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E3C14] text-xs text-white hover:bg-[#162B0E]"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-600 text-gray-800">Contact Information</h2>
            <div className="mt-4 space-y-3 text-xs text-gray-500">
              <div>
                <p className="font-600 text-gray-700">Email Address</p>
                <p>agrorelate93@gmail.com</p>
              </div>
              <div>
                <p className="font-600 text-gray-700">Phone Number</p>
                <p>+123 456 789</p>
              </div>
              <div>
                <p className="font-600 text-gray-700">Location</p>
                <p>Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
    </div>
  );
};

export default Contact;
