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

export default function PastContinuous() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Past Continuous" />
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
                    text: ["..."],
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
                  { type: "mark", part: "were you doing" },
                  " yesterday at 8 p.m.?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "was studying" },
                  " at home.",
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

        <Section
          id="pronunciation-form"
          label="Pronunciation + Form"
          heading={4}
        >
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
                    text: ["I was studying. / They were playing."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
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

        <Section id="production" label="Production" heading={3}>
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
