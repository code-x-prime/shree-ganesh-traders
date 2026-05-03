"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "@/lib/data/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="h-1 bg-gradient-to-r from-[#D94F0A] via-[#D4A017] to-[#D94F0A]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.png"
                alt="Sree Ganesh Traders"
                width={100}
                height={100}
                className="object-contain brightness-90"
              />

            </div>
            <p className="text-white/60 text-sm font-sans leading-relaxed mb-6 max-w-xs">
              Premium quality spices and tea sourced directly from North East India. Your trusted B2B partner since 2019.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#D94F0A] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#D94F0A] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xl mb-5">Quick Links</h4>
            <ul className="space-y-3 mb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4A017] text-sm font-sans transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D94F0A] group-hover:w-2 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white text-base mb-3">Our Products</h4>
            <ul className="space-y-2">
              {["Fresh Ginger", "Turmeric", "Dry Ginger", "Black Cardamom", "Dry King Chilli", "Assam Gold Tea"].map(
                (p) => (
                  <li key={p}>
                    <Link
                      href="/services"
                      className="text-white/50 hover:text-[#D4A017] text-sm font-sans transition-colors duration-200"
                    >
                      {p}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xl mb-5">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D94F0A]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhone size={14} className="text-[#D94F0A]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-sans mb-0.5">Phone / WhatsApp</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-white/80 hover:text-[#D4A017] text-base font-sans font-semibold transition-colors"
                  >
                    +91 {COMPANY.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D94F0A]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt size={14} className="text-[#D94F0A]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-sans mb-0.5">Address</p>
                  <p className="text-white/80 text-sm font-sans">{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#25D366]/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <FaWhatsapp size={16} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-sans mb-0.5">WhatsApp</p>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#25D366] text-sm font-sans transition-colors"
                  >
                    +91 {COMPANY.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-sm font-sans">
            © 2024 Sree Ganesh Traders. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs font-sans">Guwahati, Assam, North East India</p>
        </div>
      </div>
    </footer>
  );
}
