import { shiftDay, dayKey } from "./dates.ts";

export type SrsGrade = "again" | "hard" | "good" | "easy";

export type SrsCard = {
  ease: number;
  intervalDays: number;
  reps: number;
  lapses: number;
  /** Due day key (YYYY-MM-DD) — a card is due when due <= today. */
  due: string;
  lastReviewed: string | null;
};

export type ReviewLogEntry = { at: string; grade: SrsGrade; word: string };

/**
 * Deterministic, SM-2-inspired scheduler.
 * - "again" resets the repetition chain and makes the card due the same day.
 * - "hard" grows the interval slowly and lowers ease.
 * - "good" / "easy" follow the classic 1, 3, interval × ease progression.
 * Given the same card, grade and day, the output is always identical.
 */
export function newSrsCard(today: string): SrsCard {
  return {
    ease: 2.5,
    intervalDays: 0,
    reps: 0,
    lapses: 0,
    due: today,
    lastReviewed: null,
  };
}

export function reviewCard(card: SrsCard, grade: SrsGrade, today: string): SrsCard {
  const base: SrsCard = {
    ease: card.ease || 2.5,
    intervalDays: Math.max(0, card.intervalDays || 0),
    reps: Math.max(0, card.reps || 0),
    lapses: Math.max(0, card.lapses || 0),
    due: card.due,
    lastReviewed: card.lastReviewed ?? null,
  };

  if (grade === "again") {
    return {
      ...base,
      reps: 0,
      lapses: base.lapses + 1,
      ease: Math.max(1.3, round2(base.ease - 0.2)),
      intervalDays: 0,
      due: today,
      lastReviewed: today,
    };
  }

  const reps = base.reps + 1;
  let ease = base.ease;
  let interval: number;

  if (grade === "hard") {
    ease = Math.max(1.3, round2(ease - 0.15));
    interval = Math.max(1, Math.round(base.intervalDays === 0 ? 1 : base.intervalDays * 1.2));
  } else if (grade === "easy") {
    ease = Math.min(3.2, round2(ease + 0.15));
    if (reps <= 1) interval = 3;
    else interval = Math.max(4, Math.round((base.intervalDays || 1) * ease * 1.3));
  } else {
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = 3;
    else interval = Math.max(4, Math.round((base.intervalDays || 1) * ease));
  }

  interval = Math.min(365, interval);

  return {
    ...base,
    reps,
    ease,
    intervalDays: interval,
    due: shiftDay(today, interval),
    lastReviewed: today,
  };
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

export function isDue(card: SrsCard, today: string): boolean {
  return card.due <= today;
}

export function sortQueue<T extends { due: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : 0));
}

export function dueCards<T extends { srs: SrsCard; addedAt?: string }>(
  entries: T[],
  today: string,
): T[] {
  return entries
    .filter((entry) => isDue(entry.srs, today))
    .sort((a, b) => (a.srs.due < b.srs.due ? -1 : a.srs.due > b.srs.due ? 1 : 0));
}

export function todayKeyFrom(date: Date): string {
  return dayKey(date);
}
