"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-arena/30 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading label={faq.label} title={faq.title} />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-4"
        >
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl bg-crema/80 shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-bosque">{item.question}</span>
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen ? "bg-terracota text-crema" : "bg-bosque/5 text-bosque"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-bosque/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
