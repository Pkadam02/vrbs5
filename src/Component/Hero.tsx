"use client";
import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-image",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.0 }
    );

    gsap.fromTo(
      ".hero-letter",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.02, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 1.0 }
    );
  }, []);

  // Helper: render words that wrap normally on small screens
  const renderLettersByWord = (text: string) =>
    text.split(" ").map((word, wordIdx) => (
      <span key={wordIdx} className="inline-block mr-[0.4rem]">
        {word.split("").map((char, idx) => (
          <span key={idx} className="hero-letter opacity-0 inline-block">
            <span
              className="inline-block transition-transform duration-300 ease-in-out transform-gpu hover:scale-125 focus:scale-125"
              tabIndex={0}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    ));

  return (
    <section
      id="hero"
      className="
       relative overflow-hidden bg-[#FFD700]
        flex flex-col md:flex-row items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 py-20
        w-full min-h-[90vh]
      "
    >
      {/* ===== Left Text Section ===== */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
        <h1
          className="
            hero-text font-the-bold-font font-bold 
            text-[3.4rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl
            leading-[1.15] text-[#1C1C57]
          "
        >
          {renderLettersByWord("We  Generate")}
          <br />
          {renderLettersByWord("Leads")}
          <br />
          {renderLettersByWord("Through  True")}
          <br className="mb-4" />
          {renderLettersByWord("Intent")}
        </h1>

        <p className="hero-description text-base sm:text-lg text-gray-700 mt-6 mb-8 max-w-md mx-auto md:mx-0">
          Your Go To Performance Marketing Agency
        </p>

        {/* ===== CTA Buttons ===== */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
          <Link
            href="/contact"
            className="relative overflow-hidden px-8 py-3 font-semibold text-white bg-[#1C1C57] border-2 border-[#1C1C57] w-full sm:w-auto text-center rounded-md group transition-all duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Book a Free Growth Call
            </span>

            <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-700 ease-in-out rounded-t-[100%]"></span>
          </Link>
        </div>
      </div>

      {/* ===== Right Image Section ===== */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative">
        <img
          src="/image.png"
          alt="Hero Illustration"
          className="
            hero-image
            w-[90%] sm:w-[80%] md:w-[100%] lg:w-[90%] 
            max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
            object-contain
          "
        />
      </div>

      {/* ===== Bottom Scroll Arrow ===== */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#1C1C57] hover:text-gray-800">
          <ArrowDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
}
