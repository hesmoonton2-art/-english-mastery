"use client";

import { useEffect, useMemo, useState } from "react";
import { allLessons, listeningScripts, quizzes, readingPassages } from "@/content";
import { CEFR_LEVELS } from "@/content/meta";
import type { Exercise } from "@/lib/types";
import type { AttemptSummary } from "@/lib/core/summary";
import { useApp } from "@/lib/store";
import { useQueryParam, useStats } from "@/lib/hooks";
import PracticeSet from "@/components/PracticeSet";
import { Badge, Card, Empty, PageHeader, buttonClass } from "@/components/ui";

type PoolItem = { exercise: Exercise; source: string; kind: string };

export default function PracticePage() {
  const { actions } = useApp();
  const stats = useStats();
  const initialTopic = useQueryParam("topic");
  const [topic, setTopic] = useState("all");
  const [level, setLevel] = useState("all");
  const [count, setCount] = useState(10);
  const [started, setStarted] = useState(false);
  const [startKey, setStartKey] = useState(0);

  useEffect(() => {
    if (initialTopic) setTopic(initialTopic);
  }, [initialTopic]);

  const pool = useMemo<PoolItem[]>(() => {
    const items: PoolItem[] = [];
    for (const lesson of allLessons) {
      for (const exercise of [...lesson.guided, ...lesson.independent]) {
        items.push({ exercise, source: lesson.title, kind: "သင်ခန်းစာ" });
      }
    }
    for (const quiz of quizzes) {
      for (const exercise of quiz.exercises) {
        items.push({ exercise, source: quiz.title, kind: "စာမေးပွဲ" });
      }
    }
    for (const passage of readingPassages) {
      for (const exercise of passage.questions) {
        items.push({ exercise, source: passage.title, kind: "ဖတ်ရှုမှု" });
      }
    }
    for (const script of listeningScripts) {
      for (const exercise of script.questions) {
        items.push({ exercise, source: script.title, kind: "နားထောင်မှု" });
      }
    }
    return items;
  }, []);

  const topics = useMemo(
    () => Array.from(new Set(pool.map((item) => item.exercise.topic))).sort((a, b) => a.localeCompare(b)),
    [pool],
  );

  const filtered = useMemo(
    () =>
      pool.filter((item) => {
        if (topic !== "all" && item.exercise.topic !== topic) return false;
        if (level !== "all" && (item.exercise.level ?? "A1") !== level) return false;
        return true;
      }),
    [pool, topic, level],
  );

  const selected = useMemo(() => filtered.slice(0, count).map((item) => item.exercise), [filtered, count]);

  const record = (summary: AttemptSummary) => {
    actions.recordAttempt({
      kind: "assessment",
      refId: topic === "all" ? "practice-mixed" : `practice-${topic}`,
      refTitle: topic === "all" ? "ရွေးချယ်ထားသော လေ့ကျင့်ခန်း" : `လေ့ကျင့်ခန်း — ${topic}`,
      correct: summary.correct,
      total: summary.total,
      topics: summary.topics,
      wrong: summary.wrong,
    });
  };

  const start = () => {
    setStarted(true);
    setStartKey((value) => value + 1);
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="လေ့ကျင့်ခန်း"
        titleMm="Practice"
        description="သင်ခန်းစာများ၊ စာမေးပွဲများ၊ ဖတ်ရှုမှုနှင့် နားထောင်မှု လေ့ကျင့်ခန်းများမှ မေးခွန်းများကို အကြောင်းအရာ အလိုက် ရွေးပြီး လေ့ကျင့်နိုင်သည်။ အားနည်းသော အကြောင်းအရာများကို ဦးစားပေး ရွေးရန် အကြံပြုချက်များ ပါဝင်သည်။"
        actions={<Badge tone="brand">မေးခွန်း စုစုပေါင်း {pool.length}</Badge>}
      />

      {stats.weakTopics.length > 0 ? (
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အားနည်းနေသော အကြောင်းအရာများ</h2>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
            ဖြေဆိုခဲ့သည့် မေးခွန်းများမှ တွက်ချက်ထားသည် (၃ ခုအထက် ဖြေပြီး တိကျမှု ၈၀% အောက်)။
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stats.weakTopics.map((item) => (
              <li key={item.topic}>
                <button
                  type="button"
                  onClick={() => {
                    setTopic(item.topic);
                    setStarted(false);
                  }}
                  className="mm rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                >
                  {item.topic} · {item.correct}/{item.total} ({item.accuracy}%)
                </button>
              </li>
            ))}
          </ul>
        </Card>
      ) : (
        <Card className="p-5">
          <p className="mm text-sm text-ink-600 dark:text-ink-300">
            အားနည်းချက် အကြံပြုချက် ရရှိရန် မေးခွန်းများကို ဖြေဆိုပါ။ ဖြေဆိုမှု မရှိသေးသဖြင့် ဤနေရာတွင်
            အကြံပြုချက် မပြသေးပါ။
          </p>
        </Card>
      )}

      <Card className="p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အကြောင်းအရာ
            <select
              value={topic}
              onChange={(event) => {
                setTopic(event.target.value);
                setStarted(false);
              }}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">အားလုံး</option>
              {topics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အဆင့်
            <select
              value={level}
              onChange={(event) => {
                setLevel(event.target.value);
                setStarted(false);
              }}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">အားလုံး</option>
              {CEFR_LEVELS.map((item) => (
                <option key={item.level} value={item.level}>
                  {item.level}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            မေးခွန်း အရေအတွက်
            <select
              value={count}
              onChange={(event) => {
                setCount(Number(event.target.value));
                setStarted(false);
              }}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              {[5, 10, 20, 30].map((value) => (
                <option key={value} value={value}>
                  {value} ခု
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end">
            <button type="button" onClick={start} disabled={selected.length === 0} className={buttonClass("primary", "w-full")}>
              လေ့ကျင့်ခန်း စတင်မည်
            </button>
          </div>
        </div>
        <p className="mm mt-3 text-xs text-ink-500 dark:text-ink-400">
          ဤစစ်ထုတ်မှုအတွက် ရရှိနိုင်သော မေးခွန်း {filtered.length} ခု။ ရွေးချယ်မှုအလိုက် သင်ရိုး အစဉ်အတိုင်း{" "}
          {Math.min(count, filtered.length)} ခု ယူထားသည်။
        </p>
      </Card>

      {started ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">
              လေ့ကျင့်ခန်း — {topic === "all" ? "အကြောင်းအရာ အားလုံး" : topic}
            </h2>
            <button type="button" onClick={() => setStarted(false)} className={buttonClass("ghost", "!text-xs")}>
              ရွေးချယ်မှု ပြောင်းရန်
            </button>
          </div>
          {selected.length === 0 ? (
            <Empty title="မေးခွန်း မရှိပါ">အခြား အကြောင်းအရာ သို့မဟုတ် အဆင့်ကို ရွေးပါ။</Empty>
          ) : (
            <PracticeSet
              key={startKey}
              exercises={selected}
              mode="practice"
              finishLabel="လေ့ကျင့်ခန်း ပြီးဆုံး"
              onFinish={record}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
