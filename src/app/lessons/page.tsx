"use client";

import { useMemo, useState } from "react";
import { allLessons } from "@/content";
import { CEFR_LEVELS, MODULES, moduleTitleMm } from "@/content/meta";
import { lessonStatus } from "@/lib/core/stats";
import { useApp } from "@/lib/store";
import LessonCard from "@/components/LessonCard";
import { Badge, Card, Empty, PageHeader } from "@/components/ui";

const STATUS_OPTIONS = [
  { value: "all", label: "အားလုံး" },
  { value: "not-started", label: "မစတင်ရသေး" },
  { value: "in-progress", label: "ဖတ်ရှုနေဆဲ" },
  { value: "completed", label: "ပြီးစီး" },
  { value: "mastered", label: "ကျွမ်းကျင်" },
];

export default function LessonsPage() {
  const { state } = useApp();
  const [module, setModule] = useState("all");
  const [level, setLevel] = useState("all");
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return allLessons.filter((lesson) => {
      if (module !== "all" && lesson.moduleId !== module) return false;
      if (level !== "all" && lesson.level !== level) return false;
      if (status !== "all") {
        const current = lessonStatus(state.lessons[lesson.id]);
        if (status === "completed" && !["completed", "mastered"].includes(current)) return false;
        if (status === "not-started" && !["not-started", "locked"].includes(current)) return false;
        if (status === "in-progress" && current !== "in-progress") return false;
        if (status === "mastered" && current !== "mastered") return false;
      }
      if (search) {
        const haystack = `${lesson.title} ${lesson.titleMm} ${lesson.topics.join(" ")} ${lesson.summaryLine}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });
  }, [module, level, status, query, state.lessons]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="သင်ခန်းစာများ"
        titleMm="Lessons"
        description="သင်ခန်းစာ တစ်ခုစီတွင် ရည်မှန်းချက်၊ မြန်မာလို ရှင်းလင်းချက်၊ စကားလုံး၊ ဥပမာ၊ အမှား၊ လမ်းညွှန် လေ့ကျင့်ခန်း၊ ကိုယ်တိုင် လေ့ကျင့်ခန်း၊ အဖြေနှင့် ရှင်းလင်းချက်၊ ပြန်လည်သုံးသပ်မေးခွန်းများနှင့် ကျွမ်းကျင်မှု သတ်မှတ်ချက်များ ပါဝင်သည်။"
        actions={<Badge tone="brand">သင်ခန်းစာ {allLessons.length} ခု</Badge>}
      />

      <Card className="p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            ရှာဖွေရန်
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ခေါင်းစဉ် သို့မဟုတ် အကြောင်းအရာ"
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal text-ink-900 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
            />
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            Module
            <select
              value={module}
              onChange={(event) => setModule(event.target.value)}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">Module အားလုံး</option>
              {MODULES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}. {moduleTitleMm(item.id)}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အဆင့်
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">အဆင့် အားလုံး</option>
              {CEFR_LEVELS.map((item) => (
                <option key={item.level} value={item.level}>
                  {item.level} — {item.labelMm}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အခြေအနေ
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              {STATUS_OPTIONS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mm mt-3 text-xs text-ink-500 dark:text-ink-400">
          ရလဒ် {filtered.length} ခု — သင်ခန်းစာ ဖွင့်ကြည့်ရုံဖြင့် “ပြီးစီး” မဖြစ်ပါ။ ကိုယ်တိုင် လေ့ကျင့်ခန်း
          ဖြေဆိုပြီးမှသာ ပြီးစီးအဖြစ် သတ်မှတ်သည်။
        </p>
      </Card>

      {filtered.length === 0 ? (
        <Empty title="ကိုက်ညီသော သင်ခန်းစာ မတွေ့ပါ">ရှာဖွေမှု သို့မဟုတ် စစ်ထုတ်မှုကို ပြောင်းကြည့်ပါ။</Empty>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} progress={state.lessons[lesson.id]} />
          ))}
        </ul>
      )}
    </div>
  );
}
