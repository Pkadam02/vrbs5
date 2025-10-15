"use client";

import Link from "next/link";

export default function S4() {
  return (
    <section
      id="s4"
      className="relative bg-white flex flex-col-reverse md:flex-row items-center justify-between
      px-6 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
            <img
              src="/We.png"
              alt="Event & Webinar Registrations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-6 text-gray-800 w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Event & Webinar<span className="text-yellow-300"> Registrations</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
            We manage end-to-end attendee acquisition for your events and
            webinars, targeting professionals most likely to benefit from your
            solutions. From promotional campaigns to conversion optimization,
            we ensure your sessions are filled with qualified, engaged
            participants.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
            Events are powerful lead-generation opportunities — our approach
            ensures you attract decision-makers, not just attendees.
          </p>
        </div>
      </div>
    </section>
  );
}
