import fs from "fs"
import path from "path";
import { notFound } from "next/navigation";

export default async function CEFR( {params} ) {
  const { level, slug } = await params;

  try {
    const Content = (
      await import(`@/content/cefr/${level}/${slug}.jsx`)
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
  const dir = path.join(
    process.cwd(),
    "src/content/cefr"
  );

  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith(".jsx"))
    .map(file => ({
      slug: file.replace(".jsx", ""),
    }));
}