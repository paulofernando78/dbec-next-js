import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function SimplePast() {
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
                    text: ["Yesterday was a school day. Anna was at school."],
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
                  "Where ",
                  { type: "mark", part: "were you yesterday" },
                  "?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "was at school" },
                  ".",
                ],
              },
              {
                speaker: "A:",
                text: [
                  "What did you do after class?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "studied" },
                  " and ",
                  { type: "mark", part: "played" },
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
                    example: "I was at school yesterday.",
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
                        question: "Is yesterday finished?",
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
                        part: "Affirmative: subject + past simple",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "I was at school. / I studied English.",
                    ],
                  },
                  {
                    text: [
                      {
                        part: "Regular verbs: verb + -ed",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      "study → studied | play → played",
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
              instructions: "Fill in the blanks with the past simple form.",
              blocks: [
                {
                  block: [
                    { text: "I" },
                    { blank: "was" },
                    { text: "at school yesterday." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She" },
                    { blank: "studied" },
                    { text: "English last night." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They" },
                    { blank: "played" },
                    { text: "football after class." },
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
                  question: "1. Yesterday, I ____ at home.",
                  options: [
                    { option: "was", isCorrect: true },
                    { option: "am", isCorrect: false },
                    { option: "will be", isCorrect: false },
                  ],
                },
                {
                  question: "2. She ____ English last night.",
                  options: [
                    { option: "studied", isCorrect: true },
                    { option: "studies", isCorrect: false },
                    { option: "will study", isCorrect: false },
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
                text: ["Where were you yesterday?"],
              },
              {
                text: ["What did you do after class?"],
              },
              {
                text: ["Did you study or relax?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}