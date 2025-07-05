import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ProblemCard: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg h-[420px] overflow-hidden shadow-md w-full hover:shadow-lg transition-shadow">
    {imageSrc && (
      <div className="h-64  bg-gray-200 overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6 mt-4">
      <h3 className="text-xl font-600 text-[#000000] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const SolutionCard: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg h-[420px] overflow-hidden w-full shadow-md hover:shadow-lg transition-shadow">
    {imageSrc && (
      <div className="h-64 bg-gray-200 overflow-hidden">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6 mt-4">
      <h3 className="text-xl font-600 text-[#000000] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ProblemSolution: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 text-white" id="problem">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-agrogreen-dark md:text-4xl font-600 text-center mb-16">
            The Problem:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
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

      <section className="py-16 md:py-24  text-white" id="solution">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-agrogreen-dark md:text-4xl font-600 text-center mb-16">
            The Solution:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
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
