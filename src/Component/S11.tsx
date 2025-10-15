"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S11() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate text
    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      ".about-image-container",
      { opacity: 0, x: 900 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="s11"
      className="py-100 relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-30 sm:px-8 md:px-12 lg:px-10 py-15 lg:py-30
        w-full min-h-[90vh] md:py-20 data-scroll-section"
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-2 lg:pl-16 about-text-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-blue-900">SDR-as-a-Service</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Our in-house Sales Development Representatives (SDRs) operate as a seamless extension of your sales team—driving consistent, high-quality lead generation and appointment setting. We leverage your brand voice, combined with our enriched data and proven outreach strategies, to ensure every conversation adds value and builds your pipeline.
            </p>
          </div>

          {/* Right Visual / Image */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
            <Image
              src="/about1.png"
              alt="Main illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
