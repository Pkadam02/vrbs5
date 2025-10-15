"use client";

import "./globals.css";
import { Poppins, Archivo } from "next/font/google";
import Navbar from "../Component/Navbar"; // Import the Navbar component
// import SmoothScroll from "@/smooth-scroll-gsap/SmoothScroll";
import { useState } from "react"; // Add useState import
import Footer from "@/Component/Footer";
import CustomCursor from "@/Component/CustomCursor";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"], variable: '--font-poppins' });
const archivo = Archivo({ subsets: ["latin"], weight: ["400"], variable: '--font-archivo' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivo.className} ${poppins.variable}`}>
        <CustomCursor />
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Render Navbar */}
        {/* 👇 Wrap all content in SmoothScroll */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
