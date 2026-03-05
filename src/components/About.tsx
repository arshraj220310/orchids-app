"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, GraduationCap, Award, Heart } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Cosmetic Dentist",
    specialty: "Smile Design & Veneers",
    bio: "Harvard-trained with 18 years of experience crafting award-winning smiles. Featured in Vogue & NY Times.",
    bg: "from-teal-400 to-teal-600",
    initials: "SC",
    credentials: ["DDS, Harvard", "AACD Member", "18 Years Exp."],
  },
  {
    name: "Dr. Marcus Reed",
    role: "Implant Specialist",
    specialty: "Dental Implants & Surgery",
    bio: "Board-certified oral surgeon with over 3,000 successful implant procedures and a gentle, patient-first approach.",
    bg: "from-slate-600 to-slate-800",
    initials: "MR",
    credentials: ["MD, Columbia", "Board Certified", "3000+ Implants"],
  },
  {
    name: "Dr. Priya Patel",
    role: "Orthodontist",
    specialty: "Invisalign & Braces",
    bio: "Invisalign Diamond Provider and orthodontics expert. Transforming smiles for teens and adults with precision.",
    bg: "from-yellow-500 to-amber-600",
    initials: "PP",
    credentials: ["DDS, NYU", "Diamond Provider", "Invisalign Expert"],
  },
];

const milestones = [
  { year: "2004", label: "Founded LuminaDent with a vision for pain-free, beautiful dentistry" },
  { year: "2010", label: "Expanded to our state-of-the-art 5,000 sq ft flagship clinic" },
  { year: "2016", label: "Introduced digital smile design and same-day CEREC crowns" },
  { year: "2020", label: "Named NYC's #1 Dental Practice by New York Magazine" },
  { year: "2024", label: "Served 15,000+ patients across 3 clinic locations" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section: Story */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Main image placeholder with design */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 to-teal-600 aspect-[4/5] max-w-md">
              {/* Abstract dental clinic visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-6 animate-pulse-glow">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                    <defs>
                      <linearGradient id="clinicGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffffff" />
                        <stop offset="1" stopColor="#b3e8e8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M40 8C25 8 12 18 12 30C12 39 17 46 25 51L28 72H52L55 51C63 46 68 39 68 30C68 18 55 8 40 8Z"
                      fill="url(#clinicGrad)"
                      opacity="0.9"
                    />
                    <path
                      d="M32 25C34 20 38 18 42 20"
                      stroke="rgba(14,157,157,0.6)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "Where science meets artistry — every smile is a masterpiece."
                </p>
                <div className="mt-4 text-white/60 text-xs">— Dr. Sarah Chen, Founder</div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-400/20 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute bottom-8 left-8 w-8 h-8 rounded-full bg-white/10 animate-float" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-700">Award 2024</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug">Best Dental Practice in New York City</p>
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
                ))}
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -left-4 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-4 shadow-xl text-white text-center"
            >
              <div className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>20</div>
              <div className="text-xs opacity-80 mt-0.5">Years of<br/>Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-5">
              <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
              <span className="text-teal-700 text-sm font-medium">Our Story</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              We Don't Just Fix Teeth.{" "}
              <span className="text-gradient">We Change Lives.</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-5">
              Founded in 2004, LuminaDent was built on a single belief: that every person deserves a smile that 
              makes them feel confident, beautiful, and unstoppable. We've been redefining dental care ever since.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our clinic combines the warmth of a boutique practice with the technology of a world-class dental center. 
              From 3D imaging to AI-assisted smile design, we use every innovation available to deliver results 
              that exceed expectations.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "State-of-the-art digital X-ray and 3D cone beam CT imaging",
                "AI-powered smile simulation before any treatment begins",
                "Sedation dentistry for anxiety-free experiences",
                "Same-day emergency appointments always available",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3.5 rounded-full font-semibold"
            >
              Meet Our Team
            </a>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet the <span className="text-gradient">Experts</span>
            </motion.h2>
            <p className="text-gray-500">Board-certified specialists dedicated to your smile</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
              >
                {/* Photo area */}
                <div className={`h-52 bg-gradient-to-br ${member.bg} relative flex items-end justify-end p-4`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-black text-white"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  {/* Specialty badge */}
                  <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">{member.specialty}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>
                    {member.name}
                  </h3>
                  <p className="text-teal-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((c) => (
                      <span key={c} className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600 flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 text-teal-500" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our <span className="text-gradient">Journey</span>
            </motion.h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300 to-teal-100 origin-top"
              style={{ transform: "translateX(-50%)" }}
            />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div
                    className="text-2xl font-black text-gradient"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {m.year}
                  </div>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.label}</p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-[0_0_0_2px_rgba(14,157,157,0.3)]" />

                {/* Empty half */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
