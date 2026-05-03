"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HiSparkles } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── NAV SHELL ── */}
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(253,248,242,0.92)"
            : "rgba(253,248,242,1)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(217,79,10,0.12)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Sree Ganesh Traders logo"
                width={72}
                height={72}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-1"
                >
                  <span
                    className="font-bold text-sm uppercase tracking-[0.1em] transition-colors duration-200"
                    style={{ color: isActive ? "#D94F0A" : "#4A4A4A" }}
                  >
                    {link.label}
                  </span>
                  {/* underline */}
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: "linear-gradient(to right, #D94F0A, #FFBA45)",
                    }}
                  />
                  {/* hover underline */}
                  {!isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "linear-gradient(to right, #D94F0A, #FFBA45)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + HAMBURGER */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 font-bold text-xs tracking-[0.14em] uppercase px-6 py-3 rounded-2xl overflow-hidden"
                style={{ color: "#fff" }}
              >
                <span
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                    boxShadow: "0 4px 20px rgba(217,79,10,0.4)",
                  }}
                />
                <span className="relative z-10 flex items-center gap-1.5">
                  <HiSparkles size={13} />
                  Get a Quote
                </span>
              </Link>
            </motion.div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl transition-colors duration-200"
              style={{ background: menuOpen ? "rgba(217,79,10,0.08)" : "transparent" }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={22} style={{ color: "#D94F0A" }} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} style={{ color: "#1A1A1A" }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(253,248,242,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(217,79,10,0.12)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
            }}
          >
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-[0.1em] transition-all duration-200"
                      style={{
                        color: isActive ? "#D94F0A" : "#4A4A4A",
                        background: isActive ? "rgba(217,79,10,0.07)" : "transparent",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: isActive
                            ? "linear-gradient(135deg, #D94F0A, #FFBA45)"
                            : "rgba(74,74,74,0.2)",
                        }}
                      />
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.05 }}
                className="mt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="relative flex items-center justify-center gap-2 w-full font-bold text-xs tracking-[0.14em] uppercase px-6 py-4 rounded-2xl overflow-hidden"
                  style={{ color: "#fff" }}
                >
                  <span
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, #D94F0A, #FF7A2F 60%, #FFBA45)",
                      boxShadow: "0 4px 20px rgba(217,79,10,0.4)",
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <HiSparkles size={13} />
                    Get a Quote
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}