"use client";

import Link from "next/link";
import { allLessons, contentCounts, quizzes } from "@/content";
import { CEFR_LEVELS } from "@/content/meta";
import { estimateCefr } from "@/content/quizzes";
import { useApp } from "@/lib/store";
import { useStats } from "@/lib/hooks";
import { Badge, ButtonLink, Card, LevelBadge, PageHeader, ProgressBar, Stat } from "@/components/ui";

const TYPE_LABEL: Record<string, string> = {
  mcq: "ရွေးချယ်ခြင်း (MCQ)",
  fill: "ဖြည့်စွက်ခြင်း (fill-in-blank)",
  correct: "ဝါကျ ပြင်ဆင်ခြင်း (sentence correction)",
  order: "စကားလုံး အစဉ်စီခြင်း (word ordering)",
  translate: "ဘာသာပြန်ခြင်း (translation)",
};

export default function AssessmentPage() {
  const { state } = useApp();
  const stats = useStats();

  const counts: Record<string, number> = {};
  for (const lesson of allLessons) {
    for (const exercise of [...lesson.guided, ...lesson.independent]) {
      counts[exercise.type] = (counts[exercise.type] ?? 0) + 1;
    }
  }
  for (const quiz of quizzes) {
    for (const exercise of quiz.exercises) {
      counts[exercise.type] = (counts[exercise.type] ?? 0) + 1;
    }
  }

  const placementAttempt = state.attempts.find((attempt) => attempt.refId === "placement-test");
  const estimate = placementAttempt ? estimateCefr(placementAttempt.correct, placementAttempt.total) : null;

  const readingAttempts = state.attempts.filter((attempt) => attempt.kind === "reading").length;
  const listeningAttempts = state.attempts.filter((attempt) => attempt.kind === "listening").length;
  const ieltsAttempts = state.attempts.filter((attempt) => attempt.kind === "ielts").length;

  return (
    <div className="space-y-5">
      <PageHeader
        title="အကဲဖြတ်မှု"
        titleMm="Assessment"
        description="ဤပလက်ဖောင်း၏ အကဲဖြတ်မှုသည် ဖြေဆိုခဲ့သည့် မေးခွန်းများ၊ ပြီးစီးခဲ့သည့် သင်ခန်းစာများနှင့် ကိုယ်တိုင် စစ်ဆေးမှုများအပေါ် အခြေခံသည်။ သင်ခန်းစာ ကြည့်ရှုရုံဖြင့် ကျွမ်းကျင်မှု မသတ်မှတ်ပါ။"
        actions={<Badge tone="violet">ခန့်မှန်းချက်များ — တရားဝင် မဟုတ်</Badge>}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="စစ်ဆေးမှု ကြိမ်ရေ" value={stats.attempts} hint="မေးခွန်း ဖြေဆိုမှု အားလုံး" />
        <Stat label="မေးခွန်း တိကျမှု" value={`${stats.accuracy}%`} hint={`${stats.correctAnswers}/${stats.questionsAnswered}`} />
        <Stat label="ပြီးစီးသော သင်ခန်းစာ" value={`${stats.lessonsCompleted}/${stats.totalLessons}`} />
        <Stat label="စာရေး/ပြောဆို လေ့ကျင့်မှု" value={`${state.writing.length} / ${state.speaking.length}`} hint="မူကြမ်း / ကိုယ်တိုင် စစ်ဆေးမှု" />
      </div>

      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">နေရာချ စစ်ဆေးမှု (placement)</h2>
          <Badge tone="violet">မေးခွန်း ၂၀ · A1–C1</Badge>
        </div>
        {placementAttempt && estimate ? (
          <div className="mt-3 rounded-xl border border-violet-200 p-4 dark:border-violet-900">
            <p className="mm text-xs text-ink-500 dark:text-ink-400">နောက်ဆုံး ဖြေဆိုမှု အပေါ် အခြေခံ ခန့်မှန်း</p>
            <p className="mt-1 text-2xl font-bold text-violet-700 dark:text-violet-300">
              {estimate.level} — {estimate.labelMm}
            </p>
            <p className="mm mt-1 text-xs text-ink-600 dark:text-ink-300">
              မှန် {placementAttempt.correct}/{placementAttempt.total} · {estimate.note}
            </p>
            <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
              ဤအဆင့်သည် မေးခွန်း ၂၀ ခုအပေါ် အခြေခံသည့် ခန့်မှန်းချက်သာဖြစ်သည်။ စကားပြော၊ စာရေးသားမှုနှင့်
              နားထောင်မှုကို မတိုင်းတာပါ။
            </p>
          </div>
        ) : (
          <p className="mm mt-2 text-sm text-ink-600 dark:text-ink-300">
            သင့်အဆင့်ကို ခန့်မှန်းရန် နေရာချ စစ်ဆေးမှုကို တစ်ကြိမ် ဖြေဆိုပါ။ ရလဒ်သည် ခန့်မှန်းချက်သာဖြစ်သည်။
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <ButtonLink href="/quizzes/placement-test" variant="primary">
            {placementAttempt ? "ထပ်မံ ဖြေဆိုမည်" : "စစ်ဆေးမှု စတင်မည်"}
          </ButtonLink>
          <ButtonLink href="/progress" variant="secondary">
            ရမှတ် မှတ်တမ်း
          </ButtonLink>
        </div>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-base font-bold text-ink-900 dark:text-white">အကဲဖြတ်မှု အမျိုးအစားများ</h2>
        <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
          မေးခွန်း အမျိုးအစား တစ်ခုစီသည် မတူညီသော ကျွမ်းကျင်မှုကို စစ်ဆေးသည်။ မေးခွန်းတိုင်းအတွက် အဖြေနှင့်
          ရှင်းလင်းချက် ရှိသည်။
        </p>
        <ul className="mt-3 divide-y divide-ink-100 dark:divide-ink-800">
          {Object.keys(TYPE_LABEL).map((type) => (
            <li key={type} className="flex flex-wrap items-center justify-between gap-2 py-2">
              <span className="mm text-sm text-ink-800 dark:text-ink-100">{TYPE_LABEL[type]}</span>
              <span className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
                <span>မေးခွန်း {counts[type] ?? 0}</span>
                <Link href="/practice" className="text-brand-700 underline dark:text-brand-300">
                  လေ့ကျင့်ရန်
                </Link>
              </span>
            </li>
          ))}
          <li className="flex flex-wrap items-center justify-between gap-2 py-2">
            <span className="mm text-sm text-ink-800 dark:text-ink-100">ဖတ်ရှုနားလည်မှု (reading comprehension)</span>
            <span className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
              <span>စာပိုဒ် {contentCounts.readingPassages}</span>
              <Link href="/reading" className="text-brand-700 underline dark:text-brand-300">
                ဖတ်ရန်
              </Link>
            </span>
          </li>
          <li className="flex flex-wrap items-center justify-between gap-2 py-2">
            <span className="mm text-sm text-ink-800 dark:text-ink-100">စာရေးသားမှု တာဝန်များ (writing prompts)</span>
            <span className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
              <span>တာဝန် {contentCounts.writingTasks}</span>
              <Link href="/writing" className="text-brand-700 underline dark:text-brand-300">
                ရေးရန်
              </Link>
            </span>
          </li>
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-base font-bold text-ink-900 dark:text-white">ကျွမ်းကျင်မှု အထောက်အထား</h2>
        <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
          အောက်ပါ အချက်အလက်များသည် မှတ်တမ်းတင်ထားသည့် လုပ်ဆောင်ချက်မှ တိုက်ရိုက် ရယူထားသည်။ မပြီးသေးပါက
          အလိုအလျောက် “ပြီးစီး” ဟု မပြပါ။
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            ဖတ်ရှုမှု ဖြေဆိုမှု — <strong>{readingAttempts}</strong> ကြိမ်
          </li>
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            နားထောင်မှု ဖြေဆိုမှု — <strong>{listeningAttempts}</strong> ကြိမ်
          </li>
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            IELTS လေ့ကျင့်ခန်း — <strong>{ieltsAttempts}</strong> ကြိမ်
          </li>
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            စာရေးသားမှု မူကြမ်း — <strong>{state.writing.length}</strong> ခု
          </li>
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            ပြောဆိုမှု ကိုယ်တိုင် စစ်ဆေးမှု — <strong>{state.speaking.length}</strong> ခု
          </li>
          <li className="mm rounded-xl border border-ink-200 p-3 text-xs dark:border-ink-800">
            ကျွမ်းကျင်ဟု သတ်မှတ်ထားသော သင်ခန်းစာ — <strong>{stats.lessonsMastered}</strong> ခု
          </li>
        </ul>
      </Card>

      <Card className="p-5">
        <h2 className="mm text-base font-bold text-ink-900 dark:text-white">အဆင့် အလိုက် တိုးတက်မှု</h2>
        <ul className="mt-3 space-y-3">
          {CEFR_LEVELS.map((level) => {
            const data = stats.byLevel.find((item) => item.level === level.level);
            const total = data?.total ?? 0;
            const completed = data?.completed ?? 0;
            return (
              <li key={level.level}>
                <div className="flex flex-wrap items-center gap-2">
                  <LevelBadge level={level.level} />
                  <span className="mm text-xs text-ink-600 dark:text-ink-300">{level.labelMm}</span>
                  <span className="ml-auto text-xs text-ink-500 dark:text-ink-400">
                    {completed}/{total}
                  </span>
                </div>
                <ProgressBar value={total ? (completed / total) * 100 : 0} className="mt-1" />
              </li>
            );
          })}
        </ul>
        <p className="mm mt-3 text-xs leading-6 text-ink-500 dark:text-ink-400">
          သတိပြုရန် — ဤပလက်ဖောင်းတွင် C2 အဆင့် သင်ခန်းစာများ မရေးသားရသေးပါ။ ထို့ကြောင့် C2 အတွက်
          ပြီးစီးမှု မပြပါ။ တရားဝင် CEFR အသိအမှတ်ပြု လက်မှတ် မရနိုင်ပါ။
        </p>
      </Card>

      <div className="grid gap-3 sm:grid-cols-3">
        <ButtonLink href="/quizzes" variant="secondary" className="justify-between">
          စာမေးပွဲများ <span aria-hidden="true">→</span>
        </ButtonLink>
        <ButtonLink href="/ielts" variant="secondary" className="justify-between">
          IELTS လေ့ကျင့် <span aria-hidden="true">→</span>
        </ButtonLink>
        <ButtonLink href="/progress" variant="secondary" className="justify-between">
          အမှား ပြန်ကြည့် <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>
    </div>
  );
}
