"use client";

import { useMemo, useState } from "react";
import { wordBank } from "@/content";
import { CEFR_LEVELS } from "@/content/meta";
import { exportStateJson, exportWordCsv } from "@/lib/export";
import { useApp } from "@/lib/store";
import WordCard from "@/components/WordCard";
import { Badge, Card, Empty, PageHeader, buttonClass } from "@/components/ui";

export default function VocabularyPage() {
  const { state } = useApp();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [topic, setTopic] = useState("all");
  const [savedOnly, setSavedOnly] = useState(false);
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [limit, setLimit] = useState(30);

  const topics = useMemo(
    () => Array.from(new Set(wordBank.map((entry) => entry.topic))).sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return wordBank.filter((entry) => {
      if (level !== "all" && entry.level !== level) return false;
      if (topic !== "all" && entry.topic !== topic) return false;
      const record = state.words[entry.key];
      if (savedOnly && !record) return false;
      if (bookmarkedOnly && !record?.bookmarked) return false;
      if (search) {
        const haystack = `${entry.en} ${entry.mm} ${entry.example} ${entry.topic}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });
  }, [query, level, topic, savedOnly, bookmarkedOnly, state.words]);

  const savedCount = Object.keys(state.words).length;

  return (
    <div className="space-y-5">
      <PageHeader
        title="စကားလုံး ဘဏ်"
        titleMm="Word bank"
        description={`သင်ခန်းစာများနှင့် ဖတ်ရှုမှု စာပိုဒ်များမှ စကားလုံး ${wordBank.length} လုံးကို ဤနေရာတွင် ရှာနိုင်သည်။ သိမ်းထားသည့် စကားလုံးများသည် သင့်ဘရောက်ဇာတွင်သာ ရှိမည်။`}
        actions={
          <>
            <Badge tone="green">သိမ်းထား {savedCount}</Badge>
            <button
              type="button"
              onClick={() => exportWordCsv(filtered, state)}
              className={buttonClass("secondary")}
            >
              လက်ရှိ ရလဒ် CSV
            </button>
            <button
              type="button"
              onClick={() => exportStateJson(state, wordBank)}
              className={buttonClass("secondary")}
            >
              JSON အရန်
            </button>
          </>
        }
      />

      <Card className="p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            ရှာဖွေရန်
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="စကားလုံး သို့မဟုတ် အဓိပ္ပာယ်"
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            />
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အဆင့်
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">အားလုံး</option>
              {CEFR_LEVELS.map((item) => (
                <option key={item.level} value={item.level}>
                  {item.level}
                </option>
              ))}
            </select>
          </label>
          <label className="mm block text-xs font-semibold text-ink-600 dark:text-ink-300">
            အကြောင်းအရာ
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="mm mt-1 w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm font-normal dark:border-ink-700 dark:bg-ink-950"
            >
              <option value="all">အားလုံး</option>
              {topics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <div className="mm flex flex-col justify-end gap-1 text-xs font-semibold text-ink-600 dark:text-ink-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={savedOnly}
                onChange={(event) => setSavedOnly(event.target.checked)}
                className="h-4 w-4 rounded border-ink-300 text-brand-600"
              />
              သိမ်းထားသည် သာ
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={bookmarkedOnly}
                onChange={(event) => setBookmarkedOnly(event.target.checked)}
                className="h-4 w-4 rounded border-ink-300 text-brand-600"
              />
              ★ အမှတ်အသား သာ
            </label>
          </div>
        </div>
        <p className="mm mt-3 text-xs text-ink-500 dark:text-ink-400">
          ရလဒ် {filtered.length} လုံး · စကားလုံး သိမ်းခြင်းဖြင့် ပြန်လည်လေ့ကျင့်ရန် စာရင်းထဲ ရောက်မည်။
        </p>
      </Card>

      {filtered.length === 0 ? (
        <Empty title="စကားလုံး မတွေ့ပါ">
          ရှာဖွေမှု သို့မဟုတ် စစ်ထုတ်မှုကို ပြောင်းကြည့်ပါ။ သိမ်းထားသည့် စကားလုံးများကို မှတ်စုစာအုပ်တွင်
          လည်း ကြည့်နိုင်သည်။
        </Empty>
      ) : (
        <>
          <ul className="grid gap-3 lg:grid-cols-2">
            {filtered.slice(0, limit).map((entry) => (
              <WordCard key={entry.key} entry={entry} />
            ))}
          </ul>
          {filtered.length > limit ? (
            <div className="text-center">
              <button type="button" onClick={() => setLimit(limit + 30)} className={buttonClass("secondary")}>
                နောက်ထပ် ၃၀ လုံး ပြမည် ({filtered.length - limit} လုံး ကျန်)
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
