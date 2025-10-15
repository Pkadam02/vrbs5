"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function S4() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
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

    // Image animation
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

    // Text content animation
    (gsap.utils.toArray(".whoweare-text-content > *:not(h2)") as HTMLElement[]).forEach((element, index) => {
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
          delay: index * 0.15,
        }
      );
    });

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
      id="s4"
      className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 w-full min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-10 md:gap-x-16 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center relative">
            <div className="rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto shadow-lg shadow-yellow-300/40">
              <img
                src="/WeARE.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="whoweare-text-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-900 whoweare-title">
              Event &{" "}
              <span className="text-yellow-300">Webinar Registrations</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We manage end-to-end attendee acquisition for your events and
              webinars, targeting professionals most likely to benefit from your
              solutions. From promotional campaigns to conversion optimization,
              we ensure your sessions are filled with{" "}
              <span className="text-yellow-300 font-semibold">
                qualified, engaged participants.
              </span>{" "}
              Events are powerful lead-generation opportunities—our approach
              ensures you attract decision-makers, not just attendees.
            </p>

            {/* Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="whoweare-btn relative inline-block px-8 py-3 sm:px-10 sm:py-3.5 font-semibold text-white bg-[#1C1C57] rounded-md overflow-hidden group transition-all duration-500"
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
