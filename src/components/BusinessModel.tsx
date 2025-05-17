
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
    <div className="flex items-start gap-3 mb-6">
      <div className={`w-4 h-4 rounded-full ${color} flex-shrink-0 mt-1.5`}></div>
      <div>
        <h4 className="font-bold text-lg text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const BusinessModel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="business-model">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-agrogreen-dark text-center mb-16">
          Business Model
        </h2>

        {/* Business model layout with segments on sides of circle */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Left side segments */}
            <div className="space-y-6 md:pr-4">
              <BusinessSegment
                title="Commission"
                description="Successful funding matches."
                color="bg-agrogreen-light"
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
            <div className="w-full max-w-xs mx-auto md:mx-0">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Green segment */}
                <path d="M200,200 L200,50 A150,150 0 0,1 325,125 Z" fill="#9ACA3C" />
                {/* Red segment */}
                <path d="M200,200 L325,125 A150,150 0 0,1 350,200 Z" fill="#ef4444" />
                {/* Purple segment */}
                <path d="M200,200 L350,200 A150,150 0 0,1 325,275 Z" fill="#a855f7" />
                {/* Orange segment */}
                <path d="M200,200 L325,275 A150,150 0 0,1 200,350 Z" fill="#f97316" />
                {/* Yellow segment */}
                <path d="M200,200 L200,350 A150,150 0 0,1 75,275 Z" fill="#eab308" />
                {/* Blue segment */}
                <path d="M200,200 L75,275 A150,150 0 0,1 50,200 Z" fill="#0ea5e9" />

                {/* Center circle */}
                <circle cx="200" cy="200" r="50" fill="white" />

                {/* Icons */}
                <g transform="translate(200, 100)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#3A7728">👨‍🌾</text>
                </g>
                <g transform="translate(275, 150)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#ef4444">🔗</text>
                </g>
                <g transform="translate(275, 250)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#a855f7">📊</text>
                </g>
                <g transform="translate(200, 300)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#f97316">📈</text>
                </g>
                <g transform="translate(125, 250)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#eab308">💰</text>
                </g>
                <g transform="translate(125, 150)">
                  <circle cx="0" cy="0" r="20" fill="white" />
                  <text x="0" y="5" textAnchor="middle" fontSize="20" fill="#3A7728">👤</text>
                </g>
              </svg>
            </div>

            {/* Right side segments */}
            <div className="space-y-6 md:pl-4">
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
                color="bg-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
