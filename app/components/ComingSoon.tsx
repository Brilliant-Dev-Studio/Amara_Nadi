"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import evImg from "@/public/evcharging.jpg";
import solarImg from "@/public/solarFarm.jpg";

const ITEMS: { title: string; desc: string; img: StaticImageData }[] = [
  {
    title: "Solar Farms",
    desc: "High-capacity solar farms in strategic commercial and economic zones, feeding clean, reliable electricity directly into the national grid.",
    img: solarImg,
  },
  {
    title: "Solar EV Charging Stations",
    desc: "Modern, solar-powered EV charging stations along major transit corridors and travel hubs across Myanmar, driving eco-friendly transport networks.",
    img: evImg,
  },
];

export default function ComingSoon() {
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
      id="coming-soon"
      ref={ref}
      className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6"
    >
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Coming Soon
      </div>
      <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light sm:text-[48px] leading-[1.12] tracking-[-0.005em]">
        Harmonizing beauty and green energy
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-foreground/55">
        We believe in growth that honors our planet. Amara Nadi is expanding into
        renewable energy &mdash; building clean infrastructure to help power
        Myanmar&rsquo;s future.
      </p>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:mt-16 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <article
            key={item.title}
            className={`group overflow-hidden rounded-[24px] border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white shadow-sm">
                Coming Soon
              </span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
