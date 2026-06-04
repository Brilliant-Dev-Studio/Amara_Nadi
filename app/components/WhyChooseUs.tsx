"use client";

import { useEffect, useRef, useState } from "react";

const OTHER_FIRMS = [
  {
    title: "Chemically Over-Processed Supplies",
    desc: "Unreliable raw materials that suffer from excessive chemical treatment, leading to poor quality and high rejection rates from wig manufacturers.",
  },
  {
    title: "Unprocessed & Inconsistent Quality",
    desc: "Selling hair in its raw, uncleaned state without strict grading, resulting in inconsistent product batches and higher production waste.",
  },
  {
    title: "Lack of Technical Expertise & Innovation",
    desc: "Operated without skilled technicians, resulting in outdated designs and no quality guarantee from raw materials to finished products.",
  },
];

const WITH_US = [
  {
    title: "Meeting the Demand for Reliable Raw Hair in the Global Wig Industry",
    desc: "Meeting the needs of international wig and extension manufacturers who frequently face challenges with chemically over-processed hair, by supplying reliable, precisely graded, natural raw materials.",
  },
  {
    title: "Value-Added Processing: Ensuring Reliability and Premium Quality",
    desc: "Ensuring reliability by transforming hair from its raw state into premium, high-value products through systematic cleaning and precise grading in our daily operations.",
  },
  {
    title: "Expert Leadership and Innovation: Guaranteeing Quality and Design",
    desc: "Providing a full guarantee on both quality and design, driven by the leadership of experienced technicians who deeply understand the entire process from raw materials to finished products, combined with our dedication to producing innovative designs that align with modern trends.",
  },
];

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12.5l4.2 4.2L19 6.5" />
    </svg>
  );
}

const REVEAL_EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

function Item({
  title,
  desc,
  highlight,
  index,
  inView,
}: {
  title: string;
  desc: string;
  highlight: boolean;
  index: number;
  inView: boolean;
}) {
  return (
    <li
      className={`transition-all duration-700 ${REVEAL_EASE} motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start gap-3">
        {highlight ? (
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue text-white">
            <Check className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center text-foreground/35">
            <Check className="h-5 w-5" />
          </span>
        )}
        <h4 className="text-lg font-semibold leading-snug text-foreground">
          {title}
        </h4>
      </div>
      <p className="mt-2 pl-9 text-sm leading-relaxed text-foreground/55">
        {desc}
      </p>
    </li>
  );
}

export default function WhyChooseUs() {
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
    <section
      id="why"
      ref={ref}
      className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6"
    >
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Why choose us
      </div>
      <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light sm:text-[48px] leading-[1.12] tracking-[-0.005em]">
        Dedicated Procurement and Supply Chain for Business Success
      </h2>

      {/* Comparison card */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-2 rounded-[40px] border border-brand-blue/10 bg-brand-blue/5 p-2 sm:mt-14 sm:grid-cols-2">
        {/* Other Firms */}
        <div className="rounded-[30px] px-5 py-6 sm:px-7 sm:py-7">
          <h3 className="text-xl font-bold text-foreground">Other Firms</h3>
          <ul className="mt-8 space-y-7">
            {OTHER_FIRMS.map((item, i) => (
              <Item
                key={item.title}
                title={item.title}
                desc={item.desc}
                highlight={false}
                index={i}
                inView={inView}
              />
            ))}
          </ul>
        </div>

        {/* With Amara Nadi — highlighted */}
        <div className="rounded-[30px] bg-white px-5 py-6 sm:px-7 sm:py-7">
          <h3 className="text-xl font-bold text-foreground">With Amara Nadi</h3>
          <ul className="mt-8 space-y-7">
            {WITH_US.map((item, i) => (
              <Item
                key={item.title}
                title={item.title}
                desc={item.desc}
                highlight
                index={i}
                inView={inView}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
