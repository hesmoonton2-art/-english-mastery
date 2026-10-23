import type { Exercise } from "../types";
import { gradeExercise } from "./grading";

export type AnswerInput = number | string | string[] | null;

export type WrongItem = {
  prompt: string;
  given: string;
  expected: string;
  explanation: string;
  topic: string;
};

export type AttemptSummary = {
  correct: number;
  total: number;
  topics: Record<string, { correct: number; total: number }>;
  wrong: WrongItem[];
};

/** Grades a whole set. Unanswered questions are counted as incorrect. */
export function buildSummary(exercises: Exercise[], responses: AnswerInput[]): AttemptSummary {
  const topics: Record<string, { correct: number; total: number }> = {};
  const wrong: WrongItem[] = [];
  let correct = 0;

  exercises.forEach((exercise, index) => {
    const response = responses[index] ?? null;
    const result = gradeExercise(exercise, response);
    const topic = exercise.topic || "general";
    const entry = (topics[topic] ??= { correct: 0, total: 0 });
    entry.total += 1;
    if (result.correct) {
      correct += 1;
      entry.correct += 1;
    } else {
      wrong.push({
        prompt: exercise.prompt,
        given: result.given || "(မဖြေရသေးပါ)",
        expected: result.expected,
        explanation: exercise.explanation,
        topic,
      });
    }
  });

  return { correct, total: exercises.length, topics, wrong };
}

export function isEmptyAnswer(value: AnswerInput): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  return false;
}
