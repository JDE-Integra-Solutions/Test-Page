"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { plans, site } from "@/data/site";
import { mailtoLink, waLink } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-lg border border-(--line) bg-(--card) px-3 py-2 text-sm text-(--ink) placeholder:text-(--faint)";
const labelClass = "text-sm font-semibold text-(--ink)";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: String(formData.get("nombre") ?? "").trim(),
      empresa: String(formData.get("empresa") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      telefono: String(formData.get("telefono") ?? "").trim(),
      plan: String(formData.get("plan") ?? "").trim(),
      mensaje: String(formData.get("mensaje") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body: unknown = await response.json();

      if (!response.ok) {
        const err =
          typeof body === "object" && body !== null && "error" in body
            ? (body as { error?: { message?: string; details?: Record<string, string> } }).error
            : undefined;
        const detail = err?.details ? `: ${Object.values(err.details).join(" · ")}` : "";
        setStatus("error");
        setMessage(`No se pudo enviar: ${err?.message ?? `Error ${response.status}`}${detail}`);
        return;
      }

      setStatus("success");
      setMessage("Solicitud recibida. Te contactaremos en menos de 48 horas laborables.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Sin conexión con el servidor. Intenta por WhatsApp o correo.");
    }
  }

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-20 bg-(--surface)">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase dark:text-brand-400">
            Contacto
          </p>
          <h2
            id="contacto-title"
            className="mt-3 text-3xl font-bold tracking-tight text-balance text-(--ink) sm:text-4xl"
          >
            Diagnóstico gratuito de 30 minutos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-(--muted)">
            Cuéntanos qué duele: stock descuadrado, facturación lenta o decisiones sin
            datos. Respondemos con un plan concreto, no con un PDF genérico.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold text-(--ink)">Correo</dt>
              <dd>
                <a href={mailtoLink()} className="text-brand-600 hover:underline dark:text-brand-400">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold text-(--ink)">WhatsApp</dt>
              <dd>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline dark:text-brand-400"
                >
                  Escríbenos directo
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold text-(--ink)">Zona</dt>
              <dd className="text-(--muted)">{site.ciudad} · visitas a planta</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Formulario de contacto"
          className="rounded-2xl border border-(--line) bg-(--card) p-7 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre *
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className={inputClass}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="empresa" className={labelClass}>
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                maxLength={120}
                autoComplete="organization"
                className={inputClass}
                placeholder="Tu empresa"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Correo *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                placeholder="tucorreo@empresa.pe"
              />
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass}>
                Teléfono / WhatsApp
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                maxLength={20}
                autoComplete="tel"
                className={inputClass}
                placeholder="9XX XXX XXX"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="plan" className={labelClass}>
              Plan de interés
            </label>
            <select id="plan" name="plan" className={inputClass} defaultValue="">
              <option value="">Aún no lo sé — necesito diagnóstico</option>
              {plans.map((plan) => (
                <option key={plan.slug} value={plan.slug}>
                  {plan.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="mensaje" className={labelClass}>
              ¿Qué necesitas resolver? *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              minLength={10}
              maxLength={2000}
              rows={4}
              className={inputClass}
              placeholder="Ej: mi stock no cuadra con lo facturado y uso 3 Excel distintos…"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800 disabled:opacity-60 dark:bg-brand-500 dark:text-ink-950 dark:hover:bg-brand-400"
          >
            {status === "sending" ? "Enviando…" : "Solicitar diagnóstico gratis"}
          </button>

          <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm">
            {status === "success" ? (
              <span className="font-medium text-brand-600 dark:text-brand-400">{message}</span>
            ) : status === "error" ? (
              <span className="font-medium text-red-600 dark:text-red-400">{message}</span>
            ) : (
              <span className="text-(--faint)">
                Al enviar aceptas ser contactado sobre tu solicitud.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
