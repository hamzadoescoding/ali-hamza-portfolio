"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import CloudBackground from "@/components/CloudBackground";
import CustomCursor from "@/components/CustomCursor";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import Magnetic from "@/components/Magnetic";
import ContactModal from "@/components/ContactModal";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: ProjectDetailClientProps) {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <>
      {/* Grayscale cloud background */}
      <CloudBackground />

      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating Website Panel Container */}
      <div className="relative w-full flex flex-col justify-start min-h-screen py-6 md:py-12">

        {/* Floating Panel Canvas */}
        <motion.div
          initial={{ opacity: 1, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full bg-brand-bg border-y border-brand-light-gray/65 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-10"
        >
          {/* Custom Details Page Header */}
          <header className="sticky top-0 z-40 w-full bg-brand-bg/85 backdrop-blur-md border-b border-brand-light-gray/70 py-4.5 px-6 md:px-12 flex items-center justify-between">
            <Magnetic>
              <Link
                href="/"
                className="inline-flex items-center gap-2 py-3 sm:py-0 text-[11px] font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-black transition-colors focus-ring"
              >
                <ArrowLeft size={13} />
                <span>Go Back</span>
              </Link>
            </Magnetic>
            <AvailabilityBadge />
          </header>

          {/* Details Content */}
          <main className="flex-1 flex flex-col select-none">

            {/* Title Block */}
            <section className="pt-16 pb-12 px-6 md:px-12 text-left">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-muted"
              >
                // Work Case Study
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-brand-black mt-2 leading-[0.95]"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-brand-muted mt-3 uppercase tracking-wider font-semibold"
              >
                {project.category}
              </motion.p>
            </section>

            {/* Giant Hero Visual */}
            <section className="px-6 md:px-12 pb-14 w-full">
              <motion.div
                initial={{ opacity: 1, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                className="relative aspect-[16/8] w-full overflow-hidden border border-brand-light-gray/70 shadow-md bg-brand-white"
              >
                <Image
                  src={project.heroImage}
                  alt={`${project.title} Case Visual`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </section>

            {/* Metadata Info Panel */}
            <section className="px-6 md:px-12 py-10 border-t border-b border-brand-light-gray/70 bg-[#F6F6F3]">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-1.5">// Client</span>
                  <span className="text-xs font-bold text-brand-black uppercase">{project.client}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-1.5">// Year</span>
                  <span className="text-xs font-mono font-semibold text-brand-black">{project.year}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-1.5">// Role</span>
                  <span className="text-xs font-bold text-brand-black uppercase">{project.role}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-1.5">// Duration</span>
                  <span className="text-xs font-bold text-brand-black uppercase">{project.duration}</span>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <span className="block text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-1.5">// Tools</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 border border-brand-light-gray text-[9px] font-semibold bg-brand-white text-brand-charcoal uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Overview / Challenge / Strategy Details */}
            <section className="py-16 md:py-24 px-6 md:px-12 space-y-16 md:space-y-24">

              {/* Short Summary (Narrow Column) */}
              <div className="max-w-2xl text-left">
                <h2 className="text-xs font-mono tracking-widest text-brand-muted uppercase mb-4">// Project Overview</h2>
                <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-brand-black leading-snug">
                  {project.summary}
                </p>
              </div>

              {/* Challenge & Strategy split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left pt-12 border-t border-brand-light-gray">
                <div>
                  <h3 className="text-xs font-mono tracking-widest text-brand-muted uppercase mb-4">// The Challenge</h3>
                  <p className="text-sm md:text-base text-brand-charcoal leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono tracking-widest text-brand-muted uppercase mb-4">// The Strategy</h3>
                  <p className="text-sm md:text-base text-brand-charcoal leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
              </div>

              {/* Outcome & Results (Fuller view) */}
              <div className="py-12 px-6 md:px-12 bg-brand-charcoal text-brand-white border border-brand-light-gray/25 rounded-md text-left mt-12">
                <h3 className="text-xs font-mono tracking-widest text-brand-green uppercase mb-4">// Measurable Outcome</h3>
                <p className="text-base md:text-lg font-medium leading-relaxed max-w-4xl">
                  {project.outcome}
                </p>
              </div>

            </section>

            {/* Previous & Next Project Navigation */}
            <section className="border-t border-b border-brand-light-gray/70 grid grid-cols-1 md:grid-cols-2">
              {/* Prev Project */}
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col justify-center items-start text-left p-10 md:p-14 hover:bg-brand-light-gray/10 border-b md:border-b-0 md:border-r border-brand-light-gray/70 transition-colors focus-ring"
              >
                <span className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-2">
                  &larr; Previous Work
                </span>
                <span className="text-xl md:text-2xl font-black uppercase text-brand-black tracking-tight group-hover:text-brand-green transition-colors">
                  {prevProject.title}
                </span>
              </Link>

              {/* Next Project */}
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col justify-center items-start md:items-end text-left md:text-right p-10 md:p-14 hover:bg-brand-light-gray/10 transition-colors focus-ring"
              >
                <span className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-2">
                  Next Work &rarr;
                </span>
                <span className="text-xl md:text-2xl font-black uppercase text-brand-black tracking-tight group-hover:text-brand-green transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 text-center flex flex-col items-center gap-6 bg-[#F6F6F3]">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-brand-black">
                Ready to launch your vision?
              </h3>
              <p className="text-xs md:text-sm text-brand-charcoal max-w-sm">
                Get in touch with Ali Hamza to schedule an initial discovery call.
              </p>
              <Magnetic>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-black hover:bg-brand-charcoal text-brand-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors cursor-pointer focus-ring"
                >
                  <span>Let&apos;s Collaborate</span>
                  <ArrowUpRight size={13} />
                </button>
              </Magnetic>
            </section>

          </main>
        </motion.div>
      </div>

      {/* Inquiry contact form modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
