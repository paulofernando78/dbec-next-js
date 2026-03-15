import { notFound } from "next/navigation";
import { pronunciationPages } from "@/content/pronunciation/registry";

export default async function PronunciationCategory({ params }) {
  const { category } = await params;

  try {
    const loadContent = pronunciationPages[category];

    if (!loadContent) {
      throw new Error("Not found");
    }

    const Content = (await loadContent()).default;

    return <Content />;
  } catch {
    notFound();
  }
}

export function generateStaticParams() {
  return Object.keys(pronunciationPages).map((category) => ({ category }));
}
