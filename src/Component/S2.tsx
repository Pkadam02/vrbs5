"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function S2() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
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

    // Animate image
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

    // Animate text content
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

    // Animate button
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
      id="s2"
      className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100 
        flex flex-col md:flex-row items-center justify-between
        px-6 sm:px-12 md:px-16 lg:px-20 py-24 lg:py-28
        w-full min-h-[90vh] transition-all duration-500"
    >
      {/* Decorative blurred background glow */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-yellow-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/30 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-y-12 md:gap-x-16 items-center">
          
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div className="relative rounded-3xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto shadow-2xl ring-4 ring-yellow-100">
              <img
                src="/WeARE.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="whoweare-text-content space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-800 leading-tight whoweare-title">
              Content{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
                Syndication
              </span>
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

            <div className="pt-6">
              <Link
                href="/contact"
                className="whoweare-btn relative inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 font-semibold text-yellow-900 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Book Free Growth Call
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
