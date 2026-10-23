"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lesson } from "@/lib/types";
import { nextLessonAfter, previousLessonBefore } from "@/content";
import { moduleTitle, moduleTitleMm } from "@/content/meta";
import { lessonStatus } from "@/lib/core/stats";
import type { AttemptSummary } from "@/lib/core/summary";
import { useApp } from "@/lib/store";
import PracticeSet from "./PracticeSet";
import { LessonStatusBadge } from "./LessonCard";
import { SaveWordButton } from "./WordActions";
import {
  Badge,
  ButtonLink,
  Card,
  KeyValueTable,
  LevelBadge,
  ProgressBar,
  buttonClass,
} from "./ui";

function wordKey(en: string): string {
  return en.toLowerCase().trim();
}

export default function LessonView({ lesson }: { lesson: Lesson }) {
  const { state, actions } = useApp();
  const progress = state.lessons[lesson.id];
  const status = lessonStatus(progress);
  const bookmarked = state.lessonBookmarks.includes(lesson.id);
  const noteKey = `lesson:${lesson.id}`;
  const savedNote = state.notes[noteKey] ?? "";
  const [noteDraft, setNoteDraft] = useState(savedNote);
  const [noteSaved, setNoteSaved] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(() => lesson.mastery.map(() => false));

  useEffect(() => {
    actions.openLesson(lesson.id);
  }, [actions, lesson.id]);

  useEffect(() => {
    setNoteDraft(savedNote);
  }, [savedNote]);

  const next = nextLessonAfter(lesson.id);
  const previous = previousLessonBefore(lesson.id);

  const completed = Boolean(progress?.completedAt);
  const bestScore = typeof progress?.bestScore === "number" ? progress.bestScore : 0;
  const allChecked = checks.length > 0 && checks.every(Boolean);
  const mastered = Boolean(progress?.masteredAt);
  const canMaster = completed && bestScore >= 80 && allChecked && !mastered;

  const recordIndependent = (summary: AttemptSummary) => {
    actions.completeLesson(lesson.id, { correct: summary.correct, total: summary.total });
    actions.recordAttempt({
      kind: "lesson",
      refId: lesson.id,
      refTitle: lesson.title,
      correct: summary.correct,
      total: summary.total,
      topics: summary.topics,
      wrong: summary.wrong,
    });
  };

  return (
    <article className="space-y-5">
      <nav aria-label="လမ်းကြောင်း" className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/lessons" className="underline-offset-2 hover:underline">
          သင်ခန်းစာများ
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/roadmap" className="underline-offset-2 hover:underline">
          Module {lesson.moduleId}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{lesson.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={lesson.level} />
          <Badge tone="slate">
            Module {lesson.moduleId} · {moduleTitle(lesson.moduleId)}
          </Badge>
          <LessonStatusBadge status={status} />
          <span className="mm text-xs text-ink-500 dark:text-ink-400">⏱ {lesson.minutes} မိနစ်</span>
          <button
            type="button"
            onClick={() => actions.toggleLessonBookmark(lesson.id)}
            aria-pressed={bookmarked}
            className={`mm ml-auto rounded-lg border px-3 py-1.5 text-xs font-semibold ${
              bookmarked
                ? "border-gold-500 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-200"
                : "border-ink-300 text-ink-600 dark:border-ink-700 dark:text-ink-300"
            }`}
          >
            {bookmarked ? "★ သိမ်းထားသည်" : "☆ သင်ခန်းစာ မှတ်ထားမည်"}
          </button>
        </div>
        <h1 className="mt-3 text-2xl font-bold leading-snug text-ink-900 dark:text-white">{lesson.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{lesson.titleMm}</p>
        <p className="mm mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">{lesson.summaryLine}</p>
        <div className="mm mt-3 flex flex-wrap gap-1.5">
          {lesson.topics.map((topic) => (
            <Badge key={topic} tone="brand">
              {topic}
            </Badge>
          ))}
        </div>
        {progress ? (
          <div className="mt-4">
            <div className="mm flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
              <span>အကောင်းဆုံး ရမှတ်</span>
              <span>{bestScore}% · ကြိုးစားမှု {progress.attempts ?? 0} ကြိမ်</span>
            </div>
            <ProgressBar value={bestScore} className="mt-1" tone={bestScore >= 80 ? "green" : "brand"} />
          </div>
        ) : null}
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၁။ သင်ယူမှု ရည်မှန်းချက်များ</h2>
        <ul className="mm mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700 dark:text-ink-200">
          {lesson.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၂။ စကားလုံးများ</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          စကားလုံးတစ်လုံးကို ဘဏ်ထဲ သိမ်းလျှင် spaced repetition ဖြင့် ပြန်လည် လေ့ကျင့်ရန် စာရင်းထဲ ရောက်မည်။
        </p>
        <ul className="mt-3 divide-y divide-ink-100 dark:divide-ink-800">
          {lesson.vocab.map((vocab) => {
            const key = wordKey(vocab.en);
            return (
              <li key={vocab.en} className="flex flex-wrap items-start gap-2 py-3">
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-bold text-ink-900 dark:text-white">{vocab.en}</span>
                    {vocab.ipa ? (
                      <span className="text-xs text-ink-400">/{vocab.ipa}/</span>
                    ) : null}
                    <span className="mm text-xs italic text-ink-500 dark:text-ink-400">{vocab.pos}</span>
                    <span className="mm text-sm text-brand-700 dark:text-brand-300">{vocab.mm}</span>
                  </p>
                  <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{vocab.example}</p>
                  <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">{vocab.exampleMm}</p>
                  {vocab.collocations?.length ? (
                    <p className="mm mt-1 text-[11px] text-ink-500 dark:text-ink-400">
                      အသုံးအနှုန်း — {vocab.collocations.join(" · ")}
                    </p>
                  ) : null}
                </div>
                <SaveWordButton wordKey={key} />
              </li>
            );
          })}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၃။ ရှင်းလင်းချက်</h2>
        <div className="mt-3 space-y-5">
          {lesson.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="mm text-sm font-bold text-brand-700 dark:text-brand-300">{section.heading}</h3>
              <div className="prose-lesson mm mt-1">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {section.table ? (
                <KeyValueTable headers={section.table.headers} rows={section.table.rows} />
              ) : null}
            </section>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၄။ ဥပမာများ</h2>
        <ul className="mt-3 space-y-3">
          {lesson.examples.map((example, index) => (
            <li key={index} className="rounded-xl border border-ink-200 p-3 dark:border-ink-800">
              <p className="text-sm font-medium text-ink-900 dark:text-white">{example.en}</p>
              <p className="mm mt-1 text-sm text-ink-600 dark:text-ink-300">{example.mm}</p>
              {example.note ? (
                <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">မှတ်ချက် — {example.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၅။ အဖြစ်များသော အမှားများ</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {lesson.mistakes.map((mistake) => (
            <li key={mistake.wrong} className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 dark:border-rose-900 dark:bg-rose-950/30">
              <p className="text-sm text-rose-700 line-through dark:text-rose-300">{mistake.wrong}</p>
              <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{mistake.right}</p>
              <p className="mm mt-1 text-xs leading-6 text-ink-600 dark:text-ink-300">{mistake.why}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၆။ လမ်းညွှန် လေ့ကျင့်ခန်း</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          မေးခွန်း {lesson.guided.length} ခု။ အဖြေတစ်ခုစီကို ချက်ချင်း စစ်ဆေးပြီး ရှင်းလင်းချက် ဖတ်နိုင်သည်။
          ဤအပိုင်း၏ ရမှတ်ကို မှတ်တမ်း မတင်ပါ။
        </p>
        <div className="mt-3">
          <PracticeSet exercises={lesson.guided} mode="practice" finishLabel="လမ်းညွှန် လေ့ကျင့်ခန်း ပြီးဆုံး" />
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၇။ ကိုယ်တိုင် လေ့ကျင့်ခန်း</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          မေးခွန်း {lesson.independent.length} ခု။ ဤအပိုင်းကို ပြီးဆုံးပါက သင်ခန်းစာ “ပြီးစီး” အဖြစ် မှတ်တမ်းတင်မည်။
          ကျွမ်းကျင်မှု သတ်မှတ်ချက်အတွက် ၈၀% အထက် လိုအပ်သည်။
        </p>
        <div className="mt-3">
          <PracticeSet
            exercises={lesson.independent}
            mode="practice"
            finishLabel="သင်ခန်းစာ ပြီးဆုံး"
            onFinish={recordIndependent}
          />
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၈။ ပြန်လည် သုံးသပ်မေးခွန်းများ</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          အဖြေကို ကိုယ်တိုင် ဦးစွာ ပြောကြည့်ပြီးမှ ဖွင့်ကြည့်ပါ။
        </p>
        <ul className="mt-3 space-y-2">
          {lesson.review.map((item, index) => (
            <li key={index}>
              <details className="rounded-xl border border-ink-200 p-3 dark:border-ink-800">
                <summary className="mm cursor-pointer text-sm font-medium text-ink-900 dark:text-white">
                  {item.q}
                </summary>
                <p className="mm mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၉။ အနှစ်ချုပ်</h2>
          <ul className="mm mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700 dark:text-ink-200">
            {lesson.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">၁၀။ ကျွမ်းကျင်မှု သတ်မှတ်ချက်</h2>
          <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
            အောက်ပါတို့ကို ကိုယ်တိုင် စစ်ဆေးပါ။ ကိုယ်တိုင် လေ့ကျင့်ခန်း ၈၀% အထက် ရပြီး အားလုံးကို
            အမှန်ခြစ်မှသာ “ကျွမ်းကျင်” အဖြစ် သတ်မှတ်နိုင်မည်။
          </p>
          <ul className="mt-3 space-y-2">
            {lesson.mastery.map((item, index) => (
              <li key={item}>
                <label className="mm flex cursor-pointer items-start gap-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                  <input
                    type="checkbox"
                    checked={checks[index] ?? false}
                    onChange={(event) =>
                      setChecks((list) => list.map((value, position) => (position === index ? event.target.checked : value)))
                    }
                    className="mt-1 h-4 w-4 rounded border-ink-300 text-brand-600"
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mm mt-3 space-y-1 text-xs text-ink-500 dark:text-ink-400">
            <p>{completed ? "✓ သင်ခန်းစာ ပြီးစီးပြီ" : "• ကိုယ်တိုင် လေ့ကျင့်ခန်း မပြီးသေးပါ"}</p>
            <p>
              {bestScore >= 80 ? `✓ အကောင်းဆုံး ရမှတ် ${bestScore}%` : `• အကောင်းဆုံး ရမှတ် ${bestScore}% — ၈၀% လိုအပ်သည်`}
            </p>
            <p>{allChecked ? "✓ သတ်မှတ်ချက် အားလုံး အမှန်ခြစ်ပြီ" : "• သတ်မှတ်ချက်များ ကျန်ရှိနေသည်"}</p>
          </div>
          <button
            type="button"
            onClick={() => actions.markLessonMastered(lesson.id)}
            disabled={!canMaster}
            className={buttonClass("primary", "mt-3 w-full")}
          >
            {mastered ? "ကျွမ်းကျင်သည်ဟု သတ်မှတ်ပြီးပါပြီ" : "ကျွမ်းကျင်သည်ဟု သတ်မှတ်မည်"}
          </button>
          <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
            ဤသည်မှာ ကိုယ်တိုင် အကဲဖြတ်မှု ဖြစ်သည်။ တရားဝင် CEFR အသိအမှတ်ပြု လက်မှတ် မဟုတ်ပါ။
          </p>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">မှတ်စု</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          ဤမှတ်စုကို ဤဘရောက်ဇာတွင် သိမ်းဆည်းမည်။ မှတ်စုစာအုပ် စာမျက်နှာတွင် ပြန်ကြည့်နိုင်သည်။
        </p>
        <textarea
          rows={4}
          value={noteDraft}
          onChange={(event) => {
            setNoteDraft(event.target.value);
            setNoteSaved(false);
          }}
          placeholder="ဤသင်ခန်းစာမှ သင်ယူခဲ့သည့် အချက်များ…"
          className="mm mt-2 w-full rounded-xl border border-ink-300 bg-white px-3 py-2 text-sm dark:border-ink-700 dark:bg-ink-950 dark:text-white"
        />
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              actions.saveNote(noteKey, noteDraft);
              setNoteSaved(true);
            }}
            className={buttonClass("primary")}
          >
            မှတ်စု သိမ်းမည်
          </button>
          {noteSaved ? <span className="mm text-xs text-emerald-600 dark:text-emerald-400">သိမ်းပြီးပါပြီ</span> : null}
          <ButtonLink href="/notebook" variant="ghost" className="ml-auto">
            မှတ်စုစာအုပ် →
          </ButtonLink>
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-2">
        {previous ? (
          <ButtonLink href={`/lessons/${previous.id}`} variant="secondary">
            ← {previous.title}
          </ButtonLink>
        ) : (
          <span />
        )}
        {next ? (
          <ButtonLink href={`/lessons/${next.id}`} variant="primary">
            {next.title} →
          </ButtonLink>
        ) : (
          <ButtonLink href="/progress" variant="primary">
            တိုးတက်မှု ကြည့်ရန် →
          </ButtonLink>
        )}
      </div>

      <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">
        Module {lesson.moduleId} — {moduleTitleMm(lesson.moduleId)}. ဤသင်ခန်းစာတွင် အသံဖိုင် မပါဝင်ပါ။
      </p>
    </article>
  );
}
