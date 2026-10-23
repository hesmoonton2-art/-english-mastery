"use client";

import Link from "next/link";
import { useState } from "react";
import type { IeltsTask } from "@/lib/types";
import type { AttemptSummary } from "@/lib/core/summary";
import { IELTS_DISCLAIMER, estimateBand, formatBand } from "@/lib/core/band";
import { useApp } from "@/lib/store";
import PracticeSet from "./PracticeSet";
import { Badge, ButtonLink, Card, buttonClass } from "./ui";

export default function IeltsTaskView({ task }: { task: IeltsTask }) {
  const { actions } = useApp();
  const [started, setStarted] = useState(false);
  const [summary, setSummary] = useState<AttemptSummary | null>(null);

  const section = task.section === "Listening" ? "Listening" : "Reading";
  const band = summary ? estimateBand(section, summary.correct, summary.total) : null;

  const record = (result: AttemptSummary) => {
    setSummary(result);
    actions.recordAttempt({
      kind: "ielts",
      refId: task.id,
      refTitle: task.title,
      correct: result.correct,
      total: result.total,
      topics: result.topics,
      wrong: result.wrong,
    });
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
          <Badge tone="violet">{task.section}</Badge>
          <Badge tone="slate">မေးခွန်း {task.exercises.length}</Badge>
          <Badge tone="amber">⏱ {task.minutes} မိနစ်</Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{task.title}</h1>
        <p className="mm mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{task.instructionsMm}</p>
        <p className="mm mt-3 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          {IELTS_DISCLAIMER} ဤလေ့ကျင့်ခန်းသည် မူရင်း ရေးသားထားသော ပစ္စည်းများကို အသုံးပြုထားပြီး တရားဝင်
          စာမေးပွဲ မဟုတ်ပါ။
        </p>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">
          {task.section === "Listening" ? "Script" : "စာသား"}
        </h2>
        <div className="mt-2 space-y-2">
          {task.material.map((line, index) => (
            <p
              key={index}
              className={`text-sm leading-7 text-ink-800 dark:text-ink-100 ${
                line.includes("|") ? "overflow-x-auto whitespace-pre font-mono text-xs" : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
        {task.section === "Listening" ? (
          <p className="mm mt-3 text-[11px] text-ink-500 dark:text-ink-400">
            အသံဖိုင် မပါပါ — script ကို ဖတ်ပြီး နားထောင်မှု လေ့ကျင့်ပါ။
          </p>
        ) : null}
      </Card>

      {!started ? (
        <Card className="p-5">
          <button type="button" onClick={() => setStarted(true)} className={buttonClass("primary")}>
            မေးခွန်းများ စတင်ဖြေဆိုမည်
          </button>
        </Card>
      ) : (
        <PracticeSet
          exercises={task.exercises}
          mode="exam"
          timeLimitSec={task.minutes * 60}
          finishLabel="အဖြေများ စစ်ဆေးမည်"
          onFinish={record}
        />
      )}

      {band && summary ? (
        <Card className="border-violet-300 p-5 dark:border-violet-800">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ခန့်မှန်း band</h2>
          <p className="mt-1 text-3xl font-bold text-violet-700 dark:text-violet-300">{formatBand(band)}</p>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
            {section} — မှန် {summary.correct}/{summary.total}
          </p>
          <p className="mm mt-3 rounded-lg bg-ink-50 px-3 py-2 text-[11px] leading-5 text-ink-500 dark:bg-ink-800/60 dark:text-ink-400">
            {IELTS_DISCLAIMER}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <ButtonLink href="/ielts" variant="secondary">
              အခြား လေ့ကျင့်ခန်း
            </ButtonLink>
            <ButtonLink href="/progress" variant="ghost">
              တိုးတက်မှု ကြည့်ရန် →
            </ButtonLink>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
