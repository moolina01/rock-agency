import Image from "next/image";

const partners = [
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
  { name: "Shopify", src: "/partner-shopify.svg" },
];

export default function Partners() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Nuestros Partners
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500 md:text-base">
            Unidos por una búsqueda constante de la perfección y un propósito común.
          </p>
        </div>

        {/* Logos row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {partners.map((p, i) => (
            <div key={i} className="opacity-70 hover:opacity-100 transition">
              <Image
                src={p.src}
                alt={p.name}
                width={44}
                height={44}
                className="h-10 w-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
