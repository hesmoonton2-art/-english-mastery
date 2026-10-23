"use client";

import { useEffect, useMemo, useState } from "react";
import { allLessons } from "@/content";
import { computeStats } from "./core/stats";
import { useApp } from "./store";

/** Stats derived from stored activity only — never from static content. */
export function useStats() {
  const { state, today } = useApp();
  return useMemo(
    () =>
      computeStats({
        lessons: allLessons.map((lesson) => ({
          id: lesson.id,
          moduleId: lesson.moduleId,
          level: lesson.level,
          title: lesson.title,
        })),
        progress: state.lessons,
        attempts: state.attempts,
        activity: state.activity,
        words: state.words,
        today,
      }),
    [state, today],
  );
}

/** First unfinished lesson in curriculum order, else the last lesson. */
export function useNextLesson() {
  const { state } = useApp();
  return useMemo(() => {
    const unfinished = allLessons.find((lesson) => !state.lessons[lesson.id]?.completedAt);
    if (unfinished) return unfinished;
    const opened = allLessons.filter((lesson) => state.lessons[lesson.id]?.openedAt);
    return opened.length > 0 ? opened[opened.length - 1] : allLessons[0];
  }, [state.lessons]);
}

/** Reads a query-string value after mount, avoiding a Suspense requirement. */
export function useQueryParam(name: string): string {
  const [value, setValue] = useState("");

  useEffect(() => {
    const read = () => {
      if (typeof window === "undefined") return;
      setValue(new URLSearchParams(window.location.search).get(name) ?? "");
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [name]);

  return value;
}

export function useLocalFlag(key: string): [boolean, (value: boolean) => void] {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setValue(window.localStorage.getItem(key) === "1");
  }, [key]);

  const update = (next: boolean) => {
    setValue(next);
    try {
      if (next) window.localStorage.setItem(key, "1");
      else window.localStorage.removeItem(key);
    } catch {
      /* storage may be unavailable; the in-memory value still works */
    }
  };

  return [value, update];
}
