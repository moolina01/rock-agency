"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const projects: Project[] = [
  {
    name: "God Bless by Vicequim",
    category: "Distribución & e-commerce",
    description:
      "Tienda Shopify para fabricante y distribuidor de productos de aseo, con checkout Flow, despacho express Uber Direct y precios especiales para mayoristas.",
    image: "/projects/godbless.png",
    url: "https://rockagency-god-bless.netlify.app",
    ctaLabel: "Ver preview",
    featured: true,
  },
  {
    name: "Fium",
    category: "Producto propio",
    description:
      "App de despacho express que desarrollamos e integramos nativamente a Shopify. Publicada y disponible en la Shopify App Store.",
    logo: "/fium-logo.svg",
    url: "https://apps.shopify.com/fium",
    ctaLabel: "Ver en Shopify App Store",
    variant: "compact",
  },
];

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

// No se muestra como caso de estudio (mercado distinto al que apuntamos hoy):
// se deja solo como mención de confianza, estilo "partner".
const trustedBy = [{ name: "Ramón Amazonian Conservation", src: "/projects/ramon-logo.png" }];

export default function ProjectsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
    >
      {/* Caso destacado */}
      <div className="flex flex-col gap-6 lg:col-span-2">
        {featured.map((project) => (
          <motion.div key={project.name} variants={cardVariants} transition={{ duration: 0.6, ease }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Columna secundaria: producto propio + mención de confianza.
          En mobile van una al lado de la otra (2 columnas) en vez de apiladas,
          para que la sección no se sienta como una sola tira larga. */}
      <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-6 lg:col-span-1 lg:flex lg:flex-col">
        {rest.map((project) => (
          <motion.div key={project.name} variants={cardVariants} transition={{ duration: 0.6, ease }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}

        <motion.div
          variants={cardVariants}
          transition={{ duration: 0.6, ease }}
          className="flex h-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-paper-2 p-4 text-center sm:p-6"
        >
          <span className="font-mono text-[11px] tracking-[0.08em] text-ink-faint uppercase sm:text-xs">
            Fundaciones que han confiado en nosotros
          </span>
          {trustedBy.map((t) => (
            <div
              key={t.name}
              className="flex h-14 w-full max-w-44 flex-none items-center justify-center rounded-2xl border border-line bg-[#ece9fc] px-4 sm:px-6"
            >
              <Image
                src={t.src}
                alt={t.name}
                width={160}
                height={48}
                className="max-h-8 w-auto max-w-[130px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
