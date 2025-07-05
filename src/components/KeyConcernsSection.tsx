import { Users, TrendingUp, Scale } from "lucide-react";
import { motion } from 'framer-motion';

const KeyConcernsSection = () => {
  const concerns = [
    {
        icon: '/images/ef.png',
      title: "Farmer vetting & Investment protection",
      description: "Digital KYC, extension agents report, cooperatives. Milestone-based disbursement, insurance."
    },
    {
        icon: '/images/ab.png',
      title: "Expected Returns",
      description: "15-30% annually based on risk category."
    },
    {
        icon: '/images/dc.png',
      title: "Legal considerations",
      description: "Platform operator, legal advisory, SEC compliance."
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title and Concerns */}
            <div>
              <h2 className="text-4xl pl-6 font-bold text-foreground mb-10">
                Addressing Key Concerns
              </h2>
              <div className="flex flex-col">
                {concerns.map((concern, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 bg-white rounded-2xl p-6 mb-6 last:mb-0 items-start"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    <div className="w-16 h-16 bg-[#D3FFA3] flex items-center justify-center rounded-lg flex-shrink-0 mt-1">
                      <img src={concern.icon} alt="icon" className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {concern.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {concern.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Right side - Image on gradient background with rounded corners */}
            <div className="flex w-full justify-center">
              <div className="bg-gradient-to-br from-white via-benefit-green to-benefit-green rounded-tl-3xl rounded-br-[60px] px-4 h flex items-center mt-32 justify-center">
                <img
                  src="/images/legal-expert.png"
                  alt="Legal expert"
                  className="rounded-tl-3xl rounded-br-2xl object-cover w-full max-w-xs h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyConcernsSection; 