"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { AiFillStar, AiFillFire } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { TEA_VARIANTS } from "@/lib/data/products";

const TEA_ICONS: Record<string, React.ElementType> = {
  leaf: FaLeaf,
  star: AiFillStar,
  fire: AiFillFire,
  seedling: FaSeedling,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TeaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1B3A1B] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-[#D4A017]/20 text-[#D4A017] font-sans font-semibold text-sm px-4 py-2 rounded-full mb-6"
            >
              <BsCheckCircleFill size={13} />
              <span>Official Distribution Partner</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight"
            >
              Assam Gold
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D4A017] italic mb-6 leading-tight"
            >
              Premium Tea
            </motion.p>
            <motion.p variants={fadeInUp} className="text-white/70 text-lg font-sans leading-relaxed mb-10">
              We proudly distribute Assam Gold — 4 exquisite flavours with 1 gold standard. Available in 250g and 1kg packs.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {TEA_VARIANTS.map((variant) => {
                const Icon = TEA_ICONS[variant.iconKey] || FaLeaf;
                return (
                  <motion.div
                    key={variant.name}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="w-10 h-10 bg-[#D4A017]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#D4A017]" />
                    </div>
                    <div>
                      <p className="text-white font-sans font-semibold text-sm">{variant.name}</p>
                      <p className="text-white/50 text-xs font-sans">{variant.description}</p>
                    </div>
                    <BsCheckCircleFill size={16} className="text-[#D4A017] ml-auto shrink-0" />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-[#b8880f] text-white font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/30"
                >
                  BECOME A PARTNER
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[380px] lg:h-[540px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assam-gold.jpg"
              alt="Assam Gold Premium Tea"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A1B]/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
              <p className="text-[#D4A017] font-display font-bold text-2xl mb-1">Assam Gold</p>
              <p className="text-white text-sm font-sans">4 Exquisite Flavours &middot; 1 Gold Standard</p>
              <p className="text-white/50 text-xs font-sans mt-1">Available: 250g &amp; 1kg packs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
