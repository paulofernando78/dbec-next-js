import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="blank" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    {
                      part: "...",
                      type: "bold",
                    },
                  ],
                },
                {
                  lineBreak: true,
                },
                // ...
                {
                  text: [
                    { part: "word", type: "bold" },
                    " ",
                    { part: "meaning", type: "portuguese" },
                    " ",
                    {
                      bullet: true,
                      part: "example",
                    },
                    { part: " example", type: "portuguese" },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
