import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const faqs = [
    {
      question: "How do I know my investment is secure?",
      answer: "AgroRelate holds funds in escrow until project milestones are verified. Only vetted farmers are allowed on the platform."
    },
    {
      question: "What happens if a farmer fails to deliver?",
      answer: "If milestones are not met, investors can dispute and request intervention. In extreme cases, funds may be partially refunded."
    },
    {
      question: "Are there risks involved?",
      answer: "Like any investment, farming projects comes with risks (e.g, bad weather, pest infestation). AgroRelate works to mitigate this with transparent tracking and optional insurance options (Future feature)"
    },
    {
      question: "How do farmers get verified?",
      answer: "Farmers must provide a government ID (NIN/BVN) and basic farming records. Additional verification may involve community references."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-0" onValueChange={setOpenIndex}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline flex items-center justify-between bg-transparent border-none rounded-none outline-none focus:outline-none">
                  <span className="flex-1 text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <AnimatePresence initial={false}>
                    {openIndex === `item-${index}` && (
                      <motion.div
                        key="faq-content"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 