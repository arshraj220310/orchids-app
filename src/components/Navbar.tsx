"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-white/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Tooth SVG Logo */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0e9d9d" />
                    <stop offset="100%" stopColor="#0a7e7e" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4C14 4 8 9 8 15c0 3 1 6 2 9l2 10c0.5 2 1.5 2 2 0l2-8c0.5-2 1.5-2 2 0 0.5 1.5 1 3 2 4 1-1 1.5-2.5 2-4 0.5-2 1.5-2 2 0l2 8c0.5 2 1.5 2 2 0l2-10c1-3 2-6 2-9 0-6-6-11-12-11z"
                  fill="url(#logoGrad)"
                />
                <path
                  d="M15 12 C15 10 17 9 20 9 C23 9 25 10 25 12"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md group-hover:bg-teal-400/30 transition-all duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Lumina<span className="text-teal-500">Dent</span>
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? "text-teal-600" : "text-teal-300"}`}>
                Premium Dental Care
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  scrolled
                    ? "text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-teal-500 rounded-full transition-all duration-300 group-hover:w-4" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+15551234567"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-600 hover:text-teal-600" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              (555) 123-4567
            </motion.a>
            <motion.a
              href="#booking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Book Appointment
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 pt-20 pb-8 px-6 bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-gray-700 font-medium rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 btn-primary text-center py-3.5 rounded-full font-semibold"
              >
                Book Appointment
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-2 flex items-center justify-center gap-2 py-3 text-gray-600 text-sm"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
