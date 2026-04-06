import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CEFR({ params }) {
  const { level, slug } = await params;

  try {
    const Content = (await import(`@/content/cefr/${level}/${slug}.jsx`))
      .default;

    return (
      <section>
        <Content />
      </section>
    );
  } catch {
    notFound();
  }
}
