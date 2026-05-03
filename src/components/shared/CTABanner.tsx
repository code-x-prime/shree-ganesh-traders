"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { COMPANY } from "@/lib/data/constants";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28" style={{ background: "#0D0A06" }}>

      {/* ── FIRE GLOW CENTER ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, #D94F0A 0%, #FF7A2F 30%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #FFBA45 0%, transparent 70%)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, transparent 70%)" }}
        />
      </div>

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(to right, transparent, #D94F0A 30%, #FFBA45 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 mb-7">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: "linear-gradient(135deg, rgba(217,79,10,0.25), rgba(255,186,69,0.1))",
                border: "1px solid rgba(217,79,10,0.45)",
                color: "#FFB366",
              }}
            >
              <HiSparkles size={11} />
              Start Today
            </span>
          </div>

          {/* headline */}
          <h2
            className="font-black leading-[1.05] tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Ready to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 35%, #FFBA45 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Partner
            </span>
            <br />
            <span className="italic" style={{ color: "rgba(255,255,255,0.5)" }}>
              with Us?
            </span>
          </h2>

          <p
            className="text-lg sm:text-xl mb-12 max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Call us or WhatsApp — we respond within 24 hours
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Phone */}
            <motion.a
              href={`tel:${COMPANY.phone}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-2xl overflow-hidden"
              style={{ color: "#0D0A06" }}
            >
              <span
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                  boxShadow: "0 8px 40px rgba(217,79,10,0.55)",
                }}
              />
              <span className="relative z-10 flex items-center gap-2 font-black">
                <FaPhone size={15} />
                Call: {COMPANY.phone}
              </span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I am interested in wholesale pricing for your products.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
              }}
            >
              <FaWhatsapp size={18} className="text-[#25D366]" />
              WhatsApp Us
            </motion.a>
          </div>

          {/* trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-xs uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            500+ Businesses Served &nbsp;·&nbsp; Pan India Delivery &nbsp;·&nbsp; 100% Natural
          </motion.p>
        </motion.div>
      </div>

      {/* bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(to right, transparent, #FFBA45 30%, #D94F0A 70%, transparent)" }}
      />
    </section>
  );
}