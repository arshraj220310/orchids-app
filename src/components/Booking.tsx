"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, ChevronDown, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  "General Check-up & Cleaning",
  "Teeth Whitening Consultation",
  "Smile Makeover Consultation",
  "Dental Implants Consultation",
  "Invisalign Assessment",
  "Emergency Visit",
  "Pediatric Dentistry",
  "Other",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-5">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700 text-sm font-medium">Book Appointment</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Your Smile Journey{" "}
              <span className="text-gradient">Starts Here</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              Book a complimentary consultation and discover what's possible for your smile. 
              Our team will create a personalized treatment plan just for you.
            </p>

            <div className="space-y-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />, text: "Free initial consultation — no obligation" },
                { icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />, text: "Complimentary digital smile simulation" },
                { icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />, text: "Transparent pricing, no hidden fees" },
                { icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />, text: "Flexible payment plans available" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  {item.icon}
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 p-5 rounded-2xl bg-[#f0fafa] border border-teal-100">
              <p className="font-semibold text-gray-800 mb-3 text-sm">Prefer to call?</p>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors mb-1">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <p className="text-gray-400 text-xs">Mon–Fri 8am–7pm, Sat 9am–5pm</p>
            </div>

            {/* Clinic locations */}
            <div className="mt-6 space-y-2">
              <p className="font-semibold text-gray-700 text-sm mb-3">Our Locations</p>
              {[
                { name: "Midtown Flagship", address: "242 W 52nd St, New York, NY" },
                { name: "Upper East Side", address: "1295 Park Ave, New York, NY" },
                { name: "Brooklyn Heights", address: "84 Remsen St, Brooklyn, NY" },
              ].map((loc) => (
                <div key={loc.name} className="flex gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="font-medium text-gray-700">{loc.name}</span>
                    <span className="text-gray-400"> — {loc.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3"
          >
            {!submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Progress bar */}
                <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    {["Service", "Time", "Details"].map((s, i) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            step > i + 1
                              ? "bg-teal-500 text-white"
                              : step === i + 1
                              ? "bg-teal-500 text-white ring-4 ring-teal-100"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {step > i + 1 ? "✓" : i + 1}
                        </div>
                        <span
                          className={`text-sm font-medium transition-colors ${step >= i + 1 ? "text-teal-600" : "text-gray-400"}`}
                        >
                          {s}
                        </span>
                        {i < 2 && <div className={`w-8 lg:w-16 h-0.5 transition-colors ${step > i + 1 ? "bg-teal-400" : "bg-gray-200"}`} />}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                  {/* Step 1: Service */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        What brings you in?
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">Select the service you're interested in.</p>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSelectedService(s)}
                            className={`p-3.5 rounded-2xl border text-left text-sm font-medium transition-all duration-200 ${
                              selectedService === s
                                ? "border-teal-500 bg-teal-50 text-teal-700"
                                : "border-gray-100 bg-gray-50 text-gray-600 hover:border-teal-200 hover:bg-teal-50/50"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        disabled={!selectedService}
                        onClick={() => setStep(2)}
                        className="mt-6 w-full btn-primary py-4 rounded-2xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue →
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Time */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        Choose a time
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">Available slots for this week</p>

                      {/* Day selector */}
                      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
                        {["Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15"].map((d) => (
                          <button
                            key={d}
                            type="button"
                            className="flex-shrink-0 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 hover:border-teal-200 hover:bg-teal-50 text-sm font-medium text-gray-600 hover:text-teal-600 transition-all first:border-teal-500 first:bg-teal-50 first:text-teal-700"
                          >
                            {d}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                              selectedTime === t
                                ? "border-teal-500 bg-teal-500 text-white"
                                : "border-gray-100 bg-gray-50 text-gray-600 hover:border-teal-200"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 rounded-2xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
                          ← Back
                        </button>
                        <button
                          type="button"
                          disabled={!selectedTime}
                          onClick={() => setStep(3)}
                          className="flex-1 btn-primary py-4 rounded-2xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Continue →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        Your details
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">We'll confirm your appointment by text & email.</p>

                      <div className="space-y-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                          />
                        </div>
                        <textarea
                          placeholder="Any additional notes or concerns? (optional)"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                        />
                      </div>

                      {/* Summary */}
                      <div className="mt-4 p-3.5 bg-teal-50 border border-teal-100 rounded-xl text-sm">
                        <div className="flex justify-between text-gray-600">
                          <span>Service:</span>
                          <span className="font-medium text-teal-700">{selectedService}</span>
                        </div>
                        <div className="flex justify-between text-gray-600 mt-1">
                          <span>Time:</span>
                          <span className="font-medium text-teal-700">{selectedTime} — Mon March 10</span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-5">
                        <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 rounded-2xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 btn-primary py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                        >
                          <Sparkles className="w-4 h-4" />
                          Confirm Booking
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_60px_rgba(0,0,0,0.08)] p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-teal-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  You're all set! 🎉
                </h3>
                <p className="text-gray-500 mb-2">
                  We've received your booking request for <strong className="text-teal-600">{selectedService}</strong>.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  A confirmation will be sent to your email and phone. We look forward to seeing you!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); setSelectedService(""); setSelectedTime(""); }}
                  className="btn-primary px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
