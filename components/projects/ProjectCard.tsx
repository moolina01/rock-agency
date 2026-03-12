import Image from "next/image";
import { ExternalLink } from "lucide-react";

export type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

export default function ProjectCard({ name, category, description, image, url }: Project) {
  return (
    <div className="group flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="relative h-52 w-full overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={`Preview de ${name}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        {/* Categoría */}
        <span className="inline-block w-fit rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-[#402178]">
          {category}
        </span>

        {/* Nombre */}
        <h3 className="mt-3 text-lg font-bold text-zinc-900">{name}</h3>

        {/* Descripción */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{description}</p>

        {/* Botón */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-[#402178] hover:text-[#402178]"
        >
          Ver tienda
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
