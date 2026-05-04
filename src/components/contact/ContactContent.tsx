"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContent() {
  return (
    <div className="pt-20">

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden" style={{ background: "#0D0A06" }}>
        {/* glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-25"
            style={{ background: "radial-gradient(ellipse, #D94F0A 0%, #FF7A2F 30%, transparent 65%)" }} />
        </div>
        {/* grain */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            {/* breadcrumb */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>
              Home &nbsp;›&nbsp; Contact
            </p>

            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.2)", border: "1px solid rgba(217,79,10,0.4)", color: "#FFB366" }}>
                <FaLeaf size={10} />
                Get in Touch
              </span>
            </div>

            <h1 className="font-black text-white leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              Let&apos;s Work{" "}
              <span className="italic" style={{ color: "rgba(255,255,255,0.4)" }}>&amp;</span>{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 35%, #FFBA45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Together
              </span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>
              Reach out for wholesale enquiries, bulk orders & partnerships
            </p>
            <div className="mt-6 mx-auto h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }} />
          </motion.div>
        </div>

      </section>

      {/* ── CONTACT GRID ── */}
      <section className="relative py-24 lg:py-28 bg-[#FDF8F2] overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(217,79,10,0.2) 30%, rgba(255,186,69,0.25) 70%, transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,186,69,0.25) 30%, rgba(217,79,10,0.25) 70%, transparent)" }} />
      </section>

      {/* ── MAP ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FDF8F2] to-transparent" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ background: "rgba(217,79,10,0.06)", border: "1px solid rgba(217,79,10,0.12)", color: "#D94F0A" }}>
                <FaMapMarkerAlt size={10} />
                Our Headquarters
              </span>
            </div>
            <h2 className="font-black text-[#1A1A1A] leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Visit Our{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Facility
              </span>
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto">
              Located in the heart of Guwahati, serving as the primary hub for premium spice and tea distribution across India.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[2.5rem] overflow-hidden group"
            style={{ border: "1px solid #EDE5DA", boxShadow: "0 20px 80px rgba(0,0,0,0.08)" }}>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114523.56699349!2d91.6529!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5928f5e7c9cf%3A0x2bc8b7767d19c272!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="520"
              style={{ border: 0, display: "block", filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sree Ganesh Traders location - Guwahati, Assam 781028"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]" />

            {/* Directions Floating Button */}
            <div className="absolute bottom-8 right-8">
              <motion.a
                href="https://maps.google.com/?q=Sree+Ganesh+Traders+Guwahati+Assam+781028"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-2xl transition-all"
                style={{ background: "#1A1A1A", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <FaMapMarkerAlt />
                Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}