"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const PRODUCT_OPTIONS = [
  "Fresh Ginger", "Turmeric", "Dry Ginger", "Black Cardamom",
  "Dry King Chilli", "Assam CTC Green Tea", "Assam CTC Elachi Tea",
  "Assam CTC Masala Tea", "Assam CTC Garden Fresh Tea", "Multiple Products",
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-black uppercase tracking-[0.14em]" style={{ color: "rgba(26,26,26,0.5)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FDFAF7",
  border: "1px solid #EDE5DA",
  borderRadius: "16px",
  padding: "16px 20px",
  fontSize: "15px",
  color: "#1A1A1A",
  outline: "none",
  transition: "all 0.3s ease",
  fontFamily: "inherit",
  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
};

const focusHandlers = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#D94F0A";
    e.target.style.boxShadow = "0 0 0 3px rgba(217,79,10,0.1)";
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#EDE5DA";
    e.target.style.boxShadow = "none";
  },
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    location: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2rem] p-10 text-center flex flex-col items-center justify-center min-h-[500px]"
          style={{ border: "1px solid #F0E8DF", boxShadow: "0 12px 60px rgba(0,0,0,0.08)" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 220 }}
            className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
            style={{ background: "rgba(45,106,45,0.08)" }}>
            <BsCheckCircleFill size={44} style={{ color: "#2D6A2D" }} />
          </motion.div>
          <h3 className="font-black text-[#1A1A1A] text-3xl mb-3">Enquiry Received!</h3>
          <p className="text-base leading-relaxed max-w-xs text-[#7A7A7A]">
            Thank you for reaching out. Our wholesale team will contact you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          onSubmit={handleSubmit}
          className="bg-white rounded-[2rem] p-8 sm:p-12 space-y-8"
          style={{ border: "1px solid #F0E8DF", boxShadow: "0 15px 70px rgba(0,0,0,0.06)" }}>

          {/* header */}
          <div className="pb-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ background: "rgba(217,79,10,0.08)", border: "1px solid rgba(217,79,10,0.15)", color: "#D94F0A" }}>
                <HiSparkles size={12} />
                Direct Inquiry
              </span>
            </div>
            <h3 className="font-black text-[#1A1A1A] text-2xl sm:text-4xl mb-2 tracking-tight">Send Us an Enquiry</h3>
            <p className="text-base text-[#7A7A7A]">We respond to all wholesale queries promptly.</p>
          </div>

          <div className="space-y-6">
            {/* row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Full Name *">
                <input type="text" name="name" required placeholder="John Doe" style={inputStyle} {...focusHandlers} value={formData.name} onChange={handleChange} />
              </Field>
              <Field label="Business Name *">
                <input type="text" name="businessName" required placeholder="Company Pvt Ltd" style={inputStyle} {...focusHandlers} value={formData.businessName} onChange={handleChange} />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Email Address *">
                <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} {...focusHandlers} value={formData.email} onChange={handleChange} />
              </Field>
              <Field label="Phone Number *">
                <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" style={inputStyle} {...focusHandlers} value={formData.phone} onChange={handleChange} />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Field label="City / State *">
                <input type="text" name="location" required placeholder="Guwahati, Assam" style={inputStyle} {...focusHandlers} value={formData.location} onChange={handleChange} />
              </Field>
            </div>

            {/* product select */}
            <Field label="Product Interest">
              <select name="product" style={inputStyle} {...focusHandlers} value={formData.product} onChange={handleChange}>
                <option value="">Select a category...</option>
                {PRODUCT_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>

            {/* message */}
            <Field label="Message">
              <textarea name="message" rows={4} placeholder="Briefly describe your requirements..."
                style={{ ...inputStyle, resize: "none" }}
                {...focusHandlers} value={formData.message} onChange={handleChange} />
            </Field>
          </div>

          {/* submit */}
          <div className="pt-2">
            <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.98 }}
              className="relative w-full flex items-center justify-center gap-3 font-black text-sm tracking-[0.15em] uppercase py-5 rounded-2xl overflow-hidden shadow-2xl shadow-[rgba(217,79,10,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ color: "#fff" }}>
              <span className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)" }} />
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <HiSparkles size={16} />
                    Submit Enquiry
                    <HiArrowRight size={16} />
                  </>
                )}
              </span>
            </motion.button>

            <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.1em] flex items-center justify-center gap-2"
              style={{ color: "rgba(26,26,26,0.3)" }}>
              <FaShieldAlt size={12} className="text-[#2D6A2D] opacity-60" />
              End-to-End Encrypted & Secure
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}