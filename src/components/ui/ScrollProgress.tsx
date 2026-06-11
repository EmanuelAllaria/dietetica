"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-salvia via-terracota to-bosque"
      style={{ scaleX: progress, width: "100%" }}
      aria-hidden="true"
    />
  );
}
