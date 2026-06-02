"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What types of hair do you supply?",
    a: "We supply raw and processed human hair in a range of textures, lengths, and grades — from single-donor bulk hair to washed and sorted bundles ready for manufacturing.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQs depend on the grade and processing required. We work with both wholesale buyers and large manufacturers — send us your specifications for a tailored quote.",
  },
  {
    q: "How do you ensure quality and ethical sourcing?",
    a: "All hair is ethically collected from trusted partners across Myanmar, then inspected, washed, and graded under strict quality controls before export.",
  },
  {
    q: "Which countries do you export to?",
    a: "We export worldwide with full documentation and customs handling, regularly shipping to manufacturers across Asia, Europe, and North America.",
  },
  {
    q: "What are your shipping and lead times?",
    a: "Lead times vary by order size and processing. We offer reliable air and sea freight with tracking, and confirm an exact timeline when you place your order.",
  },
  {
    q: "How do I place an order or get started?",
    a: "Reach out through our contact details with your requirements. Our team will guide you from sample approval through to bulk shipment.",
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
