"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StatsSection from "@/Component/StatsSection";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate all children with class "about-fade"
    // const fadeEls = el.querySelectorAll(".about-fade");

    // gsap.fromTo(
    //   fadeEls,
    //   { opacity: 0, y: 500 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     stagger: 0.3,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: el,
    //       start: "top 80%", // starts when top of section hits 80% of viewport
    //       toggleActions: "play none none reverse",
    //       markers: false, // set true for debugging
    //     },
    //   }
    // );

    gsap.fromTo(
      ".about-text-content",
      { opacity: 0, x: -900 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".about-image-container",
      { opacity: 0, x: 900 }, // start slightly off to the right
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <section
        ref={sectionRef}
        id="aboutus"
        className="scroll-mt-24 relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-0 sm:px-8 md:px-12 lg:px-10 py-35 w-full min-h-[90vh] md:py-50 lg:py-20 bg-white"
        data-scroll-section
      >
      <div className="container mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="space-y-2 lg:pl-16 about-text-content">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              About VR <br />
              <span className="text-blue-900">Business Solution</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              At VR Business Solution, we are pioneers in customer acquisition
              and targeted outreach, helping businesses connect with the right
              audience both online and offline. Our expertise:
            </p>

            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Spans lead generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Appointment setting, event registrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">✔</span>
                <span>Email marketing, digital marketing</span>
              </li>
            </ul>

            <button
  onClick={() => router.push("/aboutus")}
  className="relative mt-6 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-gray-700 w-40 md:w-auto overflow-hidden group"
>
  {/* Text + Arrow */}
  <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
    Know More
    <span className="text-gray-500 group-hover:text-black text-xl">→</span>
  </span>

  {/* Animated wave */}
  <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></span>
</button>

          </div>

          {/* Right Visual / Charts */}
          <div className="about-image-container relative w-[300px] h-[350px] sm:w-[600px] sm:h-[600px] md:w-[560px] md:h-[420px] lg:w-[450px] lg:h-[490px] lg:left-20 z-10 left-10">
                <Image
                    src="/about1.png"
                    alt="Main illustration"
                    fill
                    className="object-cover"
                    priority
                    />
          </div>
        </div>
      </div>
    </section>
      <StatsSection />
    </>
  );
}
