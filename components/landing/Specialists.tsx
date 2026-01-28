import Image from "next/image";
import Link from "next/link";

export default function Specialists() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        {/* LEFT: Illustration */}
        <div className="relative">
          <Image
            src="/especializastas.png"
            alt="Ilustración de ecommerce"
            width={560}
            height={420}
            className="mx-auto"
            priority={false}
          />
        </div>

        {/* RIGHT: Copy */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Especialistas en Shopify <br className="hidden md:block" />
            a tu alcance.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Transformamos ideas originales en experiencias de venta emocionantes a
            través de Shopify, la plataforma líder que impulsa millones de
            negocios globales. Hacemos que vender online sea simple, innovador y
            altamente rentable.
          </p>

          <div className="mt-8">
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800"
            >
              Acerca de nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
