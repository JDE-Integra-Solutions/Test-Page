import { bulletins } from "@/data/site";

// Colección: GET /api/bulletins → 200 con los boletines del blog.
export const revalidate = 3600;

export async function GET() {
  return Response.json({ data: bulletins });
}
