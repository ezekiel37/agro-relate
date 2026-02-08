import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/marketing/Newsletter";
import { BarChart3, Globe, ShieldCheck } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Investors: React.FC = () => {
  const benefits = [
    {
      title: "Competitive Returns",
      description:
        "Earn attractive returns on your investments while supporting local farmers and sustainable agricultural practices.",
      icon: BarChart3,
    },
    {
      title: "Social Impact",
      description:
        "Contribute to a more sustainable food system and empower farming communities through your investments.",
      icon: Globe,
    },
    {
      title: "Portfolio Diversification",
      description:
        "Diversify your investment portfolio with a unique asset class that is less correlated with traditional markets.",
      icon: ShieldCheck,
    },
  ];

  const opportunities = [
    {
      title: "From struggle to success: The Story of Adamu",
      description:
        "Adamu, a small-scale farmer, transformed his struggling farm into a thriving enterprise with AgroRelate’s financial support and training.",
      image: "/images/onboardimage.png",
    },
    {
      title: "Harvesting Dreams: The journey of Chigozie",
      description:
        "Chigozie, a young farmer, doubled his crop yield and income by adopting modern farming techniques learned through our platform.",
      image: "/images/smilefull.jpg",
    },
    {
      title: "Mechanized Farming:  The transformation of Oluwatosin",
      description:
        "Tosin, a seasoned farmer, modernized his operations with new equipment and technologies, leading to significant efficiency, gains and increased profitability.",
      image: "/images/photorealistic.png",
    },
  ];

  const commitments = [
    {
      title: "Secure Investments",
      description:
        "We verify farmers and structure milestone-based disbursement plans.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Process",
      description:
        "Track projects in real time with reporting and clear milestones.",
      icon: BarChart3,
    },
    {
      title: "Global Impact",
      description:
        "Your capital helps strengthen food systems and rural livelihoods.",
      icon: Globe,
    },
  ];

  const metrics = [
    { label: "Farmers Supported", value: "150+", width: "70%" },
    { label: "Projects Funded", value: "60+", width: "55%" },
    { label: "Jobs Created", value: "1,200+", width: "80%" },
  ];

  const chartData = [
    { month: "Jan", value: 12, baseline: 9 },
    { month: "Feb", value: 16, baseline: 12 },
    { month: "Mar", value: 14, baseline: 11 },
    { month: "Apr", value: 20, baseline: 15 },
    { month: "May", value: 18, baseline: 14 },
    { month: "Jun", value: 24, baseline: 18 },
    { month: "Jul", value: 22, baseline: 17 },
    { month: "Aug", value: 28, baseline: 21 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pb-16">
        <section className="px-4 pt-8">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/onboardimage.png"
                alt="Farming fields"
                className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="text-lg font-600 sm:text-xl md:text-2xl">
                  Invest in the Future of Farming
                </h1>
                <p className="mt-2 max-w-2xl text-xs text-white/90 sm:text-sm">
                  Support sustainable agriculture while growing a resilient and
                  profitable investment portfolio.
                </p>
                <Button className="mt-4 rounded-full bg-[#1E3C14] px-6 text-xs text-white hover:bg-[#162B0E]">
                  Explore Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h2 className="text-xs font-600 uppercase tracking-wide text-gray-500">
            Why Invest with AgroRelate?
          </h2>
          <h3 className="mt-2 text-base font-600 text-gray-800">
            Benefits for Investors
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm sm:h-[215px] sm:w-[310px]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F4D9] text-[#1E3C14]">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h4 className="text-[16px] leading-none font-600 text-gray-800">
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
          <h3 className="text-sm font-600 text-gray-800">
            Investment Opportunities
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-[16px] leading-none font-600 text-gray-800">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[11px] font-normal text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h3 className="text-sm font-600 text-gray-800">
            Financial Performance & Impact
          </h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Total Investment Growth</p>
                  <p className="text-lg font-600 text-gray-800">+8.5%</p>
                </div>
                <span className="text-xs text-green-600">Last 12 months</span>
              </div>
              <div className="mt-4 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" hide />
                    <YAxis hide domain={["dataMin - 4", "dataMax + 4"]} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#E5E7EB",
                        fontSize: "12px",
                      }}
                      labelStyle={{ fontSize: "11px" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#1E3C14"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="baseline"
                      stroke="#B8D3A2"
                      strokeWidth={2}
                      dot={false}
                      strokeDasharray="4 4"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">Capital Impact</p>
              <div className="mt-4 space-y-4">
                {metrics.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{item.label}</span>
                      <span className="font-600 text-gray-800">{item.value}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
                      <div
                        className="h-1.5 rounded-full bg-[#1E3C14]"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-10 px-4 max-w-5xl">
          <h3 className="text-sm font-600 text-gray-800">
            Our Commitment to You
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {commitments.map((item) => (
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
                <p className="mt-2 text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-12 px-4 text-center max-w-5xl">
          <h2 className="text-base font-600 text-gray-800">Stay Updated</h2>
          <p className="mt-2 text-xs text-gray-500">
            Be the first to receive updates on new opportunities and platform
            insights.
          </p>
          <Button
            asChild
            className="mt-4 rounded-full bg-[#1E3C14] px-8 text-xs text-white hover:bg-[#162B0E]"
          >
            <Link to="/welcome">Get Started</Link>
          </Button>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <Newsletter
            title="Stay Updated"
            description="Join our investor list for curated opportunities and performance insights."
            buttonLabel="Subscribe"
          />
        </section>
      </main>
    </div>
  );
};

export default Investors;
