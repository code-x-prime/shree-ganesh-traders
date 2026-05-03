"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaTruck, FaFacebookF, FaInstagram } from "react-icons/fa";
import { COMPANY } from "@/lib/data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const INFO_CARDS = [
  {
    key: "phone",
    icon: <FaPhone size={16} />,
    label: "Phone",
    accent: "#D94F0A",
    render: () => (
      <>
        <a href={`tel:${COMPANY.phone}`}
          className="font-black text-2xl leading-none transition-colors duration-200"
          style={{ color: "#D94F0A" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#B03A06")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "#D94F0A")}>
          {COMPANY.phone}
        </a>
        <p className="text-xs mt-1 font-semibold" style={{ color: "#7A7A7A" }}>Mon–Sat, 9AM to 6PM</p>
      </>
    ),
  },
  {
    key: "whatsapp",
    icon: <FaWhatsapp size={18} />,
    label: "WhatsApp",
    accent: "#25D366",
    render: () => (
      <>
        <p className="font-black text-2xl leading-none mb-1" style={{ color: "#25D366" }}>{COMPANY.phone}</p>
        <p className="text-xs font-semibold mb-3" style={{ color: "#7A7A7A" }}>Instant replies on WhatsApp</p>
        <motion.a
          href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I would like to enquire about your products.`}
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 font-bold text-xs tracking-[0.12em] uppercase px-5 py-2.5 rounded-xl"
          style={{ background: "#25D366", color: "#fff", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}>
          <FaWhatsapp size={14} />
          Open WhatsApp
        </motion.a>
      </>
    ),
  },
  {
    key: "address",
    icon: <FaMapMarkerAlt size={16} />,
    label: "Address",
    accent: "#D94F0A",
    render: () => (
      <>
        <p className="font-bold text-base text-[#1A1A1A]">{COMPANY.address}</p>
        <p className="text-xs mt-1 font-semibold" style={{ color: "#7A7A7A" }}>North East India HQ</p>
      </>
    ),
  },
  {
    key: "delivery",
    icon: <FaTruck size={16} />,
    label: "Delivery",
    accent: "#D94F0A",
    render: () => (
      <>
        <p className="font-bold text-base text-[#1A1A1A]">Pan India Delivery Available</p>
        <p className="text-xs mt-1 font-semibold" style={{ color: "#7A7A7A" }}>Safe, reliable, on time</p>
      </>
    ),
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      className="flex flex-col items-center lg:items-start space-y-5"
    >
      {/* heading */}
      <motion.div variants={fadeUp} className="mb-4 text-center lg:text-left">
        <h2 className="font-black text-[#1A1A1A] leading-tight mb-2"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          Sree Ganesh{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg, #FF7A2F, #D94F0A 40%, #FFBA45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Traders
          </span>
        </h2>
        <p className="text-base max-w-sm lg:max-w-none" style={{ color: "#7A7A7A" }}>
          Premium B2B distributor of spices &amp; tea from North East India.
        </p>
      </motion.div>

      {/* info cards */}
      <div className="w-full space-y-4">
        {INFO_CARDS.map(({ key, icon, label, accent, render }) => (
          <motion.div key={key} variants={fadeUp}
            className="group rounded-3xl p-6 bg-white border border-[#F0E8DF] transition-all duration-300 hover:border-[rgba(217,79,10,0.3)] hover:shadow-xl hover:shadow-[rgba(0,0,0,0.04)]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${accent}12`, border: `1px solid ${accent}20`, color: accent }}>
                {icon}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2"
                  style={{ color: "rgba(26,26,26,0.4)" }}>
                  {label}
                </p>
                <div className="flex flex-col items-center sm:items-start">
                  {render()}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* social icons */}
      <motion.div variants={fadeUp} className="flex justify-center lg:justify-start gap-3 pt-6 w-full lg:w-auto">
        {[
          { href: COMPANY.facebookUrl, icon: <FaFacebookF size={16} />, label: "Facebook", hover: "#D94F0A" },
          { href: COMPANY.instagramUrl, icon: <FaInstagram size={16} />, label: "Instagram", hover: "#D94F0A" },
          { href: `https://wa.me/${COMPANY.whatsapp}`, icon: <FaWhatsapp size={18} />, label: "WhatsApp", hover: "#25D366" },
        ].map(({ href, icon, label, hover }) => (
          <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-sm"
            style={{ background: "#1A1A1A" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = hover; (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 25px ${hover}44`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1A1A1A"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}