import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function SimpleFuture() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Simple Future (will)" />
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
                    text: ["Tomorrow is a school day. Anna will go to school."],
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
                  { type: "mark", part: "will you do" },
                  " tomorrow?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "will go" },
                  " to school.",
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
                    example: "I will go to school tomorrow.",
                    questions: [
                      {
                        question: "Is this about the present?",
                        answer: "No",
                      },
                      {
                        question: "Is this about the future?",
                        answer: "Yes",
                      },
                      {
                        question: "Is tomorrow finished?",
                        answer: "No",
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
                        part: "Form: will + base verb",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "I will study. / She will go to school.",
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
              instructions: "Fill in the blanks with the simple future form.",
              blocks: [
                {
                  block: [
                    { text: "Tomorrow, I" },
                    { blank: "will study" },
                    { text: "English." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She" },
                    { blank: "will go" },
                    { text: "to school." },
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
                  question: "1. Tomorrow, I ____ English.",
                  options: [
                    { option: "will study", isCorrect: true },
                    { option: "study", isCorrect: false },
                    { option: "am studying", isCorrect: false },
                  ],
                },
                {
                  question: "2. She ____ to school tomorrow.",
                  options: [
                    { option: "will go", isCorrect: true },
                    { option: "goes", isCorrect: false },
                    { option: "went", isCorrect: false },
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
                        part: "Now talk about tomorrow.",
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
                text: ["What will you do tomorrow?"],
              },
              {
                text: ["What will you study next?"],
              },
              {
                text: ["What will your family do tomorrow?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}