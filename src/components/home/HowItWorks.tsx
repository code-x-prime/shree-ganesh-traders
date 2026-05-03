"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data/constants";
import { HiSparkles } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HowItWorks() {
  return (
    <section className="relative py-14 lg:py-16 bg-white overflow-hidden">

      {/* subtle warm tint */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #D94F0A 0%, transparent 70%)" }}
      />

      {/* top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(217,79,10,0.25) 30%, rgba(255,186,69,0.3) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: "linear-gradient(135deg, rgba(217,79,10,0.1), rgba(255,186,69,0.08))",
                border: "1px solid rgba(217,79,10,0.25)",
                color: "#D94F0A",
              }}
            >
              <HiSparkles size={11} />
              Partnership Process
            </span>
          </div>
          <h2
            className="font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            How to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Partner
            </span>{" "}
            <span className="italic text-[#7A7A7A]">With Us</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#7A7A7A]">
            Simple 4-step process to start your wholesale partnership
          </p>
        </motion.div>

        {/* steps */}
        <div className="relative">
          {/* connecting line desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: "linear-gradient(to right, transparent 0%, rgba(217,79,10,0.25) 10%, rgba(255,186,69,0.35) 50%, rgba(217,79,10,0.25) 90%, transparent 100%)" }}
          />
          {/* dashed overlay */}
          <div
            className="hidden lg:block absolute top-[39px] left-[12.5%] right-[12.5%] h-px z-0 border-t-2 border-dashed"
            style={{ borderColor: "rgba(217,79,10,0.15)" }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10"
          >
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center group"
              >
                {/* number circle */}
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 cursor-default"
                  style={{ boxShadow: "0 8px 32px rgba(217,79,10,0.25)" }}
                >
                  {/* gradient fill */}
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)" }}
                  />
                  {/* inner ring */}
                  <span
                    className="absolute inset-1 rounded-full opacity-30"
                    style={{ border: "1px solid rgba(255,255,255,0.4)" }}
                  />
                  <span className="relative z-10 font-black text-white text-3xl leading-none"
                    style={{ fontFamily: "serif" }}>
                    {i + 1}
                  </span>
                </motion.div>

                <h3 className="font-black text-[#1A1A1A] text-lg mb-2 leading-tight">{step.title}</h3>
                <p className="text-[#7A7A7A] text-sm leading-relaxed max-w-44 mx-auto">{step.description}</p>

                {/* step connector arrow — between cards on mobile */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="lg:hidden mt-6 w-px h-8 mx-auto"
                    style={{ background: "linear-gradient(to bottom, rgba(217,79,10,0.3), transparent)" }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,186,69,0.25) 30%, rgba(217,79,10,0.25) 70%, transparent)" }}
      />
    </section>
  );
}