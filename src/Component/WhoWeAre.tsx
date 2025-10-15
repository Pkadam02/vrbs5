"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function WhoWeAre() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      ".whoweare-title",
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate image
    gsap.fromTo(
      ".whoweare-image",
      { opacity: 0, x: -900 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-image",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate text content (paragraphs and list)
    (gsap.utils.toArray(".whoweare-text-content > *:not(h2)") as HTMLElement[]).forEach((element, index) => {
      gsap.fromTo(element, 
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
          delay: index * 0.15 // Stagger the animation
        }
      );
    });

    // Animate button
    gsap.fromTo(
      ".whoweare-btn",
      { opacity: 1, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: {
          trigger: ".whoweare-btn",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section className="scroll-mt-24 py-12 md:py-20 relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 w-full min-h-[90vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-y-8 md:gap-x-12 items-start">
          
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div
              className="rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-none h-auto"
            >
              <img
                src="/We.png"
                alt="Who We Are Graphic"
                className="w-full h-full object-cover whoweare-image"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-900 whoweare-title">
              Who We Are
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg whoweare-text-content">
              <p>
              We are a growing team of 110+ skilled professionals, expanding steadily as we welcome new clients and projects.
              </p>
              <p>
              Our strength lies in our dedicated specialists, each committed to delivering exceptional services tailored to your unique business needs.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>• 110+ skilled professionals and growing team</li>
                <li>• Specialized expertise in demand generation, email marketing, and appointment scheduling</li>
                <li>• Proven efficiency and precision-driven processes</li>
                <li>• Tailored solutions for measurable business results</li>
                <li>• Outsourcing that saves time and maximizes productivity</li>
                <li>• Commitment to helping you focus on what matters most—leading your business to success</li>
              </ul>
            </div>
            <div className="mt-8 sm:mt-10">
              <Link href="/contact" className="relative px-8 py-3 sm:px-10 sm:py-3.5 font-semibold text-white bg-[#1C1C57] rounded-md overflow-hidden group transition-colors duration-500">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Book Free Growth Call
              </span>
              <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-500 ease-in-out rounded-t-[100%]"></span>
            </Link>

        </div>
  
          </div>
        </div>
      </div>
    </section>
  );
}
