import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLessons, lessonById } from "@/content";
import LessonView from "@/components/LessonView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ id: lesson.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const lesson = lessonById(id);
  if (!lesson) return { title: "သင်ခန်းစာ မတွေ့ပါ" };
  return {
    title: `${lesson.title} (${lesson.level})`,
    description: lesson.summaryLine,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = lessonById(id);
  if (!lesson) notFound();
  return <LessonView lesson={lesson} />;
}
