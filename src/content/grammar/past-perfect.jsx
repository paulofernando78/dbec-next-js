import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function PastPerfect() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Past Perfect" />
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
                    text: ["Anna was tired because she had studied all night."],
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
                  "Why ",
                  { type: "mark", part: "was Anna tired" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Because she ",
                  { type: "mark", part: "had studied" },
                  " all night.",
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
                    example: "She was tired because she had studied all night.",
                    questions: [
                      {
                        question: "Are we talking about two actions in the past?",
                        answer: "Yes",
                      },
                      {
                        question: "Did studying happen before she was tired?",
                        answer: "Yes",
                      },
                      {
                        question: "Is the earlier action finished?",
                        answer: "Yes",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Pronunciation + Form" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "Form: had + past participle",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "She had studied. / They had finished.",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "Fill in the blanks with the past perfect form.",
              blocks: [
                {
                  block: [
                    { text: "She was tired because she" },
                    { blank: "had studied" },
                    { text: "all night." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They missed the bus because they" },
                    { blank: "had left" },
                    { text: "home late." },
                  ],
                  lineBreak: true,
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "Choose the correct answer.",
              questions: [
                {
                  question: "1. She was tired because she ____ all night.",
                  options: [
                    { option: "had studied", isCorrect: true },
                    { option: "studied", isCorrect: false },
                    { option: "was studying", isCorrect: false },
                  ],
                },
                {
                  question: "2. They missed the train because they ____ late.",
                  options: [
                    { option: "had arrived", isCorrect: true },
                    { option: "arrived", isCorrect: false },
                    { option: "were arriving", isCorrect: false },
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
                        part: "Now talk about the past.",
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
                text: ["Why were you tired yesterday?"],
              },
              {
                text: ["What had you done before you came here?"],
              },
              {
                text: ["What had your family done before dinner?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}