import { notFound } from "next/navigation";

export default async function PronunciationCategory({ params }) {
  const { category } = await params;

  try {
    const Content = (
      await import(`@/content/pronunciation/${category}/index.jsx`)
    ).default;

    return <Content />;
  } catch {
    notFound();
  }
}