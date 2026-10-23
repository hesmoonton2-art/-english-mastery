import Link from "next/link";
import type { ReactNode } from "react";
import type { CEFR } from "@/lib/types";

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  return (
    <Tag
      className={`rounded-2xl border border-ink-200/80 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 ${className}`}
    >
      {children}
    </Tag>
  );
}

const TONES: Record<string, string> = {
  slate: "bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200",
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200",
  violet: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-200",
};

export function Badge({
  children,
  tone = "slate",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONES | string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${TONES[tone] ?? TONES.slate} ${className}`}
    >
      {children}
    </span>
  );
}

const LEVEL_TONE: Record<CEFR, string> = {
  A1: "green",
  A2: "green",
  B1: "brand",
  B2: "violet",
  C1: "amber",
  C2: "rose",
};

export function LevelBadge({ level, className = "" }: { level: CEFR; className?: string }) {
  return (
    <Badge tone={LEVEL_TONE[level]} className={className}>
      {level}
    </Badge>
  );
}

export function ProgressBar({
  value,
  className = "",
  tone = "brand",
}: {
  value: number;
  className?: string;
  tone?: "brand" | "gold" | "green";
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  const color =
    tone === "gold" ? "bg-gold-500" : tone === "green" ? "bg-emerald-500" : "bg-brand-600";
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800 ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${clamped}%` }} />
    </div>
  );
}

export function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
}) {
  return (
    <Card className="p-4">
      <p className="mm text-xs font-medium text-ink-500 dark:text-ink-400">{label}</p>
      <p className="mt-1 text-2xl font-bold text-ink-900 dark:text-white">{value}</p>
      {hint ? <p className="mm mt-1 text-xs text-ink-500 dark:text-ink-400">{hint}</p> : null}
    </Card>
  );
}

export function PageHeader({
  title,
  titleMm,
  description,
  actions,
}: {
  title: string;
  titleMm?: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
          {title}
          {titleMm ? (
            <span className="mm ml-2 text-base font-medium text-ink-500 dark:text-ink-400">
              {titleMm}
            </span>
          ) : null}
        </h1>
        {description ? (
          <p className="mm mt-2 max-w-3xl text-sm text-ink-600 dark:text-ink-300">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export function Empty({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <Card className="p-6 text-center">
      <p className="mm text-sm font-semibold text-ink-700 dark:text-ink-200">{title}</p>
      {children ? (
        <div className="mm mx-auto mt-2 max-w-xl text-sm text-ink-500 dark:text-ink-400">{children}</div>
      ) : null}
    </Card>
  );
}

const BUTTON_VARIANTS = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 border-transparent dark:bg-brand-600 dark:hover:bg-brand-500",
  secondary:
    "bg-white text-ink-800 border-ink-200 hover:bg-ink-50 dark:bg-ink-900 dark:text-ink-100 dark:border-ink-700 dark:hover:bg-ink-800",
  ghost:
    "bg-transparent text-ink-700 border-transparent hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800",
  danger:
    "bg-rose-600 text-white border-transparent hover:bg-rose-700",
} as const;

export function buttonClass(
  variant: keyof typeof BUTTON_VARIANTS = "primary",
  extra = "",
): string {
  return `mm inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${BUTTON_VARIANTS[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

export function KeyValueTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="scrollbar-thin mt-3 overflow-x-auto rounded-xl border border-ink-200 dark:border-ink-800">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-ink-50 text-xs uppercase tracking-wide text-ink-500 dark:bg-ink-800/60 dark:text-ink-300">
          <tr>
            {headers.map((header) => (
              <th key={header} className="whitespace-nowrap px-3 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row.join("-")}-${index}`}
              className="border-t border-ink-100 dark:border-ink-800"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cellIndex}-${cell}`}
                  className="px-3 py-2 align-top text-ink-700 dark:text-ink-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
