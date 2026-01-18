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

export default function PresentPerfect() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Present Perfect" />
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
                      "Anna has finished her homework. She is ready to relax.",
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
                  "Have you ",
                  { type: "mark", part: "finished" },
                  " your homework?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, I ",
                  { type: "mark", part: "have finished" },
                  " it.",
                ],
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
                    example: "I have finished my homework.",
                    questions: [
                      {
                        question: "Is this about the past?",
                        answer: "Yes",
                      },
                      {
                        question: "Is the result important now?",
                        answer: "Yes",
                      },
                      {
                        question: "Do we say exactly when it happened?",
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
                        part: "Form: have / has + past participle",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["I have finished. / She has arrived."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "Fill in the blanks with the present perfect form.",
              blocks: [
                {
                  block: [
                    { text: "I" },
                    { blank: "have finished" },
                    { text: "my homework." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She" },
                    { blank: "has arrived" },
                    { text: "home." },
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
                  question: "1. I ____ my homework.",
                  options: [
                    { option: "have finished", isCorrect: true },
                    { option: "finished", isCorrect: false },
                    { option: "am finishing", isCorrect: false },
                  ],
                },
                {
                  question: "2. She ____ home.",
                  options: [
                    { option: "has arrived", isCorrect: true },
                    { option: "arrived", isCorrect: false },
                    { option: "is arriving", isCorrect: false },
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
                        part: "Now talk about your life.",
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
                text: ["What have you finished today?"],
              },
              {
                text: ["What places have you visited?"],
              },
              {
                text: ["What has your teacher done today?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
