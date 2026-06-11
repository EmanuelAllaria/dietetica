"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { staggerItem } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className, highlighted }: CardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-card group relative rounded-3xl p-8 transition-shadow duration-300",
        highlighted
          ? "ring-2 ring-terracota/30 shadow-xl shadow-terracota/10"
          : "hover:shadow-xl hover:shadow-salvia/10",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,168,136,0.1) 0%, rgba(196,113,74,0.05) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
