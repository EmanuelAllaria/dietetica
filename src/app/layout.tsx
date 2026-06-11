import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "nutrición",
    "dietética",
    "nutricionista",
    "Buenos Aires",
    "plan alimentario",
    "consulta nutricional",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vitalia Nutrición - Alimentación saludable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <div className="grain-overlay" aria-hidden="true" />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
