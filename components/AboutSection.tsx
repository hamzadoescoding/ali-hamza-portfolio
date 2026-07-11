"use client";

import React from "react";
import { Download, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";

export default function AboutSection() {
  const devLanguages = ["C++", "Java", "Python", "PHP", "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "SQL"];
  const specialistSkills = ["Cybersecurity", "Network Security", "Ethical Hacking", "Penetration Testing", "Machine Learning", "Data Analytics", "Data Structures"];
  const toolsPlatforms = ["WordPress", "WooCommerce", "Elementor", "Git", "Linux", "Android Studio", "VS Code"];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-[#F6F6F3] border-b border-brand-light-gray/70">
      <div className="max-w-[1400px] mx-auto select-none">
        
        {/* Section Heading */}
        <SectionHeading title="ABOUT" bgText="BIOGRAPHY" />

        {/* Content Layout */}
        <div className="flex flex-col gap-14 text-left">
          {/* Main Statement */}
          <div className="max-w-4xl">
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-brand-black leading-snug">
              Building secure, high-performance web products that unify elegant visual interfaces with robust systems engineering.
            </h3>
            <p className="mt-6 text-sm md:text-base text-brand-charcoal leading-relaxed">
              I am a Software Engineer based in Islamabad, Pakistan, with a strong academic foundation in software structures and digital safety. By blending full-stack web engineering, custom B2B e-commerce architectures, and advanced cybersecurity audits, I build fast, search-optimized applications that protect user data while driving business conversions.
            </p>
          </div>

          {/* Sub Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-6 border-t border-brand-light-gray">
            
            {/* Left Column: Background Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-3">// Location & Availability</h4>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal">
                    <MapPin size={13} className="text-brand-muted" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-charcoal">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    <span>Available for new opportunities</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-3">// Academic Credentials</h4>
                <div className="text-xs text-brand-charcoal leading-relaxed">
                  <p className="font-bold text-brand-black">BS in Software Engineering</p>
                  <p>International Islamic University Islamabad (IIUI)</p>
                  <p className="text-brand-muted mt-0.5">Class of 2021 – 2025</p>
                </div>
              </div>

              <div className="pt-4">
                <Magnetic>
                  <a
                    href="/Ali_Hamza_Resume.pdf"
                    download="Ali_Hamza_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-brand-black hover:bg-brand-charcoal text-brand-white text-[11px] font-semibold uppercase tracking-widest rounded-full transition-colors cursor-pointer focus-ring"
                  >
                    <Download size={13} />
                    <span>Download CV (PDF)</span>
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Right Column: Skills Pill Blocks */}
            <div className="lg:col-span-7 space-y-8">
              {/* Programming & Dev */}
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-4">
                  // Programming & Core Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {devLanguages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-brand-light-gray bg-brand-white text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-4">
                  // Core Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {specialistSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-brand-light-gray bg-brand-white text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software & Tools */}
              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-brand-muted uppercase mb-4">
                  // Infrastructure & Dev Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolsPlatforms.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-brand-light-gray bg-brand-white text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
