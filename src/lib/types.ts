export type CEFR = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type ModuleId = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

export type ExerciseType = "mcq" | "fill" | "correct" | "order" | "translate";

type ExerciseBase = {
  id: string;
  prompt: string;
  /** Short Myanmar instruction shown above the prompt. */
  promptMm?: string;
  explanation: string;
  /** Skill tag used for weak-topic tracking, e.g. "present simple". */
  topic: string;
  level?: CEFR;
};

export type Exercise =
  | (ExerciseBase & {
      type: "mcq";
      options: string[];
      answer: number;
    })
  | (ExerciseBase & {
      type: "fill";
      /** First entry is the canonical answer; the rest are accepted variants. */
      answers: string[];
    })
  | (ExerciseBase & {
      type: "correct";
      answers: string[];
    })
  | (ExerciseBase & {
      type: "order";
      tokens: string[];
      answers: string[];
    })
  | (ExerciseBase & {
      type: "translate";
      answers: string[];
    });

export type VocabEntry = {
  en: string;
  mm: string;
  ipa?: string;
  pos: string;
  example: string;
  exampleMm: string;
  collocations?: string[];
  topic: string;
  level: CEFR;
};

export type LessonSection = {
  heading: string;
  body: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type LessonExample = {
  en: string;
  mm: string;
  note?: string;
};

export type Mistake = {
  wrong: string;
  right: string;
  why: string;
};

export type Lesson = {
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
  guided: Exercise[];
  independent: Exercise[];
  review: { q: string; a: string }[];
  summary: string[];
  mastery: string[];
  topics: string[];
};

export type ReadingPassage = {
  id: string;
  title: string;
  titleMm: string;
  level: CEFR;
  minutes: number;
  genre: string;
  text: string[];
  glossary: VocabEntry[];
  questions: Exercise[];
};

export type ListeningScript = {
  id: string;
  title: string;
  titleMm: string;
  level: CEFR;
  minutes: number;
  context: string;
  speedNote: string;
  lines: { speaker: string; en: string; mm: string }[];
  questions: Exercise[];
  strategy: string[];
};

export type WritingTask = {
  id: string;
  title: string;
  titleMm: string;
  level: CEFR;
  kind: string;
  promptMm: string;
  promptEn: string;
  wordTarget: [number, number];
  checklist: string[];
  rubric: { criterion: string; bands: string[] }[];
  sample: string;
  tips: string[];
};

export type SpeakingTask = {
  id: string;
  title: string;
  titleMm: string;
  level: CEFR;
  situationMm: string;
  goalMm: string;
  usefulPhrases: { en: string; mm: string }[];
  prompts: { en: string; mm: string; modelAnswer: string }[];
};

export type Quiz = {
  id: string;
  title: string;
  titleMm: string;
  level: CEFR;
  description: string;
  timeLimitMin?: number;
  exercises: Exercise[];
};

export type IeltsTask = {
  id: string;
  section: "Listening" | "Reading" | "Writing" | "Speaking";
  title: string;
  minutes: number;
  instructionsMm: string;
  material: string[];
  exercises: Exercise[];
};
