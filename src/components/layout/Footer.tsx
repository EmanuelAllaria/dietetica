"use client";

import { motion } from "framer-motion";
import { Leaf, Mail, Phone, Share2 } from "lucide-react";
import { footer, site } from "@/lib/content";
import { fadeUp, defaultViewport } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="bg-bosque text-crema">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-salvia/20">
                <Leaf className="h-5 w-5 text-salvia" />
              </div>
              <span className="font-serif text-2xl font-medium">Vitalia</span>
            </div>
            <p className="max-w-md text-crema/70 leading-relaxed">
              {footer.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={`https://instagram.com/${site.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-crema/20"
                aria-label="Instagram"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-crema/20"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-crema/20"
                aria-label="Teléfono"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-crema/50">
              Enlaces
            </h3>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-crema/70 transition-colors hover:text-crema"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-crema/50">
              Contacto
            </h3>
            <ul className="space-y-3 text-crema/70">
              <li>{site.address}</li>
              <li>{site.phone}</li>
              <li>{site.email}</li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-crema/10 pt-8 text-center text-sm text-crema/40">
          {footer.legal}
        </div>
      </div>
    </footer>
  );
}
