"use client";

import Link from "next/link";
import { writingTasks } from "@/content";
import { formatDate } from "@/lib/core/dates";
import { useApp } from "@/lib/store";
import { Badge, Card, LevelBadge, PageHeader } from "@/components/ui";

export default function WritingListPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="စာရေးသားမှု"
        titleMm="Writing"
        description="စာပိုဒ်၊ ထင်မြင်ချက် စာစီစာကုံး၊ တရားဝင် အီးမေးလ်၊ အားသာချက်/အားနည်းချက် ဆွေးနွေးချက်နှင့် အနှစ်ချုပ် ရေးသားမှု တာဝန် ငါးခု။ တာဝန်တိုင်းတွင် စစ်ဆေးစရာ စာရင်း၊ rubric၊ စံပြအဖြေနှင့် အကြံပြုချက်များ ပါဝင်သည်။"
        actions={<Badge tone="brand">တာဝန် {writingTasks.length} ခု</Badge>}
      />

      <Card className="border-amber-300 bg-amber-50/70 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mm text-xs leading-6 text-amber-800 dark:text-amber-200">
          စာရေးသားမှု အကဲဖြတ်ချက်သည် စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာမှုသာ ဖြစ်သည် (စကားလုံးအရေအတွက်၊
          စာပိုဒ်၊ ဆက်စပ်စကားလုံး စသည်)။ AI အဆင့် အကဲဖြတ်မှု မဟုတ်သလို IELTS band လည်း မပေးပါ။
          ကိုယ်တိုင် rubric ဖြင့် ပြန်လည် သုံးသပ်ရန် လိုအပ်သည်။
        </p>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {writingTasks.map((task) => {
          const record = state.writing.find((item) => item.taskId === task.id);
          return (
            <Card key={task.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={task.level} />
                <Badge tone="slate">{task.kind}</Badge>
                {record ? <Badge tone="green">{record.words} လုံး</Badge> : null}
              </div>
              <h2 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{task.title}</h2>
              <p className="mm text-sm text-ink-600 dark:text-ink-300">{task.titleMm}</p>
              <p className="mm mt-2 line-clamp-2 text-xs leading-6 text-ink-500 dark:text-ink-400">{task.promptMm}</p>
              {record ? (
                <p className="mm mt-2 text-[11px] text-ink-500 dark:text-ink-400">
                  နောက်ဆုံး သိမ်းချိန် — {formatDate(record.updatedAt)} · {record.score}/{record.scoreMax} အချက်
                </p>
              ) : null}
              <div className="mt-3">
                <Link
                  href={`/writing/${task.id}`}
                  className="mm rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  {record ? "ဆက်ရေးမည် →" : "စတင်ရေးမည် →"}
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
