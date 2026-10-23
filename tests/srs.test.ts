import test from "node:test";
import assert from "node:assert/strict";
import { newSrsCard, reviewCard, isDue, dueCards } from "../src/lib/core/srs.ts";

const today = "2026-10-22";

test("new cards are due immediately", () => {
  const card = newSrsCard(today);
  assert.equal(card.due, today);
  assert.ok(isDue(card, today));
  assert.equal(card.reps, 0);
});

test("good reviews follow a 1, 3, interval x ease progression", () => {
  let card = newSrsCard(today);
  card = reviewCard(card, "good", today);
  assert.equal(card.intervalDays, 1);
  assert.equal(card.due, "2026-10-23");

  card = reviewCard(card, "good", "2026-10-23");
  assert.equal(card.intervalDays, 3);
  assert.equal(card.due, "2026-10-26");

  card = reviewCard(card, "good", "2026-10-26");
  assert.equal(card.intervalDays, 8); // round(3 * 2.5)
  assert.equal(card.due, "2026-11-03");
  assert.equal(card.reps, 3);
});

test("again resets the chain and increases lapses", () => {
  let card = newSrsCard(today);
  card = reviewCard(card, "good", today);
  card = reviewCard(card, "good", "2026-10-23");
  const reset = reviewCard(card, "again", "2026-10-26");
  assert.equal(reset.reps, 0);
  assert.equal(reset.intervalDays, 0);
  assert.equal(reset.due, "2026-10-26");
  assert.equal(reset.lapses, 1);
  assert.ok(reset.ease < card.ease);
});

test("easy grows faster and raises ease within limits", () => {
  let card = newSrsCard(today);
  card = reviewCard(card, "easy", today);
  assert.equal(card.intervalDays, 3);
  card = reviewCard(card, "easy", "2026-10-25");
  assert.ok(card.ease <= 3.2);
  assert.ok(card.intervalDays > 3);
});

test("hard keeps intervals short and lowers ease but never below 1.3", () => {
  let card = newSrsCard(today);
  for (let i = 0; i < 30; i += 1) card = reviewCard(card, "hard", today);
  assert.ok(card.ease >= 1.3);
  assert.ok(card.intervalDays >= 1);
});

test("scheduling is deterministic", () => {
  const a = reviewCard(newSrsCard(today), "good", today);
  const b = reviewCard(newSrsCard(today), "good", today);
  assert.deepEqual(a, b);
});

test("dueCards returns only due cards sorted by due date", () => {
  const cards = [
    { srs: { ...newSrsCard(today), due: "2026-10-30" }, addedAt: "a" },
    { srs: { ...newSrsCard(today), due: "2026-10-20" }, addedAt: "b" },
    { srs: { ...newSrsCard(today), due: today }, addedAt: "c" },
  ];
  const due = dueCards(cards, today);
  assert.deepEqual(
    due.map((card) => card.addedAt),
    ["b", "c"],
  );
});
