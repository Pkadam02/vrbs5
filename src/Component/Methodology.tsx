"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Process: React.FC = () => {
  const steps = [
    { id: 1, img: "/Link1.png", title: "Strategic Planning", description: "with End Goals in Mind" },
    { id: 2, img: "/Link2.png", title: "Precision Targeting", description: "for Maximum Impact" },
    { id: 3, img: "/Link3.png", title: "Multi-Channel\nContent Distribution", description: "" },
    { id: 4, img: "/Link4.png", title: "Technology Enablement", description: "for Scale – Web and SAP\ndevelopment integrated into\nyour acquisition funnel" },
    { id: 5, img: "/Link5.png", title: "Continuous Optimisation", description: "for Better Results" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      ".methodology-title",
      { opacity: 0, x: -500 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".methodology-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate methodology cards
    (gsap.utils.toArray(".methodology-card") as HTMLElement[]).forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 5, x:900 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1 // Stagger the animation
        }
      );
    });

  }, []);

  const displaySteps = [null, ...steps]; // Add a null placeholder for the empty first box

  return (
    <section id="methodology" className="bg-white relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-0 sm:px-8 md:px-12 lg:px-10 lg:py-52 py-50
        w-full min-h-[90vh] md:py-60 bg-white data-scroll-section" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-10 py-20 items-start">
        
        {/* ===== Left Section (Text Content) ===== */}
        <div className="flex flex-col justify-start text-left lg:col-span-3 lg:mt-8" >
          <div className="relative lg:w-130 sm:w-80 md:left-5  ">
          <p className="text-gray-500 text-base uppercase font-semibold mb-2">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug methodology-title">
            Proven Methodology: <br /> Strategy + Technology
          </h2><br /></div>
        </div>

        {/* ===== Right Section (Unified Grid of Boxes with empty slot) ===== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-0">
          {displaySteps.map((step, idx) => {
            // Determine background color based on effective index (skipping null)
            const effectiveIdx = idx > 0 ? idx - 1 : idx; // For color calculation
            const bgColorClass = effectiveIdx % 2 === 0 ? 'bg-blue-50' : 'bg-white'; // Use custom lightBlue

            // Column placement for large screens (lg)
            let colPlacement = '';
            if (idx === 0) { // Empty box
              colPlacement = 'lg:col-span-1';
            } else if (idx === 1) { // Strategic Planning
              colPlacement = 'lg:col-span-1';
            } else if (idx === 2) { // Precision Targeting
              colPlacement = 'lg:col-span-1';
            } else if (idx === 3) { // Multi-Channel Content Distribution
              colPlacement = 'lg:col-start-1 lg:col-span-1';
            } else { // Technology Enablement, Continuous Optimisation
              colPlacement = 'lg:col-span-1';
            }

            return step ? (
              <div
                key={step.id}
                className={`flex flex-col items-center justify-start p-6 lg:p-8  methodology-card aspect-square w-full
                  ${bgColorClass}
                  ${colPlacement}
                `}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-20 h-20 object-contain mb-4 -ml-20"
                />
                <h2 className="text-lg font-semibold text-gray-900 text-center mb-1 whitespace-pre-line leading-snug">
                  {step.title}
                </h2>
                <p className="text-sm text-gray-600 text-center whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              </div>
            ) : (
              // Render an empty div for the placeholder with bg-white
              <div
                key={`empty-${idx}`}
                className={`aspect-square w-0 lg:col-span-1 bg-white hidden sm:block `}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
  