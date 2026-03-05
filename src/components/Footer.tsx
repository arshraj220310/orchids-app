"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Services: [
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Dental Implants",
    "Invisalign®",
    "Emergency Care",
    "Preventive Care",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Patient Results",
    "Blog",
    "Careers",
    "Press",
  ],
  Patients: [
    "New Patients",
    "Patient Portal",
    "Insurance",
    "Financing",
    "Patient Forms",
    "Refer a Friend",
  ],
};

const socials = [
  { icon: <Facebook className="w-4 h-4" />, label: "Facebook", href: "#" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "#" },
  { icon: <Youtube className="w-4 h-4" />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="gradient-bg relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 lg:h-16 -mt-px">
          <path d="M0,0 C240,50 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(212,168,67,0.3) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-10">
        {/* Top CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to transform your smile?
            </h3>
            <p className="text-white/60 text-sm">Book your free consultation today. No pressure, no obligation.</p>
          </div>
          <a
            href="#booking"
            className="flex-shrink-0 btn-primary px-7 py-4 rounded-full font-semibold text-base"
          >
            Book Free Consultation →
          </a>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0e9d9d" />
                      <stop offset="100%" stopColor="#5dd0d0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 4C14 4 8 9 8 15c0 3 1 6 2 9l2 10c0.5 2 1.5 2 2 0l2-8c0.5-2 1.5-2 2 0 0.5 1.5 1 3 2 4 1-1 1.5-2.5 2-4 0.5-2 1.5-2 2 0l2 8c0.5 2 1.5 2 2 0l2-10c1-3 2-6 2-9 0-6-6-11-12-11z"
                    fill="url(#footerLogoGrad)"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Lumina<span className="text-teal-400">Dent</span>
                </div>
                <div className="text-[10px] text-white/40 tracking-[0.15em] uppercase">Premium Dental Care</div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Award-winning dental practice serving NYC since 2004. Where science meets artistry 
              to create smiles that last a lifetime.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-5 flex gap-2">
              {["NYC's Best 2024", "AACD Member", "Diamond Provider"].map((a) => (
                <span key={a} className="text-[10px] px-2 py-0.5 bg-white/10 text-white/60 rounded-full whitespace-nowrap">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3.5">
              <a href="tel:+15551234567" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                (555) 123-4567
              </a>
              <a href="mailto:hello@luminadent.com" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                hello@luminadent.com
              </a>
              <div className="flex items-start gap-2.5 text-white/55 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                <span>242 W 52nd St<br />New York, NY 10019</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/55 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-400" />
                <span>Mon–Fri: 8am–7pm<br />Sat: 9am–5pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/35 text-xs">
          <p>© 2024 LuminaDent. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice", "Accessibility"].map((l) => (
              <a key={l} href="#" className="hover:text-white/70 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <p>Made with ♥ in New York City</p>
        </div>
      </div>
    </footer>
  );
}
