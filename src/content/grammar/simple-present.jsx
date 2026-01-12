import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { InlineText } from "@/components/molecules/InlineText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { CardText } from "@/components/molecules/CardText";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function SimplePresent() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Simple Present" />
      <div className="line-break">
        <Section label="Introduction" heading={3}>
          <Paragraph
            blocks={[
              {
                audioPlayer:
                  "/assets/audio/general/listen-to-these-sentences.mp3",
                lines: [
                  {
                    text: [
                      {
                        part: "Listen to these sentences.",
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
                    img: "/assets/img/general/girl-wake-up.png",
                    alt: "a girl waking up",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/i-wake-up-at-seven-am.mp3",
                      },
                      "I usually wake up at 7 a.m. ",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/general/man-study.png",
                    alt: "a man studying",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/john-studies-in-the-evening.mp3",
                        part: "John studies in the evening.",
                      },
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/general/woman-work-finance.png",
                    alt: "a woman working in finance",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/kate-works-from-home-she-works-in-finance.mp3",
                        part: "Kate works from home. She works in finance.",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <Paragraph
            blocks={[
              {
                audioPlayer:
                  "/assets/audio/general/now-answer-these-questions.mp3",
                lines: [
                  {
                    text: [
                      {
                        part: "Now answer these questions.",
                        type: "bold",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: ["What time do you wake up on weekdays? "],
                  },
                  {
                    text: [
                      "Do you study? What do you study? Where do you study?",
                    ],
                  },
                  {
                    text: ["Do you work? What do you do? Where do you work?"],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Presentation" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/daily-routine-dialogue.mp3"
            lines={[
              {
                speaker: "A:",
                text: ["Hey there! How’s it going?"],
              },
              {
                speaker: "B:",
                text: ["Pretty good. How about you?"],
              },
              {
                speaker: "A:",
                text: ["Can't complain. So, what do you do?"],
              },
              {
                speaker: "B:",
                text: ["I work at a tech company."],
              },
              {
                speaker: "A:",
                text: ["Oh, nice. What do you do there?"],
              },
              {
                speaker: "B:",
                text: ["I design software."],
              },
              {
                speaker: "A:",
                text: ["Do you like your job?"],
              },
              {
                speaker: "B:",
                text: ["Yeah, I enjoy it."],
              },
              {
                speaker: "A:",
                text: ["Do you have to wake up early?"],
              },
              {
                speaker: "B:",
                text: ["Kinda. I usually wake up at 7:30."],
              },
              {
                speaker: "A:",
                text: ["Oh right. I gotta go. Later."],
              },
              {
                speaker: "B:",
                text: ["Seeya."],
              },
            ]}
          />
        </Section>

        <Section label="Meaning" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Look at the dialogue again. These sentences talk about things that happen every day or regularly.",
                    ],
                  },
                ],
              },
            ]}
          />

          <Checking
            type="CCQ"
            ccq={[
              {
                block: [
                  {
                    example: "I get up at 7 a.m. every morning.",
                    questions: [
                      {
                        question: "Is this something I do every day?",
                      },
                      {
                        question: "Is it happening now?",
                      },
                      {
                        question: "Is it a routine/habit?",
                      },
                    ],
                  },
                ],
              },
              {
                block: [
                  {
                    example: "Kate works in finance.",
                    questions: [
                      {
                        question: "Is this always true for Kate?",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Pronunciation + Form" heading={3}></Section>

        <Section label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions:
                "1. Complete the sentences with the correct form of the verb in brackets.",
              blocks: [
                {
                  block: [
                    { text: "I usually (wake up)" },
                    { blank: "wake up" },
                    { text: " at 7 a.m." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She (work)" },
                    { blank: "works" },
                    { text: " in finance." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "He (study)" },
                    { blank: "studies" },
                    { text: " software." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They (work)" },
                    { blank: "work" },
                    { text: " from home." },
                  ],
                  lineBreak: true,
                },
              ],
            }}
          />

          <Radio
            exercise={{
              instruction: "2. Choose the correct answer.",
              questions: [
                {
                  question: "Kate ___ from home.",
                  options: [
                    { option: "work", isCorrect: false },
                    { option: "works", isCorrect: true },
                    { option: "working", isCorrect: false },
                  ],
                },
                {
                  question: "John ___ in the evening.",
                  options: [
                    { option: "study", isCorrect: false },
                    { option: "studies", isCorrect: true },
                    { option: "is study", isCorrect: false },
                  ],
                },
                {
                  question: "They ___ at a tech company.",
                  options: [
                    { option: "works", isCorrect: false },
                    { option: "work", isCorrect: true },
                    { option: "are work", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section label="Production" heading={3}>
          <InlineText
            audio="/assets/audio/"
            text={["Talk about your daily routine."]}
          />
        </Section>
      </div>
    </>
  );
}
