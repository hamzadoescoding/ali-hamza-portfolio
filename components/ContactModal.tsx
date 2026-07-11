"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/app/providers";
import Magnetic from "./Magnetic";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  fullName?: string;
  email?: string;
  description?: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  company: "",
  projectType: "Web Development",
  budget: "$2,000 - $5,000",
  timeline: "1-3 months",
  description: "",
  honeypot: "",
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const lenis = useLenis();
  const modalRef = useRef<HTMLDivElement>(null);
  
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Pause scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      // Focus on first input
      setTimeout(() => {
        const firstInput = document.getElementById("fullName");
        firstInput?.focus();
      }, 200);
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (form.description.trim().length < 10) {
      newErrors.description = "Please write a bit more about your project (min. 10 chars)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Check honeypot (spam bot protection)
    if (form.honeypot) {
      // Silently discard spam bot submission
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
        setForm(initialFormState);
      }, 1000);
      return;
    }

    setStatus("loading");
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm(initialFormState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-brand-bg rounded-lg border border-brand-light-gray shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-light-gray select-none">
              <div>
                <h3 id="modal-title" className="text-lg font-bold uppercase tracking-wider text-brand-black">
                  Project Inquiry
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">Let&apos;s build something exceptional together.</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-brand-light-gray/50 transition-colors text-brand-charcoal focus-ring cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="overflow-y-auto p-6 flex-1">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-xl font-bold uppercase text-brand-black tracking-wider mb-2">Message Sent!</h4>
                  <p className="text-sm text-brand-muted max-w-md">
                    Thank you for reaching out. Ali Hamza will review your project details and get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      onClose();
                    }}
                    className="mt-8 px-6 py-2.5 bg-brand-black text-brand-white rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-brand-charcoal transition-colors focus-ring"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden from users) */}
                  <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
                    <input
                      type="text"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={`w-full px-4 py-2.5 bg-brand-white rounded-md border text-sm text-brand-black focus:outline-none transition-colors focus-ring ${
                          errors.fullName ? "border-red-500" : "border-brand-light-gray hover:border-brand-med-gray"
                        }`}
                        placeholder="Ali Hamza"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className={`w-full px-4 py-2.5 bg-brand-white rounded-md border text-sm text-brand-black focus:outline-none transition-colors focus-ring ${
                          errors.email ? "border-red-500" : "border-brand-light-gray hover:border-brand-med-gray"
                        }`}
                        placeholder="name@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-2.5 bg-brand-white rounded-md border border-brand-light-gray hover:border-brand-med-gray text-sm text-brand-black focus:outline-none focus-ring"
                      placeholder="Agency Inc."
                    />
                  </div>

                  {/* Project Specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-2.5 bg-brand-white rounded-md border border-brand-light-gray hover:border-brand-med-gray text-sm text-brand-black focus:outline-none focus-ring"
                      >
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Cybersecurity Services</option>
                        <option>Machine Learning</option>
                        <option>Consultation / Other</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-2.5 bg-brand-white rounded-md border border-brand-light-gray hover:border-brand-med-gray text-sm text-brand-black focus:outline-none focus-ring"
                      >
                        <option>&lt; $2,000</option>
                        <option>$2,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-2.5 bg-brand-white rounded-md border border-brand-light-gray hover:border-brand-med-gray text-sm text-brand-black focus:outline-none focus-ring"
                      >
                        <option>&lt; 1 month</option>
                        <option>1-3 months</option>
                        <option>3+ months</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={form.description}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className={`w-full px-4 py-2.5 bg-brand-white rounded-md border text-sm text-brand-black focus:outline-none resize-none transition-colors focus-ring ${
                        errors.description ? "border-red-500" : "border-brand-light-gray hover:border-brand-med-gray"
                      }`}
                      placeholder="Outline the details, goals, and objectives of the project..."
                    />
                    {errors.description && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.description}</p>
                    )}
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="flex items-center gap-2.5 p-3.5 bg-red-500/10 text-red-600 rounded-md border border-red-500/20 text-xs font-medium">
                      <AlertTriangle size={16} />
                      <span>An error occurred while sending your message. Please try again.</span>
                    </div>
                  )}

                  {/* Form Submission */}
                  <div className="pt-2 flex justify-end">
                    <Magnetic>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-black hover:bg-brand-charcoal text-brand-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 disabled:opacity-50 select-none cursor-pointer focus-ring"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={13} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={13} />
                            <span>Submit Inquiry</span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
