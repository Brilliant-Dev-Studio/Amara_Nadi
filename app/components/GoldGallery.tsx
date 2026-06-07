"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import g1 from "@/public/gold/goldOne.jpg";
import g2 from "@/public/gold/goldTwo.jpg";
import g3 from "@/public/gold/goldThree.jpg";
import g4 from "@/public/gold/goldFour.jpg";
import g5 from "@/public/gold/goldfive.jpg";
import g6 from "@/public/gold/goldsix.jpg";
import g7 from "@/public/gold/goldSeven.jpg";
import g8 from "@/public/gold/goldEight.jpg";
import g9 from "@/public/gold/goldNine.jpg";
import g10 from "@/public/gold/goldTen.jpg";

const IMAGES: StaticImageData[] = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

// Collapsed view = a single row per breakpoint (3 / 4 / 5). These classes hide
// the overflow until "View all" is pressed, so the gallery stays compact.
function collapsedClass(i: number) {
  if (i < 3) return "block";
  if (i === 3) return "hidden sm:block";
  if (i === 4) return "hidden lg:block";
  return "hidden";
}

export default function GoldGallery() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`group relative aspect-[2/3] overflow-hidden rounded-2xl ring-1 ring-foreground/10 ${
              expanded ? "block" : collapsedClass(i)
            }`}
          >
            <Image
              src={img}
              alt={`Poe Poe Gold jewelry piece ${i + 1}`}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="group inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/[0.06] px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-amber-500/15"
        >
          {expanded ? "Show less" : `View all (${IMAGES.length})`}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
