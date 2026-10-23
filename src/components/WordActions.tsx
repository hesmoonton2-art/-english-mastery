"use client";

import { useApp } from "@/lib/store";

export function SaveWordButton({ wordKey, compact = false }: { wordKey: string; compact?: boolean }) {
  const { state, actions } = useApp();
  const saved = Boolean(state.words[wordKey]);
  return (
    <button
      type="button"
      onClick={() => (saved ? actions.removeWord(wordKey) : actions.addWord(wordKey))}
      aria-pressed={saved}
      className={`mm shrink-0 rounded-lg border px-2 py-1 text-[11px] font-semibold transition ${
        saved
          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300"
          : "border-ink-300 text-ink-600 hover:border-brand-500 hover:text-brand-700 dark:border-ink-700 dark:text-ink-300"
      } ${compact ? "" : "px-3 py-1.5 text-xs"}`}
    >
      {saved ? "✓ သိမ်းပြီး" : "+ ဘဏ်ထဲ သိမ်း"}
    </button>
  );
}

export function WordBookmarkButton({ wordKey }: { wordKey: string }) {
  const { state, actions } = useApp();
  const word = state.words[wordKey];
  if (!word) return null;
  return (
    <button
      type="button"
      onClick={() => actions.toggleWordBookmark(wordKey)}
      aria-pressed={word.bookmarked}
      aria-label={word.bookmarked ? "အမှတ်အသား ဖယ်ရန်" : "အမှတ်အသား လုပ်ရန်"}
      className={`rounded-lg border px-2 py-1 text-xs font-semibold ${
        word.bookmarked
          ? "border-gold-500 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-200"
          : "border-ink-300 text-ink-500 dark:border-ink-700 dark:text-ink-400"
      }`}
    >
      {word.bookmarked ? "★" : "☆"}
    </button>
  );
}

export function KnownToggle({ wordKey }: { wordKey: string }) {
  const { state, actions } = useApp();
  const word = state.words[wordKey];
  if (!word) return null;
  return (
    <button
      type="button"
      onClick={() => actions.setWordKnown(wordKey, !word.known)}
      aria-pressed={word.known}
      className={`mm rounded-lg border px-2 py-1 text-xs font-semibold ${
        word.known
          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300"
          : "border-ink-300 text-ink-500 dark:border-ink-700 dark:text-ink-400"
      }`}
    >
      {word.known ? "သိပြီ" : "မသိသေး"}
    </button>
  );
}
