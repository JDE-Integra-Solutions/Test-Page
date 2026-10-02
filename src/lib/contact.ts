import { site } from "@/data/site";

// Constructores de enlaces de contacto (DRY): un solo lugar para el formato.
export function waLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink() {
  return `mailto:${site.email}`;
}
