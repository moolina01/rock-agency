"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects: Project[] = [
  {
    name: "Recreo Minimarket",
    category: "Minimarket & e-commers",
    description: "Diseño y desarrollo completo desde cero Optimizada para mobile y con checkout personalizado.",
    image: "/recreoiamge.png",
    url: "https://recreominimarket.cl",
  },
  {
    name: "Ramon-amazonian-conservation",
    category: "Fundacion",
    description: "En Proceso de Creacion E-commers para fundacion",
    image: "/projects/ramonamazonia.png",
    url: "https://ramon-amazonian-conservation.myshopify.com",
  },
  {
    name: "Próximamente",
    category: "Shopify Plus",
    description: "Desarrollo integral de tienda Shopify Plus para marca de equipo deportivo — diseño personalizado, catálogo optimizado y checkout de alto rendimiento",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  // {
  //   name: "Ejemplo Tienda 4",
  //   category: "Alimentos & Bebidas",
  //   description: "Tienda con suscripciones recurrentes, diseño de marca y configuración de envíos locales.",
  //   image: "/projects/placeholder.svg",
  //   url: "https://shopify.com",
  // },
  // {
  //   name: "Ejemplo Tienda 5",
  //   category: "Salud & Belleza",
  //   description: "Rediseño completo con enfoque en CRO. Páginas de producto optimizadas para conversión.",
  //   image: "/projects/placeholder.svg",
  //   url: "https://shopify.com",
  // },
  // {
  //   name: "Ejemplo Tienda 6",
  //   category: "Hogar & Deco",
  //   description: "Desarrollo de tema personalizado desde cero con lookbook interactivo y filtros avanzados.",
  //   image: "/projects/placeholder.svg",
  //   url: "https://shopify.com",
  // },
];

export default function ProjectsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
