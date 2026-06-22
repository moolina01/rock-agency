/**
 * URL base del sitio para SEO (metadataBase, sitemap, robots, canonical).
 *
 * Orden de resolución:
 * 1. NEXT_PUBLIC_SITE_URL  → defínela en Vercel con tu dominio real
 *    (ej. https://rockagency.cl)
 * 2. Dominio de producción de Vercel (automático)
 * 3. localhost para desarrollo
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "Rock Agency";
