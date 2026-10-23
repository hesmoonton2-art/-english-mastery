"use client";

import Link from "next/link";
import { quizzes } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, Card, LevelBadge, PageHeader } from "@/components/ui";

export default function QuizzesPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="စာမေးပွဲများ"
        titleMm="Quizzes & mock exams"
        description={`အဆင့် တစ်ခုစီအတွက် စာမေးပွဲနှင့် စုစည်း စမ်းသပ်စာမေးပွဲ (mock exam) ပါဝင်သည့် စာမေးပွဲ ${quizzes.length} ခု။ မေးခွန်း အမျိုးအစားများမှာ ရွေးချယ်ခြင်း၊ ဖြည့်စွက်ခြင်း၊ ဝါကျ ပြင်ဆင်ခြင်း၊ စကားလုံး အစဉ်စီခြင်းနှင့် ဘာသာပြန်ခြင်း ဖြစ်သည်။`}
        actions={<Badge tone="brand">စာမေးပွဲ {quizzes.length} ခု</Badge>}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {quizzes.map((quiz) => {
          const attempts = state.attempts.filter((attempt) => attempt.refId === quiz.id);
          const best = attempts.reduce(
            (max, attempt) =>
              attempt.total > 0 ? Math.max(max, Math.round((attempt.correct / attempt.total) * 100)) : max,
            0,
          );
          return (
            <Card key={quiz.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={quiz.level} />
                <Badge tone="slate">မေးခွန်း {quiz.exercises.length}</Badge>
                {quiz.timeLimitMin ? <Badge tone="amber">⏱ {quiz.timeLimitMin} မိနစ်</Badge> : null}
                {attempts.length > 0 ? <Badge tone="green">အကောင်းဆုံး {best}%</Badge> : null}
              </div>
              <h2 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{quiz.title}</h2>
              <p className="mm text-sm text-ink-600 dark:text-ink-300">{quiz.titleMm}</p>
              <p className="mm mt-2 line-clamp-3 text-xs leading-6 text-ink-500 dark:text-ink-400">{quiz.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Link
                  href={`/quizzes/${quiz.id}`}
                  className="mm rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  ဖြေဆိုမည် →
                </Link>
                {attempts.length > 0 ? (
                  <span className="mm text-xs text-ink-500 dark:text-ink-400">{attempts.length} ကြိမ် ဖြေဆိုပြီး</span>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">အခြား စစ်ဆေးမှုများ</h2>
        <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
          ဖတ်ရှုမှုနှင့် နားထောင်မှု မေးခွန်းများ၊ စာရေးသားမှု တာဝန်များနှင့် IELTS ပုံစံ လေ့ကျင့်ခန်းများကို
          သီးခြား စာမျက်နှာများတွင် လေ့ကျင့်နိုင်သည်။
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link href="/assessment" className="mm rounded-lg border border-ink-300 px-3 py-1.5 text-xs font-semibold dark:border-ink-700">
            အကဲဖြတ်မှု အကြောင်း
          </Link>
          <Link href="/ielts" className="mm rounded-lg border border-ink-300 px-3 py-1.5 text-xs font-semibold dark:border-ink-700">
            IELTS လေ့ကျင့်ခန်း
          </Link>
          <Link href="/practice" className="mm rounded-lg border border-ink-300 px-3 py-1.5 text-xs font-semibold dark:border-ink-700">
            အကြောင်းအရာ အလိုက် လေ့ကျင့်ခန်း
          </Link>
        </div>
      </Card>
    </div>
  );
}
