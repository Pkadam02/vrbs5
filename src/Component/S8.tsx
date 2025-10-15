"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function S8() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      ".whoweare-title",
      { opacity: 0, y: -200, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      ".whoweare-image",
      { opacity: 0, x: -900, filter: "blur(10px)" },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text content animation
    (gsap.utils.toArray(".whoweare-text-content > *") as HTMLElement[]).forEach(
      (element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: 900, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    );

    // Button animation
    gsap.fromTo(
      ".whoweare-btn",
      { opacity: 0, y: 50 },
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
      id="s8"
      className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden bg-white
      flex flex-col md:flex-row items-center justify-between
      px-6 sm:px-10 md:px-12 lg:px-20 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-10 md:gap-x-16 items-center">
          
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
              <img
                src="/WeARE.png"
                alt="Lead Generation Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-blue-900 whoweare-title">
              Lead Generation
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg whoweare-text-content">
              <p>
                We use precision targeting and value-driven outreach to attract,
                nurture, and qualify leads. From top-of-funnel awareness to
                sales-ready engagement, our process delivers warm,
                conversion-focused leads.
              </p>
              <p>
                Quality leads mean your sales team spends less time chasing and
                more time closing.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="relative px-8 py-3 sm:px-10 sm:py-3.5 font-semibold text-white bg-[#1C1C57] rounded-md overflow-hidden group transition-all duration-500 whoweare-btn"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Book Free Growth Call
                </span>
                <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-500 ease-in-out rounded-t-[100%]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
