import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso y contratación de los servicios de Rock Agency.",
};

const LAST_UPDATED = "20 de junio de 2026";

type Section = {
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    title: "1. Aceptación de los términos",
    body: (
      <p>
        Estos Términos y Condiciones (los “Términos”) regulan el acceso y uso del
        sitio web de Rock Agency, así como la contratación de sus servicios. Al
        navegar el sitio, solicitar una cotización o contratar un servicio,
        declaras haber leído, entendido y aceptado estos Términos en su totalidad.
        Si no estás de acuerdo, te pedimos no utilizar el sitio ni contratar
        nuestros servicios.
      </p>
    ),
  },
  {
    title: "2. Quiénes somos",
    body: (
      <p>
        El sitio y los servicios son operados por Rock Agency (“Rock Agency”,
        “nosotros”), agencia especializada en el diseño, desarrollo e
        implementación de tiendas en la plataforma Shopify. Para cualquier
        consulta puedes escribirnos a{" "}
        <a
          href="mailto:mhuryy22@gmail.com"
          className="font-medium text-[#402178] underline"
        >
          mhuryy22@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "3. Servicios",
    body: (
      <p>
        Rock Agency ofrece servicios de creación de e-commerce, migración a
        Shopify, personalización de temas, integración de aplicaciones,
        configuración operativa, capacitación y desarrollos a medida, entre
        otros, según el plan o propuesta contratada. El alcance específico de cada
        proyecto se define en el plan elegido o en la propuesta/cotización
        aceptada por el cliente, la cual prevalece sobre las descripciones
        generales publicadas en el sitio.
      </p>
    ),
  },
  {
    title: "4. Planes, precios y pagos",
    body: (
      <>
        <p>
          Los valores publicados en el sitio están expresados en pesos chilenos
          (CLP), corresponden a proyectos de pago único y no incluyen IVA, salvo
          que se indique lo contrario. Los precios pueden actualizarse en
          cualquier momento; el valor aplicable será el vigente al momento de
          aceptar la propuesta.
        </p>
        <p className="mt-3">
          Las condiciones de pago (por ejemplo, anticipo y saldo) se acuerdan en
          la propuesta correspondiente. El inicio de los trabajos puede estar
          sujeto a la recepción del anticipo acordado.
        </p>
      </>
    ),
  },
  {
    title: "5. Plazos de entrega",
    body: (
      <p>
        Los plazos de entrega indicados en el sitio o en las propuestas son
        estimaciones referenciales y pueden variar según la complejidad del
        proyecto, la disponibilidad de información, contenidos o accesos por parte
        del cliente, y la respuesta de servicios de terceros. Rock Agency no será
        responsable por retrasos atribuibles a la falta de entrega oportuna de
        materiales, aprobaciones o pagos por parte del cliente.
      </p>
    ),
  },
  {
    title: "6. Responsabilidades del cliente",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Entregar de forma oportuna la información, contenidos, accesos y
          aprobaciones necesarios para ejecutar el proyecto.
        </li>
        <li>
          Garantizar que cuenta con los derechos sobre los materiales que
          proporcione (textos, imágenes, marcas, logos, etc.).
        </li>
        <li>
          Mantener la confidencialidad de las credenciales de su tienda y demás
          cuentas asociadas.
        </li>
        <li>
          Cumplir con las políticas y términos de las plataformas y servicios de
          terceros utilizados (Shopify y otros).
        </li>
      </ul>
    ),
  },
  {
    title: "7. Servicios de terceros",
    body: (
      <p>
        Nuestros servicios pueden integrarse con plataformas y proveedores de
        terceros (por ejemplo, Shopify, pasarelas de pago, servicios de logística
        como Uber Direct a través de Fium™, y aplicaciones del ecosistema
        Shopify). Dichos servicios se rigen por sus propios términos y políticas,
        y su disponibilidad, funcionamiento y costos no dependen de Rock Agency.
        No somos responsables por interrupciones, cambios o fallas atribuibles a
        terceros.
      </p>
    ),
  },
  {
    title: "8. Fium™",
    body: (
      <p>
        Fium™ es una solución desarrollada por Rock Agency que conecta tu tienda
        Shopify con servicios de despacho de terceros para habilitar entregas
        rápidas. Su disponibilidad puede estar limitada a determinados planes y
        zonas de cobertura, y depende de la operación de proveedores externos. Los
        tiempos de entrega son referenciales y no constituyen una garantía de
        cumplimiento en todos los casos.
      </p>
    ),
  },
  {
    title: "9. Propiedad intelectual",
    body: (
      <p>
        Una vez cancelado el valor total del proyecto, el cliente adquiere los
        derechos de uso sobre los entregables desarrollados específicamente para
        él. Rock Agency conserva la titularidad de su know-how, metodologías,
        componentes reutilizables, librerías y herramientas propias (incluyendo
        Fium™). El contenido del sitio web de Rock Agency (marca, textos, diseño y
        gráficos) está protegido y no puede reproducirse sin autorización.
      </p>
    ),
  },
  {
    title: "10. Garantías y limitación de responsabilidad",
    body: (
      <p>
        Rock Agency entrega sus servicios con estándares profesionales, pero no
        garantiza resultados comerciales específicos (como volúmenes de ventas o
        tasas de conversión), ya que dependen de múltiples factores ajenos a su
        control. En la medida permitida por la ley, la responsabilidad total de
        Rock Agency frente al cliente se limita al monto efectivamente pagado por
        el servicio que originó el reclamo. Rock Agency no responde por daños
        indirectos, lucro cesante o pérdida de datos.
      </p>
    ),
  },
  {
    title: "11. Confidencialidad",
    body: (
      <p>
        Ambas partes se comprometen a mantener la confidencialidad de la
        información sensible intercambiada durante el proyecto y a utilizarla
        únicamente para los fines de la prestación de los servicios.
      </p>
    ),
  },
  {
    title: "12. Cancelaciones y reembolsos",
    body: (
      <p>
        En caso de cancelación por parte del cliente, los montos pagados que
        correspondan a trabajos ya ejecutados no serán reembolsables. Las
        condiciones particulares de cancelación y reembolso podrán detallarse en
        la propuesta de cada proyecto.
      </p>
    ),
  },
  {
    title: "13. Modificaciones",
    body: (
      <p>
        Rock Agency podrá modificar estos Términos en cualquier momento. La
        versión vigente será siempre la publicada en esta página, indicando la
        fecha de última actualización. El uso continuado del sitio o de los
        servicios implica la aceptación de los Términos vigentes.
      </p>
    ),
  },
  {
    title: "14. Legislación y jurisdicción",
    body: (
      <p>
        Estos Términos se rigen por las leyes de la República de Chile. Cualquier
        controversia será sometida a los tribunales competentes de Chile.
      </p>
    ),
  },
  {
    title: "15. Contacto",
    body: (
      <p>
        Si tienes dudas sobre estos Términos, escríbenos a{" "}
        <a
          href="mailto:mhuryy22@gmail.com"
          className="font-medium text-[#402178] underline"
        >
          mhuryy22@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#f6f7fb]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition hover:text-[#402178]"
        >
          ← Volver al inicio
        </Link>

        {/* Header */}
        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Legal
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            Última actualización: {LAST_UPDATED}
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-zinc-900">
                {section.title}
              </h2>
              <div className="mt-3 text-sm leading-relaxed text-zinc-600">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
