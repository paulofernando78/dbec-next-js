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

export default function PastPerfect() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Past Perfect" />
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
                text: ["Why ", { type: "mark", part: "was Anna tired" }, "?"],
              },
              {
                speaker: "B:",
                text: [
                  "Because she ",
                  { type: "mark", part: "had studied" },
                  " all night.",
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
                    example: "She was tired because she had studied all night.",
                    questions: [
                      {
                        question:
                          "Are we talking about two actions in the past?",
                        answer: "Yes",
                      },
                      {
                        question: "Did studying happen before she was tired?",
                        answer: "Yes",
                      },
                      {
                        question: "Is the earlier action finished?",
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
                        part: "Form: had + past participle",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["She had studied. / They had finished."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions: "Fill in the blanks with the past perfect form.",
              blocks: [
                {
                  block: [
                    { text: "She was tired because she" },
                    { blank: "had studied" },
                    { text: "all night." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They missed the bus because they" },
                    { blank: "had left" },
                    { text: "home late." },
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
                  question: "1. She was tired because she ____ all night.",
                  options: [
                    { option: "had studied", isCorrect: true },
                    { option: "studied", isCorrect: false },
                    { option: "was studying", isCorrect: false },
                  ],
                },
                {
                  question: "2. They missed the train because they ____ late.",
                  options: [
                    { option: "had arrived", isCorrect: true },
                    { option: "arrived", isCorrect: false },
                    { option: "were arriving", isCorrect: false },
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
                        part: "Now talk about the past.",
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
                text: ["Why were you tired yesterday?"],
              },
              {
                text: ["What had you done before you came here?"],
              },
              {
                text: ["What had your family done before dinner?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
