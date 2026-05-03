"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContent() {
  return (
    <div className="pt-20">

      <section className="relative min-h-[50vh] bg-gradient-to-br from-[#D94F0A] to-[#B03A06] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-sm font-sans mb-6">
              Home &nbsp;&rsaquo;&nbsp; Contact
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Work Together
            </h1>
            <p className="text-white/80 text-xl font-sans">
              Reach out for wholesale enquiries, bulk orders &amp; partnerships
            </p>
            <div className="w-20 h-1 bg-white/50 rounded-full mx-auto mt-7" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#FDF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] text-center mb-10">
            Find Us in Guwahati, Assam
          </h2>
          <div className="rounded-xl overflow-hidden border border-[#E8D9C8] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114523.56699349!2d91.6529!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5928f5e7c9cf%3A0x2bc8b7767d19c272!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sree Ganesh Traders location - Guwahati, Assam"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
