import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function PastContinuous() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Past Continuous" />
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
                    text: ["Yesterday at 8 p.m., Anna was studying at home."],
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
                  "What ",
                  { type: "mark", part: "were you doing" },
                  " yesterday at 8 p.m.?"
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "was studying" },
                  " at home."
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
                    example: "I was studying at 8 p.m. yesterday.",
                    questions: [
                      {
                        question: "Is this about the present?",
                        answer: "No",
                      },
                      {
                        question: "Is this about the past?",
                        answer: "Yes",
                      },
                      {
                        question: "Was the action in progress at that time?",
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
                        part: "Form: was / were + verb-ing",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "I was studying. / They were playing.",
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
              instructions: "Fill in the blanks with the past continuous form.",
              blocks: [
                {
                  block: [
                    { text: "Yesterday at 9 p.m., I" },
                    { blank: "was studying" },
                    { text: "." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "At that time, they" },
                    { blank: "were watching" },
                    { text: "TV." },
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
                  question: "1. At 7 p.m. yesterday, she ____ dinner.",
                  options: [
                    { option: "was cooking", isCorrect: true },
                    { option: "cooked", isCorrect: false },
                    { option: "is cooking", isCorrect: false },
                  ],
                },
                {
                  question: "2. At that time, they ____ football.",
                  options: [
                    { option: "were playing", isCorrect: true },
                    { option: "played", isCorrect: false },
                    { option: "are playing", isCorrect: false },
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
                        part: "Now talk about yesterday.",
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
                text: ["What were you doing yesterday at 8 p.m.?"],
              },
              {
                text: ["What was your family doing at that time?"],
              },
              {
                text: ["What were your friends doing last night?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}