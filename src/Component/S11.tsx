"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function S11() {
  return (
    <section
      id="s11"
      className="py-16 md:py-24 bg-white w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            SDR-as- <br /><span className="text-yellow-300">a-Service</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Our in-house Sales Development Representatives (SDRs) operate as a seamless extension of your sales team—driving consistent, high-quality lead generation and appointment setting. We leverage your brand voice, combined with our enriched data and proven outreach strategies, to ensure every conversation adds value and builds your pipeline.
            </p>
          </div>

          {/* Right Visual / Image */}
          <div className="relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] mx-auto  overflow-hidden">
            <Image
              src="/about1.png"
              alt="SDR-as-a-Service Illustration"
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
