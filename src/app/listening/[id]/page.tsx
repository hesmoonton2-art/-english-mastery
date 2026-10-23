import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listeningScripts } from "@/content";
import ListeningView from "@/components/ListeningView";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return listeningScripts.map((script) => ({ id: script.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const script = listeningScripts.find((item) => item.id === id);
  return { title: script ? `${script.title} (${script.level})` : "နားထောင်မှု မတွေ့ပါ" };
}

export default async function ListeningPage({ params }: PageProps) {
  const { id } = await params;
  const script = listeningScripts.find((item) => item.id === id);
  if (!script) notFound();
  return <ListeningView script={script} />;
}
