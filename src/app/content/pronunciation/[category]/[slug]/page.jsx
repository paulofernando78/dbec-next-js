import { notFound } from "next/navigation";
import { pronunciationNestedPages } from "@/content/pronunciation/registry";

export const dynamic = "force-dynamic";

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
