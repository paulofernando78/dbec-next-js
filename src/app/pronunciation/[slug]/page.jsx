import { notFound } from "next/navigation";

export default async function PronunciationPage( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/pronunciation/${slug}.jsx`)
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
    { slug: "letters-a-e-ea" },
    { slug: "letters-ee-ea-i" }
  ]
}