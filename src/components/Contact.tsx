"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();

  return (
    <section key={pathname} className="relative py-32 overflow-hidden">
      {/* Background - dark */}
      <div className="absolute inset-0 bg-[#141414]" />
      <div className="absolute inset-0 grid-pattern-dark" />

      {/* Decorative glows */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-[#c9a227]/8 rounded-full blur-[120px]" />

      {/* Large decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 display-number text-[20rem] text-[#f5f2eb]/[0.03] pointer-events-none select-none hidden lg:block">
        &
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-[1px] bg-[#c9a227]" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            <span className="text-[#f5f2eb]">Let&apos;s build the</span>
            <br />
            <span className="italic text-[#c9a227]">future together</span>
          </h2>

          <p className="text-lg text-[#f5f2eb]/70 mb-12 font-body font-light max-w-2xl mx-auto">
            Whether you&apos;re a founder with a bold vision or an LP seeking
            crypto exposure, we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:pitch@apexcap.vc"
            className="group relative px-10 py-5 bg-[#c9a227] text-[#0a0a0a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Pitch a Project
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
            </span>
          </a>
          <a
            href="mailto:invest@apexcap.vc"
            className="group px-10 py-5 border border-[#f5f2eb]/20 text-[#f5f2eb] font-body text-sm tracking-wide hover:bg-[#f5f2eb] hover:text-[#0a0a0a] transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              LP Inquiries
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
            </span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="#"
            className="group flex items-center gap-2 text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="font-body text-sm link-hover">Twitter</span>
          </a>
          <div className="w-[1px] h-4 bg-[#f5f2eb]/10 transform rotate-[20deg]" />
          <a
            href="#"
            className="group flex items-center gap-2 text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="font-body text-sm link-hover">LinkedIn</span>
          </a>
          <div className="w-[1px] h-4 bg-[#f5f2eb]/10 transform rotate-[20deg]" />
          <a
            href="#"
            className="group flex items-center gap-2 text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            <span className="font-body text-sm link-hover">Medium</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
