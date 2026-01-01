import { Paragraph } from "@/components/molecules/Paragraph";

export const Example = ({ examples = [] }) => {
  return (
    <div>
      <Paragraph
        paragraphs={examples.map((e, index) => ({
          lineBreak: index !== examples.length -1,
          audioPlayer: e.audioPlayer,
          text: e.text,
          portuguese: e.portuguese,
        }))}
      />
    </div>
  );
};
