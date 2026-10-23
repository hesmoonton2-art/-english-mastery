"use client";

import Link from "next/link";
import { ieltsPractice, ieltsWritingTasks } from "@/content";
import { IELTS_DISCLAIMER } from "@/lib/core/band";
import { useApp } from "@/lib/store";
import { Badge, Card, PageHeader } from "@/components/ui";

export default function IeltsPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="IELTS လေ့ကျင့်ခန်း"
        titleMm="IELTS-style practice"
        description="IELTS ပုံစံ လေ့ကျင့်ခန်းများကို မူရင်း ပစ္စည်းများဖြင့် ဖန်တီးထားသည်။ နားထောင်မှုနှင့် ဖတ်ရှုမှုအတွက် ခန့်မှန်း band တစ်ခု ပြမည်ဖြစ်ပြီး စာရေးသားမှုအတွက် စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာမှုသာ ပေးသည်။"
        actions={<Badge tone="violet">လေ့ကျင့်ခန်း {ieltsPractice.length + ieltsWritingTasks.length + 1} ခု</Badge>}
      />

      <Card className="border-amber-300 bg-amber-50/70 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mm text-xs leading-6 text-amber-800 dark:text-amber-200">{IELTS_DISCLAIMER}</p>
      </Card>

      <section>
        <h2 className="mm mb-2 text-sm font-bold text-ink-900 dark:text-white">နားထောင်မှု နှင့် ဖတ်ရှုမှု</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {ieltsPractice.map((task) => {
            const attempts = state.attempts.filter((attempt) => attempt.refId === task.id);
            const last = attempts[0];
            return (
              <Card key={task.id} className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="violet">{task.section}</Badge>
                  <Badge tone="slate">မေးခွန်း {task.exercises.length}</Badge>
                  <Badge tone="amber">⏱ {task.minutes} မိနစ်</Badge>
                </div>
                <h3 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{task.title}</h3>
                <p className="mm mt-2 line-clamp-2 text-xs leading-6 text-ink-500 dark:text-ink-400">
                  {task.instructionsMm}
                </p>
                {last ? (
                  <p className="mm mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    နောက်ဆုံး — {last.correct}/{last.total}
                  </p>
                ) : null}
                <Link
                  href={`/ielts/${task.id}`}
                  className="mm mt-3 inline-block rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  လေ့ကျင့်မည် →
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mm mb-2 text-sm font-bold text-ink-900 dark:text-white">စာရေးသားမှု</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {ieltsWritingTasks.map((task) => (
            <Card key={task.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="violet">Writing</Badge>
                <Badge tone="amber">⏱ {task.minutes} မိနစ်</Badge>
                <Badge tone="brand">
                  {task.wordTarget[0]}–{task.wordTarget[1]} လုံး
                </Badge>
              </div>
              <h3 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{task.title}</h3>
              <p className="mm mt-2 line-clamp-2 text-xs leading-6 text-ink-500 dark:text-ink-400">{task.promptMm}</p>
              <Link
                href={`/ielts/${task.id}`}
                className="mm mt-3 inline-block rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
              >
                ရေးသားမည် →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mm mb-2 text-sm font-bold text-ink-900 dark:text-white">ပြောဆိုမှု</h2>
        <Card className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="violet">Speaking</Badge>
            <Badge tone="amber">မိုက်ခရိုဖုန်း မပါ</Badge>
            <Badge tone="slate">Part 1–3</Badge>
          </div>
          <h3 className="mt-2 text-base font-bold text-ink-900 dark:text-white">IELTS Speaking — Interview Practice</h3>
          <p className="mm mt-2 text-xs leading-6 text-ink-500 dark:text-ink-400">
            Part 1၊ 2၊ 3 အတွက် မေးခွန်းများ၊ ဖြေနည်း အကြံပြုချက်များနှင့် band ၆/၇/၈ ဖော်ပြချက်များ။ အသံ
            အကဲဖြတ်မှု မရှိပါ။
          </p>
          <Link
            href="/ielts/speaking"
            className="mm mt-3 inline-block rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
          >
            ကြည့်ရှုမည် →
          </Link>
        </Card>
      </section>

      <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">
        ဤလေ့ကျင့်ခန်းများသည် IELTS စာမေးပွဲ၏ ဖော်မတ်ကို အတုယူထားသော်လည်း တရားဝင် စာမေးပွဲ မဟုတ်ပါ။
        ရမှတ်များသည် ဤပလက်ဖောင်း၏ ကိုယ်ပိုင် ခန့်မှန်းချက်များ ဖြစ်သည်။
      </p>
    </div>
  );
}
