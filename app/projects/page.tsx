import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Annotation from "@/components/ui/Annotation";
import Link from "next/link";
import type { Metadata } from "next";

const title = "Proyectos";
const description =
  "Portafolio de tiendas Shopify diseñadas y desarrolladas por Rock Agency para distribuidoras, mayoristas, minimarkets y supermercados en Chile.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
  twitter: { title, description },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Fondo decorativo */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo opacity-20 blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-[400px] w-[400px] rounded-full bg-lime opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper-2/70 px-4 py-2 font-mono text-xs tracking-[0.06em] text-ink-soft uppercase backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo" />
            Nuestro trabajo
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Proyectos que <Annotation type="underline">generan resultados</Annotation>
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Cada tienda que construimos está diseñada para convertir visitantes en clientes.
          </p>
        </div>

        {/* Grid de proyectos */}
        <ProjectsGrid />

        {/* CTA final */}
        <div className="mt-20 rounded-3xl border border-line bg-paper-2 px-8 py-14 text-center">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">
            ¿Listo para ser el <span className="text-indigo">próximo proyecto?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Cuéntanos tu idea y construimos juntos tu tienda Shopify.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center justify-center rounded-full bg-indigo px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_0_var(--color-indigo-dark)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--color-indigo-dark)]"
          >
            Comienza ahora
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
