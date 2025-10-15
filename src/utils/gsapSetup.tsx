// src/utils/gsapSetup.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // 🌀 Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    // GSAP + Lenis synchronization
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🎞️ Fade-in animation for sections
    (gsap.utils.toArray(".fade-in") as HTMLElement[]).forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
};
