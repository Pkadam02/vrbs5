"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CS3Page() {
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

  return (
    <section
      id="CS3"
      className="relative bg-white overflow-hidden py-24 lg:py-36"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="relative w-full h-[360px] sm:h-[450px] lg:h-[820px]">
            <Image
              src="/case-study.jpg"
              alt="Account-Based Marketing case study illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6 lg:pr-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Manufacturing Giant Boosts Lead Generation with{" "}
              <span className="text-yellow-300 font-semibold">VR Business Solutions’</span>{" "}
              Account-Based Marketing Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A leading manufacturing company partnered with{" "}
              <span className="font-semibold text-yellow-300">VR Business Solutions</span>{" "}
              to penetrate key accounts and generate high-quality leads. Our{" "}
              <span className="text-gray-800 font-medium">
                tailored Account-Based Marketing (ABM) strategy
              </span>{" "}
              delivered exceptional results, driving engagement and conversions from target enterprises.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                ⚡ Key Highlights
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>30% increase in qualified lead pipeline within 90 days.</li>
                <li>25% higher engagement rates from target accounts.</li>
                <li>Achieved 15% conversion rate from MQL to SQL.</li>
              </ul>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">📈 Results</h3>
              <p className="text-gray-700 mt-2">
                The ABM campaign successfully drove a <b>30% increase</b> in qualified leads and significantly improved engagement with high-value accounts across manufacturing and enterprise sectors.
              </p>
            </div>

            {/* View Case Study Button */}
            <button
              type="button"
              onClick={handleViewCaseStudyClick}
              className="mt-6 inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300"
            >
              Get Full Case Study
            </button>
          </div>
        </div>

        {/* Navigation to other case studies */}
        <div className="flex justify-center mt-16 space-x-4">
          <Link href="/casestudy/cs1">
            <p className="px-5 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              &larr; Previous (CS1)
            </p>
          </Link>
          <Link href="/casestudy/cs2">
            <p className="px-5 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow hover:bg-gray-700 transition-all duration-300 cursor-pointer">
              Next (CS2) &rarr;
            </p>
          </Link>
        </div>
      </div>

      {/* Case Study Form */}
     
    </section>
  );
}
