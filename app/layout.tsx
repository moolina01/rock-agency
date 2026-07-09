import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteUrl, siteName } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rock Agency — Expertos en Shopify",
    template: "%s — Rock Agency",
  },
  description:
    "Agencia especializada en Shopify. Creamos, migramos y optimizamos tiendas e-commerce que venden. Diseño, conversión y entregas rápidas con Fium.",
  keywords: [
    "agencia Shopify",
    "expertos Shopify",
    "crear tienda Shopify",
    "migración a Shopify",
    "ecommerce Chile",
    "diseño ecommerce",
    "Shopify Plus",
  ],
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName,
    title: "Rock Agency — Expertos en Shopify",
    description:
      "Creamos, migramos y optimizamos tiendas Shopify que venden. Diseño, conversión y entregas rápidas con Fium.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Rock Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Agency — Expertos en Shopify",
    description:
      "Creamos, migramos y optimizamos tiendas Shopify que venden.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
          <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
