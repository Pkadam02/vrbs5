"use client";

import React from "react";
import Link from "next/link";

export default function S10() {
  return (
    <section
      id="s10"
      className="relative bg-white flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-12 md:px-16 lg:px-20 py-24 lg:py-25
      w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Text Section */}
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Appointment <span className="text-yellow-300">Generation</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            We identify decision-makers, validate their interest, and set up confirmed meetings with your sales team—removing the friction of cold outreach. Your sales team stays focused on closing deals, while we handle the time-consuming prospecting work.
          </p>

          {/* CTA Button */}
          
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center relative w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
            <img
              src="/We.png"
              alt="Appointment Generation Graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
