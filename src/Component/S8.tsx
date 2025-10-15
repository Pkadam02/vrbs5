"use client";

import React from "react";
import Image from "next/image";

export default function S8() {
  return (
    <section
      id="s8"
      className="py-16 md:py-24 bg-white w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Image Section */}
        <div className="flex justify-center relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]">
          <div className="relative overflow-hidden rounded-2xl w-full h-full">
            <Image
              src="/We.png"
              alt="Lead Generation Graphic"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-6 text-gray-800 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Lead <br /><span className="text-yellow-300">Generation</span>
          </h2>

          <div className="space-y-4 text-gray-600 text-base sm:text-lg">
            <p>
              We use precision targeting and value-driven outreach to attract,
              nurture, and qualify leads. From top-of-funnel awareness to
              sales-ready engagement, our process delivers warm,
              conversion-focused leads.
            </p>
            <p>
              Quality leads mean your sales team spends less time chasing and
              more time closing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
