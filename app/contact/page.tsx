import ContactForm from "@/components/contact/ContactForm";
import { MessageCircle, Clock, Award, Zap, MapPin } from "lucide-react";

export const metadata = {
  title: "Contacto — Rock Agency",
  description: "Hablemos de tu tienda Shopify. Te respondemos en menos de 24 horas.",
};

const trustItems = [
  { icon: Clock, text: "Respondemos en menos de 24 horas" },
  { icon: Award, text: "Shopify Partners"},
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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mx-auto mb-10 md:mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs sm:text-sm text-zinc-700 shadow-sm backdrop-blur">
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
                  href="https://wa.me/56949378795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#402178] transition"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 border-t border-zinc-100 pt-5 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Nuestras Oficinas</h3>
                <div className="flex items-start gap-3 text-sm text-zinc-600">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#402178]" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-zinc-800">HQ Chile</p>
                    <p>Av. Apoquindo 5950</p>
                    <p>Las Condes, Santiago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-600">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#402178]" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-zinc-800">HQ Argentina</p>
                    <p>El Salvador 5707</p>
                    <p>Palermo, Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
