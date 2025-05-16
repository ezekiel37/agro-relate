
import React from 'react';
import { Circle } from 'lucide-react';

interface MilestoneProps {
  number: number;
  title: string;
  isActive?: boolean;
}

const Milestone: React.FC<MilestoneProps> = ({ number, title, isActive = false }) => (
  <div className="flex items-center mb-14">
    <div className={`flex items-center justify-center w-14 h-14 rounded-full ${isActive ? 'bg-agrogreen-dark' : 'bg-gray-300'} text-white font-bold text-xl`}>
      {number}
    </div>
    <div className="ml-4 text-lg">{title}</div>
  </div>
);

const Traction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="traction">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-12">
          Traction & Next Steps
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-7 top-7 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Milestones */}
            <Milestone number={1} title="MVP Completed" isActive={true} />
            <Milestone number={2} title="50+ Farmers Onboarding" isActive={true} />
            <Milestone number={3} title="Fields Partnerships Initiated" isActive={true} />
            <Milestone number={4} title="Fund Raising" isActive={true} />
          </div>
          
          <p className="text-gray-700 mt-6">
            Platform completion, user acquisition, payment integration are underway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Traction;
