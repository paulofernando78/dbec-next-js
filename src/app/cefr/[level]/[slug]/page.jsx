import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// Route pattern: /cefr/[level]/[slug]
// Example: /cefr/a1/verb-be  -> src/content/cefr/a1/verb-be.jsx

export default async function GrammarPage({ params }) {
  const { level, slug } = params;

  try {
    const Content = (
      await import(`@/content/cefr/${level}/${slug}.jsx`)
    ).default;

    return (
      <section>
        <Content />
      </section>
    );
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  const baseDir = path.join(
    process.cwd(),
    "src/content/cefr"
  );

  const levels = fs
    .readdirSync(baseDir)
    .filter((name) =>
      fs.statSync(path.join(baseDir, name)).isDirectory()
    );

  const params = [];

  levels.forEach((level) => {
    const levelDir = path.join(baseDir, level);

    fs.readdirSync(levelDir)
      .filter((file) => file.endsWith(".jsx"))
      .forEach((file) => {
        params.push({
          level,
          slug: file.replace(".jsx", ""),
        });
      });
  });

  return params;
}