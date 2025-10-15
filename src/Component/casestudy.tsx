"use client";
import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: "01",
      title: "IT Company Accelerates Webinar Registrations with VR Business Solutions Content Syndication Strategy",
      description:
        "An IT enterprise partnered with VR Business Solutions to execute a webinar promotion campaign that attracted the right decision-makers and generated measurable ROI. Within just 30 days, the campaign successfully delivered 700+ high-quality webinar registrations.",
      img: "study.png",
      buttonText: "Know More",
      link: "/casestudy/cs1", // Add link for CS1
    },
    {
      id: "02",
      title: "From Zero to 85K: Scaling Cloud-VoIP in a Pandemic Year",
      description:
        "A prominent Voice over Internet Protocol (VoIP) solutions provider in the US approached VR Business Solution to identify the service needs of targeted industries and expand its business reach. With an aim to consolidate Cloud with VoIP and provide a winning solution for efficient business performance, the company was looking for a partner to introduce and distribute Cloud-based VoIP architecture.",
      img: "/Overlay.png",
      buttonText: "Know More",
      link: "/casestudy/cs2", // Add link for CS2
    },
    {
      id: "03",
      title: "Manufacturing Giant Boosts Lead Generation with VR Business Solutions Account-Based Marketing Strategy",
      description:
        "A leading manufacturing company partnered with VR Business Solutions to penetrate key accounts and generate high-quality leads. Our tailored Account-Based Marketing (ABM) strategy delivered exceptional results, driving engagement and conversions from target enterprises.",
      img: "/Overlay.png",
      buttonText: "Know More",
      link: "/casestudy/cs3", // Add link for CS3
    },
  ];

  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.fromTo(
      ".casestudy-section-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: ".casestudy-section-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate each case study card
    (gsap.utils.toArray(".casestudy-card") as HTMLElement[]).forEach((card, index) => {
      const fromProps = index === 0
        ? { opacity: 0, x: -900 }   // First card from left
        : { opacity: 0, x: 900 }; // Second card from right

      gsap.fromTo(card, 
        fromProps,
        { 
          opacity: 1, 
          x: 0, 
          duration: 2.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15 // Stagger the animation
        }
      );
    });

    // Animate "More Case Studies" button
    gsap.fromTo(
      ".casestudy-more-button",
      { opacity: 0, y: 900 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out",
        scrollTrigger: {
          trigger: ".casestudy-more-button",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <section id="casestudy" className=" bg-white relative overflow-hidden bg-white
        flex flex-col md:flex-row items-center justify-between
        px-0 sm:px-8 md:px-12 lg:px-20 py-12 data-scroll-section
        w-full min-h-[90vh]md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-gray-500 text-base font-semibold mb-5 uppercase text-center">
            Case Study
          </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-1 sm:mt-2 text-center mb-10 md:mb-16 casestudy-section-title">
          Our Case Studies
        </h2>
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-y-8 md:gap-x-12 items-center mb-16 casestudy-card"
          >
            {/* === Image Section === */}
            <div className=" flex justify-center items-center p-6 sm:p-8 casestudy-image-container">
              <img
                src={study.img}
                alt={study.title}
                className="rounded-lg w-full max-w-xs sm:max-w-sm h-auto object-contain "
              />
            </div>

            {/* === Text Section === */}
            <div className="casestudy-text-content">
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-2 casestudy-meta">
                <span>{study.id}</span>
                <span>Case Study</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 leading-snug casestudy-title-text">
                {study.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed casestudy-description">
                {study.description}
              </p>

              <button
                    className="relative flex items-center gap-1 text-sm text-gray-700 border border-gray-300 rounded-full px-4 py-2 overflow-hidden group transition-all duration-500"
                    onClick={() => router.push(study.link)}
                  >
                    {/* Text + Arrow */}
                    <span className="relative z-10 flex items-center gap-1 transition-colors duration-500 group-hover:text-black">
                      {study.buttonText}
                      <span className="text-base group-hover:text-black">↳</span>
                    </span>

                    {/* Animated wave */}
                    <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full"></span>
                  </button>

            </div>
          </div>
        ))}

        {/* === More Case Studies Button === */}
        

      </div>
    </section>
  );
};

export default CaseStudies;
