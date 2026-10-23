import type {
  CEFR,
  Exercise,
  Lesson,
  ModuleId,
  VocabEntry,
} from "@/lib/types";
import { moduleALessons } from "./lessons/module-a";
import { moduleALessonsPart2 } from "./lessons/module-a2";
import { moduleALessonsPart3 } from "./lessons/module-a3";
import { moduleALessonsPart4 } from "./lessons/module-a4";
import { moduleBLessonsPart1 } from "./lessons/module-b1";
import { moduleBLessonsPart2 } from "./lessons/module-b2";
import { moduleBLessonsPart3 } from "./lessons/module-b3";
import { moduleBLessonsPart4 } from "./lessons/module-b4";
import { moduleCLessons } from "./lessons/module-c";
import { moduleDLessons } from "./lessons/module-d";
import { moduleEFLessons } from "./lessons/module-ef";
import { moduleGLessons } from "./lessons/module-g";
import { moduleHLessons } from "./lessons/module-h";
import { readingPassages } from "./reading";
import { listeningScripts } from "./listening";
import { writingTasks } from "./writing";
import { speakingTasks } from "./speaking";
import { quizzes } from "./quizzes";
import { ieltsPractice, ieltsSpeaking, ieltsWritingTasks } from "./ielts";
import { moduleBLessonsPart5 } from "./lessons/module-b5";
import { moduleBLessonsPart6 } from "./lessons/module-b6";
import { moduleBLessonsPart7 } from "./lessons/module-b7";
import { moduleBLessonsPart8 } from "./lessons/module-b8";
import { moduleCLessonsPart2 } from "./lessons/module-c2";
import { moduleCLessonsPart3 } from "./lessons/module-c3";
import { moduleCLessonsPart4 } from "./lessons/module-c4";
import { moduleCLessonsPart5 } from "./lessons/module-c5";
import { moduleCLessonsPart6 } from "./lessons/module-c6";
import { moduleDLessonsPart2 } from "./lessons/module-d2";
import { moduleDLessonsPart3 } from "./lessons/module-d3";
import { moduleDLessonsPart4 } from "./lessons/module-d4";
import { moduleEFLessonsPart2 } from "./lessons/module-e2";
import { moduleEFLessonsPart3 } from "./lessons/module-e3";
import { moduleEFLessonsPart4 } from "./lessons/module-ef2";
import { moduleEFLessonsPart5 } from "./lessons/module-f2";
import { moduleEFLessonsPart6 } from "./lessons/module-f3";
import { moduleGLessonsPart2 } from "./lessons/module-g2";
import { moduleGLessonsPart3 } from "./lessons/module-g3";
import { moduleGLessonsPart4 } from "./lessons/module-g4";
import { moduleHLessonsPart2 } from "./lessons/module-h2";
import { moduleHLessonsPart3 } from "./lessons/module-h3";
import { moduleHLessonsPart4 } from "./lessons/module-h4";
import { moduleILessons } from "./lessons/module-i";
import { moduleILessonsPart2 } from "./lessons/module-i2";
import { moduleHLessonsPart5 } from "./lessons/module-h5";
import { plannedLessons } from "./curriculum";

export { moduleALessons, moduleALessonsPart2, moduleALessonsPart3, moduleALessonsPart4, moduleBLessonsPart1, moduleBLessonsPart2, moduleBLessonsPart3, moduleBLessonsPart4, moduleCLessons, moduleDLessons, moduleEFLessons, moduleGLessons, moduleHLessons, readingPassages, listeningScripts, writingTasks, speakingTasks, quizzes, ieltsPractice, ieltsWritingTasks, ieltsSpeaking, plannedLessons, moduleBLessonsPart5, moduleBLessonsPart6, moduleBLessonsPart7, moduleBLessonsPart8, moduleCLessonsPart2, moduleCLessonsPart3, moduleCLessonsPart4, moduleCLessonsPart5, moduleCLessonsPart6, moduleDLessonsPart2, moduleDLessonsPart3, moduleDLessonsPart4, moduleEFLessonsPart2, moduleEFLessonsPart3, moduleEFLessonsPart4, moduleEFLessonsPart5, moduleEFLessonsPart6, moduleGLessonsPart2, moduleGLessonsPart3, moduleGLessonsPart4, moduleHLessonsPart2, moduleHLessonsPart3, moduleHLessonsPart4, moduleILessons, moduleILessonsPart2, moduleHLessonsPart5 };

const LEVEL_ORDER: Record<CEFR, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };

export const allLessons: Lesson[] = [
  ...moduleALessons,
  ...moduleALessonsPart2,
  ...moduleALessonsPart3,
  ...moduleALessonsPart4,
  ...moduleBLessonsPart1,
  ...moduleBLessonsPart2,
  ...moduleBLessonsPart3,
  ...moduleBLessonsPart4,
  ...moduleCLessons,
  ...moduleDLessons,
  ...moduleEFLessons,
  ...moduleGLessons,
  ...moduleHLessons,
  ...moduleBLessonsPart5,
  ...moduleBLessonsPart6,
  ...moduleBLessonsPart7,
  ...moduleBLessonsPart8,
  ...moduleCLessonsPart2,
  ...moduleCLessonsPart3,
  ...moduleCLessonsPart4,
  ...moduleCLessonsPart5,
  ...moduleCLessonsPart6,
  ...moduleDLessonsPart2,
  ...moduleDLessonsPart3,
  ...moduleDLessonsPart4,
  ...moduleEFLessonsPart2,
  ...moduleEFLessonsPart3,
  ...moduleEFLessonsPart4,
  ...moduleEFLessonsPart5,
  ...moduleEFLessonsPart6,
  ...moduleGLessonsPart2,
  ...moduleGLessonsPart3,
  ...moduleGLessonsPart4,
  ...moduleHLessonsPart2,
  ...moduleHLessonsPart3,
  ...moduleHLessonsPart4,
  ...moduleILessons,
  ...moduleILessonsPart2,
  ...moduleHLessonsPart5,
].sort((a, b) => {
  const mod = a.moduleId.localeCompare(b.moduleId);
  return mod !== 0 ? mod : LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level];
});

export function lessonById(id: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.id === id);
}

export function lessonsByModule(moduleId: ModuleId): Lesson[] {
  return allLessons.filter((lesson) => lesson.moduleId === moduleId);
}

export function nextLessonAfter(id: string): Lesson | undefined {
  const index = allLessons.findIndex((lesson) => lesson.id === id);
  if (index < 0) return undefined;
  return allLessons[index + 1];
}

export function previousLessonBefore(id: string): Lesson | undefined {
  const index = allLessons.findIndex((lesson) => lesson.id === id);
  if (index <= 0) return undefined;
  return allLessons[index - 1];
}

export type WordBankEntry = VocabEntry & {
  key: string;
  sources: { kind: "lesson" | "reading"; id: string; title: string }[];
};

function normaliseKey(word: string): string {
  return word.toLowerCase().trim();
}

/**
 * The word bank is built from authored content only — every entry can be traced back
 * to a lesson or reading passage that uses it.
 */
export const wordBank: WordBankEntry[] = (() => {
  const map = new Map<string, WordBankEntry>();

  const add = (entry: VocabEntry, source: WordBankEntry["sources"][number]) => {
    const key = normaliseKey(entry.en);
    const existing = map.get(key);
    if (existing) {
      if (!existing.sources.some((item) => item.id === source.id && item.kind === source.kind)) {
        existing.sources.push(source);
      }
      return;
    }
    map.set(key, { ...entry, key, sources: [source] });
  };

  for (const lesson of allLessons) {
    for (const vocab of lesson.vocab) {
      add(vocab, { kind: "lesson", id: lesson.id, title: lesson.title });
    }
  }
  for (const passage of readingPassages) {
    for (const vocab of passage.glossary) {
      add(vocab, { kind: "reading", id: passage.id, title: passage.title });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.en.localeCompare(b.en));
})();

export const wordByKey = new Map(wordBank.map((word) => [word.key, word]));

export function exercisesForLesson(lesson: Lesson): Exercise[] {
  return [...lesson.guided, ...lesson.independent];
}

/** Counts used across the dashboard; all derived from authored content. */
export const contentCounts = {
  lessons: allLessons.length,
  planned: plannedLessons.length,
  words: wordBank.length,
  readingPassages: readingPassages.length,
  listeningScripts: listeningScripts.length,
  writingTasks: writingTasks.length,
  speakingTasks: speakingTasks.length,
  quizzes: quizzes.length,
  ieltsTasks: ieltsPractice.length + ieltsWritingTasks.length,
  exercises:
    allLessons.reduce((total, lesson) => total + lesson.guided.length + lesson.independent.length, 0) +
    quizzes.reduce((total, quiz) => total + quiz.exercises.length, 0) +
    readingPassages.reduce((total, passage) => total + passage.questions.length, 0) +
    listeningScripts.reduce((total, script) => total + script.questions.length, 0) +
    ieltsPractice.reduce((total, task) => total + task.exercises.length, 0),
};
