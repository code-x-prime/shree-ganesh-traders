"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaRocket } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import SectionHeading from "@/components/shared/SectionHeading";
import { MILESTONES } from "@/lib/data/constants";

const VALUES = [
  { Icon: AiFillStar, title: "Quality", desc: "We never compromise on quality. Every batch is verified before dispatch." },
  { Icon: MdVerified, title: "Transparency", desc: "Complete transparency in sourcing, pricing, and partnerships. No hidden costs." },
  { Icon: BsCheckCircleFill, title: "Reliability", desc: "Consistent supply, on-time delivery, and dependable business relationships." },
  { Icon: FaLeaf, title: "Sustainability", desc: "Supporting local farmers and sustainable agricultural practices." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutContent() {
  return (
    <div className="pt-20">

      <section className="relative min-h-[50vh] bg-[#1A1A1A] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #D94F0A 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-sm font-sans mb-6">
              Home &nbsp;&rsaquo;&nbsp; About
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
              Our Story &amp; Mission
            </h1>
            <p className="text-white/70 text-xl font-sans">
              Rooted in Guwahati, Assam — Growing across India
            </p>
            <div className="w-20 h-1 bg-[#D94F0A] rounded-full mx-auto mt-7" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#FDF8F2]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[420px] lg:h-[560px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/about-page.jpg"
                alt="Premium spices from North East India"
                fill
                priority
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 bg-white shadow-xl rounded-2xl p-5"
              >
                <p className="font-sans font-bold text-[#1A1A1A] text-sm">Est. 2019 &middot; Guwahati, Assam</p>
                <p className="text-[#7A7A7A] text-xs font-sans mt-1">
                  Serving 500+ businesses across India
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-[#D94F0A]/10 text-[#D94F0A] font-sans font-semibold text-sm px-4 py-2 rounded-full mb-6"
              >
                Our Story
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight"
              >
                Bringing the Best of North East India to Your Business
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#7A7A7A] text-lg font-sans leading-relaxed mb-4">
                Sree Ganesh Traders was founded with a single mission — to bring the finest quality spices and natural produce from the rich lands of North East India directly to businesses across the country.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#7A7A7A] text-base font-sans leading-relaxed mb-8">
                Rooted in Guwahati, Assam, we have spent years building direct relationships with farmers across Assam, Meghalaya, Manipur, Nagaland, and Mizoram — ensuring every product we supply is sourced fresh, packed hygienically, and delivered on time.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "500+", label: "B2B Partners" },
                  { number: "5", label: "States Covered" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#FDF8F2] rounded-2xl p-6 text-center border border-[#E8D9C8]"
                  >
                    <p className="font-display font-bold text-[#D94F0A] text-4xl leading-none">{stat.number}</p>
                    <p className="text-[#7A7A7A] text-xs font-sans mt-2">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#D94F0A] rounded-xl p-10 min-h-[280px] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <FaLeaf size={26} className="text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 text-base font-sans leading-relaxed">
                To be the most trusted B2B partner for premium natural spices and tea in India — connecting North East India&apos;s finest farms with businesses nationwide, while supporting local farming communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1A1A] rounded-xl p-10 min-h-[280px] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket size={24} className="text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-base font-sans leading-relaxed">
                To make North East India&apos;s exceptional natural produce accessible to every corner of the country, establishing the region as a premium source of quality spices and tea on the national stage.
              </p>
            </motion.div>
          </div>

          <SectionHeading title="What We Stand For" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[#E8D9C8] p-8 text-center hover:border-[#D94F0A]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#D94F0A]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.Icon size={24} className="text-[#D94F0A]" />
                </div>
                <h3 className="font-sans font-bold text-[#1A1A1A] text-lg mb-2">{v.title}</h3>
                <p className="text-[#7A7A7A] text-sm font-sans leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FDF8F2]">
        <div className="container-max">
          <SectionHeading title="Our Journey" subtitle="Key milestones that shaped Sree Ganesh Traders" />
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E8D9C8]" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 pl-6 relative"
                >
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-[#D94F0A] border-4 border-[#FDF8F2] z-10" />
                  <div className="pt-0 pl-8">
                    <span className="inline-block bg-[#D94F0A] text-white text-xs font-sans font-bold px-3 py-1 rounded-full mb-3">
                      {m.year}
                    </span>
                    <h4 className="font-sans font-bold text-[#1A1A1A] text-base mb-1">{m.title}</h4>
                    <p className="text-[#7A7A7A] text-sm font-sans leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#D94F0A]">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
              Partner With Us Today
            </h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">
              Join 500+ businesses who trust Sree Ganesh Traders for premium quality spices and tea.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#D94F0A] hover:bg-white/90 font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-xl"
              >
                GET IN TOUCH
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
