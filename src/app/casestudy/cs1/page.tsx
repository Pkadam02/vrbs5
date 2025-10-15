"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CS1Page() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate text content
    gsap.fromTo(
      ".cs1-text-content",
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs1-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      ".cs1-image-container",
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs1-image-container",
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
      id="CS1"
      className="relative bg-gradient-to-b from-white via-yellow-50 to-white overflow-hidden py-24 lg:py-36"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Text Content */}
          <div className="cs1-text-content space-y-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              IT Company Accelerates Webinar Registrations with{" "}
              <span className="text-yellow-400">VR Business Solutions’</span>{" "}
              Content Syndication Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fast-growing enterprise IT company partnered with{" "}
              <span className="font-semibold text-yellow-400">
                VR Business Solutions
              </span>{" "}
              to expand its webinar reach and generate qualified leads across
              multiple regions. Leveraging our{" "}
              <span className="text-yellow-400 font-medium">
                data-driven content syndication network
              </span>
              , the client achieved exceptional visibility and engagement from
              key decision-makers.
            </p>

            <div className="bg-white shadow-lg border border-yellow-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-yellow-500">
                ⚡ Key Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  120% increase in webinar registrations within 45 days.
                </li>
                <li>
                  70% of leads originated from targeted industry segments.
                </li>
                <li>
                  3x improvement in engagement through personalized outreach.
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-600">
                📈 Results
              </h3>
              <p className="text-gray-800 mt-2">
                The campaign delivered exceptional ROI with a{" "}
                <b>120% increase</b> in registrations and deeper market
                penetration across key verticals.
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/Case_Study_1.docx"
              download="Case_Study_1.docx"
              className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition-all duration-300"
            >
              View Full Case Study
            </a>
          </div>

          {/* Right Image */}
          <div className="cs1-image-container relative w-full h-[360px] sm:h-[450px] lg:h-[820px]">
            <div className="absolute inset-0 bg-yellow-200 blur-3xl rounded-full opacity-50 -z-10"></div>
            <Image
              src="/case-study-webinar.jpg"
              alt="Webinar case study illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
