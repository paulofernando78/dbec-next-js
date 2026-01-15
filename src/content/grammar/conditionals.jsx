import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Conditionals() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Conditionals" />
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
                    text: ["Conditionals help us talk about real and imaginary situations."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Zero Conditional" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "What do you do ",
                  { type: "mark", part: "if it rains" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "stay at home" },
                  ".",
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
                    example: "If it rains, I stay at home.",
                    questions: [
                      {
                        question: "Is this always true?",
                        answer: "Yes",
                      },
                      {
                        question: "Is it about the past or future?",
                        answer: "No",
                      },
                      {
                        question: "Is it real?",
                        answer: "Yes",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Form" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "If + present simple, present simple",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "If it rains, I stay at home.",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="First Conditional" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "What will you do ",
                  { type: "mark", part: "if it rains tomorrow" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "will stay at home" },
                  ".",
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
                    example: "If it rains tomorrow, I will stay at home.",
                    questions: [
                      {
                        question: "Is this about the future?",
                        answer: "Yes",
                      },
                      {
                        question: "Is it possible?",
                        answer: "Yes",
                      },
                      {
                        question: "Are we sure it will happen?",
                        answer: "No",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Form" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "If + present simple, will + base verb",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "If it rains tomorrow, I will stay at home.",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Second Conditional" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "What would you do ",
                  { type: "mark", part: "if you won the lottery" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "would travel the world" },
                  ".",
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
                    example: "If I won the lottery, I would travel the world.",
                    questions: [
                      {
                        question: "Is this real now?",
                        answer: "No",
                      },
                      {
                        question: "Is it imaginary?",
                        answer: "Yes",
                      },
                      {
                        question: "Are we talking about the present or future?",
                        answer: "Present/Future (imaginary)",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Form" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "If + past simple, would + base verb",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "If I won the lottery, I would travel the world.",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Third Conditional" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "What would you have done ",
                  { type: "mark", part: "if you had studied" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "would have passed the exam" },
                  ".",
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
                    example: "If I had studied, I would have passed the exam.",
                    questions: [
                      {
                        question: "Is this about the past?",
                        answer: "Yes",
                      },
                      {
                        question: "Did it really happen?",
                        answer: "No",
                      },
                      {
                        question: "Can we change it now?",
                        answer: "No",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Form" heading={4}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "If + past perfect, would have + past participle",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "If I had studied, I would have passed the exam.",
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
              instructions: "Fill in the blanks with the correct form.",
              blocks: [
                {
                  block: [
                    { text: "If I am tired, I" },
                    { blank: "go" },
                    { text: "to bed early." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "If it rains, we" },
                    { blank: "stay" },
                    { text: "at home." },
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
                  question: "1. If it rains, I ____ at home.",
                  options: [
                    { option: "stay", isCorrect: true },
                    { option: "stayed", isCorrect: false },
                    { option: "will stay", isCorrect: false },
                  ],
                },
                {
                  question: "2. If I feel tired, I ____ early.",
                  options: [
                    { option: "sleep", isCorrect: true },
                    { option: "slept", isCorrect: false },
                    { option: "will sleep", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "Fill in the blanks with the correct form.",
              blocks: [
                {
                  block: [
                    { text: "If it rains, I" },
                    { blank: "stay" },
                    { text: "at home." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "If it rains, I" },
                    { blank: "will" },
                    { text: "stay at home." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "If I won the lottery, I" },
                    { blank: "would" },
                    { text: "travel." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "If I had studied, I" },
                    { blank: "would have" },
                    { text: "passed." },
                  ],
                  lineBreak: true,
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
                        part: "Now talk about you.",
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
                text: ["What do you usually do if it rains?"],
              },
              {
                text: ["What will you do if it rains tomorrow?"],
              },
              {
                text: ["What would you do if you were rich?"],
              },
              {
                text: ["What would you have done if you had studied more?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}