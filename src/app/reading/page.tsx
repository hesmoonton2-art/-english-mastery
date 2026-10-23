"use client";

import Link from "next/link";
import { readingPassages } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, Card, LevelBadge, PageHeader } from "@/components/ui";

export default function ReadingListPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="ဖတ်ရှုမှု"
        titleMm="Reading"
        description="စာပိုဒ် ခြောက်ခုလုံးကို ဤသင်ရိုးအတွက် အသစ် ရေးသားထားသည်။ စာပိုဒ်တစ်ခုစီတွင် ဝေါဟာရ စာရင်းနှင့် အဓိပ္ပာယ် ဖော်ထုတ်မေးခွန်းများ ပါဝင်ပြီး အဖြေတိုင်းအတွက် ရှင်းလင်းချက် ပေးထားသည်။"
        actions={<Badge tone="brand">စာပိုဒ် {readingPassages.length} ခု</Badge>}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {readingPassages.map((passage) => {
          const attempts = state.attempts.filter((attempt) => attempt.refId === passage.id);
          const best = attempts.reduce(
            (max, attempt) =>
              attempt.total > 0 ? Math.max(max, Math.round((attempt.correct / attempt.total) * 100)) : max,
            0,
          );
          return (
            <Card key={passage.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={passage.level} />
                <Badge tone="slate">{passage.genre}</Badge>
                <span className="mm text-xs text-ink-500 dark:text-ink-400">⏱ {passage.minutes} မိနစ်</span>
                {attempts.length > 0 ? <Badge tone="green">အကောင်းဆုံး {best}%</Badge> : null}
              </div>
              <h2 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{passage.title}</h2>
              <p className="mm text-sm text-ink-600 dark:text-ink-300">{passage.titleMm}</p>
              <p className="mm mt-2 text-xs leading-6 text-ink-500 dark:text-ink-400">
                စကားလုံး {passage.glossary.length} လုံး · မေးခွန်း {passage.questions.length} ခု
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={`/reading/${passage.id}`}
                  className="mm rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  ဖတ်ရှုမည် →
                </Link>
                {attempts.length > 0 ? (
                  <span className="mm self-center text-xs text-ink-500 dark:text-ink-400">
                    ဖြေဆိုပြီး {attempts.length} ကြိမ်
                  </span>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>

      <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">
        ဤစာပိုဒ်များသည် ဤပလက်ဖောင်းအတွက် မူရင်း ရေးသားထားသည့် စာသားများ ဖြစ်သည်။ ပြင်ပ စာပေ ကောက်နုတ်ချက်
        များ မဟုတ်ပါ။
      </p>
    </div>
  );
}
