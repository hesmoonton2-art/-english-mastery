import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ieltsPractice, ieltsWritingTasks } from "@/content";
import IeltsTaskView from "@/components/IeltsTaskView";
import IeltsWritingView from "@/components/IeltsWritingView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return [
    ...ieltsPractice.map((task) => ({ id: task.id })),
    ...ieltsWritingTasks.map((task) => ({ id: task.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const task = ieltsPractice.find((item) => item.id === id);
  const writing = ieltsWritingTasks.find((item) => item.id === id);
  return { title: task?.title ?? writing?.title ?? "IELTS လေ့ကျင့်ခန်း မတွေ့ပါ" };
}

export default async function IeltsTaskPage({ params }: PageProps) {
  const { id } = await params;
  const task = ieltsPractice.find((item) => item.id === id);
  if (task) return <IeltsTaskView task={task} />;
  const writing = ieltsWritingTasks.find((item) => item.id === id);
  if (writing) return <IeltsWritingView task={writing} />;
  notFound();
}
