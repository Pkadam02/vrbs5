"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: -500 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
          },
        }
      );
  
      // Left form from left
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -950 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        }
      );
  
      // Get in Touch card from right
      gsap.fromTo(
        ".contact-right-card",
        { opacity: 0, x: 950 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-right-card",
            start: "top 85%",
          },
        }
      );
  
      // Free Consultation slides in **when in view**
      gsap.fromTo(
        ".contact-consultation-card",
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-consultation-card",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjkaayep", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section ref={sectionRef} className="scroll-mt-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between
        px-0 sm:px-8 md:px-12 lg:px-20 w-full min-h-[90vh]md:py-20 bg-white py-30 bg-white">
      <div className="container mx-auto px-4 lg:px-50">
        {/* Header */}
        <div className="text-center mb-12 contact-header">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Let&apos;s Build Your{" "}
            <span className="text-yellow-300">Digital Future</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team of
            experts and start your AI-powered journey today.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 contact-form">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll respond within 24 hours.
              </p>

              {formStatus === "success" ? (
                <div className="bg-green-100 text-green-700 px-6 py-4 rounded-md font-medium">
                  ✅ Thanks! The form was submitted successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    ></textarea>
                  </div>
                  <button
  type="submit"
  disabled={formStatus === "submitting"}
  className="relative inline-flex items-center font-semibold text-white bg-[#1C1C57] px-6 py-3 rounded-md overflow-hidden group transition-colors duration-500 disabled:opacity-70"
>
  <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-black">
    {formStatus === "submitting" ? "Sending..." : "Send Message"}
    <ArrowRight className="ml-2 h-5 w-5" />
  </span>
  <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-500 ease-in-out rounded-t-[100%]"></span>
</button>


                  {formStatus === "error" && (
                    <p className="text-red-600 mt-4">
                      ❌ Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right: Info & Consultation */}
          <div className="w-full lg:w-1/2 px-4 space-y-8">
            {/* Get in Touch */}
            <div className="bg-white p-8 rounded-lg shadow-md contact-right-card">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re looking to automate processes, leverage AI, or transform your
                entire business model, we&apos;re here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-800 font-medium">
                      contact@vrbs.in
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-gray-800 font-medium">+1 239 299 2023</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-300 mr-4" />
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-800 font-medium">
                      66 West Flagler Street –
                      <br />
                      Suite 900 Miami,
                      <br />
                      FL 33130, USA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Consultation */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md contact-consultation-card">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Free Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Schedule a free 30-minute consultation to discuss your digital transformation goals.
              </p>
              <button className="relative inline-flex items-center font-semibold text-white bg-[#1C1C57] px-6 py-3 rounded-md overflow-hidden group transition-colors duration-500">
  <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-black">
    Book a Call
    <ArrowRight className="ml-2 h-5 w-5" />
  </span>
  <span className="absolute inset-0 bg-yellow-300 top-full group-hover:top-0 transition-all duration-500 ease-in-out rounded-t-[100%]"></span>
</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
