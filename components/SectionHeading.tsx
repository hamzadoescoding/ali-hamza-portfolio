"use client";

import React from "react";

interface SectionHeadingProps {
  title: string;
  bgText?: string;
  number?: string;
}

export default function SectionHeading({ title, bgText, number }: SectionHeadingProps) {
  const displayBgText = bgText || title;
  
  return (
    <div className="relative mb-14 md:mb-20 select-none">
      {/* Massive faint background heading */}
      <div className="absolute -top-6 md:-top-10 left-0 w-full overflow-hidden pointer-events-none z-0">
        <h2 className="text-[12vw] md:text-[8vw] font-bold text-brand-black/[0.03] uppercase tracking-tighter leading-none select-none">
          {displayBgText}
        </h2>
      </div>
      
      {/* Foreground title */}
      <div className="relative flex items-center gap-2 z-10">
        <span className="text-brand-charcoal text-xs md:text-sm font-semibold tracking-widest uppercase">
          /{title}
        </span>
        {number && (
          <span className="text-brand-muted text-[10px] md:text-xs font-mono">
            [{number}]
          </span>
        )}
      </div>
    </div>
  );
}
