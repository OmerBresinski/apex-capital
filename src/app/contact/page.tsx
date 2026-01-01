"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const contacts = [
  { title: "Founders", email: "pitch@apexcap.vc", description: "Pitch your project" },
  { title: "Investors", email: "invest@apexcap.vc", description: "LP inquiries" },
  { title: "Careers", email: "careers@apexcap.vc", description: "Join our team" },
  { title: "Press", email: "press@apexcap.vc", description: "Media inquiries" },
];

const offices = [
  { city: "New York", address: "350 Fifth Avenue" },
  { city: "London", address: "30 St Mary Axe" },
  { city: "Singapore", address: "One Raffles Place" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#f5f2eb]">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-[#c9a227]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Get in Touch
              </span>
              <div className="w-8 h-[1px] bg-[#c9a227]" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              <span className="text-[#1a1a1a]">Let&apos;s build the</span>
              <br />
              <span className="italic text-[#c9a227]">future</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#4a4a4a] font-body font-light max-w-2xl mx-auto"
          >
            Whether you&apos;re a founder with a bold vision or an LP seeking
            crypto exposure, we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((item, i) => (
              <motion.a
                key={item.title}
                href={`mailto:${item.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#ebe7dd] p-8 overflow-hidden border border-transparent group-hover:border-[#c9a227]/30 transition-colors duration-500"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl text-[#1a1a1a] mb-2 group-hover:text-[#c9a227] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm font-body mb-4 transition-colors duration-300">{item.description}</p>
                  <span className="text-[#c9a227] text-sm font-body group-hover:text-[#e3bc4a] transition-colors duration-300">
                    {item.email}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#ebe7dd]" />
        <div className="absolute inset-0 diagonal-lines" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Contact Form
              </span>
              <div className="w-8 h-[1px] bg-[#c9a227]" />
            </div>
            <h2 className="font-display text-3xl text-[#1a1a1a]">
              Send us a message
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 bg-[#f5f2eb] border border-[#1a1a1a]/10 text-[#1a1a1a] placeholder-[#6b6b6b] focus:border-[#c9a227] focus:outline-none font-body transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-[#f5f2eb] border border-[#1a1a1a]/10 text-[#1a1a1a] placeholder-[#6b6b6b] focus:border-[#c9a227] focus:outline-none font-body transition-colors duration-300"
              />
            </div>
            <select className="w-full px-5 py-4 bg-[#f5f2eb] border border-[#1a1a1a]/10 text-[#6b6b6b] focus:border-[#c9a227] focus:outline-none font-body transition-colors duration-300">
              <option value="">Select inquiry type</option>
              <option value="pitch">Founder Pitch</option>
              <option value="invest">LP Investment</option>
              <option value="careers">Careers</option>
              <option value="other">Other</option>
            </select>
            <textarea
              rows={6}
              placeholder="Your message..."
              className="w-full px-5 py-4 bg-[#f5f2eb] border border-[#1a1a1a]/10 text-[#1a1a1a] placeholder-[#6b6b6b] focus:border-[#c9a227] focus:outline-none font-body resize-none transition-colors duration-300"
            />
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#c9a227] text-[#1a1a1a] font-body text-sm font-medium tracking-wide hover:bg-[#e3bc4a] transition-all duration-300"
              >
                Send Message
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
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Offices */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#f5f2eb]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-body tracking-[0.2em] uppercase">
                Locations
              </span>
              <div className="w-8 h-[1px] bg-[#c9a227]" />
            </div>
            <h2 className="font-display text-3xl text-[#1a1a1a]">Our Offices</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-16">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-2xl text-[#1a1a1a] mb-2">{office.city}</h3>
                <p className="text-[#6b6b6b] text-sm font-body">{office.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#ebe7dd]" />
        <div className="absolute inset-0 diagonal-lines" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            <a
              href="#"
              className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#c9a227] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-body text-sm">Twitter</span>
            </a>
            <div className="w-[1px] h-4 bg-[#1a1a1a]/10 transform rotate-[20deg]" />
            <a
              href="#"
              className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#c9a227] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-body text-sm">LinkedIn</span>
            </a>
            <div className="w-[1px] h-4 bg-[#1a1a1a]/10 transform rotate-[20deg]" />
            <a
              href="#"
              className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#c9a227] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              <span className="font-body text-sm">Medium</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
