"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaTruck, FaFacebookF, FaInstagram } from "react-icons/fa";
import { COMPANY } from "@/lib/data/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-5"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mb-1">Sree Ganesh Traders</h2>
        <p className="text-[#7A7A7A] font-sans text-base leading-relaxed">
          Premium B2B distributor of spices &amp; tea from North East India
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="bg-[#FDF8F2] rounded-2xl p-6 border border-[#E8D9C8]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#D94F0A]/10 rounded-xl flex items-center justify-center shrink-0">
            <FaPhone size={18} className="text-[#D94F0A]" />
          </div>
          <div>
            <p className="text-[#7A7A7A] text-xs font-sans mb-0.5">Phone</p>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-[#D94F0A] font-display font-bold text-2xl hover:text-[#B03A06] transition-colors leading-none"
            >
              {COMPANY.phone}
            </a>
            <p className="text-[#7A7A7A] text-xs font-sans mt-1">Call us Mon–Sat, 9AM to 6PM</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="bg-[#FDF8F2] rounded-2xl p-6 border border-[#E8D9C8]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0">
            <FaWhatsapp size={20} className="text-[#25D366]" />
          </div>
          <div className="flex-1">
            <p className="text-[#7A7A7A] text-xs font-sans mb-0.5">WhatsApp</p>
            <p className="text-green-600 font-display font-bold text-2xl leading-none">{COMPANY.phone}</p>
            <p className="text-[#7A7A7A] text-xs font-sans mt-1">Instant replies on WhatsApp</p>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I would like to enquire about your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300"
            >
              <FaWhatsapp size={15} />
              Open WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="bg-[#FDF8F2] rounded-2xl p-6 border border-[#E8D9C8]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#D94F0A]/10 rounded-xl flex items-center justify-center shrink-0">
            <FaMapMarkerAlt size={18} className="text-[#D94F0A]" />
          </div>
          <div>
            <p className="text-[#7A7A7A] text-xs font-sans mb-0.5">Address</p>
            <p className="text-[#1A1A1A] font-sans font-semibold text-base">{COMPANY.address}</p>
            <p className="text-[#7A7A7A] text-xs font-sans mt-1">North East India HQ</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="bg-[#FDF8F2] rounded-2xl p-6 border border-[#E8D9C8]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#D94F0A]/10 rounded-xl flex items-center justify-center shrink-0">
            <FaTruck size={18} className="text-[#D94F0A]" />
          </div>
          <div>
            <p className="text-[#7A7A7A] text-xs font-sans mb-0.5">Delivery</p>
            <p className="text-[#1A1A1A] font-sans font-semibold text-base">Pan India Delivery Available</p>
            <p className="text-[#7A7A7A] text-xs font-sans mt-1">Safe, reliable, on time</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex gap-3 pt-2">
        <a
          href={COMPANY.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#D94F0A] text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          aria-label="Facebook"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href={COMPANY.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#D94F0A] text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          aria-label="Instagram"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1A1A1A] hover:bg-[#25D366] text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
      </motion.div>
    </motion.div>
  );
}
