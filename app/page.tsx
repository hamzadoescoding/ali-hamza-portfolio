"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ServicesAccordion from "@/components/ServicesAccordion";
import ExperienceList from "@/components/ExperienceList";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import CloudBackground from "@/components/CloudBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Grayscale Parallax Cloudscape Background */}
      <CloudBackground />

      {/* Custom Desktop Follower Cursor */}
      <CustomCursor />

      {/* Main floating website panel structure */}
      <div className="relative w-full flex flex-col justify-start min-h-screen py-6 md:py-12">

        {/* Floating Panel Canvas */}
        <motion.div
          initial={{ opacity: 1, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full min-h-[90vh] bg-brand-bg border-y border-brand-light-gray/65 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
        >
          {/* Transparent Header */}
          <Header onContactClick={() => setIsContactOpen(true)} />

          {/* Core Page Layout */}
          <main className="flex-1 flex flex-col">
            
            {/* Hero Profile Block */}
            <Hero onCtaClick={() => setIsContactOpen(true)} />
            
            {/* Selected Work Portfolio Grid */}
            <ProjectGrid />
            
            {/* Capability Services Accordion */}
            <ServicesAccordion />
            
            {/* Experience Panel */}
            <ExperienceList />
            
            {/* Biographic Details & Skills */}
            <AboutSection />
            
            {/* Contact CTA Section */}
            <ContactSection onContactClick={() => setIsContactOpen(true)} />
            
          </main>
        </motion.div>
      </div>

      {/* Accessible Project Inquiry Contact Form Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
