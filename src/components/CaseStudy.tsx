import { caseStudy } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function CaseStudy() {
  return (
    <section id="caso" aria-labelledby="caso-title" className="scroll-mt-20 bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="caso-title">
          <SectionHeading
            dark
            eyebrow="Caso en producción"
            title={caseStudy.cliente}
            description="El proyecto que nos enseñó a trabajar con PYMEs reales: primero la operación, después el software."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-sm font-semibold tracking-widest text-red-300 uppercase">
              Problema
            </h3>
            <p className="mt-3 leading-relaxed text-slate-200">{caseStudy.problema}</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-sm font-semibold tracking-widest text-brand-400 uppercase">
              Solución
            </h3>
            <p className="mt-3 leading-relaxed text-slate-200">{caseStudy.solucion}</p>
          </article>
          <article className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-7">
            <h3 className="text-sm font-semibold tracking-widest text-brand-400 uppercase">
              Resultado
            </h3>
            <ul className="mt-3 space-y-2.5">
              {caseStudy.resultados.map((resultado) => (
                <li key={resultado} className="flex gap-2 text-sm text-slate-100">
                  <span aria-hidden="true" className="font-bold text-brand-400">
                    ✓
                  </span>
                  {resultado}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <ul aria-label="Tecnologías usadas" className="mt-8 flex flex-wrap gap-2">
          {caseStudy.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
