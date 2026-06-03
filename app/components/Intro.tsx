"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logowhite.png";

/**
 * Awwwards-style intro: masked wordmark reveal on a blue panel, then a
 * two-tone (blue → red) layered panel wipe reveals the site.
 * Skipped for reduced-motion.
 */
export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      root.classList.add("intro-done");
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }

    document.body.style.overflow = "hidden";
    // Start page entrance animations while the intro panels are lifting,
    // so content reveals with the curtain (no empty gap after it clears).
    const tReveal = setTimeout(() => root.classList.add("intro-done"), 2150);
    // ...then unmount the overlay once it has fully lifted off-screen.
    const tDone = setTimeout(() => {
      document.body.style.overflow = "";
      setDone(true);
    }, 2800);
    return () => {
      clearTimeout(tReveal);
      clearTimeout(tDone);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" aria-hidden>
      {/* Red panel — revealed second, leaves last */}
      <div className="intro-panel-red absolute inset-0 bg-brand-red" />

      {/* Blue panel — holds the wordmark, leaves first */}
      <div className="intro-panel-blue absolute inset-0 flex flex-col items-center justify-center bg-brand-blue px-6 text-center text-white">
        <p className="intro-fade mb-7 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-white/70">
          Global Trade · Est. 2014
        </p>

        <Image
          src={logo}
          alt="Amara Nadi"
          priority
          className="intro-logo h-40 w-auto sm:h-52"
        />

        <div className="mt-9 h-px w-52 max-w-[60vw] overflow-hidden bg-white/20">
          <div className="intro-line h-full w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
