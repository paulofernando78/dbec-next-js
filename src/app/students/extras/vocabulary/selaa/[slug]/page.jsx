import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PronunciationPage( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/students/extras/vocabulary/selaa/${slug}.jsx`)
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
