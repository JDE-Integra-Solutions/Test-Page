import { team } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="scroll-mt-20 bg-(--card)">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="equipo-title">
          <SectionHeading
            eyebrow="Equipo"
            title="Tres especialistas, cero burocracia"
            description="Hablas directo con quien hace el trabajo: sin preventas, sin capas de gestión."
          />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <li key={member.rol} className="rounded-2xl border border-(--line) bg-(--surface) p-7">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 font-mono text-xl font-bold text-brand-400"
              >
                {member.rol.charAt(0)}
              </span>
              <h3 className="mt-4 text-lg font-bold text-(--ink)">{member.rol}</h3>
              <p className="text-sm font-medium text-(--faint)">{member.formacion}</p>
              <p className="mt-3 inline-block rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                {member.foco}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-(--muted)">{member.aporte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
