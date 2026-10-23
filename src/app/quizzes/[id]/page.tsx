import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { quizzes } from "@/content";
import QuizView from "@/components/QuizView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ id: quiz.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const quiz = quizzes.find((item) => item.id === id);
  return { title: quiz ? quiz.title : "စာမေးပွဲ မတွေ့ပါ" };
}

export default async function QuizPage({ params }: PageProps) {
  const { id } = await params;
  const quiz = quizzes.find((item) => item.id === id);
  if (!quiz) notFound();
  return <QuizView quiz={quiz} />;
}
