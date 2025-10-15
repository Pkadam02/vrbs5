"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S7() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Text Animation (Left)
    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image Animation (Right)
    gsap.fromTo(
      ".about-image-container",
      { opacity: 0, x: 900, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.3,
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
      id="s7"
      className="relative overflow-hidden bg-white 
      flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-10 md:px-12 lg:px-16 py-16 md:py-24
      w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-4 lg:pl-12 about-text-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-blue-900">Digital Marketing</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              We run multi-platform campaigns across search, social, and
              programmatic channels to boost visibility, capture attention,
              and drive conversions. Our approach blends SEO, paid advertising,
              content marketing, and analytics to deliver sustainable growth.
              Digital is where your customers live—our strategies ensure you’re
              visible before your competitors.
            </p>
          </div>

          {/* Right Visual / Image */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[480px] mx-auto lg:left-20 z-10">
            <Image
              src="/about1.png"
              alt="Digital Marketing Illustration"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
