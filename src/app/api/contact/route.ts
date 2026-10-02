import { plans } from "@/data/site";

// Recurso de creación: POST /api/contact
// 201 creado · 400 validación · 415 tipo de contenido · 405 método no permitido.
// Sin estado en servidor: valida y responde; la persistencia (BD/CRM) va en producción.

interface ContactPayload {
  nombre?: unknown;
  empresa?: unknown;
  email?: unknown;
  telefono?: unknown;
  plan?: unknown;
  mensaje?: unknown;
}

function isNonEmptyString(value: unknown, max: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function isValidEmail(value: unknown): value is string {
  return (
    typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
  );
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return Response.json(
      { error: { code: "unsupported_media_type", message: "Usa Content-Type: application/json" } },
      { status: 415 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { error: { code: "invalid_json", message: "Cuerpo JSON inválido" } },
      { status: 400 },
    );
  }

  const errors: Record<string, string> = {};
  const mensaje = typeof payload.mensaje === "string" ? payload.mensaje.trim() : "";
  if (!isNonEmptyString(payload.nombre, 80)) errors.nombre = "Nombre requerido (máx. 80)";
  if (!isValidEmail(payload.email)) errors.email = "Correo electrónico inválido";
  if (mensaje.length < 10 || mensaje.length > 2000)
    errors.mensaje = "Mensaje de 10 a 2000 caracteres";
  if (payload.empresa !== undefined && payload.empresa !== "" && !isNonEmptyString(payload.empresa, 120))
    errors.empresa = "Empresa inválida (máx. 120)";
  if (payload.telefono !== undefined && payload.telefono !== "" && !isNonEmptyString(payload.telefono, 20))
    errors.telefono = "Teléfono inválido (máx. 20)";
  if (
    payload.plan !== undefined &&
    payload.plan !== "" &&
    (typeof payload.plan !== "string" || !plans.some((p) => p.slug === payload.plan))
  )
    errors.plan = "Plan desconocido";

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: { code: "validation_error", message: "Revisa los campos", details: errors } },
      { status: 400 },
    );
  }

  // En producción: persistir en BD/CRM y encolar notificación antes de responder.
  const ticket = {
    id: crypto.randomUUID(),
    nombre: String(payload.nombre).trim(),
    empresa: String(payload.empresa ?? "").trim(),
    email: String(payload.email).trim(),
    telefono: String(payload.telefono ?? "").trim(),
    plan: String(payload.plan ?? "").trim(),
    mensaje,
    recibidaEn: new Date().toISOString(),
  };

  return Response.json({ data: ticket }, { status: 201 });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function GET() {
  return Response.json(
    {
      error: {
        code: "method_not_allowed",
        message: "Este recurso solo acepta POST. Envía tu solicitud como JSON.",
      },
    },
    { status: 405, headers: { Allow: "POST, OPTIONS" } },
  );
}
