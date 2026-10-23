"use client";

import { useState } from "react";
import { ieltsSpeaking } from "@/content";
import { useApp } from "@/lib/store";
import { Badge, Card, PageHeader, ProgressBar, buttonClass } from "@/components/ui";

export default function IeltsSpeakingPage() {
  const { actions } = useApp();
  const allQuestions = ieltsSpeaking.parts.flatMap((part) => part.questions);
  const [checks, setChecks] = useState<boolean[]>(() => allQuestions.map(() => false));
  const [saved, setSaved] = useState("");
  const checked = checks.filter(Boolean).length;

  let counter = -1;

  return (
    <div className="space-y-5">
      <PageHeader
        title="IELTS Speaking — Interview Practice"
        titleMm="စာသားအခြေခံ"
        description="Part 1၊ 2၊ 3 အတွက် မေးခွန်းများနှင့် ဖြေနည်း အကြံပြုချက်များ။ ကိုယ်တိုင် အသံထွက် ဖြေပြီး အောက်ပါ band ဖော်ပြချက်များဖြင့် ကိုယ်တိုင် နှိုင်းယှဉ်ပါ။"
        actions={<Badge tone="amber">မိုက်ခရိုဖုန်း/အသံ မပါ</Badge>}
      />

      <Card className="border-amber-300 bg-amber-50/70 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="mm text-xs leading-6 text-amber-800 dark:text-amber-200">{ieltsSpeaking.disclaimer}</p>
      </Card>

      {ieltsSpeaking.parts.map((part) => (
        <Card key={part.name} className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-bold text-ink-900 dark:text-white">{part.name}</h2>
            <Badge tone="slate">⏱ {part.minutes} မိနစ်</Badge>
          </div>
          <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">{part.tipsMm}</p>
          <ol className="mt-3 space-y-2">
            {part.questions.map((question) => {
              counter += 1;
              const position = counter;
              return (
                <li key={question} className="rounded-xl border border-ink-200 p-3 dark:border-ink-800">
                  <p className="text-sm text-ink-900 dark:text-white">{question}</p>
                  <label className="mm mt-1 flex items-center gap-2 text-xs text-ink-600 dark:text-ink-300">
                    <input
                      type="checkbox"
                      checked={checks[position] ?? false}
                      onChange={(event) =>
                        setChecks((list) =>
                          list.map((value, index) => (index === position ? event.target.checked : value)),
                        )
                      }
                      className="h-4 w-4 rounded border-ink-300 text-brand-600"
                    />
                    ဤမေးခွန်းကို ဖြေနိုင်ပြီ
                  </label>
                </li>
              );
            })}
          </ol>
        </Card>
      ))}

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">ကိုယ်တိုင် စစ်ဆေးမှု</h2>
        <div className="mm mt-1 flex justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>ဖြေနိုင်ပြီ ဟု မှတ်ထားသည်</span>
          <span>
            {checked}/{allQuestions.length}
          </span>
        </div>
        <ProgressBar value={(checked / Math.max(1, allQuestions.length)) * 100} className="mt-1" tone="green" />
        <button
          type="button"
          onClick={() => {
            actions.recordSpeaking({ taskId: "ielts-speaking", checked, total: allQuestions.length });
            setSaved("ကိုယ်တိုင် စစ်ဆေးမှု မှတ်တမ်း တင်ပြီးပါပြီ။");
          }}
          className={buttonClass("primary", "mt-3")}
        >
          မှတ်တမ်း တင်မည်
        </button>
        {saved ? <p className="mm mt-2 text-xs text-emerald-600 dark:text-emerald-400">{saved}</p> : null}
      </Card>

      <Card className="p-5">
        <h2 className="mm text-sm font-bold text-ink-900 dark:text-white">Band ဖော်ပြချက်များ (ကိုယ်တိုင် နှိုင်းယှဉ်ရန်)</h2>
        <div className="scrollbar-thin mt-2 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500 dark:bg-ink-800/60 dark:text-ink-300">
              <tr>
                <th className="px-3 py-2">Band</th>
                <th className="px-3 py-2">Speaking</th>
                <th className="px-3 py-2">Writing</th>
              </tr>
            </thead>
            <tbody>
              {ieltsSpeaking.bandDescriptors.map((item) => (
                <tr key={item.band} className="border-t border-ink-100 dark:border-ink-800">
                  <td className="px-3 py-2 font-bold text-ink-900 dark:text-white">{item.band}</td>
                  <td className="mm px-3 py-2 text-xs leading-6 text-ink-700 dark:text-ink-200">{item.speaking}</td>
                  <td className="mm px-3 py-2 text-xs leading-6 text-ink-700 dark:text-ink-200">{item.writing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mm mt-2 text-[11px] leading-5 text-ink-500 dark:text-ink-400">
          ဤဖော်ပြချက်များသည် ယေဘုယျ လမ်းညွှန်ချက်များသာ ဖြစ်သည်။ ပလက်ဖောင်းသည် band မတွက်ပေးပါ။
        </p>
      </Card>
    </div>
  );
}
