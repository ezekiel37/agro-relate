
import React from 'react';

interface ConcernCardProps {
  title: string;
  description: string;
}

const ConcernCard: React.FC<ConcernCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 bg-agrogreen-light/20 rounded-full mb-4 mx-auto"></div>
    <h3 className="text-xl font-bold text-agrogreen-dark mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center text-sm">{description}</p>
  </div>
);

const KeyConcerns: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="key-concerns">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-16">
          Addressing Key Concerns
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ConcernCard 
            title="Farmer vetting & Investment protection" 
            description="Digital KYC, extension agents report, cooperatives, Milestone-based disbursement, insurance."
          />
          
          <ConcernCard 
            title="Expected Returns" 
            description="15-30% annually based on risk category."
          />
          
          <ConcernCard 
            title="Legal considerations" 
            description="Platform operator, legal advisory, SEC compliance."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyConcerns;
