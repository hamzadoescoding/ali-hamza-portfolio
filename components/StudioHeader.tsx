"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { startup } from "@/data/startup";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function StudioHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sx-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="sx-header-inner">
        <Link href="/" className="sx-logo" aria-label="Ali Hamza Studio home">
          <span className="sx-logo-mark" aria-hidden="true">
            ah
          </span>
          Ali Hamza
        </Link>
        <nav className="sx-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="sx-pill sx-pill-light sx-header-cta" href={startup.inquiry}>
          Let&apos;s Talk
          <span className="sx-pill-icon" aria-hidden="true">
            <ArrowUpRight size={16} />
          </span>
        </Link>
        <button
          className="sx-menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="sx-mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="sx-mobile-nav" className="sx-mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          ))}
          <Link href={startup.inquiry} onClick={() => setOpen(false)}>
            Start a project <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}
