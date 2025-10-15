"use client";
import Navbar from "@/Component/Navbar";
import { ArrowUp } from "lucide-react";
import Hero from "@/Component/Hero";
import Partners from "@/Component/Partners";
import About from "@/Component/About";
import Services from "@/Component/Services";
import WhoWeAre from "@/Component/WhoWeAre";
import Methodology from "@/Component/Methodology";
import Testimonials from "@/Component/Testimonials";
import CTA from "@/Component/CTA";
import Footer from "@/Component/Footer";
import CaseStud from "@/Component/casestudy";
import { useState, useEffect } from "react";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // New state for Navbar open status

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main data-scroll-container>
     
      <Hero data-scroll-section />
      <Partners data-scroll-section />
      <About data-scroll-section />
      <Services data-scroll-section />
      <WhoWeAre data-scroll-section />
      <Methodology data-scroll-section />
      <CaseStud data-scroll-section />
      <Testimonials data-scroll-section />
      <CTA data-scroll-section />

      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-yellow-300 text-blue-900 shadow-lg transition-all duration-500 hover:bg-yellow-400 focus:outline-none z-50 hover:scale-110 ${showButton && !isNavbarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </main>
  );
}
