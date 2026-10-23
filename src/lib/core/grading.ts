import type { Exercise } from "../types.ts";

export type GradeResult = {
  correct: boolean;
  expected: string;
  /** Normalised learner answer, for review records. */
  given: string;
};

/** Lowercase, collapse spaces, drop surrounding punctuation and curly apostrophes. */
export function normalize(input: string): string {
  return input
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .normalize("NFC")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^[\s.,!?;:"']+|[\s.,!?;:"']+$/g, "")
    .trim();
}

/** Accept "the book", "The book." and "book" when a trailing article is optional. */
function variants(value: string): string[] {
  const list = [value];
  const noArticle = value.replace(/^(a|an|the)\s+/, "");
  list.push(noArticle);
  return list;
}

export function matchesAnswer(input: string, accepted: string[]): boolean {
  const probe = normalize(input);
  if (!probe) return false;
  const probes = variants(probe);
  return accepted.some((candidate) => {
    const target = normalize(candidate);
    if (target === probe) return true;
    return variants(target).some((value) => probes.includes(value));
  });
}

export function expectedAnswer(exercise: Exercise): string {
  switch (exercise.type) {
    case "mcq":
      return exercise.options[exercise.answer] ?? "";
    case "fill":
    case "correct":
    case "translate":
      return exercise.answers[0] ?? "";
    case "order":
      return exercise.answers[0] ?? "";
    default:
      return "";
  }
}

/**
 * Deterministic grading. `response` is the option index for MCQ, a token array for
 * ordering exercises, and free text otherwise.
 */
export function gradeExercise(
  exercise: Exercise,
  response: number | string | string[] | null,
): GradeResult {
  const expected = expectedAnswer(exercise);
  if (exercise.type === "mcq") {
    const index = typeof response === "number" ? response : Number(response);
    const valid = Number.isInteger(index) && index >= 0 && index < exercise.options.length;
    return {
      correct: valid && index === exercise.answer,
      expected,
      given: valid ? exercise.options[index] : "",
    };
  }

  if (exercise.type === "order") {
    const tokens = Array.isArray(response) ? response : [];
    const given = tokens.join(" ").trim();
    const correct = exercise.answers.some(
      (answer) => normalize(answer) === normalize(given),
    );
    return { correct, expected, given };
  }

  const given = Array.isArray(response)
    ? response.join(" ")
    : response === null || response === undefined
      ? ""
      : String(response);
  return {
    correct: matchesAnswer(given, exercise.answers),
    expected,
    given: given.trim(),
  };
}

/** Word-order scoring helper: exact sequence comparison, ignoring case. */
export function orderIsCorrect(tokens: string[], answer: string): boolean {
  return normalize(tokens.join(" ")) === normalize(answer);
}
