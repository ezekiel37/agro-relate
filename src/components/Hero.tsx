// Hero Component
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
    className="relative w-full h-[1000px] flex items-center" // taller than 16/9
    style={{ 
      backgroundImage: "url('/images/onboardimage.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
    }}
  >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-start justify-start h-full pt-[200px]"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-600 text-white mb-8 leading-tight text-left">
            Empowering Nigerian Farmers.<br />
            Profiting Impactful Investors.
          </h1>

          <div className="mb-12 pt-6 text-white text-lg opacity-80 text-left max-w-xl">
            <p>
              Bridging farmers & investors for scalable agribusiness in Nigeria's undercapitalized agriculture sector. Connecting smallholder and medium-scale farmers with accessible, transparent, and profitable financing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-[100px] justify-start items-start">
            <Button
              asChild
              className="bg-white text-gray-800 hover:bg-gray-100 text-lg py-[25px] px-8 font-medium rounded-md transition-colors shadow-lg"
            >
              <Link to="/welcome">Get Started</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-[#142600] to-[#4A8C00] text-white border border-white text-lg py-6 pl-8 pr-[68px] font-medium rounded-md transition-colors shadow-lg"
            >
              <Link to="/signup/investor">Invest in Agriculture</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
