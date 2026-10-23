"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SpeakingTask } from "@/lib/types";
import { speakingTasks } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, ButtonLink, Card, LevelBadge, ProgressBar, buttonClass } from "./ui";

export default function SpeakingView({ task }: { task: SpeakingTask }) {
  const { state, actions } = useApp();
  const [checks, setChecks] = useState<boolean[]>(() => task.prompts.map(() => false));
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(() => task.prompts.map(() => false));
  const [savedMessage, setSavedMessage] = useState("");
  const record = state.speaking.find((item) => item.taskId === task.id);

  const index = speakingTasks.findIndex((item) => item.id === task.id);
  const next = speakingTasks[index + 1];
  const checked = checks.filter(Boolean).length;

  useEffect(() => {
    setSavedMessage("");
  }, [task.id]);

  const submit = () => {
    actions.recordSpeaking({ taskId: task.id, checked, total: task.prompts.length });
    setSavedMessage("ကိုယ်တိုင် စစ်ဆေးမှု မှတ်တမ်း တင်ပြီးပါပြီ။");
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/speaking" className="hover:underline">
          ပြောဆိုမှု
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{task.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={task.level} />
          <Badge tone="amber">စာသားအခြေခံ — မိုက်ခရိုဖုန်း မပါ</Badge>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{task.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{task.titleMm}</p>
        <div className="mm mt-3 space-y-2 text-sm leading-7 text-ink-800 dark:text-ink-100">
          <p>
            <span className="font-semibold">အခြေအနေ — </span>
            {task.situationMm}
          </p>
          <p>
            <span className="font-semibold">ပန်းတိုင် — </span>
            {task.goalMm}
          </p>
        </div>
        <p className="mm mt-3 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          ဤပလက်ဖောင်းသည် သင့်အသံကို မှတ်တမ်းတင်ခြင်း၊ အသံထွက် အကဲဖြတ်ခြင်း သို့မဟုတ် AI ဖြင့် စကားပြော
          အကဲဖြတ်ခြင်း မပြုပါ။ ကိုယ်တိုင် ပြောကြည့်ပြီး စံပြအဖြေနှင့် နှိုင်းယှဉ်ရန် ဖြစ်သည်။
        </p>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အသုံးဝင်သော စကားစုများ</h2>
        <ul className="mt-2 divide-y divide-ink-100 dark:divide-ink-800">
          {task.usefulPhrases.map((phrase) => (
            <li key={phrase.en} className="py-2">
              <p className="text-sm font-medium text-ink-900 dark:text-white">{phrase.en}</p>
              <p className="mm text-xs text-ink-500 dark:text-ink-400">{phrase.mm}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ပြောဆိုရန် အခြေအနေများ</h2>
        <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
          မေးခွန်းတစ်ခုစီကို အသံထွက် ပြောကြည့်ပါ။ ထို့နောက် စံပြအဖြေကို ကြည့်ပြီး ကိုယ်တိုင် နှိုင်းယှဉ်ပါ။
        </p>
        <ol className="mt-3 space-y-4">
          {task.prompts.map((prompt, promptIndex) => (
            <li key={prompt.en} className="rounded-xl border border-ink-200 p-3 dark:border-ink-800">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{prompt.en}</p>
              <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">{prompt.mm}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleAnswers((list) =>
                      list.map((value, position) => (position === promptIndex ? !value : value)),
                    )
                  }
                  className={buttonClass("secondary", "!px-2 !py-1 !text-[11px]")}
                >
                  {visibleAnswers[promptIndex] ? "စံပြအဖြေ ဖျောက်" : "စံပြအဖြေ ကြည့်"}
                </button>
                <label className="mm flex items-center gap-2 text-xs text-ink-600 dark:text-ink-300">
                  <input
                    type="checkbox"
                    checked={checks[promptIndex] ?? false}
                    onChange={(event) =>
                      setChecks((list) =>
                        list.map((value, position) => (position === promptIndex ? event.target.checked : value)),
                      )
                    }
                    className="h-4 w-4 rounded border-ink-300 text-brand-600"
                  />
                  ပြောနိုင်ပြီ
                </label>
              </div>
              {visibleAnswers[promptIndex] ? (
                <p className="mm mt-2 rounded-lg bg-ink-50 px-3 py-2 text-xs leading-6 text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
                  {prompt.modelAnswer}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ကိုယ်တိုင် စစ်ဆေးမှု</h2>
        <div className="mm mt-1 flex items-center justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>ပြောနိုင်ပြီ ဟု မှတ်ထားသည်</span>
          <span>
            {checked}/{task.prompts.length}
          </span>
        </div>
        <ProgressBar value={(checked / Math.max(1, task.prompts.length)) * 100} className="mt-1" tone="green" />
        <button type="button" onClick={submit} className={buttonClass("primary", "mt-3")}>
          ကိုယ်တိုင် စစ်ဆေးမှု သိမ်းမည်
        </button>
        {savedMessage ? (
          <p className="mm mt-2 text-xs text-emerald-600 dark:text-emerald-400">{savedMessage}</p>
        ) : null}
        <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
          ဤမှတ်တမ်းသည် ကိုယ်တိုင် စစ်ဆေးမှုသာ ဖြစ်ပြီး အသံ အရည်အသွေး အကဲဖြတ်ချက် မဟုတ်ပါ။
          {record ? ` ယခင် မှတ်တမ်း — ${record.checked}/${record.total}။` : ""}
        </p>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <ButtonLink href="/speaking" variant="secondary">
          ← လေ့ကျင့်ခန်း စာရင်း
        </ButtonLink>
        {next ? (
          <ButtonLink href={`/speaking/${next.id}`} variant="primary">
            {next.title} →
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
