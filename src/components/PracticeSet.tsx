"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Exercise } from "@/lib/types";
import { gradeExercise } from "@/lib/core/grading";
import {
  buildSummary,
  isEmptyAnswer,
  type AnswerInput,
  type AttemptSummary,
} from "@/lib/core/summary";
import { Badge, ButtonLink, Card, ProgressBar, buttonClass } from "./ui";

type Props = {
  exercises: Exercise[];
  mode?: "practice" | "exam";
  onFinish?: (summary: AttemptSummary) => void;
  finishLabel?: string;
  timeLimitSec?: number;
};

function OrderInput({
  tokens,
  value,
  onChange,
}: {
  tokens: string[];
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const budget: Record<string, number> = {};
  for (const token of value) budget[token] = (budget[token] ?? 0) + 1;
  const pool = tokens.filter((token) => {
    if ((budget[token] ?? 0) > 0) {
      budget[token] -= 1;
      return false;
    }
    return true;
  });

  return (
    <div>
      <div className="min-h-12 rounded-xl border-2 border-dashed border-ink-300 p-2 dark:border-ink-700">
        {value.length === 0 ? (
          <p className="mm px-2 py-1 text-sm text-ink-400">စကားလုံးများကို နှိပ်၍ ဝါကျ ဖွဲ့ပါ…</p>
        ) : (
          <ol className="flex flex-wrap gap-2">
            {value.map((token, index) => (
              <li key={`${token}-${index}`}>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, position) => position !== index))}
                  className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
                  aria-label={`${token} ကို ဖယ်ရှားရန်`}
                >
                  {index + 1}. {token}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {pool.map((token, index) => (
          <button
            key={`${token}-pool-${index}`}
            type="button"
            onClick={() => onChange([...value, token])}
            className="mm rounded-lg border border-ink-300 bg-white px-3 py-1.5 text-sm text-ink-800 hover:border-brand-500 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
          >
            {token}
          </button>
        ))}
        {value.length > 0 ? (
          <button
            type="button"
            onClick={() => onChange([])}
            className="mm rounded-lg px-2 py-1.5 text-xs font-semibold text-rose-600 underline"
          >
            အားလုံး ရှင်းရန်
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default function PracticeSet({
  exercises,
  mode = "practice",
  onFinish,
  finishLabel = "အဖြေ စစ်ဆေးမည်",
  timeLimitSec,
}: Props) {
  const [responses, setResponses] = useState<AnswerInput[]>(() => exercises.map(() => null));
  const [revealed, setRevealed] = useState<boolean[]>(() => exercises.map(() => false));
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [summary, setSummary] = useState<AttemptSummary | null>(null);
  const [remaining, setRemaining] = useState<number>(timeLimitSec ?? 0);
  const reported = useRef(false);
  const finishRef = useRef<() => void>(() => {});

  useEffect(() => {
    setResponses(exercises.map(() => null));
    setRevealed(exercises.map(() => false));
    setIndex(0);
    setFinished(false);
    setSummary(null);
    setRemaining(timeLimitSec ?? 0);
    reported.current = false;
  }, [exercises, timeLimitSec]);

  const finish = useCallback(() => {
    const result = buildSummary(exercises, responses);
    setSummary(result);
    setFinished(true);
    setRevealed(exercises.map(() => true));
    if (!reported.current) {
      reported.current = true;
      onFinish?.(result);
    }
  }, [exercises, responses, onFinish]);

  finishRef.current = finish;

  useEffect(() => {
    if (!timeLimitSec || finished) return;
    const timer = window.setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timeLimitSec, finished]);

  useEffect(() => {
    if (!timeLimitSec || finished) return;
    if (remaining === 0) finishRef.current();
  }, [remaining, timeLimitSec, finished]);

  if (exercises.length === 0) {
    return (
      <Card className="p-6">
        <p className="mm text-sm text-ink-600 dark:text-ink-300">
          ဤရွေးချယ်မှုအတွက် လေ့ကျင့်ခန်း မရှိပါ။ အခြား အကြောင်းအရာ ရွေးပါ။
        </p>
      </Card>
    );
  }

  const current = exercises[index];
  const currentResponse = responses[index];
  const currentGrade = gradeExercise(current, currentResponse);
  const answeredCount = responses.filter((response) => !isEmptyAnswer(response)).length;

  const setResponse = (value: AnswerInput) => {
    setResponses((list) => list.map((item, position) => (position === index ? value : item)));
  };

  const revealCurrent = () => {
    setRevealed((list) => list.map((item, position) => (position === index ? true : item)));
  };

  const reset = () => {
    setResponses(exercises.map(() => null));
    setRevealed(exercises.map(() => false));
    setIndex(0);
    setFinished(false);
    setSummary(null);
    setRemaining(timeLimitSec ?? 0);
    reported.current = false;
  };

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  if (finished && summary) {
    const percent = summary.total === 0 ? 0 : Math.round((summary.correct / summary.total) * 100);
    return (
      <div className="space-y-4">
        <Card className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mm text-xs font-semibold uppercase tracking-wide text-ink-500">ရလဒ်</p>
              <p className="mt-1 text-3xl font-bold text-ink-900 dark:text-white">
                {summary.correct} / {summary.total}
                <span className="ml-2 text-base font-semibold text-ink-500">{percent}%</span>
              </p>
            </div>
            <Badge tone={percent >= 80 ? "green" : percent >= 60 ? "amber" : "rose"}>
              {percent >= 80
                ? "ကျွမ်းကျင်မှု သတ်မှတ်ချက် ပြည့်မီ (၈၀%+)"
                : percent >= 60
                  ? "ဆက်လေ့ကျင့်ရန် လိုသည်"
                  : "သင်ခန်းစာကို ပြန်ဖတ်ပါ"}
            </Badge>
          </div>
          <ProgressBar value={percent} className="mt-3" tone={percent >= 80 ? "green" : "brand"} />
          <p className="mm mt-3 text-sm text-ink-600 dark:text-ink-300">
            ဤရမှတ်သည် ယခု ဖြေခဲ့သည့် မေးခွန်းများအပေါ် အခြေခံသည်။ ဗဟုသုတ ကြည့်ရှုမှုတစ်ခုတည်းဖြင့်
            ကျွမ်းကျင်မှု မသတ်မှတ်ပါ။
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={reset} className={buttonClass("secondary")}>
              ပြန်လည် လေ့ကျင့်မည်
            </button>
            {percent >= 80 ? (
              <ButtonLink href="/review" variant="ghost">
                စကားလုံးများ ပြန်လည်ကျက်မည်
              </ButtonLink>
            ) : (
              <ButtonLink href="/progress" variant="ghost">
                အားနည်းချက် ကြည့်ရန်
              </ButtonLink>
            )}
          </div>
        </Card>

        <Card className="divide-y divide-ink-100 dark:divide-ink-800">
          <h3 className="mm px-5 py-3 text-sm font-bold text-ink-900 dark:text-white">
            အဖြေ အားလုံး ရှင်းလင်းချက်နှင့်တကွ
          </h3>
          {exercises.map((exercise, position) => {
            const result = gradeExercise(exercise, responses[position]);
            return (
              <div key={exercise.id} className="px-5 py-4">
                <div className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                      result.correct ? "bg-emerald-600" : "bg-rose-600"
                    }`}
                    aria-hidden="true"
                  >
                    {result.correct ? "✓" : "✕"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-ink-900 dark:text-white">{exercise.prompt}</p>
                    <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
                      သင့်အဖြေ — <span className="font-semibold text-ink-700 dark:text-ink-200">{result.given || "မဖြေရသေးပါ"}</span>
                      {" · "}မှန်ကန်သောအဖြေ —{" "}
                      <span className="font-semibold text-emerald-700 dark:text-emerald-300">{result.expected}</span>
                    </p>
                    <p className="mm mt-2 rounded-lg bg-ink-50 px-3 py-2 text-xs leading-6 text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
                      {exercise.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    );
  }

  return (
    <Card className="p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="mm text-xs font-semibold text-ink-500 dark:text-ink-400">
          မေးခွန်း {index + 1} / {exercises.length} · ဖြေပြီး {answeredCount}
        </p>
        <div className="flex items-center gap-2">
          {timeLimitSec ? (
            <Badge tone={remaining <= 60 ? "rose" : "slate"}>
              ⏱ {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </Badge>
          ) : null}
          <Badge tone="brand">{current.topic}</Badge>
        </div>
      </div>
      <ProgressBar value={((index + 1) / exercises.length) * 100} className="mt-2" />

      <div className="mt-4">
        {current.promptMm ? (
          <p className="mm text-xs text-ink-500 dark:text-ink-400">{current.promptMm}</p>
        ) : null}
        <p className="mt-1 text-base font-semibold leading-7 text-ink-900 dark:text-white">
          {current.prompt}
        </p>

        <div className="mt-3">
          {current.type === "mcq" ? (
            <ul className="space-y-2">
              {current.options.map((option, optionIndex) => {
                const selected = currentResponse === optionIndex;
                const showCorrect =
                  revealed[index] && current.type === "mcq" && optionIndex === current.answer;
                const showWrong = revealed[index] && selected && optionIndex !== current.answer;
                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => setResponse(optionIndex)}
                      disabled={revealed[index]}
                      aria-pressed={selected}
                      className={`mm flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                        showCorrect
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                          : showWrong
                            ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20"
                            : selected
                              ? "border-brand-500 bg-brand-50 dark:bg-brand-900/30"
                              : "border-ink-200 hover:border-brand-400 dark:border-ink-700"
                      }`}
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold text-ink-500 dark:text-ink-300">
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span className="text-ink-800 dark:text-ink-100">{option}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}

          {current.type === "order" ? (
            <OrderInput
              tokens={current.tokens}
              value={Array.isArray(currentResponse) ? currentResponse : []}
              onChange={(next) => setResponse(next)}
            />
          ) : null}

          {current.type === "fill" || current.type === "correct" ? (
            <input
              type="text"
              value={typeof currentResponse === "string" ? currentResponse : ""}
              onChange={(event) => setResponse(event.target.value)}
              disabled={revealed[index]}
              placeholder="သင့်အဖြေ ရိုက်ထည့်ပါ"
              aria-label="အဖြေ"
              className="mm w-full rounded-xl border border-ink-300 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
            />
          ) : null}

          {current.type === "translate" ? (
            <textarea
              rows={3}
              value={typeof currentResponse === "string" ? currentResponse : ""}
              onChange={(event) => setResponse(event.target.value)}
              disabled={revealed[index]}
              placeholder="အင်္ဂလိပ်လို ဘာသာပြန်ပါ"
              aria-label="ဘာသာပြန် အဖြေ"
              className="mm w-full rounded-xl border border-ink-300 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
            />
          ) : null}
        </div>

        {revealed[index] ? (
          <div
            className={`mm mt-3 rounded-xl border px-3 py-2 text-sm ${
              currentGrade.correct
                ? "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200"
                : "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-900/20 dark:text-rose-200"
            }`}
            role="status"
          >
            <p className="font-semibold">
              {currentGrade.correct ? "မှန်ပါသည် ✓" : "မမှန်ပါ ✕ — မှန်ကန်သောအဖြေ: " + currentGrade.expected}
            </p>
            <p className="mt-1 leading-6">{current.explanation}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {mode === "practice" ? (
          <>
            <button
              type="button"
              onClick={revealCurrent}
              disabled={revealed[index] || isEmptyAnswer(currentResponse)}
              className={buttonClass("primary")}
            >
              အဖြေ စစ်ဆေးမည်
            </button>
            {revealed[index] && index < exercises.length - 1 ? (
              <button type="button" onClick={() => setIndex(index + 1)} className={buttonClass("secondary")}>
                နောက်မေးခွန်း →
              </button>
            ) : null}
            {revealed[index] && index === exercises.length - 1 ? (
              <button type="button" onClick={finish} className={buttonClass("primary")}>
                {finishLabel} (ရလဒ် ကြည့်ရန်)
              </button>
            ) : null}
            {index > 0 ? (
              <button
                type="button"
                onClick={() => setIndex(index - 1)}
                className={buttonClass("ghost", "ml-auto")}
              >
                ← ယခင်
              </button>
            ) : null}
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setIndex(Math.max(0, index - 1))}
              disabled={index === 0}
              className={buttonClass("secondary")}
            >
              ← ယခင်
            </button>
            {index < exercises.length - 1 ? (
              <button type="button" onClick={() => setIndex(index + 1)} className={buttonClass("primary")}>
                နောက်မေးခွန်း →
              </button>
            ) : null}
            <button type="button" onClick={finish} className={buttonClass("primary", "ml-auto")}>
              {finishLabel}
            </button>
            {answeredCount < exercises.length ? (
              <p className="mm w-full text-xs text-amber-600 dark:text-amber-300">
                မေးခွန်း {exercises.length - answeredCount} ခု မဖြေရသေးပါ — စစ်ဆေးပါက မဖြေသည့် မေးခွန်းများကို
                မှားသည်ဟု သတ်မှတ်မည်။
              </p>
            ) : null}
          </>
        )}
      </div>
    </Card>
  );
}
