"use client";

import Link from "next/link";
import { useState } from "react";
import type { ListeningScript } from "@/lib/types";
import type { AttemptSummary } from "@/lib/core/summary";
import { listeningScripts } from "@/content";
import { useApp } from "@/lib/store";
import PracticeSet from "./PracticeSet";
import { Badge, ButtonLink, Card, LevelBadge, buttonClass } from "./ui";

export default function ListeningView({ script }: { script: ListeningScript }) {
  const { actions } = useApp();
  const [showMm, setShowMm] = useState(true);
  const index = listeningScripts.findIndex((item) => item.id === script.id);
  const next = listeningScripts[index + 1];

  const record = (summary: AttemptSummary) => {
    actions.recordAttempt({
      kind: "listening",
      refId: script.id,
      refTitle: script.title,
      correct: summary.correct,
      total: summary.total,
      topics: summary.topics,
      wrong: summary.wrong,
    });
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/listening" className="hover:underline">
          နားထောင်မှု
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{script.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={script.level} />
          <span className="mm text-xs text-ink-500 dark:text-ink-400">⏱ {script.minutes} မိနစ်</span>
          <Badge tone="amber">အသံဖိုင် မပါ</Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{script.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{script.titleMm}</p>
        <p className="mm mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{script.context}</p>
        <p className="mm mt-2 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          {script.speedNote}
        </p>
      </Card>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">Script</h2>
          <button
            type="button"
            onClick={() => setShowMm((value) => !value)}
            aria-pressed={showMm}
            className={buttonClass("secondary", "!text-xs")}
          >
            {showMm ? "မြန်မာ ဘာသာပြန် ဖျောက်" : "မြန်မာ ဘာသာပြန် ပြ"}
          </button>
        </div>
        <ol className="mt-3 space-y-3">
          {script.lines.map((line, lineIndex) => (
            <li key={lineIndex}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                {line.speaker}
              </p>
              <p className="text-sm leading-7 text-ink-900 dark:text-white">{line.en}</p>
              {showMm ? (
                <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">{line.mm}</p>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mm mt-4 border-t border-ink-200 pt-3 text-xs leading-6 text-ink-500 dark:border-ink-800 dark:text-ink-400">
          နားထောင်မှု လေ့ကျင့်ရန် အကြံပြုနည်း — ပထမအကြိမ် ဘာသာပြန် ဖျောက်ပြီး ဖတ်ပါ၊ ဒုတိယအကြိမ်
          အဓိကအချက် မှတ်ပါ၊ ထို့နောက် မေးခွန်း ဖြေပါ။
        </p>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">နားထောင်နည်း ဗျူဟာများ</h2>
        <ul className="mm mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700 dark:text-ink-200">
          {script.strategy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">မေးခွန်းများ</h2>
        <div className="mt-3">
          <PracticeSet exercises={script.questions} mode="practice" finishLabel="အဖြေများ စစ်ဆေးမည်" onFinish={record} />
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ButtonLink href="/listening" variant="secondary">
          ← Script စာရင်း
        </ButtonLink>
        {next ? (
          <ButtonLink href={`/listening/${next.id}`} variant="primary">
            {next.title} →
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
