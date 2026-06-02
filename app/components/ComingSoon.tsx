"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import evImg from "@/public/coming/ev.jpg";
import solarImg from "@/public/coming/solar.jpg";

const ITEMS: { title: string; desc: string; img: StaticImageData }[] = [
  {
    title: "EV Charging Stations",
    desc: "Home and commercial EV chargers — soon available to import and export through Amara Nadi.",
    img: evImg,
  },
  {
    title: "Solar Energy Systems",
    desc: "Solar panels and complete solar solutions, coming soon to our import & export catalogue.",
    img: solarImg,
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
        Clean energy solutions, coming soon
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-foreground/55">
        Soon you&rsquo;ll be able to source EV chargers and complete solar
        systems through Amara Nadi&rsquo;s import &amp; export network.
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
