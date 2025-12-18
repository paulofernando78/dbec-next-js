import fs from "fs"
import path from "path";
import { notFound } from "next/navigation";

export default async function AudiobookPage( {params} ) {
  const { slug } = await params;

  try {
    const Content = (
      await import(`@/content/audiobooks/${slug}.jsx`)
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
    "src/content/audiobooks"
  );

  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith(".jsx"))
    .map(file => ({
      slug: file.replace(".jsx", ""),
    }));
}