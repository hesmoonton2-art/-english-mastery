"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { WordBankEntry } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, LevelBadge, buttonClass } from "./ui";
import { KnownToggle, SaveWordButton, WordBookmarkButton } from "./WordActions";

export default function WordCard({ entry }: { entry: WordBankEntry }) {
  const { state, actions, today } = useApp();
  const record = state.words[entry.key];
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(record?.note ?? "");
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    setDraft(record?.note ?? "");
  }, [record?.note]);

  return (
    <li className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card dark:border-ink-800 dark:bg-ink-900">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="flex flex-wrap items-baseline gap-2">
            <span className="text-base font-bold text-ink-900 dark:text-white">{entry.en}</span>
            {entry.ipa ? <span className="text-xs text-ink-400">/{entry.ipa}/</span> : null}
            <span className="mm text-xs italic text-ink-500 dark:text-ink-400">{entry.pos}</span>
          </p>
          <p className="mm mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">{entry.mm}</p>
        </div>
        <span className="flex items-center gap-1">
          <LevelBadge level={entry.level} />
          {record ? <WordBookmarkButton wordKey={entry.key} /> : null}
        </span>
      </div>

      <p className="mt-2 text-sm text-ink-700 dark:text-ink-200">{entry.example}</p>
      <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">{entry.exampleMm}</p>

      {entry.collocations?.length ? (
        <p className="mm mt-2 text-[11px] text-ink-500 dark:text-ink-400">
          အသုံးအနှုန်း — {entry.collocations.join(" · ")}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <Badge tone="slate">{entry.topic}</Badge>
        {entry.sources.slice(0, 2).map((source) => (
          <Link
            key={`${source.kind}-${source.id}`}
            href={source.kind === "lesson" ? `/lessons/${source.id}` : `/reading/${source.id}`}
            className="mm rounded-full border border-ink-200 px-2 py-0.5 text-[11px] text-ink-500 hover:border-brand-400 hover:text-brand-700 dark:border-ink-700 dark:text-ink-400"
          >
            {source.kind === "lesson" ? "သင်ခန်းစာ" : "ဖတ်ရှုမှု"} — {source.title}
          </Link>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <SaveWordButton wordKey={entry.key} />
        {record ? (
          <>
            <KnownToggle wordKey={entry.key} />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className="mm rounded-lg border border-ink-300 px-2 py-1 text-[11px] font-semibold text-ink-600 dark:border-ink-700 dark:text-ink-300"
            >
              {record.note ? "မှတ်စု ပြင်" : "+ မှတ်စု"}
            </button>
            <span className="mm text-[11px] text-ink-400">
              ရန် {record.srs.due <= today ? "ယနေ့" : record.srs.due}
            </span>
          </>
        ) : null}
      </div>

      {record && open ? (
        <div className="mt-2">
          <textarea
            rows={2}
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              setSavedFlash(false);
            }}
            placeholder="ဤစကားလုံးအတွက် ကိုယ်ပိုင် မှတ်စု…"
            className="mm w-full rounded-lg border border-ink-300 bg-white px-2 py-1.5 text-xs dark:border-ink-700 dark:bg-ink-950 dark:text-white"
          />
          <div className="mt-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                actions.setWordNote(entry.key, draft);
                setSavedFlash(true);
              }}
              className={buttonClass("primary", "!px-2 !py-1 !text-[11px]")}
            >
              သိမ်း
            </button>
            {savedFlash ? <span className="mm text-[11px] text-emerald-600">သိမ်းပြီး</span> : null}
          </div>
        </div>
      ) : null}

      {record?.note && !open ? (
        <p className="mm mt-2 rounded-lg bg-ink-50 px-2 py-1.5 text-[11px] leading-5 text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
          မှတ်စု — {record.note}
        </p>
      ) : null}
    </li>
  );
}
