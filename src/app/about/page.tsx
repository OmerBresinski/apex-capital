"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Conviction",
    description: "We take concentrated positions and stand by our founders through market cycles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Complete transparency and the highest ethical standards in all our dealings.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description: "We roll up our sleeves to help founders succeed—not just write checks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const pathname = usePathname();

  return (
    <main className="bg-[#0a0a0a]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-[#c9a227]/8 rounded-full blur-[120px]" />

        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
              About Us
            </span>
            <div className="w-8 h-[1px] bg-[#c9a227]" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            <span className="text-[#f5f2eb]">Building the future of</span>
            <br />
            <span className="italic text-[#c9a227]">finance</span>
          </h1>
          <p className="text-xl text-[#f5f2eb]/70 font-body font-light max-w-2xl mx-auto">
            Apex Capital is a crypto-native venture capital firm investing in
            protocols, infrastructure, and applications powering the decentralized economy.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#141414]" />
        <div className="absolute inset-0 diagonal-lines-dark" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              key={`${pathname}-story`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#c9a227]" />
                <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
                <span className="text-[#f5f2eb]">A decade of</span>
                <br />
                <span className="italic text-[#c9a227]">conviction</span>
              </h2>
              <div className="space-y-4 text-[#f5f2eb]/70 font-body font-light leading-relaxed">
                <p>
                  Founded in 2016 by entrepreneurs and financial professionals,
                  Apex Capital was built on a simple thesis: blockchain technology
                  would fundamentally reshape global finance.
                </p>
                <p>
                  We started with a $50 million fund focused on Bitcoin infrastructure.
                  Today, we manage over $2.4 billion across three funds and have backed
                  more than 85 companies, including 12 unicorns.
                </p>
              </div>
            </motion.div>

            <motion.div
              key={`${pathname}-story-stats`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#c9a227] to-transparent" />
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#c9a227] to-transparent" />
              </div>

              <div className="bg-[#1a1a1a] p-10 border border-[#f5f2eb]/5">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "$2.4B", label: "AUM" },
                    { value: "85+", label: "Companies" },
                    { value: "12", label: "Unicorns" },
                    { value: "2016", label: "Founded" },
                  ].map((stat, i) => (
                    <motion.div
                      key={`${pathname}-stat-${stat.label}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="border-l-2 border-[#c9a227] pl-4"
                    >
                      <div className="display-number text-4xl text-[#f5f2eb]">{stat.value}</div>
                      <div className="text-[#f5f2eb]/50 font-body text-sm uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            key={`${pathname}-values-header`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
              <span className="text-[#f5f2eb]">What we</span>{" "}
              <span className="italic text-[#c9a227]">stand for</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={`${pathname}-value-${value.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#1a1a1a] p-8 overflow-hidden border border-[#f5f2eb]/10 group-hover:border-[#c9a227]/30 transition-colors duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="text-[#c9a227] mb-6 group-hover:text-[#e3bc4a] transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-2xl text-[#f5f2eb] mb-3 group-hover:text-[#c9a227] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#f5f2eb]/50 font-body font-light leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#141414]" />
        <div className="absolute inset-0 grid-pattern-dark opacity-50" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            key={`${pathname}-cta`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8">
              <span className="text-[#f5f2eb]">Ready to build the</span>{" "}
              <span className="italic text-[#c9a227]">future</span>
              <span className="text-[#f5f2eb]">?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a227] text-[#0a0a0a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#f5f2eb]/20 text-[#f5f2eb] font-body text-sm tracking-wide hover:bg-[#f5f2eb] hover:text-[#0a0a0a] transition-all duration-300"
              >
                View Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
