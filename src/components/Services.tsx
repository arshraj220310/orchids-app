"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, CalendarCheck } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const services = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0e9d9d" />
            <stop offset="1" stopColor="#0a7e7e" />
          </linearGradient>
        </defs>
        <path d="M24 8C16 8 8 14 8 22C8 27 11 31 15 34L18 44H30L33 34C37 31 40 27 40 22C40 14 32 8 24 8Z" fill="url(#svc1)" opacity="0.15" />
        <path d="M24 8C16 8 8 14 8 22C8 27 11 31 15 34L18 44H30L33 34C37 31 40 27 40 22C40 14 32 8 24 8Z" stroke="url(#svc1)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 22C20 18 24 16 28 18" stroke="url(#svc1)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Cosmetic Dentistry",
    description: "Transform your smile with porcelain veneers, bonding, and complete smile makeovers tailored to your facial aesthetics.",
    features: ["Porcelain Veneers", "Smile Makeover", "Dental Bonding"],
    color: "from-teal-500/10 to-teal-600/5",
    accent: "#0e9d9d",
    hoverGlow: "rgba(14, 157, 157, 0.15)",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d4a843" />
            <stop offset="1" stopColor="#c49a2e" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="20" r="10" fill="url(#svc2)" opacity="0.15" />
        <circle cx="24" cy="20" r="10" stroke="url(#svc2)" strokeWidth="2" />
        <path d="M16 36C16 30 20 28 24 28C28 28 32 30 32 36" stroke="url(#svc2)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="4" fill="url(#svc2)" opacity="0.4" />
        <path d="M24 4L24 8M4 20H8M40 20H44M24 36V40" stroke="url(#svc2)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Teeth Whitening",
    description: "Professional-grade whitening treatments that deliver up to 8 shades brighter results in a single visit.",
    features: ["Laser Whitening", "Take-Home Kits", "Stain Removal"],
    color: "from-yellow-500/10 to-yellow-600/5",
    accent: "#d4a843",
    hoverGlow: "rgba(212, 168, 67, 0.15)",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5dd0d0" />
            <stop offset="1" stopColor="#0e9d9d" />
          </linearGradient>
        </defs>
        <rect x="12" y="8" width="24" height="32" rx="6" fill="url(#svc3)" opacity="0.15" />
        <rect x="12" y="8" width="24" height="32" rx="6" stroke="url(#svc3)" strokeWidth="2" />
        <path d="M18 16H30M18 22H30M18 28H24" stroke="url(#svc3)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements using titanium implants and custom-crafted crowns.",
    features: ["Single Tooth", "Full Arch", "Same-Day Implants"],
    color: "from-cyan-500/10 to-cyan-600/5",
    accent: "#5dd0d0",
    hoverGlow: "rgba(93, 208, 208, 0.15)",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc4" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a7e7e" />
            <stop offset="1" stopColor="#096161" />
          </linearGradient>
        </defs>
        <path d="M8 24C8 15 15 8 24 8C33 8 40 15 40 24" stroke="url(#svc4)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24C8 33 15 40 24 40C33 40 40 33 40 24" stroke="url(#svc4)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
        <circle cx="24" cy="24" r="6" fill="url(#svc4)" opacity="0.2" />
        <circle cx="24" cy="24" r="6" stroke="url(#svc4)" strokeWidth="2" />
      </svg>
    ),
    title: "Invisalign® Braces",
    description: "Virtually invisible aligners that straighten your teeth discreetly — no metal wires, no dietary restrictions.",
    features: ["Clear Aligners", "Teen & Adult", "Fast Results"],
    color: "from-teal-700/10 to-teal-800/5",
    accent: "#0a7e7e",
    hoverGlow: "rgba(10, 126, 126, 0.15)",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc5" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f59e0b" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <path d="M24 8L28 18H40L30 25L34 36L24 29L14 36L18 25L8 18H20L24 8Z" fill="url(#svc5)" opacity="0.2" />
        <path d="M24 8L28 18H40L30 25L34 36L24 29L14 36L18 25L8 18H20L24 8Z" stroke="url(#svc5)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Emergency Care",
    description: "24/7 emergency dental services for sudden pain, broken teeth, lost fillings, and dental trauma.",
    features: ["Same-Day Appointments", "Pain Relief", "Trauma Care"],
    color: "from-amber-500/10 to-amber-600/5",
    accent: "#f59e0b",
    hoverGlow: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "06",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <defs>
          <linearGradient id="svc6" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2ab8b8" />
            <stop offset="1" stopColor="#0e9d9d" />
          </linearGradient>
        </defs>
        <path d="M12 14C12 10 16 8 20 8H28C32 8 36 10 36 14C36 22 28 30 24 34C20 30 12 22 12 14Z" fill="url(#svc6)" opacity="0.15" />
        <path d="M12 14C12 10 16 8 20 8H28C32 8 36 10 36 14C36 22 28 30 24 34C20 30 12 22 12 14Z" stroke="url(#svc6)" strokeWidth="2" />
        <path d="M20 20L23 23L29 17" stroke="url(#svc6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 40H30" stroke="url(#svc6)" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 34V40" stroke="url(#svc6)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Preventive Care",
    description: "Comprehensive cleanings, X-rays, and exams that catch problems early and keep your smile healthy for life.",
    features: ["Deep Cleaning", "Sealants", "Fluoride Treatments"],
    color: "from-teal-400/10 to-teal-500/5",
    accent: "#2ab8b8",
    hoverGlow: "rgba(42, 184, 184, 0.15)",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-white rounded-3xl p-7 border border-gray-100 card-hover cursor-pointer overflow-hidden"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
      }}
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 30% 30%, ${service.hoverGlow}, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Number + Icon */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `linear-gradient(135deg, ${service.hoverGlow}, transparent)`, border: `1px solid ${service.accent}20` }}
          >
            {service.icon}
          </div>
          <span
            className="text-3xl font-black opacity-10 group-hover:opacity-30 transition-opacity duration-300"
            style={{ color: service.accent, fontFamily: "var(--font-playfair)" }}
          >
            {service.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
          {service.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((feat) => (
            <span
              key={feat}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${service.accent}15`,
                color: service.accent,
              }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <div
          className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          style={{ color: service.accent }}
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-[#f0fafa] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(14,157,157,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-teal-700 text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything Your Smile{" "}
            <span className="text-gradient">Deserves</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            From routine cleanings to complete smile transformations — we offer a full spectrum of dental services 
            delivered with precision and care.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 mb-4">Not sure which treatment is right for you?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-semibold"
          >
            Get a Free Smile Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
