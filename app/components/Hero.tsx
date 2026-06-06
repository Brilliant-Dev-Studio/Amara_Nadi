"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "@/public/Gemini_Generated_Image_vwbvyavwbvyavwbv.png";
import heroImg2 from "@/public/Gemini_Generated_Image_w878e9w878e9w878.png";
import heroImg3 from "@/public/Gemini_Generated_Image_wynzi0wynzi0wynz.png";

const HERO_SLIDES = [heroImg, heroImg2, heroImg3];

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5l2.72 5.86 6.44.62-4.85 4.28 1.4 6.32L12 16.9l-5.71 3.68 1.4-6.32-4.85-4.28 6.44-.62z" />
    </svg>
  );
}

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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    const section = sectionRef.current;
    if (!section) return;

    let tX = 0,
      tY = 0, // target (normalized -1..1)
      cX = 0,
      cY = 0, // current
      gX = 0,
      gY = 0, // glow position (px)
      mX = 0,
      mY = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      tX = ((e.clientX - r.left) / r.width) * 2 - 1;
      tY = ((e.clientY - r.top) / r.height) * 2 - 1;
      mX = e.clientX - r.left;
      mY = e.clientY - r.top;
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      tX = 0;
      tY = 0;
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const loop = () => {
      cX += (tX - cX) * 0.08;
      cY += (tY - cY) * 0.08;
      gX += (mX - gX) * 0.12;
      gY += (mY - gY) * 0.12;

      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1000px) rotateY(${
          cX * 5
        }deg) rotateX(${-cY * 5}deg) translate3d(${cX * 10}px, ${
          cY * 10
        }px, 0)`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(${cX * -12}px, ${
          cY * -8
        }px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gX}px, ${gY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-3 overflow-hidden rounded-[30px] bg-brand-blue text-brand-diamond-ice sm:mt-5 lg:h-[612px]"
    >
      {/* Cursor-following spotlight */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-[620px] w-[620px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16), transparent 62%)",
        }}
      />

      <div className="relative z-10 grid items-stretch lg:h-full lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Left: copy ---- */}
        <div
          ref={copyRef}
          className="flex flex-col justify-center px-6 py-12 will-change-transform sm:px-10 sm:py-16 lg:py-20 lg:pl-14 lg:pr-10"
        >
          {/* Rating */}
          <div
            className="hero-rise flex items-center gap-3"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex gap-1 text-brand-red-light">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-[1.4rem] w-[1.4rem]" />
              ))}
            </div>
            <span className="text-sm font-medium text-brand-diamond-ice/85">
              Rated 4.9/5
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-rise mt-6 font-serif text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.08] tracking-[-0.005em]"
            style={{ animationDelay: "0.15s" }}
          >
            Elevating Myanmar&rsquo;s natural resources onto the global stage
          </h1>

          {/* Burmese company name */}
          <p
            className="hero-rise mt-4 text-xl font-medium text-brand-diamond-ice/90 sm:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            အမရာနဒီ ကုမ္ပဏီ လီမိတက်
          </p>

          {/* Subtext */}
          <p
            className="hero-rise mt-5 max-w-lg text-[16px] leading-relaxed text-brand-diamond-ice/75"
            style={{ animationDelay: "0.25s" }}
          >
            A warm welcome from Amara Nadi Co., Ltd &mdash; a premier leader in
            Myanmar&rsquo;s human hair industry, supplying high-quality
            semi-finished raw materials directly to finished-product
            manufacturing plants worldwide.
          </p>

          {/* CTAs */}
          <div
            className="hero-rise mt-9 flex items-center gap-6"
            style={{ animationDelay: "0.35s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-brand-blue transition-colors duration-300 hover:bg-white/90"
            >
              <span className="text-base font-medium">Get in touch</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-blue text-white transition-transform duration-400 ease-out-expo group-hover:translate-x-0.5 group-hover:rotate-45">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#products"
              className="link-underline text-base font-medium text-brand-diamond-ice"
            >
              What we do
            </a>
          </div>
        </div>

        {/* ---- Right: image ---- */}
        <div className="px-6 pb-6 lg:py-5 lg:pl-0 lg:pr-5">
          <div ref={tiltRef} className="h-full will-change-transform">
            <div className="hero-img-in relative h-72 w-full overflow-hidden rounded-[22px] ring-1 ring-white/15 sm:h-96 lg:h-full lg:min-h-[34rem]">
              <AnimatePresence>
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_SLIDES[slide]}
                    alt="Amara Nadi"
                    fill
                    priority={slide === 0}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              {/* dots */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === slide ? "w-5 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
