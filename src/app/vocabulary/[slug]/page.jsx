import { notFound } from "next/navigation";

export default async function VocabularyPage( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/vocabulary/${slug}.jsx`)
    ).default;

    return (
      <section>
        <Content />
      </section>
    )

  } catch (error) {
    notFound()
  }
}

export function generateStaticParams() {
  return [
    { slug: "collocations" }
  ]
}