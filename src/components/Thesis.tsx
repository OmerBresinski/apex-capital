"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <section key={pathname} className="relative py-32 overflow-hidden">
      {/* Background - warm ivory with subtle texture */}
      <div className="absolute inset-0 bg-[#f5f2eb]" />

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #1a1a1a 0px,
            #1a1a1a 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      {/* Decorative amber accent - left side */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#c9a227] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.25em] uppercase font-medium">
                Investment Thesis
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-8 tracking-tight">
              <span className="text-[#1a1a1a]">Where we</span>
              <br />
              <span className="italic text-[#c9a227]">deploy capital</span>
            </h2>

            <p className="text-[#1a1a1a]/60 font-body font-light leading-[1.8] mb-10 max-w-md text-lg">
              We invest where blockchain technology offers a 10x improvement
              over existing solutions. Our conviction in crypto&apos;s transformative
              potential guides every decision.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#1a1a1a] font-body text-sm tracking-wide group"
            >
              <span className="relative">
                Read our full thesis
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#c9a227] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
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

          {/* Right - Focus Areas Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            {/* Card with sophisticated shadow */}
            <div className="relative bg-white rounded-sm shadow-[0_4px_60px_-12px_rgba(0,0,0,0.12)] border border-[#1a1a1a]/[0.06]">
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#c9a227] via-[#e3bc4a] to-[#c9a227]" />

              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-[#c9a227]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-[#c9a227]" />

              <div className="p-8 lg:p-10">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    className={`group relative py-7 ${
                      i !== focusAreas.length - 1
                        ? "border-b border-[#1a1a1a]/[0.08]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      {/* Elegant number */}
                      <div className="relative">
                        <span className="display-number text-[2.75rem] leading-none text-[#ebe7dd] group-hover:text-[#c9a227]/30 transition-colors duration-500 font-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Number underline accent */}
                        <div className="absolute -bottom-1 left-0 w-8 h-[1px] bg-[#c9a227]/40 group-hover:w-full group-hover:bg-[#c9a227] transition-all duration-300" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#c9a227] group-hover:text-[#b8922a] transition-colors duration-300">
                            {area.icon}
                          </span>
                          <h3 className="font-display text-xl text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300">
                            {area.name}
                          </h3>
                        </div>
                        <p className="text-[#1a1a1a]/50 font-body text-sm pl-8 leading-relaxed">
                          {area.description}
                        </p>
                      </div>

                      {/* Arrow on hover */}
                      <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0">
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
            </div>

            {/* Subtle decorative shadow element */}
            <div className="absolute -z-10 top-6 left-6 right-0 bottom-0 bg-[#c9a227]/[0.04] rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
