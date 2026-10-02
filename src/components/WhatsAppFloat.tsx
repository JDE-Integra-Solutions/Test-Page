import { waLink } from "@/lib/contact";

// Botón flotante de contacto por WhatsApp con icono dibujado propio.
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, quiero un diagnóstico gratuito para mi empresa.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-xl transition-transform duration-200 hover:scale-110 motion-safe:hover:scale-110"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 motion-safe:animate-ping"
      />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7 text-white" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4Zm-3.2 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.2-2-.9c-.3-.1-.5-.2-.7 0l-1 1.2c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.8 6.3c-.1-.2-.3-.3 0 0Z" />
      </svg>
      <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-ink-950 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Escríbenos
      </span>
    </a>
  );
}
