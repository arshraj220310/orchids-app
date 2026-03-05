"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Shield, Award, Sparkles, CheckCircle2, CalendarDays, Users, TrendingUp } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const floatingBadges = [
  { icon: "⭐", text: "4.9/5 Rating", sub: "2,400+ reviews", delay: 0, x: "left-[5%]", y: "top-[30%]" },
  { icon: "🏆", text: "Best Dental", sub: "NYC 2024 Award", delay: 0.3, x: "right-[5%]", y: "top-[25%]" },
  { icon: "✓", text: "Painless Care", sub: "Guaranteed", delay: 0.6, x: "left-[3%]", y: "bottom-[25%]" },
];

function ToothSVG() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
    >
      <defs>
        <linearGradient id="toothGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="#e0f5f5" stopOpacity="1" />
          <stop offset="100%" stopColor="#b3e8e8" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="toothGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0e9d9d" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a7e7e" stopOpacity="0.1" />
        </linearGradient>
        <filter id="toothGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="shineGrad" cx="35%" cy="25%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* Main tooth shape */}
      <path
        d="M100 15 C65 15 30 45 28 80 C26 105 35 130 45 155 L55 215 C57 225 63 228 70 225 C77 222 80 210 83 200 L90 172 C92 164 95 160 100 160 C105 160 108 164 110 172 L117 200 C120 210 123 222 130 225 C137 228 143 225 145 215 L155 155 C165 130 174 105 172 80 C170 45 135 15 100 15 Z"
        fill="url(#toothGrad1)"
        filter="url(#toothGlow)"
        strokeWidth="1.5"
        stroke="rgba(14, 157, 157, 0.3)"
      />

      {/* Highlight/shine on tooth */}
      <path
        d="M68 30 C58 40 48 58 46 75"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M80 22 C72 28 64 38 60 52"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Inner gradient overlay */}
      <path
        d="M100 15 C65 15 30 45 28 80 C26 105 35 130 45 155 L55 215 C57 225 63 228 70 225 C77 222 80 210 83 200 L90 172 C92 164 95 160 100 160 C105 160 108 164 110 172 L117 200 C120 210 123 222 130 225 C137 228 143 225 145 215 L155 155 C165 130 174 105 172 80 C170 45 135 15 100 15 Z"
        fill="url(#shineGrad)"
        opacity="0.4"
      />

      {/* Sparkle dots */}
      <circle cx="148" cy="65" r="3" fill="#0e9d9d" opacity="0.6" />
      <circle cx="152" cy="55" r="1.5" fill="#0e9d9d" opacity="0.4" />
      <circle cx="158" cy="68" r="2" fill="#d4a843" opacity="0.5" />
    </svg>
  );
}

function OrbitingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/20"
        style={{ width: "420px", height: "420px" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-300/15"
        style={{ width: "540px", height: "540px" }}
      />

      {/* Orbiting pill badges */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "420px", height: "420px" }}
      >
        <div
          className="absolute glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
          style={{ top: "-18px", left: "50%", transform: "translateX(-50%) rotate(0deg)" }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-xs font-medium whitespace-nowrap">Painless Treatment</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "540px", height: "540px" }}
      >
        <div
          className="absolute glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg"
          style={{ top: "-18px", right: "-30px", transform: "rotate(0deg)" }}
        >
          <Shield className="w-3 h-3 text-teal-300" />
          <span className="text-white text-xs font-medium whitespace-nowrap">FDA Certified</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg noise" />

      {/* Animated mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
          animate={{
            background: [
              "radial-gradient(circle, #0e9d9d 0%, transparent 70%)",
              "radial-gradient(circle, #2ab8b8 0%, transparent 70%)",
              "radial-gradient(circle, #0e9d9d 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
          animate={{
            background: [
              "radial-gradient(circle, #d4a843 0%, transparent 70%)",
              "radial-gradient(circle, #f0c96d 0%, transparent 70%)",
              "radial-gradient(circle, #d4a843 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${10 + (i * 6.5) % 85}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [-20, -50, -20],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Content */}
        <motion.div style={{ opacity }} className="relative z-10 pt-20 lg:pt-0">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">NYC's #1 Rated Dental Practice 2024</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Perfect
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="text-gradient-gold">Smile</span>{" "}
              <span className="text-white">Awaits</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white/90"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              You.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-6 text-lg text-white/65 leading-relaxed max-w-lg"
          >
            We combine cutting-edge technology with artistic precision to craft smiles that transform lives. 
            Experience dental care that's as comfortable as it is beautiful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="btn-primary group flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold animate-pulse-glow"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              className="flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white/80 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-base font-medium"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </div>
              View Our Results
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex items-center gap-8"
          >
            {[
              { value: "15K+", label: "Happy Patients" },
              { value: "20yr", label: "Experience" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 tracking-wide">{stat.label}</span>
              </div>
            ))}
            <div className="w-px h-10 bg-white/10" />
            {/* Avatar stack */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#0e9d9d", "#d4a843", "#5dd0d0", "#0a7e7e"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: color }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-white/60 ml-1">Trusted by thousands</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center">
          <OrbitingElements />

          {/* Main tooth */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 w-64 h-80 lg:w-80 lg:h-96 animate-float"
          >
            <ToothSVG />

            {/* Glow beneath tooth */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-10 bg-teal-400/30 blur-xl rounded-full" />
          </motion.div>

          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              className={`absolute ${badge.x} ${badge.y} glass rounded-2xl p-3 shadow-xl animate-float-delayed`}
              style={{ animationDelay: `${badge.delay}s` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{badge.icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold">{badge.text}</p>
                  <p className="text-white/60 text-[10px]">{badge.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Sparkle accents */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
            className="absolute top-8 right-16 text-yellow-400 opacity-70"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, delay: 1 } }}
            className="absolute bottom-20 left-16 text-teal-300 opacity-60"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

    </section>

    {/* Container Scroll 3D Preview Section */}
    <section className="bg-[#f0fafa] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4 bg-teal-50 border border-teal-200 px-4 py-1.5 rounded-full"
            >
              Our Digital Practice
            </motion.span>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#0a2e2e] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              World-Class Care,
              <br />
              <span className="text-teal-600">Beautifully Delivered</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              Our state-of-the-art facility and patient portal give you complete control of your dental journey.
            </p>
          </div>
        }
      >
        {/* Clinic Dashboard Mock-up inside the 3D card */}
        <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#0d1b2a]">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0a1520] border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/10 rounded-md px-3 py-1 text-[11px] text-white/50 max-w-sm mx-auto text-center">
                app.luminadent.com/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex h-[calc(100%-40px)]">
            {/* Sidebar */}
            <div className="w-14 md:w-52 bg-[#081018] border-r border-white/5 flex flex-col py-4 gap-1 px-2">
              <div className="flex items-center gap-3 px-2 py-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                <span className="text-white font-semibold text-sm hidden md:block">LuminaDent</span>
              </div>
              {[
                { icon: <CalendarDays className="w-4 h-4" />, label: "Appointments", active: true },
                { icon: <Users className="w-4 h-4" />, label: "Patients", active: false },
                { icon: <TrendingUp className="w-4 h-4" />, label: "Analytics", active: false },
                { icon: <CheckCircle2 className="w-4 h-4" />, label: "Treatments", active: false },
              ].map(({ icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-all ${
                    active ? "bg-teal-500/20 text-teal-400" : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  {icon}
                  <span className="text-sm hidden md:block">{label}</span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-3 md:p-5 overflow-hidden">
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Today's Appts", value: "12", color: "text-teal-400", bg: "bg-teal-500/10" },
                  { label: "New Patients", value: "3", color: "text-green-400", bg: "bg-green-500/10" },
                  { label: "Satisfaction", value: "99%", color: "text-yellow-400", bg: "bg-yellow-500/10" },
                  { label: "Treatments Done", value: "47", color: "text-purple-400", bg: "bg-purple-500/10" },
                ].map(({ label, value, color, bg }) => (
                  <div key={label} className={`${bg} rounded-xl p-3 border border-white/5`}>
                    <div className={`text-xl md:text-2xl font-bold ${color}`}>{value}</div>
                    <div className="text-white/40 text-[10px] md:text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Appointment list + smile photo */}
              <div className="grid md:grid-cols-5 gap-3 h-[calc(100%-80px)]">
                {/* Appointments */}
                <div className="md:col-span-3 bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-3 py-2 border-b border-white/5 text-white/70 text-xs font-semibold uppercase tracking-widest">
                    Upcoming Appointments
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      { name: "Sarah Johnson", time: "9:00 AM", type: "Teeth Whitening", avatar: "SJ" },
                      { name: "Marcus Lee", time: "10:30 AM", type: "Invisalign Check", avatar: "ML" },
                      { name: "Emily Davis", time: "12:00 PM", type: "Dental Crown", avatar: "ED" },
                      { name: "Robert Kim", time: "2:00 PM", type: "Root Canal", avatar: "RK" },
                    ].map(({ name, time, type, avatar }) => (
                      <div key={name} className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 transition-colors">
                        <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-[10px] text-white font-bold shrink-0">
                          {avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white/80 text-xs font-medium truncate">{name}</div>
                          <div className="text-white/40 text-[10px] truncate">{type}</div>
                        </div>
                        <div className="text-teal-400 text-[10px] font-mono shrink-0">{time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smile preview */}
                <div className="md:col-span-2 rounded-xl overflow-hidden relative bg-[#0a1520] border border-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80"
                    alt="Beautiful smile result"
                    fill
                    className="object-cover opacity-80"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-xs font-semibold">Latest Result</div>
                    <div className="text-teal-400 text-[10px] flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Smile Transformation Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
