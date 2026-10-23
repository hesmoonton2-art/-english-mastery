"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { IeltsWritingTask } from "@/content/ielts";
import { checkWriting, type WritingReport } from "@/lib/core/writing";
import { IELTS_DISCLAIMER } from "@/lib/core/band";
import { useApp } from "@/lib/store";
import { Badge, ButtonLink, Card, buttonClass } from "./ui";

export default function IeltsWritingView({ task }: { task: IeltsWritingTask }) {
  const { state, actions } = useApp();
  const record = state.writing.find((item) => item.taskId === task.id);
  const [text, setText] = useState(record?.text ?? "");
  const [report, setReport] = useState<WritingReport | null>(null);
  const [showModel, setShowModel] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() => task.checklist.map(() => false));

  useEffect(() => {
    if (record?.text && !text) setText(record.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record?.text]);

  const words = (text.match(/[A-Za-z][A-Za-z'’-]*/g) ?? []).length;

  const analyse = () => {
    const result = checkWriting(text, {
      wordTarget: task.wordTarget,
      formal: true,
      minParagraphs: 4,
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
    }
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/ielts" className="hover:underline">
          IELTS လေ့ကျင့်ခန်း
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{task.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="violet">Writing</Badge>
          <Badge tone="amber">⏱ {task.minutes} မိနစ်</Badge>
          <Badge tone="brand">
            စကားလုံး {task.wordTarget[0]}–{task.wordTarget[1]}
          </Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{task.title}</h1>
        <p className="mm mt-2 text-sm leading-7 text-ink-800 dark:text-ink-100">{task.promptMm}</p>
        <p className="mt-2 rounded-xl bg-ink-50 px-3 py-2 text-sm leading-7 text-ink-700 dark:bg-ink-800/60 dark:text-ink-200">
          {task.promptEn}
        </p>
        {task.material?.length ? (
          <pre className="mt-3 overflow-x-auto rounded-xl border border-ink-200 bg-ink-50 p-3 text-xs leading-6 text-ink-700 dark:border-ink-800 dark:bg-ink-950 dark:text-ink-200">
            {task.material.join("\n")}
          </pre>
        ) : null}
        <p className="mm mt-3 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-5 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာမှုသာ ဖြစ်သည်။ IELTS band မပေးပါ။ {IELTS_DISCLAIMER}
        </p>
      </Card>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">သင့်အဖြေ</h2>
          <span className="mm text-xs text-ink-500 dark:text-ink-400">
            {words} လုံး / သတ်မှတ် {task.wordTarget[0]}–{task.wordTarget[1]}
          </span>
        </div>
        <textarea
          rows={12}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="ဤနေရာတွင် ရေးပါ…"
          className="mt-2 w-full rounded-xl border border-ink-300 bg-white px-3 py-2 text-sm leading-7 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" onClick={analyse} disabled={!text.trim()} className={buttonClass("primary")}>
            ခွဲခြမ်းစိတ်ဖြာ
          </button>
          <button type="button" onClick={() => setShowModel((value) => !value)} className={buttonClass("secondary")}>
            {showModel ? "စံပြအဖြေ ဖျောက်" : "စံပြအဖြေ ကြည့်"}
          </button>
        </div>
      </Card>

      {report ? (
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ခွဲခြမ်းစိတ်ဖြာမှု</h2>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
            {report.score}/{report.scoreMax} အချက် · {report.words} လုံး · စာပိုဒ် {report.paragraphs}
          </p>
          <ul className="mt-2 space-y-1.5">
            {report.checks.map((check) => (
              <li key={check.id} className="mm text-xs leading-6 text-ink-600 dark:text-ink-300">
                <span className="font-semibold text-ink-900 dark:text-white">{check.label} — </span>
                {check.detail}
              </li>
            ))}
          </ul>
          <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">{report.disclaimer}</p>
        </Card>
      ) : null}

      {showModel ? (
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စံပြအဖြေ</h2>
          <div className="mt-2 space-y-3">
            {task.modelAnswer.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-sm leading-7 text-ink-800 dark:text-ink-100">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      ) : null}

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စစ်ဆေးစရာ စာရင်း</h2>
        <ul className="mt-2 space-y-1.5">
          {task.checklist.map((item, index) => (
            <li key={item}>
              <label className="mm flex cursor-pointer items-start gap-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                <input
                  type="checkbox"
                  checked={checkedItems[index] ?? false}
                  onChange={(event) =>
                    setCheckedItems((list) =>
                      list.map((value, position) => (position === index ? event.target.checked : value)),
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

      <ButtonLink href="/ielts" variant="secondary">
        ← IELTS လေ့ကျင့်ခန်း စာရင်း
      </ButtonLink>
    </div>
  );
}
