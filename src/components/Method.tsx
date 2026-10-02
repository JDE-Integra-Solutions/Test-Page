import { methodSteps } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Method() {
  return (
    <section id="metodo" aria-labelledby="metodo-title" className="scroll-mt-20 bg-(--surface)">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="metodo-title">
          <SectionHeading
            eyebrow="Método"
            title="Diagnóstico corto, entrega por fases"
            description="La causa nº 1 de fracaso en PYMEs es el big-bang. Nosotros avanzamos en ciclos cortos con tus datos."
          />
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, index) => (
            <li key={step.titulo} className="relative rounded-2xl border border-(--line) bg-(--card) p-6">
              <span
                aria-hidden="true"
                className="font-mono text-4xl font-extrabold text-slate-200 dark:text-white/15"
              >
                {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-(--ink)">{step.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--muted)">{step.detalle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
