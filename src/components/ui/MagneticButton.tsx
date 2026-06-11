"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const variants = {
    primary:
      "bg-bosque text-crema hover:bg-bosque/90 shadow-lg shadow-bosque/20",
    secondary:
      "bg-terracota text-crema hover:bg-terracota/90 shadow-lg shadow-terracota/20",
    outline:
      "bg-transparent text-bosque border-2 border-bosque/20 hover:border-bosque/40 hover:bg-bosque/5",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const inner = (
    <motion.div
      ref={ref}
      style={reducedMotion ? {} : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={reducedMotion ? {} : { scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-colors duration-300 cursor-pointer",
        variants[variant],
        className
      )}
    >
      {children}
      {isHovered && !reducedMotion && (
        <motion.span
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block border-none bg-transparent p-0">
      {inner}
    </button>
  );
}
