"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { AiFillStar, AiFillFire } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { TEA_VARIANTS } from "@/lib/data/products";

const TEA_ICONS: Record<string, React.ElementType> = {
  leaf: FaLeaf,
  star: AiFillStar,
  fire: AiFillFire,
  seedling: FaSeedling,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function TeaSection() {
  return (
    <section className="relative py-14 lg:py-16 overflow-hidden" style={{ background: "#0D1A0D" }}>

      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #2D6A2D 0%, #1B3A1B 50%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #D4A017 0%, #8B6510 50%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #D4A017 0%, transparent 70%)" }}
        />
      </div>

      {/* ── GRAIN ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* ── TOP DIVIDER ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-25"
        style={{ background: "linear-gradient(to right, transparent, #D4A017 30%, #2D6A2D 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: CONTENT ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{
                  background: "linear-gradient(135deg, rgba(212,160,23,0.2), rgba(212,160,23,0.08))",
                  border: "1px solid rgba(212,160,23,0.4)",
                  color: "#D4A017",
                }}
              >
                <BsCheckCircleFill size={10} />
                Official Distribution Partner
              </span>
            </motion.div>

            {/* headline */}
            <motion.div variants={fadeUp} className="mb-6">
              <h2
                className="font-black leading-[1.0] tracking-tight text-white"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}
              >
                Assam{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #D4A017 0%, #F5C842 50%, #D4A017 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CTC
                </span>
              </h2>
              <h2
                className="font-black leading-[1.0] tracking-tight italic"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                  backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.25))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium Tea
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              We proudly distribute Assam CTC — 4 exquisite flavours with 1 gold standard.
              Available in 250g and 1kg packs.
            </motion.p>

            {/* tea variant cards */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {TEA_VARIANTS.map((variant) => {
                const Icon = TEA_ICONS[variant.iconKey] || FaLeaf;
                return (
                  <motion.div
                    key={variant.name}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.2)" }}
                    >
                      <Icon size={15} style={{ color: "#D4A017" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm leading-tight">{variant.name}</p>
                      <p className="text-xs mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {variant.description}
                      </p>
                    </div>
                    <BsCheckCircleFill size={14} style={{ color: "#D4A017", opacity: 0.7, flexShrink: 0 }} />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-2xl overflow-hidden"
                  style={{ color: "#0D1A0D" }}
                >
                  <span
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, #D4A017, #F5C842 60%, #D4A017)",
                      boxShadow: "0 8px 32px rgba(212,160,23,0.5)",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2 font-black">
                    <HiSparkles size={15} />
                    Become a Partner
                    <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative h-[400px] lg:h-[560px] rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,160,23,0.1)" }}
          >
            <Image
              src="/assam-gold.jpg"
              alt="Assam CTC Premium Tea"
              fill
              className="object-cover"
              unoptimized
            />
            {/* overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,26,13,0.85) 0%, rgba(13,26,13,0.2) 50%, transparent 100%)" }}
            />

            {/* bottom info card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
              style={{
                background: "rgba(13,26,13,0.8)",
                border: "1px solid rgba(212,160,23,0.25)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <p
                className="font-black text-2xl leading-none mb-1"
                style={{
                  backgroundImage: "linear-gradient(135deg, #D4A017, #F5C842)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Assam CTC
              </p>
              <p className="text-sm font-semibold text-white/70">4 Exquisite Flavours · 1 Gold Standard</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                Available: 250g &amp; 1kg packs
              </p>
            </motion.div>

            {/* top-right badge */}
            <motion.div
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute top-6 right-6 w-16 h-16 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                background: "linear-gradient(135deg, #D4A017, #F5C842)",
                boxShadow: "0 8px 32px rgba(212,160,23,0.5)",
              }}
            >
              <AiFillStar size={20} className="text-[#0D1A0D] mb-0.5" />
              <span className="text-[9px] font-black text-[#0D1A0D] uppercase tracking-wide leading-none">CTC</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-25"
        style={{ background: "linear-gradient(to right, transparent, #2D6A2D 30%, #D4A017 70%, transparent)" }}
      />
    </section>
  );
}