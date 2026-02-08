import React from "react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/marketing/Newsletter";
import { Button } from "@/components/ui/button";
import { Leaf, Handshake, ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      title: "Sustainability",
      description:
        "We are committed to providing environmentally responsible farming practices.",
      icon: Leaf,
    },
    {
      title: "Partnership",
      description:
        "We foster strong relationships between farmers and investors based on mutual trust.",
      icon: Handshake,
    },
    {
      title: "Transparency",
      description:
        "We operate clear and open processes so everyone understands the journey.",
      icon: ShieldCheck,
    },
  ];

  const team = [
    { name: "Adewale Adeyinka", role: "Co-Founder", image: "/images/man.png" },
    { name: "Adewale Adeyinka", role: "Co-Founder", image: "/images/woman.png" },
    { name: "Rose Adeyinka", role: "CTO", image: "/images/african-man.png" },
    { name: "Adewale Adeyinka", role: "COO", image: "/images/photorealistic.png" },
    { name: "Adewale Adeyinka", role: "CFO", image: "/images/smilefull.jpg" },
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
                alt="About AgroRelate"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="text-lg font-600 sm:text-xl md:text-2xl">
                  About AgroRelate
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-white/90 sm:text-sm">
                  Bridging the gap between farmers and investors to enable profitable
                  financing and sustainable growth.
                </p>
                <Button className="mt-4 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h2 className="text-sm font-600 text-gray-800">Our Mission</h2>
          <p className="mt-2 text-xs text-gray-500 leading-relaxed">
            AgroRelate's mission is to empower farmers with the financial resources
            they need to thrive while providing investors with opportunities to
            support sustainable agriculture and create returns. We believe in the
            power of collaboration to build a more resilient and prosperous
            agricultural sector.
          </p>
        </section>

        <section className="container mx-auto mt-8 px-4 max-w-5xl">
          <h2 className="text-sm font-600 text-gray-800">Our Values</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:h-[215px] sm:w-[310px]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F4D9] text-[#1E3C14]">
                  <item.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-sm font-600 text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-8 px-4 max-w-5xl">
          <h2 className="text-sm font-600 text-gray-800">Our Team</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs font-600 text-gray-700">
                  {member.name}
                </p>
                <p className="text-[11px] text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <Newsletter
            title="Subscribe to our newsletter"
            description="Stay informed with platform updates, success stories, and new investment opportunities."
            buttonLabel="Get updates"
            helperText="Thank you for subscribing."
          />
        </section>
      </main>
    </div>
  );
};

export default About;
