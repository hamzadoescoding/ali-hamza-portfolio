"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if pointer is touch-only or user prefers reduced motion
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='view']");
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']");

      if (projectCard) {
        setCursorType("view");
      } else if (isInteractive) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        pointerEvents: "none",
        zIndex: 9999,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        width: cursorType === "view" ? 64 : cursorType === "hover" ? 48 : 8,
        height: cursorType === "view" ? 64 : cursorType === "hover" ? 48 : 8,
        backgroundColor: cursorType === "view" ? "#171717" : cursorType === "hover" ? "rgba(23, 23, 23, 0.05)" : "#171717",
        border: cursorType === "hover" ? "1px solid #171717" : "none",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 35 }}
      className="hidden md:flex transform -translate-x-1/2 -translate-y-1/2"
    >
      {cursorType === "view" && (
        <span className="text-[10px] tracking-wider text-brand-bg font-semibold uppercase">View</span>
      )}
    </motion.div>
  );
}
