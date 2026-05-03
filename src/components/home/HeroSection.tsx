"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const STATS = [
  { number: "5+", label: "Years Experience" },
  { number: "Pan India", label: "Delivery" },
  { number: "100%", label: "Natural" },
  { number: "500+", label: "Businesses Served" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FDF8F2] overflow-hidden flex items-center diagonal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center min-h-screen">

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="pt-20 lg:pt-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 font-sans font-semibold text-sm px-4 py-2 rounded-full mb-8 mx-auto lg:mx-0"
            >
              <FaLeaf size={13} />
              <span>Proudly from North East India</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-[#1A1A1A] leading-[1.05] mb-7"
              style={{ fontSize: "clamp(2.5rem, 6vw, 3rem)" }}
            >
              Premium Quality
              <br />
              <span className="text-[#D94F0A] italic">Spices &amp; Tea —</span>
              <br />
              Straight from the Source
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#7A7A7A] text-lg sm:text-xl font-sans max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              100% Natural &nbsp;&middot;&nbsp; Chemical Free &nbsp;&middot;&nbsp; Pan India Delivery Available
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#D94F0A]/30"
                >
                  EXPLORE OUR PRODUCTS
                  <HiArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="flex items-center justify-center border-2 border-[#D94F0A] text-[#D94F0A] hover:bg-[#D94F0A] hover:text-white font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-8 pt-10 border-t border-[#E8D9C8]"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="font-display font-bold text-[#D94F0A] text-2xl sm:text-3xl leading-none">
                      {stat.number}
                    </p>
                    <p className="text-[#7A7A7A] text-xs sm:text-sm font-sans mt-2 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="h-10 w-px bg-[#E8D9C8] ml-10 hidden sm:block" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[380px] sm:h-[480px]  rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/home.jpg"
              alt="Premium spices from North East India"
              fill
              priority
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
            >
              <p className="font-sans font-bold text-[#1A1A1A] text-sm">Direct Farm Sourcing</p>
              <p className="text-[#7A7A7A] text-xs font-sans mt-0.5">
                Assam &middot; Meghalaya &middot; Manipur &middot; Nagaland &middot; Mizoram
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute top-6 right-6 bg-[#D94F0A] text-white rounded-2xl p-4 shadow-xl text-center"
            >
              <p className="font-display font-bold text-3xl leading-none">100%</p>
              <p className="text-xs font-sans text-white/80 mt-1">Natural</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
