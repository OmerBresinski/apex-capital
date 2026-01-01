"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Brand mark - two diagonal lines forming abstract "A" */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute w-[2px] h-8 bg-gradient-to-b from-[#c9a227] to-transparent transform rotate-[20deg]" />
              <div className="absolute w-[2px] h-8 bg-gradient-to-b from-transparent to-[#c9a227] transform rotate-[20deg] translate-x-3" />
            </div>
            <span className="font-display text-2xl tracking-tight">
              <span className="text-[#f5f2eb]">Apex</span>
              <span className="text-[#c9a227] italic ml-1">Capital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#f5f2eb]/70 hover:text-[#c9a227] font-body text-sm tracking-wide transition-colors duration-300 link-hover"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-[#c9a227]/30 text-[#c9a227] font-body text-sm tracking-wide hover:bg-[#c9a227] hover:text-[#0a0a0a] transition-all duration-300"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#f5f2eb]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
