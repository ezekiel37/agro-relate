
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  subtitle?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, subtitle }) => (
  <div className="text-left">
    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 leading-tight">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
    {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section - Title and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Why Choose Agro-Relate as a Farmer & as an Investor?
            </h2>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/kenyanfood.png"
              alt="Modern greenhouse with farmers working"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* Bottom section - Three benefit cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="Access Funding, boost productivity, receive experts guidance."
            description="As a farmer, we help you with easy fund accessibility and guidance on how to achieve optimum productivity."
          />

          <BenefitCard
            title="Attractive returns (15-30%) and contributing to food security."
            description="Choosing us as your investment platform guarantees an annual return of 15-30%."
          />

          <BenefitCard
            title="Enable scalable agriculture, reduce poverty, & drive financial inclusion."
            description="AgroRelate helps to reduce rural poverty and drives financial inclusion for the nation as a whole."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
