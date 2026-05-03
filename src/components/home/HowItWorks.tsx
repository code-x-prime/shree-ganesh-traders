"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/data/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <section className="section-padding bg-[#FDF8F2]">
      <div className="container-max">
        <SectionHeading
          title="How to Partner With Us"
          subtitle="Simple 4-step process to start your wholesale partnership"
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#D94F0A]/30" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative text-center flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-[#D94F0A] text-white rounded-full flex items-center justify-center font-display font-bold text-3xl mb-6 z-10 shadow-lg shadow-[#D94F0A]/30"
                >
                  {i + 1}
                </motion.div>
                <h3 className="font-display font-bold text-[#1A1A1A] text-2xl mb-3">{step.title}</h3>
                <p className="text-[#7A7A7A] text-base font-sans leading-relaxed max-w-48 mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
