"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const logos = logosRef.current;
    if (!section || !logos) return;

    // Fade-in animation when section comes into view
    gsap.fromTo(
      section.querySelector(".partners-heading"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Continuous horizontal scroll for logos
    const slides = gsap.utils.toArray(".logos-slide");
    gsap.to(slides, {
      xPercent: -100,
      repeat: -1,
      ease: "none",
      duration: 25,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="pt-16 bg-white overflow-hidden relative py-10"
    >
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <div className="partners-heading mx-auto mb-10 max-w-3xl flex items-center justify-center">
            <span className="h-[2px] w-10 bg-yellow-400 mr-4"></span>
            <h3 className="text-blue-900 font-semibold text-sm md:text-base tracking-widest uppercase text-center">
              Trusted By Amazing Brands
            </h3>
            <span className="h-[2px] w-10 bg-yellow-400 ml-4"></span>
          </div>


        {/* Scrolling Logos */}
        <div className="relative overflow-hidden w-full" ref={logosRef}>
          <div className="flex logos">
            {/* First slide */}
            <div className="logos-slide flex shrink-0 space-x-12 px-4">
              {[
                 "goto.png",
                 "KnowBe4.png",
                 "NETSUITE.png",
                 "OZONETEL.png",
                 "Ring Central.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={`img/client-logo/${src}`}
                  alt={`Partner ${i + 1}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>

            {/* Duplicate slide for infinite effect */}
            <div className="logos-slide flex shrink-0 space-x-12 px-14">
              {[
                "goto.png",
                "KnowBe4.png",
                "NETSUITE.png",
                "OZONETEL.png",
                "Ring Central.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={`img/client-logo/${src}`}
                  alt={`Partner ${i + 1}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
