import Link from "next/link";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Bold } from "@/components/atoms/Bold";
import { LinkIcon } from "@/lib/svg-imports";

const topics = [
  {
  href: "/cefr/advanced/nbc-news-musks-xai",
    label: "Musk’s xAI supercomputer concerns some Memphis residents",
    description:
      "Advanced listening and discussion based on a short NBC News report.",
  },
];

export const metadata = {
  title: "Advanced | YouTube",
  description: "Advanced lessons based on YouTube videos.",
};

export default function AdvancedYoutube() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="YouTube"
        description="Choose a video-based lesson."
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
