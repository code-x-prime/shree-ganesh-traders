"use client";

import { motion } from "framer-motion";
import { FaTruck, FaLeaf, FaBoxOpen, FaBriefcase } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { WHY_CHOOSE_US } from "@/lib/data/constants";

const ICONS: Record<string, React.ElementType> = {
  farm: FaTruck,
  natural: MdVerified,
  pack: FaBoxOpen,
  truck: FaTruck,
  bulk: FaBriefcase,
  star: AiFillStar,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Subtle accent colors per card position (cycles)
const ACCENTS = ["#D94F0A", "#D4A017", "#2D6A2D", "#D94F0A", "#D4A017", "#2D6A2D"];

export default function WhyChooseUs() {
  return (
    <section className="relative py-14 lg:py-16 bg-[#FDF8F2] overflow-hidden">

      {/* ── SUBTLE BG GLOW ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse, #D94F0A 0%, transparent 70%)" }}
        />
      </div>

      {/* ── TOP DIVIDER ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(217,79,10,0.25) 30%, rgba(255,186,69,0.3) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-16"
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
              <MdVerified size={11} />
              Why Choose Us
            </span>
          </div>

          <h2
            className="font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Why Businesses{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trust
            </span>{" "}
            <span className="italic text-[#7A7A7A]">Us</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#7A7A7A] max-w-lg">
            Quality, reliability, and transparency — the pillars of every B2B partnership
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[item.key] || FaLeaf;
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="group relative rounded-3xl p-7 bg-white border border-[#F0E8DF] cursor-default transition-all duration-300"
                style={{
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                {/* hover shadow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: `0 12px 40px ${accent}18` }}
                />

                {/* left accent bar */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }}
                />

                {/* icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}20` }}
                >
                  <Icon size={20} style={{ color: accent }} />
                </div>

                {/* index */}
                <div
                  className="absolute top-6 right-6 text-xs font-black"
                  style={{ color: "rgba(26,26,26,0.08)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-black text-[#1A1A1A] text-lg mb-2 leading-tight">{item.title}</h3>
                <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,186,69,0.25) 30%, rgba(217,79,10,0.25) 70%, transparent)" }}
      />
    </section>
  );
}