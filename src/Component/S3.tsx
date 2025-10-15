"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function S3() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Left text animation
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

    // Right image animation
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
      id="s3"
      className="relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-5 lg:pl-16 about-text-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-yellow-300">Buyer Intent</span>{" "}
              <span className="text-blue-900">Leads</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Through our proprietary publishing network, we gather verified
              first-party intent data by tracking clicks, downloads, and other
              behavioral signals that indicate buying readiness. We then segment
              and deliver only the most relevant leads actively researching
              solutions like yours—ensuring higher conversion potential.{" "}
              <span className="text-yellow-300 font-semibold">
                Intent data allows you to engage prospects before your
                competitors,
              </span>{" "}
              shortening sales cycles and improving ROI.
            </p>
          </div>

          {/* Right Visual */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
            <Image
              src="/about1.png"
              alt="Main illustration"
              fill
              className="object-cover rounded-2xl shadow-lg shadow-yellow-300/40"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
