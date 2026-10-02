import { plans } from "@/data/site";

// Colección: GET /api/plans → 200 con los planes comerciales.
export const revalidate = 3600;

export async function GET() {
  return Response.json({ data: plans });
}
