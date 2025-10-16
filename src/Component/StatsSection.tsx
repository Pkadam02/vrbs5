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

    // Animate numbers when the section scrolls into view
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
          <div>
            <h3 className="stat-number text-4xl sm:text-5xl font-extrabold text-gray-900">
              100+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="stat-number text-4xl sm:text-5xl font-extrabold text-gray-900">
              5+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Years in the Business
            </p>
          </div>

          <div>
            <h3 className="stat-number text-4xl sm:text-5xl font-extrabold text-gray-900">
              1,000+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="stat-number text-4xl sm:text-5xl font-extrabold text-gray-900">
              100k+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Leads Delivered
            </p>
          </div>

          <div>
            <h3 className="stat-number text-4xl sm:text-5xl font-extrabold text-gray-900">
              96%
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
