"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CaseStudyForm from "@/Component/CaseStudyForm";

export default function CS3Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const handleViewCaseStudyClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (data: { name: string; contact: string; email: string }) => {
    console.log("Form submitted:", data);
    try {
      const response = await fetch('/api/send-case-study', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setShowForm(false);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Failed to send form data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Animate text content
    gsap.fromTo(
      ".cs3-text-content",
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs3-text-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      ".cs3-image-container",
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cs3-image-container",
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
    <section
      ref={sectionRef}
      id="CS3"
      className="relative bg-gradient-to-b from-white via-yellow-50 to-white overflow-hidden py-24 lg:py-36"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Text Content */}
          <div className="cs3-text-content space-y-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Manufacturing Giant Boosts Lead Generation with{" "}
              <span className="text-yellow-400">VR Business Solutions’</span>{" "}
              Account-Based Marketing Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A leading manufacturing company partnered with{" "}
              <span className="font-semibold text-yellow-400">
                VR Business Solutions
              </span>{" "}
              to penetrate key accounts and generate high-quality leads. Our{" "}
              <span className="text-yellow-400 font-medium">
                tailored Account-Based Marketing (ABM) strategy
              </span>{" "}
              delivered exceptional results, driving engagement and conversions
              from target enterprises.
            </p>

            <div className="bg-white shadow-lg border border-yellow-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-yellow-500">
                ⚡ Key Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>30% increase in qualified lead pipeline within 90 days.</li>
                <li>25% higher engagement rates from target accounts.</li>
                <li>Achieved 15% conversion rate from MQL to SQL.</li>
              </ul>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-yellow-600">
                📈 Results
              </h3>
              <p className="text-gray-800 mt-2">
                The ABM campaign successfully drove a{" "}
                <b>30% increase</b> in qualified leads and significantly improved
                engagement with high-value accounts across manufacturing and
                enterprise sectors.
              </p>
            </div>

            {/* Download Button */}
            <button
              type="button"
              onClick={handleViewCaseStudyClick}
              className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-500 transition-all duration-300"
            >
              View Full Case Study
            </button>
          </div>

          {/* Right Image */}
          <div className="cs3-image-container relative w-full h-[360px] sm:h-[450px] lg:h-[820px]">
            <div className="absolute inset-0 bg-yellow-200 blur-3xl rounded-full opacity-50 -z-10"></div>
            <Image
              src="/case-study.jpg"
              alt="Account-Based Marketing case study illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
      {showForm && (
        <CaseStudyForm onClose={handleCloseForm} onSubmit={handleFormSubmit} />
      )}
    </section>
  );
}
