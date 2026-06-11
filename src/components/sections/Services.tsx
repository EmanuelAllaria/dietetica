"use client";

import { motion } from "framer-motion";
import {
  Baby,
  ClipboardList,
  Dumbbell,
  Users,
  Utensils,
  Video,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, defaultViewport } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Utensils,
  Video,
  Dumbbell,
  Baby,
  Users,
};

export function Services() {
  return (
    <section id="servicios" className="relative bg-arena/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={services.label}
          title={services.title}
          subtitle={services.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.items.map((service) => {
            const Icon = iconMap[service.icon] ?? ClipboardList;
            return (
              <Card key={service.title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-salvia/15 transition-colors group-hover:bg-salvia/25">
                  <Icon className="h-6 w-6 text-salvia" />
                </div>
                <h3 className="font-serif text-xl font-medium text-bosque">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bosque/70">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
