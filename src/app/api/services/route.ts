import { services } from "@/data/site";

// Colección: GET /api/services → 200 con el catálogo de servicios.
export const revalidate = 3600;

export async function GET() {
  return Response.json({ data: services });
}
