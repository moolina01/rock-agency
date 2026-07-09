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
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2 transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(22,21,26,0.35)]">
      {/* Visual */}
      {variant === "compact" ? (
        <div className="flex h-52 w-full flex-col items-center justify-center gap-3 bg-indigo-tint px-6 text-center">
          {logo && (
            <Image src={logo} alt={name} width={140} height={40} className="h-9 w-auto" />
          )}
          {stat && (
            <span className="font-heading text-xl font-extrabold leading-snug text-indigo">
              {stat}
            </span>
          )}
        </div>
      ) : (
        image && (
          <div className="relative h-52 w-full overflow-hidden bg-paper-dim">
            <Image
              src={image}
              alt={`Preview de ${name}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )
      )}

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        {/* Categoría + estado */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block w-fit rounded-full bg-indigo-tint px-3 py-1 font-mono text-xs font-semibold text-indigo">
            {category}
          </span>
          {badge && (
            <span className="inline-block w-fit rounded-full bg-lime/40 px-3 py-1 font-mono text-xs font-semibold text-green">
              {badge}
            </span>
          )}
        </div>

        {/* Nombre */}
        <h3 className="mt-3 text-lg font-bold text-ink">{name}</h3>

        {/* Descripción */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>

        {/* Botón */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-indigo hover:text-indigo"
        >
          {ctaLabel}
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
