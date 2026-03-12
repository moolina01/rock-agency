import ContactForm from "@/components/contact/ContactForm";
import { Mail, MessageCircle, Clock, Store, Award, Zap } from "lucide-react";

export const metadata = {
  title: "Contacto — Rock Agency",
  description: "Hablemos de tu tienda Shopify. Te respondemos en menos de 24 horas.",
};

const trustItems = [
  { icon: Clock, text: "Respondemos en menos de 24 horas" },
  { icon: Store, text: "Más de 50 tiendas Shopify lanzadas" },
  { icon: Award, text: "Shopify Partners certificados" },
  { icon: Zap, text: "Sin contratos largos — arrancamos cuando quieras" },
];

export default function ContactPage() {
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
            Sin compromiso · Respuesta garantizada
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Hablemos de tu{" "}
            <span className="relative text-[#402178]">
              tienda Shopify
              <span className="absolute inset-x-0 -bottom-1 h-[8px] rounded-full bg-[#402178]/10" />
            </span>
          </h1>
          <p className="mt-4 text-lg text-zinc-500">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Grid: Formulario + Sidebar */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Formulario — columna ancha */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2">
            {/* Trust signals */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Por qué elegirnos
              </h2>
              <ul className="mt-5 space-y-4">
                {trustItems.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                      <Icon className="h-4 w-4 text-[#402178]" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto directo */}
            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Contacto directo
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:mhuryy22@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#402178] transition"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                  mhuryy22@gmail.com
                </a>
                <a
                  href="https://wa.me/521234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#402178] transition"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                  WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
