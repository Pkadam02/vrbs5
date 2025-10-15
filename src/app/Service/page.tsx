"use client"
import React, { useEffect } from 'react';
import S1 from '@/Component/S1';
import S2 from '@/Component/S2';
import S3 from '@/Component/S3';
import S4 from '@/Component/S4';
import S5 from '@/Component/S5';
import S6 from '@/Component/S6';
import S12 from '@/Component/S12';
import S7 from '@/Component/S7';
import S8 from '@/Component/S8';
import S11 from '@/Component/S11';
import S9 from '@/Component/S9';
import S10 from '@/Component/S10';




export default function ServicePage() {
  useEffect(() => {
    // Scroll to the specific section if a hash is present in the URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial scroll on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
      <S6 />
      <S7 />
      <S8 />
      <S9 />
      <S10 />
      <S11 />
      <S12 />
    </div>
  );
}