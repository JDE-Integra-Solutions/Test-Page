"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { site } from "@/data/site";
import { waLink } from "@/lib/contact";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#caso", label: "Caso real" },
  { href: "#boletines", label: "Boletines" },
  { href: "#metodo", label: "Método" },
  { href: "#equipo", label: "Equipo" },
];

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 24;
}

function getScrollServerSnapshot() {
  return false;
}

export default function Header() {
  // `false` en servidor; el cliente se sincroniza tras hidratar sin romper el HTML.
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrollSnapshot,
    getScrollServerSnapshot,
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Fila superior utilitaria */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-11 max-w-6xl items-center justify-between px-4 text-xs sm:px-6">
          <p className="font-medium tracking-wide text-slate-300">
            {site.ciudad} <span aria-hidden="true" className="mx-1 text-slate-500">|</span> ES
          </p>
          <div className="flex items-center gap-4">
            <nav aria-label="Utilitaria" className="hidden items-center gap-4 sm:flex">
              <a href="#contacto" className="text-slate-300 transition-colors hover:text-white">
                Contacto
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Fila principal */}
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center" aria-label="Inicio">
          <Image
            src="/logo.svg"
            alt="Logotipo de la consultora"
            width={101}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-slate-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Diagnóstico gratis
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white">
            Menú
          </summary>
          <nav
            aria-label="Móvil"
            className="absolute right-0 mt-2 flex w-52 flex-col rounded-xl border border-white/10 bg-ink-900 p-2 shadow-xl"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-1 rounded-lg border border-white/20 px-3 py-2 text-center text-sm font-medium text-white"
            >
              Diagnóstico gratis
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
