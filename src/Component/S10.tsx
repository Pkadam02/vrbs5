"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function S10() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      ".whoweare-title",
      { opacity: 0, y: -200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      ".whoweare-image",
      { opacity: 0, x: -900 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate text content
    (gsap.utils.toArray(".whoweare-text-content > *:not(h2)") as HTMLElement[]).forEach(
      (element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: 900 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15, // stagger animation
          }
        );
      }
    );

    // Animate button
    gsap.fromTo(
      ".whoweare-btn",
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".whoweare-btn",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="s10"
      className="scroll-mt-24 py-12 md:py-20 relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-12 items-start">
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div className="rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
              <img
                src="/WeARE.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-900 whoweare-title">
              Appointment Generation
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg whoweare-text-content">
              <p>
                We identify decision-makers, validate their interest, and set up confirmed meetings with your sales team—removing the friction of cold outreach. Your sales team stays focused on closing deals, while we handle the time-consuming prospecting work.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="relative px-8 py-3 sm:px-10 sm:py-3.5 font-semibold text-white bg-[#1C1C57] rounded-md overflow-hidden group transition-colors duration-500 whoweare-btn"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Book Free Growth Call
                </span>
                <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-500 ease-in-out rounded-t-[100%]"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
