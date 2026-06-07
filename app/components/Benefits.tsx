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
    title: "Production-Ready Standards",
    desc: "No synthetic blends or subpar quality — only 100% premium authentic human hair, ready to go straight into factory production lines.",
    icon: (
      <svg {...iconBase}>
        <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Factory-Direct Pricing",
    desc: "By bypassing middleman brokers, clients enjoy competitive factory-direct pricing that directly maximizes their profit margins.",
    icon: (
      <svg {...iconBase}>
        <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
        <circle cx="7.5" cy="7.5" r="1.25" />
      </svg>
    ),
  },
  {
    title: "Guaranteed Inventory Continuity",
    desc: "Robust domestic and international sourcing networks secure the supply chain — year-round availability with zero risk of shortages.",
    icon: (
      <svg {...iconBase}>
        <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
        <path d="m3 8 9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Tailored Technical Support",
    desc: "From specific lengths and curl patterns to custom textures, our expert team processes every output to your precise specifications.",
    icon: (
      <svg {...iconBase}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
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

  const renderCard = (b: (typeof BENEFITS)[number], i: number) => (
    <div
      key={b.title}
      className={`flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <GlossyIcon icon={b.icon} />
      <h3 className="mt-6 text-lg font-semibold text-foreground">{b.title}</h3>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-foreground/55">
        {b.desc}
      </p>
    </div>
  );

  return (
    <section id="benefits" ref={ref} className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Benefits
      </div>
      <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light sm:text-[48px] leading-[1.12] tracking-[-0.005em]">
        Benefits your customers will feel
      </h2>

      {/* Pyramid: apex on top, three across the base */}
      <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
        {/* Apex */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs">{renderCard(BENEFITS[0], 0)}</div>
        </div>
        {/* Base */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {BENEFITS.slice(1).map((b, i) => renderCard(b, i + 1))}
        </div>
      </div>
    </section>
  );
}
