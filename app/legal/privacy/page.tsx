import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Rock Agency recopila, usa y protege tus datos personales.",
};

const LAST_UPDATED = "20 de junio de 2026";

type Section = {
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    title: "1. Introducción",
    body: (
      <p>
        En Rock Agency (“Rock Agency”, “nosotros”) respetamos tu privacidad y nos
        comprometemos a proteger los datos personales que nos entregas. Esta
        Política de Privacidad explica qué información recopilamos, con qué fines
        la usamos y cuáles son tus derechos. Al utilizar nuestro sitio o
        contactarnos, aceptas las prácticas descritas en esta política.
      </p>
    ),
  },
  {
    title: "2. Responsable de los datos",
    body: (
      <p>
        El responsable del tratamiento de los datos es Rock Agency. Para cualquier
        consulta relacionada con tus datos personales puedes escribirnos a{" "}
        <a
          href="mailto:mhuryy22@gmail.com"
          className="font-medium text-indigo underline"
        >
          mhuryy22@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "3. Datos que recopilamos",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-medium text-ink">Datos que nos entregas:</span>{" "}
          nombre, correo electrónico, teléfono/WhatsApp, nombre de tu negocio y la
          información incluida en el formulario de contacto.
        </li>
        <li>
          <span className="font-medium text-ink">Datos de navegación:</span>{" "}
          información técnica como dirección IP, tipo de dispositivo, navegador y
          páginas visitadas, recopilada mediante herramientas de analítica.
        </li>
        <li>
          <span className="font-medium text-ink">Cookies:</span> pequeños
          archivos que permiten el funcionamiento del sitio y la medición de su
          uso.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Cómo usamos tus datos",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Responder tus consultas y solicitudes de cotización.</li>
        <li>Prestar y gestionar los servicios contratados.</li>
        <li>Enviarte comunicaciones relacionadas con tu proyecto.</li>
        <li>Mejorar nuestro sitio web y la experiencia de usuario.</li>
        <li>Cumplir con obligaciones legales y contables.</li>
      </ul>
    ),
  },
  {
    title: "5. Base para el tratamiento",
    body: (
      <p>
        Tratamos tus datos sobre la base de tu consentimiento (al contactarnos),
        la ejecución de un contrato o relación de servicios, y el cumplimiento de
        obligaciones legales aplicables.
      </p>
    ),
  },
  {
    title: "6. Cookies y analítica",
    body: (
      <p>
        Utilizamos cookies propias y de terceros, incluyendo herramientas de
        analítica (por ejemplo, para medir el tráfico del sitio). Puedes
        configurar tu navegador para bloquear o eliminar cookies; ten en cuenta
        que algunas funciones del sitio podrían verse afectadas.
      </p>
    ),
  },
  {
    title: "7. Servicios de terceros",
    body: (
      <p>
        Para operar el sitio y prestar nuestros servicios trabajamos con
        proveedores externos (por ejemplo, plataformas de alojamiento, servicios
        de correo electrónico, herramientas de analítica y, en el contexto de los
        proyectos, Shopify y servicios asociados). Estos terceros tratan los datos
        conforme a sus propias políticas de privacidad.
      </p>
    ),
  },
  {
    title: "8. Conservación de los datos",
    body: (
      <p>
        Conservamos tus datos personales solo durante el tiempo necesario para
        cumplir con las finalidades descritas en esta política y con las
        obligaciones legales aplicables. Cuando ya no sean necesarios, los
        eliminamos o anonimizamos de forma segura.
      </p>
    ),
  },
  {
    title: "9. Seguridad",
    body: (
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus
        datos frente a accesos no autorizados, pérdida o alteración. Sin embargo,
        ningún sistema es completamente infalible y no podemos garantizar
        seguridad absoluta.
      </p>
    ),
  },
  {
    title: "10. Tus derechos",
    body: (
      <p>
        Puedes solicitar acceder, rectificar, actualizar o eliminar tus datos
        personales, así como oponerte o limitar su tratamiento, escribiéndonos a{" "}
        <a
          href="mailto:mhuryy22@gmail.com"
          className="font-medium text-indigo underline"
        >
          mhuryy22@gmail.com
        </a>
        . Atenderemos tu solicitud conforme a la legislación vigente.
      </p>
    ),
  },
  {
    title: "11. Cambios en esta política",
    body: (
      <p>
        Podemos actualizar esta Política de Privacidad en cualquier momento. La
        versión vigente será siempre la publicada en esta página, indicando la
        fecha de última actualización.
      </p>
    ),
  },
  {
    title: "12. Contacto",
    body: (
      <p>
        Si tienes preguntas sobre esta política o sobre el tratamiento de tus
        datos, escríbenos a{" "}
        <a
          href="mailto:mhuryy22@gmail.com"
          className="font-medium text-indigo underline"
        >
          mhuryy22@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft transition hover:text-indigo"
        >
          ← Volver al inicio
        </Link>

        {/* Header */}
        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-4 py-2 font-mono text-xs tracking-[0.06em] text-ink-soft uppercase">
            <span className="h-2 w-2 rounded-full bg-indigo" />
            Legal
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Última actualización: {LAST_UPDATED}
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-ink">
                {section.title}
              </h2>
              <div className="mt-3 text-sm leading-relaxed text-ink-soft">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
