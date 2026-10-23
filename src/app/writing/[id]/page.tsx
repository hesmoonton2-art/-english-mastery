import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { writingTasks } from "@/content";
import WritingView from "@/components/WritingView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return writingTasks.map((task) => ({ id: task.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const task = writingTasks.find((item) => item.id === id);
  return { title: task ? `${task.title} (${task.level})` : "စာရေးသားမှု မတွေ့ပါ" };
}

export default async function WritingPage({ params }: PageProps) {
  const { id } = await params;
  const task = writingTasks.find((item) => item.id === id);
  if (!task) notFound();
  return <WritingView task={task} />;
}
