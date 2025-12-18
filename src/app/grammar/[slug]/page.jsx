import { notFound } from "next/navigation";

export default async function GrammarPage( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/grammar/${slug}.jsx`)
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
    { slug: "verb-be" }
  ]
}