"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const team = [
  {
    name: "Marcus Chen",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sarah Nakamoto",
    role: "General Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "David Park",
    role: "General Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Elena Volkov",
    role: "Partner",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Omer",
    role: "Engineer",
    image: "imagesource.com",
  },
];

export default function Team() {
  const pathname = usePathname();

  return (
    <section key={pathname} className="relative py-32 overflow-hidden">
      {/* Background - dark */}
      <div className="absolute inset-0 bg-[#141414]" />
      <div className="absolute inset-0 diagonal-lines-dark" />

      {/* Decorative glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Leadership
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              <span className="text-[#f5f2eb]">The</span>
              <br />
              <span className="italic text-[#c9a227]">team</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f5f2eb]/50 font-body text-sm max-w-sm mt-6 lg:mt-0"
          >
            Operators and investors with deep crypto expertise, backing the
            next generation of web3 founders.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#1a1a1a] p-6 overflow-hidden border border-[#f5f2eb]/10 group-hover:border-[#c9a227]/30 transition-colors duration-500">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-24 h-24 mb-6 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Amber overlay on hover */}
                    <div className="absolute inset-0 bg-[#c9a227]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="font-display text-xl text-[#f5f2eb] mb-1 group-hover:text-[#c9a227] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#f5f2eb]/50 font-body text-sm transition-colors duration-300">
                    {member.role}
                  </p>

                  {/* Social links - appear on hover */}
                  <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
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
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-3 text-[#f5f2eb] font-body text-sm tracking-wide group hover:text-[#c9a227] transition-colors"
          >
            <span className="link-hover">Meet the full team</span>
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
      </div>
    </section>
  );
}
