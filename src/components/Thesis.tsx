"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const focusAreas = [
  {
    name: "Infrastructure",
    description: "Layer 1s, bridges, developer tools",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "DeFi",
    description: "Lending, trading, derivatives",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Privacy",
    description: "ZK proofs, secure computation",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    name: "Consumer",
    description: "Gaming, social, creator economy",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Thesis() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#141414]" />

      {/* Decorative amber line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#c9a227]/30 to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Investment Thesis
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              <span className="text-[#f5f2eb]">Where we</span>
              <br />
              <span className="italic text-[#c9a227]">deploy capital</span>
            </h2>

            <p className="text-[#f5f2eb]/60 font-body font-light leading-relaxed mb-8 max-w-lg">
              We invest where blockchain technology offers a 10x improvement
              over existing solutions. Our conviction in crypto&apos;s transformative
              potential guides every decision.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#c9a227] font-body text-sm tracking-wide group"
            >
              <span className="link-hover">Read our full thesis</span>
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

          {/* Right - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 hidden lg:block">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c9a227] to-transparent" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#c9a227] to-transparent" />
            </div>

            <div className="space-y-0">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group relative py-8 border-b border-[#f5f2eb]/10 last:border-0"
                >
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span className="display-number text-4xl text-[#f5f2eb]/10 group-hover:text-[#c9a227]/30 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#c9a227] group-hover:text-[#e3bc4a] transition-colors duration-300">
                          {area.icon}
                        </span>
                        <h3 className="font-display text-2xl text-[#f5f2eb] group-hover:text-[#c9a227] transition-colors duration-300">
                          {area.name}
                        </h3>
                      </div>
                      <p className="text-[#f5f2eb]/50 font-body text-sm pl-8">
                        {area.description}
                      </p>
                    </div>

                    {/* Arrow on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-[#c9a227]"
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
                    </div>
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
