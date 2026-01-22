import fs from "fs"
import path from "path";
import { notFound } from "next/navigation";

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

export function generateStaticParams() {
  const dir = path.join(
    process.cwd(),
    "src/content/reference"
  );

  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith(".jsx"))
    .map(file => ({
      slug: file.replace(".jsx", ""),
    }));
}