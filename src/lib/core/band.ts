/**
 * Unofficial practice estimates for IELTS-style practice sets.
 * These conversions are approximations for internal practice only and are not an
 * official IELTS result. They are deterministic functions of raw practice scores.
 */

export type Section = "Listening" | "Reading";

export function estimateBand(section: Section, correct: number, total: number): number {
  if (total <= 0) return 0;
  const percent = (correct / total) * 100;
  if (section === "Listening") {
    if (percent >= 90) return 8;
    if (percent >= 82) return 7.5;
    if (percent >= 74) return 7;
    if (percent >= 65) return 6.5;
    if (percent >= 55) return 6;
    if (percent >= 45) return 5.5;
    if (percent >= 35) return 5;
    if (percent >= 25) return 4.5;
    if (percent >= 15) return 4;
    return 3.5;
  }
  if (percent >= 90) return 8.5;
  if (percent >= 82) return 8;
  if (percent >= 74) return 7.5;
  if (percent >= 65) return 7;
  if (percent >= 55) return 6.5;
  if (percent >= 45) return 6;
  if (percent >= 36) return 5.5;
  if (percent >= 28) return 5;
  if (percent >= 20) return 4.5;
  return 4;
}

export function formatBand(band: number): string {
  return Number.isInteger(band) ? String(band) : band.toFixed(1);
}

export const IELTS_DISCLAIMER =
  "ဤရမှတ်များသည် ဤပလက်ဖောင်း၏ ကိုယ်ပိုင် လေ့ကျင့်ခန်းများအတွက် ခန့်မှန်းချက်သာဖြစ်ပြီး တရားဝင် IELTS ရမှတ် မဟုတ်ပါ။ တရားဝင် စာမေးပွဲ ရမှတ်ကို IELTS မှသာ သတ်မှတ်နိုင်သည်။";
