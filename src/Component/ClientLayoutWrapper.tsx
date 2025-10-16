"use client";

import { useState } from "react";
import Navbar from "../Navbar"; // Assuming Navbar is in the same directory
import Footer from "../Footer";
import CustomCursor from "../CustomCursor";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <>
      <CustomCursor />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Render Navbar */}
      {children}
      <Footer />
    </>
  );
}
