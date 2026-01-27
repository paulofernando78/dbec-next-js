import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/exercises/FillInTheBlanks";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="blank" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    "",
                    {
                      part: "...",
                      type: "",
                    },
                    "",
                  ],
                },
              ],
            },
          ]}
        />
        <Contents
          items={[
            { href: "...", label: "..." },
            { href: "exerises", label: "Exercises" },
          ]}
        />

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
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
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

        <Section id="exercises" label="Exercises" heading={3}>
          <Radio
            exercise={{
              instruction: "Answer the questions. / Choose the best response.",
              questions: [
                {
                  question: "1. Question",
                  options: [
                    { option: "option 1", isCorrect: true },
                    { option: "option 2", isCorrect: false },
                    { option: "option 3", isCorrect: false },
                  ],
                },
              ],
            }}
          />
          <FillInTheBlanks
            exercise={{
              instructions: "1. Fill in the blanks with the correct answer.",
              blocks: [
                {
                  block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
                },
                {
                  lineBreak: true,
                },
              ],
            }}
          />
        </Section>
      </div>
    </>
  );
}
