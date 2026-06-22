/**
 * URL base del sitio para SEO (metadataBase, sitemap, robots, canonical).
 * Por defecto usa el dominio de producción; se puede sobreescribir con
 * la variable de entorno NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rockagency.cl"
).replace(/\/$/, "");

export const siteName = "Rock Agency";
