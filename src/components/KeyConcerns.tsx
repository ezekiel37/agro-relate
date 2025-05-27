
import React from 'react';

interface ConcernCardProps {
  title: string;
  description: string;
}

const ConcernCard: React.FC<ConcernCardProps> = ({ title, description }) => (
  <div className="text-left">
    <h3 className="text-xl font-bold text-[#000000] mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const KeyConcerns: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="key-concerns">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-12">
              Addressing Key<br />Concerns
            </h2>
          </div>
          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/legal.png"
              alt="Modern greenhouse with farmers working"
              className="w-2xl max-w-lg rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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



