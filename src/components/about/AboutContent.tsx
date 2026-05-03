"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaRocket } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { MILESTONES } from "@/lib/data/constants";

const VALUES = [
  { Icon: AiFillStar, title: "Quality", desc: "We never compromise on quality. Every batch is verified before dispatch." },
  { Icon: MdVerified, title: "Transparency", desc: "Complete transparency in sourcing, pricing, and partnerships. No hidden costs." },
  { Icon: BsCheckCircleFill, title: "Reliability", desc: "Consistent supply, on-time delivery, and dependable business relationships." },
  { Icon: FaLeaf, title: "Sustainability", desc: "Supporting local farmers and sustainable agricultural practices." },
];

const ACCENTS = ["#D94F0A", "#D4A017", "#2D6A2D", "#D94F0A"];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

// ─── shared divider ────────────────────────────────────────────────
function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="absolute left-0 right-0 h-px"
      style={{
        background: flip
          ? "linear-gradient(to right, transparent, rgba(255,186,69,0.25) 30%, rgba(217,79,10,0.25) 70%, transparent)"
          : "linear-gradient(to right, transparent, rgba(217,79,10,0.2) 30%, rgba(255,186,69,0.25) 70%, transparent)",
      }}
    />
  );
}

export default function AboutContent() {
  return (
    <div className="pt-20">

      {/* ═══════════════════════════════════════════
          HERO BANNER — dark cinematic
      ═══════════════════════════════════════════ */}
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
              Home &nbsp;›&nbsp; About
            </p>

            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.2)", border: "1px solid rgba(217,79,10,0.4)", color: "#FFB366" }}>
                <FaLeaf size={10} />
                Our Story
              </span>
            </div>

            <h1 className="font-black text-white leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              Our Story{" "}
              <span className="italic" style={{ color: "rgba(255,255,255,0.4)" }}>&amp;</span>{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 35%, #FFBA45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Mission
              </span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>
              Rooted in Guwahati, Assam — Growing across India
            </p>
            <div className="mt-6 mx-auto h-0.5 w-16 rounded-full"
              style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }} />
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          OUR STORY — warm white
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 lg:py-16 bg-[#FDF8F2] overflow-hidden">
        {/* warm bg glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, transparent 70%)" }} />
        <Divider />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* image left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative h-[420px] lg:h-[540px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)", border: "1px solid rgba(217,79,10,0.1)" }}
            >
              {/* IMAGE — replace with your actual image */}
              <Image src="/about-page.jpg" alt="Premium spices from North East India" fill priority className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", border: "1px solid rgba(217,79,10,0.1)" }}
              >
                <p className="font-black text-[#1A1A1A] text-sm">Est. 2019 · Guwahati, Assam</p>
                <p className="text-xs mt-0.5" style={{ color: "#7A7A7A" }}>Serving 500+ businesses across India</p>
              </motion.div>
            </motion.div>

            {/* content right */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ background: "rgba(217,79,10,0.08)", border: "1px solid rgba(217,79,10,0.2)", color: "#D94F0A" }}>
                  <FaLeaf size={9} />
                  Our Story
                </span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-black leading-[1.05] tracking-tight text-[#1A1A1A] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Bringing the Best of{" "}
                <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  North East India
                </span>{" "}
                to Your Business
              </motion.h2>

              <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "#7A7A7A" }}>
                Sree Ganesh Traders was founded with a single mission — to bring the finest quality spices and natural produce from the rich lands of North East India directly to businesses across the country.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "#7A7A7A" }}>
                Rooted in Guwahati, Assam, we have spent years building direct relationships with farmers across Assam, Meghalaya, Manipur, Nagaland, and Mizoram — ensuring every product we supply is sourced fresh, packed hygienically, and delivered on time.
              </motion.p>

              {/* stats row */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "500+", label: "B2B Partners" },
                  { number: "5", label: "States Covered" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-[#F0E8DF]"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                    <p className="font-black text-3xl leading-none mb-1.5"
                      style={{ backgroundImage: "linear-gradient(135deg, #D94F0A, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {stat.number}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(26,26,26,0.35)" }}>{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <Divider flip />
      </section>

      {/* ═══════════════════════════════════════════
          MISSION + VISION — white bg
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 lg:py-16 bg-white overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #D94F0A 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* mission / vision cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
            {[
              {
                icon: <FaLeaf size={24} className="text-white" />,
                title: "Our Mission",
                text: "To be the most trusted B2B partner for premium natural spices and tea in India — connecting North East India's finest farms with businesses nationwide, while supporting local farming communities.",
                style: { background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)", boxShadow: "0 16px 48px rgba(217,79,10,0.35)" },
                iconBg: "rgba(255,255,255,0.2)",
                textColor: "rgba(255,255,255,0.8)",
                titleColor: "#fff",
              },
              {
                icon: <FaRocket size={22} className="text-white" />,
                title: "Our Vision",
                text: "To make North East India's exceptional natural produce accessible to every corner of the country, establishing the region as a premium source of quality spices and tea on the national stage.",
                style: { background: "#0D0A06", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", border: "1px solid rgba(217,79,10,0.15)" },
                iconBg: "rgba(217,79,10,0.2)",
                textColor: "rgba(255,255,255,0.5)",
                titleColor: "#fff",
              },
            ].map(({ icon, title, text, style, iconBg, textColor, titleColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="rounded-3xl p-10 flex flex-col min-h-[280px]"
                style={style}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: iconBg }}>
                  {icon}
                </div>
                <h3 className="font-black text-2xl mb-4" style={{ color: titleColor }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: textColor }}>{text}</p>
              </motion.div>
            ))}
          </div>

          {/* values heading */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.08)", border: "1px solid rgba(217,79,10,0.2)", color: "#D94F0A" }}>
                <AiFillStar size={10} />
                Our Values
              </span>
            </div>
            <h2 className="font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              What We{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Stand
              </span>{" "}
              <span className="italic text-[#7A7A7A]">For</span>
            </h2>
            <div className="mt-5 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }} />
          </motion.div>

          {/* values grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ Icon, title, desc }, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <motion.div key={title} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className="group relative rounded-3xl p-7 bg-white border border-[#F0E8DF] text-center cursor-default"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ boxShadow: `0 12px 40px ${accent}18` }} />
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}12`, border: `1px solid ${accent}20` }}>
                    <Icon size={20} style={{ color: accent }} />
                  </div>
                  <h3 className="font-black text-[#1A1A1A] text-base mb-2">{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#7A7A7A" }}>{desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <Divider flip />
      </section>

      {/* ═══════════════════════════════════════════
          JOURNEY / TIMELINE — warm white
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 lg:py-16 bg-[#FDF8F2] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFBA45 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* heading */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.08)", border: "1px solid rgba(217,79,10,0.2)", color: "#D94F0A" }}>
                <FaRocket size={9} />
                Milestones
              </span>
            </div>
            <h2 className="font-black leading-[1.05] tracking-tight text-[#1A1A1A]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Our{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Journey
              </span>
            </h2>
            <p className="mt-3 text-base" style={{ color: "#7A7A7A" }}>Key milestones that shaped Sree Ganesh Traders</p>
            <div className="mt-5 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }} />
          </motion.div>

          {/* timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 rounded-full"
              style={{ background: "linear-gradient(to bottom, #D94F0A, rgba(255,186,69,0.4), transparent)" }} />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-7 relative pl-2">

                  {/* dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full z-10 relative"
                      style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F)", boxShadow: "0 0 0 3px #FDF8F2, 0 0 0 5px rgba(217,79,10,0.2)" }} />
                  </div>

                  {/* content */}
                  <div className="flex-1 pb-2">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full mb-2"
                      style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F)", color: "#fff", boxShadow: "0 3px 12px rgba(217,79,10,0.35)" }}>
                      {m.year}
                    </span>
                    <h4 className="font-black text-[#1A1A1A] text-base mb-1">{m.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#7A7A7A" }}>{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Divider flip />
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA — dark cinematic
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "#0D0A06" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, #D94F0A 0%, #FF7A2F 30%, transparent 65%)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
        <div className="absolute top-0 left-0 right-0 h-px opacity-30"
          style={{ background: "linear-gradient(to right, transparent, #D94F0A 30%, #FFBA45 70%, transparent)" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(217,79,10,0.2)", border: "1px solid rgba(217,79,10,0.4)", color: "#FFB366" }}>
                <HiSparkles size={11} />
                Join Us
              </span>
            </div>

            <h2 className="font-black leading-[1.05] tracking-tight text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
              Partner With{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 35%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Us
              </span>{" "}
              <span className="italic" style={{ color: "rgba(255,255,255,0.4)" }}>Today</span>
            </h2>
            <p className="text-base sm:text-lg mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
              Join 500+ businesses who trust Sree Ganesh Traders for premium quality spices and tea.
            </p>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/contact"
                className="group relative inline-flex items-center gap-3 font-bold text-sm tracking-[0.12em] uppercase px-10 py-4 rounded-2xl overflow-hidden"
                style={{ color: "#0D0A06" }}>
                <span className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)", boxShadow: "0 8px 40px rgba(217,79,10,0.55)" }} />
                <span className="relative z-10 flex items-center gap-2 font-black">
                  <HiSparkles size={14} />
                  Get in Touch
                  <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}