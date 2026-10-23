"use client";

import Link from "next/link";
import { useState } from "react";
import type { Quiz } from "@/lib/types";
import type { AttemptSummary } from "@/lib/core/summary";
import { estimateCefr } from "@/content/quizzes";
import { useApp } from "@/lib/store";
import PracticeSet from "./PracticeSet";
import { Badge, ButtonLink, Card, LevelBadge, buttonClass } from "./ui";

export default function QuizView({ quiz }: { quiz: Quiz }) {
  const { actions } = useApp();
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<AttemptSummary | null>(null);
  const isPlacement = quiz.id === "placement-test";
  const estimate = isPlacement && result ? estimateCefr(result.correct, result.total) : null;

  const record = (summary: AttemptSummary) => {
    setResult(summary);
    actions.recordAttempt({
      kind: isPlacement ? "assessment" : "quiz",
      refId: quiz.id,
      refTitle: quiz.title,
      correct: summary.correct,
      total: summary.total,
      topics: summary.topics,
      wrong: summary.wrong,
    });
  };

  return (
    <div className="space-y-5">
      <nav className="mm flex flex-wrap items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
        <Link href="/quizzes" className="hover:underline">
          စာမေးပွဲများ
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink-700 dark:text-ink-200">{quiz.title}</span>
      </nav>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={quiz.level} />
          <Badge tone="slate">မေးခွန်း {quiz.exercises.length}</Badge>
          {quiz.timeLimitMin ? <Badge tone="amber">⏱ {quiz.timeLimitMin} မိနစ်</Badge> : null}
          {isPlacement ? <Badge tone="violet">နေရာချ စစ်ဆေးမှု</Badge> : null}
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white">{quiz.title}</h1>
        <p className="mm mt-1 text-base text-ink-600 dark:text-ink-300">{quiz.titleMm}</p>
        <p className="mm mt-2 text-sm leading-7 text-ink-700 dark:text-ink-200">{quiz.description}</p>
        {isPlacement ? (
          <p className="mm mt-3 rounded-xl bg-violet-50 px-3 py-2 text-xs leading-6 text-violet-800 dark:bg-violet-950/30 dark:text-violet-200">
            ဤစစ်ဆေးမှုသည် A1 မှ C1 အထိ မေးခွန်း ၂၀ ခုဖြင့် သင့်အဆင့်ကို ခန့်မှန်းပေးသည်။ ရလဒ်သည်
            ခန့်မှန်းချက်သာဖြစ်ပြီး တရားဝင် CEFR လက်မှတ် မဟုတ်ပါ။
          </p>
        ) : null}
      </Card>

      {!started ? (
        <Card className="p-5">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">စတင်ရန် အသင့်ဖြစ်ပါသလား</h2>
          <ul className="mm mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-ink-600 dark:text-ink-300">
            <li>မေးခွန်း အားလုံးကို အစဉ်လိုက် ဖြေပါ။ လိုအပ်ပါက ယခင် မေးခွန်းသို့ ပြန်သွားနိုင်သည်။</li>
            <li>အဖြေများကို အဆုံးတွင် တစ်ကြိမ်တည်း စစ်ဆေးမည်ဖြစ်ပြီး ရှင်းလင်းချက် အားလုံး ပြမည်။</li>
            <li>
              {quiz.timeLimitMin
                ? `အချိန် ${quiz.timeLimitMin} မိနစ် ကန့်သတ်ချက် ရှိသည်။ အချိန်ကုန်ပါက အလိုအလျောက် စစ်ဆေးမည်။`
                : "အချိန် ကန့်သတ်ချက် မရှိပါ။"}
            </li>
            <li>မဖြေသည့် မေးခွန်းများကို မှားသည်ဟု သတ်မှတ်မည်။</li>
          </ul>
          <button type="button" onClick={() => setStarted(true)} className={buttonClass("primary", "mt-4")}>
            စာမေးပွဲ စတင်မည်
          </button>
        </Card>
      ) : (
        <PracticeSet
          exercises={quiz.exercises}
          mode="exam"
          timeLimitSec={quiz.timeLimitMin ? quiz.timeLimitMin * 60 : undefined}
          finishLabel="အဖြေ အားလုံး စစ်ဆေးမည်"
          onFinish={record}
        />
      )}

      {estimate ? (
        <Card className="border-violet-300 p-5 dark:border-violet-800">
          <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ခန့်မှန်း အဆင့်</h2>
          <p className="mt-2 text-3xl font-bold text-violet-700 dark:text-violet-300">{estimate.level}</p>
          <p className="mm text-sm font-semibold text-ink-800 dark:text-ink-100">{estimate.labelMm}</p>
          <p className="mm mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">{estimate.note}</p>
          <p className="mm mt-3 rounded-lg bg-ink-50 px-3 py-2 text-[11px] leading-5 text-ink-500 dark:bg-ink-800/60 dark:text-ink-400">
            ဤအဆင့်သည် မေးခွန်း ၂၀ ခုအပေါ် အခြေခံသည့် ခန့်မှန်းချက်သာဖြစ်သည်။ စကားပြော၊ စာရေးသားမှုနှင့်
            နားထောင်မှုကို မတိုင်းတာပါ။ တရားဝင် အသိအမှတ်ပြု လက်မှတ် မဟုတ်ပါ။
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <ButtonLink href="/assessment" variant="secondary">
              အကဲဖြတ်မှု အကြောင်း
            </ButtonLink>
            <ButtonLink href="/roadmap" variant="ghost">
              သင်ရိုး ကြည့်ရန် →
            </ButtonLink>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
