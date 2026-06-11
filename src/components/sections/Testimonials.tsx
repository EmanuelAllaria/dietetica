"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, defaultViewport } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();
  const items = testimonials.items;

  const next = () => setCurrent((c) => (c + 1) % items.length);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) next();
    else if (info.offset.x > 80) prev();
  };

  return (
    <section className="relative bg-arena/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={testimonials.label}
          title={testimonials.title}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative mx-auto max-w-3xl"
        >
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-salvia/15" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reducedMotion ? {} : { opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? {} : { opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag={reducedMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing"
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: items[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-terracota text-terracota" />
                    </motion.div>
                  ))}
                </div>

                <p className="font-serif text-xl leading-relaxed text-bosque md:text-2xl">
                  &ldquo;{items[current].text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salvia/20 font-serif text-lg font-medium text-salvia">
                    {items[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-bosque">{items[current].name}</div>
                    <div className="text-sm text-bosque/50">{items[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-bosque/5 transition-colors hover:bg-bosque/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5 text-bosque" />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-terracota" : "w-2 bg-bosque/20"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-bosque/5 transition-colors hover:bg-bosque/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5 text-bosque" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
