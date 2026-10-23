import test from "node:test";
import assert from "node:assert/strict";
import { normalize, matchesAnswer, gradeExercise, expectedAnswer } from "../src/lib/core/grading.ts";
import type { Exercise } from "../src/lib/types.ts";

test("normalize ignores case, punctuation and extra spaces", () => {
  assert.equal(normalize("  The  Book. "), "the book");
  assert.equal(normalize("I don’t know!"), "i don't know");
});

test("matchesAnswer accepts article variants but not wrong words", () => {
  assert.ok(matchesAnswer("book", ["the book"]));
  assert.ok(matchesAnswer("The Book.", ["book"]));
  assert.ok(!matchesAnswer("books", ["book"]));
  assert.ok(!matchesAnswer("", ["book"]));
});

const mcq: Exercise = {
  id: "q1",
  type: "mcq",
  prompt: "She ___ a teacher.",
  options: ["am", "is", "are"],
  answer: 1,
  explanation: "Third person singular takes is.",
  topic: "verb to be",
};

test("MCQ grading returns explanation and expected answer", () => {
  const right = gradeExercise(mcq, 1);
  assert.equal(right.correct, true);
  assert.equal(right.expected, "is");
  const wrong = gradeExercise(mcq, 0);
  assert.equal(wrong.correct, false);
  assert.equal(wrong.given, "am");
  assert.equal(gradeExercise(mcq, 9).correct, false);
});

test("fill-in-the-blank grading is case and punctuation tolerant", () => {
  const fill: Exercise = {
    id: "f1",
    type: "fill",
    prompt: "I ___ to school every day.",
    answers: ["go", "walk"],
    explanation: "Present simple for routines.",
    topic: "present simple",
  };
  assert.equal(gradeExercise(fill, "GO").correct, true);
  assert.equal(gradeExercise(fill, "walk.").correct, true);
  assert.equal(gradeExercise(fill, "went").correct, false);
});

test("word ordering requires the exact sequence", () => {
  const order: Exercise = {
    id: "o1",
    type: "order",
    prompt: "Arrange the words",
    tokens: ["She", "every", "studies", "day"],
    answers: ["She studies every day"],
    explanation: "Subject + verb + adverb.",
    topic: "word order",
  };
  assert.equal(gradeExercise(order, ["She", "studies", "every", "day"]).correct, true);
  assert.equal(gradeExercise(order, ["Every", "day", "she", "studies"]).correct, false);
  assert.equal(gradeExercise(order, null).correct, false);
});

test("expectedAnswer handles every exercise type", () => {
  assert.equal(expectedAnswer(mcq), "is");
  assert.equal(
    expectedAnswer({
      id: "t",
      type: "translate",
      prompt: "x",
      answers: ["I am happy"],
      explanation: "",
      topic: "translation",
    }),
    "I am happy",
  );
});
