"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, } from "@/lib/data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E8D9C8]"
        : "bg-white border-b border-[#E8D9C8]"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Sree Ganesh Traders logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />

        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans font-medium text-base transition-colors duration-200 group ${isActive ? "text-[#D94F0A]" : "text-[#4A4A4A] hover:text-[#D94F0A]"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#D94F0A] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-wider uppercase px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#D94F0A]/30"
          >
            GET A QUOTE
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#FFF7EE] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} className="text-[#1A1A1A]" />
            ) : (
              <Menu size={24} className="text-[#1A1A1A]" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#E8D9C8] overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-sans font-medium text-base py-3 px-3 rounded-lg border-b border-[#E8D9C8]/50 ${isActive
                      ? "text-[#D94F0A] bg-[#D94F0A]/5"
                      : "text-[#4A4A4A] hover:text-[#D94F0A] hover:bg-[#FDF8F2]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-[#D94F0A] text-white font-sans font-semibold text-sm tracking-wider uppercase px-5 py-4 rounded-xl text-center"
              >
                GET A QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
