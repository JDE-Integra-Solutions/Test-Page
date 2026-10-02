import { services } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-20 bg-(--surface)">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="servicios-title">
          <SectionHeading
            eyebrow="Servicios"
            title="Tres frentes, un solo equipo"
            description="Consultoría industrial para ordenar la casa, software por módulos para digitalizarla e IA aplicada sobre datos reales."
          />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className="group rounded-2xl border border-(--line) bg-(--card) p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span aria-hidden="true" className="font-mono text-sm font-bold text-brand-600 dark:text-brand-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-bold text-(--ink)">{service.titulo}</h3>
              <p className="mt-2 leading-relaxed text-(--muted)">{service.descripcion}</p>
              <ul className="mt-4 space-y-2">
                {service.puntos.map((punto) => (
                  <li key={punto} className="flex gap-2 text-sm text-(--ink)">
                    <span aria-hidden="true" className="font-bold text-brand-600">
                      ›
                    </span>
                    {punto}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
