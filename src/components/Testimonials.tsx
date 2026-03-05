"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Walsh",
    age: 34,
    treatment: "Smile Makeover",
    rating: 5,
    text: "I spent years hiding my smile in photos. Dr. Chen gave me veneers so natural that people don't believe they aren't real. I cried the first time I saw my reflection. LuminaDent didn't just fix my teeth — they gave me my confidence back.",
    initials: "JW",
    color: "from-rose-400 to-rose-600",
    location: "Manhattan, NYC",
  },
  {
    name: "Michael Torres",
    age: 52,
    treatment: "Full Arch Implants",
    rating: 5,
    text: "After losing several teeth in an accident, I thought I'd never smile normally again. Dr. Reed's full arch implants changed everything. The procedure was genuinely painless — I can't believe how natural they feel. Best investment of my life.",
    initials: "MT",
    color: "from-blue-500 to-blue-700",
    location: "Brooklyn, NYC",
  },
  {
    name: "Sophia Kim",
    age: 27,
    treatment: "Invisalign Treatment",
    rating: 5,
    text: "Dr. Patel completed my Invisalign in just 11 months when I was quoted 18 months elsewhere. She was available every time I had a question, and the results are absolutely stunning. My jaw literally dropped when I saw my final before/after photos.",
    initials: "SK",
    color: "from-teal-400 to-teal-600",
    location: "Queens, NYC",
  },
  {
    name: "David Okonkwo",
    age: 41,
    treatment: "Teeth Whitening + Veneers",
    rating: 5,
    text: "I've been to many dentists across three cities and LuminaDent is in a completely different league. The technology, the bedside manner, the results — exceptional at every step. My teeth are now 9 shades whiter. My smile is the first thing people comment on.",
    initials: "DO",
    color: "from-amber-500 to-amber-700",
    location: "Upper East Side, NYC",
  },
  {
    name: "Rachel Steinberg",
    age: 45,
    treatment: "Emergency Root Canal",
    rating: 5,
    text: "Called at 10pm on a Sunday with unbearable pain. Dr. Reed saw me at 8am Monday and performed a root canal so gently I barely felt it. Most dentists would have just given me antibiotics and sent me home. LuminaDent genuinely cares.",
    initials: "RS",
    color: "from-violet-500 to-violet-700",
    location: "Midtown, NYC",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-b from-white to-[#f0fafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-4"
          >
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-teal-700 text-sm font-medium">Patient Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Real People.{" "}
            <span className="text-gradient">Real Smiles.</span>
          </motion.h2>
          <p className="text-gray-500">2,400+ five-star reviews and counting</p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background blobs */}
          <div className="absolute -inset-8 bg-gradient-to-br from-teal-50 to-transparent rounded-[48px] opacity-60" />

          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Avatar + Info */}
                  <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-2xl font-black text-white shadow-lg`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {testimonials[current].initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[current].location}</p>
                      <div className="mt-1 inline-flex items-center gap-1 bg-teal-50 border border-teal-100 rounded-full px-2.5 py-0.5">
                        <span className="text-teal-700 text-xs font-medium">{testimonials[current].treatment}</span>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Right: Testimonial Text */}
                  <div className="flex-1 relative">
                    <Quote className="absolute -top-1 -left-1 w-10 h-10 text-teal-100 fill-teal-100" />
                    <p className="relative text-gray-600 text-lg leading-relaxed pl-8 italic">
                      "{testimonials[current].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2.5 bg-teal-500" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-600 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-teal-500 flex items-center justify-center text-white hover:bg-teal-600 transition-all duration-200 shadow-lg shadow-teal-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Review summary row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { platform: "Google", rating: "4.9", count: "1,240 reviews", color: "#4285F4" },
            { platform: "Yelp", rating: "4.8", count: "640 reviews", color: "#d32323" },
            { platform: "Healthgrades", rating: "5.0", count: "380 reviews", color: "#00966d" },
            { platform: "ZocDoc", rating: "4.9", count: "180 reviews", color: "#3C6DF0" },
          ].map((p) => (
            <div key={p.platform} className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm">
              <div className="text-2xl font-black" style={{ color: p.color, fontFamily: "var(--font-playfair)" }}>
                {p.rating}
              </div>
              <div className="flex justify-center gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="font-semibold text-gray-800 text-sm">{p.platform}</div>
              <div className="text-gray-400 text-xs">{p.count}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
