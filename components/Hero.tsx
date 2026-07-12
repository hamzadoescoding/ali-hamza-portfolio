"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Magnetic from "./Magnetic";
import SocialPill from "./SocialPill";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isEntranceDone, setIsEntranceDone] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    // Lock float animations until initial rise has fully completed (1.6s duration + 0.2s start delay)
    const timer = setTimeout(() => {
      setIsEntranceDone(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ali-hamza-6a9241225/" },
    { platform: "GitHub", url: "https://github.com/hamzadoescoding" },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-10 pb-16 px-6 md:px-12 select-none overflow-hidden">
      {/* 1. Large Name (Upper-Middle Area) */}
      <div className="relative w-full flex flex-col items-center mt-6 z-0">
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0 100% 0 0)" }}
          animate={shouldReduceMotion ? {} : { clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="text-center font-black tracking-tighter uppercase leading-[0.8] select-none flex flex-col md:flex-row md:gap-x-6 text-[14vw] md:text-[8.5vw] w-full items-center justify-center"
        >
          <span className="text-outline block pr-2">Ali</span>
          <span className="text-brand-black block">Hamza</span>
        </motion.h1>
      </div>

      {/* 2. Overlapping Portrait (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 1, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="relative w-[65%] sm:w-[45%] md:w-[32%] lg:w-[28%] aspect-[2/3] mt-[-6vh] pointer-events-auto"
        >
          <motion.div
            animate={
              shouldReduceMotion || !isEntranceDone
                ? { y: 0 }
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={
              !isEntranceDone
                ? { duration: 0.1 }
                : {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-full cursor-none"
          >
            {/* Grayscale Base Portrait */}
            <Image
              src="/portraits/ali-hamza.png"
              alt="Ali Hamza Portrait Grayscale"
              fill
              priority
              sizes="(max-width: 768px) 50vw, 35vw"
              className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.03)] grayscale brightness-105 contrast-95 cloud-fade-bottom"
            />
            
            {/* Colored Reveal Overlay Layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                maskImage: isHovered 
                  ? `radial-gradient(circle 75px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 60%, transparent 100%)`
                  : 'radial-gradient(circle 0px at 0px 0px, black, transparent)',
                WebkitMaskImage: isHovered 
                  ? `radial-gradient(circle 75px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 60%, transparent 100%)`
                  : 'radial-gradient(circle 0px at 0px 0px, black, transparent)',
                transition: isHovered ? 'none' : 'mask-image 0.5s ease, -webkit-mask-image 0.5s ease',
              }}
            >
              <Image
                src="/portraits/ali-hamza.png"
                alt="Ali Hamza Portrait Color"
                fill
                sizes="(max-width: 768px) 50vw, 35vw"
                className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.03)] cloud-fade-bottom"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Lower Content: Left Intro and Right Socials */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-16 md:mt-auto z-20">
        {/* Left Side: Professional Title, Bio, and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="md:col-span-7 flex flex-col items-start text-left max-w-lg"
        >
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-muted mb-2 select-none">
            [ Jr. Software Engineer & Web Developer ]
          </span>
          <p className="text-sm md:text-base font-normal leading-relaxed text-brand-charcoal mb-8">
            Designing and developing thoughtful, secure digital products that are clean, highly usable, conversion-focused, and robustly coded.
          </p>
          <Magnetic>
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-black hover:bg-brand-charcoal text-brand-white text-[11px] font-semibold uppercase tracking-widest rounded-full transition-colors cursor-pointer focus-ring"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowUpRight size={14} />
            </button>
          </Magnetic>
        </motion.div>

        {/* Right Side: Vertically Stacked Socials */}
        <div className="md:col-span-5 flex flex-wrap md:flex-col items-start md:items-end justify-start md:justify-end gap-3.5">
          {socialLinks.map((link, idx) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 + idx * 0.1 }}
            >
              <SocialPill platform={link.platform} url={link.url} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
