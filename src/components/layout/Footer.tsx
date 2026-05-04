"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "@/lib/data/constants";

const PRODUCTS = [
  "Fresh Ginger", "Turmeric", "Dry Ginger",
  "Black Cardamom", "Dry King Chilli", "Assam CTC Tea",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0D0A06" }}>

      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.1]"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #FFBA45 0%, transparent 70%)" }}
        />
      </div>

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* ── FIRE TOP BAR ── */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, #D94F0A 25%, #FF7A2F 50%, #FFBA45 75%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >

          {/* ── COL 1: BRAND ── */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/logo.png"
                alt="Sree Ganesh Traders"
                width={90}
                height={90}
                className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Premium quality spices and tea sourced directly from North East India. Your trusted B2B partner since 2019.
            </p>

            {/* social icons */}
            <div className="flex gap-2.5">
              {[
                { href: COMPANY.facebookUrl, icon: <FaFacebookF size={14} />, label: "Facebook", hoverBg: "#D94F0A" },
                { href: COMPANY.instagramUrl, icon: <FaInstagram size={14} />, label: "Instagram", hoverBg: "#D94F0A" },
                { href: `https://wa.me/${COMPANY.whatsapp}`, icon: <FaWhatsapp size={16} />, label: "WhatsApp", hoverBg: "#25D366" },
              ].map(({ href, icon, label, hoverBg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = hoverBg;
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${hoverBg}`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${hoverBg}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── COL 2: LINKS ── */}
          <motion.div variants={fadeUp}>
            <h4
              className="font-black text-sm uppercase tracking-[0.18em] mb-5"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F, #FFBA45)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm font-semibold transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-3"
                      style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className="font-black text-sm uppercase tracking-[0.18em] mb-4"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F, #FFBA45)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Products
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2.5 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    <FaLeaf size={9} style={{ color: "rgba(217,79,10,0.5)", flexShrink: 0 }} />
                    <span className="group-hover:text-white transition-colors duration-200">{p}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 3: CONTACT ── */}
          <motion.div variants={fadeUp}>
            <h4
              className="font-black text-sm uppercase tracking-[0.18em] mb-5"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F, #FFBA45)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: <FaPhone size={13} style={{ color: "#D94F0A" }} />,
                  label: "Phone / WhatsApp",
                  content: (
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-bold text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      +91 {COMPANY.phone}
                    </a>
                  ),
                  accent: "rgba(217,79,10,0.18)",
                  border: "rgba(217,79,10,0.2)",
                },
                {
                  icon: <FaMapMarkerAlt size={13} style={{ color: "#D94F0A" }} />,
                  label: "Address",
                  content: (
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {COMPANY.address}
                    </p>
                  ),
                  accent: "rgba(217,79,10,0.18)",
                  border: "rgba(217,79,10,0.2)",
                },
                {
                  icon: <FaWhatsapp size={15} style={{ color: "#25D366" }} />,
                  label: "WhatsApp",
                  content: (
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#25D366")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                    >
                      +91 {COMPANY.phone}
                    </a>
                  ),
                  accent: "rgba(37,211,102,0.12)",
                  border: "rgba(37,211,102,0.15)",
                },
              ].map(({ icon, label, content, accent, border }, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: accent, border: `1px solid ${border}` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {label}
                    </p>
                    {content}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Sree Ganesh Traders. All Rights Reserved.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.15)" }}>
            Guwahati · Assam · North East India
          </p>
        </div>
      </div>
    </footer>
  );
}