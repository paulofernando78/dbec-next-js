import Link from "next/link";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Bold } from "@/components/atoms/Bold";
import { LinkIcon } from "@/lib/svg-imports";

const topics = [
  {
    href: "/cefr/advanced/what-causes-constipation",
    label: "What causes constipation?",
    description:
      "Learn what causes constipation and how the digestive system moves food through the body.",
  },
  {
    href: "/cefr/advanced/the-ancient-origins-of-beer",
    label: "The ancient origins of beer",
    description:
      "Discover the ancient history of beer and how one of the world's oldest drinks began.",
  },
];

export const metadata = {
  title: "Advanced | TED-Ed",
  description: "Lessons based on YouTube videos.",
};

export default function AdvancedYoutube() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="TED-Ed"
        description="Lessons based on TED-Ed videos."
      />

      <div className="line-break">
        {topics.map((topic, index) => (
          <div key={index}>
            <Link href={topic.href}>
              <LinkIcon />{" "}
              <Bold>{topic.label}</Bold>
            </Link>
            <span className="block">{topic.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
