import ContactForm from "@/components/contact/ContactForm";
import Annotation from "@/components/ui/Annotation";
import { MessageCircle, Clock, Award, Zap, MapPin } from "lucide-react";
import type { Metadata } from "next";

const title = "Contacto";
const description =
  "Hablemos de tu tienda Shopify. Cotiza el desarrollo de tu ecommerce para distribuidora, mayorista, minimarket o supermercado. Te respondemos en menos de 24 horas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cotizar tienda Shopify",
    "agencia Shopify Chile",
    "ecommerce para mayoristas",
    "ecommerce para distribuidoras",
  ],
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

const trustItems = [
  { icon: Clock, text: "Respondemos en menos de 24 horas" },
  { icon: Award, text: "Shopify Partners"},
  { icon: Zap, text: "Sin contratos largos — arrancamos cuando quieras" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Fondo decorativo */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo opacity-20 blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-[400px] w-[400px] rounded-full bg-lime opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper-2/70 px-3 py-1.5 font-mono text-xs tracking-[0.06em] text-ink-soft uppercase backdrop-blur sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-indigo" />
            Sin compromiso · Respuesta garantizada
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Hablemos de tu <Annotation type="underline">tienda Shopify</Annotation>
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
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
            <div className="rounded-2xl border border-line bg-paper-2 p-6">
              <h2 className="font-mono text-xs tracking-[0.08em] text-ink-faint uppercase">
                Por qué elegirnos
              </h2>
              <ul className="mt-5 space-y-4">
                {trustItems.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-tint">
                      <Icon className="h-4 w-4 text-indigo" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto directo */}
            <div className="mt-5 rounded-2xl border border-line bg-paper-2 p-6">
              <h2 className="font-mono text-xs tracking-[0.08em] text-ink-faint uppercase">
                Contacto directo
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href="https://wa.me/56949378795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-soft transition hover:text-indigo"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 space-y-4 border-t border-line pt-5">
                <h3 className="font-mono text-xs tracking-[0.08em] text-ink-faint uppercase">Nuestras Oficinas</h3>
                <div className="flex items-start gap-3 text-sm text-ink-soft">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-ink">HQ Chile</p>
                    <p>Av. Apoquindo 5950</p>
                    <p>Las Condes, Santiago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-ink-soft">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo" strokeWidth={1.8} />
                  <div>
                    <p className="font-semibold text-ink">HQ Argentina</p>
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
