
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Traction from '@/components/Traction';
import BusinessModel from '@/components/BusinessModel';
import KeyConcerns from '@/components/KeyConcerns';
import ProblemSolution from '@/components/ProblemSolution';
import Benefits from '@/components/Benefits';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import FAQSection from '@/components/FAQSection';
import KeyConcernsSection from '@/components/KeyConcernsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
       <Problem/>
       <Solution />
       <Benefits />
       <BusinessModel />
          <KeyConcernsSection />
       <FAQSection />
    
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
