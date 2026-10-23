"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { wordByKey, type WordBankEntry } from "@/content";
import type { WordRecord } from "@/lib/core/stats";
import type { SrsGrade } from "@/lib/core/srs";
import { useApp } from "@/lib/store";
import { Badge, Card, Empty, PageHeader, ProgressBar, buttonClass } from "@/components/ui";

const GRADES: { grade: SrsGrade; label: string; hint: string; tone: string }[] = [
  { grade: "again", label: "မမှတ်မိပါ", hint: "ယနေ့ပင် ပြန်လုပ်ရမည်", tone: "bg-rose-600 hover:bg-rose-700" },
  { grade: "hard", label: "ခက်ခဲသည်", hint: "ကြားကာလ အနည်းငယ် တိုးမည်", tone: "bg-amber-600 hover:bg-amber-700" },
  { grade: "good", label: "မှတ်မိသည်", hint: "ပုံမှန် ကြားကာလ တိုးမည်", tone: "bg-emerald-600 hover:bg-emerald-700" },
  { grade: "easy", label: "လွယ်ကူသည်", hint: "ကြားကာလ ပိုတိုးမည်", tone: "bg-brand-600 hover:bg-brand-700" },
];

export default function ReviewPage() {
  const { state, actions, today } = useApp();
  const [reviewed, setReviewed] = useState<Record<string, SrsGrade>>({});
  const [revealed, setRevealed] = useState(false);

  const due = useMemo(() => {
    const items: { key: string; record: WordRecord; entry: WordBankEntry }[] = [];
    for (const [key, record] of Object.entries(state.words)) {
      if (record.srs.due > today) continue;
      const entry = wordByKey.get(key);
      if (!entry) continue;
      items.push({ key, record, entry });
    }
    return items.sort((a, b) => a.record.srs.due.localeCompare(b.record.srs.due));
  }, [state.words, today]);

  const pending = due.filter((item) => !reviewed[item.key]);
  const current = pending[0];
  const totalSaved = Object.keys(state.words).length;
  const doneCount = Object.keys(reviewed).length;
  const total = due.length;
  const counts = {
    again: Object.values(reviewed).filter((grade) => grade === "again").length,
    hard: Object.values(reviewed).filter((grade) => grade === "hard").length,
    good: Object.values(reviewed).filter((grade) => grade === "good").length,
    easy: Object.values(reviewed).filter((grade) => grade === "easy").length,
  };

  const upcoming = useMemo(() => {
    const future = Object.values(state.words)
      .map((record) => record.srs.due)
      .filter((dueDay) => dueDay > today)
      .sort();
    return future[0] ?? null;
  }, [state.words, today]);

  const grade = (value: SrsGrade) => {
    if (!current) return;
    actions.reviewWord(current.key, value);
    setReviewed((map) => ({ ...map, [current.key]: value }));
    setRevealed(false);
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="စကားလုံး ပြန်လည် လေ့ကျင့်ရန်"
        titleMm="Spaced repetition"
        description="ဤစာရင်းသည် သင့်ဘရောက်ဇာတွင် သိမ်းထားသော စကားလုံးများမှ တွက်ချက်သည်။ စည်းမျဉ်းမှာ ရိုးရှင်း SM-2 ပုံစံဖြစ်ပြီး တူညီသော အခြေအနေတွင် အမြဲ တူညီသော ရလဒ် ထွက်သည်။"
        actions={<Badge tone={pending.length ? "brand" : "green"}>ယနေ့ ရန် {pending.length} / {total}</Badge>}
      />

      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="mm flex flex-wrap gap-2">
            <Badge tone="slate">သိမ်းထား {totalSaved}</Badge>
            <Badge tone="amber">ယနေ့ ရန် {total}</Badge>
            <Badge tone="green">ပြီး {doneCount}</Badge>
            {upcoming ? <Badge tone="brand">နောက် ရန် {upcoming}</Badge> : null}
          </div>
          {total > 0 ? <span className="mm text-ink-500 dark:text-ink-400">{Math.round((doneCount / total) * 100)}%</span> : null}
        </div>
        <ProgressBar value={total === 0 ? 0 : (doneCount / total) * 100} className="mt-2" />
      </Card>

      {totalSaved === 0 ? (
        <Empty title="သိမ်းထားသော စကားလုံး မရှိသေးပါ">
          သင်ခန်းစာ သို့မဟုတ် စကားလုံး ဘဏ်တွင် စကားလုံး သိမ်းပါ။ ထို့နောက် ဤနေရာတွင် ပြန်လည်
          လေ့ကျင့်ရန် စာရင်း ပေါ်လာမည်။{" "}
          <Link href="/vocabulary" className="text-brand-700 underline dark:text-brand-300">
            စကားလုံး ဘဏ် ဖွင့်
          </Link>
        </Empty>
      ) : total === 0 ? (
        <Empty title="ယနေ့ ပြန်လုပ်ရန် စကားလုံး မရှိပါ">
          Spaced repetition စည်းမျဉ်းအရ ယနေ့ ရန် မရှိသေးပါ။
          {upcoming ? ` နောက်ထပ် ပြန်လုပ်ရမည့် ရက် — ${upcoming}။` : ""} ထိုအထိ သင်ခန်းစာ အသစ် လေ့လာနိုင်သည်။
        </Empty>
      ) : !current ? (
        <Card className="p-6">
          <h2 className="mm text-lg font-bold text-ink-900 dark:text-white">ဤအစီအစဉ် ပြီးဆုံးပါပြီ</h2>
          <ul className="mm mt-3 space-y-1 text-sm text-ink-700 dark:text-ink-200">
            <li>မမှတ်မိပါ — {counts.again} လုံး (ယနေ့ပင် ထပ်လုပ်နိုင်သည်)</li>
            <li>ခက်ခဲသည် — {counts.hard} လုံး</li>
            <li>မှတ်မိသည် — {counts.good} လုံး</li>
            <li>လွယ်ကူသည် — {counts.easy} လုံး</li>
          </ul>
          <p className="mm mt-3 text-xs leading-6 text-ink-500 dark:text-ink-400">
            ဤအစီအစဉ်ကို ပြီးစီးရုံဖြင့် စကားလုံးများကို “ကျွမ်းကျင်” ဟု မသတ်မှတ်ပါ။ ကိုယ်တိုင် သိပြီဟု
            သတ်မှတ်လိုပါက စကားလုံး ဘဏ်တွင် “သိပြီ” ခလုတ်ကို သုံးပါ။
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setReviewed({});
                setRevealed(false);
              }}
              className={buttonClass("primary")}
            >
              ထပ်မံ လေ့ကျင့်မည်
            </button>
            <Link href="/vocabulary" className={buttonClass("secondary")}>
              စကားလုံး ဘဏ်
            </Link>
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <p className="mm text-xs text-ink-500 dark:text-ink-400">
            မေးခွန်း {doneCount + 1} / {total} · ဤစကားလုံးကို မှတ်မိပါသလား။
          </p>
          <p className="mt-3 text-2xl font-bold text-ink-900 dark:text-white">{current.entry.en}</p>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
            {current.entry.pos}
            {current.entry.ipa ? ` · /${current.entry.ipa}/` : ""} · {current.entry.level} · {current.entry.topic}
          </p>

          {revealed ? (
            <div className="mt-4 rounded-xl border border-ink-200 p-4 dark:border-ink-800">
              <p className="mm text-lg font-semibold text-brand-700 dark:text-brand-300">{current.entry.mm}</p>
              <p className="mt-2 text-sm text-ink-800 dark:text-ink-100">{current.entry.example}</p>
              <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">{current.entry.exampleMm}</p>
              {current.record.note ? (
                <p className="mm mt-2 rounded-lg bg-ink-50 px-2 py-1.5 text-xs dark:bg-ink-800/60">
                  မှတ်စု — {current.record.note}
                </p>
              ) : null}
            </div>
          ) : (
            <button type="button" onClick={() => setRevealed(true)} className={buttonClass("secondary", "mt-4")}>
              အဓိပ္ပာယ် ကြည့်ရန်
            </button>
          )}

          {revealed ? (
            <div className="mt-4">
              <p className="mm text-xs text-ink-500 dark:text-ink-400">
                မည်မျှ မှတ်မိသည်ကို ရွေးပါ — ရွေးချယ်မှုအလိုက် နောက်တစ်ကြိမ် ပြန်လုပ်ရမည့် ရက် ကွာခြားမည်။
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {GRADES.map((item) => (
                  <button
                    key={item.grade}
                    type="button"
                    onClick={() => grade(item.grade)}
                    className={`mm rounded-xl px-3 py-2 text-left text-white ${item.tone}`}
                  >
                    <span className="block text-sm font-bold">{item.label}</span>
                    <span className="block text-[11px] opacity-90">{item.hint}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </Card>
      )}

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ဤနည်းလမ်း မည်သို့ အလုပ်လုပ်သနည်း</h2>
        <ul className="mm mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-ink-600 dark:text-ink-300">
          <li>“မှတ်မိသည်” ကို ရွေးပါက ပထမအကြိမ် ၁ ရက်၊ ဒုတိယအကြိမ် ၃ ရက်၊ ထို့နောက် ကြားကာလ × ease ဖြင့် တိုးသည်။</li>
          <li>“မမှတ်မိပါ” ကို ရွေးပါက ကြားကာလ ပြန်စပြီး ယနေ့ပင် ထပ်လုပ်ရမည်။</li>
          <li>အများဆုံး ကြားကာလမှာ ၃၆၅ ရက် ဖြစ်သည်။ ရလဒ်သည် တူညီသော ဒေတာအတွက် အမြဲ တူညီသည်။</li>
        </ul>
      </Card>
    </div>
  );
}
