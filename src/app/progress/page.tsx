"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CEFR_LEVELS, moduleTitleMm } from "@/content/meta";
import { wordBank } from "@/content";
import { formatDate } from "@/lib/core/dates";
import type { AttemptRecord } from "@/lib/core/stats";
import { exportStateJson } from "@/lib/export";
import { useApp } from "@/lib/store";
import { useStats } from "@/lib/hooks";
import {
  Badge,
  ButtonLink,
  Card,
  Empty,
  PageHeader,
  ProgressBar,
  Stat,
  buttonClass,
} from "@/components/ui";

const KIND_LABEL: Record<AttemptRecord["kind"], string> = {
  lesson: "သင်ခန်းစာ",
  quiz: "စာမေးပွဲ",
  reading: "ဖတ်ရှုမှု",
  listening: "နားထောင်မှု",
  ielts: "IELTS",
  assessment: "လေ့ကျင့်ခန်း",
};

function retryHref(attempt: AttemptRecord): string {
  switch (attempt.kind) {
    case "lesson":
      return `/lessons/${attempt.refId}`;
    case "quiz":
      return `/quizzes/${attempt.refId}`;
    case "reading":
      return `/reading/${attempt.refId}`;
    case "listening":
      return `/listening/${attempt.refId}`;
    case "ielts":
      return `/ielts/${attempt.refId}`;
    default:
      return "/practice";
  }
}

export default function ProgressPage() {
  const { state, actions, today } = useApp();
  const stats = useStats();
  const [importText, setImportText] = useState("");
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const topicRows = useMemo(() => {
    const map: Record<string, { correct: number; total: number }> = {};
    for (const attempt of state.attempts) {
      for (const [topic, value] of Object.entries(attempt.topics ?? {})) {
        const row = (map[topic] ??= { correct: 0, total: 0 });
        row.correct += value.correct;
        row.total += value.total;
      }
    }
    return Object.entries(map)
      .map(([topic, value]) => ({
        topic,
        ...value,
        accuracy: value.total ? Math.round((value.correct / value.total) * 100) : 0,
      }))
      .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);
  }, [state.attempts]);

  const wrongItems = useMemo(
    () =>
      state.attempts.flatMap((attempt) =>
        (attempt.wrong ?? []).map((wrong, index) => ({
          id: `${attempt.id}-${index}`,
          at: attempt.at,
          refTitle: attempt.refTitle,
          kind: attempt.kind,
          href: retryHref(attempt),
          ...wrong,
        })),
      ),
    [state.attempts],
  );

  const importData = () => {
    const result = actions.importState(importText);
    setMessage({ ok: result.ok, text: result.message });
    if (result.ok) setImportText("");
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="တိုးတက်မှု"
        titleMm="Progress & data"
        description="သင့်လုပ်ဆောင်ချက်မှ တွက်ချက်ထားသော အချက်အလက်များ၊ မှားခဲ့သော မေးခွန်းများ၊ အားနည်းသော အကြောင်းအရာများနှင့် ဒေတာ စီမံခန့်ခွဲမှု။"
        actions={<Badge tone="slate">ဒေတာ — ဤဘရောက်ဇာတွင်သာ</Badge>}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="ပြီးစီးသော သင်ခန်းစာ" value={`${stats.lessonsCompleted}/${stats.totalLessons}`} hint={`${stats.completionPercent}%`} />
        <Stat label="ဆက်တိုက် ရက်" value={`${stats.currentStreak} ရက်`} hint={`အရှည်ဆုံး ${stats.longestStreak}`} />
        <Stat label="မေးခွန်း" value={stats.questionsAnswered} hint={`မှန် ${stats.correctAnswers}`} />
        <Stat label="လေ့လာခဲ့သော ရက်" value={stats.studyDays} hint={`ရန် ကျန် ${stats.dueReviews} စကားလုံး`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">Module လိုက် တိုးတက်မှု</h2>
          <ul className="mt-3 space-y-2">
            {stats.byModule.map((module) => (
              <li key={module.moduleId}>
                <div className="flex items-center justify-between text-xs">
                  <span className="mm text-ink-700 dark:text-ink-200">
                    {module.moduleId}. {moduleTitleMm(module.moduleId)}
                  </span>
                  <span className="text-ink-500 dark:text-ink-400">
                    {module.completed}/{module.total}
                  </span>
                </div>
                <ProgressBar value={(module.completed / Math.max(1, module.total)) * 100} className="mt-1" />
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အဆင့် လိုက် တိုးတက်မှု</h2>
          <ul className="mt-3 space-y-2">
            {CEFR_LEVELS.map((level) => {
              const data = stats.byLevel.find((item) => item.level === level.level);
              const total = data?.total ?? 0;
              const completed = data?.completed ?? 0;
              return (
                <li key={level.level}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="mm text-ink-700 dark:text-ink-200">
                      {level.level} — {level.labelMm}
                    </span>
                    <span className="text-ink-500 dark:text-ink-400">
                      {total === 0 ? "သင်ခန်းစာ မရှိ" : `${completed}/${total}`}
                    </span>
                  </div>
                  <ProgressBar value={total ? (completed / total) * 100 : 0} className="mt-1" />
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အကြောင်းအရာ အလိုက် တိကျမှု</h2>
        {topicRows.length === 0 ? (
          <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
            မေးခွန်း ဖြေဆိုပြီးပါက ဤနေရာတွင် အကြောင်းအရာ အလိုက် တိကျမှု ပေါ်လာမည်။
          </p>
        ) : (
          <div className="scrollbar-thin mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400">
                <tr>
                  <th className="px-2 py-2">အကြောင်းအရာ</th>
                  <th className="px-2 py-2">မှန်/စုစုပေါင်း</th>
                  <th className="px-2 py-2">တိကျမှု</th>
                  <th className="px-2 py-2" />
                </tr>
              </thead>
              <tbody>
                {topicRows.slice(0, 25).map((row) => (
                  <tr key={row.topic} className="border-t border-ink-100 dark:border-ink-800">
                    <td className="mm px-2 py-2 text-ink-800 dark:text-ink-100">{row.topic}</td>
                    <td className="px-2 py-2 text-xs text-ink-500 dark:text-ink-400">
                      {row.correct}/{row.total}
                    </td>
                    <td className="px-2 py-2">
                      <span
                        className={`mm text-xs font-semibold ${
                          row.accuracy >= 80
                            ? "text-emerald-600 dark:text-emerald-400"
                            : row.accuracy >= 60
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {row.accuracy}%
                      </span>
                    </td>
                    <td className="px-2 py-2 text-right">
                      <Link
                        href={`/practice?topic=${encodeURIComponent(row.topic)}`}
                        className="mm text-xs text-brand-700 underline dark:text-brand-300"
                      >
                        လေ့ကျင့်
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">မှားခဲ့သော မေးခွန်းများ</h2>
          <Badge tone="rose">{wrongItems.length} ခု</Badge>
        </div>
        {wrongItems.length === 0 ? (
          <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
            မှတ်တမ်းတင်ထားသော အမှား မရှိသေးပါ။ လေ့ကျင့်ခန်း ဖြေဆိုပြီးပါက ဤနေရာတွင် ပြန်ကြည့်နိုင်မည်။
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {wrongItems.slice(0, 40).map((item) => (
              <li key={item.id} className="rounded-xl border border-ink-200 dark:border-ink-800">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  aria-expanded={expanded === item.id}
                  className="flex w-full flex-wrap items-center gap-2 px-3 py-2 text-left"
                >
                  <Badge tone="slate">{KIND_LABEL[item.kind]}</Badge>
                  <span className="mm min-w-0 flex-1 truncate text-sm text-ink-800 dark:text-ink-100">
                    {item.prompt}
                  </span>
                  <span className="mm text-[11px] text-ink-500 dark:text-ink-400">{formatDate(item.at)}</span>
                </button>
                {expanded === item.id ? (
                  <div className="mm border-t border-ink-100 px-3 py-2 text-xs leading-6 dark:border-ink-800">
                    <p className="text-rose-600 dark:text-rose-400">သင့်အဖြေ — {item.given}</p>
                    <p className="text-emerald-700 dark:text-emerald-300">မှန်ကန်သောအဖြေ — {item.expected}</p>
                    <p className="mt-1 text-ink-600 dark:text-ink-300">{item.explanation}</p>
                    <p className="mt-1 text-ink-500 dark:text-ink-400">
                      မှ — {item.refTitle} · {item.topic}
                    </p>
                    <Link href={item.href} className="mt-1 inline-block text-brand-700 underline dark:text-brand-300">
                      ပြန်လည် လေ့ကျင့်ရန် →
                    </Link>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">မကြာသေးမီ ဖြေဆိုမှုများ</h2>
        {state.attempts.length === 0 ? (
          <Empty title="ဖြေဆိုမှု မရှိသေးပါ">သင်ခန်းစာ လေ့ကျင့်ခန်း သို့မဟုတ် စာမေးပွဲ တစ်ခု စတင်ပါ။</Empty>
        ) : (
          <ul className="mt-2 divide-y divide-ink-100 dark:divide-ink-800">
            {state.attempts.slice(0, 15).map((attempt) => {
              const percent = attempt.total ? Math.round((attempt.correct / attempt.total) * 100) : 0;
              return (
                <li key={attempt.id} className="flex flex-wrap items-center gap-2 py-2">
                  <Badge tone="slate">{KIND_LABEL[attempt.kind]}</Badge>
                  <span className="mm min-w-0 flex-1 truncate text-sm text-ink-800 dark:text-ink-100">
                    {attempt.refTitle}
                  </span>
                  <span className="mm text-xs text-ink-500 dark:text-ink-400">{formatDate(attempt.at)}</span>
                  <span
                    className={`mm w-16 text-right text-xs font-semibold ${
                      percent >= 80 ? "text-emerald-600" : percent >= 60 ? "text-amber-600" : "text-rose-600"
                    }`}
                  >
                    {attempt.correct}/{attempt.total} · {percent}%
                  </span>
                  <Link href={retryHref(attempt)} className="mm text-xs text-brand-700 underline dark:text-brand-300">
                    ထပ်
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ပရိုဖိုင် နှင့် ပန်းတိုင်</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အမည် (မဖြစ်မနေ မဟုတ်)
            <input
              type="text"
              value={state.profile.name}
              onChange={(event) => actions.setProfile({ name: event.target.value })}
              placeholder="သင့်အမည်"
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            />
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            ရည်မှန်း အဆင့်
            <select
              value={state.profile.targetLevel}
              onChange={(event) => actions.setProfile({ targetLevel: event.target.value as typeof state.profile.targetLevel })}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              {CEFR_LEVELS.map((level) => (
                <option key={level.level} value={level.level}>
                  {level.level} — {level.labelMm}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            နေ့စဉ် ပန်းတိုင် (လုပ်ဆောင်ချက် အရေအတွက်)
            <input
              type="number"
              min={1}
              max={200}
              value={state.profile.dailyGoal}
              onChange={(event) =>
                actions.setProfile({ dailyGoal: Math.max(1, Math.min(200, Number(event.target.value) || 1)) })
              }
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            />
          </label>
        </div>
        <div className="mm mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-600 dark:text-ink-300">
          <span>အပြင်အဆင် —</span>
          <button
            type="button"
            onClick={() => actions.setTheme("light")}
            aria-pressed={state.theme === "light"}
            className={buttonClass(state.theme === "light" ? "primary" : "secondary", "!py-1 !text-xs")}
          >
            အလင်း
          </button>
          <button
            type="button"
            onClick={() => actions.setTheme("dark")}
            aria-pressed={state.theme === "dark"}
            className={buttonClass(state.theme === "dark" ? "primary" : "secondary", "!py-1 !text-xs")}
          >
            အမှောင်
          </button>
          <span className="mm ml-auto text-[11px] text-ink-500 dark:text-ink-400">ယနေ့ — {today}</span>
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ဒေတာ စီမံခန့်ခွဲမှု</h2>
        <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
          ဒေတာအားလုံးသည် ဤဘရောက်ဇာ၏ localStorage တွင်သာ ရှိသည်။ အကောင့် မရှိသလို ဆာဗာသို့ မပို့ပါ၊
          အခြား စက်များနှင့် အလိုအလျောက် မျှဝေမည် မဟုတ်ပါ။ ဘရောက်ဇာ ဒေတာ ရှင်းလျှင် ပျောက်နိုင်သည်။
          ထို့ကြောင့် အရန် သိမ်းထားရန် အကြံပြုသည်။
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => exportStateJson(state, wordBank)} className={buttonClass("primary")}>
            JSON အရန် သိမ်းမည်
          </button>
          <ButtonLink href="/vocabulary" variant="secondary">
            စကားလုံး CSV
          </ButtonLink>
        </div>

        <label className="mm mt-4 block text-xs font-semibold text-ink-600 dark:text-ink-300">
          အရန် ဖိုင် ပြန်လည် တင်သွင်းရန် (JSON)
          <textarea
            rows={4}
            value={importText}
            onChange={(event) => setImportText(event.target.value)}
            placeholder='{"version":1,…}'
            className="mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 font-mono text-xs dark:border-ink-700 dark:bg-ink-950"
          />
        </label>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={importData}
            disabled={!importText.trim()}
            className={buttonClass("secondary")}
          >
            တင်သွင်းမည်
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("ဒေတာအားလုံးကို ဖျက်ပြီး အသစ် ပြန်စမည်လား။ ဤလုပ်ဆောင်ချက်ကို ပြန်လည် မရနိုင်ပါ။")) {
                actions.resetAll();
                setMessage({ ok: true, text: "ဒေတာအားလုံးကို ရှင်းလားပြီးပါပြီ။" });
              }
            }}
            className={buttonClass("danger")}
          >
            ဒေတာ အားလုံး ရှင်းမည်
          </button>
        </div>
        {message ? (
          <p
            className={`mm mt-2 rounded-lg px-3 py-2 text-xs ${
              message.ok
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200"
                : "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-200"
            }`}
            role="status"
          >
            {message.text}
          </p>
        ) : null}
      </Card>
    </div>
  );
}
