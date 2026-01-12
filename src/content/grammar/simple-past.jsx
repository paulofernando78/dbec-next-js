import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function SimplePast() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Verb Be" />
      <div className="line-break">
        <Section label="Introduction" heading={3}>
          <Paragraph
            blocks={[
              {
                imgPosition: "left",
                imgs: [
                  {
                    img: "/assets/img/general/.png",
                    alt: "T.",
                    width: 350,
                    height: 250,
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/answer-these-questions.mp3",
                        part: "Answer these questions.",
                        type: "bold",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: ["... "],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Presentation" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "... ",
                  {
                    type: "mark",
                    part: "...",
                  },
                  " ...",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "... ",
                  {
                    type: "mark",
                    part: "...",
                  },
                  " ...",
                ],
              },
            ]}
          />
        </Section>

        <Section label="Meaning" heading={4}>
          <Checking
            type="CCQ"
            ccq={[
              {
                block: [
                  {
                    example: "...",
                    questions: [
                      {
                        question: "Question",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Pronunciation + Form" heading={4}>
        
        </Section>

        <Section label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "1. Fill in the blanks with affirmative form.",
              blocks: [
                {
                  block: [
                    {
                      text: "...",
                    },
                    {
                      blank: "am",
                    },
                    {
                      text: "...",
                    },
                  ],
                  lineBreak: true,
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "...",
              questions: [
                {
                  question: "1. ...",
                  options: [
                    { option: "...", isCorrect: true },
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section label="Production" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "...",
                        type: "bold",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <List
            bullet={true}
            items={[
              {
                text: ["..."],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}