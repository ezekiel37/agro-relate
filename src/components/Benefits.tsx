
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 bg-agrogreen-light/20 rounded-full flex items-center justify-center mb-6">
      {icon || <div className="w-12 h-12 bg-agrogreen-light rounded-full"></div>}
    </div>
    <h3 className="text-xl font-bold text-agrogreen-dark mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-16">
          Why AgroRelate
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <BenefitCard 
            title="For Farmers" 
            description="Access Funding, boost productivity, receive experts guidance."
          />
          
          <BenefitCard 
            title="For Investors" 
            description="Attractive returns (15-30%) and contributing to food security."
          />
          
          <BenefitCard 
            title="For Nigeria" 
            description="Enable scalable agriculture, reduce rural poverty, drive financial inclusion."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
