
import React from 'react';

interface MilestoneProps {
  number: number;
  title: string;
  isCompleted?: boolean;
  position: 'left' | 'right';
}

const Milestone: React.FC<MilestoneProps> = ({
  number,
  title,
  isCompleted = false,
  position
}) => (
  <div className="relative flex items-center mb-16">
    {/* Milestone circle */}
    <div className="absolute left-1/2 -translate-x-1/2 z-20">
      <div className={`flex items-center justify-center w-16 h-16 rounded-full ${isCompleted ? 'bg-[#2B4D17]' : 'bg-gray-800'} text-white font-bold text-xl`}>
        {number}
      </div>
    </div>

    {/* Horizontal line with space from circle */}
    {position === 'left' ? (
      <>
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-32 h-0.5 bg-gray-400 -translate-x-40 z-5"></div>
        <div className="w-full flex items-center">
          <div className="flex-1 text-right pr-2">
            <span className="text-gray-700 font-medium relative right-40  z-10">{title}</span>
          </div>
          <div className="flex-1"></div>
        </div>
      </>
    ) : (
      <>
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-32 h-0.5 bg-gray-400 translate-x-8 z-5"></div>
        <div className="w-full flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1 text-left pl-2">
            <span className="text-gray-700 font-medium relative left-40 z-10">{title}</span>
          </div>
        </div>
      </>
    )}
  </div>
);

const Traction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="traction">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Traction & Next Steps
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-8 bottom-32 w-0.5 bg-gray-300 -translate-x-1/2 z-0"></div>

          {/* Milestones */}
          <div className="relative">
            <Milestone
              number={1}
              title="MVP Completed"
              isCompleted={false}
              position="left"
            />

            <Milestone
              number={2}
              title="50+ Farmers Onboarding"
              isCompleted={false}
              position="right"
            />

            <Milestone
              number={3}
              title="Fields Partnerships Initiated"
              isCompleted={false}
              position="left"
            />

            <Milestone
              number={4}
              title="Fund Raising"
              isCompleted={false}
              position="right"
            />
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 text-lg">
              Platform completion, user acquisition, payment integration are underway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
