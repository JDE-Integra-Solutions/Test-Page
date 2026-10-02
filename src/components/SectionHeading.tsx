interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          dark ? "text-brand-400" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-(--ink)"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-(--muted)"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
