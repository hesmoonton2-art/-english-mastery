"use client";

import Link from "next/link";
import { CEFR_LEVELS, MODULES, moduleTitleMm } from "@/content/meta";
import { contentCounts, plannedLessons } from "@/content";
import { recommendReviews } from "@/lib/core/stats";
import { useApp } from "@/lib/store";
import { useNextLesson, useStats } from "@/lib/hooks";
import {
  Badge,
  ButtonLink,
  Card,
  Empty,
  LevelBadge,
  ProgressBar,
  Stat,
} from "@/components/ui";

export default function DashboardPage() {
  const { state, today } = useApp();
  const stats = useStats();
  const next = useNextLesson();

  const todayCount = state.activity[today] ?? 0;
  const goal = Math.max(1, state.profile.dailyGoal);
  const goalPercent = Math.min(100, Math.round((todayCount / goal) * 100));

  const recommendations = recommendReviews({
    weakTopics: stats.weakTopics,
    dueReviews: stats.dueReviews,
    nextLessonId: next?.id,
  });

  const maxWeek = Math.max(1, ...stats.recent.map((day) => day.count));
  const plannedByModule = plannedLessons.reduce<Record<string, number>>((acc, lesson) => {
    acc[lesson.moduleId] = (acc[lesson.moduleId] ?? 0) + 1;
    return acc;
  }, {});

  const greetingName = state.profile.name.trim();

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white sm:p-8">
          <p className="mm text-xs font-semibold uppercase tracking-wider text-brand-100">
            English Mastery · မြန်မာဘာသာဖြင့် ရှင်းပြထားသည်
          </p>
          <h1 className="mm mt-1 text-2xl font-bold sm:text-3xl">
            {greetingName ? `${greetingName}၊ ပြန်လည် ကြိုဆိုပါသည်` : "ပြန်လည် ကြိုဆိုပါသည်"}
          </h1>
          <p className="mm mt-2 max-w-2xl text-sm leading-7 text-brand-50">
            သင်ခန်းစာ {contentCounts.lessons} ခု၊ စကားလုံး {contentCounts.words} လုံး၊ လေ့ကျင့်ခန်း{" "}
            {contentCounts.exercises} ခုကို ကိုယ်တိုင် လေ့လာနိုင်ရန် ပြင်ဆင်ထားသည်။ သင့်တိုးတက်မှုကို
            ဖြေဆိုခဲ့သည့် မေးခွန်းများ၊ ပြီးစီးခဲ့သည့် သင်ခန်းစာများမှသာ တွက်ချက်ပါသည်။
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {next ? (
              <ButtonLink
                href={`/lessons/${next.id}`}
                variant="secondary"
                className="!border-transparent !bg-white !text-brand-700 hover:!bg-brand-50"
              >
                {stats.lessonsCompleted > 0 ? "သင်ယူမှု ဆက်လုပ်ရန် →" : "ပထမ သင်ခန်းစာ စတင်ရန် →"}
              </ButtonLink>
            ) : null}
            <ButtonLink
              href="/review"
              variant="ghost"
              className="!border !border-white/40 !text-white hover:!bg-white/10"
            >
              စကားလုံး ပြန်လည်ကျက်ရန် ({stats.dueReviews})
            </ButtonLink>
          </div>
          <div className="mt-5 max-w-md">
            <div className="flex items-center justify-between text-xs text-brand-100">
              <span className="mm">ယနေ့ ပန်းတိုင် — လုပ်ဆောင်ချက် {goal} ခု</span>
              <span>
                {todayCount} / {goal}
              </span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gold-400 transition-all"
                style={{ width: `${goalPercent}%` }}
              />
            </div>
            <p className="mm mt-1 text-[11px] text-brand-100">
              {goalPercent >= 100
                ? "ယနေ့ ပန်းတိုင် ပြည့်မီပါပြီ။"
                : "သင်ခန်းစာ ဖတ်ခြင်း၊ မေးခွန်း ဖြေခြင်း၊ စကားလုံး သိမ်းခြင်းတို့က ဤပန်းတိုင်ကို ဖြည့်ပေးသည်။"}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat
          label="ပြီးစီးသော သင်ခန်းစာ"
          value={`${stats.lessonsCompleted}/${stats.totalLessons}`}
          hint={`${stats.completionPercent}% ပြီးစီး · ကျွမ်းကျင် ${stats.lessonsMastered}`}
        />
        <Stat label="ဆက်တိုက် လေ့လာမှု" value={`${stats.currentStreak} ရက်`} hint={`အရှည်ဆုံး ${stats.longestStreak} ရက်`} />
        <Stat label="မေးခွန်း တိကျမှု" value={`${stats.accuracy}%`} hint={`${stats.correctAnswers}/${stats.questionsAnswered} မေးခွန်း`} />
        <Stat label="သိမ်းထားသော စကားလုံး" value={stats.wordsSaved} hint={`ရန် ကျန် ${stats.dueReviews} လုံး`} />
        <Stat label="ကျွမ်းကျင်သည့် စကားလုံး" value={stats.wordsKnown} hint={`စုစုပေါင်း ${contentCounts.words} လုံး ရနိုင်သည်`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="mm text-base font-bold text-ink-900 dark:text-white">ယနေ့ လုပ်ရန် အကြံပြုချက်များ</h2>
            <Badge tone="brand">အချက်အလက်အပေါ် အခြေခံ</Badge>
          </div>
          {recommendations.length === 0 ? (
            <p className="mm mt-3 text-sm text-ink-600 dark:text-ink-300">
              လေ့ကျင့်ခန်း ဖြေဆိုပြီးပါက ဤနေရာတွင် သင့်အားနည်းချက်အလိုက် အကြံပြုချက်များ ပေါ်လာမည်။
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {recommendations.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-ink-200 px-4 py-3 transition hover:border-brand-400 hover:bg-brand-50/50 dark:border-ink-800 dark:hover:border-brand-600 dark:hover:bg-brand-900/20"
                  >
                    <p className="mm text-sm font-semibold text-ink-900 dark:text-white">{item.title}</p>
                    <p className="mm mt-1 text-xs leading-6 text-ink-600 dark:text-ink-300">{item.detail}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <h3 className="mm mt-6 text-sm font-bold text-ink-900 dark:text-white">သင်ရိုး အဆင့်များ</h3>
          <ul className="mt-2 space-y-2">
            {CEFR_LEVELS.map((level) => {
              const data = stats.byLevel.find((item) => item.level === level.level);
              const total = data?.total ?? 0;
              const completed = data?.completed ?? 0;
              return (
                <li key={level.level} className="flex items-center gap-3">
                  <LevelBadge level={level.level} />
                  <div className="min-w-0 flex-1">
                    <ProgressBar value={total ? (completed / total) * 100 : 0} />
                  </div>
                  <span className="w-16 text-right text-xs text-ink-500 dark:text-ink-400">
                    {completed}/{total}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
            C2 အဆင့် သင်ခန်းစာများကို နောက်ဆက်တွဲတွင် ထည့်သွင်းရန် စီစဉ်ထားသည် (လက်ရှိ အကြမ်းဖျင်း သင်ရိုးတွင်
            ပါဝင်သည်)။ သင်ခန်းစာ ပြီးစီးမှုသည် ကျွမ်းကျင်မှု လက်မှတ် မဟုတ်ပါ။
          </p>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">၇ ရက် အတွင်း လုပ်ဆောင်ချက်</h2>
            <div className="mt-3 flex h-28 items-end gap-2" role="img" aria-label="နောက်ဆုံး ၇ ရက် လုပ်ဆောင်ချက် ဇယား">
              {stats.recent.map((day) => (
                <div key={day.day} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-brand-500/80 dark:bg-brand-400/80"
                    style={{ height: `${Math.max(4, (day.count / maxWeek) * 88)}px` }}
                    title={`${day.day}: ${day.count}`}
                  />
                  <span className="text-[10px] text-ink-500 dark:text-ink-400">{day.day.slice(8)}</span>
                </div>
              ))}
            </div>
            <p className="mm mt-2 text-xs text-ink-500 dark:text-ink-400">
              လုပ်ဆောင်ချက် = ပြီးစီးသော သင်ခန်းစာ၊ ဖြေဆိုသော မေးခွန်း၊ သိမ်းထားသော စကားလုံး စသည်။
            </p>
          </Card>

          <Card className="p-5">
            <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ပါဝင်သည့် အကြောင်းအရာ</h2>
            <ul className="mm mt-2 space-y-1 text-xs text-ink-600 dark:text-ink-300">
              <li>သင်ခန်းစာ — {contentCounts.lessons} ခု (အပြည့်အစုံ)</li>
              <li>စီစဉ်ထားသော သင်ခန်းစာ — {contentCounts.planned} ခု (မရေးသားရသေး)</li>
              <li>ဖတ်ရှုမှု စာပိုဒ် — {contentCounts.readingPassages}</li>
              <li>နားထောင်မှု script — {contentCounts.listeningScripts} (အသံဖိုင် မပါ)</li>
              <li>စာရေးသားမှု တာဝန် — {contentCounts.writingTasks}</li>
              <li>ပြောဆိုမှု စာသား လေ့ကျင့်ခန်း — {contentCounts.speakingTasks}</li>
              <li>စာမေးပွဲ — {contentCounts.quizzes}</li>
            </ul>
          </Card>
        </div>
      </div>

      <Card className="p-5">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">Module လိုက် တိုးတက်မှု</h2>
          <ButtonLink href="/roadmap" variant="ghost">
            သင်ရိုး အပြည့်အစုံ →
          </ButtonLink>
        </div>
        {stats.byModule.length === 0 ? (
          <div className="mt-3">
            <Empty title="သင်ခန်းစာ မစတင်ရသေးပါ">
              ပထမ သင်ခန်းစာကို ဖွင့်ကြည့်ပါ။ ဖွင့်ကြည့်ရုံဖြင့် ပြီးစီးမည် မဟုတ်ပါ — လေ့ကျင့်ခန်း ဖြေဆိုမှသာ
              ပြီးစီးအဖြစ် သတ်မှတ်ပါသည်။
            </Empty>
          </div>
        ) : (
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stats.byModule.map((module) => (
              <li key={module.moduleId} className="rounded-xl border border-ink-200 p-3 dark:border-ink-800">
                <div className="flex items-center justify-between gap-2">
                  <p className="mm truncate text-sm font-semibold text-ink-900 dark:text-white">
                    {module.moduleId}. {moduleTitleMm(module.moduleId)}
                  </p>
                  <span className="shrink-0 text-xs text-ink-500 dark:text-ink-400">
                    {module.completed}/{module.total}
                  </span>
                </div>
                <ProgressBar value={(module.completed / Math.max(1, module.total)) * 100} className="mt-2" />
                <p className="mm mt-1 text-[11px] text-ink-500 dark:text-ink-400">
                  စီစဉ်ထားသည် +{plannedByModule[module.moduleId] ?? 0} ခု · ကျွမ်းကျင် {module.mastered}
                </p>
              </li>
            ))}
          </ul>
        )}
        <p className="mm mt-4 text-xs leading-6 text-ink-500 dark:text-ink-400">
          Module စာရင်း — {MODULES.map((module) => `${module.id}: ${module.titleMm}`).join(" · ")}
        </p>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ButtonLink href="/vocabulary" variant="secondary" className="justify-between">
          စကားလုံး ဘဏ် <span aria-hidden="true">→</span>
        </ButtonLink>
        <ButtonLink href="/reading" variant="secondary" className="justify-between">
          ဖတ်ရှုမှု လေ့ကျင့် <span aria-hidden="true">→</span>
        </ButtonLink>
        <ButtonLink href="/quizzes" variant="secondary" className="justify-between">
          စာမေးပွဲ ဖြေဆိုရန် <span aria-hidden="true">→</span>
        </ButtonLink>
        <ButtonLink href="/progress" variant="secondary" className="justify-between">
          အမှားများ ပြန်ကြည့်ရန် <span aria-hidden="true">→</span>
        </ButtonLink>
      </div>

      <p className="mm text-center text-xs leading-6 text-ink-500 dark:text-ink-400">
        ဤစာမျက်နှာရှိ အချက်အလက်အားလုံးသည် သင့်ဘရောက်ဇာတွင် သိမ်းဆည်းထားသည့် လုပ်ဆောင်ချက်မှ တွက်ချက်သည်။
      </p>
    </div>
  );
}
