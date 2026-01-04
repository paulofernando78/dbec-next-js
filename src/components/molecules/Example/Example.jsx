import { Card } from "@/components/atoms/Card";

import { Paragraph } from "@/components/molecules/Paragraph";

export const Example = ({ examples = [] }) => {
  if (!examples.length) return null;

  return (
    <Paragraph
      blocks={[
        {
          items: examples.map((e, index) => ({
            lineBreak: index !== examples.length - 1,
            audioPlayer: e.audioPlayer,
            text: e.text,
            portuguese: e.portuguese,
          })),
        },
      ]}
    />
  );
};
