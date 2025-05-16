
import React from 'react';

interface BusinessCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ title, description, color, icon }) => (
  <div className="flex flex-col md:flex-row items-start mb-8">
    <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center mr-4 mb-3 md:mb-0`}>
      <span className="text-white font-bold">{icon}</span>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const BusinessModel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="business-model">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-16">
          Business Model
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <BusinessCard 
              title="Commission" 
              description="Successful funding matches." 
              color="bg-agrogreen-light" 
              icon="$"
            />
          </div>
          
          <div>
            <BusinessCard 
              title="Premium Features" 
              description="Insurance, analytics for enhanced user experience." 
              color="bg-blue-400" 
              icon="+"
            />
          </div>
          
          <div>
            <BusinessCard 
              title="Future Revenue" 
              description="Data services, financial tools, partner integration." 
              color="bg-orange-500" 
              icon="↗"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/placeholder.svg" 
            alt="Business Model Diagram" 
            className="max-w-full h-auto mx-auto rounded-lg shadow-md" 
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
