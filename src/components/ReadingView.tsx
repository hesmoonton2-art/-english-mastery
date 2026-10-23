"use client";

import Link from "next/link";
import type { ReadingPassage } from "@/lib/types";
import type { AttemptSummary } from "@/lib/core/summary";
import { readingPassages } from "@/content";
import { useApp } from "@/lib/store";
import PracticeSet from "./PracticeSet";
import { SaveWordButton } from "./WordActions";
import { Badge, ButtonLink, Card, LevelBadge } from "./ui";

export default function ReadingView({ passage }: { passage: ReadingPassage }) {
  const { state, actions } = useApp();
  const index = readingPassages.findIndex((item) => item.id === passage.id);
  const next = readingPassages[index + 1];
  const attempts = state.attempts.filter((attempt) => attempt.refId === passage.id);
  const last = attempts[0];

  const record = (summary: AttemptSummary) => {
    actions.recordAttempt({
      kind: "reading",
      refId: passage.id,
      refTitle: passage.title,
      correct: summary.correct,
      total: summary.total,
      topics: summary.topics,
      wrong: summary.wrong,
    });
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/reading" className="hover:underline">
          ဖတ်ရှုမှု
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{passage.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={passage.level} />
          <Badge tone="slate">{passage.genre}</Badge>
          <span className="mm text-xs text-ink-500 dark:text-ink-400">⏱ {passage.minutes} မိနစ်</span>
          {last ? (
            <Badge tone="green">
              နောက်ဆုံး {last.correct}/{last.total}
            </Badge>
          ) : null}
        </div>
        <h1 className="mt-3 text-2xl font-bold text-ink-900 dark:text-white">{passage.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{passage.titleMm}</p>
        <p className="mm mt-2 text-xs text-ink-500 dark:text-ink-400">
          ဤစာပိုဒ်သည် ဤသင်ရိုးအတွက် မူရင်း ရေးသားထားသည်။ ဖတ်ရှုရာတွင် စကားလုံးအသစ်များကို မှတ်သားပြီး
          အောက်ရှိ မေးခွန်းများကို ဖြေပါ။
        </p>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">စာသား</h2>
        <div className="mt-2 space-y-3">
          {passage.text.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className="text-[15px] leading-8 text-ink-800 dark:text-ink-100">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စကားလုံး စာရင်း</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          စကားလုံးတစ်လုံးကို သိမ်းပါက spaced repetition စာရင်းထဲ ရောက်မည်။
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {passage.glossary.map((vocab) => (
            <li
              key={vocab.en}
              className="flex items-start justify-between gap-2 rounded-xl border border-ink-200 p-3 dark:border-ink-800"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink-900 dark:text-white">
                  {vocab.en}
                  {vocab.ipa ? <span className="ml-1 text-xs font-normal text-ink-400">/{vocab.ipa}/</span> : null}
                </p>
                <p className="mm text-xs text-brand-700 dark:text-brand-300">{vocab.mm}</p>
                <p className="mt-1 line-clamp-2 text-xs text-ink-500 dark:text-ink-400">{vocab.example}</p>
              </div>
              <SaveWordButton wordKey={vocab.en.toLowerCase().trim()} compact />
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">မေးခွန်းများ</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          မေးခွန်း {passage.questions.length} ခု။ ဖြေဆိုမှုကို ဤဘရောက်ဇာတွင် မှတ်တမ်းတင်မည်။
        </p>
        <div className="mt-3">
          <PracticeSet exercises={passage.questions} mode="practice" finishLabel="အဖြေများ စစ်ဆေးမည်" onFinish={record} />
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ButtonLink href="/reading" variant="secondary">
          ← စာပိုဒ် စာရင်း
        </ButtonLink>
        {next ? (
          <ButtonLink href={`/reading/${next.id}`} variant="primary">
            {next.title} →
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
