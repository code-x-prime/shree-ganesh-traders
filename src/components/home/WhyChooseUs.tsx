"use client";

import { motion } from "framer-motion";
import { FaTruck, FaLeaf, FaBoxOpen, FaBriefcase } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import SectionHeading from "@/components/shared/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/data/constants";

const ICONS: Record<string, React.ElementType> = {
  farm: FaTruck,
  natural: MdVerified,
  pack: FaBoxOpen,
  truck: FaTruck,
  bulk: FaBriefcase,
  star: AiFillStar,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          title="Why Businesses Trust Us"
          subtitle="Quality, reliability, and transparency — the pillars of every B2B partnership"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICONS[item.key] || FaLeaf;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -6, backgroundColor: "#FDF8F2" }}
                className="rounded-2xl p-8 border border-[#E8D9C8] border-l-4 border-l-[#D94F0A] hover:shadow-xl hover:shadow-[#D94F0A]/10 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#D94F0A]/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#D94F0A]" />
                </div>
                <h3 className="font-sans font-bold text-[#1A1A1A] text-xl mb-2">{item.title}</h3>
                <p className="text-[#7A7A7A] text-base font-sans leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
