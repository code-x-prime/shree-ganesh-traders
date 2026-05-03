"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaTruck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const BADGES = [
  { Icon: FaLeaf, label: "100% Natural" },
  { Icon: MdVerified, label: "Chemical Free" },
  { Icon: FaTruck, label: "Pan India Delivery" },
  { Icon: AiFillStar, label: "Premium Quality" },
  { Icon: BsCheckCircleFill, label: "Hygienically Packed" },
];

export default function BadgeStrip() {
  return (
    <section className="bg-[#1A1A1A] py-5">
      <div className="max-w-7xl mx-auto px-4">

        {/* Mobile: 2 cols | Desktop: 5 cols */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {BADGES.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}

              className={`flex items-center justify-center md:justify-start gap-2
              ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <Icon className="text-[#D4A017] text-base sm:text-lg" />

              <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}