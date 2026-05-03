"use client";

import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`mb-14 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}
    >
      {/* eyebrow badge */}
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-5">
          <span
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
            style={{
              background: light
                ? "rgba(255,255,255,0.1)"
                : "linear-gradient(135deg, rgba(217,79,10,0.1), rgba(255,186,69,0.08))",
              border: light
                ? "1px solid rgba(255,255,255,0.2)"
                : "1px solid rgba(217,79,10,0.25)",
              color: light ? "rgba(255,255,255,0.7)" : "#D94F0A",
            }}
          >
            <FaLeaf size={9} />
            {eyebrow}
          </span>
        </div>
      )}

      {/* title */}
      <h2
        className="font-black leading-[1.05] tracking-tight mb-5"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: light ? "#fff" : "#1A1A1A",
        }}
      >
        {title.split(" ").map((word, i, arr) => {
          // last word gets gradient accent
          if (i === arr.length - 1 && !light) {
            return (
              <span
                key={i}
                style={{
                  backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {word}
              </span>
            );
          }
          return <span key={i}>{word} </span>;
        })}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${centered ? "text-center" : ""}`}
          style={{ color: light ? "rgba(255,255,255,0.5)" : "#7A7A7A" }}
        >
          {subtitle}
        </p>
      )}

      {/* accent line */}
      <div
        className="mt-6 h-0.5 w-16 rounded-full"
        style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }}
      />
    </motion.div>
  );
}