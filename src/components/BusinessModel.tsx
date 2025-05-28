import React from 'react';

interface BusinessSegmentProps {
  title: string;
  description: string;
  color: string;
}

const BusinessSegment: React.FC<BusinessSegmentProps> = ({
  title,
  description,
  color
}) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`w-4 h-4 rounded-full ${color} flex-shrink-0 mt-1.5`}></div>
      <div>
        <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm max-w-[280px]">{description}</p>
      </div>
    </div>
  );
};

const BusinessModel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="business-model">
      <div className="container  mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Business Model
        </h2>

        {/* Business model layout with segments on sides of circle */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            {/* Left side segments */}
            <div className="space-y-12 lg:space-y-16 pl-24 md:pl-0 self-center">
              <BusinessSegment
                title="Commission"
                description="Successful funding matches."
                color="bg-green-500"
              />

              <BusinessSegment
                title="Premium Features"
                description="Insurance, analytics for enhanced user experience."
                color="bg-blue-500"
              />

              <BusinessSegment
                title="Future Revenue"
                description="Data services, financial tools, partner integration."
                color="bg-orange-500"
              />
            </div>

            {/* Center circle diagram */}
            <div className="flex justify-center items-center self-center">
              <div className="w-full flex justify-center">
                <img 
                  src="/images/chartsvg.svg" 
                  alt="Business Model" 
                  className="w-full max-w-[280px] lg:max-w-[320px]" 
                />
              </div>
            </div>

            {/* Right side segments */}
            <div className="space-y-12 lg:space-y-16 pl-24 self-center">
              <BusinessSegment
                title="Commission"
                description="Successful funding matches."
                color="bg-yellow-500"
              />

              <BusinessSegment
                title="Premium Features"
                description="Insurance, analytics for enhanced user experience."
                color="bg-purple-500"
              />

              <BusinessSegment
                title="Future Revenue"
                description="Data services, financial tools, partner integration."
                color="bg-red-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
