
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Introducing AgroRelate
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 animate-fade-in">
            Bridging farmers & investors for scalable agribusiness in Nigeria's undercapitalized agriculture sector.
            Connecting smallholder and medium-scale farmers with accessible, transparent, and profitable financing.
          </p>
          <Button
            className="bg-agrogreen-light text-agrogreen-dark hover:bg-agrogreen hover:text-white text-lg py-6 px-10 font-medium rounded-md transition-colors animate-fade-up"
          >
            Get Started
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
