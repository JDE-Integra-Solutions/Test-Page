"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { bulletins, site } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

// Carrusel de boletines con desplazamiento nativo (scroll-snap):
// sin dependencias, accesible por teclado y con barra de progreso.
export default function Bulletins() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "24");
    return card.offsetWidth + gap;
  }, []);

  const update = useCallback(() => {
    // Limita los renders a 1 por frame durante el scroll.
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      setProgress(ratio);
      setPage(Math.min(Math.max(1, Math.round(ratio * (bulletins.length - 1)) + 1), bulletins.length));
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  function go(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * step(), behavior: "smooth" });
  }

  return (
    <section id="boletines" aria-labelledby="boletines-title" className="scroll-mt-20 bg-(--card)">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div id="boletines-title">
            <SectionHeading
              eyebrow="Boletines"
              title="Realidades de PYMEs, sin humo"
              description="Casos, guías SUNAT y método, publicados en nuestro blog. Lo que aprendemos en planta, lo contamos."
            />
          </div>
          <a
            href={site.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-(--ink) px-5 py-2.5 text-sm font-medium text-(--ink) transition-colors hover:bg-(--ink) hover:text-(--surface)"
          >
            Ver todo el blog
          </a>
        </div>

        <div
          ref={trackRef}
          onScroll={update}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Boletines del blog"
          tabIndex={0}
        >
          {bulletins.map((item) => (
            <a
              key={item.slug}
              data-card
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Leer "${item.titulo}" en el blog`}
              className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-(--line) bg-(--surface) p-7 pl-9 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-2 bg-brand-500 transition-[width] duration-200 group-hover:w-3.5"
              />
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase dark:text-brand-400">
                {item.tipo}
              </p>
              <h3 className="mt-3 text-xl leading-snug font-medium text-(--ink)">
                {item.titulo}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-(--muted)">
                {item.resumen}
              </p>
              <p className="mt-5 text-xs text-(--faint)">{item.fecha}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div
            className="h-1 flex-1 overflow-hidden rounded-full bg-(--line)"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-label="Progreso del carrusel"
          >
            <div
              className="h-full rounded-full bg-brand-500 transition-[width]"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Boletines anteriores"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--line) text-(--ink) transition-colors hover:bg-(--ink) hover:text-(--surface)"
            >
              ‹
            </button>
            <p aria-live="polite" className="min-w-12 text-center text-sm text-(--muted)">
              {page}/{bulletins.length}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Boletines siguientes"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--line) text-(--ink) transition-colors hover:bg-(--ink) hover:text-(--surface)"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
