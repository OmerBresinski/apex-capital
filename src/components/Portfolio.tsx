"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const featured = [
  {
    name: "Nexus Protocol",
    category: "Infrastructure",
    description: "Next-gen modular blockchain",
    year: "2021",
  },
  {
    name: "Vault Finance",
    category: "DeFi",
    description: "Institutional yield optimization",
    year: "2022",
  },
  {
    name: "ChainBridge",
    category: "Infrastructure",
    description: "Cross-chain messaging protocol",
    year: "2021",
  },
  {
    name: "MetaRealm",
    category: "Gaming",
    description: "On-chain gaming infrastructure",
    year: "2022",
  },
  {
    name: "ZeroKnow Labs",
    category: "Privacy",
    description: "ZK proof tooling",
    year: "2023",
  },
  {
    name: "SwiftPay",
    category: "Payments",
    description: "Cross-border stablecoin rails",
    year: "2020",
  },
];

export default function Portfolio() {
  const pathname = usePathname();

  return (
    <section key={pathname} className="relative py-32 overflow-hidden">
      {/* Background - dark */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 grid-pattern-dark" />

      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#c9a227]/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              <span className="text-[#f5f2eb]">Selected</span>
              <br />
              <span className="italic text-[#c9a227]">investments</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f5f2eb]/50 font-body text-sm max-w-sm mt-6 lg:mt-0"
          >
            A selection of companies we&apos;re proud to back, from seed to
            growth stage.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#f5f2eb]/10">
          {featured.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-[#0a0a0a] p-8 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative z-10">
                {/* Number */}
                <span className="display-number text-6xl text-[#f5f2eb]/5 absolute -top-2 -left-2 group-hover:text-[#c9a227]/20 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#c9a227] font-body uppercase tracking-[0.2em]">
                      {company.category}
                    </span>
                    <span className="text-[10px] text-[#f5f2eb]/40 font-body transition-colors duration-300">
                      {company.year}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#f5f2eb] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                    {company.name}
                  </h3>

                  <p className="text-sm text-[#f5f2eb]/50 font-body transition-colors duration-300">
                    {company.description}
                  </p>

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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-[#0a0a0a] font-body text-sm tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
          >
            View all investments
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
  );
}
