"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts children into view once. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Splits lines of a heading into words that rise into place. */
export function SplitTitle({
  lines,
  className,
  as = "h2",
  id,
}: {
  lines: { text: string; accent?: boolean }[];
  className?: string;
  as?: "h1" | "h2";
  id?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Tag
      className={className}
      id={id}
      aria-label={lines.map((l) => l.text).join(" ")}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {lines.map((line, li) => (
        <span className={`sx-line${line.accent ? " sx-accent" : ""}`} key={li} aria-hidden="true">
          {line.text.split(" ").map((word, wi) => (
            <span className="sx-word-mask" key={wi}>
              <motion.span
                className="sx-word"
                variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
                transition={{ duration: 0.9, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

/** Counts up to a number when scrolled into view. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US")}
      <em>{suffix}</em>
    </span>
  );
}
