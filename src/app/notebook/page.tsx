"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessonById, speakingTasks, wordBank, writingTasks } from "@/content";
import { formatDate } from "@/lib/core/dates";
import { copyText } from "@/lib/export";
import { useApp } from "@/lib/store";
import WordCard from "@/components/WordCard";
import { Badge, Card, Empty, PageHeader, buttonClass } from "@/components/ui";

function LessonNote({ noteKey, initial }: { noteKey: string; initial: string }) {
  const { actions } = useApp();
  const lessonId = noteKey.replace("lesson:", "");
  const lesson = lessonById(lessonId);
  const [draft, setDraft] = useState(initial);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setDraft(initial);
  }, [initial]);

  return (
    <li className="rounded-xl border border-ink-200 p-4 dark:border-ink-800">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink-900 dark:text-white">
          {lesson ? lesson.title : lessonId}
          {lesson ? <span className="mm ml-2 text-xs font-normal text-ink-500">{lesson.titleMm}</span> : null}
        </p>
        {lesson ? (
          <Link href={`/lessons/${lesson.id}`} className="mm text-xs text-brand-700 underline dark:text-brand-300">
            သင်ခန်းစာ ဖွင့်
          </Link>
        ) : null}
      </div>
      <textarea
        rows={3}
        value={draft}
        onChange={(event) => {
          setDraft(event.target.value);
          setSaved(false);
        }}
        className="mm mt-2 w-full rounded-lg border border-ink-300 bg-white px-2 py-1.5 text-xs dark:border-ink-700 dark:bg-ink-950 dark:text-white"
      />
      <div className="mt-1 flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            actions.saveNote(noteKey, draft);
            setSaved(true);
          }}
          className={buttonClass("primary", "!px-2 !py-1 !text-[11px]")}
        >
          သိမ်း
        </button>
        {saved ? <span className="mm text-[11px] text-emerald-600">သိမ်းပြီး</span> : null}
      </div>
    </li>
  );
}

export default function NotebookPage() {
  const { state } = useApp();
  const [copied, setCopied] = useState(false);

  const savedWordKeys = Object.keys(state.words);
  const wordNotes = wordBank.filter((entry) => state.words[entry.key]?.note.trim());
  const bookmarkedWords = wordBank.filter((entry) => state.words[entry.key]?.bookmarked);
  const lessonNotes = Object.entries(state.notes).filter(([, note]) => note.trim());
  const bookmarkedLessons = state.lessonBookmarks
    .map((id) => lessonById(id))
    .filter((lesson): lesson is NonNullable<ReturnType<typeof lessonById>> => Boolean(lesson));

  const exportNotes = async () => {
    const lines: string[] = ["# English Mastery — မှတ်စုများ", ""];
    if (wordNotes.length) {
      lines.push("## စကားလုံး မှတ်စုများ");
      for (const entry of wordNotes) {
        lines.push(`- **${entry.en}** (${entry.mm}) — ${state.words[entry.key]?.note ?? ""}`);
      }
      lines.push("");
    }
    if (lessonNotes.length) {
      lines.push("## သင်ခန်းစာ မှတ်စုများ");
      for (const [key, note] of lessonNotes) {
        const lesson = lessonById(key.replace("lesson:", ""));
        lines.push(`### ${lesson ? lesson.title : key}`, note, "");
      }
    }
    const ok = await copyText(lines.join("\n"));
    setCopied(ok);
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title="မှတ်စုစာအုပ်"
        titleMm="Notebook"
        description="သိမ်းထားသော စကားလုံး မှတ်စုများ၊ သင်ခန်းစာ မှတ်စုများ၊ အမှတ်အသား လုပ်ထားသည့် စကားလုံးနှင့် သင်ခန်းစာများ၊ စာရေးသားမှု မူကြမ်းများကို တစ်နေရာတည်းတွင် ကြည့်နိုင်သည်။"
        actions={
          <>
            <Badge tone="slate">စကားလုံး {savedWordKeys.length}</Badge>
            <button type="button" onClick={exportNotes} className={buttonClass("secondary")}>
              မှတ်စုများ ကူးယူရန်
            </button>
          </>
        }
      />
      {copied ? (
        <p className="mm rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">
          မှတ်စုများကို clipboard သို့ ကူးယူပြီးပါပြီ။
        </p>
      ) : null}

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">စကားလုံး မှတ်စုများ</h2>
          <span className="mm text-xs text-ink-500 dark:text-ink-400">{wordNotes.length} ခု</span>
        </div>
        {wordNotes.length === 0 ? (
          <div className="mt-3">
            <Empty title="မှတ်စု မရှိသေးပါ">
              စကားလုံး ဘဏ်တွင် စကားလုံး သိမ်းပြီး “မှတ်စု” ခလုတ်ဖြင့် ကိုယ်ပိုင် မှတ်စု ရေးနိုင်သည်။
            </Empty>
          </div>
        ) : (
          <ul className="mt-3 grid gap-3 lg:grid-cols-2">
            {wordNotes.map((entry) => (
              <WordCard key={entry.key} entry={entry} />
            ))}
          </ul>
        )}
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">သင်ခန်းစာ မှတ်စုများ</h2>
          <span className="mm text-xs text-ink-500 dark:text-ink-400">{lessonNotes.length} ခု</span>
        </div>
        {lessonNotes.length === 0 ? (
          <p className="mm mt-3 text-sm text-ink-500 dark:text-ink-400">
            သင်ခန်းစာ တစ်ခုကို ဖွင့်ပြီး အောက်ခြေရှိ “မှတ်စု” အပိုင်းတွင် ရေးနိုင်သည်။
          </p>
        ) : (
          <ul className="mt-3 space-y-3">
            {lessonNotes.map(([key, note]) => (
              <LessonNote key={key} noteKey={key} initial={note} />
            ))}
          </ul>
        )}
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">★ အမှတ်အသား စကားလုံးများ</h2>
          {bookmarkedWords.length === 0 ? (
            <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
              စကားလုံး ဘဏ်တွင် ☆ ကို နှိပ်ပြီး အမှတ်အသား လုပ်နိုင်သည်။
            </p>
          ) : (
            <ul className="mm mt-2 space-y-1 text-sm text-ink-700 dark:text-ink-200">
              {bookmarkedWords.map((entry) => (
                <li key={entry.key}>
                  <span className="font-semibold">{entry.en}</span> — {entry.mm}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">★ အမှတ်အသား သင်ခန်းစာများ</h2>
          {bookmarkedLessons.length === 0 ? (
            <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
              သင်ခန်းစာ စာမျက်နှာတွင် “သင်ခန်းစာ မှတ်ထားမည်” ကို နှိပ်ပါ။
            </p>
          ) : (
            <ul className="mt-2 space-y-1">
              {bookmarkedLessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link href={`/lessons/${lesson.id}`} className="mm text-sm text-brand-700 underline dark:text-brand-300">
                    {lesson.title} — {lesson.titleMm}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">စာရေးသားမှု မူကြမ်းများ</h2>
          {state.writing.length === 0 ? (
            <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
              စာရေးသားမှု လေ့ကျင့်ခန်း ပြီးပါက ဤနေရာတွင် သိမ်းထားမည်။
            </p>
          ) : (
            <ul className="mm mt-2 space-y-1 text-sm">
              {state.writing.map((record) => {
                const task = writingTasks.find((item) => item.id === record.taskId);
                return (
                  <li key={record.id} className="flex flex-wrap items-baseline gap-2">
                    <Link href={`/writing/${record.taskId}`} className="text-brand-700 underline dark:text-brand-300">
                      {task?.title ?? record.taskId}
                    </Link>
                    <span className="text-xs text-ink-500 dark:text-ink-400">
                      {record.words} လုံး · {record.score}/{record.scoreMax} · {formatDate(record.updatedAt)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="mm text-base font-bold text-ink-900 dark:text-white">ပြောဆိုမှု လေ့ကျင့်မှု မှတ်တမ်း</h2>
          {state.speaking.length === 0 ? (
            <p className="mm mt-2 text-sm text-ink-500 dark:text-ink-400">
              စာသားအခြေခံ ပြောဆိုမှု လေ့ကျင့်ခန်းများတွင် ကိုယ်တိုင် စစ်ဆေးမှု ပြုလုပ်ပါက ဤနေရာတွင် ပေါ်မည်။
            </p>
          ) : (
            <ul className="mm mt-2 space-y-1 text-sm">
              {state.speaking.map((record) => {
                const task = speakingTasks.find((item) => item.id === record.taskId);
                return (
                  <li key={record.taskId} className="flex flex-wrap items-baseline gap-2">
                    <Link href={`/speaking/${record.taskId}`} className="text-brand-700 underline dark:text-brand-300">
                      {task?.title ?? record.taskId}
                    </Link>
                    <span className="text-xs text-ink-500 dark:text-ink-400">
                      {record.checked}/{record.total} အချက် · {formatDate(record.at)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
