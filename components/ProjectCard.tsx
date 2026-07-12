"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/work/${project.slug}`}
      className="group block select-none focus-ring rounded"
      data-cursor="view"
    >
      <motion.div
        className="flex flex-col gap-4 text-left cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Visual Asset Container */}
        <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-brand-white border border-brand-light-gray/70 shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            quality={65}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-[1.03]"
          />
          
          {/* Centered Circular Arrow Badge Overlay */}
          <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-brand-bg text-brand-black border border-brand-light-gray flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* Details Container */}
        <div className="flex flex-col gap-2.5 px-0.5">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-base font-bold text-brand-black tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
              {project.title}
            </h4>
            <span className="text-[10px] font-mono text-brand-muted uppercase">
              {project.year}
            </span>
          </div>
          
          {/* Category Pill */}
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-0.75 border border-brand-light-gray text-brand-charcoal text-[9px] font-semibold uppercase tracking-wider bg-brand-white/80">
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
