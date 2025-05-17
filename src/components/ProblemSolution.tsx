
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ProblemCard: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    {imageSrc && (
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-agrogreen-dark mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const SolutionCard: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    {imageSrc && (
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-agrogreen mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ProblemSolution: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-agrogreen-dark text-white" id="problem">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Problem:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProblemCard
              title="Lack of Funding"
              description="70% of smallholder farmers in Nigeria lack access to affordable, timely funding."
              imageSrc="/images/woman.png"
            />

            <ProblemCard
              title="Investor's Hesitation"
              description="Investors find distinct lack structured trustworthy access to high-impact agricultural projects."
              imageSrc="/images/man.png"
            />

            <ProblemCard
              title="Financial Aversion"
              description="Traditional financial institutions avoid small-scale agriculture due to perceived risk."
              imageSrc="/images/bank.png"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-agrogreen-dark text-white" id="solution">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Solution:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionCard
              title="Vetting System"
              description="KYC, location verification & farmer's records."
              imageSrc="/images/shake.png"
            />

            <SolutionCard
              title="Profit-sharing models"
              description="Fixed-returns options for both parties."
              imageSrc="/images/3dchart.png"
            />

            <SolutionCard
              title="Transparent Reporting"
              description="Monitoring tools for investors."
              imageSrc="/images/trend.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
