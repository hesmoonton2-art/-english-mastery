"use client";

import Link from "next/link";
import { speakingTasks } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, Card, LevelBadge, PageHeader } from "@/components/ui";

export default function SpeakingListPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="ပြောဆိုမှု"
        titleMm="Speaking"
        description={`စာသားအခြေခံ အခြေအနေ ${speakingTasks.length} ခု — မိတ်ဆက်ခြင်း၊ လမ်းမေးခြင်း၊ ထင်မြင်ချက် ဖော်ပြခြင်းနှင့် တင်ဆက်မှု။ အသုံးဝင်သော စကားစုများ၊ မေးခွန်းများနှင့် စံပြအဖြေများ ပါဝင်သည်။`}
        actions={<Badge tone="brand">အခြေအနေ {speakingTasks.length} ခု</Badge>}
      />

      <Card className="border-amber-300 bg-amber-50/70 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mm text-xs leading-6 text-amber-800 dark:text-amber-200">
          အသံဖမ်းခြင်း၊ အသံထွက် ခွဲခြမ်းစိတ်ဖြာခြင်း သို့မဟုတ် AI စကားပြော အကဲဖြတ်ခြင်း မရှိပါ။
          ကိုယ်တိုင် အသံထွက် ပြောကြည့်ပြီး စံပြအဖြေနှင့် နှိုင်းယှဉ်ရန် လေ့ကျင့်ခန်းများ ဖြစ်သည်။
        </p>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {speakingTasks.map((task) => {
          const record = state.speaking.find((item) => item.taskId === task.id);
          return (
            <Card key={task.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={task.level} />
                <Badge tone="slate">မေးခွန်း {task.prompts.length}</Badge>
                {record ? (
                  <Badge tone="green">
                    ကိုယ်တိုင် စစ်ဆေး {record.checked}/{record.total}
                  </Badge>
                ) : null}
              </div>
              <h2 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{task.title}</h2>
              <p className="mm text-sm text-ink-600 dark:text-ink-300">{task.titleMm}</p>
              <p className="mm mt-2 line-clamp-2 text-xs leading-6 text-ink-500 dark:text-ink-400">{task.situationMm}</p>
              <div className="mt-3">
                <Link
                  href={`/speaking/${task.id}`}
                  className="mm rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  လေ့ကျင့်မည် →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
