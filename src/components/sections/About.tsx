"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { about } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, slideInLeft, slideInRight, defaultViewport } from "@/lib/animations";

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={about.label}
          title={about.title}
          align="left"
          className="max-w-3xl"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative"
          >
            <div className="organic-mask relative aspect-[3/4] overflow-hidden">
              <Image
                src={about.image}
                alt="Dra. Camila Ríos, nutricionista de Vitalia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-salvia/20" />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-lg leading-relaxed text-bosque/80"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {about.credentials.map((cred, i) => (
                <motion.div
                  key={cred}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={defaultViewport}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-salvia" />
                  <span className="font-medium text-bosque">{cred}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
