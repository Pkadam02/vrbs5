"use client";

import React from "react";
import Image from "next/image";

export default function S5() {
  return (
    <section
      id="s5"
      className="relative bg-white py-16 md:py-24 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 lg:pl-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Account-Based{" "}<br />
              <span className="text-yellow-300">Marketing (ABM)</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We develop personalized, high-touch campaigns aimed at your most
              valuable target accounts. By aligning sales and marketing efforts,
              we engage multiple stakeholders within each account through
              tailored messaging, content, and outreach—building deeper
              relationships and increasing deal size potential.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold text-black">
                ABM focuses your resources on high-revenue potential clients,
              </span>{" "}
              increasing your win rate and lifetime value.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[420px] lg:w-[460px] lg:h-[490px] mx-auto flex items-center justify-center ">
            <Image
              src="/about1.png"
              alt="Account-Based Marketing Illustration"
              fill
              className="object-cover rounded-2xl opacity-90"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
