"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/animations";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-bosque py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #8BA888 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C4714A 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
