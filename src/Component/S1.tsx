"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function S1() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

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
    <>
      <section
        ref={sectionRef}
        id="s1"
        className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100 
        flex flex-col md:flex-row items-center justify-between
        px-6 sm:px-12 md:px-16 lg:px-20 py-24 lg:py-28
        w-full min-h-[90vh] transition-all duration-500"
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Left Text Content */}
            <div className="space-y-6 lg:pl-16 about-text-content">
              <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest bg-yellow-100 inline-block px-3 py-1 rounded-full shadow-sm">
                Services
              </p>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-800 leading-tight">
                Demand{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
                  Generation
                </span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
                We help businesses create a steady, predictable flow of
                high-quality prospects by executing data-driven demand
                generation strategies. Using the{" "}
                <span className="font-semibold text-yellow-700">AIDA methodology</span>{" "}
                (Attention, Interest, Desire, Action), we ensure every campaign
                captures attention, nurtures interest, builds desire, and drives
                measurable action.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
                Our omni-channel approach—spanning email, content syndication,
                paid media, and social—ensures your brand reaches the right
                decision-makers at the right time. Without a robust demand
                generation engine, your sales pipeline can dry up. We ensure a
                consistent inflow of warm, sales-ready leads that convert faster.
              </p>

              <button
                className="mt-6 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right Visual / Image */}
            <div className="about-image-container relative w-[320px] h-[380px] sm:w-[600px] sm:h-[600px] md:w-[500px] md:h-[440px] lg:w-[460px] lg:h-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-yellow-100">
              <Image
                src="/about1.png"
                alt="Main illustration"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
              {/* Decorative blur background */}
              <div className="absolute -z-10 w-[400px] h-[400px] bg-yellow-300/40 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
