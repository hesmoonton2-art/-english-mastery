"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AttemptRecord, LessonProgress, WordRecord } from "./core/stats";
import { newSrsCard, reviewCard, type SrsGrade } from "./core/srs";
import { dayKey } from "./core/dates";
import type { CEFR } from "./types";

export const STORAGE_KEY = "english-mastery.state.v1";
export const STORAGE_VERSION = 1;

export type Theme = "light" | "dark";

export type Profile = {
  name: string;
  targetLevel: CEFR;
  dailyGoal: number;
};

export type WritingRecord = {
  id: string;
  taskId: string;
  text: string;
  updatedAt: string;
  words: number;
  score: number;
  scoreMax: number;
};

export type SpeakingRecord = {
  taskId: string;
  at: string;
  checked: number;
  total: number;
};

export type AppState = {
  version: number;
  createdAt: string;
  profile: Profile;
  theme: Theme;
  lessons: Record<string, LessonProgress>;
  attempts: AttemptRecord[];
  activity: Record<string, number>;
  words: Record<string, WordRecord>;
  notes: Record<string, string>;
  lessonBookmarks: string[];
  writing: WritingRecord[];
  speaking: SpeakingRecord[];
};

export function defaultState(now = new Date()): AppState {
  return {
    version: STORAGE_VERSION,
    createdAt: now.toISOString(),
    profile: { name: "", targetLevel: "B2", dailyGoal: 20 },
    theme: "light",
    lessons: {},
    attempts: [],
    activity: {},
    words: {},
    notes: {},
    lessonBookmarks: [],
    writing: [],
    speaking: [],
  };
}

/** Merge stored data with defaults and drop malformed sections instead of crashing. */
export function migrate(raw: unknown): AppState {
  const base = defaultState();
  if (!raw || typeof raw !== "object") return base;
  const input = raw as Partial<AppState>;
  const out: AppState = {
    ...base,
    ...input,
    version: STORAGE_VERSION,
    profile: { ...base.profile, ...(input.profile ?? {}) },
    lessons: isRecord(input.lessons) ? (input.lessons as AppState["lessons"]) : {},
    attempts: Array.isArray(input.attempts) ? (input.attempts as AttemptRecord[]) : [],
    activity: isRecord(input.activity) ? (input.activity as Record<string, number>) : {},
    words: isRecord(input.words) ? (input.words as AppState["words"]) : {},
    notes: isRecord(input.notes) ? (input.notes as Record<string, string>) : {},
    lessonBookmarks: Array.isArray(input.lessonBookmarks) ? input.lessonBookmarks : [],
    writing: Array.isArray(input.writing) ? input.writing : [],
    speaking: Array.isArray(input.speaking) ? input.speaking : [],
    theme: input.theme === "dark" ? "dark" : "light",
  };
  return out;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

const MAX_ATTEMPTS = 300;
const MAX_ACTIVITY_DAYS = 730;

function readStorage(): AppState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return migrate(JSON.parse(raw));
  } catch {
    return defaultState();
  }
}

export type StoreStatus = "loading" | "ready" | "error";

type AppContextValue = {
  state: AppState;
  status: StoreStatus;
  storageError: string | null;
  today: string;
  actions: Actions;
};

export type Actions = {
  logActivity: (count?: number) => void;
  openLesson: (id: string) => void;
  completeLesson: (id: string, score: { correct: number; total: number }) => void;
  markLessonMastered: (id: string) => void;
  recordAttempt: (attempt: Omit<AttemptRecord, "id" | "at">) => AttemptRecord;
  addWord: (key: string) => void;
  removeWord: (key: string) => void;
  toggleWordBookmark: (key: string) => void;
  setWordNote: (key: string, note: string) => void;
  setWordKnown: (key: string, known: boolean) => void;
  reviewWord: (key: string, grade: SrsGrade) => void;
  saveNote: (id: string, note: string) => void;
  toggleLessonBookmark: (id: string) => void;
  saveWriting: (input: { taskId: string; text: string; words: number; score: number; scoreMax: number }) => void;
  recordSpeaking: (input: { taskId: string; checked: number; total: number }) => void;
  setTheme: (theme: Theme) => void;
  setProfile: (patch: Partial<Profile>) => void;
  importState: (json: string) => { ok: boolean; message: string };
  resetAll: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => defaultState());
  const [status, setStatus] = useState<StoreStatus>("loading");
  const [storageError, setStorageError] = useState<string | null>(null);
  const [today, setToday] = useState<string>(() => dayKey(new Date()));
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    setState(readStorage());
    setStatus("ready");
    const refresh = () => setToday(dayKey(new Date()));
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  useEffect(() => {
    if (status !== "ready") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setStorageError(null);
    } catch (error) {
      setStorageError(
        error instanceof Error
          ? `ဒေတာ သိမ်းဆည်းမှု မအောင်မြင်ပါ — ${error.message}`
          : "ဒေတာ သိမ်းဆည်းမှု မအောင်မြင်ပါ",
      );
    }
  }, [state, status]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", state.theme === "dark");
    root.style.colorScheme = state.theme;
  }, [state.theme]);

  const update = useCallback((recipe: (current: AppState) => AppState) => {
    setState((current) => recipe(current));
  }, []);

  const actions = useMemo<Actions>(() => {
    const stamp = () => new Date().toISOString();
    const todayKey = () => dayKey(new Date());

    const withActivity = (current: AppState, count = 1): AppState => {
      const key = todayKey();
      const existing = current.activity[key] ?? 0;
      const activity = { ...current.activity, [key]: existing + count };
      const keys = Object.keys(activity).sort();
      if (keys.length > MAX_ACTIVITY_DAYS) {
        for (const old of keys.slice(0, keys.length - MAX_ACTIVITY_DAYS)) delete activity[old];
      }
      return { ...current, activity };
    };

    return {
      logActivity: (count = 1) => update((current) => withActivity(current, count)),

      openLesson: (id) =>
        update((current) => {
          const existing = current.lessons[id];
          if (existing?.openedAt) return current;
          return {
            ...current,
            lessons: { ...current.lessons, [id]: { ...existing, openedAt: stamp() } },
          };
        }),

      completeLesson: (id, score) =>
        update((current) => {
          const existing = current.lessons[id] ?? {};
          const percent = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
          const next: LessonProgress = {
            ...existing,
            completedAt: existing.completedAt ?? stamp(),
            attempts: (existing.attempts ?? 0) + 1,
            lastScore: percent,
            bestScore: Math.max(existing.bestScore ?? 0, percent),
            reviewsSeen: (existing.reviewsSeen ?? 0) + 1,
          };
          return withActivity({ ...current, lessons: { ...current.lessons, [id]: next } });
        }),

      markLessonMastered: (id) =>
        update((current) => {
          const existing = current.lessons[id];
          if (!existing?.completedAt) return current;
          if (existing.masteredAt) return current;
          return {
            ...current,
            lessons: { ...current.lessons, [id]: { ...existing, masteredAt: stamp() } },
          };
        }),

      recordAttempt: (attempt) => {
        const record: AttemptRecord = {
          ...attempt,
          id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          at: stamp(),
        };
        update((current) => {
          const attempts = [record, ...current.attempts].slice(0, MAX_ATTEMPTS);
          return withActivity({ ...current, attempts });
        });
        return record;
      },

      addWord: (key) =>
        update((current) => {
          if (current.words[key]) return current;
          return withActivity({
            ...current,
            words: {
              ...current.words,
              [key]: {
                addedAt: stamp(),
                bookmarked: false,
                note: "",
                known: false,
                srs: { ...newSrsCard(todayKey()), lapses: 0 } as WordRecord["srs"],
              },
            },
          });
        }),

      removeWord: (key) =>
        update((current) => {
          const words = { ...current.words };
          delete words[key];
          return { ...current, words };
        }),

      toggleWordBookmark: (key) =>
        update((current) => {
          const word = current.words[key];
          if (!word) return current;
          return {
            ...current,
            words: { ...current.words, [key]: { ...word, bookmarked: !word.bookmarked } },
          };
        }),

      setWordNote: (key, note) =>
        update((current) => {
          const word = current.words[key];
          if (!word) return current;
          return {
            ...current,
            words: { ...current.words, [key]: { ...word, note } },
          };
        }),

      setWordKnown: (key, known) =>
        update((current) => {
          const word = current.words[key];
          if (!word) return current;
          return {
            ...current,
            words: { ...current.words, [key]: { ...word, known } },
          };
        }),

      reviewWord: (key, grade) =>
        update((current) => {
          const word = current.words[key];
          if (!word) return current;
          const updated = reviewCard(word.srs as never, grade, todayKey());
          return withActivity({
            ...current,
            words: {
              ...current.words,
              [key]: {
                ...word,
                srs: {
                  due: updated.due,
                  ease: updated.ease,
                  intervalDays: updated.intervalDays,
                  reps: updated.reps,
                  lapses: updated.lapses,
                } as WordRecord["srs"],
              },
            },
          });
        }),

      saveNote: (id, note) =>
        update((current) => ({ ...current, notes: { ...current.notes, [id]: note } })),

      toggleLessonBookmark: (id) =>
        update((current) => {
          const has = current.lessonBookmarks.includes(id);
          return {
            ...current,
            lessonBookmarks: has
              ? current.lessonBookmarks.filter((item) => item !== id)
              : [...current.lessonBookmarks, id],
          };
        }),

      saveWriting: (input) =>
        update((current) => {
          const existing = current.writing.find(
            (record) => record.taskId === input.taskId,
          );
          const record: WritingRecord = {
            id: existing?.id ?? `${Date.now().toString(36)}`,
            taskId: input.taskId,
            text: input.text,
            updatedAt: stamp(),
            words: input.words,
            score: input.score,
            scoreMax: input.scoreMax,
          };
          const writing = [
            record,
            ...current.writing.filter((item) => item.taskId !== input.taskId),
          ];
          return withActivity({ ...current, writing });
        }),

      recordSpeaking: (input) =>
        update((current) =>
          withActivity({
            ...current,
            speaking: [
              { ...input, at: stamp() },
              ...current.speaking.filter((item) => item.taskId !== input.taskId),
            ],
          }),
        ),

      setTheme: (theme) => update((current) => ({ ...current, theme })),

      setProfile: (patch) =>
        update((current) => ({ ...current, profile: { ...current.profile, ...patch } })),

      importState: (json) => {
        try {
          const parsed = JSON.parse(json);
          if (!parsed || typeof parsed !== "object") {
            return { ok: false, message: "ဖိုင်ပုံစံ မမှန်ကန်ပါ။" };
          }
          const next = migrate(parsed);
          setState(next);
          return { ok: true, message: "ဒေတာများ ပြန်လည် တင်သွင်းပြီးပါပြီ။" };
        } catch {
          return { ok: false, message: "JSON ဖတ်ရှု၍ မရပါ။ ဖိုင်ကို ပြန်စစ်ပါ။" };
        }
      },

      resetAll: () => setState(defaultState()),
    };
  }, [update]);

  const value = useMemo<AppContextValue>(
    () => ({ state, status, storageError, today, actions }),
    [state, status, storageError, today, actions],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
