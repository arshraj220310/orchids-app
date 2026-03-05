"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is teeth whitening safe?",
    a: "Absolutely. Our professional whitening treatments are FDA-approved and supervised by licensed dentists. We use custom-fitted trays to protect your gums and enamel. Some patients experience temporary sensitivity, which resolves within 24–48 hours.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care, dental implants can last a lifetime. The titanium post integrates with your jawbone permanently, while the crown typically lasts 15–25 years. Regular cleanings and good home care are key to their longevity.",
  },
  {
    q: "How painful is Invisalign?",
    a: "Most patients describe mild pressure — not pain — especially in the first few days of each new aligner tray. There are no metal brackets or wires to irritate your cheeks. The discomfort is a sign the aligners are working and fades quickly.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes! We accept most major PPO dental insurance plans. Our team will maximize your benefits and handle all the billing paperwork. We also offer CareCredit and in-house financing plans with 0% interest for up to 18 months.",
  },
  {
    q: "How do I know if I need veneers or bonding?",
    a: "Veneers are porcelain and best for major cosmetic changes — they're more durable and stain-resistant. Dental bonding uses tooth-colored resin and is ideal for smaller chips or gaps. We'll recommend the best option during your free consultation.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately at (555) 123-4567. We have same-day emergency appointments available 7 days a week. For a knocked-out tooth, keep it moist (in milk or saliva) and get to us within an hour for the best chance of saving it.",
  },
  {
    q: "How often should I come for check-ups?",
    a: "Most adults benefit from a professional cleaning and exam every 6 months. If you're prone to gum disease or have ongoing dental work, we may recommend every 3–4 months. We'll create a schedule tailored to your specific needs.",
  },
  {
    q: "Do you offer sedation for anxious patients?",
    a: "Yes! We offer nitrous oxide (laughing gas), oral conscious sedation, and IV sedation depending on your anxiety level and procedure. Many patients tell us their appointment flew by and they felt completely relaxed throughout.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-teal-200 shadow-md shadow-teal-50" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white"
      >
        <span className={`font-semibold text-sm leading-snug transition-colors ${open ? "text-teal-700" : "text-gray-800"}`}>
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ml-4 transition-all duration-300 ${
            open ? "bg-teal-500 text-white rotate-0" : "bg-gray-100 text-gray-500"
          }`}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4 bg-white">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-28 bg-gradient-to-b from-[#f0fafa] to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 bg-white border border-teal-100 rounded-full px-4 py-2 mb-4 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Got Questions?{" "}
            <span className="text-gradient">We've Got Answers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-500"
          >
            Everything you need to know before your first visit.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-white border border-teal-100"
        >
          <h3 className="font-bold text-gray-900 text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Still have questions?
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Our team is happy to answer anything before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+15551234567" className="btn-primary px-6 py-3 rounded-full font-semibold text-sm">
              Call (555) 123-4567
            </a>
            <a href="mailto:hello@luminadent.com" className="px-6 py-3 rounded-full font-semibold text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
