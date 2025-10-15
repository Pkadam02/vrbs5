"use client";

import { useState } from 'react';
import Link from 'next/link'; // Import Link component

export default function Navbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  console.log("Navbar isOpen: ", isOpen);
  // const [isOpen, setIsOpen] = useState(false);

  // REMOVED handleScrollToSection function

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-2 py-2 bg-yellow-300 text-[#1C1C57] border-b border-white">
      <div className="flex items-center space-x-2 lg:ml-20">
        <Link href="/" onClick={() => setIsOpen(false)}> {/* Use Link component */}
          <img src="title.png" alt="VR Logo" className="h-12" />
        </Link>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden lg:flex space-x-6 lg:space-x-8 xl:space-x-10 text-[var(--hcolor)] font-medium text-sm">
 
  <li>
    <Link
      href="/#about"
      onClick={() => setIsOpen(false)}
      className="relative px-6 py-1 font-semibold text-[#1C1C57] inline-block text-center overflow-hidden group"
    >
      <span className="relative z-10">About</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
    </Link>
  </li>
  <li>
    <Link
      href="/#services"
      onClick={() => setIsOpen(false)}
      className="relative px-6 py-1 font-semibold text-[#1C1C57] inline-block text-center overflow-hidden group"
    >
      <span className="relative z-10">Services</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
    </Link>
  </li>
  <li>
    <Link
      href="/#methodology"
      onClick={() => setIsOpen(false)}
      className="relative px-6 py-1 font-semibold text-[#1C1C57] inline-block text-center overflow-hidden group"
    >
      <span className="relative z-10">Methodology</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
    </Link>
  </li>
  <li>
    <Link
      href="/#casestudy"
      onClick={() => setIsOpen(false)}
      className="relative px-6 py-1 font-semibold text-[#1C1C57] inline-block text-center overflow-hidden group"
    >
      <span className="relative z-10">Case Study</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
    </Link>
  </li>
  <li>
    <Link
      href="/contact"
      onClick={() => setIsOpen(true)}
      className="relative px-6 py-1 font-semibold text-[#1C1C57] inline-block text-center overflow-hidden group"
    >
      <span className="relative z-10">Contact Us</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
    </Link>
  </li>
</ul>

      <div className="hidden lg:flex items-center text-[var(--hcolor)] gap-4 lg:mr-20 text-sm">
        +91 7524963552 <br />
        +91 8585856595
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center z-[100]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-sm bg-yellow-300 z-[90] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}>
        <div className="flex justify-end p-15">
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">

          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-[var(--hcolor)] font-medium py-6">
        <li><Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-blue-700 transition-colors duration-200 text-[#1C1C57] text-base">About</Link></li>
          <li><Link href="/#services" onClick={() => setIsOpen(false)} className="hover:text-blue-700 transition-colors duration-200 text-[#1C1C57] text-base">Services</Link></li>
          <li><Link href="/#methodology" onClick={() => setIsOpen(false)} className="hover:text-blue-700 transition-colors duration-200 text-[#1C1C57] text-base">Methodology</Link></li>
          <li><Link href="/#casestudy" onClick={() => setIsOpen(false)} className="hover:text-blue-700 transition-colors duration-200 text-[#1C1C57] text-base">Case Study</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-700 transition-colors duration-200 text-[#1C1C57] text-base">Contact Us</Link></li>
        </ul>
        <div className="flex flex-col space-y-4 mt-8 items-center text-[var(--hcolor)] px-4">
        <div className=" md:flex items-center gap-4 right-20 text-base">
        +91 7524963552 <br />
        +91 8585856595
      </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-[80] lg:hidden"></div>
      )}
    </nav>
  );
}
