"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#141414]" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative amber glow */}
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-[#c9a227]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              <span className="text-[#f5f2eb]">Conviction-driven</span>
              <br />
              <span className="italic text-[#c9a227]">investing</span>
            </h2>

            <p className="text-[#f5f2eb]/60 font-body font-light leading-relaxed mb-8 max-w-lg">
              Since 2016, we&apos;ve partnered with visionary founders at the
              earliest stages, helping them build category-defining companies in
              blockchain and decentralized finance.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#c9a227] font-body text-sm tracking-wide group"
            >
              <span className="link-hover">About our approach</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right - Stats with diagonal separators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#c9a227] to-transparent" />
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#c9a227] to-transparent" />
            </div>

            <div className="bg-[#0a0a0a] p-10 lg:p-14">
              {[
                { value: "$2.4B", label: "Assets Under Management" },
                { value: "85+", label: "Portfolio Companies" },
                { value: "12", label: "Unicorns" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`py-8 ${
                    i !== 2 ? "border-b border-[#f5f2eb]/10" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="display-number text-5xl lg:text-6xl text-[#f5f2eb]">
                      {stat.value}
                    </span>
                    <div className="diagonal-sep hidden lg:block" />
                    <span className="text-sm text-[#f5f2eb]/40 font-body uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
