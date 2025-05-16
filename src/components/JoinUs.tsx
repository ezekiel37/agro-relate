
import React from 'react';
import { Button } from "@/components/ui/button";

const JoinUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-agrogreen-dark text-white" id="join-us">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Join Us
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We invite partners, investors, and stakeholders to co-create a sustainable future where agriculture is profitable, scalable and investable.
        </p>
        
        <Button className="bg-agrogreen-light text-agrogreen-dark hover:bg-white hover:text-agrogreen-dark text-lg py-6 px-10 font-medium rounded-md transition-colors mb-10">
          Get Started
        </Button>
        
        <p className="text-lg">
          Contact us: agrorelate93@gmail.com | @AgroRelate
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
