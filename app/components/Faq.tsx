"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Is your hair chemically over-processed like other suppliers?",
    a: "No. We supply reliable, precisely graded natural raw hair — free from the excessive chemical treatment that causes poor quality and high rejection rates from wig manufacturers.",
  },
  {
    q: "How do you keep quality consistent across batches?",
    a: "Every batch is sorted by length, texture, and quality under strict grading controls. There's no raw, uncleaned guesswork — just dependable consistency, batch after batch.",
  },
  {
    q: "Do you sell raw hair, or is it processed first?",
    a: "We add value before it ships. Through systematic daily cleaning and precise grading, we transform hair from its raw state into premium, high-value product ready for manufacturing.",
  },
  {
    q: "Who oversees your quality and design?",
    a: "Experienced technicians lead the entire process — from raw material to finished product. That hands-on expertise is what unreliable, technician-less suppliers simply can't match.",
  },
  {
    q: "Can you match modern styles and trends?",
    a: "Yes. We're dedicated to innovative designs that keep pace with modern trends, rather than the outdated styles other firms settle for.",
  },
  {
    q: "What guarantee do I get when I order?",
    a: "A full guarantee on both quality and design — backed end to end, from sourcing right through to delivery. Send us your specifications and our team will guide you from sample to bulk shipment.",
  },
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      {/* Heading */}
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          FAQ
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light leading-[1.12] tracking-[-0.005em] sm:text-[48px]">
          Answers to your most common questions
        </h2>
      </Reveal>

      {/* Accordion */}
      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl sm:mt-16">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b border-foreground/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {item.q}
                </span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-blue text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Chevron />
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-5 pr-12 text-sm leading-relaxed text-foreground/60">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
