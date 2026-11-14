"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { startup } from "@/data/startup";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function StudioHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sv-header">
      <Link href="/" className="sv-logo" aria-label="Ali Hamza Studio home">
        alihamza<span>.</span>
      </Link>
      <nav className="sv-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="sv-pill sv-header-cta" href={startup.inquiry}>
        Let&apos;s Talk
        <span className="sv-pill-icon" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </a>
      <button
        className="sv-menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="sv-mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav id="sv-mobile-nav" className="sv-mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <a href={startup.inquiry} onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
