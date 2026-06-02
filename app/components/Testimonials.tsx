"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Amara Nadi's hair quality is consistently excellent — every shipment meets our standards without fail.",
    name: "Wei Chen",
    badge: "Premium grade • Repeat buyer",
  },
  {
    quote:
      "Reliable bulk supply and smooth export handling. They've become our trusted sourcing partner in Myanmar.",
    name: "Sofia Rossi",
    badge: "On-time delivery • 3× orders",
  },
  {
    quote:
      "Ethically sourced, well-processed, and competitively priced — exactly what our factory needed.",
    name: "David Müller",
    badge: "Trusted supplier • 2-year partner",
  },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 2.5l2.72 5.86 6.44.62-4.85 4.28 1.4 6.32L12 16.9l-5.71 3.68 1.4-6.32-4.85-4.28 6.44-.62z" />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const len = REVIEWS.length;

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % len), 5500);
    return () => clearInterval(t);
  }, [len]);

  const r = REVIEWS[active];

  return (
    <section id="reviews" className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        {/* Rating */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1 text-brand-red-light">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <span className="text-base font-medium text-foreground/80">
            Rated 4.9/5
          </span>
        </div>

        {/* Animated quote */}
        <div className="mt-10 min-h-[260px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif text-[clamp(1.35rem,3.2vw,2.25rem)] font-light leading-[1.2] tracking-[-0.005em] text-foreground">
                {r.quote}
              </p>

              <div className="mt-10 flex flex-col items-center gap-1.5">
                <span className="text-lg font-semibold text-foreground">
                  {r.name}
                </span>
                <span className="rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-medium text-brand-blue">
                  {r.badge}
                </span>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((review, i) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Show review from ${review.name}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-brand-blue" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
