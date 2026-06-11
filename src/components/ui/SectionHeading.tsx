"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="mb-4 inline-block rounded-full bg-salvia/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-salvia">
        {label}
      </span>
      <h2 className="font-serif text-3xl font-medium leading-tight text-bosque md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-bosque/70">{subtitle}</p>
      )}
    </motion.div>
  );
}
