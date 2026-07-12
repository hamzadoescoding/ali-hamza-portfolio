"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import CloudBackground from "@/components/CloudBackground";
import CustomCursor from "@/components/CustomCursor";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import Magnetic from "@/components/Magnetic";
import ProjectCard from "@/components/ProjectCard";
import ContactModal from "@/components/ContactModal";

export default function AllWorkPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full min-h-[90vh] bg-brand-bg border-y border-brand-light-gray/65 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <header className="sticky top-0 z-40 w-full bg-brand-bg/85 backdrop-blur-md border-b border-brand-light-gray/70 py-4.5 px-6 md:px-12 flex items-center justify-between">
            <Magnetic>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-black transition-colors focus-ring"
              >
                <ArrowLeft size={13} />
                <span>Go Back</span>
              </Link>
            </Magnetic>
            <AvailabilityBadge />
          </header>

          {/* Content */}
          <main className="flex-1 flex flex-col select-none">

            {/* Title Block */}
            <section className="pt-16 pb-12 px-6 md:px-12 text-left">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-brand-muted"
              >
                // Full Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-brand-black mt-2 leading-[0.95]"
              >
                All Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-brand-muted mt-3 uppercase tracking-wider font-semibold"
              >
                {projects.length} Projects — Real Work &amp; Explorations
              </motion.p>
            </section>

            {/* Full Grid */}
            <section className="px-6 md:px-12 pb-24 w-full">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.slug}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 100, damping: 18 },
                      },
                    }}
                    className="w-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 text-center flex flex-col items-center gap-6 bg-[#F6F6F3] border-t border-brand-light-gray/70">
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
