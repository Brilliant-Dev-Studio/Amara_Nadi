"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [data-cursor], label[for], summary";

/**
 * Cursor follower: the native cursor stays visible while a soft ring trails
 * behind it with eased (lerped) motion, growing over interactive elements.
 * Uses mix-blend-difference so it reads on any background.
 * Disabled on touch devices and for reduced-motion.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;

    const ring = ringRef.current;
    if (!ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let targetScale = 1;
    let shown = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        ring.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) {
        targetScale = 2.2;
        ring.classList.add("cursor-ring--hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) {
        targetScale = 1;
        ring.classList.remove("cursor-ring--hover");
      }
    };
    const onLeave = () => {
      ring.style.opacity = "0";
      shown = false;
    };

    const loop = () => {
      // trailing lag — lower factor = longer trail
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      scale += (targetScale - scale) * 0.15;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden />;
}
