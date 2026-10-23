import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readingPassages } from "@/content";
import ReadingView from "@/components/ReadingView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return readingPassages.map((passage) => ({ id: passage.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const passage = readingPassages.find((item) => item.id === id);
  return { title: passage ? `${passage.title} (${passage.level})` : "ဖတ်ရှုမှု မတွေ့ပါ" };
}

export default async function ReadingPage({ params }: PageProps) {
  const { id } = await params;
  const passage = readingPassages.find((item) => item.id === id);
  if (!passage) notFound();
  return <ReadingView passage={passage} />;
}
