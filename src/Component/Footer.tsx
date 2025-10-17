"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // <-- import

interface FooterProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function Footer({ setIsOpen }: FooterProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Combine refs
  const setRefs = (el: HTMLDivElement) => {
    footerRef.current = el;
    inViewRef(el);
  };

  useLayoutEffect(() => {
    if (!inView) return; // only trigger GSAP when in view

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-logo-contact",
        { opacity: 0, y: 800, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-logo-contact",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      (gsap.utils.toArray(".footer-column") as HTMLElement[]).forEach((column, index) => {
        gsap.fromTo(
          column,
          { opacity: 0, y: 50, rotationX: 15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: column,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, footerRef);

    return () => ctx.revert();
  }, [inView]); 

  return (
    <footer ref={footerRef} className="bg-[#27344D] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0 footer-logo-contact">
          <Link href="/"> {/* Use Link component */}
          <img src="title2.png" alt="VR Logo" className="h-12" />
        </Link>
          </div>
          

          {/* Hawaii Main Office */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Headquarters</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>66 West Flagler Street - Suite 900</li>
              <li>Miami, FL 33130, USA</li>
              <li>+1 786 406 6061</li>
              <li>E: contact@vr-bs.com</li>
            </ul>
          </div>

          {/* World Offices */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">World Offices</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pune, India</li>
              <li>USA - San Francisco</li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#casestudy" className="hover:text-white transition-colors duration-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left footer-column">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/Service#s6" className="hover:text-white transition-colors duration-200">
                Software Development
                </Link>
              </li>
              <li>
                <Link href="/Service#s1" className="hover:text-white transition-colors duration-200">
                Demand Generation
                </Link>
              </li>
              <li>
                <Link href="/Service#s10" className="hover:text-white transition-colors duration-200">
                Appointment Generation
                </Link>
              </li>
              <li>
                <Link href="/Service#s2" className="hover:text-white transition-colors duration-200">
                Content Syndication
                </Link>
              </li>
              <li>
                <Link href="/Service#s4" className="hover:text-white transition-colors duration-200">
                Event & Webinar Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          
        </div>
        

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} VR Business Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
