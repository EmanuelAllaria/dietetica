"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { hero } from "@/lib/content";
import { BlobBackground } from "@/components/ui/BlobBackground";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <BlobBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div style={reducedMotion ? {} : { y: textY, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-salvia/10 px-4 py-2 text-sm font-medium text-salvia"
          >
            <Sparkles className="h-4 w-4" />
            {hero.badge}
          </motion.div>

          <h1 className="font-serif text-4xl font-medium leading-[1.1] text-bosque md:text-5xl lg:text-6xl xl:text-7xl">
            <AnimatedText text={hero.title[0]} delay={0.3} as="span" className="block" />
            <span className="gradient-text mt-1 block">
              <AnimatedText text={hero.title[1]} delay={0.6} as="span" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-bosque/70"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#contacto" variant="primary">
              {hero.ctaPrimary}
            </MagneticButton>
            <MagneticButton href="#servicios" variant="outline">
              {hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={reducedMotion ? {} : { y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="organic-mask relative aspect-[4/5] overflow-hidden shadow-2xl shadow-bosque/10">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
              alt="Ingredientes frescos y saludables sobre una mesa de madera"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <motion.div
            animate={reducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 rounded-2xl bg-crema p-5 shadow-xl shadow-bosque/10 md:-left-10"
          >
            <div className="font-serif text-3xl font-medium text-terracota">94%</div>
            <div className="text-sm text-bosque/60">Satisfacción</div>
          </motion.div>

          <motion.div
            animate={reducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 rounded-2xl bg-bosque p-5 text-crema shadow-xl md:-right-8"
          >
            <div className="font-serif text-3xl font-medium">8+</div>
            <div className="text-sm text-crema/70">Años de experiencia</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#nosotros"
        style={reducedMotion ? {} : { opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-bosque/40 transition-colors hover:text-bosque/60"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs uppercase tracking-widest">Descubrí más</span>
        <ArrowDown className="animate-scroll-bounce h-5 w-5" />
      </motion.a>
    </section>
  );
}
