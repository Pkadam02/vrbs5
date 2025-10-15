"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the main heading
    gsap.fromTo(
      "#cta h2",
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: "#cta h2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate the button
    gsap.fromTo(
      "#cta button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2,
        scrollTrigger: {
          trigger: "#cta button",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate the main image
    gsap.fromTo(
      "#cta img",
      { opacity: 0, x: 900 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4,
        scrollTrigger: {
          trigger: "#cta img",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section id="cta" className="scroll-mt-24 relative py-16 md:py-[28] bg-yellow-300 overflow-hidden min-h-[900px] md:min-h-[1000px] lg:min-h-[10px]">
      {/* Blue curved background */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 md:gap-12 justify-evenly items-center min-h-[600px]">
          {/* Left Content */}
          <div className="py-10 md:py-0">
            <h1 className="text-5xl sm:text-2xl md:text-6xl  font-bold text-blue-900 mb-6 leading-tight">
              Ready To <br />
              Accelerate Growth <br /> & Modernize Your
              <br />Tech?
            </h1>
            <Link href="/contact" className="bg-[#FF4D6A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E0445D] transition-colors w-full sm:w-auto max-w-sm">
              Book Appointment
            </Link>
          </div>
          
          {/* Right Illustration */}
          <div className="relative flex justify-center items-center lg:bottom-[-20px] lg:left-[-130] bottom-[-105] left-[-15] md:left-52 md:right-[192px] h-10 md:max-h-[100px] md:bottom-[-120] md:left-[-10] xl:h-[100px] object-contain w-[120%] md:w-[150%] lg:w-[160%] xl:w-[130%]">
            {/* Main person image */}
            <img src="/CTA.png" alt="Person with Tablet" className="" />

            {/* Floating Card 1 */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

