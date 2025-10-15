"use client";

import React from "react";
import Image from "next/image";

export default function S9() {
  return (
    <section
      id="s9"
      className="py-16 md:py-24 bg-white w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 lg:pl-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Email <br /><span className="text-yellow-300">Marketing</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              We design and execute personalized email campaigns that resonate with your target audience—whether you’re nurturing existing relationships, driving event attendance, or promoting content. Email remains the highest ROI channel for B2B marketing—ours are built for engagement and conversion.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] mx-auto lg:left-20">
            <div className="absolute inset-0  -z-10" />
            <Image
              src="/about1.png"
              alt="Email Marketing Illustration"
              fill
              className="object-cover "
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
