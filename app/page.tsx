import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CalendarDays,
  MessageSquare,
  Workflow,
  ShieldCheck,
  Layers,
  Github,
  Plus,
} from "lucide-react";
import StartupHeader from "@/components/StartupHeader";
import { startup } from "@/data/startup";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational assistants",
    text: "Helpful interfaces that understand a question, ask for the right context, and guide people to their next step.",
    detail:
      "Service discovery, grounded answers, rich response cards, and streaming conversations.",
  },
  {
    icon: Workflow,
    title: "Agents that take action",
    text: "Connect a conversation to useful tools, so the experience can move beyond a text response.",
    detail: "Tool calling, appointment workflows, structured data collection, and status lookups.",
  },
  {
    icon: Layers,
    title: "AI inside your product",
    text: "Bring AI into the website or application your customers already use, with a clear and familiar experience.",
    detail:
      "Custom React interfaces, Next.js APIs, provider integrations, and existing business systems.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails from the start",
    text: "Give assistants a defined purpose, trusted business context, and sensible boundaries.",
    detail:
      "Scoped prompts, input validation, rate limits, and environment-based API configuration.",
  },
];

export default function Home() {
  return (
    <div className="startup-site">
      <a className="startup-skip" href="#main">
        Skip to content
      </a>
      <StartupHeader />
      <main id="main">
        <section className="startup-hero startup-container" aria-labelledby="hero-heading">
          <div className="startup-hero-copy">
            <div className="startup-eyebrow">
              <span className="startup-status-dot" /> An independent AI startup
            </div>
            <h1 id="hero-heading">
              AI that gets
              <br />
              <span>work done.</span>
            </h1>
            <p className="startup-hero-description">
              We build practical AI tools that turn everyday conversations into useful actions. From
              answering service questions to helping customers book their next appointment.
            </p>
            <div className="startup-actions">
              <a className="startup-button" href="#products">
                Explore our tools <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="startup-text-link" href={startup.inquiry}>
                Let&apos;s build together <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="startup-hero-note">
              <span className="startup-small-line" /> Founder-led in Islamabad. Building for
              everywhere.
            </div>
          </div>

          <div className="startup-system-wrap">
            <div className="startup-orbit startup-orbit-one" aria-hidden="true" />
            <div className="startup-orbit startup-orbit-two" aria-hidden="true" />
            <div className="startup-system">
              <div className="startup-system-top">
                <span>
                  <span className="startup-status-dot" /> CONVERSATION → ACTION
                </span>
                <span>01 / 03</span>
              </div>
              <div className="startup-system-title">
                <span className="startup-system-icon">
                  <MessageSquare size={22} aria-hidden="true" />
                </span>
                <div>
                  <strong>
                    A little conversation.
                    <br />A useful next step.
                  </strong>
                  <span>Automotive assistant · Example workflow</span>
                </div>
              </div>
              <div className="startup-chat-user">
                Can you help me book an oil change?<span>Customer</span>
              </div>
              <div className="startup-chat-ai">
                <span className="startup-ai-spark" aria-hidden="true">
                  ✳
                </span>
                <p>
                  Of course. Let&apos;s find the right service for your vehicle and a time that
                  works for you.
                </p>
              </div>
              <div className="startup-tool-flow">
                <div>
                  <span className="startup-tool-icon">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Find the right service<small>Service search</small>
                  </span>
                  <span className="startup-tool-tag">01</span>
                </div>
                <div>
                  <span className="startup-tool-icon">
                    <CalendarDays size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Check appointment slots<small>Availability tool</small>
                  </span>
                  <span className="startup-tool-tag">02</span>
                </div>
                <div>
                  <span className="startup-tool-icon">
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Collect details &amp; reserve<small>Booking workflow</small>
                  </span>
                  <span className="startup-tool-tag">03</span>
                </div>
              </div>
              <div className="startup-system-bottom">
                <span className="startup-status-dot" /> Built to move the task forward
                <span aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="startup-floating-label">
              <Workflow size={15} aria-hidden="true" /> Real tools. Thoughtful interfaces.
            </div>
          </div>
        </section>

        <div className="startup-stack-strip">
          <div className="startup-container">
            <span className="startup-kicker">OUR BUILDING BLOCKS</span>
            <span>Google Gemini</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tool calling</span>
            <span>Streaming UI</span>
          </div>
        </div>

        <section id="products" className="startup-section startup-container">
          <div className="startup-section-heading">
            <div>
              <p className="startup-kicker">01 / TOOLS IN THE MAKING</p>
              <h2>
                Less busywork.
                <br />
                More possibility.
              </h2>
            </div>
            <p>
              Our work starts with a specific problem.
              <br className="startup-desktop-break" /> Then we build the tool to move it forward.
            </p>
          </div>
          <article className="startup-product">
            <div className="startup-product-copy">
              <div className="startup-product-label">
                <span className="startup-status-dot" /> Working prototype · Public source
              </div>
              <h3>
                Budget Auto Fix
                <br />
                <span>AI Assistant</span>
              </h3>
              <p>
                A conversational service advisor and reservation assistant for automotive
                businesses. Help visitors explore repair services, understand estimates, and move
                through a guided booking flow.
              </p>
              <ul className="startup-feature-list">
                <li>
                  <Check size={16} aria-hidden="true" /> Service discovery and repair questions
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Vehicle details and appointment selection
                </li>
                <li>
                  <Check size={16} aria-hidden="true" /> Streaming responses and reservation cards
                </li>
              </ul>
              <div className="startup-actions">
                <a
                  className="startup-button"
                  href={startup.assistant}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the project <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <p className="startup-product-footnote">
                The public prototype uses sample service data and in-memory reservations.
              </p>
            </div>
            <div className="startup-product-visual">
              <div className="startup-blueprint-label">
                <span>ASSISTANT ARCHITECTURE</span>
                <span>BAF / 01</span>
              </div>
              <div className="startup-architecture">
                <div className="startup-architecture-node">
                  <MessageSquare size={22} aria-hidden="true" />
                  <strong>Customer conversation</strong>
                  <span>Questions, vehicle, preferred time</span>
                </div>
                <div className="startup-connector" aria-hidden="true">
                  <span>↓</span>
                </div>
                <div className="startup-architecture-node startup-architecture-core">
                  <span className="startup-ai-spark" aria-hidden="true">
                    ✳
                  </span>
                  <strong>AI + business context</strong>
                  <span>Gemini · Guided tool calling</span>
                </div>
                <div className="startup-connector" aria-hidden="true">
                  <span>↓</span>
                </div>
                <div className="startup-tool-chips">
                  <span>Search services</span>
                  <span>Check slots</span>
                  <span>Book a visit</span>
                </div>
                <div className="startup-architecture-output">
                  <Check size={18} aria-hidden="true" />
                  <div>
                    <strong>A clear next step</strong>
                    <span>Service cards, time slots, reservation details</span>
                  </div>
                </div>
              </div>
              <div className="startup-blueprint-footer">
                A focused workflow, from first question to next action.
              </div>
            </div>
          </article>
          <div className="startup-open-source">
            <div className="startup-open-icon">
              <Github size={24} aria-hidden="true" />
            </div>
            <div>
              <p className="startup-kicker">OPEN-SOURCE EXPLORATION</p>
              <h3>Learning in the open with Agent-Reach.</h3>
              <p>
                Our GitHub includes a fork of{" "}
                <a href={startup.agentReachUpstream} target="_blank" rel="noopener noreferrer">
                  Panniantong&apos;s Agent-Reach
                </a>
                , an open-source toolkit for giving AI agents access to web and social content.
              </p>
            </div>
            <a
              className="startup-text-link"
              href={startup.agentReach}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the fork <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="capabilities" className="startup-capabilities">
          <div className="startup-container startup-section">
            <div className="startup-section-heading">
              <div>
                <p className="startup-kicker">02 / WHAT WE BUILD</p>
                <h2>
                  Useful intelligence.
                  <br />
                  Built into your workflow.
                </h2>
              </div>
              <p>
                From the first conversation to the interface,
                <br className="startup-desktop-break" /> integrations, and actions behind it.
              </p>
            </div>
            <div className="startup-capability-grid">
              {capabilities.map(({ icon: Icon, title, text, detail }, index) => (
                <article className="startup-capability" key={title}>
                  <div className="startup-capability-top">
                    <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <details>
                    <summary>
                      What this includes <Plus size={16} aria-hidden="true" />
                    </summary>
                    <p>{detail}</p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="startup-section startup-container">
          <div className="startup-section-heading">
            <div>
              <p className="startup-kicker">03 / OUR APPROACH</p>
              <h2>
                Start with the problem.
                <br />
                <span className="startup-muted-heading">Make the next step easier.</span>
              </h2>
            </div>
            <a className="startup-text-link" href={startup.inquiry}>
              Talk through your idea <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="startup-process">
            <article>
              <span>01 — UNDERSTAND</span>
              <h3>Find the friction.</h3>
              <p>
                Look at the questions, repeated tasks, and handoffs slowing people down. Choose a
                focused place where AI can help.
              </p>
            </article>
            <article>
              <span>02 — BUILD</span>
              <h3>Make it tangible.</h3>
              <p>
                Turn the idea into a working prototype with a clear interface, relevant context, and
                the tools needed to complete the task.
              </p>
            </article>
            <article>
              <span>03 — REFINE</span>
              <h3>Test the whole journey.</h3>
              <p>
                Review the answers and actions together. Improve edge cases, clarify boundaries, and
                plan the integrations needed for launch.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="startup-about">
          <div className="startup-container startup-about-grid">
            <div className="startup-founder-image">
              <Image
                src="/portraits/ali-hamza-original.jpg"
                alt="Ali Hamza, founder of Ali Hamza AI"
                width={600}
                height={720}
                sizes="(max-width: 760px) 90vw, 360px"
              />
              <div>
                <span className="startup-status-dot" /> ISLAMABAD, PAKISTAN
              </div>
            </div>
            <div className="startup-about-copy">
              <p className="startup-kicker">04 / THE PEOPLE BEHIND THE TOOLS</p>
              <h2>
                Founder-led.
                <br />
                Built with intent.
              </h2>
              <p>
                Ali Hamza AI is an independent AI startup founded by software engineer Ali Hamza. We
                bring full-stack product engineering to the practical side of AI: tools people can
                understand and use.
              </p>
              <p>
                Our foundation is hands-on work across booking experiences, e-commerce, admin
                dashboards, and publishing systems. Today, that experience informs how we design and
                build AI assistants and connected workflows.
              </p>
              <div className="startup-founder-signature">
                <strong>Ali Hamza</strong>
                <span>Founder &amp; Software Engineer</span>
              </div>
              <a
                className="startup-text-link"
                href={startup.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow the work on GitHub <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="startup-section startup-container startup-foundation">
          <div>
            <p className="startup-kicker">THE ENGINEERING FOUNDATION</p>
            <h2>
              Real products.
              <br />A practical starting point.
            </h2>
            <p>
              Explore the founder&apos;s earlier web engineering work
              <br className="startup-desktop-break" /> behind this next chapter.
            </p>
            <Link className="startup-text-link" href="/work">
              View the engineering archive <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="startup-foundation-list">
            <Link href="/work/medimil">
              <span>
                <strong>Medimil</strong>
                <small>Headless commerce &amp; admin tooling</small>
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </Link>
            <Link href="/work/pinion-newswire">
              <span>
                <strong>Pinion Newswire</strong>
                <small>Publishing &amp; syndication systems</small>
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </Link>
            <Link href="/work/perfection-auto-spa">
              <span>
                <strong>Perfection Auto Spa</strong>
                <small>Service discovery &amp; booking experiences</small>
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="contact" className="startup-contact">
          <div className="startup-container">
            <p className="startup-kicker">
              <span className="startup-status-dot" /> LET&apos;S BUILD SOMETHING USEFUL
            </p>
            <h2>
              Your next idea.
              <br />
              <span>Our next conversation.</span>
            </h2>
            <div className="startup-contact-bottom">
              <p>
                Have a workflow that could work better?
                <br />
                Let&apos;s explore what an AI tool could do for it.
              </p>
              <a className="startup-button startup-button-mint" href={startup.inquiry}>
                Build with us <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <a className="startup-contact-email" href={`mailto:${startup.email}`}>
              {startup.email} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="startup-footer startup-container">
        <a href="/" className="startup-brand">
          <span className="startup-mark" aria-hidden="true">
            a<span>h</span>
          </span>
          <span>
            Ali Hamza<span className="startup-brand-ai">AI</span>
          </span>
        </a>
        <p>
          Independent minds. Useful tools.
          <br />
          <span>© {new Date().getFullYear()} Ali Hamza AI</span>
        </p>
        <div>
          <a href={startup.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
