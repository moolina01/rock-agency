import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#f6f7fb]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            Construimos{" "}
            <span className="text-violet-700">Tiendas Shopify</span>
            <br />
            Que Venden
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-600">
            E-commerce hecho con precisión, velocidad y pasión.
            Expertos en Shopify obsesionados con el crecimiento.
          </p>

          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-violet-800 transition"
            >
              Comienza ahora
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <Image
            src="/heroimagen.png"
            alt="Ilustración ecommerce"
            width={520}
            height={420}
            priority
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
