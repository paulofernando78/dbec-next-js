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

export default function FuturePerfect() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Future Perfect" />
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
                    img: "/assets/img/grammar/future-perfect/laura-working-on-her-report.png",
                    alt: "a woman working on a report in the evening",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/future-perferct/laura-is-working-on-her-report.mp3",
                        part: "Laura is working on her report. By tomorrow morning, She will have finished it.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Laura está trabalhando no relatório dela. Amanhã de manhã, ela já terá terminado.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/general/woman-work-hand-over-report.png",
                    alt: "",
                    width: 300,
                    height: 300,
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/future-perferct/report-is-ready.mp3",
                        part: "The report is ready. She is handing it over to her boss.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "O relatório está pronto. Ela está entregando para o seu chefe dela.",
                        type: "portuguese",
                      },
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
                  "Will you have finished your homework ",
                  { type: "mark", part: "by tomorrow morning" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, I ",
                  { type: "mark", part: "will have finished" },
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
                    example:
                      "I will have finished my homework by tomorrow morning.",
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
                        question: "Is the action finished before that time?",
                        answer: "Yes",
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
                        part: "Form: will have + past participle",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["I will have finished. / She will have arrived."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "Fill in the blanks with the future perfect form.",
              blocks: [
                {
                  block: [
                    { text: "By tomorrow morning, I" },
                    { blank: "will have finished" },
                    { text: "my homework." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "By 8 p.m., she" },
                    { blank: "will have arrived" },
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
                  question: "1. By tomorrow, I ____ my project.",
                  options: [
                    { option: "will have finished", isCorrect: true },
                    { option: "will finish", isCorrect: false },
                    { option: "am finishing", isCorrect: false },
                  ],
                },
                {
                  question: "2. By next week, they ____ the exam.",
                  options: [
                    { option: "will have taken", isCorrect: true },
                    { option: "will take", isCorrect: false },
                    { option: "are taking", isCorrect: false },
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
                        part: "Now talk about the future.",
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
                text: ["What will you have finished by tomorrow?"],
              },
              {
                text: ["What will you have done by the end of this week?"],
              },
              {
                text: ["What will your family have done by next year?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
