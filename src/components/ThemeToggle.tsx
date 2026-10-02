"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "nd-theme";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThemeToggle() {
  // Lee el tema real del DOM (lo fija el script theme-init antes del primer pintado)
  // y se re-sincroniza si otra pestaña lo cambia.
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // almacenamiento no disponible: el tema solo vive en la sesión
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggle}
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
      className="relative flex h-9 w-[4.5rem] shrink-0 items-center justify-between rounded-full border border-white/20 bg-white/10 px-2 transition-colors hover:bg-white/15"
    >
      <SunIcon className={`h-4 w-4 transition-colors ${dark ? "text-slate-500" : "text-amber-300"}`} />
      <MoonIcon className={`h-4 w-4 transition-colors ${dark ? "text-sky-300" : "text-slate-500"}`} />
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow transition-transform duration-200 ${
          dark ? "translate-x-9" : "translate-x-0"
        }`}
      >
        {dark ? (
          <MoonIcon className="h-4 w-4 text-ink-900" />
        ) : (
          <SunIcon className="h-4 w-4 text-ink-900" />
        )}
      </span>
    </button>
  );
}
