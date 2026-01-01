"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categories = ["All", "Infrastructure", "DeFi", "Consumer"];

const companies = [
  { name: "Nexus Protocol", category: "Infrastructure", status: "Series B" },
  { name: "Vault Finance", category: "DeFi", status: "Series A" },
  { name: "ChainBridge", category: "Infrastructure", status: "Series C" },
  { name: "MetaRealm", category: "Consumer", status: "Series A" },
  { name: "SwiftPay", category: "DeFi", status: "Series B" },
  { name: "ZeroKnow Labs", category: "Infrastructure", status: "Seed" },
  { name: "Aether Network", category: "Infrastructure", status: "Series A" },
  { name: "Liquid Stake", category: "DeFi", status: "Series B" },
  { name: "BlockBridge", category: "Infrastructure", status: "Series A" },
  { name: "GameFi Pro", category: "Consumer", status: "Series A" },
  { name: "DeFi Shield", category: "DeFi", status: "Series A" },
  { name: "PayStream", category: "DeFi", status: "Seed" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? companies
    : companies.filter((c) => c.category === activeCategory);

  return (
    <main className="bg-[#f5f2eb]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Investments
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              <span className="text-[#1a1a1a]">Our</span>{" "}
              <span className="italic text-[#c9a227]">portfolio</span>
            </h1>
            <p className="text-xl text-[#4a4a4a] font-body font-light max-w-xl">
              We partner with exceptional founders building foundational
              technology for the decentralized future.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-12 mt-12"
          >
            {[
              { value: "85+", label: "Companies" },
              { value: "12", label: "Unicorns" },
              { value: "23", label: "Exits" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="border-l-2 border-[#c9a227] pl-4"
              >
                <div className="display-number text-4xl text-[#1a1a1a]">{stat.value}</div>
                <div className="text-[#6b6b6b] font-body text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm font-body transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#c9a227] text-[#1a1a1a]"
                    : "border border-[#1a1a1a]/20 text-[#4a4a4a] hover:border-[#c9a227] hover:text-[#c9a227]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1a1a1a]/10">
            {filtered.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="group relative bg-[#f5f2eb] p-8 cursor-pointer overflow-hidden border-b border-r border-[#1a1a1a]/5 group-hover:border-[#c9a227]/20 transition-colors duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10">
                  {/* Number */}
                  <span className="display-number text-6xl text-[#1a1a1a]/5 absolute -top-2 -left-2 group-hover:text-[#c9a227]/30 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-[#c9a227] font-body uppercase tracking-[0.2em]">
                        {company.category}
                      </span>
                      <span className="text-[10px] text-[#6b6b6b] font-body px-2 py-1 border border-[#1a1a1a]/10 transition-colors duration-300">
                        {company.status}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-[#1a1a1a] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                      {company.name}
                    </h3>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-xs text-[#c9a227] font-body">
                        View details
                      </span>
                      <svg
                        className="w-3 h-3 text-[#c9a227]"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#ebe7dd]" />
        <div className="absolute inset-0 diagonal-lines" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
              <span className="text-[#1a1a1a]">Building something</span>{" "}
              <span className="italic text-[#c9a227]">exceptional</span>
              <span className="text-[#1a1a1a]">?</span>
            </h2>
            <p className="text-[#4a4a4a] font-body font-light mb-10 max-w-lg mx-auto">
              We&apos;re always looking for visionary founders pushing the boundaries
              of what&apos;s possible in crypto.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-[#1a1a1a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
            >
              Submit Your Pitch
              <svg
                className="w-4 h-4"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
