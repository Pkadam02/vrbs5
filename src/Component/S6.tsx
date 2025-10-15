"use client";

import React from "react";
import Image from "next/image";

export default function S6() {
  return (
    <section
      id="s6"
      className="relative bg-white py-16 md:py-24 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* Left Image Section */}
        <div className="relative w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[420px] lg:w-[460px] lg:h-[490px] w-full md:w-1/2 mx-auto flex items-center justify-center">
          <Image
            src="/We.png"
            alt="Software Development Illustration"
            fill
            className="object-cover rounded-2xl opacity-90"
            priority
          />
        </div>

        {/* Right Text Section */}
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Software <br /><span className="text-yellow-300">Development</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our team delivers custom, scalable, and secure software
            solutions—from modern web applications to SAP-based enterprise
            systems—that optimize your workflows and enable digital
            transformation. We don’t just code; we create future-ready
            technology that adapts as your business grows.
          </p>
        </div>

      </div>
    </section>
  );
}
