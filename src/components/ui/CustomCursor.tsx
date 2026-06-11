"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (reducedMotion) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [reducedMotion, cursorX, cursorY]);

  if (reducedMotion || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: isPointer ? 48 : 24,
          height: isPointer ? 48 : 24,
          marginLeft: isPointer ? -24 : -12,
          marginTop: isPointer ? -24 : -12,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="rounded-full border-2 border-terracota/40 bg-terracota/5"
      />
    </motion.div>
  );
}
