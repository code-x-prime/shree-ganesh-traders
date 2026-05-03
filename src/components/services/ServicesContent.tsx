"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTruck } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import ProductCard from "@/components/shared/ProductCard";
import { ALL_PRODUCTS, SPICE_PRODUCTS, TEA_PRODUCTS } from "@/lib/data/products";

type Filter = "all" | "spice" | "tea";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All Products", value: "all" },
  { label: "Spices", value: "spice" },
  { label: "Assam Gold Tea", value: "tea" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? ALL_PRODUCTS
      : activeFilter === "spice"
      ? SPICE_PRODUCTS
      : TEA_PRODUCTS;

  return (
    <div className="pt-20">

      <section className="relative min-h-[50vh] bg-[#1B3A1B] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-sm font-sans mb-6">
              Home &nbsp;&rsaquo;&nbsp; Products
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
              Our Product Catalog
            </h1>
            <p className="text-white/70 text-xl font-sans mb-6">
              Premium Spices &amp; Tea — Sourced from North East India
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {["9+ Products", "Bulk Orders", "Pan India Delivery"].map((chip) => (
                <span
                  key={chip}
                  className="bg-white/10 text-white/80 text-sm font-sans px-4 py-1.5 rounded-full border border-white/20"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="w-20 h-1 bg-[#D94F0A] rounded-full mx-auto mt-7" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#FDF8F2]">
        <div className="container-max">
          <div className="flex justify-center gap-3 mb-14 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-8 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 ${
                  activeFilter === f.value
                    ? "bg-[#D94F0A] text-white shadow-lg shadow-[#D94F0A]/30"
                    : "bg-white border border-[#E8D9C8] text-[#4A4A4A] hover:border-[#D94F0A] hover:text-[#D94F0A]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} detailed />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-10 bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-8 border-[#D94F0A] bg-[#FFF7EE] rounded-r-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2">
                Wholesale & Bulk Supply Available
              </h3>
              <p className="text-[#7A7A7A] text-base font-sans">
                We supply to wholesalers, retailers, restaurants, and exporters. Custom bulk packaging available on request.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300"
              >
                TALK TO US
                <HiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-[#D94F0A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTruck size={34} className="text-[#D94F0A]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
              Pan India Delivery Available
            </h2>
            <p className="text-[#7A7A7A] text-lg font-sans mb-10 max-w-lg mx-auto">
              Safe &middot; Reliable &middot; On Time — We deliver to all states across India
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              {[
                { Icon: BsCheckCircleFill, title: "Secure Packaging", desc: "Hygienically sealed for freshness" },
                { Icon: FaTruck, title: "Pan India Delivery", desc: "All major cities and towns" },
                { Icon: BsCheckCircleFill, title: "On-Time Dispatch", desc: "Reliable tracking & delivery" },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-[#FDF8F2] border border-[#E8D9C8] rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#D94F0A]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#D94F0A]" />
                  </div>
                  <h4 className="font-sans font-bold text-[#1A1A1A] mb-1">{title}</h4>
                  <p className="text-[#7A7A7A] text-sm font-sans">{desc}</p>
                </div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#D94F0A]/30"
              >
                GET WHOLESALE PRICING
                <HiArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
