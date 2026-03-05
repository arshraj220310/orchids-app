"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Microscope, Sparkles, SmilePlus } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    step: "01",
    title: "Free Consultation",
    description: "Book a no-obligation consultation where we listen to your goals, examine your smile, and answer all your questions.",
    color: "#0e9d9d",
    bg: "bg-teal-50",
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    step: "02",
    title: "Digital Diagnosis",
    description: "We use 3D imaging and AI-powered smile simulation to create a precise diagnosis and show you your results before treatment starts.",
    color: "#d4a843",
    bg: "bg-amber-50",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    step: "03",
    title: "Personalized Treatment",
    description: "Your custom treatment plan is executed with precision by our specialists using the latest technology — comfortably and efficiently.",
    color: "#5dd0d0",
    bg: "bg-cyan-50",
  },
  {
    icon: <SmilePlus className="w-7 h-7" />,
    step: "04",
    title: "Your New Smile",
    description: "Walk out with a smile that reflects who you are. We provide aftercare guidance and lifetime support for all our work.",
    color: "#0a7e7e",
    bg: "bg-teal-50",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-teal-700 text-sm font-medium">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Simple. Transparent.{" "}
            <span className="text-gradient">Exceptional.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            We've streamlined your journey from first contact to final reveal — because your time is as valuable as your smile.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-100 via-amber-100 to-teal-100 z-0" style={{ margin: "0 12.5%" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mb-5 relative shadow-sm group-hover:shadow-md transition-shadow`}
                  style={{ color: s.color, border: `1.5px solid ${s.color}25` }}
                >
                  {s.icon}
                  {/* Step number */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center"
                    style={{ background: s.color, fontFamily: "var(--font-playfair)" }}
                  >
                    {i + 1}
                  </div>
                </motion.div>

                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
