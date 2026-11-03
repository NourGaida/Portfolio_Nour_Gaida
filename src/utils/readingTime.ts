/** Estimated reading time in minutes (≈ 200 words per minute, minimum 1). */
export function readingTime(text: string | undefined): number {
  if (!text) return 1;
  const words = text
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
