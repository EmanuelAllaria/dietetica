"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, defaultViewport } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section id="proceso" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={process.label}
          title={process.title}
          subtitle={process.subtitle}
        />

        <div ref={containerRef} className="relative">
          {/* Desktop timeline line */}
          <div className="absolute top-12 right-0 left-0 hidden h-0.5 bg-arena md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-salvia to-terracota"
              style={reducedMotion ? { width: "100%" } : { width: lineWidth }}
            />
          </div>

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                transition={{ delay: i * 0.15 }}
                className="relative text-center md:text-left"
              >
                {/* Mobile vertical line */}
                {i < process.steps.length - 1 && (
                  <div className="absolute top-16 left-6 h-full w-0.5 bg-arena md:hidden" />
                )}

                <div className="relative z-10 mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-crema shadow-lg shadow-bosque/5 md:mx-0">
                  <span className="font-serif text-2xl font-medium text-terracota">
                    {step.number}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-salvia/30"
                    initial={{ scale: 1, opacity: 0.5 }}
                    whileInView={{ scale: 1.3, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                </div>

                <h3 className="font-serif text-xl font-medium text-bosque">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bosque/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
