"use client";

import React from "react";
import Image from "next/image";

export default function S1() {
  return (
    <section
      id="s1"
      className="relative bg-white flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-12 md:px-16 lg:px-20 py-24 lg:py-28
      w-full min-h-[90vh] border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm sm:text-base text-gray-500 font-medium uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-1 sm:mt-2">
            We Provide Best Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 lg:pl-12 text-gray-800">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Demand{" "}
              <span className="text-yellow-300">
                Generation
              </span>
            </h3>

            <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
              We help businesses create a steady, predictable flow of
              high-quality prospects by executing data-driven demand
              generation strategies. Using the{" "}
              <span className="font-semibold text-gray-900">AIDA methodology</span>{" "}
              (Attention, Interest, Desire, Action), we ensure every campaign
              captures attention, nurtures interest, builds desire, and drives
              measurable action.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
              Our omni-channel approach—spanning email, content syndication,
              paid media, and social—ensures your brand reaches the right
              decision-makers at the right time. We ensure a consistent inflow
              of warm, sales-ready leads that convert faster.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-[320px] h-[380px] sm:w-[600px] sm:h-[600px] md:w-[500px] md:h-[440px] lg:w-[460px] lg:h-[500px] mx-auto overflow-hidden">
            <Image
              src="/about1.png"
              alt="Demand Generation Illustration"
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
