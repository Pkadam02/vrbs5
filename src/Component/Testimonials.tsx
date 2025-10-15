"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Esther Howard",
      title: "Chief Executive Officer of GIGL",
      text: "Kevin is very hard and great worker. He thinks about problems, finds solutions, and has an awesome working morale.",
      avatar: "/Image2.png",
      ringClass: "ring-green-300",
    },
    {
      id: 2,
      name: "Cameron Williamson",
      title: "Chief Executive Officer of GIGL",
      text: "Kevin did a wonderful job animating a set of static stickers. The work was done quickly and the quality was outstanding.",
      avatar: "/Image1.png",
      ringClass: "ring-blue-300",
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      title: "Chief Executive Officer of GIGL",
      text: "Great designer, does amazing work and is very flexible with changes. If you’re looking for a UI/UX designer, Kevin is well qualified.",
      avatar: "/Image3.png",
      ringClass: "ring-gray-300",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => resetTimeout();
  }, [current, autoplay, testimonials.length]);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header elements
    gsap.fromTo(
      ".testimonial-header-pretitle",
      { opacity: 0, x: 600 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-header-pretitle",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".testimonial-header-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2,
        scrollTrigger: {
          trigger: ".testimonial-header-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(
      ".testimonial-header-description",
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4,
        scrollTrigger: {
          trigger: ".testimonial-header-description",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animate testimonial cards (initial fade-in)
    (gsap.utils.toArray(".testimonial-item") as HTMLElement[]).forEach((item, index) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 600 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1 // Stagger the animation slightly if multiple are visible
        }
      );
    });

    // Animate navigation arrows and dots
    gsap.fromTo(
      ".testimonial-nav-arrow, .testimonial-dot",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-nav-arrows",
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="scroll-mt-24 relative bg-gradient-to-b from-yellow-300 via-white to-yellow-300 py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-base text-gray-600 font-semibold uppercase tracking-wide mb-2 testimonial-header-pretitle">
            Client Testimonial
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 testimonial-header-title">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed testimonial-header-description">
            Nam malesuada est elementum nibh tristique, non ornare lacus mollis.
            Sed lectus nulla, ultrices in gravida in.
          </p>
        </div>

        {/* Testimonial Wrapper */}
        <div className="relative flex flex-col items-center justify-center testimonial-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ease-in-out transform ${
                current === index
                  ? "opacity-100 scale-100 translate-y-0 z-10"
                  : "opacity-0 scale-95 translate-y-4 pointer-events-none absolute"
              } testimonial-item`}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-10 text-center mx-4 w-auto max-w-sm sm:max-w-lg">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`mx-auto rounded-full object-cover mb-6 ring-4 ${testimonial.ringClass} w-24 h-24`}
                />
                <p className="text-gray-600 italic leading-relaxed mb-6 text-base sm:text-lg">
                  “{testimonial.text}”
                </p>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="testimonial-nav-arrows z-10">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-300 p-3 rounded-full text-blue-900 hover:bg-yellow-400 shadow-md transition testimonial-nav-arrow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-yellow-300 p-3 rounded-full text-blue-900 hover:bg-yellow-400 shadow-md transition testimonial-nav-arrow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3 testimonial-dots-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-yellow-300 w-6 scale-125"
                  : "bg-gray-300 hover:bg-yellow-300"
              } testimonial-dot`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
