"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S9() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate text content
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
      id="s9"
      className="py-16 md:py-24 relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-6 sm:px-10 md:px-12 lg:px-20 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-10 md:gap-x-16 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-4 lg:pl-16 about-text-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-blue-900">Email Marketing</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              We design and execute personalized email campaigns that resonate with your target audience—whether you’re nurturing existing relationships, driving event attendance, or promoting content. Email remains the highest ROI channel for B2B marketing—ours are built for engagement and conversion.
            </p>
          </div>

          {/* Right Image */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
            <Image
              src="/about1.png"
              alt="Email Marketing Illustration"
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
