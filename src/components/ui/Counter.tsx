"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function Counter({ value, suffix = "", label, duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reducedMotion) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, reducedMotion]);

  const displayValue = isInView ? (reducedMotion ? value : count) : 0;

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl font-medium text-crema md:text-5xl lg:text-6xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-crema/70">
        {label}
      </p>
    </div>
  );
}
