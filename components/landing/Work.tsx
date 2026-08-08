"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function Work() {
  return (
    <section id="proyectos" className="bg-paper py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="08" label="Con quién trabajamos" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Enfocados en distribuidoras y minimarkets
          </h2>
          <p className="text-[17px] text-ink-soft">
            Estos son los proyectos más relevantes: negocios reales, hoy en
            producción, del mismo tipo que el tuyo.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <ProjectsGrid />
        </Reveal>

        <Reveal delay={3} className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-line bg-paper-2 px-7 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-indigo"
          >
            Ver todos los proyectos
            <span className="ml-2">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
