import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default async function PronunciationCategory({ params }) {
  const { category } = await params;

  try {
    const basePath = path.join(
      process.cwd(),
      "src/content/pronunciation"
    );

    const folderPath = path.join(basePath, category);
    const filePath = path.join(basePath, `${category}.jsx`);

    let Content;

    // Case 1: category is a folder → load index.jsx
    if (fs.existsSync(folderPath)) {
      Content = (
        await import(
          `@/content/pronunciation/${category}/index.jsx`
        )
      ).default;
    }
    // Case 2: category is a direct file → load category.jsx
    else if (fs.existsSync(filePath)) {
      Content = (
        await import(
          `@/content/pronunciation/${category}.jsx`
        )
      ).default;
    } else {
      throw new Error("Not found");
    }

    return <Content />;
  } catch {
    notFound();
  }
}