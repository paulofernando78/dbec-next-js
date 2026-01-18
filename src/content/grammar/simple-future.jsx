import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { CardText } from "@/components/molecules/CardText";
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
        <Contents
          items={[
            { href: "introduction", label: "Introduction" },
            { href: "presentation", label: "Presentation" },
            { href: "meaning", label: "Meaning" },
            { href: "pronunciation-form", label: "Pronunciation + Form" },
            { href: "practice", label: "Practice" },
            { href: "production", label: "Production" },
          ]}
        />
        <Section id="introduction" label="Introduction" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/look-at-the-pictures-and-listen-to-the-sentences.mp3",
                        part: "Look at the pictures and listen to the sentences.",
                        type: "bold",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <CardText
            blocks={[
              {
                imgs: [
                  {
                    img: "",
                    alt: "",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "normal ",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "",
                    alt: "",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "normal ",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "",
                    alt: "",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "normal ",
                    ],
                  },
                ],
              },
            ]}
          />
          <Radio
            exercise={{
              instruction: "Answer the questions.",
              questions: [
                {
                  question: "1. ...",
                  options: [
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: true },
                  ],
                },
                {
                  question: "2. ...",
                  options: [
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: true },
                    { option: "...", isCorrect: false },
                  ],
                },
                {
                  question: "3. ...",
                  options: [
                    { option: "...", isCorrect: true },
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: false },
                  ],
                },
              ],
            }}
          />
          <Paragraph
            blocks={[
              {
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
                    text: [
                      "...",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="presentation" label="Presentation" heading={3}>
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
                text: ["I ", { type: "mark", part: "will go" }, " to school."],
              },
            ]}
          />
        </Section>

        <Section id="meaning" label="Meaning" heading={4}>
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

        <Section id="pronunciation-form" label="Pronunciation + Form" heading={4}>
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
                    text: ["I will study. / She will go to school."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
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

        <Section id="production" label="Production" heading={3}>
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
