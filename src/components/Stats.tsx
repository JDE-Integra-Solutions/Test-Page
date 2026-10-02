import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section aria-label="Contexto del mercado" className="border-y border-(--line) bg-(--card)">
      <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pt-32 pb-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.etiqueta} className="border-l-4 border-brand-500 pl-4">
            <dt className="order-2 mt-1 text-sm leading-snug text-(--muted)">{stat.etiqueta}</dt>
            <dd className="order-1 text-3xl font-extrabold tracking-tight text-(--ink)">
              {stat.valor}
            </dd>
            <dd className="mt-1 text-xs font-medium tracking-wide text-(--faint) uppercase">
              {stat.contexto}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
