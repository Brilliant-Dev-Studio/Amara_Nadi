"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

const BENEFITS: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "Naturally Reliable Hair",
    desc: "Precisely graded natural raw hair — free from the chemical over-processing that plagues unreliable suppliers.",
    icon: (
      <svg {...iconBase}>
        <path d="M11 20A7 7 0 0 1 4 13C4 8 9 4 20 4c0 9-4 16-9 16Z" />
        <path d="M4 20c2-4 6-7 11-8" />
      </svg>
    ),
  },
  {
    title: "Strict, Consistent Grading",
    desc: "Every batch sorted by length, texture, and quality — no raw, uncleaned guesswork, just dependable consistency.",
    icon: (
      <svg {...iconBase}>
        <path d="M4 7h16M4 12h10M4 17h6" />
      </svg>
    ),
  },
  {
    title: "Value-Added Processing",
    desc: "Systematic cleaning that transforms raw hair into premium, high-value product, batch after batch.",
    icon: (
      <svg {...iconBase}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
      </svg>
    ),
  },
  {
    title: "Expert Technician Leadership",
    desc: "Led by experienced technicians who master every step — from raw material to finished product.",
    icon: (
      <svg {...iconBase}>
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5 7 21l5-3 5 3-2-7.5" />
      </svg>
    ),
  },
  {
    title: "Innovative, On-Trend Design",
    desc: "Designs that keep pace with modern trends — never the outdated styles other firms settle for.",
    icon: (
      <svg {...iconBase}>
        <path d="m12 3 2.2 6.3L21 11l-6.8 1.7L12 19l-2.2-6.3L3 11l6.8-1.7z" />
      </svg>
    ),
  },
  {
    title: "Full Quality & Design Guarantee",
    desc: "A complete guarantee on both quality and design, from sourcing right through to delivery.",
    icon: (
      <svg {...iconBase}>
        <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

function GlossyIcon({ icon }: { icon: ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 220, damping: 16, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);

  return (
    <motion.span
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 500,
        backfaceVisibility: "hidden",
      }}
      className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue-light to-brand-blue text-white shadow-lg shadow-brand-blue/30 ring-1 ring-inset ring-white/20"
    >
      {icon}
    </motion.span>
  );
}

export default function Benefits() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="benefits" ref={ref} className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Benefits
      </div>
      <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light sm:text-[48px] leading-[1.12] tracking-[-0.005em]">
        Key benefits that set us apart from other firms
      </h2>

      {/* Grid */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-14 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <div
            key={b.title}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <GlossyIcon icon={b.icon} />
            <h3 className="mt-6 text-lg font-semibold text-foreground">
              {b.title}
            </h3>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-foreground/55">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
