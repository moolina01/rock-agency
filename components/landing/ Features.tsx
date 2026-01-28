import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Creación eCommerce",
    description:
      "Creamos tiendas Shopify optimizadas para vender desde el primer día.",
    icon: "🛍️",
  },
  {
    title: "Migración a Shopify",
    description:
      "Migramos tu tienda sin pérdida de datos ni posicionamiento SEO.",
    icon: "🚀",
  },
  {
    title: "Asesoría y acompañamiento",
    description:
      "Te ayudamos a optimizar y escalar tu tienda constantemente.",
    icon: "🤝",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            ¿Qué servicios te ofrecemos?
          </h2>
          <p className="mt-4 text-zinc-600">
            Con nuestra ayuda tu negocio alcanzará su máximo potencial
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
