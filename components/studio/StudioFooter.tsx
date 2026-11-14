import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { startup } from "@/data/startup";
import { contactHref } from "@/lib/contact";

export default function StudioFooter({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer id="contact" className="sx-footer">
      <div className="sx-footer-bg" aria-hidden="true">
        <Image src="/studio/grid-lines.png" alt="" fill sizes="100vw" />
      </div>
      <div className={`sx-container sx-footer-top${showCta ? "" : " sx-footer-top-compact"}`}>
        <div className="sx-footer-left">
          <Link href="/" className="sx-logo">
            <span className="sx-logo-mark" aria-hidden="true">
              ah
            </span>
            Ali Hamza
          </Link>
          <a className="sx-footer-email" href={`mailto:${startup.email}`}>
            {startup.email}
          </a>
          <p>Websites, apps &amp; CRMs for small businesses in the US and worldwide.</p>
        </div>
        {showCta && (
          <>
            <Image
              className="sx-footer-knot"
              src="/studio/glass-knot.png"
              alt=""
              width={202}
              height={217}
              aria-hidden="true"
            />
            <Link className="sx-cta-big" href={startup.inquiry}>
              <span>
                Let&apos;s Talk
                <span className="sx-cta-arrow" aria-hidden="true">
                  <ArrowRight size={30} />
                </span>
              </span>
              <span className="sx-accent-text">Work Together</span>
            </Link>
          </>
        )}
      </div>
      <div className="sx-container sx-footer-links">
        <div>
          <h3>Explore</h3>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div>
          <h3>Services</h3>
          <Link href={contactHref({ service: "website" })}>Business Websites</Link>
          <Link href={contactHref({ service: "booking" })}>Booking &amp; Ordering Apps</Link>
          <Link href={contactHref({ service: "crm" })}>CRMs &amp; Dashboards</Link>
          <Link href={contactHref({ service: "ecommerce" })}>E-commerce Stores</Link>
          <Link href={contactHref({ service: "ai" })}>AI Assistants</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link href={startup.inquiry}>Contact form</Link>
          <Link href={startup.audit}>Free website review</Link>
          <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={startup.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="sx-container sx-footer-bottom">
        <span>© {new Date().getFullYear()} Ali Hamza. All rights reserved.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
