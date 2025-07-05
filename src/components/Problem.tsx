import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: '/images/loss.png',
    title: 'Lack of Funding',
    subtitle: '70% of small holder farmers in Nigeria lack access to affordable, timely funding.'
  },
  {
    icon: '/images/question.png',
    title: "Investor's Hesitation",
    subtitle: 'Investors and donors lack structured, trustworthy access to high-impact agricultural projects.'
  },
  {
    icon: '/images/losses.png',
    title: 'Financial Aversion',
    subtitle: 'Traditional financial institutions avoid small-scale agriculture due to perceived risk.'
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

const Problem: React.FC = () => (
  <section className="relative w-full min-h-[750px] py-16 bg-gradient-to-b from-white to-custom-green overflow-hidden">
    <div className="container mx-auto px-16 flex flex-col items-center">
      {/* Image with spacing */}
      <div className="relative w-full flex justify-center mb-0 pb-0" style={{ zIndex: 10 }}>
        <div className="w-full max-w-5xl px-2 md:px-8 lg:px-16">
          <div className="relative">
            <img
              src="/images/photorealistic.png"
              alt="Nigerian farmer in field"
              className="object-cover object-center w-full h-[320px] md:h-[400px] lg:h-[480px]"
            />
            <div className="absolute inset-0" />
            {/* Title inside image, top-left */}
            <h2 className="absolute top-20 left-8 md:top-36 md:left-12 text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 text-left z-20">
              The Problem
            </h2>
          </div>
        </div>
        {/* Cards overlayed and extending out of the image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-2 md:px-8 lg:px-32"
             style={{ bottom: '-120px' }}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 flex flex-col items-center w-full max-w-xs h-[340px] border border-gray-100"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <div className="flex flex-col items-center mb-5">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C7E3A9] mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#142600]">
                      <img src={item.icon} alt="icon" className="w-6 h-6" />
                    </span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-gray-500 text-center">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer to allow for overlayed cards */}
      <div className="h-[120px] md:h-[100px] lg:h-[90px]" />
    </div>
  </section>
);

export default Problem; 