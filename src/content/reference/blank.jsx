import { Whiteboard } from "@/components/molecules/Whiteboard";
import { InlineText } from "@/components/molecules/InlineText";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="blank" />
      <div className="line-break">
        <InlineText text={[{ part: "...", type: "bold" }]} />
        <Contents items={[{ href: "...", label: "..." }]} />
        <Section id="..." label="..." heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
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
        </Section>
      </div>
    </>
  );
}
