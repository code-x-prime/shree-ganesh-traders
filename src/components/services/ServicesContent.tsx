"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTruck } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import ProductCard from "@/components/shared/ProductCard";
import { ALL_PRODUCTS, SPICE_PRODUCTS, TEA_PRODUCTS } from "@/lib/data/products";

type Filter = "all" | "spice" | "tea";

const FILTERS: { label: string; value: Filter; count: number }[] = [
  { label: "All Products", value: "all", count: ALL_PRODUCTS.length },
  { label: "Spices", value: "spice", count: SPICE_PRODUCTS.length },
  { label: "Assam Gold Tea", value: "tea", count: TEA_PRODUCTS.length },
];

const DELIVERY_FEATURES = [
  { icon: <BsCheckCircleFill size={18} />, title: "Secure Packaging", desc: "Hygienically sealed for freshness" },
  { icon: <FaTruck size={18} />, title: "Pan India Delivery", desc: "All major cities and towns" },
  { icon: <BsCheckCircleFill size={18} />, title: "On-Time Dispatch", desc: "Reliable tracking & delivery" },
];

export default function ServicesContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all" ? ALL_PRODUCTS :
      activeFilter === "spice" ? SPICE_PRODUCTS : TEA_PRODUCTS;

  return (
    <div className="pt-20">

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden" style={{ background: "#0D0A06" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, #D94F0A 0%, #FF7A2F 30%, transparent 65%)" }} />
          <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FFBA45 0%, transparent 70%)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px opacity-25"
          style={{ background: "linear-gradient(to right, transparent, #D94F0A 30%, #FFBA45 70%, transparent)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
              Home &nbsp;›&nbsp; Products
            </p>

            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.2)", border: "1px solid rgba(217,79,10,0.4)", color: "#FFB366" }}>
                <FaLeaf size={10} />
                Product Catalog
              </span>
            </div>

            <h1 className="font-black text-white leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              Our{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 35%, #FFBA45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Product
              </span>{" "}
              <span className="italic" style={{ color: "rgba(255,255,255,0.45)" }}>Catalog</span>
            </h1>

            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              Premium Spices &amp; Tea — Sourced from North East India
            </p>

            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              {["9+ Products", "Bulk Orders", "Pan India Delivery"].map((chip) => (
                <span key={chip}
                  className="text-xs font-bold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS + GRID ── */}
      <section className="relative py-24 lg:py-28 bg-[#FDF8F2] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(217,79,10,0.2) 30%, rgba(255,186,69,0.25) 70%, transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* filter pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex justify-center gap-3 mb-14 flex-wrap">
            {FILTERS.map((f) => (
              <button key={f.value} onClick={() => setActiveFilter(f.value)}
                className="relative px-7 py-3 rounded-2xl font-bold text-xs uppercase tracking-[0.12em] transition-all duration-300 overflow-hidden"
                style={{
                  color: activeFilter === f.value ? "#fff" : "#4A4A4A",
                  background: activeFilter === f.value ? "transparent" : "#fff",
                  border: activeFilter === f.value ? "none" : "1px solid #F0E8DF",
                  boxShadow: activeFilter === f.value ? "0 6px 24px rgba(217,79,10,0.4)" : "0 2px 8px rgba(0,0,0,0.05)",
                }}>
                {activeFilter === f.value && (
                  <span className="absolute inset-0" style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)" }} />
                )}
                <span className="relative z-10">{f.label}
                  <span className="ml-2 text-[10px] opacity-60">({f.count})</span>
                </span>
              </button>
            ))}
          </motion.div>

          {/* product grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-14">
              {filtered.map((product, index) => (
                <motion.div key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className="relative">
                  <div className="absolute top-4 left-4 z-20 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black pointer-events-none"
                    style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(217,79,10,0.2)", color: "rgba(217,79,10,0.5)", backdropFilter: "blur(8px)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <ProductCard product={product} detailed />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,186,69,0.25) 30%, rgba(217,79,10,0.25) 70%, transparent)" }} />
      </section>

      {/* ── WHOLESALE BANNER ── */}
      <section className="relative py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(217,79,10,0.07), rgba(255,186,69,0.05))", border: "1px solid rgba(217,79,10,0.2)" }}>
            {/* left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
              style={{ background: "linear-gradient(to bottom, #D94F0A, #FFBA45)" }} />
            <div className="pl-2">
              <h3 className="font-black text-[#1A1A1A] text-xl sm:text-2xl mb-1.5">Wholesale &amp; Bulk Supply Available</h3>
              <p className="text-sm sm:text-base" style={{ color: "#7A7A7A" }}>
                We supply to wholesalers, retailers, restaurants, and exporters. Custom bulk packaging available on request.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="shrink-0">
              <Link href="/contact"
                className="group relative inline-flex items-center gap-2 font-bold text-xs tracking-[0.14em] uppercase px-8 py-4 rounded-2xl overflow-hidden"
                style={{ color: "#fff" }}>
                <span className="absolute inset-0" style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)", boxShadow: "0 6px 24px rgba(217,79,10,0.4)" }} />
                <span className="relative z-10 flex items-center gap-2">
                  Talk to Us
                  <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PAN INDIA DELIVERY ── */}
      <section className="relative py-24 lg:py-28 bg-white overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #D94F0A 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* icon */}
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, rgba(217,79,10,0.12), rgba(255,186,69,0.08))", border: "1px solid rgba(217,79,10,0.2)" }}>
              <FaTruck size={30} style={{ color: "#D94F0A" }} />
            </div>

            <h2 className="font-black text-[#1A1A1A] leading-[1.05] tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Pan India{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Delivery
              </span>{" "}
              <span className="italic text-[#7A7A7A]">Available</span>
            </h2>
            <p className="text-base sm:text-lg mb-12 max-w-md mx-auto" style={{ color: "#7A7A7A" }}>
              Safe · Reliable · On Time — We deliver to all states across India
            </p>

            {/* feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
              {DELIVERY_FEATURES.map(({ icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-3xl p-6 text-center border border-[#F0E8DF] transition-all duration-300"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(217,79,10,0.08)", border: "1px solid rgba(217,79,10,0.15)", color: "#D94F0A" }}>
                    {icon}
                  </div>
                  <h4 className="font-black text-[#1A1A1A] text-sm mb-1">{title}</h4>
                  <p className="text-xs" style={{ color: "#7A7A7A" }}>{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/contact"
                className="group relative inline-flex items-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-2xl overflow-hidden"
                style={{ color: "#fff" }}>
                <span className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)", boxShadow: "0 8px 32px rgba(217,79,10,0.45)" }} />
                <span className="relative z-10 flex items-center gap-2 font-black">
                  <HiSparkles size={14} />
                  Get Wholesale Pricing
                  <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}