import Link from "next/link";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Links } from "@/components/molecules/Links";
import { Bold } from "@/components/atoms/Bold";

const topics = [
  {
    href: "",
    label: "",
  },
];

export const metadata = {
  title: "Advanced | General Videos",
  description: "Advanced lessons based on General videos.",
};

export default function AdvancedYoutube() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="General Videos"
        description="Video-based lessons."
      />
      <Links
        groups={[
          {
            items: [
              {
                href: "/cefr/advanced/nbc-news-musks-xai",
                label:
                  "Musk’s xAI supercomputer concerns some Memphis residents",
                description:
                  "Advanced listening and discussion based on a short NBC News report.",
              },
            ],
          },
        ]}
      />
      <div className="line-break">
        {topics.map((topic, index) => (
          <div key={index}>
            <Links href={topic.href}>
              <Bold>{topic.label}</Bold>
            </Links>
            <span className="block">{topic.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
