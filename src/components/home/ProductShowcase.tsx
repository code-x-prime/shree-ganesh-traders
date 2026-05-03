"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import ProductCard from "@/components/shared/ProductCard";
import { SPICE_PRODUCTS } from "@/lib/data/products";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const MARQUEE_WORDS = [
  "100% Natural", "•", "Chemical Free", "•",
  "Direct Farm Sourcing", "•", "Pan India Delivery", "•",
  "Assam Tea", "•", "North East Spices", "•",
  "Zero Middlemen", "•", "Premium Quality", "•",
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-16 bg-[#FDF8F2]">

      {/* ── SUBTLE BG TEXTURE ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* ── WARM GLOW TOP-RIGHT ── */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #D94F0A 0%, #FF7A2F 40%, transparent 70%)" }}
      />
      {/* ── WARM GLOW BOTTOM-LEFT ── */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #FFBA45 0%, #D94F0A 50%, transparent 70%)" }}
      />

      {/* ── TOP DIVIDER ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(217,79,10,0.3) 30%, rgba(255,186,69,0.4) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{
                  background: "linear-gradient(135deg, rgba(217,79,10,0.1), rgba(255,186,69,0.08))",
                  border: "1px solid rgba(217,79,10,0.25)",
                  color: "#D94F0A",
                }}
              >
                <FaLeaf size={10} />
                Our Range
              </span>
            </div>

            <h2
              className="font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Premium{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Product
              </span>{" "}
              <span className="italic text-[#7A7A7A]">Range</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg max-w-lg leading-relaxed text-[#7A7A7A]">
              Sourced directly — Assam · Meghalaya · Mizoram · Manipur · Nagaland
            </p>
          </div>

          {/* desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:block flex-shrink-0"
          >
            <Link
              href="/services"
              className="group relative flex items-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-7 py-4 rounded-2xl overflow-hidden"
              style={{ color: "#fff" }}
            >
              <span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                  boxShadow: "0 8px 32px rgba(217,79,10,0.4)",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <HiSparkles size={15} />
                View All Products
                <HiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── PRODUCT GRID ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-14"
        >
          {SPICE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative"
            >
              {/* index badge */}
              <div
                className="absolute top-4 left-4 z-20 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black pointer-events-none"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(217,79,10,0.2)",
                  color: "rgba(217,79,10,0.5)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── MOBILE CTA ── */}
        <div className="text-center lg:hidden mb-16">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-2xl overflow-hidden"
              style={{ color: "#fff" }}
            >
              <span
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                  boxShadow: "0 8px 32px rgba(217,79,10,0.4)",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <HiSparkles size={15} />
                View All Products
                <HiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── MARQUEE STRIP ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden pt-8"
          style={{ borderTop: "1px solid rgba(217,79,10,0.12)" }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, ri) =>
              MARQUEE_WORDS.map((word, i) => (
                <span
                  key={`${ri}-${i}`}
                  className="text-xs font-bold uppercase tracking-[0.2em] flex-shrink-0"
                  style={{
                    color: word === "•" ? "#D94F0A" : "rgba(26,26,26,0.2)",
                  }}
                >
                  {word}
                </span>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,186,69,0.3) 30%, rgba(217,79,10,0.3) 70%, transparent)" }}
      />
    </section>
  );
}