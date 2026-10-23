"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { startup } from "@/data/startup";

export default function StartupHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#products", label: "Our tools" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/#approach", label: "Approach" },
    { href: "/#about", label: "About us" },
  ];

  return (
    <header className="startup-header">
      <a href="/" className="startup-brand" aria-label="Ali Hamza AI home">
        <span className="startup-mark" aria-hidden="true">
          a<span>h</span>
        </span>
        <span>
          Ali Hamza<span className="startup-brand-ai">AI</span>
        </span>
      </a>
      <nav className="startup-desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="startup-button startup-header-cta" href={startup.inquiry}>
        Build with us <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <button
        className="startup-menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="startup-mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav id="startup-mobile-nav" className="startup-mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          <a href={startup.inquiry} onClick={() => setOpen(false)}>
            Build with us <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
