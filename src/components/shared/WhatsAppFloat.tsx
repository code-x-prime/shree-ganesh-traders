"use client";

import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/lib/data/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I am interested in wholesale pricing for your products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 wa-pulse"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-sans font-semibold text-sm px-3.5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <FaWhatsapp size={22} />

      </div>
    </a>
  );
}
