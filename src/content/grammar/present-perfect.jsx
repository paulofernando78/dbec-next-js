import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
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
                    text: ["Anna has finished her homework. She is ready to relax."],
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
                  "Have you ",
                  { type: "mark", part: "finished" },
                  " your homework?"
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, I ",
                  { type: "mark", part: "have finished" },
                  " it."
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

        <Section label="Pronunciation + Form" heading={4}>
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
                    text: [
                      "I have finished. / She has arrived.",
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

        <Section label="Production" heading={3}>
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