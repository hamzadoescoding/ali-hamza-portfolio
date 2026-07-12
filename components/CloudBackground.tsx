"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CloudBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#121210] overflow-hidden select-none">
      {/* Background layer 1 (Slower scroll down) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none transition-transform duration-100 ease-out scale-105"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <Image
          src="/images/clouds.png"
          alt="Grayscale cloudscape back"
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-75 brightness-[0.8] blur-[4px]"
        />
      </div>

      {/* Background layer 2 (Subtle scroll up, flipped horizontally) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none transition-transform duration-150 ease-out scale-110"
        style={{
          transform: `translateY(${-scrollY * 0.03}px) scaleX(-1)`,
        }}
      >
        <Image
          src="/images/clouds.png"
          alt="Grayscale cloudscape front"
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-50 brightness-[0.7] blur-[8px]"
        />
      </div>

      {/* Atmospheric vignette to dim edges and enhance contrast in floating panels */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(18,18,16,0.5)_100%)] pointer-events-none" />
    </div>
  );
}
