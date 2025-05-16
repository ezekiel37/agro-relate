
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agrogreen-dark mb-6 animate-fade-in">
            Introducing AgroRelate
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 animate-fade-in">
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
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
