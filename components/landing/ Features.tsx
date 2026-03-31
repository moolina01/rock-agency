"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    title: (
      <>
        Creación <br />
        eCommerce
      </>
    ),
    description:
      "Expertos en Shopify, creamos tu tienda de alto impacto, optimizada para vender desde el primer día.",
    image: "/creacion_ecommerce.png",
  },
  {
    title: (
      <>
        Migración <br />
        a Shopify
      </>
    ),
    description:
      "Migramos y rediseñamos tu tienda a Shopify desde cualquier plataforma. Ganarás velocidad y eficiencia sin esfuerzo.",
    image: "/migracion_shopify.png",
  },
  
  {
    title: (
      <>
        Asesoría <br />y compañía
      </>
    ),
    description:
      "Te ayudamos a dominar tus herramientas y optimizar tu tienda para aumentar tu rentabilidad y tasa de conversión.",
    image: "/asesoria_compania.png",
  },
];
export default function Features() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-extrabold text-zinc-900">
            ¿Qué servicios te ofrecemos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            Con nuestra ayuda tu negocio alcanzará su máximo potencial
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
