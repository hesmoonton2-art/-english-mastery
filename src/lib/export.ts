import type { WordBankEntry } from "@/content";
import type { AppState } from "./store";

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function csvCell(value: string | number | boolean | undefined): string {
  const text = value === undefined ? "" : String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

export function exportWordCsv(entries: WordBankEntry[], state: AppState) {
  const header = [
    "word",
    "meaning_mm",
    "part_of_speech",
    "ipa",
    "level",
    "topic",
    "example",
    "example_mm",
    "collocations",
    "saved",
    "note",
    "known",
    "review_due",
  ];
  const rows = entries.map((entry) => {
    const record = state.words[entry.key];
    return [
      entry.en,
      entry.mm,
      entry.pos,
      entry.ipa ?? "",
      entry.level,
      entry.topic,
      entry.example,
      entry.exampleMm,
      (entry.collocations ?? []).join("; "),
      record ? "yes" : "no",
      record?.note ?? "",
      record?.known ? "yes" : "no",
      record?.srs.due ?? "",
    ];
  });
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  download(`english-mastery-vocab-${new Date().toISOString().slice(0, 10)}.csv`, `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

export function exportStateJson(state: AppState, entries: WordBankEntry[]) {
  const payload = {
    exportedAt: new Date().toISOString(),
    note: "ဤဖိုင်သည် English Mastery ပလက်ဖောင်း၏ ဒေတာ အရန်ဖြစ်သည်။ ပြန်လည် တင်သွင်းရန် တိုးတက်မှု စာမျက်နှာကို သုံးပါ။",
    state,
    vocab: entries
      .filter((entry) => state.words[entry.key])
      .map((entry) => ({
        word: entry.en,
        meaning: entry.mm,
        note: state.words[entry.key]?.note ?? "",
        known: state.words[entry.key]?.known ?? false,
        review: state.words[entry.key]?.srs ?? null,
      })),
  };
  download(
    `english-mastery-backup-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(payload, null, 2),
    "application/json",
  );
}

export function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => false,
    );
  }
  return Promise.resolve(false);
}
