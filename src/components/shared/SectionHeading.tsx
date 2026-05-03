"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight ${
          light ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl font-sans ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[#7A7A7A]"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 ${centered ? "mx-auto" : ""} w-20 h-1 bg-[#D94F0A] rounded-full`}
      />
    </motion.div>
  );
}
