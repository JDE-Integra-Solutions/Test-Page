import { plans } from "@/data/site";

// Recurso individual: GET /api/plans/[slug]
// 200 si existe, 404 si no. `params` es promesa en Next.js 16: siempre con await.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    return Response.json(
      { error: { code: "not_found", message: `Plan '${slug}' no encontrado` } },
      { status: 404 },
    );
  }

  return Response.json({ data: plan });
}
