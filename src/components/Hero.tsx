import { hero } from "@/data/site";

// Héroe minimalista de pantalla completa: fondo abstracto propio
// (malla de gradientes + retícula + bloques) y tarjeta translúcida
// superpuesta con el mensaje principal.
const blocks = [
  0.1, 0.05, 0.14, 0.07, 0.18, 0.06,
  0.06, 0.16, 0.08, 0.2, 0.1, 0.05,
  0.12, 0.06, 0.22, 0.09, 0.05, 0.13,
  0.05, 0.1, 0.07, 0.15, 0.18, 0.08,
];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative bg-ink-950">
      {/* Fondo abstracto */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_10%,rgba(109,92,255,0.28),transparent),radial-gradient(50rem_28rem_at_10%_90%,rgba(0,194,168,0.18),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(255,255,255,0.5) 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(255,255,255,0.5) 48px)",
          }}
        />
        <div className="absolute inset-y-0 right-0 hidden w-1/3 items-center justify-end pr-10 md:flex">
          <div className="grid grid-cols-6 gap-1.5" aria-hidden="true">
            {blocks.map((opacity, i) => (
              <span
                key={i}
                className="block h-9 w-9 rounded-[4px] bg-white"
                style={{ opacity }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-0 sm:px-6 lg:pt-52">
        <p className="text-xs font-medium tracking-[0.25em] text-slate-300 uppercase">
          {hero.insignia}
        </p>

        {/* Tarjeta superpuesta: desborda 6rem sobre la sección siguiente */}
        <div className="relative z-10 mt-8 -mb-24 max-w-2xl rounded-md border border-white/10 bg-ink-800/60 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          <h1
            id="hero-title"
            className="text-4xl font-light tracking-tight text-balance text-white sm:text-5xl"
          >
            {hero.titulo}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed font-light text-slate-200 sm:text-lg">
            {hero.subtitulo}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#planes"
              className="rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-medium text-ink-950 transition-colors hover:bg-brand-400"
            >
              Ver planes
            </a>
            <a
              href="#contacto"
              className="group text-center text-sm font-medium text-white sm:text-left"
            >
              Agendar diagnóstico gratis
              <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
