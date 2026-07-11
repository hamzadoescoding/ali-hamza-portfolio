"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";

export default function ExperienceList() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Get mouse position relative to the row container
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 bg-brand-bg border-b border-brand-light-gray/70">
      <div className="max-w-[1400px] mx-auto select-none">
        
        {/* Dark Container */}
        <div className="relative bg-brand-charcoal text-brand-white border border-brand-light-gray/20 rounded-lg p-8 md:p-14 overflow-hidden shadow-xl">
          
          {/* Faint Background Label */}
          <div className="absolute -bottom-8 md:-bottom-12 -right-8 pointer-events-none select-none z-0">
            <h2 className="text-[14vw] md:text-[9vw] font-black text-brand-white/[0.02] tracking-tighter leading-none uppercase">
              EXPERIENCE
            </h2>
          </div>

          {/* Header */}
          <div className="relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 md:mb-16 pb-6 border-b border-brand-light-gray/10 z-10">
            <h3 className="text-xs font-semibold tracking-widest text-brand-light-gray uppercase">
              /EXPERIENCE
            </h3>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              [9+] years of experience
            </span>
          </div>

          {/* Experience Grid Rows */}
          <div className="relative flex flex-col z-10">
            {experiences.map((exp, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  className={`relative grid grid-cols-1 md:grid-cols-12 items-center py-8 md:py-10 border-b border-brand-light-gray/10 last:border-b-0 cursor-default transition-opacity duration-300 ${
                    isAnyHovered && !isHovered ? "opacity-35" : "opacity-100"
                  }`}
                >
                  {/* Left: Role and Company */}
                  <div className="md:col-span-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 text-left">
                    <h4 className={`text-lg md:text-xl font-bold uppercase transition-colors duration-300 ${
                      isHovered ? "text-brand-white" : "text-brand-light-gray"
                    }`}>
                      {exp.company}
                    </h4>
                    <span className="text-xs md:text-sm text-brand-med-gray font-medium uppercase tracking-wider">
                      {exp.role}
                    </span>
                  </div>

                  {/* Right: Date Range */}
                  <div className="md:col-span-4 text-left md:text-right mt-2 md:mt-0">
                    <span className={`text-xs md:text-sm font-mono transition-colors duration-300 ${
                      isHovered ? "text-brand-green" : "text-brand-med-gray"
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Desktop Only Hover-follow project preview card */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                        animate={{ opacity: 1, scale: 1, rotate: -8 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: -4 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="hidden md:block absolute pointer-events-none w-36 aspect-[16/10] bg-brand-white border border-brand-light-gray/20 shadow-2xl z-50 overflow-hidden"
                        style={{
                          left: mousePos.x + 25,
                          top: mousePos.y - 45,
                        }}
                      >
                        <Image
                          src={exp.thumbnail}
                          alt={exp.company}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
