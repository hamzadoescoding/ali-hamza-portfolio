"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/app/providers";
import AvailabilityBadge from "./AvailabilityBadge";
import Magnetic from "./Magnetic";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ["work", "services", "experience", "about"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // Slight delay to allow mobile drawer to close
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        lenis?.scrollTo(target, { offset: -80 });
      }
    }, isMobileMenuOpen ? 300 : 0);
  };

  const navItems = [
    { label: "Work", id: "work", count: String(projects.length).padStart(2, "0") },
    { label: "Services", id: "services", count: String(services.length).padStart(2, "0") },
    { label: "Experience", id: "experience", count: "9+" },
    { label: "About", id: "about", count: null },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-white/80 backdrop-blur-md border-b border-brand-light-gray/70 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Availability Badge */}
          <div className="flex items-center">
            <AvailabilityBadge />
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-brand-white/60 backdrop-blur-sm border border-brand-light-gray/60 px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] font-semibold uppercase tracking-widest transition-colors cursor-pointer focus-ring relative py-0.5 ${
                  activeSection === item.id ? "text-brand-black" : "text-brand-muted hover:text-brand-black"
                }`}
              >
                <span>{item.label}</span>
                {item.count && (
                  <span className="text-[9px] font-mono ml-1 text-brand-muted/75 font-normal">
                    [{item.count}]
                  </span>
                )}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right: CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Magnetic>
              <button
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-black hover:bg-brand-charcoal text-brand-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer focus-ring"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={13} />
              </button>
            </Magnetic>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-full border border-brand-light-gray bg-brand-white text-brand-charcoal hover:bg-brand-light-gray/30 transition-colors md:hidden cursor-pointer focus-ring"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-brand-charcoal md:hidden flex flex-col justify-between p-8"
          >
            {/* Header placeholder to push content down */}
            <div className="h-16" />

            {/* Links */}
            <nav className="flex flex-col gap-8 text-left mt-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left py-2 border-b border-brand-light-gray/10 text-3xl font-medium tracking-tight text-brand-bg uppercase flex justify-between items-baseline"
                >
                  <span>{item.label}</span>
                  {item.count && (
                    <span className="text-sm font-mono text-brand-med-gray font-normal">
                      [{item.count}]
                    </span>
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Footer details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 mt-auto"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-4 bg-brand-bg text-brand-black text-center text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-brand-light-gray transition-colors focus-ring"
              >
                Let&apos;s Talk
              </button>
              <div className="text-center text-[10px] text-brand-med-gray uppercase tracking-widest">
                Ali Hamza &copy; 2025. All Rights Reserved.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
