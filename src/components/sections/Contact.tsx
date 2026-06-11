"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Share2 } from "lucide-react";
import { contact, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { slideInLeft, slideInRight, defaultViewport } from "@/lib/animations";
import { cn } from "@/lib/cn";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (name: string) =>
    cn(
      "w-full rounded-xl border-2 bg-crema/50 px-4 py-3 text-bosque transition-all duration-300 outline-none",
      focused === name
        ? "border-salvia bg-white shadow-lg shadow-salvia/10"
        : "border-bosque/10 hover:border-bosque/20"
    );

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={contact.label}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl bg-salvia/10 p-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-salvia/20">
                  <Send className="h-7 w-7 text-salvia" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-bosque">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-bosque/70">
                  Te responderemos en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-bosque">
                    {contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className={inputClass("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-bosque">
                    {contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={inputClass("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div>
                  <label htmlFor="type" className="mb-2 block text-sm font-medium text-bosque">
                    {contact.form.type}
                  </label>
                  <select
                    id="type"
                    className={inputClass("type")}
                    onFocus={() => setFocused("type")}
                    onBlur={() => setFocused(null)}
                  >
                    {contact.form.types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-bosque">
                    {contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className={inputClass("message")}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <MagneticButton type="submit" variant="primary" className="w-full justify-center">
                  <Send className="h-4 w-4" />
                  {contact.form.submit}
                </MagneticButton>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, text: site.address },
                { icon: Phone, text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                { icon: Mail, text: site.email, href: `mailto:${site.email}` },
                {
                  icon: Share2,
                  text: site.instagram,
                  href: `https://instagram.com/${site.instagram.replace("@", "")}`,
                },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-salvia/15">
                    <Icon className="h-5 w-5 text-salvia" />
                  </div>
                  {href ? (
                    <a href={href} className="text-bosque/80 transition-colors hover:text-bosque">
                      {text}
                    </a>
                  ) : (
                    <span className="text-bosque/80">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg shadow-bosque/10">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Vitalia Nutrición en Palermo, CABA"
              />
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
