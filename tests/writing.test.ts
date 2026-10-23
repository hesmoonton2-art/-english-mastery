import test from "node:test";
import assert from "node:assert/strict";
import { checkWriting } from "../src/lib/core/writing.ts";
import { estimateBand } from "../src/lib/core/band.ts";

const goodEssay = `Learning English changes lives in several ways. First, it opens the door to better education because many universities teach in English.

However, progress takes time. For example, learners who practise every day improve faster than those who study once a week.

In conclusion, although English is not easy, consistent practice brings real results.`;

test("rule-based writing check counts words, paragraphs and linking words", () => {
  const report = checkWriting(goodEssay, { wordTarget: [40, 120], formal: true });
  assert.ok(report.words > 40);
  assert.equal(report.paragraphs, 3);
  assert.ok(report.linkingWordsUsed.includes("however"));
  assert.ok(report.linkingWordsUsed.includes("because"));
  assert.equal(report.wordTargetOk, true);
  assert.ok(report.scoreMax >= 6);
  assert.match(report.disclaimer, /rule-based/);
});

test("empty text fails the length and paragraph checks", () => {
  const report = checkWriting("", { wordTarget: [100, 150] });
  assert.equal(report.words, 0);
  assert.equal(report.wordTargetOk, false);
  assert.equal(report.checks.find((c) => c.id === "length")?.status, "fail");
  assert.equal(report.checks.find((c) => c.id === "paragraphs")?.status, "fail");
});

test("formal register flags contractions", () => {
  const report = checkWriting("I don't think this is right. It isn't fair.", {
    wordTarget: [5, 50],
    formal: true,
    minParagraphs: 1,
  });
  const register = report.checks.find((c) => c.id === "register");
  assert.equal(register?.status, "warn");
});

test("band estimation is monotonic and bounded", () => {
  assert.ok(estimateBand("Reading", 40, 40) >= estimateBand("Reading", 10, 40));
  assert.ok(estimateBand("Listening", 0, 40) < estimateBand("Listening", 40, 40));
  assert.equal(estimateBand("Reading", 0, 0), 0);
});
