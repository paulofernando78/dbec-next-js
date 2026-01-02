import { notFound } from "next/navigation";

export default async function PronunciationCategorySlug({ params }) {
  const { category, slug } = await params;

  try {
    const Content = (
      await import(`@/content/pronunciation/${category}/${slug}.jsx`)
    ).default;

    return <Content />;
  } catch {
    notFound();
  }
}