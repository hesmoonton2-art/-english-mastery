export function dayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Parse a YYYY-MM-DD key at local noon so DST shifts never change the day. */
export function keyToDate(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1, 12, 0, 0, 0);
}

export function shiftDay(key: string, delta: number): string {
  const date = keyToDate(key);
  date.setDate(date.getDate() + delta);
  return dayKey(date);
}

export function daysBetween(from: string, to: string): number {
  const a = keyToDate(from).getTime();
  const b = keyToDate(to).getTime();
  return Math.round((b - a) / 86_400_000);
}

export function isValidDayKey(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

/**
 * Current streak = consecutive study days ending today, or ending yesterday when the
 * learner has not studied yet today (a day in progress does not break the streak).
 */
export function computeStreak(activeDays: string[], today: string): {
  current: number;
  longest: number;
} {
  const unique = Array.from(new Set(activeDays)).filter(isValidDayKey).sort();
  if (unique.length === 0) return { current: 0, longest: 0 };

  const active = new Set(unique);
  let cursor = active.has(today) ? today : shiftDay(today, -1);
  let current = 0;
  while (active.has(cursor)) {
    current += 1;
    cursor = shiftDay(cursor, -1);
  }

  let longest = 1;
  let run = 1;
  for (let i = 1; i < unique.length; i += 1) {
    if (daysBetween(unique[i - 1], unique[i]) === 1) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 1;
    }
  }

  return { current, longest };
}

export function lastNDays(today: string, n: number): string[] {
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i -= 1) days.push(shiftDay(today, -i));
  return days;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
