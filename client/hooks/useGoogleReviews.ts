import { useEffect, useState } from "react";

export type GoogleReview = {
  rating: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
  publishTime?: string;
};

type GoogleReviewsResponse = {
  reviews?: GoogleReview[];
  rating?: number | null;
  totalReviews?: number | null;
};

const ENDPOINT = "/api/google-reviews";
const MAX_REVIEWS = 5;
const MIN_STARS = 4;

function sortByPublishTimeDesc(a: GoogleReview, b: GoogleReview): number {
  const ta = a.publishTime ? new Date(a.publishTime).getTime() : 0;
  const tb = b.publishTime ? new Date(b.publishTime).getTime() : 0;
  return tb - ta;
}

export function useGoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) {
          throw new Error(`Google reviews request failed (${res.status})`);
        }

        const data = (await res.json()) as GoogleReviewsResponse;
        if (cancelled) return;

        const filtered = (data.reviews ?? [])
          .filter((r) => typeof r.rating === "number" && r.rating >= MIN_STARS && r.rating <= 5)
          .sort(sortByPublishTimeDesc)
          .slice(0, MAX_REVIEWS);

        setReviews(filtered);
        setRating(typeof data.rating === "number" ? data.rating : null);
        setTotalReviews(typeof data.totalReviews === "number" ? data.totalReviews : null);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        setReviews([]);
        setRating(null);
        setTotalReviews(null);
        setError(err instanceof Error ? err : new Error("Failed to load Google reviews"));
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { reviews, rating, totalReviews, isLoading, error };
}

export function getReviewText(review: GoogleReview, maxLength = 180): string {
  const raw = review.text?.text?.trim() ?? "";
  if (raw.length <= maxLength) return raw;
  return `${raw.slice(0, maxLength).trimEnd()}...`;
}

export function getReviewerInitials(displayName: string): string {
  const parts = displayName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}
