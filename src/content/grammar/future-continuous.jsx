import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function FutureContinuous() {
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
                    text: ["Tomorrow afternoon, Anna will be studying at home."],
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
                  { type: "mark", part: "will you be doing" },
                  " tomorrow afternoon?"
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "will be studying" },
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
                    example: "I will be studying at home tomorrow afternoon.",
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
                        question: "Is the action in progress at that time?",
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
                        part: "Form: will + be + verb-ing",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "I will be studying. / She will be working.",
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
              instructions: "Fill in the blanks with the future continuous form.",
              blocks: [
                {
                  block: [
                    { text: "Tomorrow at 8 p.m., I" },
                    { blank: "will be studying" },
                    { text: "." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "This time tomorrow, she" },
                    { blank: "will be working" },
                    { text: "." },
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
                  question: "1. This time tomorrow, I ____ dinner.",
                  options: [
                    { option: "will be cooking", isCorrect: true },
                    { option: "cook", isCorrect: false },
                    { option: "will cook", isCorrect: false },
                  ],
                },
                {
                  question: "2. At 9 a.m. tomorrow, they ____ class.",
                  options: [
                    { option: "will be having", isCorrect: true },
                    { option: "have", isCorrect: false },
                    { option: "will have", isCorrect: false },
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
                text: ["What will you be doing tomorrow afternoon?"],
              },
              {
                text: ["What will you be doing this time tomorrow?"],
              },
              {
                text: ["What will your family be doing tomorrow evening?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}