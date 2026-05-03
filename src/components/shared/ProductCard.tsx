"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  detailed?: boolean;
}

export default function ProductCard({ product, detailed = false }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className={`relative ${detailed ? "h-64" : "h-56"} overflow-hidden`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          unoptimized
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#2D6A2D] text-white text-xs font-sans font-semibold px-3 py-1.5 rounded-full">
            From North East India
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-[#D4A017] text-white text-xs font-sans font-semibold px-3 py-1.5 rounded-full capitalize">
            {product.category === "tea" ? "Premium Tea" : "Premium Spice"}
          </span>
        </div>
      </div>

      <div className={`${detailed ? "p-8" : "p-6"} flex flex-col flex-1`}>
        <h3 className={`font-display font-bold text-[#1A1A1A] mb-1 ${detailed ? "text-3xl" : "text-2xl"}`}>
          {product.name}
        </h3>
        <p className="text-[#D94F0A] text-sm font-sans font-semibold mb-3">{product.tagline}</p>

        {detailed && (
          <p className="text-[#7A7A7A] text-base font-sans leading-relaxed mb-4">{product.description}</p>
        )}

        <ul className="space-y-2 mb-5">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm font-sans text-[#4A4A4A]">
              <BsCheckCircleFill size={14} className="text-[#D94F0A] shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {detailed && product.packaging && (
          <div className="text-xs font-sans text-[#7A7A7A] mb-5 border-t border-[#E8D9C8] pt-4 flex gap-4">
            <span>Packaging: {product.packaging}</span>
            <span>|</span>
            <span>Origin: {product.origin}</span>
          </div>
        )}

        <div className="mt-auto">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-wide uppercase px-6 py-3 rounded-xl transition-all duration-300 w-full"
          >
            {detailed ? "Get Wholesale Price" : "Enquire Now"}
            <HiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
