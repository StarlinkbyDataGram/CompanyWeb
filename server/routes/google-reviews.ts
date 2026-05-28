import type { RequestHandler } from "express";

const ALLOWED_ORIGINS = new Set([
  "https://www.datagram.ng",
  "https://datagram.ng",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
]);

function setCorsHeaders(req: { headers: { origin?: string } }, res: { setHeader: (k: string, v: string) => void }) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function normalizePlaceId(placeId: string): string {
  return placeId.replace(/^places\//, "");
}

export const googleReviewsOptions: RequestHandler = (req, res) => {
  setCorsHeaders(req, res);
  res.status(204).end();
};

export const getGoogleReviews: RequestHandler = async (req, res) => {
  setCorsHeaders(req, res);

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error: "Google Places API is not configured",
      code: "MISSING_CONFIG",
    });
  }

  const id = normalizePlaceId(placeId);
  const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`);
  url.searchParams.set("fields", "reviews,rating,userRatingCount");
  url.searchParams.set("key", apiKey);

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "X-Goog-FieldMask": "reviews,rating,userRatingCount",
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

    return res.json({
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
};
