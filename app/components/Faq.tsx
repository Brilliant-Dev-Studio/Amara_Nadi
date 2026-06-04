"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Where does Amara Nadi primarily source its human hair?",
    a: "To ensure rich variety and premium quality, we source bulk hair through systematic domestic collections within Myanmar, alongside direct imports from trusted international markets.",
  },
  {
    q: "To what stage do you process the bulk raw hair?",
    a: "We process raw hair up to the factory-grade semi-finished stage — systematically cleaned, sorted, and prepared to your exact specifications, ready for direct manufacturing into wigs and extensions.",
  },
  {
    q: "How can international buyers establish a direct supply partnership?",
    a: "As we expand our global distribution network, overseas manufacturing plants and brand owners can contact our international sales department directly by email or phone for bulk orders and long-term contracts.",
  },
  {
    q: "Do you sell to local brokers, or export directly overseas?",
    a: "While we maintain reliable partnerships with international brokers who visit Myanmar, our strategic vision is focused on building direct international supply lines to export straight to global markets.",
  },
  {
    q: "When will the Solar Farm and EV Charging Station projects launch?",
    a: "Our green-energy initiatives are in the meticulous planning and implementation phases. These landmark projects will support Myanmar's sustainable infrastructure and eco-tourism, and we'll share progress updates on our website.",
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
