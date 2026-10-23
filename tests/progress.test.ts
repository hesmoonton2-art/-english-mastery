import test from "node:test";
import assert from "node:assert/strict";
import { computeStreak, shiftDay, dayKey } from "../src/lib/core/dates.ts";
import { computeStats, lessonStatus } from "../src/lib/core/stats.ts";

test("dayKey uses local calendar dates", () => {
  assert.equal(dayKey(new Date(2026, 9, 22, 23, 30)), "2026-10-22");
  assert.equal(shiftDay("2026-03-01", -1), "2026-02-28");
  assert.equal(shiftDay("2024-03-01", -1), "2024-02-29");
});

test("streak counts consecutive days ending today", () => {
  const days = ["2026-10-18", "2026-10-19", "2026-10-20", "2026-10-21", "2026-10-22"];
  assert.deepEqual(computeStreak(days, "2026-10-22"), { current: 5, longest: 5 });
});

test("streak survives a day in progress but breaks after a missed day", () => {
  assert.equal(
    computeStreak(["2026-10-20", "2026-10-21"], "2026-10-22").current,
    2,
  );
  assert.equal(
    computeStreak(["2026-10-18", "2026-10-19"], "2026-10-22").current,
    0,
  );
});

test("longest streak is independent of current streak", () => {
  const days = [
    "2026-09-01", "2026-09-02", "2026-09-03", "2026-09-04",
    "2026-10-21", "2026-10-22",
  ];
  assert.deepEqual(computeStreak(days, "2026-10-22"), { current: 2, longest: 4 });
});

test("duplicate activity days do not inflate the streak", () => {
  assert.equal(computeStreak(["2026-10-22", "2026-10-22"], "2026-10-22").current, 1);
  assert.equal(computeStreak([], "2026-10-22").current, 0);
});

test("lesson status separates opened, completed and mastered", () => {
  assert.equal(lessonStatus(undefined), "not-started");
  assert.equal(lessonStatus({ openedAt: "x" }), "in-progress");
  assert.equal(lessonStatus({ openedAt: "x", completedAt: "y" }), "completed");
  assert.equal(lessonStatus({ openedAt: "x", completedAt: "y", masteredAt: "z" }), "mastered");
});

test("stats are derived only from submitted activity", () => {
  const lessons = [
    { id: "a1", moduleId: "A" as const, level: "A1" as const, title: "A" },
    { id: "a2", moduleId: "A" as const, level: "A1" as const, title: "B" },
    { id: "b1", moduleId: "B" as const, level: "A2" as const, title: "C" },
  ];
  const stats = computeStats({
    lessons,
    progress: {
      a1: { openedAt: "2026-10-20", completedAt: "2026-10-20", masteredAt: "2026-10-21" },
      a2: { openedAt: "2026-10-22" },
    },
    attempts: [
      {
        id: "x",
        at: "2026-10-22T10:00:00.000Z",
        kind: "lesson",
        refId: "a1",
        refTitle: "A",
        correct: 3,
        total: 4,
        topics: { articles: { correct: 1, total: 3 }, "verb to be": { correct: 2, total: 2 } },
        wrong: [],
      },
      {
        id: "y",
        at: "2026-10-22T11:00:00.000Z",
        kind: "quiz",
        refId: "q",
        refTitle: "Quiz",
        correct: 1,
        total: 1,
        topics: { articles: { correct: 0, total: 1 } },
        wrong: [],
      },
    ],
    activity: { "2026-10-21": 2, "2026-10-22": 3 },
    words: {
      hello: { addedAt: "x", bookmarked: false, note: "", known: true, srs: { due: "2026-10-22", ease: 2.5, intervalDays: 1, reps: 1 } },
      book: { addedAt: "x", bookmarked: true, note: "", known: false, srs: { due: "2026-10-30", ease: 2.5, intervalDays: 5, reps: 2 } },
    },
    today: "2026-10-22",
  });

  assert.equal(stats.lessonsCompleted, 1);
  assert.equal(stats.lessonsMastered, 1);
  assert.equal(stats.lessonsStarted, 2);
  assert.equal(stats.completionPercent, 33);
  assert.equal(stats.questionsAnswered, 5);
  assert.equal(stats.correctAnswers, 4);
  assert.equal(stats.accuracy, 80);
  assert.equal(stats.currentStreak, 2);
  assert.equal(stats.wordsSaved, 2);
  assert.equal(stats.wordsKnown, 1);
  assert.equal(stats.dueReviews, 1);
  assert.equal(stats.weakTopics.length, 1);
  assert.equal(stats.weakTopics[0].topic, "articles");
  assert.equal(stats.byModule.find((m) => m.moduleId === "A")?.completed, 1);
  assert.equal(stats.byLevel.find((l) => l.level === "A2")?.completed, 0);
});
