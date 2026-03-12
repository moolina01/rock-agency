import Image from "next/image";

type Props = {
  title: React.ReactNode;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-zinc-200 bg-white px-10 py-14 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      {/* Icono Shopify */}
      <div className="mb-10 flex h-12 w-12 items-center justify-center">
        <Image
          src="/shopify.png"
          alt="Shopify"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Título */}
      <h3 className="text-2xl font-bold leading-tight text-zinc-900">
        {title}
      </h3>

      {/* Descripción */}
      <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-500">
        {description}
      </p>
    </div>
  );
}
