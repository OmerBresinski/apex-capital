"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f2eb]">
      {/* Image Background with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src="https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=2400&q=80"
            alt="New York City Skyline"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Lighter overlay - just enough for text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2eb]/90 via-[#f5f2eb]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f2eb]/80 via-transparent to-transparent" />
      </div>

      {/* Decorative amber accent */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#c9a227]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow with brand slash */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#c9a227]" />
            <span className="text-[#c9a227] text-sm font-body tracking-[0.2em] uppercase">
              Crypto Venture Capital
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8"
          >
            <span className="text-[#1a1a1a]">Investing in</span>
            <br />
            <span className="text-[#1a1a1a]">the </span>
            <span className="italic text-[#c9a227]">future</span>
            <span className="text-[#1a1a1a]"> of</span>
            <br />
            <span className="text-[#1a1a1a]">finance</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#4a4a4a] max-w-lg mb-12 font-body font-light leading-relaxed"
          >
            We partner with visionary founders at the earliest stages, building
            category-defining companies in blockchain and decentralized finance.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-[#1a1a1a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
            >
              View Portfolio
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
            <Link
              href="/about"
              className="text-[#1a1a1a] font-body text-sm tracking-wide hover:text-[#c9a227] transition-colors link-hover"
            >
              Our Approach
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between py-8 border-t border-[#1a1a1a]/10">
            <div className="hidden md:flex items-center gap-16">
              {[
                { value: "$2.4B", label: "Assets Under Management" },
                { value: "85+", label: "Portfolio Companies" },
                { value: "12", label: "Unicorns" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="display-number text-3xl text-[#1a1a1a]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#6b6b6b] font-body uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[#6b6b6b] text-xs font-body"
            >
              Scroll to explore
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
