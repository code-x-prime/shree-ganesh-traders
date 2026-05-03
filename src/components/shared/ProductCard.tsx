"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  detailed?: boolean;
}

export default function ProductCard({ product, detailed = false }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_2px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_48px_rgba(217,79,10,0.15)] transition-all duration-400 group border border-[#F0E8DF]">

      {/* ── IMAGE ── */}
      <div className={`relative ${detailed ? "h-64" : "h-52"} overflow-hidden flex-shrink-0`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        {/* warm gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#2D6A2D",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(45,106,45,0.2)",
            }}
          >
            <FaLeaf size={8} />
            North East India
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
            style={{
              background: "linear-gradient(135deg, #D94F0A, #FF7A2F)",
              color: "#fff",
              boxShadow: "0 2px 12px rgba(217,79,10,0.35)",
            }}
          >
            {product.category === "tea" ? "Premium Tea" : "Premium Spice"}
          </span>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className={`${detailed ? "p-8" : "p-5"} flex flex-col flex-1`}>

        {/* name + tagline */}
        <div className="mb-4">
          <h3
            className={`font-black text-[#1A1A1A] leading-tight mb-1 ${detailed ? "text-3xl" : "text-xl"}`}
          >
            {product.name}
          </h3>
          <p
            className="text-xs font-bold uppercase tracking-[0.14em]"
            style={{
              backgroundImage: "linear-gradient(135deg, #D94F0A, #FF7A2F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {product.tagline}
          </p>
        </div>

        {detailed && (
          <p className="text-[#7A7A7A] text-sm leading-relaxed mb-5">{product.description}</p>
        )}

        {/* benefits */}
        <ul className="space-y-2 mb-5 flex-1">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-[#4A4A4A]">
              <BsCheckCircleFill
                size={13}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#D94F0A" }}
              />
              {b}
            </li>
          ))}
        </ul>

        {detailed && product.packaging && (
          <div
            className="flex flex-wrap gap-4 text-xs text-[#9A8A7A] mb-5 pt-4"
            style={{ borderTop: "1px solid #F0E8DF" }}
          >
            <span>Packaging: {product.packaging}</span>
            <span className="opacity-30">|</span>
            <span>Origin: {product.origin}</span>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-auto pt-4" style={{ borderTop: "1px solid #F0E8DF" }}>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn relative flex items-center justify-center gap-2 w-full font-bold text-xs tracking-[0.14em] uppercase px-6 py-3.5 rounded-2xl overflow-hidden cursor-pointer"
              style={{ color: "#fff" }}
            >
              <span
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                  boxShadow: "0 4px 20px rgba(217,79,10,0.35)",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <HiSparkles size={13} />
                {detailed ? "Get Wholesale Price" : "Enquire Now"}
                <HiArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </span>
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
}