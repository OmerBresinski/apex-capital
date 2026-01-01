"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer key={pathname} className="relative bg-[#0a0a0a] border-t border-[#f5f2eb]/10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 diagonal-lines-dark opacity-30" />

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 group mb-6">
              {/* Brand mark */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute w-[2px] h-8 bg-gradient-to-b from-[#c9a227] to-[#c9a227]/30 transform rotate-[20deg]" />
                <div className="absolute w-[2px] h-8 bg-gradient-to-b from-[#c9a227]/30 to-[#c9a227] transform rotate-[20deg] translate-x-3" />
              </div>
              <span className="font-display text-2xl tracking-tight">
                <span className="text-[#f5f2eb]">Apex</span>
                <span className="text-[#c9a227] italic ml-1">Capital</span>
              </span>
            </Link>
            <p className="text-[#f5f2eb]/50 font-body text-sm max-w-xs leading-relaxed">
              Crypto venture capital since 2016. Partnering with visionary
              founders building the future of finance.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#f5f2eb]/70 font-body text-sm hover:text-[#c9a227] transition-colors duration-300 link-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@apexcap.vc"
                  className="text-[#f5f2eb]/70 font-body text-sm hover:text-[#c9a227] transition-colors duration-300"
                >
                  hello@apexcap.vc
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href="#"
                    className="text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#f5f2eb]/50 hover:text-[#c9a227] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#f5f2eb]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f5f2eb]/50 text-xs font-body">
              &copy; {new Date().getFullYear()} Apex Capital. All rights reserved.
            </p>
            <p className="text-[#f5f2eb]/30 text-xs font-body max-w-lg text-center md:text-right">
              This website does not constitute an offer to sell or solicitation of
              an offer to buy any securities.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
    </footer>
  );
}
