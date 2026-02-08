import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/marketing/Newsletter";
import { Leaf, Sprout, Tractor } from "lucide-react";

const Farmers: React.FC = () => {
  const benefits = [
    {
      title: "Access to Financing",
      description:
        "Secure loan and investments tailored to your farming needs, enabling you to expand your operations and invest i n new technologies.",
      icon: Leaf,
    },
    {
      title: "Training and Education",
      description:
        "Participate in workshops and training programs led by industry experts, covering topics from sustainable farming to financial management.",
      icon: Sprout,
    },
    {
      title: "Modern Farming Approach",
      description:
        "Implement cutting-edge techniques and technologies, such as precision agriculture and efficient irrigation, to maximize yields and minimize waste.",
      icon: Tractor,
    },
  ];

  const stories = [
    {
      title: "From struggle to success: The Story of Adamu",
      description:
        "Adamu, a small-scale farmer, transformed his struggling farm into a thriving enterprise with AgroRelate’s financial support and training.",
      image: "/images/woman.png",
    },
    {
      title: "Harvesting Dreams: The journey of Chigozie",
      description:
        "Chigozie, a young farmer, doubled his crop yield and income by adopting modern farming techniques learned through our platform.",
      image: "/images/man.png",
    },
    {
      title: "Mechanized Farming:  The transformation of Oluwatosin",
      description:
        "Tosin, a seasoned farmer, modernized his operations with new equipment and technologies, leading to significant efficiency, gains and increased profitability.",
      image: "/images/photorealistic.png",
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
                src="/images/kenyanfood.png"
                alt="Farming landscape"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="text-lg font-600 sm:text-xl md:text-2xl">
                  Empowering Farmers, Cultivating Success
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-white/90 sm:text-sm">
                  AgroRelate provides farmers with access to capital, expertise,
                  and connections needed to grow sustainably.
                </p>
                <Button className="mt-4 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h2 className="text-xs font-600 uppercase tracking-wide text-gray-500">
            Benefit for Farmers
          </h2>
          <h3 className="mt-2 text-base font-600 text-gray-800">
            How AgroRelate Helps You Grow
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:h-[215px] sm:w-[310px]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F4D9] text-[#1E3C14]">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-sm font-600 text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 text-[11px] font-normal text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h3 className="text-sm font-600 text-gray-800">Farmer Success Stories</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-sm font-600 text-gray-800">
                    {story.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-500">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-12 px-4 text-center max-w-5xl">
          <h2 className="text-base font-600 text-gray-800">
            Ready to Take Your Farm to the Next Level?
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Join our platform today and access funding and resources for growth.
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-[#1E3C14] px-8 text-xs text-white hover:bg-[#162B0E]"
          >
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

export default Farmers;
