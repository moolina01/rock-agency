import FaqAccordion from "@/components/faq/FaqAccordion";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Rock Agency",
  description: "Preguntas frecuentes sobre nuestros servicios de desarrollo de tiendas Shopify.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      {/* Fondo decorativo */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="absolute bottom-0 right-[-80px] h-[400px] w-[400px] rounded-full bg-indigo-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Preguntas frecuentes
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Todo lo que necesitas{" "}
            <span className="relative text-[#402178]">
              saber
              <span className="absolute inset-x-0 -bottom-1 h-[8px] rounded-full bg-[#402178]/10" />
            </span>
          </h1>
          <p className="mt-4 text-lg text-zinc-500">
            Resolvemos las dudas más comunes antes de que empiece tu proyecto.
          </p>
        </div>

        {/* Acordeón */}
        <FaqAccordion />

        {/* CTA final */}
        <div className="mt-16 rounded-3xl border border-zinc-200 bg-white px-8 py-14 text-center shadow-sm">
          <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">
            ¿Tienes una pregunta que no está aquí?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-500">
            Escríbenos directamente y te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center justify-center rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            Contáctanos
            <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
