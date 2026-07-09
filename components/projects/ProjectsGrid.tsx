"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects: Project[] = [
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
  {
    name: "Ramón Amazonian Conservation",
    category: "Fundación",
    badge: "En desarrollo",
    description:
      "Tienda Shopify en desarrollo para una fundación dedicada a la conservación ambiental en la Amazonía.",
    image: "/projects/ramonamazonia.png",
    url: "https://ramon-amazonian-conservation.myshopify.com",
    ctaLabel: "Ver preview",
  },
  {
    name: "Recreo Minimarket",
    category: "Minimarket & e-commerce",
    description: "Tienda en operación, con catálogo extenso y checkout personalizado.",
    stat: "500+ SKUs en catálogo activo",
    url: "https://recreominimarket.cl",
    variant: "compact",
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
