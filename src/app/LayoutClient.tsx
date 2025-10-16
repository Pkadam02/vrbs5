// src/app/LayoutClient.tsx
"use client";

import { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "@/Component/Footer";
import CustomCursor from "@/Component/CustomCursor";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </>
  );
}
