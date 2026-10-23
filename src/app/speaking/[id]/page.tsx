import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { speakingTasks } from "@/content";
import SpeakingView from "@/components/SpeakingView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return speakingTasks.map((task) => ({ id: task.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const task = speakingTasks.find((item) => item.id === id);
  return { title: task ? `${task.title} (${task.level})` : "ပြောဆိုမှု မတွေ့ပါ" };
}

export default async function SpeakingPage({ params }: PageProps) {
  const { id } = await params;
  const task = speakingTasks.find((item) => item.id === id);
  if (!task) notFound();
  return <SpeakingView task={task} />;
}
