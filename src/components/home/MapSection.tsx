"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const STATES = [
  {
    name: "Assam",
    short: "AS",
    desc: "Ginger · Turmeric · Tea",
    produce: ["Fresh Ginger", "Turmeric", "Assam CTC Tea"],
    left: 80.0,
    top: 37.1,
    color: "#D94F0A",
  },
  {
    name: "Meghalaya",
    short: "ML",
    desc: "Fresh & Dry Ginger",
    produce: ["Fresh Ginger", "Dry Ginger"],
    left: 66.2,
    top: 41.1,
    color: "#D94F0A",
  },
  {
    name: "Nagaland",
    short: "NL",
    desc: "Cardamom · King Chilli",
    produce: ["Black Cardamom", "Dry King Chilli"],
    left: 88.3,
    top: 32.2,
    color: "#D94F0A",
  },
  {
    name: "Manipur",
    short: "MN",
    desc: "Turmeric · King Chilli",
    produce: ["Turmeric", "Dry King Chilli"],
    left: 81.8,
    top: 41.7,
    color: "#D94F0A",
  },
  {
    name: "Mizoram",
    short: "MZ",
    desc: "Spices & Herbs",
    produce: ["Spices", "Natural Herbs"],
    left: 68.8,
    top: 51.5,
    color: "#D94F0A",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function MapSection() {
  return (
    <section className="relative py-14 lg:py-16 overflow-hidden" style={{ background: "#0D0A06" }}>

      {/* ── AMBIENT GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #D94F0A 0%, #FF7A2F 40%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #FFBA45 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06]"
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
        className="absolute top-0 left-0 right-0 h-px opacity-25"
        style={{ background: "linear-gradient(to right, transparent, #D94F0A 30%, #FFBA45 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: "linear-gradient(135deg, rgba(217,79,10,0.2), rgba(255,186,69,0.1))",
                border: "1px solid rgba(217,79,10,0.4)",
                color: "#FFB366",
              }}
            >
              <FaLeaf size={10} />
              Direct Farm Sourcing
            </span>
          </div>

          <h2
            className="font-black leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Sourced from the{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FF7A2F 0%, #D94F0A 40%, #FFBA45 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Heart
            </span>{" "}
            of{" "}
            <span className="italic" style={{ color: "rgba(255,255,255,0.55)" }}>
              North East India
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.4)" }}>
            5 states. 9 premium products. Direct from farm to your business — 100% natural, zero compromise.
          </p>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-12 lg:gap-16 items-start">

          {/* LEFT — MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto lg:mx-0">

              {/* map image */}
              <Image
                src="/india.svg"
                alt="India map"
                fill
                className="object-contain select-none"
                style={{ filter: "brightness(0) invert(1) opacity(0.08)" }}
                unoptimized
                priority
              />

              {/* NE region glow */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: "60%",
                  top: "28%",
                  width: "34%",
                  aspectRatio: "1",
                  background: "radial-gradient(ellipse at center, rgba(217,79,10,0.18) 0%, rgba(217,79,10,0.07) 50%, transparent 75%)",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(8px)",
                }}
              />

              {/* dashed region border */}
              <div
                className="absolute pointer-events-none rounded-2xl"
                style={{
                  left: "60%",
                  top: "27%",
                  width: "32%",
                  height: "28%",
                  transform: "translate(-50%, 0)",
                  border: "1px dashed rgba(217,79,10,0.25)",
                }}
              />

              {/* pins */}
              {STATES.map((state, i) => (
                <div
                  key={state.name}
                  className="absolute"
                  style={{ left: `${state.left}%`, top: `${state.top}%`, transform: "translate(-50%,-50%)", zIndex: 10 }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.18, type: "spring", stiffness: 260, damping: 20 }}
                    className="relative group cursor-pointer"
                  >
                    {/* ping rings */}
                    <motion.div
                      animate={{ scale: [1, 2.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5, ease: "easeOut" }}
                      className="absolute rounded-full bg-[#D94F0A]"
                      style={{ width: 16, height: 16, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                    />
                    <motion.div
                      animate={{ scale: [1, 2.2, 1], opacity: [0.35, 0, 0.35] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 + 0.8, ease: "easeOut" }}
                      className="absolute rounded-full bg-[#FFBA45]"
                      style={{ width: 16, height: 16, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                    />

                    {/* dot */}
                    <div
                      className="relative w-4 h-4 rounded-full z-10"
                      style={{
                        background: "linear-gradient(135deg, #D94F0A, #FF7A2F)",
                        border: "2px solid rgba(255,255,255,0.3)",
                        boxShadow: "0 4px 12px rgba(217,79,10,0.7)",
                      }}
                    />

                    {/* label always visible */}
                    <div
                      className="absolute pointer-events-none z-20 whitespace-nowrap"
                      style={{ bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" }}
                    >
                      <div
                        className="text-white text-[10px] font-bold px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(13,10,6,0.9)",
                          border: "1px solid rgba(217,79,10,0.35)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {state.name}
                      </div>
                    </div>

                    {/* hover tooltip */}
                    <div
                      className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30"
                      style={{ bottom: "calc(100% + 28px)", left: "50%", transform: "translateX(-50%)" }}
                    >
                      <div
                        className="rounded-2xl px-4 py-3 text-left min-w-[155px]"
                        style={{
                          background: "rgba(13,10,6,0.95)",
                          border: "1px solid rgba(217,79,10,0.3)",
                          backdropFilter: "blur(16px)",
                          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                        }}
                      >
                        <p
                          className="font-black text-sm mb-0.5"
                          style={{
                            backgroundImage: "linear-gradient(135deg, #FF7A2F, #FFBA45)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {state.name}
                        </p>
                        <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{state.desc}</p>
                        <div className="flex flex-wrap gap-1">
                          {state.produce.map((p) => (
                            <span
                              key={p}
                              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{
                                background: "rgba(217,79,10,0.18)",
                                border: "1px solid rgba(217,79,10,0.25)",
                                color: "#FFB366",
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className="w-2 h-2 rotate-45 mx-auto -mt-1"
                        style={{ background: "rgba(13,10,6,0.95)", border: "1px solid rgba(217,79,10,0.2)" }}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* corner stat badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="absolute top-4 left-4 rounded-2xl px-4 py-2.5"
                style={{
                  background: "linear-gradient(135deg, #D94F0A, #FF7A2F)",
                  boxShadow: "0 6px 24px rgba(217,79,10,0.5)",
                }}
              >
                <p className="font-black text-white text-xl leading-none">5</p>
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mt-0.5">States</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="absolute top-4 left-24 rounded-2xl px-4 py-2.5"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #FFBA45)",
                  boxShadow: "0 6px 24px rgba(212,160,23,0.45)",
                }}
              >
                <p className="font-black text-[#0D0A06] text-xl leading-none">9+</p>
                <p className="text-[#0D0A06]/60 text-[10px] font-bold uppercase tracking-wider mt-0.5">Products</p>
              </motion.div>
            </div>

            {/* legend */}
            <div className="flex items-center gap-4 mt-5 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #D94F0A, #FF7A2F)",
                    boxShadow: "0 2px 8px rgba(217,79,10,0.5)",
                  }}
                />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Sourcing State
                </span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-0 border-t-2 border-dashed" style={{ borderColor: "rgba(217,79,10,0.35)" }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
                  NE India Region
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — STATE CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="space-y-3 lg:pt-2"
          >
            {STATES.map((state) => (
              <motion.div
                key={state.name}
                variants={fadeUp}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(217,79,10,0.15)",
                    border: "1px solid rgba(217,79,10,0.2)",
                  }}
                >
                  <FaMapMarkerAlt size={15} style={{ color: "#D94F0A" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-black text-sm leading-tight">{state.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{state.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {state.produce.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(217,79,10,0.12)",
                          border: "1px solid rgba(217,79,10,0.2)",
                          color: "#FFB366",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Pan India card */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-5 mt-2"
              style={{
                background: "linear-gradient(135deg, rgba(217,79,10,0.15), rgba(255,186,69,0.05))",
                border: "1px solid rgba(217,79,10,0.25)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <BsCheckCircleFill size={16} style={{ color: "#D94F0A", flexShrink: 0 }} />
                <p className="text-white font-black text-sm">Pan India Delivery</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Sourced from the North East — delivered anywhere across India, safe and on time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-25"
        style={{ background: "linear-gradient(to right, transparent, #FFBA45 30%, #D94F0A 70%, transparent)" }}
      />
    </section>
  );
}