import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { lessonStatus, type LessonProgress, type LessonStatus } from "@/lib/core/stats";
import { Badge, LevelBadge } from "./ui";

const STATUS_TEXT: Record<LessonStatus, { label: string; tone: string }> = {
  locked: { label: "မဖွင့်ရသေး", tone: "slate" },
  "not-started": { label: "မစတင်ရသေး", tone: "slate" },
  "in-progress": { label: "ဖတ်ရှုနေဆဲ", tone: "amber" },
  completed: { label: "ပြီးစီး", tone: "green" },
  mastered: { label: "ကျွမ်းကျင်", tone: "violet" },
};

export function LessonStatusBadge({ status }: { status: LessonStatus }) {
  const meta = STATUS_TEXT[status];
  return <Badge tone={meta.tone}>{meta.label}</Badge>;
}

export default function LessonCard({
  lesson,
  progress,
}: {
  lesson: Lesson;
  progress?: LessonProgress;
}) {
  const status = lessonStatus(progress);
  return (
    <li>
      <Link
        href={`/lessons/${lesson.id}`}
        className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-600"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <LevelBadge level={lesson.level} />
            <Badge tone="slate">{lesson.moduleId}</Badge>
          </span>
          <LessonStatusBadge status={status} />
        </div>
        <p className="mt-2 text-sm font-bold text-ink-900 dark:text-white">{lesson.title}</p>
        <p className="mm text-sm text-ink-600 dark:text-ink-300">{lesson.titleMm}</p>
        <p className="mm mt-2 line-clamp-2 text-xs leading-6 text-ink-500 dark:text-ink-400">
          {lesson.summaryLine}
        </p>
        <div className="mm mt-auto flex items-center justify-between pt-3 text-[11px] text-ink-500 dark:text-ink-400">
          <span>⏱ {lesson.minutes} မိနစ်</span>
          <span>
            လေ့ကျင့်ခန်း {lesson.guided.length + lesson.independent.length}
            {typeof progress?.bestScore === "number" ? ` · အကောင်းဆုံး ${progress.bestScore}%` : ""}
          </span>
        </div>
      </Link>
    </li>
  );
}
