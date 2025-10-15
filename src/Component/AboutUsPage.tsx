"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import StatsSection from "@/Component/StatsSection";
import { Cat } from "lucide-react";
import CTA from "./CTA";
import TeamSection from "@/Component/TeamSection";


export default function AboutUsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // About text animation
    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900 },
      {
        opacity: 1,
        x: 0,
        duration: 1.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // About image animation
    gsap.fromTo(
      ".about-image-container",
      { opacity: 0, x: 500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ✅ New animations for 60/40 growth section
    gsap.fromTo(
      ".growth-text",
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".growth-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".growth-image",
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".growth-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="aboutus"
        className="scroll-mt-24 relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-0 sm:px-8 md:px-12 lg:px-10 py-35 w-full min-h-[90vh] md:py-50 lg:py-20 bg-white"
        data-scroll-section
      >
        <div className="container mx-auto px-4 sm:px-10 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left text */}
            <div className="space-y-2 lg:pl-16 about-text-content">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Welcome to <br />
                <span className="text-blue-900">VR Business Solution</span>
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                At VR Business Solution, we are pioneers in customer acquisition
                and targeted outreach, helping businesses connect with the right
                audience both online and offline.
              </p>
              <ul className="space-y-2 text-gray-700 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✔</span>
                  <span>Lead generation across industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✔</span>
                  <span>Appointment setting and event marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">✔</span>
                  <span>Digital and email marketing expertise</span>
                </li>
              </ul>
            </div>

            {/* Right image */}
            <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
              <Image
                src="/about2.jpg"
                alt="Main illustration"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Globe overlay */}
            <div className="absolute w-[420px] h-[1800px] sm:w-[3100px] sm:h-[150px] md:w-[1200px] md:h-[2500px] lg:w-[1100px] lg:h-[1000px] -top-25 right-3 sm:-top-10 sm:-right-14 md:-top-12 md:-right-[-260] lg:-top-0 lg:right-[-100] animate-spin-slow">
              <Image
                src="/globe.png"
                alt="Globe overlay"
                fill
                className="opacity-90 object-contain"
                priority
              />
            </div>

            

            {/* ✅ 60/40 Growth Section */}
            <div className="growth-section flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 lg:col-span-2 mt-16 px-6 sm:px-10 lg:px-20 text-center lg:text-left bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-14 rounded-2xl border border-gray-100 shadow-sm">
              
              {/* Left (Text) */}
              <div className="growth-text flex-1 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
                  Driving Growth Through Smart, Data-Driven Solutions
                </h2>

                <p className="text-lg leading-relaxed text-gray-700">
                  At{" "}
                  <span className="font-semibold text-yellow-600">
                    VR Business Solution
                  </span>
                  , we are pioneers in customer acquisition and targeted outreach,
                  helping businesses connect with the right audience—both online
                  and offline. Our expertise spans lead generation, appointment
                  setting, event registrations, and digital marketing designed to
                  engage and convert your ideal prospects.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  We specialize in identifying and narrowing down your customer
                  base, ensuring you focus only on high-quality prospects who are
                  most likely to buy, return, and advocate for your brand.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Our approach is{" "}
                  <span className="font-medium text-gray-900">
                    smart, data-driven, and results-focused
                  </span>
                  , enabling measurable growth and profitability in a short span.
                  With a proven and efficient delivery model, we ensure consistent,
                  high-quality outcomes that exceed expectations.
                </p>

                <p className="text-lg leading-relaxed text-gray-800 font-medium italic border-l-4 border-yellow-400 pl-4">
                  “At VR Business Solution, we’re more than a service provider —
                  we’re your{" "}
                  <span className="text-yellow-600 font-semibold">
                    growth partner
                  </span>
                  . Together, we aim for sustainable success.”
                </p>
              </div>

              {/* Right (Image) */}
              <div className="growth-image flex-1 flex justify-center">
                <div className="relative w-[300px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[450px]">
                  <Image
                    src="/about2.jpg" // change to your actual image
                    alt="Business Growth"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <CTA />
    </>
  );
}
