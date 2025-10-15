"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S5() {
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
      id="s5"
      className="relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Text Section */}
          <div className="about-text-content space-y-5 lg:pl-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-blue-900">
                Account-Based{" "}
                <span className="text-yellow-300">Marketing (ABM)</span>
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We develop personalized, high-touch campaigns aimed at your most
              valuable target accounts. By aligning sales and marketing efforts,
              we engage multiple stakeholders within each account through
              tailored messaging, content, and outreach—building deeper
              relationships and increasing deal size potential.
              <br />
              <br />
              <span className="font-semibold text-yellow-300">
                ABM focuses your resources on high-revenue potential clients,
              </span>{" "}
              increasing your win rate and lifetime value.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[460px] lg:h-[490px] mx-auto">
            <div className="absolute inset-0 bg-yellow-300/20 blur-2xl rounded-full -z-10" />
            <Image
              src="/about1.png"
              alt="Account-Based Marketing Illustration"
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
