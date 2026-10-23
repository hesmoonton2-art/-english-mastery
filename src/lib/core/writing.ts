/**
 * Transparent rule-based writing checker.
 * This is NOT AI evaluation and NOT an IELTS band score. It only reports countable,
 * verifiable text features and gives learners a checklist for self-review.
 */

export type WritingCheck = {
  id: string;
  label: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};

export type WritingReport = {
  words: number;
  sentences: number;
  paragraphs: number;
  avgSentenceLength: number;
  uniqueWordRatio: number;
  checks: WritingCheck[];
  linkingWordsUsed: string[];
  repeatedOpeners: string[];
  score: number;
  scoreMax: number;
  wordTargetOk: boolean;
  disclaimer: string;
};

const LINKING_WORDS = [
  "however",
  "therefore",
  "moreover",
  "furthermore",
  "although",
  "because",
  "while",
  "whereas",
  "in addition",
  "for example",
  "for instance",
  "as a result",
  "on the other hand",
  "in conclusion",
  "firstly",
  "secondly",
  "finally",
  "despite",
  "nevertheless",
  "consequently",
];

const CONTRACTIONS = ["don't", "can't", "won't", "isn't", "aren't", "it's", "i'm", "i've", "we're", "they're", "doesn't", "didn't", "couldn't"];

export function checkWriting(
  text: string,
  options: { wordTarget: [number, number]; formal?: boolean; minParagraphs?: number },
): WritingReport {
  const clean = text.replace(/\r/g, "").trim();
  const wordList = clean.match(/[A-Za-z][A-Za-z'’-]*/g) ?? [];
  const words = wordList.length;
  const sentences = clean
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const paragraphs = clean.split(/\n\s*\n/).filter((block) => block.trim().length > 0);
  const lower = clean.toLowerCase();
  const linkingWordsUsed = LINKING_WORDS.filter((word) => lower.includes(word));
  const contractions = CONTRACTIONS.filter((word) => lower.includes(word));
  const unique = new Set(wordList.map((word) => word.toLowerCase()));
  const uniqueWordRatio = words === 0 ? 0 : unique.size / words;
  const avgSentenceLength = sentences.length === 0 ? 0 : words / sentences.length;

  const openers = sentences.map((sentence) => {
    const match = sentence.match(/^[A-Za-z']+/);
    return (match?.[0] ?? "").toLowerCase();
  });
  const openerCounts = new Map<string, number>();
  for (const opener of openers) {
    if (!opener) continue;
    openerCounts.set(opener, (openerCounts.get(opener) ?? 0) + 1);
  }
  const repeatedOpeners = Array.from(openerCounts.entries())
    .filter(([, count]) => count >= 3)
    .map(([word]) => word);

  const checks: WritingCheck[] = [];
  const add = (
    id: string,
    label: string,
    status: WritingCheck["status"],
    detail: string,
  ) => checks.push({ id, label, status, detail });

  const [minWords, maxWords] = options.wordTarget;
  const wordTargetOk = words >= minWords && words <= maxWords;
  add(
    "length",
    "အနည်းဆုံး စကားလုံးအရေအတွက်",
    wordTargetOk ? "pass" : words >= Math.round(minWords * 0.7) ? "warn" : "fail",
    `လက်ရှိ ${words} လုံး / သတ်မှတ် ${minWords}–${maxWords} လုံး`,
  );

  const minParagraphs = options.minParagraphs ?? 3;
  add(
    "paragraphs",
    "စာပိုဒ်ဖွဲ့စည်းမှု",
    paragraphs.length >= minParagraphs ? "pass" : paragraphs.length >= 2 ? "warn" : "fail",
    `စာပိုဒ် ${paragraphs.length} ပိုဒ် (အနည်းဆုံး ${minParagraphs} ပိုဒ် လိုအပ်သည်)`,
  );

  add(
    "sentences",
    "ဝါကျအရှည် မျှတမှု",
    avgSentenceLength >= 8 && avgSentenceLength <= 26 ? "pass" : avgSentenceLength === 0 ? "fail" : "warn",
    `ပျမ်းမျှ ဝါကျတစ်ကြောင်းလျှင် ${avgSentenceLength.toFixed(1)} စကားလုံး`,
  );

  add(
    "linking",
    "ဆက်စပ် စကားလုံးများ",
    linkingWordsUsed.length >= 3 ? "pass" : linkingWordsUsed.length >= 1 ? "warn" : "fail",
    linkingWordsUsed.length > 0 ? `တွေ့ရသည် — ${linkingWordsUsed.join(", ")}` : "However / because / for example စသည့် ဆက်စပ်စကားလုံး မတွေ့ပါ",
  );

  add(
    "variety",
    "စကားလုံး ကြွယ်ဝမှု",
    uniqueWordRatio >= 0.45 ? "pass" : uniqueWordRatio >= 0.3 ? "warn" : "fail",
    `ထူးခြားသော စကားလုံး အချိုး ${(uniqueWordRatio * 100).toFixed(0)}%`,
  );

  add(
    "capitalisation",
    "စာလုံးအကြီးအသေး",
    sentences.length > 0 && sentences.every((sentence) => /^[A-Z0-9"'(]/.test(sentence)) ? "pass" : "warn",
    "ဝါကျတိုင်း စာလုံးကြီးဖြင့် စတင်ရန် စစ်ဆေးပါ",
  );

  if (options.formal) {
    add(
      "register",
      "တရားဝင် အရေးအသား (formal register)",
      contractions.length === 0 ? "pass" : "warn",
      contractions.length === 0
        ? "ကျုံ့ထားသော စကားလုံး (contraction) မတွေ့ပါ"
        : `တရားဝင် စာတွင် မသုံးသင့်သည့် — ${contractions.join(", ")}`,
    );
  }

  if (repeatedOpeners.length > 0) {
    add(
      "openers",
      "ဝါကျစတင်ပုံ ထပ်နေမှု",
      "warn",
      `"${repeatedOpeners.slice(0, 3).join('", "')}" ဖြင့် စတင်သည့် ဝါကျများ များနေသည်`,
    );
  } else {
    add("openers", "ဝါကျစတင်ပုံ ကွဲပြားမှု", "pass", "ဝါကျစတင်ပုံများ ထပ်နေမှု မတွေ့ပါ");
  }

  const scoreMax = checks.length;
  const score = checks.reduce(
    (total, check) => total + (check.status === "pass" ? 1 : check.status === "warn" ? 0.5 : 0),
    0,
  );

  return {
    words,
    sentences: sentences.length,
    paragraphs: paragraphs.length,
    avgSentenceLength: Math.round(avgSentenceLength * 10) / 10,
    uniqueWordRatio: Math.round(uniqueWordRatio * 100) / 100,
    checks,
    linkingWordsUsed,
    repeatedOpeners,
    score,
    scoreMax,
    wordTargetOk,
    disclaimer:
      "ဤအမှတ်သည် စာတွင် တွေ့ရှိသော ပုံစံများကို ရေတွက်သည့် rule-based စစ်ဆေးမှုသာဖြစ်သည်။ AI အရည်အသွေးအကဲဖြတ်မှု သို့မဟုတ် IELTS band တရားဝင် အမှတ် မဟုတ်ပါ။ သင့်ကိုယ်တိုင် ပြန်လည်သုံးသပ်ရန် အထောက်အကူသာ ဖြစ်သည်။",
  };
}
