type SectionMarkerProps = {
  num: string;
  label: string;
  dark?: boolean;
};

export default function SectionMarker({ num, label, dark = false }: SectionMarkerProps) {
  return (
    <div
      className={`mb-11 flex items-baseline gap-4 border-t pt-4 ${
        dark ? "border-[#33323C]" : "border-line-ink"
      }`}
    >
      <span
        className={`font-mono text-[13px] font-bold ${
          dark ? "text-lime" : "text-indigo"
        }`}
      >
        {num}
      </span>
      <span
        className={`font-mono text-xs tracking-[0.08em] uppercase ${
          dark ? "text-[#9C9AA6]" : "text-ink-soft"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
