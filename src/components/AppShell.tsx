"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/lib/store";
import { progressSummary } from "@/lib/core/stats";
import { contentCounts } from "@/content";

type NavItem = { href: string; label: string; labelEn: string };
type NavGroup = { title: string; items: NavItem[] };

const NAV: NavGroup[] = [
  {
    title: "သင်ယူရန်",
    items: [
      { href: "/", label: "ပင်မစာမျက်နှာ", labelEn: "Dashboard" },
      { href: "/roadmap", label: "သင်ရိုး လမ်းညွှန်", labelEn: "Roadmap" },
      { href: "/lessons", label: "သင်ခန်းစာများ", labelEn: "Lessons" },
    ],
  },
  {
    title: "စကားလုံးများ",
    items: [
      { href: "/vocabulary", label: "စကားလုံး ဘဏ်", labelEn: "Word bank" },
      { href: "/notebook", label: "မှတ်စုစာအုပ်", labelEn: "Notebook" },
      { href: "/review", label: "ပြန်လည်လေ့ကျင့်ရန်", labelEn: "Review" },
    ],
  },
  {
    title: "ကျွမ်းကျင်မှုများ",
    items: [
      { href: "/reading", label: "ဖတ်ရှုမှု", labelEn: "Reading" },
      { href: "/listening", label: "နားထောင်မှု", labelEn: "Listening" },
      { href: "/writing", label: "စာရေးသားမှု", labelEn: "Writing" },
      { href: "/speaking", label: "ပြောဆိုမှု", labelEn: "Speaking" },
    ],
  },
  {
    title: "စစ်ဆေးမှု",
    items: [
      { href: "/practice", label: "လေ့ကျင့်ခန်း", labelEn: "Practice" },
      { href: "/quizzes", label: "စာမေးပွဲများ", labelEn: "Quizzes" },
      { href: "/assessment", label: "အကဲဖြတ်မှု", labelEn: "Assessment" },
      { href: "/ielts", label: "IELTS လေ့ကျင့်", labelEn: "IELTS" },
    ],
  },
  {
    title: "ကျွန်ုပ်",
    items: [{ href: "/progress", label: "တိုးတက်မှု", labelEn: "Progress" }],
  },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 14.5A8 8 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state, actions, storageError, status } = useApp();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const summary = progressSummary(state.lessons, contentCounts.lessons);

  const nav = (
    <nav aria-label="ပင်မ လမ်းညွှန်" className="space-y-5">
      {NAV.map((group) => (
        <div key={group.title}>
          <p className="mm px-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
            {group.title}
          </p>
          <ul className="mt-1 space-y-0.5">
            {group.items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-baseline justify-between gap-2 rounded-xl px-3 py-2 text-sm transition ${
                      active
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
                    }`}
                  >
                    <span className="mm font-medium">{item.label}</span>
                    <span
                      className={`text-[10px] uppercase tracking-wide ${
                        active ? "text-brand-100" : "text-ink-400 dark:text-ink-500"
                      }`}
                    >
                      {item.labelEn}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="mm sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        အဓိက အကြောင်းအရာသို့ ကျော်သွားရန်
      </a>

      <header className="sticky top-0 z-30 border-b border-ink-200/80 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/90">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="လမ်းညွှန် ဖွင့်/ပိတ်"
            className="rounded-xl border border-ink-200 p-2 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
              EM
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-ink-900 dark:text-white">English Mastery</span>
              <span className="mm block text-[11px] text-ink-500 dark:text-ink-400">
                အခြေခံမှ အဆင့်မြင့်သို့
              </span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/roadmap"
              className="mm hidden rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700 sm:inline-flex dark:bg-ink-800 dark:text-ink-200"
            >
              ပြီးစီး {summary.completed}/{summary.total}
            </Link>
            {state.profile.targetLevel ? (
              <span className="mm hidden rounded-full border border-ink-200 px-3 py-1 text-xs font-semibold text-ink-600 sm:inline-flex dark:border-ink-700 dark:text-ink-300">
                ရည်မှန်း {state.profile.targetLevel}
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => actions.setTheme(state.theme === "dark" ? "light" : "dark")}
              aria-label={state.theme === "dark" ? "အလင်း theme သို့ ပြောင်း" : "အမှောင် theme သို့ ပြောင်း"}
              className="rounded-xl border border-ink-200 p-2 text-ink-600 transition hover:bg-ink-100 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
            >
              {state.theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {storageError ? (
          <p className="mm bg-rose-600 px-4 py-2 text-center text-xs font-medium text-white" role="alert">
            {storageError} — ဒေတာ ဆုံးရှုံးနိုင်ပါသည်။
          </p>
        ) : null}
      </header>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-6">
        <aside
          id="sidebar"
          className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto pb-8 pr-2 lg:block scrollbar-thin"
        >
          {nav}
          <div className="mm mt-6 rounded-xl border border-ink-200 p-3 text-xs leading-6 text-ink-500 dark:border-ink-800 dark:text-ink-400">
            ဒေတာအားလုံးကို ဤဘရောက်ဇာ၏ localStorage တွင်သာ သိမ်းဆည်းသည်။ အကောင့် မလိုအပ်သလို
            အခြား စက်များနှင့် အလိုအလျောက် မျှဝေမည် မဟုတ်ပါ။
          </div>
        </aside>

        {open ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              aria-label="လမ်းညွှန် ပိတ်ရန်"
              className="absolute inset-0 bg-ink-950/50"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto bg-white p-4 shadow-xl dark:bg-ink-900">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-ink-900 dark:text-white">လမ်းညွှန်</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="ပိတ်ရန်"
                  className="rounded-lg border border-ink-200 px-2 py-1 text-sm text-ink-600 dark:border-ink-700 dark:text-ink-300"
                >
                  ✕
                </button>
              </div>
              {nav}
            </div>
          </div>
        ) : null}

        <main id="main" className="min-w-0 flex-1 pb-16">
          {status === "loading" ? (
            <p className="mm rounded-xl bg-ink-100 px-4 py-3 text-sm text-ink-600 dark:bg-ink-800 dark:text-ink-300">
              ဒေတာ ဖတ်ရှုနေသည်…
            </p>
          ) : null}
          {children}
          <footer className="mm mt-12 border-t border-ink-200 pt-6 text-xs leading-6 text-ink-500 dark:border-ink-800 dark:text-ink-400">
            <p>
              English Mastery — ဤပလက်ဖောင်းသည် ကိုယ်တိုင် လေ့လာရန် ဖန်တီးထားသည့် သင်ရိုး ဖြစ်သည်။
              အသံဖိုင် မပါဝင်ပါ၊ အသံ/အသံထွက် အကဲဖြတ်မှု မရှိပါ။ စာရေးသားမှု အကဲဖြတ်ချက်များသည်
              စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာမှုသာ ဖြစ်ပြီး AI အဆင့် တိကျမှု မဟုတ်ပါ။ CEFR/IELTS
              ရမှတ်များသည် ခန့်မှန်းချက်သာဖြစ်ပြီး တရားဝင် အသိအမှတ်ပြု လက်မှတ် မဟုတ်ပါ။
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
