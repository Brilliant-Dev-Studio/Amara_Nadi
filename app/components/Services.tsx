"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import sourcing from "@/public/IMG_2290.jpg";
import processing from "@/public/IMG_2291.jpg";
import exportImg from "@/public/Gemini_Generated_Image_olrvuaolrvuaolrv.png";
import Reveal from "./Reveal";

type Service = {
  title: string;
  desc: string;
  img: StaticImageData;
};

const SERVICES: Service[] = [
  {
    title: "Premium Bulk Hair Sourcing & Distribution",
    desc: "We efficiently source, systematically grade, and strategically distribute premium bulk hair from domestic networks and rigorously vetted international suppliers.",
    img: sourcing,
  },
  {
    title: "Export-Grade Semi-Finished Processing",
    desc: "We clean, sort, and process raw hair into premium semi-finished products built to strict specifications — ready for immediate use by wig and extension manufacturers.",
    img: processing,
  },
  {
    title: "Global B2B Supply Chain Solutions",
    desc: "A reliable, long-term direct supply partner for global factories — high-volume fulfillment, customized grading, and seamless international logistics.",
    img: exportImg,
  },
];

const SPRING = {
  type: "spring" as const,
  stiffness: 180,
  damping: 26,
  mass: 0.9,
  opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      {dir === "left" ? <path d="M19 12H5m6 7-7-7 7-7" /> : <path d="M5 12h14m-6-7 7 7-7 7" />}
    </svg>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const len = SERVICES.length;

  const go = (delta: number) => setActive((a) => (a + delta + len) % len);

  return (
    <section
      id="products"
      className="bg-brand-blue/5 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1230px] px-5 sm:px-6">
      {/* Heading — matches Why choose us */}
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          Products
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light leading-[1.12] tracking-[-0.005em] sm:text-[48px]">
          Reliable expertise to drive your greatest success
        </h2>
      </Reveal>

      {/* Carousel */}
      <Reveal delay={120}>
      <div className="relative mx-auto mt-10 h-[330px] max-w-5xl sm:mt-12 sm:h-[400px]">
        {SERVICES.map((s, i) => {
          let pos = i - active;
          if (pos > len / 2) pos -= len;
          if (pos < -len / 2) pos += len;

          const isActive = pos === 0;
          const isSide = pos === 1 || pos === -1;

          const target = isActive
            ? { x: "-50%", scale: 1, rotate: 0, opacity: 1, filter: "grayscale(0%)" }
            : pos === 1
            ? { x: "40%", scale: 0.72, rotate: 4, opacity: 0.55, filter: "grayscale(100%)" }
            : pos === -1
            ? { x: "-140%", scale: 0.72, rotate: -4, opacity: 0.55, filter: "grayscale(100%)" }
            : { x: "-50%", scale: 0.6, rotate: 0, opacity: 0, filter: "grayscale(100%)" };

          return (
            <motion.article
              key={s.title}
              className="absolute left-1/2 top-0 h-full w-[82%] overflow-hidden rounded-[28px] sm:w-[48%]"
              style={{ zIndex: isActive ? 20 : isSide ? 10 : 0 }}
              initial={false}
              animate={target}
              transition={SPRING}
              aria-hidden={!isActive}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 82vw, 48vw"
                className="object-cover"
                priority={i === 0}
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-xl font-light text-white sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  {s.desc}
                </p>
              </div>
            </motion.article>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-30 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-brand-blue text-white transition-colors duration-300 hover:bg-brand-blue-dark sm:left-[27%]"
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next service"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-30 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-brand-blue text-white transition-colors duration-300 hover:bg-brand-blue-dark sm:right-[27%]"
        >
          <Arrow dir="right" />
        </button>
      </div>
      </Reveal>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {SERVICES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to ${s.title}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-brand-blue" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
