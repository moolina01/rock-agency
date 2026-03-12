"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en estar lista mi tienda Shopify?",
    a: "El tiempo depende de la complejidad del proyecto. Una tienda estándar con diseño personalizado tarda entre 2 y 4 semanas. Proyectos más complejos con integraciones o funciones especiales pueden tomar de 4 a 8 semanas. Siempre te damos un plazo claro antes de empezar.",
  },
  {
    q: "¿Cuánto cuesta crear una tienda Shopify con Rock Agency?",
    a: "Cada proyecto es diferente, por eso no manejamos precios fijos. El costo depende del diseño, número de páginas, integraciones y funcionalidades que necesites. Contáctanos y te enviamos una propuesta personalizada sin compromiso.",
  },
  {
    q: "¿Necesito tener conocimientos técnicos para manejar mi tienda?",
    a: "Para nada. Shopify está diseñado para que cualquier persona pueda administrar su tienda fácilmente. Además, al finalizar tu proyecto te damos una capacitación completa para que puedas agregar productos, gestionar pedidos y actualizar contenido sin ayuda.",
  },
  {
    q: "¿Qué incluye el servicio de creación de tienda?",
    a: "Incluye diseño personalizado, configuración completa de Shopify, carga inicial de productos, configuración de métodos de pago y envío, optimización básica de SEO, y una sesión de capacitación. Todo lo necesario para que tu tienda esté lista para vender desde el día uno.",
  },
  {
    q: "¿Puedo migrar mi tienda desde WooCommerce, Wix u otra plataforma?",
    a: "Sí, nos especializamos en migraciones. Transferimos tus productos, clientes, pedidos e historial a Shopify sin perder datos. Además aprovechamos la migración para mejorar el diseño y la experiencia de compra.",
  },
  {
    q: "¿Ustedes se encargan del mantenimiento después del lanzamiento?",
    a: "Sí. Ofrecemos planes de soporte y mantenimiento mensual para que tu tienda esté siempre actualizada, segura y funcionando al 100%. También podemos hacer cambios, agregar funciones o ayudarte con campañas y optimización de conversión.",
  },
  {
    q: "¿Necesito pagar la suscripción de Shopify por separado?",
    a: "Sí. La suscripción a Shopify es un pago directo a Shopify y va por separado de nuestros honorarios. Los planes de Shopify van desde $39 USD/mes. Nosotros te ayudamos a elegir el plan que mejor se adapte a tu negocio.",
  },
  {
    q: "¿Pueden hacer una tienda en Shopify Plus?",
    a: "Sí, trabajamos con Shopify Plus para marcas que necesitan mayor escala, automatizaciones avanzadas y checkout personalizado. Si estás en esa etapa o planeas crecer rápido, Shopify Plus puede ser la mejor opción para ti.",
  },
  {
    q: "¿Puedo ver ejemplos de tiendas que han creado?",
    a: "Claro, puedes ver nuestro portafolio completo en la página de Proyectos. Ahí encontrarás tiendas de distintas industrias con links para visitarlas en vivo.",
  },
  {
    q: "¿Cómo empezamos a trabajar juntos?",
    a: "Es muy sencillo: llena el formulario en nuestra página de Contacto o escríbenos directo. Agendamos una llamada sin costo para entender tu proyecto y te enviamos una propuesta en menos de 24 horas.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.07 }}
      className="mx-auto max-w-3xl space-y-3"
    >
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease }}
            className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-semibold text-zinc-900 md:text-base">
                {faq.q}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-50 text-[#402178] transition-colors">
                {isOpen ? <Minus className="h-3.5 w-3.5" strokeWidth={2.5} /> : <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-500">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
