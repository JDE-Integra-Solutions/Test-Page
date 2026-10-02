import { plans } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Plans() {
  return (
    <section id="planes" aria-labelledby="planes-title" className="scroll-mt-20 bg-(--card)">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="planes-title">
          <SectionHeading
            eyebrow="Planes"
            title="Paquetes cerrados, precio claro"
            description="Sin horas abiertas ni consultoría eterna: eliges un paquete, ves resultados en semanas y luego decides si crecer."
          />
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.slug}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.destacado
                  ? "border-ink-900 bg-ink-950 text-white shadow-xl dark:border-brand-500/40 dark:bg-[#0a1d44]"
                  : "border-(--line) bg-(--surface) text-(--muted)"
              }`}
            >
              {plan.destacado ? (
                <p className="mb-3 inline-flex w-fit rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-ink-950 uppercase">
                  El más contratado
                </p>
              ) : null}
              <h3 className={`text-xl font-bold ${plan.destacado ? "text-white" : "text-(--ink)"}`}>
                {plan.nombre}
              </h3>
              <p className={`mt-1 text-sm ${plan.destacado ? "text-slate-300" : "text-(--muted)"}`}>
                {plan.descripcion}
              </p>
              <p className={`mt-3 text-xs font-semibold tracking-wide uppercase ${plan.destacado ? "text-brand-400" : "text-brand-600 dark:text-brand-400"}`}>
                {plan.publico}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.entregables.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span aria-hidden="true" className={plan.destacado ? "text-brand-400" : "text-brand-600 dark:text-brand-400"}>
                      ✓
                    </span>
                    <span className={plan.destacado ? "text-slate-200" : undefined}>{item}</span>
                  </li>
                ))}
              </ul>
              <dl className={`mt-6 space-y-1 border-t pt-4 text-sm ${plan.destacado ? "border-white/10" : "border-(--line)"}`}>
                <div className="flex justify-between gap-2">
                  <dt className="font-medium opacity-70">Tiempo</dt>
                  <dd className="text-right font-semibold">{plan.tiempo}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="font-medium opacity-70">Cobro</dt>
                  <dd className="text-right font-semibold">{plan.modeloCobro}</dd>
                </div>
              </dl>
              <a
                href={`#contacto`}
                className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-colors ${
                  plan.destacado
                    ? "bg-brand-500 text-ink-950 hover:bg-brand-400"
                    : "border border-(--ink) text-(--ink) hover:bg-(--ink) hover:text-(--surface)"
                }`}
              >
                Cotizar {plan.nombre}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-(--faint)">
          Ficha técnica de cada plan disponible como API:{" "}
          <code className="rounded bg-(--chip) px-1.5 py-0.5 font-mono text-xs">
            GET /api/plans
          </code>
        </p>
      </div>
    </section>
  );
}
