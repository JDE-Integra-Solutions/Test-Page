import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/logo.svg"
            alt="Logotipo de la consultora"
            width={58}
            height={36}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{site.descripcion}</p>
          <p className="mt-3 text-sm text-slate-400">{site.ciudad}</p>
        </div>
        <nav aria-label="Secundaria">
          <p className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
            Explorar
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["#servicios", "Servicios"],
              ["#planes", "Planes"],
              ["#caso", "Caso real"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-slate-400 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
            API pública
          </p>
          <ul className="mt-3 space-y-2 font-mono text-xs">
            {[
              ["/api/services", "GET servicios"],
              ["/api/plans", "GET planes"],
              ["/api/contact", "POST contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-slate-400 hover:text-brand-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Diseño original inspirado en patrones de consultoras globales. Sin afiliación
            con Capgemini, Deloitte ni Accenture.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} · {site.email}
        </p>
      </div>
    </footer>
  );
}
