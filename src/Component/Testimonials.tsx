"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marketing Specialist",
      title: "Fortune 1000 company from North America",
      text: "The MQL's VR Business Solution generated for our sales teams, we have seen very good response and have an increased conversion rate.",
      avatar: "/Image1.png",
      ringClass: "ring-yellow-300",
    },
    {
      id: 2,
      name: "Digital Marketing Manager",
      title: "Cyber Security company from Singapore",
      text: "Their Buyer’s Intent Based leads campaign proved to be a top campaign for us that exceeded our expectations.",
      avatar: "/Image2.png",
      ringClass: "ring-blue-300",
    },
    {
      id: 3,
      name: "Esther Howard",
      title: "Chief Executive Officer of GIGL",
      text: "Kevin is very hard and great worker. He thinks about problems, finds solutions, and has an awesome working morale.",
      avatar: "/Image3.png",
      ringClass: "ring-green-300",
    },
    {
      id: 4,
      name: "Marketing Director",
      title: "Technology Enterprise from Europe",
      text: "Their data-driven marketing approach gave us measurable improvements in our lead quality and engagement rates.",
      avatar: "/Image4.png",
      ringClass: "ring-purple-300",
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
      }, 6000);
    }
    return () => resetTimeout();
  }, [current, autoplay, testimonials.length]);

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonial-header",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    (gsap.utils.toArray(".testimonial-item") as HTMLElement[]).forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
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
    <section
      id="testimonials"
      className="scroll-mt-24 relative py-24 bg-gradient-to-b from-yellow-200 via-white to-yellow-100 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/degtf.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 testimonial-header">
          <p className="text-base text-gray-600 font-semibold uppercase tracking-wide mb-2">
            Client Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear directly from our valued clients across industries about their
            experiences with our performance-driven solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative flex flex-col items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ease-in-out transform ${
                current === index
                  ? "opacity-100 scale-100 translate-y-0 z-10"
                  : "opacity-0 scale-95 translate-y-4 pointer-events-none absolute"
              } testimonial-item`}
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-yellow-200 p-8 sm:p-10 text-center mx-4 w-full max-w-lg">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={`mx-auto rounded-full object-cover mb-6 ring-4 ${testimonial.ringClass} w-24 h-24`}
                />
                <p className="text-gray-700 italic leading-relaxed mb-6 text-base sm:text-lg">
                  “{testimonial.text}”
                </p>
                <div className="font-semibold text-blue-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
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
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-yellow-400 w-6 scale-125"
                  : "bg-gray-300 hover:bg-yellow-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
