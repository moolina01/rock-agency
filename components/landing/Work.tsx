"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Work() {
  return (
    <section id="proyectos" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Nuestro trabajo
          </h2>
          <p className="mt-3 text-ink-soft">
            Proyectos reales que hemos construido, y el producto propio que
            desarrollamos sobre Shopify.
          </p>
        </motion.div>

        <ProjectsGrid />

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-line bg-paper-2 px-7 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-indigo"
          >
            Ver todos los proyectos
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
