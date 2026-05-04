"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaStar } from "react-icons/fa";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { useRef } from "react";

const STATS = [
  { number: "5+", label: "Years" },
  { number: "500+", label: "Businesses" },
  { number: "100%", label: "Natural" },
  { number: "Pan India", label: "Delivery" },
];

const TAGS = ["Assam", "Meghalaya", "Manipur", "Nagaland", "Mizoram"];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.8]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#0D0A06" }}
    >
      {/* ── FULL-BLEED PARALLAX IMAGE ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgY }}
      >
        <Image
          src="/home.jpg"
          alt="Premium spices from North East India"
          fill
          priority
          className="object-cover object-center scale-110"
          unoptimized
        />
      </motion.div>

      {/* ── LAYERED COLOUR OVERLAYS ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ opacity: overlayOpacity }}
      >
        {/* deep base */}
        <div className="absolute inset-0 bg-[#0D0A06]" />
      </motion.div>

      {/* warm left-side gradient wash */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-gradient-to-r from-[#0D0A06]/90 via-[#0D0A06]/60 to-transparent" />
        {/* fiery orange glow from top-right */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #D94F0A 0%, #FF7A2F 30%, transparent 70%)",
          }}
        />
        {/* amber glow bottom-left */}
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #D94F0A 0%, #FFBA45 40%, transparent 70%)",
          }}
        />
      </div>

      {/* ── DECORATIVE GRAIN TEXTURE ── */}
      <div
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* ── DIAGONAL ACCENT LINE ── */}
      <div
        className="absolute top-0 right-[38%] h-full w-px z-10 opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #D94F0A 40%, #FFBA45 60%, transparent)" }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-2 mb-8"
          >
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: "linear-gradient(135deg, rgba(217,79,10,0.25), rgba(255,186,69,0.15))",
                border: "1px solid rgba(217,79,10,0.5)",
                color: "#FFB366",
                backdropFilter: "blur(10px)",
              }}
            >
              <FaLeaf size={11} />
              Proudly from North East India
            </span>
            <span
              className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <FaStar size={9} className="text-yellow-400" />
              Direct Farm Sourcing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-white leading-[1.1] mb-8 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.3rem)" }}
          >
            Premium{" "}
            <span
              className="relative inline-block"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Spices
            </span>
            {" "}&amp;{" "}
            <span
              className="italic"
              style={{
                backgroundImage: "linear-gradient(135deg, #FFBA45 0%, #FF7A2F 60%, #D94F0A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tea
            </span>
            <br className="hidden sm:block" />
            <span style={{ color: "rgba(255,255,255,0.92)" }}>
              {" "}Straight from
            </span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)", fontStyle: "italic", fontSize: "0.75em" }}>
              the Source
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-md lg:max-w-lg"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
          >
            100% Natural &nbsp;·&nbsp; Chemical Free &nbsp;·&nbsp; Pan India Delivery
          </motion.p>

          {/* Origin tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
          >
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                className="text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/services"
                className="group relative flex items-center justify-center gap-3 font-bold text-sm tracking-[0.15em] uppercase px-10 py-5 rounded-2xl overflow-hidden transition-all duration-300"
                style={{ color: "#fff" }}
              >
                {/* gradient bg */}
                <span
                  className="absolute inset-0 z-0 transition-all duration-300 group-hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                    boxShadow: "0 12px 40px rgba(217,79,10,0.45)",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <HiSparkles size={16} />
                  Explore Products
                  <HiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center font-bold text-sm tracking-[0.15em] uppercase px-10 py-5 rounded-2xl transition-all duration-300 w-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-6 pt-10 w-full"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start min-w-[100px]">
                <span
                  className="font-black text-3xl sm:text-4xl leading-none"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #FF7A2F, #FFBA45)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "serif",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-[10px] font-black uppercase tracking-[0.2em] mt-2.5 opacity-40"
                  style={{ color: "#fff" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FLOATING CARD — bottom-right ── */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 right-6 sm:right-10 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="rounded-2xl p-5 max-w-[210px]"
          style={{
            background: "rgba(13,10,6,0.75)",
            border: "1px solid rgba(217,79,10,0.3)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
            style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F)" }}
          >
            <FaLeaf size={13} className="text-white" />
          </div>
          <p className="font-bold text-white text-sm leading-tight mb-1">Direct Farm Sourcing</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Freshness guaranteed, zero middlemen
          </p>
        </motion.div>
      </motion.div>

      {/* ── FLOATING BADGE — top-right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
        className="absolute top-24 right-6 sm:right-10 z-20 hidden md:flex"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-center"
          style={{
            background: "linear-gradient(135deg, #D94F0A 0%, #FF7A2F 60%, #FFBA45 100%)",
            boxShadow: "0 12px 40px rgba(217,79,10,0.6), 0 0 0 4px rgba(217,79,10,0.15)",
          }}
        >
          <span className="font-black text-white text-xl leading-none">100%</span>
          <span className="text-[9px] text-white/80 font-bold uppercase tracking-wider mt-0.5">Natural</span>
        </motion.div>
      </motion.div>

      {/* ── SCROLL CUE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(217,79,10,0.7), transparent)" }}
        />
      </motion.div>
    </section>
  );
}