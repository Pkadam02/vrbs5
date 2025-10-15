"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function S12() {
  return (
    <section
      id="s12"
      className="py-16 md:py-24 bg-white w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Text */}
        <div className="space-y-6 w-full md:w-1/2 lg:pl-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Onshore and <br /> <span className="text-yellow-300">Generation</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            We help businesses achieve efficiency and scalability through both onshore and offshore services. Our onshore solutions ensure seamless collaboration within your local market, offering cultural alignment, compliance, and real-time support. At the same time, our offshore services provide access to global talent, cost advantages, and round-the-clock operations. By combining the strengths of onshore and offshore models, we deliver tailored outsourcing strategies that reduce costs, optimize processes, and drive sustainable growth.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[420px] lg:w-[460px] lg:h-[490px] w-full md:w-1/2 mx-auto flex items-center justify-center overflow-hidden">
          <img
            src="/We.png"
            alt="Onshore & Offshore Services Illustration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
