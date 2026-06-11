"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/cn";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export function Pricing() {
  const [mode, setMode] = useState<"presencial" | "online">("presencial");

  return (
    <section id="precios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={pricing.label}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-arena/50 p-1">
            {(["presencial", "online"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                  mode === key ? "text-crema" : "text-bosque/60 hover:text-bosque"
                )}
              >
                {mode === key && (
                  <motion.div
                    layoutId="pricing-toggle"
                    className="absolute inset-0 rounded-full bg-bosque"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{pricing.toggle[key]}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-8 lg:grid-cols-3"
        >
          {pricing.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={cn(
                "relative rounded-3xl p-8 transition-shadow",
                plan.highlighted
                  ? "bg-bosque text-crema shadow-2xl shadow-bosque/20 lg:scale-105"
                  : "glass-card"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-terracota px-4 py-1 text-xs font-semibold uppercase tracking-wider text-crema">
                  Más popular
                </div>
              )}

              <h3
                className={cn(
                  "font-serif text-2xl font-medium",
                  plan.highlighted ? "text-crema" : "text-bosque"
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.highlighted ? "text-crema/70" : "text-bosque/60"
                )}
              >
                {plan.description}
              </p>

              <div className="my-8">
                <span className="font-serif text-4xl font-medium">
                  {formatPrice(mode === "online" ? Math.round(plan.price * 0.85) : plan.price)}
                </span>
                <span
                  className={cn(
                    "ml-1 text-sm",
                    plan.highlighted ? "text-crema/60" : "text-bosque/50"
                  )}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        plan.highlighted ? "text-salvia" : "text-terracota"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlighted ? "text-crema/80" : "text-bosque/70"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="#contacto"
                variant={plan.highlighted ? "secondary" : "outline"}
                className={cn(
                  "w-full justify-center",
                  plan.highlighted && "!border-crema/20 !text-crema hover:!bg-crema/10"
                )}
              >
                Elegir plan
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
