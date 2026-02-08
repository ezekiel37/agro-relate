import React from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/marketing/Newsletter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
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
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm text-gray-700">
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Enter your full name"
                  className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm text-gray-700">
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm text-gray-700">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  placeholder="Enter subject"
                  className="h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm text-gray-700">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Type your message"
                  className="min-h-[120px] rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>

              <Button className="w-full bg-[#1E3C14] text-xs text-white hover:bg-[#162B0E]">
                Send Message
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
