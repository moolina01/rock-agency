"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects: Project[] = [
  {
    name: "Ejemplo Tienda 1",
    category: "Moda & Lifestyle",
    description: "Diseño y desarrollo completo desde cero. Optimizada para mobile y con checkout personalizado.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  {
    name: "Ejemplo Tienda 2",
    category: "Electrónica",
    description: "Migración desde WooCommerce a Shopify. Velocidad x3 y tasa de conversión mejorada.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  {
    name: "Ejemplo Tienda 3",
    category: "Shopify Plus",
    description: "Implementación Shopify Plus con automatizaciones avanzadas y checkout extensible.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  {
    name: "Ejemplo Tienda 4",
    category: "Alimentos & Bebidas",
    description: "Tienda con suscripciones recurrentes, diseño de marca y configuración de envíos locales.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  {
    name: "Ejemplo Tienda 5",
    category: "Salud & Belleza",
    description: "Rediseño completo con enfoque en CRO. Páginas de producto optimizadas para conversión.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
  {
    name: "Ejemplo Tienda 6",
    category: "Hogar & Deco",
    description: "Desarrollo de tema personalizado desde cero con lookbook interactivo y filtros avanzados.",
    image: "/projects/placeholder.svg",
    url: "https://shopify.com",
  },
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
