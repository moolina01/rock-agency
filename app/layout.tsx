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
    default:
      "Rock Agency — Expertos en eCommerce para supermercados, distribuidoras y minimarkets",
    template: "%s — Rock Agency",
  },
  description:
    "Agencia Shopify Partners para supermercados, distribuidoras y minimarkets en Chile. Diseñamos, desarrollamos y optimizamos tiendas Shopify de alto rendimiento que venden más y operan de forma más eficiente, con entregas same-day a través de Fium.",
  keywords: [
    "agencia Shopify",
    "Shopify Partners",
    "ecommerce supermercados",
    "tienda online minimarket",
    "ecommerce distribuidoras",
    "crear tienda Shopify",
    "migración a Shopify",
    "ecommerce Chile",
    "Fium delivery",
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
    title:
      "Rock Agency — Expertos en eCommerce para supermercados, distribuidoras y minimarkets",
    description:
      "Agencia Shopify Partners para supermercados, distribuidoras y minimarkets en Chile. Tiendas Shopify de alto rendimiento que venden más y operan de forma más eficiente, con entregas same-day con Fium.",
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
    title:
      "Rock Agency — Expertos en eCommerce para supermercados, distribuidoras y minimarkets",
    description:
      "Agencia Shopify Partners para supermercados, distribuidoras y minimarkets en Chile.",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
      </head>
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
