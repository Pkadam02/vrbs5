"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // smoothness factor
    });

    // Tell ScrollTrigger to use LocomotiveScroll for scroll position
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value as number)
          : locoScroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    const handleRefresh: ScrollTrigger.Callback = () => locoScroll.update();
    ScrollTrigger.addEventListener("refresh", handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
