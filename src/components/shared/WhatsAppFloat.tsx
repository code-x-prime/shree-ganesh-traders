"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/lib/data/constants";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I am interested in wholesale pricing for your products.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 220, damping: 18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── TOOLTIP LABEL ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="mr-3 px-4 py-2.5 rounded-2xl text-white text-xs font-bold whitespace-nowrap"
            style={{
              background: "rgba(13,10,6,0.9)",
              border: "1px solid rgba(37,211,102,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
          >
            Chat on WhatsApp
            <span
              className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45"
              style={{
                background: "rgba(13,10,6,0.9)",
                border: "1px solid rgba(37,211,102,0.2)",
                borderLeft: "none",
                borderBottom: "none",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BUTTON ── */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #25D366, #1ebe5d)",
          boxShadow: "0 8px 32px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4)",
        }}
      >
        {/* pulse ring 1 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
          style={{ background: "rgba(37,211,102,0.35)" }}
        />
        {/* pulse ring 2 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: 0.5, ease: "easeOut" }}
          style={{ background: "rgba(37,211,102,0.2)" }}
        />

        <FaWhatsapp size={26} className="text-white relative z-10" />
      </motion.div>
    </motion.a>
  );
}