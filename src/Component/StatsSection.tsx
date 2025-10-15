"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    const stats = gsap.utils.toArray<HTMLElement>(".stat-number");

    // Trigger animation only when the section comes into view
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        stats.forEach((stat) => {
          const text = stat.textContent?.trim() || "0";
          const endValue = parseInt(text.replace(/[^0-9]/g, ""), 10) || 0;
          const suffix = text.replace(/[0-9]/g, "");

          stat.textContent = `0${suffix}`;

          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValue,
            duration: 2,
            ease: "power3.out",
            onUpdate: () => {
              stat.textContent = `${Math.floor(obj.val)}${suffix}`;
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center">
            <div>
              <h3 className="stat-number text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
                22K+
              </h3>
              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                A modest number to start off the metrics section.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="stat-number text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
                64M+
              </h3>
              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                A modest number to start off the metrics section.
              </p>
            </div>

            <div>
              <h3 className="stat-number text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
                94%
              </h3>
              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                A modest number to start off the metrics section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
