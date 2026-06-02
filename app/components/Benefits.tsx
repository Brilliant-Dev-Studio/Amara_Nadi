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
    title: "Premium Quality",
    desc: "Every bundle is inspected and graded to meet strict international standards.",
    icon: (
      <svg {...iconBase}>
        <path d="m12 3 2.2 6.3L21 11l-6.8 1.7L12 19l-2.2-6.3L3 11l6.8-1.7z" />
      </svg>
    ),
  },
  {
    title: "Ethically Sourced",
    desc: "Hair collected responsibly from trusted partners across Myanmar.",
    icon: (
      <svg {...iconBase}>
        <path d="M11 20A7 7 0 0 1 4 13C4 8 9 4 20 4c0 9-4 16-9 16Z" />
        <path d="M4 20c2-4 6-7 11-8" />
      </svg>
    ),
  },
  {
    title: "Global Export",
    desc: "Reliable worldwide shipping with full customs documentation handled.",
    icon: (
      <svg {...iconBase}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
      </svg>
    ),
  },
  {
    title: "Custom Orders",
    desc: "Tailored lengths, textures, and processing to match your specifications.",
    icon: (
      <svg {...iconBase}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
      </svg>
    ),
  },
  {
    title: "Bulk Capacity",
    desc: "Large-volume supply with consistent quality, batch after batch.",
    icon: (
      <svg {...iconBase}>
        <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
        <path d="m3 8 9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    desc: "A responsive team guiding you from first inquiry through to delivery.",
    icon: (
      <svg {...iconBase}>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2.5" y="14" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="14" width="4" height="6" rx="1.5" />
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
