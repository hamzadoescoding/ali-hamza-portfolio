"use client";

import React from "react";
import { Link2 } from "lucide-react";

interface SocialPillProps {
  platform: string;
  url: string;
}

export default function SocialPill({ platform, url }: SocialPillProps) {
  const getIcon = () => {
    const iconSize = 13;
    switch (platform.toLowerCase()) {
      case "linkedin":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "dribbble":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
          </svg>
        );
      case "github":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case "behance":
        return (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.5H18c0-.78.18-1.5.75-2s1.38-.5 2.25-.5 1.56.22 2 .5.75 1.15.75 2z" />
            <path d="M18 16c.5.5 1.12.75 2 .75s1.5-.25 2-.75" />
            <path d="M18 8h4" />
            <path d="M10 8H5v8h5c1.1 0 2-.9 2-2v-1c0-.55-.45-1-1-1 .55 0 1-.45 1-1V10c0-1.1-.9-2-2-2z" />
            <path d="M5 12h5" />
          </svg>
        );
      default:
        return <Link2 size={iconSize} />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-4 py-3 sm:py-2 rounded-full border border-brand-light-gray bg-brand-white text-brand-charcoal text-[11px] font-medium uppercase tracking-wider transition-all duration-300 hover:bg-brand-black hover:text-brand-white hover:border-brand-black shadow-[0_2px_5px_rgba(0,0,0,0.02)] focus-ring"
    >
      <span className="flex items-center justify-center transition-transform duration-300">
        {getIcon()}
      </span>
      <span>{platform}</span>
    </a>
  );
}
