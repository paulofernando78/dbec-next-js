import { notFound } from "next/navigation";
import { pronunciationNestedPages } from "@/content/pronunciation/registry";

export default async function PronunciationCategorySlug({ params }) {
  const { category, slug } = await params;

  try {
    const loadContent = pronunciationNestedPages[`${category}/${slug}`];

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
  return Object.keys(pronunciationNestedPages).map((key) => {
    const [category, slug] = key.split("/");

    return { category, slug };
  });
}
