"use client";

import React from "react";
import Image from "next/image";

export default function S3() {
  return (
    <section
      id="s3"
      className="relative bg-white flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 lg:pl-16 text-gray-800">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Buyer Intent <span className="text-yellow-300"><br />Leads</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
              Through our proprietary publishing network, we gather verified
              first-party intent data by tracking clicks, downloads, and other
              behavioral signals that indicate buying readiness. We then segment
              and deliver only the most relevant leads actively researching
              solutions like yours—ensuring higher conversion potential.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
              Intent data allows you to engage prospects before your competitors,
              shortening sales cycles and improving ROI. With a focus on verified
              engagement, we help you reach decision-makers who are already in
              the consideration phase.
            </p>

           
          </div>

          {/* Right Visual */}
          <div className="relative w-[320px] h-[380px] sm:w-[600px] sm:h-[600px] md:w-[500px] md:h-[440px] lg:w-[460px] lg:h-[500px] mx-auto overflow-hidden">
            <Image
              src="/about1.png"
              alt="Buyer Intent Illustration"
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
