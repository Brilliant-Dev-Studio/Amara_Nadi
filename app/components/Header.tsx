"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logowhite.png";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Our Group", href: "#poe-poe-gold" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "FAQ", href: "#faq" },
];

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Amara Nadi — home">
      <Image
        src={logo}
        alt="Amara Nadi"
        priority
        className="h-16 w-auto sm:h-[72px]"
      />
    </a>
  );
}

function GetInTouch({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`group inline-flex items-center gap-2 rounded-full bg-brand-blue py-1.5 pl-4 pr-1.5 text-brand-diamond-ice transition-colors duration-300 hover:bg-brand-blue-dark ${className}`}
    >
      <span className="text-base font-medium">Get in touch</span>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-diamond-ice text-brand-blue transition-transform duration-400 ease-out-expo group-hover:translate-x-0.5 group-hover:rotate-45">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-[border-color] duration-300 ${
        scrolled ? "border-b border-foreground/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1230px] px-5 sm:px-6">
        <div className="flex h-[79px] items-center justify-between gap-4">
        <Logo />

        {/* Center nav — desktop */}
        <nav className="hidden items-center gap-5 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-foreground/90 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right — desktop CTA */}
        <GetInTouch className="hidden md:inline-flex" />

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-foreground/20 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="mt-5 flex flex-col gap-1 border-t border-foreground/15 pt-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
            <GetInTouch className="mt-3 self-start" />
          </nav>
        </div>
        </div>
      </div>
    </header>
  );
}
