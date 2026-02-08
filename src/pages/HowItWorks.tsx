import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/marketing/Newsletter";

const HowItWorks: React.FC = () => {
  const farmerSteps = [
    {
      title: "Apply for Funding",
      description:
        "Submit your project details and goals to get matched with the right investors.",
    },
    {
      title: "Get Approved",
      description:
        "Our team verifies your farm plan, documents, and milestones for approval.",
    },
    {
      title: "Grow Your Farm",
      description:
        "Receive funding, expand operations, and share progress with investors.",
    },
  ];

  const investorSteps = [
    {
      title: "Browse Projects",
      description:
        "Explore a variety of agricultural projects aligned with your goals.",
    },
    {
      title: "Invest Securely",
      description:
        "Fund vetted farmers through a secure and transparent process.",
    },
    {
      title: "Track Your Returns",
      description:
        "Monitor project performance and track your investment results.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pb-16">
        <section className="px-4 pt-8">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/banner.png"
                alt="Farm landscape"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="text-lg font-600 sm:text-xl md:text-2xl">
                  Bridging The Gap Between Farmers and Investors
                  <br className="hidden sm:block" /> For Profitable Financing.
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-white/90 sm:text-sm">
                  Our platform connects promising farmers with trusted investors,
                  creating win-win opportunities for sustainable agriculture growth.
                </p>
                <Button className="mt-4 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
                  Explore Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h2 className="text-base font-600 text-gray-800">How It Works</h2>

          <div className="mt-6">
            <h3 className="text-xs font-600 uppercase tracking-wide text-gray-500">
              For Farmers
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {farmerSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:h-[215px] sm:w-[310px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4D9] text-xs font-600 text-[#1E3C14]">
                      {index + 1}
                    </span>
                    <h4 className="text-sm font-600 text-gray-800">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-600 uppercase tracking-wide text-gray-500">
              For Investors
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {investorSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:h-[215px] sm:w-[310px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4D9] text-xs font-600 text-[#1E3C14]">
                      {index + 1}
                    </span>
                    <h4 className="text-sm font-600 text-gray-800">
                      {step.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-12 px-4 text-center max-w-5xl">
          <h2 className="text-base font-600 text-gray-800">
            Ready to Invest in the Future of Agriculture?
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Join our platform today and start building a profitable, impactful
            portfolio in agriculture.
          </p>
          <Button asChild className="mt-4 rounded-full bg-[#1E3C14] px-8 text-xs text-white hover:bg-[#162B0E]">
            <Link to="/welcome">Get Started</Link>
          </Button>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <Newsletter />
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
