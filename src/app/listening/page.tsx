"use client";

import Link from "next/link";
import { listeningScripts } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, Card, LevelBadge, PageHeader } from "@/components/ui";

export default function ListeningListPage() {
  const { state } = useApp();

  return (
    <div className="space-y-5">
      <PageHeader
        title="နားထောင်မှု"
        titleMm="Listening"
        description="မူရင်း script လေးခုကို ဤသင်ရိုးအတွက် ရေးသားထားသည်။ အသံဖိုင် မပါဝင်ပါ — script ကို ကိုယ်တိုင် ဖတ်ပြီး (သို့မဟုတ် မိတ်ဆွေတစ်ဦးက ဖတ်ပေးပြီး) နားထောင်မှု လေ့ကျင့်နိုင်သည်။"
        actions={<Badge tone="brand">Script {listeningScripts.length} ခု</Badge>}
      />

      <Card className="border-amber-300 bg-amber-50/70 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mm text-xs leading-6 text-amber-800 dark:text-amber-200">
          အသံဖိုင် မရှိပါ။ မည်သည့် နေရာတွင်မျှ “အသံဖွင့်” ခလုတ် မပြပါ။ ထို့ကြောင့် ဤလေ့ကျင့်ခန်းသည်
          အသံထွက်/နားထောင်မှု အလိုအလျောက် အကဲဖြတ်မှု မဟုတ်ပါ။
        </p>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {listeningScripts.map((script) => {
          const attempts = state.attempts.filter((attempt) => attempt.refId === script.id);
          const best = attempts.reduce(
            (max, attempt) =>
              attempt.total > 0 ? Math.max(max, Math.round((attempt.correct / attempt.total) * 100)) : max,
            0,
          );
          return (
            <Card key={script.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={script.level} />
                <span className="mm text-xs text-ink-500 dark:text-ink-400">⏱ {script.minutes} မိနစ်</span>
                {attempts.length > 0 ? <Badge tone="green">အကောင်းဆုံး {best}%</Badge> : null}
              </div>
              <h2 className="mt-2 text-base font-bold text-ink-900 dark:text-white">{script.title}</h2>
              <p className="mm text-sm text-ink-600 dark:text-ink-300">{script.titleMm}</p>
              <p className="mm mt-2 text-xs leading-6 text-ink-500 dark:text-ink-400">{script.context}</p>
              <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">
                စကားပြောလှည့် {script.lines.length} ကြောင်း · မေးခွန်း {script.questions.length} ခု
              </p>
              <div className="mt-3">
                <Link
                  href={`/listening/${script.id}`}
                  className="mm rounded-xl bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                >
                  Script ဖတ်ရှုမည် →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
