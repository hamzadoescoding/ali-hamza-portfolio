"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import AvailabilityBadge from "./AvailabilityBadge";

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  
  const footerSocials = [
    { 
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/ali-hamza-6a9241225/", 
      icon: (
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      platform: "GitHub", 
      url: "https://github.com/alihamzamughalse", 
      icon: (
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    { 
      platform: "Dribbble", 
      url: "#", 
      icon: (
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
        </svg>
      )
    },
  ];

  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-12 bg-transparent select-none overflow-hidden flex flex-col items-center">
      {/* Visual fading cloud boundaries */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F6F3] via-transparent to-transparent pointer-events-none h-20 w-full" />
      
      {/* Central Translucent Panel */}
      <div className="relative w-full max-w-[1400px] bg-brand-bg/85 backdrop-blur-md border border-brand-light-gray/70 rounded-lg py-16 md:py-24 px-6 md:px-16 text-center shadow-xl flex flex-col items-center gap-8 z-10">
        
        {/* Availability indicator */}
        <AvailabilityBadge />

        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-brand-black max-w-4xl leading-tight">
          Have a project in mind?
        </h2>

        {/* Support bio */}
        <p className="text-sm md:text-base font-normal text-brand-charcoal max-w-xl leading-relaxed">
          Together, we can build secure, scalable, and visually impactful software. Let&apos;s collaborate to translate your ideas into digital solutions that work flawlessly.
        </p>

        {/* Contact CTA */}
        <div className="pt-4">
          <Magnetic>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-4.5 bg-brand-black hover:bg-brand-charcoal text-brand-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors cursor-pointer focus-ring shadow-lg"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={15} />
            </button>
          </Magnetic>
        </div>

        {/* Footer info splits */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-16 border-t border-brand-light-gray mt-8">
          
          {/* Left: Identity Pill */}
          <div className="inline-flex items-center gap-3 px-4.5 py-2.5 rounded-full border border-brand-light-gray bg-brand-white shadow-[0_2px_6px_rgba(0,0,0,0.01)]">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-brand-light-gray">
              <Image
                src="/portraits/ali-hamza.png"
                alt="Ali Hamza avatar"
                fill
                sizes="28px"
                className="object-cover scale-150 translate-y-0.5"
              />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-black">
              Ali Hamza &copy; 2025
            </span>
          </div>

          {/* Right: Socials Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {footerSocials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-brand-light-gray bg-brand-white hover:bg-brand-black hover:text-brand-white text-brand-charcoal transition-all duration-300 text-[10px] uppercase font-bold tracking-wider rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.01)] focus-ring"
              >
                <span>{social.icon}</span>
                <span>{social.platform}</span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
