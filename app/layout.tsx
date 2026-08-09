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

const defaultTitle =
  "Rock Agency — Shopify para Distribuidoras, Mayoristas y Minimarkets";
const defaultDescription =
  "Agencia Shopify Partners especializada en distribuidoras, mayoristas, minimarkets y supermercados en Chile. Diseñamos, desarrollamos y optimizamos tiendas Shopify B2B y B2C de alto rendimiento que venden más y operan de forma más eficiente, con entregas same-day a través de Fium.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Rock Agency",
  },
  description: defaultDescription,
  keywords: [
    "agencia Shopify",
    "Shopify Partners",
    "ecommerce mayoristas",
    "tienda online mayorista",
    "Shopify para distribuidoras",
    "ecommerce distribuidoras",
    "portal B2B Shopify",
    "venta al por mayor online",
    "ecommerce supermercados",
    "tienda online minimarket",
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
    title: defaultTitle,
    description: defaultDescription,
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
    title: defaultTitle,
    description: defaultDescription,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
  },
  knowsAbout: [
    "Shopify",
    "eCommerce B2B",
    "Distribuidoras",
    "Mayoristas",
    "Minimarkets",
    "Supermercados",
    "Same-day delivery",
  ],
  serviceType: [
    "Desarrollo de tiendas Shopify",
    "eCommerce para distribuidoras",
    "eCommerce para mayoristas",
    "eCommerce para minimarkets y supermercados",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
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
