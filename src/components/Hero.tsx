// Hero Component
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[968px] w-full bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('/images/banner.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Empowering Nigerian Farmers.<br />
            Profiting Impactful Investors.
          </h1>

          <div className="space-y-4 mb-12 text-white text-lg md:text-xl max-w-3xl mx-auto opacity-70">
            <p>
              Bridging farmers & investors for scalable agribusiness in Nigeria's undercapitalized agriculture sector.
            </p>
            <p>
              Connecting smallholder and medium-scale farmers with accessible, transparent, and profitable financing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-28 justify-center items-center">
            <Button
              className="bg-white text-gray-800 hover:bg-gray-100 text-lg py-4 px-8 font-medium rounded-full transition-colors shadow-lg"
            >
              Get Started As a Farmer
            </Button>
            <Button
              className="bg-[#A8C585B2] text-white hover:bg-green-700 text-lg py-4 px-8 font-medium rounded-full transition-colors shadow-lg"
            >
              Invest in Agriculture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;