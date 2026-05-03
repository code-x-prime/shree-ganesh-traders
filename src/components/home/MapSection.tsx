"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

// Coordinates derived from actual SVG path data analysis (4000×4000 viewBox)
const STATES = [
  {
    name: "Assam",
    short: "AS",
    desc: "Ginger · Turmeric · Tea",
    produce: ["Fresh Ginger", "Turmeric", "Assam Gold Tea"],
    left: 80.0,
    top: 37.1,
    color: "#D94F0A",
  },
  {
    name: "Meghalaya",
    short: "ML",
    desc: "Fresh & Dry Ginger",
    produce: ["Fresh Ginger", "Dry Ginger"],
    left: 66.2,
    top: 41.1,
    color: "#D94F0A",
  },
  {
    name: "Nagaland",
    short: "NL",
    desc: "Cardamom · King Chilli",
    produce: ["Black Cardamom", "Dry King Chilli"],
    left: 88.3,
    top: 32.2,
    color: "#D94F0A",
  },
  {
    name: "Manipur",
    short: "MN",
    desc: "Turmeric · King Chilli",
    produce: ["Turmeric", "Dry King Chilli"],
    left: 81.8,
    top: 41.7,
    color: "#D94F0A",
  },
  {
    name: "Mizoram",
    short: "MZ",
    desc: "Spices & Herbs",
    produce: ["Spices", "Natural Herbs"],
    left: 68.8,
    top: 51.5,
    color: "#D94F0A",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MapSection() {
  return (
    <section className="section-padding bg-[#1A1A1A] overflow-hidden relative">
      {/* Background subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(217,79,10,0.08) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D94F0A]/15 border border-[#D94F0A]/30 text-[#D94F0A] font-sans font-semibold text-sm px-4 py-2 rounded-full mb-6">
            <FaLeaf size={12} />
            <span>Direct Farm Sourcing</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Sourced from the Heart of{" "}
            <span className="text-[#D94F0A] italic">North East India</span>
          </h2>
          <p className="text-white/50 text-lg font-sans max-w-xl mx-auto leading-relaxed">
            5 states. 9 premium products. Direct from farm to your business — 100% natural, zero compromise.
          </p>
          <div className="w-20 h-1 bg-[#D94F0A] rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — India Map with Pins */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Map container — square to match SVG 4000×4000 viewBox */}
            <div className="relative w-full aspect-square max-w-2xl mx-auto lg:mx-0">

              {/* India SVG — ghost white at low opacity */}
              <Image
                src="/india.svg"
                alt="India map showing North East India sourcing states"
                fill
                className="object-contain select-none"
                style={{
                  filter: "brightness(0) invert(1) opacity(0.1)",
                }}
                unoptimized
                priority
              />

              {/* NE India region soft glow highlight */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: "60%",
                  top: "28%",
                  width: "34%",
                  aspectRatio: "1",
                  background:
                    "radial-gradient(ellipse at center, rgba(217,79,10,0.15) 0%, rgba(217,79,10,0.06) 50%, transparent 75%)",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(8px)",
                }}
              />

              {/* Dashed NE region border */}
              <div
                className="absolute pointer-events-none border-2 border-dashed border-[#D94F0A]/20 rounded-2xl"
                style={{
                  left: "60%",
                  top: "27%",
                  width: "32%",
                  height: "28%",
                  transform: "translate(-50%, 0)",
                }}
              />

              {/* State Pins */}
              {STATES.map((state, i) => (
                <div
                  key={state.name}
                  className="absolute"
                  style={{
                    left: `${state.left}%`,
                    top: `${state.top}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.18,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="relative group cursor-pointer"
                  >
                    {/* Outer ping ring 1 */}
                    <motion.div
                      animate={{ scale: [1, 2.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: i * 0.5,
                        ease: "easeOut",
                      }}
                      className="absolute rounded-full bg-[#D94F0A]"
                      style={{
                        width: 16,
                        height: 16,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                    {/* Outer ping ring 2 (offset) */}
                    <motion.div
                      animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: i * 0.5 + 0.8,
                        ease: "easeOut",
                      }}
                      className="absolute rounded-full bg-[#D4A017]"
                      style={{
                        width: 16,
                        height: 16,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Pin dot */}
                    <div className="relative w-4 h-4 rounded-full bg-[#D94F0A] border-2 border-white shadow-lg shadow-[#D94F0A]/70 z-10" />

                    {/* State label — always visible */}
                    <div
                      className="absolute pointer-events-none z-20 whitespace-nowrap"
                      style={{
                        bottom: "calc(100% + 6px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="bg-[#1A1A1A]/90 backdrop-blur-sm border border-[#D94F0A]/40 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-md shadow-lg">
                        {state.name}
                      </div>
                    </div>

                    {/* Hover tooltip — detailed */}
                    <div
                      className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30"
                      style={{
                        bottom: "calc(100% + 28px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="bg-white rounded-xl px-4 py-3 text-left shadow-2xl min-w-[150px]">
                        <p className="text-[#D94F0A] font-sans font-bold text-sm">{state.name}</p>
                        <p className="text-[#7A7A7A] text-xs font-sans mt-0.5">{state.desc}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {state.produce.map((p) => (
                            <span key={p} className="bg-[#D94F0A]/10 text-[#D94F0A] text-[9px] font-sans px-1.5 py-0.5 rounded-full">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-white rotate-45 mx-auto -mt-1 shadow-sm" />
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Corner badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="absolute top-4 left-4 bg-[#D94F0A] text-white rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="font-display font-bold text-lg leading-none">5</p>
                <p className="text-white/80 text-[10px] font-sans mt-0.5">States</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
                className="absolute top-4 left-20 bg-[#D4A017] text-white rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="font-display font-bold text-lg leading-none">9+</p>
                <p className="text-white/80 text-[10px] font-sans mt-0.5">Products</p>
              </motion.div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#D94F0A] shadow-sm shadow-[#D94F0A]/50" />
                <span className="text-white/50 text-xs font-sans">Sourcing State</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-0.5 border-t-2 border-dashed border-[#D94F0A]/40" />
                <span className="text-white/50 text-xs font-sans">NE India Region</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — State cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-3 lg:pt-4"
          >
            {STATES.map((state) => (
              <motion.div
                key={state.name}
                variants={fadeInUp}
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-2xl p-5 transition-all duration-300 cursor-default group"
              >
                <div className="w-10 h-10 bg-[#D94F0A]/20 group-hover:bg-[#D94F0A]/30 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <FaMapMarkerAlt size={16} className="text-[#D94F0A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-sans font-bold text-base">{state.name}</p>
                  <p className="text-white/45 text-xs font-sans mt-0.5">{state.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {state.produce.map((p) => (
                      <span
                        key={p}
                        className="bg-[#D94F0A]/15 text-[#D94F0A] text-[11px] font-sans px-2.5 py-0.5 rounded-full border border-[#D94F0A]/20"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Pan India delivery card */}
            <motion.div
              variants={fadeInUp}
              className="mt-4 bg-gradient-to-r from-[#D94F0A]/20 to-[#D94F0A]/5 border border-[#D94F0A]/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <BsCheckCircleFill size={18} className="text-[#D94F0A] shrink-0" />
                <p className="text-white font-sans font-bold text-base">Pan India Delivery</p>
              </div>
              <p className="text-white/55 text-sm font-sans leading-relaxed">
                Sourced from the North East — delivered anywhere across India, safe and on time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
