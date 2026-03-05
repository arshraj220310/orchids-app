"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useInView as useInViewObserver } from "react-intersection-observer";

const stats = [
  {
    value: 15000,
    suffix: "+",
    label: "Happy Patients",
    description: "Smiles transformed since 2004",
    icon: "😊",
    color: "#0e9d9d",
  },
  {
    value: 20,
    suffix: "yr",
    label: "Years of Excellence",
    description: "Pioneering dental innovation",
    icon: "🏆",
    color: "#d4a843",
  },
  {
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Based on 2,400+ verified reviews",
    icon: "⭐",
    color: "#5dd0d0",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Implants Placed",
    description: "With 98% long-term success rate",
    icon: "🦷",
    color: "#2ab8b8",
  },
  {
    value: 48,
    suffix: "hr",
    label: "Emergency Response",
    description: "Maximum wait for urgent cases",
    icon: "⚡",
    color: "#f59e0b",
  },
  {
    value: 500,
    suffix: "+",
    label: "Invisalign Cases",
    description: "As a Diamond Provider",
    icon: "✨",
    color: "#0a7e7e",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInViewObserver({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-7 border border-white/10 overflow-hidden text-center card-hover"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}20, transparent 70%)` }}
      />

      {/* Icon */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
        className="text-4xl mb-4"
      >
        {stat.icon}
      </motion.div>

      {/* Number */}
      <div
        className="text-5xl font-black mb-2 leading-none"
        style={{ color: stat.color, fontFamily: "var(--font-playfair)" }}
      >
        {inView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={2.5}
            separator=","
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>

      <h3 className="text-white font-semibold text-base mb-1">{stat.label}</h3>
      <p className="text-white/50 text-xs">{stat.description}</p>

      {/* Animated bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 rounded-b-3xl"
        style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
      />
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden gradient-bg noise">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-white/5"
        />
        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${5 + (i * 4.8) % 90}%`,
              top: `${10 + (i * 8.7) % 80}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1], y: [-5, -15, -5] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">By The Numbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Numbers That Tell{" "}
            <span className="text-gradient-gold">Our Story</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            Two decades of excellence, thousands of transformations, and a relentless commitment to your smile.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to become our next success story?
            </h3>
            <p className="text-white/50 text-sm">Join 15,000+ patients who trust LuminaDent with their smiles.</p>
          </div>
          <a
            href="#booking"
            className="btn-primary flex-shrink-0 px-7 py-3.5 rounded-full font-semibold"
          >
            Start Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
