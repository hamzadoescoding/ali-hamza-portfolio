"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<"all" | "real" | "exploration">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  const categories = [
    { label: "All Works", value: "all" },
    { label: "Real Projects", value: "real" },
    { label: "Explorations", value: "exploration" },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18
      }
    },
  } as const;

  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-12 bg-[#F6F6F3] border-b border-brand-light-gray/70">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <SectionHeading title="SELECTED WORK" bgText="PORTFOLIO" number="06" />

        {/* Toolbar: Filters & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 md:mb-16 select-none">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4.5 py-2 border text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer focus-ring ${
                  filter === tab.value
                    ? "bg-brand-black text-brand-white border-brand-black"
                    : "bg-brand-white text-brand-charcoal border-brand-light-gray hover:bg-brand-light-gray/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Action */}
          <Magnetic>
            <a 
              href="https://github.com/alihamzamughalse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-charcoal hover:text-brand-black transition-colors focus-ring"
            >
              <span>View All Work</span>
              <ArrowRight size={13} />
            </a>
          </Magnetic>
        </div>

        {/* Grid List */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className="w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
