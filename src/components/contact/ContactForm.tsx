"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const PRODUCT_OPTIONS = [
  "Fresh Ginger",
  "Turmeric",
  "Dry Ginger",
  "Black Cardamom",
  "Dry King Chilli",
  "Assam Gold Green Tea",
  "Assam Gold Elachi Tea",
  "Assam Gold Masala Tea",
  "Assam Gold Garden Fresh Tea",
  "Multiple Products",
];

const inputClass =
  "w-full border border-[#E8D9C8] rounded-xl px-5 py-4 text-[#1A1A1A] font-sans text-base focus:outline-none focus:border-[#D94F0A] focus:ring-2 focus:ring-[#D94F0A]/20 transition-all bg-[#FDF8F2] placeholder:text-[#7A7A7A]";

const labelClass = "block text-sm font-sans font-semibold text-[#4A4A4A] mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl p-10 text-center"
      >
        <div className="w-20 h-20 bg-[#2D6A2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <BsCheckCircleFill size={36} className="text-[#2D6A2D]" />
        </div>
        <h3 className="font-display text-3xl font-bold text-[#1A1A1A] mb-3">Enquiry Sent!</h3>
        <p className="text-[#7A7A7A] font-sans text-base leading-relaxed">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 space-y-6"
    >
      <div>
        <h3 className="font-display text-3xl font-bold text-[#1A1A1A] mb-1">Send Us an Enquiry</h3>
        <p className="text-[#7A7A7A] font-sans text-sm">We&apos;ll get back within 24 hours</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Business Name *</label>
          <input
            type="text"
            required
            placeholder="Your business name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>City / State *</label>
          <input
            type="text"
            required
            placeholder="Your city, state"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Product Interest</label>
        <select className={inputClass}>
          <option value="">Select a product...</option>
          {PRODUCT_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          rows={5}
          placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-base tracking-wide uppercase px-6 py-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#D94F0A]/30"
      >
        Send Enquiry
        <HiArrowRight size={18} />
      </motion.button>

      <p className="text-center text-[#7A7A7A] text-sm font-sans flex items-center justify-center gap-2">
        <FaShieldAlt size={13} className="text-[#2D6A2D]" />
        Your details are safe with us
      </p>
    </motion.form>
  );
}
