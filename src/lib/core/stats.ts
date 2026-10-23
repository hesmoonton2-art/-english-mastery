import type { CEFR, ModuleId } from "../types.ts";
import { computeStreak, lastNDays } from "./dates.ts";

export type LessonStatus = "locked" | "not-started" | "in-progress" | "completed" | "mastered";

export type LessonProgress = {
  openedAt?: string;
  completedAt?: string;
  bestScore?: number | null;
  lastScore?: number | null;
  attempts?: number;
  masteredAt?: string;
  reviewsSeen?: number;
};

export type AttemptRecord = {
  id: string;
  at: string;
  kind: "lesson" | "quiz" | "reading" | "listening" | "ielts" | "assessment";
  refId: string;
  refTitle: string;
  correct: number;
  total: number;
  topics: Record<string, { correct: number; total: number }>;
  wrong: {
    prompt: string;
    given: string;
    expected: string;
    explanation: string;
    topic: string;
  }[];
};

export type WordRecord = {
  addedAt: string;
  bookmarked: boolean;
  note: string;
  known: boolean;
  srs: {
    due: string;
    ease: number;
    intervalDays: number;
    reps: number;
    lapses?: number;
    lastReviewed?: string | null;
  };
};

export type LessonMeta = { id: string; moduleId: ModuleId; level: CEFR; title: string };

export type WeakTopic = { topic: string; correct: number; total: number; accuracy: number };

export type Stats = {
  totalLessons: number;
  lessonsCompleted: number;
  lessonsMastered: number;
  lessonsStarted: number;
  completionPercent: number;
  questionsAnswered: number;
  correctAnswers: number;
  accuracy: number;
  attempts: number;
  studyDays: number;
  currentStreak: number;
  longestStreak: number;
  wordsSaved: number;
  wordsKnown: number;
  dueReviews: number;
  byModule: {
    moduleId: ModuleId;
    total: number;
    completed: number;
    mastered: number;
  }[];
  byLevel: { level: CEFR; total: number; completed: number }[];
  weakTopics: WeakTopic[];
  recent: { day: string; count: number }[];
};

export type StatsInput = {
  lessons: LessonMeta[];
  progress: Record<string, LessonProgress>;
  attempts: AttemptRecord[];
  activity: Record<string, number>;
  words: Record<string, WordRecord>;
  today: string;
};

export function lessonStatus(progress: LessonProgress | undefined): LessonStatus {
  if (!progress) return "not-started";
  if (progress.masteredAt) return "mastered";
  if (progress.completedAt) return "completed";
  if (progress.openedAt) return "in-progress";
  return "locked";
}

/**
 * Progress is calculated from stored learning activity only: closed lessons,
 * submitted attempts and saved words. Opening a lesson never counts as completion.
 */
export function computeStats(input: StatsInput): Stats {
  const { lessons, progress, attempts, activity, words, today } = input;

  let lessonsCompleted = 0;
  let lessonsMastered = 0;
  let lessonsStarted = 0;

  for (const lesson of lessons) {
    const status = lessonStatus(progress[lesson.id]);
    if (status === "mastered") lessonsMastered += 1;
    if (status === "completed" || status === "mastered") lessonsCompleted += 1;
    if (status !== "not-started") lessonsStarted += 1;
  }

  let questionsAnswered = 0;
  let correctAnswers = 0;
  const topicTotals: Record<string, { correct: number; total: number }> = {};

  for (const attempt of attempts) {
    questionsAnswered += attempt.total;
    correctAnswers += attempt.correct;
    for (const [topic, value] of Object.entries(attempt.topics ?? {})) {
      const acc = (topicTotals[topic] ??= { correct: 0, total: 0 });
      acc.correct += value.correct;
      acc.total += value.total;
    }
  }

  const weakTopics: WeakTopic[] = Object.entries(topicTotals)
    .filter(([, value]) => value.total >= 3)
    .map(([topic, value]) => ({
      topic,
      correct: value.correct,
      total: value.total,
      accuracy: Math.round((value.correct / value.total) * 100),
    }))
    .filter((topic) => topic.accuracy < 80)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 8);

  const activeDays = Object.entries(activity)
    .filter(([, count]) => count > 0)
    .map(([day]) => day);
  const streak = computeStreak(activeDays, today);

  const byModuleMap = new Map<ModuleId, { total: number; completed: number; mastered: number }>();
  const byLevelMap = new Map<CEFR, { total: number; completed: number }>();

  for (const lesson of lessons) {
    const mod = byModuleMap.get(lesson.moduleId) ?? { total: 0, completed: 0, mastered: 0 };
    mod.total += 1;
    const status = lessonStatus(progress[lesson.id]);
    if (status === "completed" || status === "mastered") mod.completed += 1;
    if (status === "mastered") mod.mastered += 1;
    byModuleMap.set(lesson.moduleId, mod);

    const lvl = byLevelMap.get(lesson.level) ?? { total: 0, completed: 0 };
    lvl.total += 1;
    if (status === "completed" || status === "mastered") lvl.completed += 1;
    byLevelMap.set(lesson.level, lvl);
  }

  const wordList = Object.values(words);
  const dueReviews = wordList.filter((word) => word.srs.due <= today).length;

  const recent = lastNDays(today, 7).map((day) => ({
    day,
    count: activity[day] ?? 0,
  }));

  return {
    totalLessons: lessons.length,
    lessonsCompleted,
    lessonsMastered,
    lessonsStarted,
    completionPercent: lessons.length === 0 ? 0 : Math.round((lessonsCompleted / lessons.length) * 100),
    questionsAnswered,
    correctAnswers,
    accuracy: questionsAnswered === 0 ? 0 : Math.round((correctAnswers / questionsAnswered) * 100),
    attempts: attempts.length,
    studyDays: activeDays.length,
    currentStreak: streak.current,
    longestStreak: streak.longest,
    wordsSaved: wordList.length,
    wordsKnown: wordList.filter((word) => word.known).length,
    dueReviews,
    byModule: Array.from(byModuleMap.entries())
      .map(([moduleId, value]) => ({ moduleId, ...value }))
      .sort((a, b) => a.moduleId.localeCompare(b.moduleId)),
    byLevel: Array.from(byLevelMap.entries())
      .map(([level, value]) => ({ level, ...value }))
      .sort((a, b) => a.level.localeCompare(b.level)),
    weakTopics,
    recent,
  };
}

/** Recommendations derived from real weak-topic data and due vocabulary. */
export function recommendReviews(input: {
  weakTopics: WeakTopic[];
  dueReviews: number;
  nextLessonId?: string;
}): { title: string; detail: string; href: string }[] {
  const out: { title: string; detail: string; href: string }[] = [];
  if (input.dueReviews > 0) {
    out.push({
      title: `စကားလုံး ${input.dueReviews} လုံး ပြန်လည်လေ့ကျင့်ရန် အချိန်ရောက်ပါပြီ`,
      detail: "Spaced repetition queue ထဲတွင် ယနေ့ ပြန်လုပ်ရမည့် စကားလုံးများ ရှိပါသည်။",
      href: "/review",
    });
  }
  for (const topic of input.weakTopics.slice(0, 3)) {
    out.push({
      title: `အားနည်းနေသော အကြောင်းအရာ — ${topic.topic}`,
      detail: `ယခင်ဖြေခဲ့သည့် မေးခွန်း ${topic.total} ခုတွင် ${topic.correct} ခုသာ မှန်ပါသည် (${topic.accuracy}%)။`,
      href: `/practice?topic=${encodeURIComponent(topic.topic)}`,
    });
  }
  if (input.nextLessonId) {
    out.push({
      title: "နောက်ထပ် သင်ခန်းစာ",
      detail: "လက်ရှိ တိုးတက်မှုအပေါ် အခြေခံ၍ သင့်အတွက် နောက်တစ်ဆင့်။",
      href: `/lessons/${input.nextLessonId}`,
    });
  }
  return out;
}

/** Lightweight completion counts used by the app shell (no content index needed). */
export function progressSummary(
  progress: Record<string, LessonProgress>,
  totalLessons: number,
): { completed: number; mastered: number; total: number } {
  const values = Object.values(progress);
  return {
    completed: values.filter((lesson) => Boolean(lesson.completedAt)).length,
    mastered: values.filter((lesson) => Boolean(lesson.masteredAt)).length,
    total: totalLessons,
  };
}
