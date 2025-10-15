"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CS2Page() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate text
    gsap.fromTo(
      ".cs2-text-content",
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs2-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      ".cs2-image-container",
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs2-image-container",
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
      id="CS2"
      className="relative bg-gradient-to-b from-white via-yellow-50 to-white overflow-hidden py-24 lg:py-36"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Text */}
          <div className="cs2-text-content space-y-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              B2B Software Provider Boosts{" "}
              <span className="text-yellow-400">58% More Leads</span> with{" "}
              <span className="text-yellow-400">VR Business Solutions’</span>{" "}
              Content Syndication Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A leading <span className="font-semibold">B2B customer support software provider</span> in the US partnered with{" "}
              <span className="font-semibold text-yellow-400">
                VR Business Solutions
              </span>{" "}
              to convert marketing opportunities into real sales. We executed a
              comprehensive outbound sales development and content syndication
              program to generate high-quality leads across multiple industries,
              including{" "}
              <span className="font-medium text-yellow-500">
                BFSI, Healthcare, IT, Media & Entertainment, and Telecom.
              </span>
            </p>

            <div className="bg-white shadow-lg border border-yellow-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-yellow-500">
                🎯 Strategy Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  Developed targeted <b>personas</b> for email nurturing campaigns.
                </li>
                <li>
                  Executed a <b>robust content syndication program</b> with measurable KPIs.
                </li>
                <li>
                  Engaged C-level executives, IT Directors, and LOB Managers.
                </li>
                <li>
                  Leveraged intent and technographic data for precise targeting.
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-600">📈 Results</h3>
              <p className="text-gray-800 mt-2">
                <b>58% increase</b> in leads delivered (2019–2020) — reaching a
                total of <b>92,000 qualified leads</b> through content-driven engagement.
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/Case_Study_2.docx"
              download="Case_Study_2.docx"
              className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition-all duration-300"
            >
              View Full Case Study
            </a>
          </div>

          {/* Right Image */}
          <div className="cs2-image-container relative w-full h-[360px] sm:h-[450px] lg:h-[820px]">
            <div className="absolute inset-0 bg-yellow-200 blur-3xl rounded-full opacity-50 -z-10"></div>
            <Image
              src="/case-study-leads.jpg"
              alt="Lead generation success illustration"
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
