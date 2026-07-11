"use client";

import React from "react";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-light-gray bg-brand-white/90 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.03)] select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
      </span>
      <span className="text-[11px] font-medium tracking-widest text-brand-charcoal uppercase">
        Available for New Projects
      </span>
    </div>
  );
}
