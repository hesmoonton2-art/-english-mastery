import test from "node:test";
import assert from "node:assert/strict";

import { moduleALessons } from "../src/content/lessons/module-a.ts";
import { moduleALessonsPart2 } from "../src/content/lessons/module-a2.ts";
import { moduleALessonsPart3 } from "../src/content/lessons/module-a3.ts";
import { moduleALessonsPart4 } from "../src/content/lessons/module-a4.ts";
import { moduleBLessonsPart1 } from "../src/content/lessons/module-b1.ts";
import { moduleBLessonsPart2 } from "../src/content/lessons/module-b2.ts";
import { moduleBLessonsPart3 } from "../src/content/lessons/module-b3.ts";
import { moduleBLessonsPart4 } from "../src/content/lessons/module-b4.ts";
import { moduleCLessons } from "../src/content/lessons/module-c.ts";
import { moduleDLessons } from "../src/content/lessons/module-d.ts";
import { moduleEFLessons } from "../src/content/lessons/module-ef.ts";
import { moduleGLessons } from "../src/content/lessons/module-g.ts";
import { moduleHLessons } from "../src/content/lessons/module-h.ts";
import { readingPassages } from "../src/content/reading.ts";
import { listeningScripts } from "../src/content/listening.ts";
import { writingTasks } from "../src/content/writing.ts";
import { speakingTasks } from "../src/content/speaking.ts";
import { estimateCefr, quizzes } from "../src/content/quizzes.ts";
import { ieltsPractice, ieltsWritingTasks } from "../src/content/ielts.ts";
import { moduleBLessonsPart5 } from "../src/content/lessons/module-b5.ts";
import { moduleBLessonsPart6 } from "../src/content/lessons/module-b6.ts";
import { moduleBLessonsPart7 } from "../src/content/lessons/module-b7.ts";
import { moduleBLessonsPart8 } from "../src/content/lessons/module-b8.ts";
import { moduleCLessonsPart2 } from "../src/content/lessons/module-c2.ts";
import { moduleCLessonsPart3 } from "../src/content/lessons/module-c3.ts";
import { moduleCLessonsPart4 } from "../src/content/lessons/module-c4.ts";
import { moduleCLessonsPart5 } from "../src/content/lessons/module-c5.ts";
import { moduleCLessonsPart6 } from "../src/content/lessons/module-c6.ts";
import { moduleDLessonsPart2 } from "../src/content/lessons/module-d2.ts";
import { moduleDLessonsPart3 } from "../src/content/lessons/module-d3.ts";
import { moduleDLessonsPart4 } from "../src/content/lessons/module-d4.ts";
import { moduleEFLessonsPart2 } from "../src/content/lessons/module-e2.ts";
import { moduleEFLessonsPart3 } from "../src/content/lessons/module-e3.ts";
import { moduleEFLessonsPart4 } from "../src/content/lessons/module-ef2.ts";
import { moduleEFLessonsPart5 } from "../src/content/lessons/module-f2.ts";
import { moduleEFLessonsPart6 } from "../src/content/lessons/module-f3.ts";
import { moduleGLessonsPart2 } from "../src/content/lessons/module-g2.ts";
import { moduleGLessonsPart3 } from "../src/content/lessons/module-g3.ts";
import { moduleGLessonsPart4 } from "../src/content/lessons/module-g4.ts";
import { moduleHLessonsPart2 } from "../src/content/lessons/module-h2.ts";
import { moduleHLessonsPart3 } from "../src/content/lessons/module-h3.ts";
import { moduleHLessonsPart4 } from "../src/content/lessons/module-h4.ts";
import { moduleILessons } from "../src/content/lessons/module-i.ts";
import { moduleILessonsPart2 } from "../src/content/lessons/module-i2.ts";
import { moduleHLessonsPart5 } from "../src/content/lessons/module-h5.ts";
import { plannedLessons } from "../src/content/curriculum.ts";
import type { Exercise } from "../src/lib/types.ts";

const lessons = [
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
];

function assertExercise(exercise: Exercise, where: string) {
  assert.ok(exercise.id, `${where}: exercise without id`);
  assert.ok(exercise.prompt && exercise.prompt.trim().length > 3, `${where}: empty prompt ${exercise.id}`);
  assert.ok(exercise.explanation && exercise.explanation.trim().length > 5, `${where}: no explanation ${exercise.id}`);
  assert.ok(exercise.topic, `${where}: no topic ${exercise.id}`);
  if (exercise.type === "mcq") {
    assert.ok(exercise.options.length >= 3, `${where}: too few options ${exercise.id}`);
    assert.ok(
      Number.isInteger(exercise.answer) && exercise.answer >= 0 && exercise.answer < exercise.options.length,
      `${where}: answer index out of range ${exercise.id}`,
    );
  } else {
    assert.ok(exercise.answers.length >= 1, `${where}: no accepted answer ${exercise.id}`);
    for (const answer of exercise.answers) {
      assert.ok(answer.trim().length > 0, `${where}: blank answer ${exercise.id}`);
    }
  }
  if (exercise.type === "order") {
    assert.ok(exercise.tokens.length >= 3, `${where}: too few tokens ${exercise.id}`);
  }
}

test("lesson library is large enough and free of duplicate ids or titles", () => {
  assert.ok(lessons.length >= 30, `expected at least 30 lessons, found ${lessons.length}`);
  const ids = lessons.map((lesson) => lesson.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate lesson id");
  const titles = lessons.map((lesson) => lesson.title.trim().toLowerCase());
  assert.equal(new Set(titles).size, titles.length, "duplicate lesson title");
  const plannedIds = new Set(plannedLessons.map((lesson) => lesson.id));
  for (const id of ids) {
    assert.ok(!plannedIds.has(id), `authored lesson ${id} also appears in the planned roadmap`);
  }
});

test("the roadmap covers the 180–240 lesson target", () => {
  const total = lessons.length + plannedLessons.length;
  assert.ok(total >= 180 && total <= 240, `roadmap has ${total} entries`);
  assert.ok(lessons.length >= 80, "authored lesson count dropped below the milestone");
  assert.equal(lessons.length + plannedLessons.length, 185, "roadmap total changed unexpectedly");
  if (plannedLessons.length === 0) {
    assert.equal(lessons.length, 185, "planned roadmap is empty while the authored roadmap is still incomplete");
  }
  const plannedIds = plannedLessons.map((lesson) => lesson.id);
  assert.equal(new Set(plannedIds).size, plannedIds.length, "duplicate planned lesson id");
  for (const lesson of plannedLessons) {
    assert.ok(lesson.title && lesson.titleMm, `${lesson.id}: planned lesson needs both titles`);
    assert.ok(["A1", "A2", "B1", "B2", "C1", "C2"].includes(lesson.level), `${lesson.id}: bad level`);
  }
});

test("every lesson carries the complete required structure", () => {
  for (const lesson of lessons) {
    const where = lesson.id;
    assert.ok(lesson.title && lesson.titleMm, `${where}: missing bilingual title`);
    assert.ok(["A1", "A2", "B1", "B2", "C1", "C2"].includes(lesson.level), `${where}: bad level`);
    assert.ok(lesson.minutes > 0, `${where}: bad duration`);
    assert.ok(lesson.summaryLine.trim().length > 10, `${where}: empty summary line`);
    assert.ok(lesson.objectives.length >= 2, `${where}: needs at least 2 objectives`);
    assert.ok(lesson.vocab.length >= 3, `${where}: needs at least 3 vocabulary entries`);
    for (const word of lesson.vocab) {
      assert.ok(word.en && word.mm, `${where}: vocab without Myanmar meaning (${word.en})`);
      assert.ok(word.pos, `${where}: vocab without part of speech (${word.en})`);
      assert.ok(word.example && word.exampleMm, `${where}: vocab example missing translation (${word.en})`);
      assert.ok(word.topic && word.level, `${where}: vocab metadata missing (${word.en})`);
    }
    assert.ok(lesson.sections.length >= 2, `${where}: needs at least 2 explanation sections`);
    for (const section of lesson.sections) {
      assert.ok(section.heading, `${where}: section without heading`);
      assert.ok(section.body.length >= 1 && section.body.every((line) => line.trim().length > 10),
        `${where}: thin section body (${section.heading})`);
      if (section.table) {
        for (const row of section.table.rows) {
          assert.equal(row.length, section.table.headers.length, `${where}: table row width mismatch`);
        }
      }
    }
    assert.ok(lesson.examples.length >= 3, `${where}: needs at least 3 examples`);
    assert.ok(lesson.examples.every((example) => example.en && example.mm), `${where}: example without translation`);
    assert.ok(lesson.mistakes.length >= 1, `${where}: needs at least 1 common mistake`);
    assert.ok(lesson.mistakes.every((mistake) => mistake.wrong && mistake.right && mistake.why),
      `${where}: incomplete mistake entry`);
    assert.equal(lesson.guided.length, 4, `${where}: expected 4 guided exercises`);
    assert.equal(lesson.independent.length, 4, `${where}: expected 4 independent exercises`);
    for (const exercise of [...lesson.guided, ...lesson.independent]) {
      assertExercise(exercise, where);
    }
    assert.ok(lesson.review.length >= 2, `${where}: needs at least 2 review questions`);
    assert.ok(lesson.review.every((item) => item.q && item.a), `${where}: review item incomplete`);
    assert.ok(lesson.summary.length >= 2, `${where}: needs a summary`);
    assert.ok(lesson.mastery.length >= 2, `${where}: needs measurable mastery criteria`);
    assert.ok(lesson.topics.length >= 1, `${where}: needs topic tags`);
  }
});

test("reading passages are original, complete and answerable", () => {
  assert.ok(readingPassages.length >= 5);
  const ids = readingPassages.map((passage) => passage.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate passage id");
  for (const passage of readingPassages) {
    const words = passage.text.join(" ").split(/\s+/).length;
    assert.ok(words >= 80, `${passage.id}: text too short (${words} words)`);
    assert.ok(passage.glossary.length >= 3, `${passage.id}: glossary too small`);
    assert.ok(passage.questions.length >= 4, `${passage.id}: too few questions`);
    for (const question of passage.questions) assertExercise(question, passage.id);
  }
});

test("listening scripts exist without claiming audio", () => {
  assert.ok(listeningScripts.length >= 3);
  for (const script of listeningScripts) {
    assert.ok(script.lines.length >= 5, `${script.id}: too few script lines`);
    assert.ok(script.lines.every((line) => line.en && line.mm && line.speaker), `${script.id}: incomplete line`);
    assert.ok(script.questions.length >= 4, `${script.id}: too few questions`);
    for (const question of script.questions) assertExercise(question, script.id);
    assert.ok(script.strategy.length >= 2, `${script.id}: missing listening strategy`);
    const note = `${script.context} ${script.speedNote}`.toLowerCase();
    assert.ok(!note.includes("audio file is available"), `${script.id}: must not promise audio`);
  }
});

test("writing tasks include prompts, rubrics, checklists and samples", () => {
  assert.ok(writingTasks.length >= 4);
  for (const task of writingTasks) {
    assert.ok(task.checklist.length >= 4, `${task.id}: short checklist`);
    assert.ok(task.rubric.length >= 2, `${task.id}: short rubric`);
    assert.ok(task.rubric.every((row) => row.criterion && row.bands.length >= 2), `${task.id}: incomplete rubric`);
    assert.ok(task.tips.length >= 2, `${task.id}: missing tips`);
    const sampleWords = task.sample.split(/\s+/).filter(Boolean).length;
    assert.ok(sampleWords >= Math.round(task.wordTarget[0] * 0.6), `${task.id}: sample answer too short`);
    assert.ok(task.promptMm.includes(" "), `${task.id}: Myanmar prompt missing`);
  }
});

test("speaking simulations are text-based with model answers", () => {
  assert.ok(speakingTasks.length >= 3);
  for (const task of speakingTasks) {
    assert.ok(task.situationMm && task.goalMm, `${task.id}: missing situation or goal`);
    assert.ok(task.usefulPhrases.length >= 3, `${task.id}: too few phrases`);
    assert.ok(task.prompts.length >= 2, `${task.id}: too few prompts`);
    assert.ok(task.prompts.every((prompt) => prompt.en && prompt.mm && prompt.modelAnswer.length > 20),
      `${task.id}: missing model answer`);
  }
});

test("quizzes and placement test are answerable", () => {
  assert.ok(quizzes.length >= 4);
  const placement = quizzes.find((quiz) => quiz.id === "placement-test");
  assert.ok(placement, "placement test missing");
  assert.ok(placement.exercises.length >= 15, "placement test too short");
  for (const quiz of quizzes) {
    assert.ok(quiz.exercises.length >= 5, `${quiz.id}: too few questions`);
    const ids = quiz.exercises.map((exercise) => exercise.id);
    assert.equal(new Set(ids).size, ids.length, `${quiz.id}: duplicate question id`);
    for (const exercise of quiz.exercises) assertExercise(exercise, quiz.id);
  }
});

test("CEFR estimate is bounded and labelled unofficial", () => {
  const cases: [number, number, string][] = [
    [20, 20, "C1"],
    [16, 20, "B2"],
    [13, 20, "B1"],
    [9, 20, "A2"],
    [3, 20, "A1"],
  ];
  for (const [correct, total, expected] of cases) {
    const result = estimateCefr(correct, total);
    assert.equal(result.level, expected);
    assert.ok(result.labelMm.includes("ခန့်မှန်း"), "estimate must be marked as an approximation");
    assert.ok(result.note.length > 0);
  }
});

test("IELTS practice sets are complete and clearly unofficial", () => {
  assert.ok(ieltsPractice.length >= 2);
  for (const task of ieltsPractice) {
    assert.ok(task.material.length >= 5, `${task.id}: material too short`);
    assert.ok(task.exercises.length >= 5, `${task.id}: too few questions`);
    assert.ok(task.instructionsMm.length > 20, `${task.id}: missing instructions`);
    for (const exercise of task.exercises) assertExercise(exercise, task.id);
  }
  assert.ok(ieltsWritingTasks.length >= 2);
  for (const task of ieltsWritingTasks) {
    assert.ok(task.modelAnswer.split(/\s+/).length >= task.wordTarget[0] * 0.7, `${task.id}: model answer too short`);
    assert.ok(task.checklist.length >= 3, `${task.id}: short checklist`);
  }
});
