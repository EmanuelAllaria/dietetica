"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-crema/80 shadow-sm shadow-bosque/5 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="group flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-salvia/15"
            >
              <Leaf className="h-5 w-5 text-salvia" />
            </motion.div>
            <span className="font-serif text-xl font-medium text-bosque">
              Vitalia
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-bosque/80 transition-colors hover:text-bosque"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-terracota transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton href="#contacto" variant="primary">
              Reservar consulta
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-bosque/5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-bosque" />
            ) : (
              <Menu className="h-5 w-5 text-bosque" />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bosque/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 flex h-full w-[80%] max-w-sm flex-col bg-crema p-8 pt-24 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="font-serif text-2xl text-bosque"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto">
                <MagneticButton
                  href="#contacto"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Reservar consulta
                </MagneticButton>
                <p className="mt-6 text-center text-sm text-bosque/50">
                  {site.tagline}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
