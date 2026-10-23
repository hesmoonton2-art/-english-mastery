"use client";

import Link from "next/link";
import { CEFR_LEVELS, MODULES } from "@/content/meta";
import { lessonsByModule, plannedLessons } from "@/content";
import { lessonStatus } from "@/lib/core/stats";
import { useApp } from "@/lib/store";
import { useStats } from "@/lib/hooks";
import { LessonStatusBadge } from "@/components/LessonCard";
import { Badge, Card, LevelBadge, PageHeader, ProgressBar } from "@/components/ui";

export default function RoadmapPage() {
  const { state } = useApp();
  const stats = useStats();

  const totalAuthored = stats.totalLessons;
  const totalPlanned = plannedLessons.length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="သင်ရိုး လမ်းညွှန်"
        titleMm="Roadmap"
        description="Module ကိုး ခုဖြင့် ဖွဲ့စည်းထားသည်။ ရေးသားပြီးသော သင်ခန်းစာများကို တိုက်ရိုက် ဖွင့်နိုင်သည်။ 'စီစဉ်ထားသည်' ဟု ပြထားသော သင်ခန်းစာများမှာ အကြမ်းဖျင်း သင်ရိုးသာဖြစ်ပြီး အကြောင်းအရာ မရေးသားရသေးပါ။"
        actions={
          <Badge tone="brand">
            ရေးသားပြီး {totalAuthored} · စီစဉ်ထားသည် {totalPlanned}
          </Badge>
        }
      />

      <Card className="p-5">
        <h2 className="mm text-base font-bold text-ink-900 dark:text-white">အဆင့် အလိုက် ရည်မှန်းချက် (CEFR)</h2>
        <p className="mm mt-1 text-xs leading-6 text-ink-500 dark:text-ink-400">
          အောက်ပါ သတ်မှတ်ချက်များသည် ဤသင်ရိုး၏ ကိုယ်ပိုင် အကဲဖြတ်ချက်များဖြစ်ပြီး CEFR ၏ တရားဝင်
          လက်မှတ် မဟုတ်ပါ။ သင်ခန်းစာ ပြီးစီးမှုနှင့် လေ့ကျင့်ခန်း ရမှတ်များကို အခြေခံ၍ ကိုယ်တိုင်
          အကဲဖြတ်ရန် ဖြစ်သည်။
        </p>
        <ol className="mt-4 space-y-4">
          {CEFR_LEVELS.map((level) => {
            const data = stats.byLevel.find((item) => item.level === level.level);
            const total = data?.total ?? 0;
            const completed = data?.completed ?? 0;
            return (
              <li key={level.level} className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
                <div className="flex flex-wrap items-center gap-2">
                  <LevelBadge level={level.level} />
                  <span className="mm text-sm font-semibold text-ink-900 dark:text-white">{level.labelMm}</span>
                  <span className="text-xs text-ink-500 dark:text-ink-400">{level.label}</span>
                  <span className="ml-auto text-xs text-ink-500 dark:text-ink-400">
                    သင်ခန်းစာ {completed}/{total} ပြီးစီး
                  </span>
                </div>
                <ProgressBar value={total ? (completed / total) * 100 : 0} className="mt-2" />
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mm text-xs font-semibold text-ink-700 dark:text-ink-200">ဤအဆင့်တွင် လုပ်နိုင်သင့်သည်</p>
                    <ul className="mm mt-1 list-disc space-y-1 pl-4 text-xs leading-6 text-ink-600 dark:text-ink-300">
                      {level.canDo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mm text-xs font-semibold text-ink-700 dark:text-ink-200">ဤသင်ရိုး၏ ကျွမ်းကျင်မှု သတ်မှတ်ချက်</p>
                    <ul className="mm mt-1 list-disc space-y-1 pl-4 text-xs leading-6 text-ink-600 dark:text-ink-300">
                      {level.criteria.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Card>

      <div className="space-y-4">
        {MODULES.map((module) => {
          const authored = lessonsByModule(module.id);
          const planned = plannedLessons.filter((lesson) => lesson.moduleId === module.id);
          const completed = authored.filter((lesson) => {
            const status = lessonStatus(state.lessons[lesson.id]);
            return status === "completed" || status === "mastered";
          }).length;
          return (
            <Card key={module.id} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="text-base font-bold text-ink-900 dark:text-white">
                    <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-ink-900 text-xs font-bold text-white dark:bg-white dark:text-ink-900">
                      {module.id}
                    </span>
                    {module.title}
                  </h2>
                  <p className="mm mt-1 text-sm text-ink-600 dark:text-ink-300">{module.titleMm}</p>
                  <p className="mm mt-1 max-w-2xl text-xs leading-6 text-ink-500 dark:text-ink-400">
                    {module.description}
                  </p>
                </div>
                <div className="text-right">
                  <Badge tone="green">ရေးသားပြီး {authored.length}</Badge>
                  <Badge tone="slate" className="ml-1">
                    စီစဉ်ထားသည် {planned.length}
                  </Badge>
                  <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">ပြီးစီး {completed}/{authored.length}</p>
                </div>
              </div>

              <ul className="mt-3 divide-y divide-ink-100 dark:divide-ink-800">
                {authored.map((lesson) => {
                  const status = lessonStatus(state.lessons[lesson.id]);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="flex flex-wrap items-center gap-2 py-2.5 transition hover:bg-ink-50 dark:hover:bg-ink-800/50"
                      >
                        <LevelBadge level={lesson.level} />
                        <span className="text-sm font-medium text-ink-900 dark:text-white">{lesson.title}</span>
                        <span className="mm text-xs text-ink-500 dark:text-ink-400">{lesson.titleMm}</span>
                        <span className="ml-auto">
                          <LessonStatusBadge status={status} />
                        </span>
                      </Link>
                    </li>
                  );
                })}
                {authored.length === 0 ? (
                  <li className="mm py-3 text-sm text-ink-500 dark:text-ink-400">
                    ဤ module တွင် သင်ခန်းစာ မရေးသားရသေးပါ — စစ်ဆေးမှုများ (စာမေးပွဲ/IELTS) မှ လေ့ကျင့်နိုင်သည်။
                  </li>
                ) : null}
              </ul>

              {planned.length > 0 ? (
                <div className="mt-3 rounded-xl bg-ink-50 p-3 dark:bg-ink-800/40">
                  <p className="mm text-[11px] font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                    စီစဉ်ထားသည် — အကြောင်းအရာ မရေးသားရသေးပါ
                  </p>
                  <ul className="mm mt-1 flex flex-wrap gap-1.5 text-xs text-ink-600 dark:text-ink-300">
                    {planned.map((lesson) => (
                      <li
                        key={lesson.id}
                        className="rounded-full border border-dashed border-ink-300 px-2.5 py-0.5 dark:border-ink-600"
                      >
                        {lesson.level} · {lesson.titleMm}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>

      <p className="mm text-xs leading-6 text-ink-500 dark:text-ink-400">
        ဤသင်ရိုး၏ ပန်းတိုင်မှာ သင်ခန်းစာ ၁၈၀–၂၄၀ ဖြစ်သည်။ လက်ရှိတွင် အပြည့်အစုံ ရေးသားထားသည့် သင်ခန်းစာ{" "}
        {totalAuthored} ခုနှင့် အကြမ်းဖျင်း စီစဉ်ထားသည့် သင်ခန်းစာ {totalPlanned} ခု ရှိသည်။ ဗလာအပုံစံ
        (template) သင်ခန်းစာများကို ပြီးစီးသည်ဟု မရေတွက်ပါ။
      </p>
    </div>
  );
}
