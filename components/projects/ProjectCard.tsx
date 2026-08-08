import Image from "next/image";
import { ExternalLink } from "lucide-react";

export type Project = {
  name: string;
  category: string;
  description: string;
  /** Captura del proyecto. Omitir junto con variant="compact" cuando no se quiera exhibir el visual. */
  image?: string;
  /** Logo a mostrar en el panel compacto (ej. producto propio) en vez de una captura. */
  logo?: string;
  url: string;
  ctaLabel?: string;
  /** Etiqueta de estado, ej. "En desarrollo". */
  badge?: string;
  /** Dato duro a destacar en el panel compacto (ej. "500+ SKUs en catálogo activo"). */
  stat?: string;
  /** "compact" evita la captura grande y muestra logo/stat en su lugar. */
  variant?: "default" | "compact";
  /** Ocupa más espacio en el grid (2 columnas en vez de 1). */
  featured?: boolean;
};

export default function ProjectCard({
  name,
  category,
  description,
  image,
  logo,
  url,
  ctaLabel = "Ver tienda",
  badge,
  stat,
  variant = "default",
}: Project) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(22,21,26,0.35)]">
      {/* Visual */}
      {variant === "compact" ? (
        // Fondo fijo (no sigue el modo oscuro): los logos usan colores propios
        // pensados para fondo claro y pierden contraste sobre indigo-tint en dark mode.
        <div className="flex h-40 w-full flex-col items-center justify-center gap-3 bg-[#ece9fc] px-3 text-center sm:h-52 sm:px-6">
          {logo && (
            <Image
              src={logo}
              alt={name}
              width={140}
              height={40}
              className="h-7 w-auto sm:h-9"
            />
          )}
          {stat && (
            <span className="font-heading text-xl font-extrabold leading-snug text-indigo">
              {stat}
            </span>
          )}
        </div>
      ) : (
        image && (
          <div className="overflow-hidden bg-paper-dim">
            {/* Barra tipo navegador: deja claro que es una tienda real, no un mockup genérico */}
            <div className="flex items-center gap-1.5 border-b border-line bg-paper-2 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-line-ink/25" />
              <span className="h-2 w-2 rounded-full bg-line-ink/25" />
              <span className="h-2 w-2 rounded-full bg-line-ink/25" />
              <span className="ml-2.5 truncate rounded-full bg-paper px-3 py-1 font-mono text-[11px] text-ink-faint">
                {displayUrl}
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={image}
                alt={`Preview de ${name}`}
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        )
      )}

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        {/* Categoría + estado */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="inline-block w-fit rounded-full bg-indigo-tint px-2.5 py-1 font-mono text-[10px] font-semibold text-indigo sm:px-3 sm:text-xs">
            {category}
          </span>
          {badge && (
            <span className="inline-block w-fit rounded-full bg-lime/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-green sm:px-3 sm:text-xs">
              {badge}
            </span>
          )}
        </div>

        {/* Nombre */}
        <h3 className="mt-3 text-base font-bold text-ink sm:text-lg">{name}</h3>

        {/* Descripción */}
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft sm:text-sm">
          {description}
        </p>

        {/* Botón */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-soft transition hover:border-indigo hover:text-indigo sm:text-sm"
        >
          {ctaLabel}
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
