"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { WritingTask } from "@/lib/types";
import { checkWriting, type WritingReport } from "@/lib/core/writing";
import { writingTasks } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, ButtonLink, Card, KeyValueTable, LevelBadge, buttonClass } from "./ui";

const STATUS_ICON = { pass: "✓", warn: "!", fail: "✕" } as const;
const STATUS_CLASS = {
  pass: "text-emerald-600 dark:text-emerald-400",
  warn: "text-amber-600 dark:text-amber-400",
  fail: "text-rose-600 dark:text-rose-400",
} as const;

function countWords(text: string): number {
  return (text.match(/[A-Za-z][A-Za-z'’-]*/g) ?? []).length;
}

export default function WritingView({ task }: { task: WritingTask }) {
  const { state, actions } = useApp();
  const record = state.writing.find((item) => item.taskId === task.id);
  const [text, setText] = useState(record?.text ?? "");
  const [report, setReport] = useState<WritingReport | null>(null);
  const [showSample, setShowSample] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(() => task.checklist.map(() => false));
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    if (record?.text && !text) setText(record.text);
    // Only seed once from storage when the draft is empty.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record?.text]);

  const index = writingTasks.findIndex((item) => item.id === task.id);
  const next = writingTasks[index + 1];
  const words = countWords(text);

  const analyse = () => {
    const result = checkWriting(text, {
      wordTarget: task.wordTarget,
      formal: /email|formal|report|letter/i.test(task.kind),
      minParagraphs: /essay|paragraph|report/i.test(task.kind) ? 3 : 2,
    });
    setReport(result);
    if (text.trim()) {
      actions.saveWriting({
        taskId: task.id,
        text,
        words: result.words,
        score: result.score,
        scoreMax: result.scoreMax,
      });
      setSavedFlash(true);
      window.setTimeout(() => setSavedFlash(false), 2500);
    }
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/writing" className="hover:underline">
          စာရေးသားမှု
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{task.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={task.level} />
          <Badge tone="slate">{task.kind}</Badge>
          <Badge tone="brand">
            စကားလုံး {task.wordTarget[0]}–{task.wordTarget[1]}
          </Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{task.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{task.titleMm}</p>
        <p className="mm mt-3 text-sm leading-7 text-ink-800 dark:text-ink-100">{task.promptMm}</p>
        <p className="mt-2 rounded-xl bg-ink-50 px-3 py-2 text-sm leading-7 text-ink-700 dark:bg-ink-800/60 dark:text-ink-200">
          {task.promptEn}
        </p>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စစ်ဆေးစရာ စာရင်း</h2>
          <ul className="mm mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-ink-600 dark:text-ink-300">
            {task.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-5 lg:col-span-2">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အကဲဖြတ် စံနှုန်း (rubric)</h2>
          <KeyValueTable
            headers={["စံနှုန်း", "အဆင့် ဖော်ပြချက်"]}
            rows={task.rubric.map((item) => [item.criterion, item.bands.join(" / ")])}
          />
          <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
            ဤ rubric သည် ကိုယ်တိုင် ပြန်လည် သုံးသပ်ရန် ဖြစ်သည်။ ပလက်ဖောင်းသည် ဤ rubric အပေါ် အခြေခံ၍
            IELTS band သို့မဟုတ် AI အဆင့် အမှတ် မပေးပါ။
          </p>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">သင့်စာကို ရေးပါ</h2>
          <span className="mm text-xs text-ink-500 dark:text-ink-400">
            {words} လုံး / သတ်မှတ် {task.wordTarget[0]}–{task.wordTarget[1]}
          </span>
        </div>
        <textarea
          rows={10}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setSavedFlash(false);
          }}
          placeholder="ဤနေရာတွင် ရေးပါ…"
          className="mt-2 w-full rounded-xl border border-ink-300 bg-white px-3 py-2 text-sm leading-7 text-ink-900 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" onClick={analyse} disabled={!text.trim()} className={buttonClass("primary")}>
            စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာ
          </button>
          <button
            type="button"
            onClick={() => setShowSample((value) => !value)}
            className={buttonClass("secondary")}
          >
            {showSample ? "စံပြအဖြေ ဖျောက်" : "စံပြအဖြေ ကြည့်"}
          </button>
          {savedFlash ? <span className="mm text-xs text-emerald-600 dark:text-emerald-400">မူကြမ်း သိမ်းပြီး</span> : null}
        </div>
        <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
          ခွဲခြမ်းစိတ်ဖြာမှုသည် စကားလုံးအရေအတွက်၊ စာပိုဒ်၊ ဝါကျအရှည်၊ ဆက်စပ်စကားလုံး စသည့် ရေတွက်နိုင်သော
          အချက်များကိုသာ စစ်ဆေးသည်။ အကြောင်းအရာ အရည်အသွေးကို AI ဖြင့် အကဲဖြတ်ခြင်း မဟုတ်ပါ။
        </p>
      </Card>

      {report ? (
        <Card className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ခွဲခြမ်းစိတ်ဖြာမှု ရလဒ်</h2>
            <Badge tone={report.score / report.scoreMax >= 0.7 ? "green" : "amber"}>
              {report.score}/{report.scoreMax} အချက်
            </Badge>
          </div>
          <div className="mm mt-2 grid grid-cols-2 gap-2 text-xs text-ink-600 dark:text-ink-300 sm:grid-cols-4">
            <p>စကားလုံး — {report.words}</p>
            <p>ဝါကျ — {report.sentences}</p>
            <p>စာပိုဒ် — {report.paragraphs}</p>
            <p>ပျမ်းမျှ ဝါကျအရှည် — {report.avgSentenceLength.toFixed(1)}</p>
          </div>
          <ul className="mt-3 space-y-2">
            {report.checks.map((check) => (
              <li key={check.id} className="flex items-start gap-2 text-sm">
                <span className={`mt-0.5 w-4 shrink-0 font-bold ${STATUS_CLASS[check.status]}`} aria-hidden="true">
                  {STATUS_ICON[check.status]}
                </span>
                <span>
                  <span className="mm font-medium text-ink-900 dark:text-white">{check.label}</span>
                  <span className="mm block text-xs leading-6 text-ink-500 dark:text-ink-400">{check.detail}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mm mt-3 rounded-lg bg-ink-50 px-3 py-2 text-[11px] leading-5 text-ink-500 dark:bg-ink-800/60 dark:text-ink-400">
            {report.disclaimer}
          </p>
        </Card>
      ) : null}

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ကိုယ်တိုင် ပြန်လည် သုံးသပ်ရန်</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          စာရေးပြီးနောက် အောက်ပါတို့ကို ကိုယ်တိုင် စစ်ဆေးပါ။ အမှန်ခြစ်မှုကို မှတ်တမ်း မတင်ပါ။
        </p>
        <ul className="mt-2 space-y-1.5">
          {task.checklist.map((item, checklistIndex) => (
            <li key={item}>
              <label className="mm flex cursor-pointer items-start gap-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                <input
                  type="checkbox"
                  checked={checks[checklistIndex] ?? false}
                  onChange={(event) =>
                    setChecks((list) =>
                      list.map((value, position) => (position === checklistIndex ? event.target.checked : value)),
                    )
                  }
                  className="mt-1 h-4 w-4 rounded border-ink-300 text-brand-600"
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </Card>

      {showSample ? (
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စံပြအဖြေ</h2>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
            ကိုယ်တိုင် ရေးပြီးမှ နှိုင်းယှဉ်ပါ။ ဤအဖြေသည် စံနမူနာ တစ်ခုသာ ဖြစ်ပြီး တစ်ခုတည်းသော
            မှန်ကန်သော အဖြေ မဟုတ်ပါ။
          </p>
          <div className="mt-2 space-y-3">
            {task.sample.split("\n\n").map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="text-sm leading-7 text-ink-800 dark:text-ink-100">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      ) : null}

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အကြံပြုချက်များ</h2>
        <ul className="mm mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700 dark:text-ink-200">
          {task.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ButtonLink href="/writing" variant="secondary">
          ← တာဝန် စာရင်း
        </ButtonLink>
        {next ? (
          <ButtonLink href={`/writing/${next.id}`} variant="primary">
            {next.title} →
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
