import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Reference( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/reference/${slug}.jsx`)
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
