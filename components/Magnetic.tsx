"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement<any>;
  range?: number;
}

export default function Magnetic({ children, range = 30 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of element to mouse
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Calculate dynamic coordinates within allowed range
    const distance = Math.sqrt(x * x + y * y);
    if (distance < range * 3) {
      setPosition({ x: x * 0.35, y: y * 0.35 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {React.cloneElement(children, {
        className: `${children.props.className || ""} focus-ring`
      })}
    </motion.div>
  );
}
