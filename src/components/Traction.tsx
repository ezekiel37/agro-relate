
import React from 'react';

interface MilestoneProps {
  number: number;
  title: string;
  description?: string;
  isCompleted?: boolean;
  isLeft?: boolean;
  showTitleOnLine?: boolean;
}

const Milestone: React.FC<MilestoneProps> = ({
  number,
  title,
  description,
  isCompleted = false,
  isLeft = false,
  showTitleOnLine = false
}) => (
  <div className="relative flex items-center mb-24">
    {/* Milestone circle */}
    <div className="absolute left-1/2 -translate-x-1/2 z-10">
      <div className={`flex items-center justify-center w-16 h-16 rounded-full ${isCompleted ? 'bg-agrogreen-dark' : 'bg-gray-700'} text-white font-bold text-2xl shadow-md`}>
        {number}
      </div>
    </div>

    {/* Horizontal connecting line */}
    <div className={`absolute top-8 ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} w-32 h-0.5 bg-gray-300`}></div>

    {/* Title on line (if enabled) */}
    {showTitleOnLine && (
      <div className={`absolute top-6 ${isLeft ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} whitespace-nowrap z-10`}>
        <span className="text-sm font-medium text-gray-700 bg-white px-2">{title}</span>
      </div>
    )}

    {/* Milestone content */}
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Left side content */}
      <div className={`${isLeft ? 'text-right pr-16' : 'col-start-2 pl-16'}`}>
        {isLeft && !showTitleOnLine && (
          <div>
            <h3 className="text-xl font-semibold text-agrogreen-dark">{title}</h3>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
        )}
      </div>

      {/* Right side content */}
      <div className={`${isLeft ? 'col-start-2 pl-16' : 'text-right pr-16'}`}>
        {!isLeft && !showTitleOnLine && (
          <div>
            <h3 className="text-xl font-semibold text-agrogreen-dark">{title}</h3>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
        )}
      </div>
    </div>
  </div>
);

const Traction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="traction">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-16">
          Traction & Next Steps
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          {/* Milestones */}
          <div className="relative">
            <Milestone
              number={1}
              title="MVP Completed"
              isCompleted={true}
              isLeft={true}
            />

            <Milestone
              number={2}
              title="50+ Farmers Onboarding"
              isCompleted={false}
              isLeft={false}
              showTitleOnLine={true}
            />

            <Milestone
              number={3}
              title="Fields Partnerships Initiated"
              isCompleted={false}
              isLeft={true}
            />

            <Milestone
              number={4}
              title="Fund Raising"
              isCompleted={false}
              isLeft={false}
              showTitleOnLine={true}
            />
          </div>

          <p className="text-gray-700 mt-16 text-center text-lg">
            Platform completion, user acquisition, payment integration are underway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Traction;
