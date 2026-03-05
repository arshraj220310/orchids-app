"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const beforeAfterCases = [
  {
    label: "Smile Makeover",
    treatment: "Porcelain Veneers",
    duration: "2 visits",
    description: "Complete smile transformation with 10 custom porcelain veneers",
    beforeLabel: "Before",
    afterLabel: "After",
    accentColor: "#0e9d9d",
    bgColor: "from-slate-800 to-slate-600",
    afterBgColor: "from-teal-600 to-teal-400",
  },
  {
    label: "Teeth Whitening",
    treatment: "Laser Whitening",
    duration: "1 visit",
    description: "8 shades brighter with in-office laser whitening treatment",
    beforeLabel: "Before",
    afterLabel: "After",
    accentColor: "#d4a843",
    bgColor: "from-amber-900 to-amber-700",
    afterBgColor: "from-yellow-400 to-yellow-300",
  },
  {
    label: "Orthodontics",
    treatment: "Invisalign®",
    duration: "11 months",
    description: "Crowded teeth corrected with clear aligners — zero metal visible",
    beforeLabel: "Before",
    afterLabel: "After",
    accentColor: "#5dd0d0",
    bgColor: "from-gray-700 to-gray-500",
    afterBgColor: "from-cyan-500 to-cyan-300",
  },
  {
    label: "Implants",
    treatment: "Full Arch Implants",
    duration: "3 months",
    description: "Full upper arch restored with 4 implants and a precision-milled bridge",
    beforeLabel: "Before",
    afterLabel: "After",
    accentColor: "#0a7e7e",
    bgColor: "from-red-900 to-red-700",
    afterBgColor: "from-teal-700 to-teal-500",
  },
];

function BeforeAfterCard({ item, index }: { item: typeof beforeAfterCases[0]; index: number }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] card-hover"
    >
      {/* Slider visual */}
      <div
        ref={containerRef}
        className="relative h-52 cursor-col-resize overflow-hidden select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before side */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}>
          <div className="flex flex-col items-center gap-3">
            {/* Simplified tooth smile - "before" state (slightly yellowed/crooked) */}
            <svg viewBox="0 0 120 70" className="w-28 opacity-80">
              <defs>
                <linearGradient id={`bg${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8b170" />
                  <stop offset="100%" stopColor="#a89040" />
                </linearGradient>
              </defs>
              {[0,1,2,3,4,5,6,7].map((t) => {
                const x = 8 + t * 13 + (t > 3 ? 2 : 0);
                const h = [30, 36, 34, 28, 28, 34, 36, 30][t];
                const tilt = [-3, -1.5, 0, 2, -2, 0, 1.5, 3][t];
                return (
                  <g key={t} transform={`rotate(${tilt}, ${x + 5}, 50)`}>
                    <rect x={x} y={70 - h} width={11} height={h} rx={4} fill={`url(#bg${index})`} />
                  </g>
                );
              })}
            </svg>
            <span className="text-white/60 text-xs font-medium tracking-wider uppercase">Before</span>
          </div>
        </div>

        {/* After side (clipped) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.afterBgColor} flex items-center justify-center overflow-hidden`}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 120 70" className="w-28">
              <defs>
                <linearGradient id={`ag${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e0f5f5" />
                </linearGradient>
              </defs>
              {[0,1,2,3,4,5,6,7].map((t) => {
                const x = 8 + t * 13 + (t > 3 ? 2 : 0);
                const h = [32, 38, 36, 32, 32, 36, 38, 32][t];
                return (
                  <rect key={t} x={x} y={70 - h} width={11} height={h} rx={4} fill={`url(#ag${index})`} />
                );
              })}
            </svg>
            <span className="text-white/80 text-xs font-medium tracking-wider uppercase">After</span>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center cursor-col-resize">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Drag hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/60 text-[10px] bg-black/20 rounded-full px-2 py-0.5 pointer-events-none">
          Drag to compare
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: item.accentColor }}
            >
              {item.treatment}
            </span>
            <h3 className="font-bold text-gray-900 mt-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
              {item.label}
            </h3>
          </div>
          <span className="text-xs bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 text-gray-500">
            {item.duration}
          </span>
        </div>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="py-28 bg-[#f0fafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-teal-100 rounded-full px-4 py-2 mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span className="text-teal-700 text-sm font-medium">Real Transformations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Drag to Reveal the{" "}
            <span className="text-gradient">Difference</span>
          </motion.h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Every case below is a real patient story. Drag the slider to see the before and after results.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfterCases.map((item, i) => (
            <BeforeAfterCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full font-semibold"
          >
            <Sparkles className="w-4 h-4" />
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
