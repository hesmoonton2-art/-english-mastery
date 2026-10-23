import type { CEFR, ModuleId } from "@/lib/types";

export type PlannedLesson = {
  id: string;
  moduleId: ModuleId;
  title: string;
  titleMm: string;
  level: CEFR;
};

/**
 * Structured roadmap for the remaining curriculum. These are explicitly marked as
 * planned (not authored) in the UI. Total target: 180–240 lessons; 40 are authored.
 */
export const plannedLessons: PlannedLesson[] = [
];
