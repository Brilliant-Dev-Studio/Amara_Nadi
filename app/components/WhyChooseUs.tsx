"use client";

import { useEffect, useRef, useState } from "react";

const OTHER_FIRMS = [
  {
    title: "Untraceable Sourcing",
    desc: "Hair bought through unknown hands, with no oversight of where it came from or how it was handled.",
  },
  {
    title: "Basic Unprocessed Hair",
    desc: "Selling raw, uncleaned hair that still needs heavy work before it can ever enter a production line.",
  },
  {
    title: "Layers of Middlemen",
    desc: "Orders routed through brokers and intermediaries that inflate costs and disrupt steady supply.",
  },
  {
    title: "No Long-Term Vision",
    desc: "Short-term selling with no investment in sustainability or the future of the industry.",
  },
];

const WITH_US = [
  {
    title: "Direct-from-Source Quality",
    desc: "We directly source 100% authentic human hair from trusted domestic networks and reliable international markets, keeping complete oversight and quality control over every single step.",
  },
  {
    title: "Reliable Semi-Product Manufacturing",
    desc: "Beyond selling basic raw hair, we use proprietary modern techniques to process advanced semi-finished bulk hair that precisely matches manufacturers' rigorous international standards.",
  },
  {
    title: "Global Supply Scale",
    desc: "We're rapidly expanding direct international distribution — letting global buyers bypass brokers for a steady, uninterrupted supply of dependable products at optimized costs.",
  },
  {
    title: "Visionary & Sustainable",
    desc: "Partnering with us means aligning with an environmentally conscious company that reinvests its returns into building future green-energy infrastructure.",
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
