"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const leadership = [
  {
    name: "Marcus Chen",
    role: "Managing Partner",
    bio: "Former Partner at Goldman Sachs Digital Assets. Early Bitcoin investor since 2012.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Nakamoto",
    role: "General Partner",
    bio: "Founded two successful fintech startups. Previously led product at Coinbase.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Park",
    role: "General Partner",
    bio: "Former CTO at a top DeFi protocol. PhD in Computer Science from MIT.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena Volkov",
    role: "Partner",
    bio: "15+ years in venture capital at Sequoia and a16z. Led investments in 5 unicorns.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654982?auto=format&fit=crop&w=400&q=80",
  },
];

const team = [
  {
    name: "James Wu",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Aisha Patel",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Michael Torres",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sophie Zhang",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Alex Rivera",
    role: "Research Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Emma Johnson",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#f5f2eb]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Our People
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              <span className="text-[#1a1a1a]">Our</span>{" "}
              <span className="italic text-[#c9a227]">team</span>
            </h1>
            <p className="text-xl text-[#4a4a4a] font-body font-light max-w-xl">
              Operators and investors with deep crypto expertise and decades of
              institutional finance experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-[#f5f2eb]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[1px] bg-[#c9a227]" />
            <h2 className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
              Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#ebe7dd] overflow-hidden border border-transparent group-hover:border-[#c9a227]/30 transition-colors duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 flex gap-6 p-8">
                  {/* Avatar */}
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-[#1a1a1a] mb-1 group-hover:text-[#c9a227] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#c9a227] text-sm font-body mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#6b6b6b] text-sm font-body font-light leading-relaxed transition-colors duration-300">
                      {member.bio}
                    </p>

                    {/* Social links */}
                    <div className="mt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="text-[#6b6b6b] hover:text-[#c9a227] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#6b6b6b] hover:text-[#c9a227] transition-colors">
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
        </div>
      </section>

      {/* Investment Team */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#ebe7dd]" />
        <div className="absolute inset-0 diagonal-lines" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[1px] bg-[#c9a227]" />
            <h2 className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
              Investment Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-5 p-4 bg-[#f5f2eb] border border-transparent hover:border-[#c9a227]/30 transition-colors duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div>
                  <h3 className="font-display text-lg text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm font-body transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#f5f2eb]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
              <span className="text-[#1a1a1a]">Join our</span>{" "}
              <span className="italic text-[#c9a227]">team</span>
            </h2>
            <p className="text-[#4a4a4a] font-body font-light mb-10 max-w-lg mx-auto">
              We&apos;re always looking for exceptional talent to join our mission
              of backing the next generation of crypto founders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-[#1a1a1a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
            >
              View Open Positions
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
