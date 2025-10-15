"use client";

import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function S12() {
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
            delay: index * 0.15, // stagger
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
      id="s12"
      className="scroll-mt-24 py-12 md:py-20 relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-12 items-start">
          {/* Left Image */}
          <div className="flex justify-center relative">
            <div className="rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
              <img
                src="/WeARE.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-900 whoweare-title">
              Onshore and Offshore Services
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg whoweare-text-content">
              <p>
                We help businesses achieve efficiency and scalability through both onshore and offshore services. Our onshore solutions ensure seamless collaboration within your local market, offering cultural alignment, compliance, and real-time support. At the same time, our offshore services provide access to global talent, cost advantages, and round-the-clock operations. By combining the strengths of onshore and offshore models, we deliver tailored outsourcing strategies that reduce costs, optimize processes, and drive sustainable growth.
              </p>
            </div>

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
