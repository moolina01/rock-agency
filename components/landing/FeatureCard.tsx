type Props = {
    title: string;
    description: string;
    icon: string;
  };
  
  export default function FeatureCard({ title, description, icon }: Props) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition">
        <div className="mb-4 text-4xl">{icon}</div>
  
        <h3 className="text-lg font-semibold text-zinc-900">
          {title}
        </h3>
  
        <p className="mt-3 text-sm text-zinc-600">
          {description}
        </p>
      </div>
    );
  }
  