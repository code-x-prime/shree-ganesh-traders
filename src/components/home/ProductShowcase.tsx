"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/shared/ProductCard";
import { SPICE_PRODUCTS } from "@/lib/data/products";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-[#FDF8F2]">
      <div className="container-max">
        <SectionHeading
          title="Our Premium Product Range"
          subtitle="Sourced directly from North East India — Assam, Meghalaya, Mizoram, Manipur & Nagaland"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {SPICE_PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#D94F0A] hover:bg-[#B03A06] text-white font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#D94F0A]/30"
            >
              VIEW ALL PRODUCTS
              <HiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
