import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

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

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/cefr");

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory()) {
      return [];
    }

    const level = entry.name;
    const levelDir = path.join(dir, level);

    return fs
      .readdirSync(levelDir)
      .filter((file) => file.endsWith(".jsx"))
      .map((file) => ({
        level,
        slug: file.replace(".jsx", ""),
      }));
  });
}
