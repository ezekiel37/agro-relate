import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '/images/ef.png',
    title: 'Access Funding, boost productivity, receive experts guidance.',
    description: 'As a farmer, we help you with easy fund accessibility and guidance on how to achieve optimum productivity.'
  },
  {
    icon: '/images/ab.png',
    title: 'Attractive returns (15-30%) and contributing to food security.',
    description: 'Choosing us as your investment platform guarantees an annual return of 15-30%.'
  },
  {
    icon: '/images/dc.png',
    title: 'Enable scalable agriculture, reduce poverty, & drive financial inclusion.',
    description: 'AgroRelate helps to reduce rural poverty and drives financial inclusion for the nation as a whole.'
  }
];

const cardVariants = {
  hidden: { y: 40 },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
    },
  }),
};

const BenefitCard: React.FC<{ icon: string; title: string; description: string; subtitle?: string; idx: number }> = ({ icon, title, description, subtitle, idx }) => (
  <motion.div
    className="bg-white rounded-2xl p-6 mb-6 last:mb-0 flex items-start gap-16"
    custom={idx}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
  >
    <div className="w-16 h-16 bg-[#D3FFA3] flex items-center justify-center rounded-lg flex-shrink-0 mt-1">
      <img src={icon} alt="icon" className="w-12 h-12" />
    </div>
    <div>
                  <h3 className="text-lg md:text-xl font-600 text-gray-800 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
    </div>
  </motion.div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Cards */}
          <div>
            <h2 className="text-3xl md:text-4xl font-600 pl-6 text-black/80 leading-tight mb-10">
              Why Choose Agro-Relate as a Farmer & as an Investor?
            </h2>
            <div className="flex flex-col">
              {benefits.map((item, idx) => (
                <BenefitCard key={idx} {...item} idx={idx} />
              ))}
            </div>
          </div>
          {/* Right side - Image on gradient background with rounded corners */}
          <div className="flex w-full justify-center items-center">
            <div className="bg-gradient-to-br from-white via-benefit-green to-benefit-green rounded-tl-3xl rounded-br-3xl px-4 flex items-center justify-center h-[400px] mt-32 md:h-[480px]">
              <img
                src="/images/smilefull.jpg"
                alt="Modern greenhouse with farmers working"
                className="rounded-tl-3xl rounded-br-3xl object-cover w-full max-w-xs h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
