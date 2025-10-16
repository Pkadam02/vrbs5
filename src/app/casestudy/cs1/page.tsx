"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CaseStudyForm from "@/Component/CaseStudyForm"; // Import the new component

export default function CS1Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = async (data: { name: string; contact: string; email: string }) => {
    console.log("Form submitted:", data);
    try {
      const response = await fetch('/api/send-case-study', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, caseStudyId: 'cs1' }), // Add case study ID
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setIsFormOpen(false);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Failed to send form data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <section
      id="CS1"
      className="relative bg-white overflow-hidden py-24 lg:py-36"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Text Content */}
          <div className="space-y-6 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              IT Company Accelerates Webinar Registrations with{" "}
              <span className="text-yellow-300 font-semibold">VR Business Solutions’</span>{" "}
              Content Syndication Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fast-growing enterprise IT company partnered with{" "}
              <span className="font-semibold text-yellow-300">
                VR Business Solutions
              </span>{" "}
              to expand its webinar reach and generate qualified leads across
              multiple regions. Leveraging our data-driven content syndication network,
              the client achieved exceptional visibility and engagement from key decision-makers.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold ">
                ⚡ Key Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>120% increase in webinar registrations within 45 days.</li>
                <li>70% of leads originated from targeted industry segments.</li>
                <li>3x improvement in engagement through personalized outreach.</li>
              </ul>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                📈 Results
              </h3>
              <p className="text-gray-700 mt-2">
                The campaign delivered exceptional ROI with a <b>120% increase</b> in registrations and deeper market penetration across key verticals.
              </p>
            </div>

            {/* Download Button */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-6 inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300"
            >
              Get Full Case Study
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[360px] sm:h-[450px] lg:h-[820px]">
            <Image
              src="/case-study-webinar.jpg"
              alt="Webinar case study illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>

        {/* Navigation to other case studies */}
        <div className="flex justify-center mt-16 space-x-4">
          <Link href="/casestudy/cs2">
            <p className="px-5 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              &larr; Previous (CS2)
            </p>
          </Link>
          <Link href="/casestudy/cs3">
            <p className="px-5 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              Next (CS3) &rarr;
            </p>
          </Link>
        </div>
      </div>
      <CaseStudyForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
