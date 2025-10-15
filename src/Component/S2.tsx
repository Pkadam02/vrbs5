"use client";

import Link from "next/link";

export default function S2() {
  return (
    <section
      id="s2"
      className="relative bg-white flex flex-col-reverse md:flex-row items-center justify-between
      px-6 sm:px-12 md:px-16 lg:px-20 py-24 lg:py-25
      w-full min-h-[90vh] border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Image Section */}
        <div className="flex justify-center relative w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto">
            <img
              src="/We.png"
              alt="Who We Are Graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-6 text-gray-800 w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Content <br />
            <span className="text-yellow-300">Syndication</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            We amplify your content’s reach by distributing it across trusted
            industry platforms, networks, and targeted databases. Whether it’s
            whitepapers, e-books, case studies, newsletters, or on-demand
            webinars, we place your content where your audience is most engaged,
            driving both brand authority and lead capture.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Instead of waiting for your audience to find you, we place your
            expertise directly in front of them—turning passive interest into
            active engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
