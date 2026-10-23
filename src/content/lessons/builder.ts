import type {
  CEFR,
  Exercise,
  Lesson,
  LessonExample,
  LessonSection,
  Mistake,
  ModuleId,
  VocabEntry,
} from "@/lib/types";

/**
 * Seed exercise types used by the lesson builder. Ids and default topic tags are
 * generated from the lesson id, so every authored exercise still ends up as a
 * complete `Exercise` with a unique id and a scoreable answer.
 */
export type SeedExercise =
  | {
      type: "mcq";
      prompt: string;
      promptMm?: string;
      options: string[];
      answer: number;
      explanation: string;
      topic?: string;
    }
  | {
      type: "fill" | "correct" | "translate";
      prompt: string;
      promptMm?: string;
      answers: string[];
      explanation: string;
      topic?: string;
    }
  | {
      type: "order";
      prompt: string;
      promptMm?: string;
      tokens: string[];
      answer: string;
      explanation: string;
      topic?: string;
    };

export type LessonSeed = {
  id: string;
  moduleId: ModuleId;
  title: string;
  titleMm: string;
  level: CEFR;
  minutes: number;
  summaryLine: string;
  objectives: string[];
  vocab: VocabEntry[];
  sections: LessonSection[];
  examples: LessonExample[];
  mistakes: Mistake[];
  guided: SeedExercise[];
  independent: SeedExercise[];
  review: { q: string; a: string }[];
  summary: string[];
  mastery: string[];
  topics: string[];
};

function toExercise(seed: SeedExercise, id: string, fallbackTopic: string, level: CEFR): Exercise {
  const base = {
    id,
    prompt: seed.prompt,
    promptMm: seed.promptMm,
    explanation: seed.explanation,
    topic: seed.topic ?? fallbackTopic,
    level,
  };
  if (seed.type === "mcq") {
    return { ...base, type: "mcq", options: seed.options, answer: seed.answer };
  }
  if (seed.type === "order") {
    return { ...base, type: "order", tokens: seed.tokens, answers: [seed.answer] };
  }
  return { ...base, type: seed.type, answers: seed.answers };
}

/** Builds a complete, validated `Lesson` from authored seed content. */
export function buildLesson(seed: LessonSeed): Lesson {
  const fallbackTopic = seed.topics[0] ?? "general";
  return {
    id: seed.id,
    moduleId: seed.moduleId,
    title: seed.title,
    titleMm: seed.titleMm,
    level: seed.level,
    minutes: seed.minutes,
    summaryLine: seed.summaryLine,
    objectives: seed.objectives,
    vocab: seed.vocab,
    sections: seed.sections,
    examples: seed.examples,
    mistakes: seed.mistakes,
    guided: seed.guided.map((exercise, index) =>
      toExercise(exercise, `${seed.id}-g${index + 1}`, fallbackTopic, seed.level),
    ),
    independent: seed.independent.map((exercise, index) =>
      toExercise(exercise, `${seed.id}-i${index + 1}`, fallbackTopic, seed.level),
    ),
    review: seed.review,
    summary: seed.summary,
    mastery: seed.mastery,
    topics: seed.topics,
  };
}

export function buildLessons(seeds: LessonSeed[]): Lesson[] {
  return seeds.map(buildLesson);
}
