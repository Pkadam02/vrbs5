"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function S7() {
  return (
    <section
      id="s7"
      className="relative bg-white py-16 md:py-24 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Digital <br /><span className="text-yellow-300">Marketing</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We run multi-platform campaigns across search, social, and
              programmatic channels to boost visibility, capture attention,
              and drive conversions. Our approach blends SEO, paid advertising,
              content marketing, and analytics to deliver sustainable growth.
              Digital is where your customers live—our strategies ensure you’re
              visible before your competitors.
            </p>

            
          </div>

          {/* Right Image Section */}
          <div className="relative w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[480px] mx-auto flex items-center justify-center ">
            <Image
              src="/about1.png"
              alt="Digital Marketing Illustration"
              fill
              className="object-cover rounded-xl opacity-90"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
