/**
 * Standalone Vercel serverless handler for Google Reviews.
 * Kept separate from api/serverless.ts so this route works even if the Express bundle fails.
 */

const ALLOWED_ORIGINS = new Set([
  "https://www.datagram.ng",
  "https://datagram.ng",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
]);

const SITE_REFERER = "https://www.datagram.ng/";

type Req = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
};

type Res = {
  setHeader(name: string, value: string): void;
  status(code: number): {
    json(body: unknown): void;
    end(): void;
  };
};

function setCorsHeaders(req: Req, res: Res) {
  const origin = req.headers.origin;
  if (typeof origin === "string" && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function normalizePlaceId(placeId: string): string {
  return placeId.replace(/^places\//, "").trim();
}

export default async function handler(req: Req, res: Res) {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed", code: "METHOD_NOT_ALLOWED" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error: "Google Places API is not configured",
      code: "MISSING_CONFIG",
    });
  }

  const id = normalizePlaceId(placeId);
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        Referer: SITE_REFERER,
      },
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      return res.status(response.status).json({
        error: "Failed to fetch Google reviews",
        code: "PLACES_API_ERROR",
        details: details.slice(0, 500),
      });
    }

    const data = (await response.json()) as {
      reviews?: unknown[];
      rating?: number;
      userRatingCount?: number;
    };

    return res.status(200).json({
      reviews: data.reviews ?? [],
      rating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? null,
    });
  } catch {
    return res.status(500).json({
      error: "Internal server error",
      code: "INTERNAL_ERROR",
    });
  }
}
