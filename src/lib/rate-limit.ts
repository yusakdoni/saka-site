// Simple in-memory sliding-window rate limiter.
// Note: this resets on every serverless cold start / deploy, and is per-instance
// only. That's an accepted tradeoff for a low-traffic contact form that avoids
// the operational cost of Redis. If traffic grows significantly, replace with
// a durable store (e.g. Upstash Redis).

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
