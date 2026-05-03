"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/lib/data/constants";

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-[#D94F0A] to-[#B03A06] py-16 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 40px 40px, rgba(255,255,255,0.3) 2px, transparent 0)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl font-sans mb-10">
            Call us or WhatsApp — We respond within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${COMPANY.phone}`}
              className="flex items-center justify-center gap-3 bg-white text-[#D94F0A] hover:bg-white/90 font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              <FaPhone size={16} />
              Call: {COMPANY.phone}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I am interested in wholesale pricing for your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 border-2 border-white text-white font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
