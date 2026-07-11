"use client";

import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";

export default function ServicesAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 bg-brand-bg border-b border-brand-light-gray/70">
      <div className="max-w-[1400px] mx-auto select-none">
        {/* Section Title */}
        <SectionHeading title="SERVICE" bgText="SERVICES" number="04" />

        {/* Accordion Rows */}
        <div className="flex flex-col border-t border-brand-light-gray">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="border-b border-brand-light-gray overflow-hidden transition-colors duration-300"
              >
                {/* Accordion Header Row */}
                <button
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`panel-${service.id}`}
                  id={`header-${service.id}`}
                  className={`w-full flex items-center justify-between text-left py-8 md:py-10 px-4 transition-all duration-300 cursor-pointer focus-ring ${
                    isExpanded 
                      ? "bg-brand-charcoal text-brand-white border-b-0" 
                      : "bg-brand-white hover:bg-brand-light-gray/20 text-brand-black"
                  }`}
                >
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-current">
                    {isExpanded ? (
                      <X size={15} className="transform rotate-0 transition-transform duration-300" />
                    ) : (
                      <ArrowUpRight size={15} className="transform rotate-0 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Accordion Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`panel-${service.id}`}
                      role="region"
                      aria-labelledby={`header-${service.id}`}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-brand-charcoal text-brand-white"
                    >
                      <div className="px-6 pb-12 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
                        {/* Left Side: Descriptions */}
                        <div className="md:col-span-7 space-y-6">
                          <p className="text-sm md:text-base text-brand-light-gray font-normal leading-relaxed max-w-lg">
                            {service.description}
                          </p>
                          
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono tracking-widest text-brand-med-gray uppercase">
                              // Key Competencies
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-brand-light-gray">
                                  <span className="w-1 h-1 rounded-full bg-brand-green" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Side: Floating Tilted Image Card */}
                        <div className="hidden md:col-span-5 md:flex justify-end pr-10 relative h-[180px] overflow-visible">
                          <motion.div
                            initial={{ opacity: 0, rotate: 0, y: 30 }}
                            animate={{ opacity: 1, rotate: -6, y: -20 }}
                            exit={{ opacity: 0, rotate: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative w-64 h-40 bg-brand-white border border-brand-light-gray/25 shadow-2xl overflow-hidden select-none pointer-events-none"
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="240px"
                              className="object-cover"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
