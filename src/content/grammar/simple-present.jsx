import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Paragraph } from "@/components/molecules/Paragraph";
import { InlineText } from "@/components/molecules/InlineText";
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
        <section className="line-break">
          <Ribbon label="Introduction" />
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
              {
                imgPosition: "top",
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
                          "/assets/audio/general/i-usually-wake-up-at-seven.mp3",
                        part: "I usually wake up at 7 a.m.",
                      },
                    ],
                  },
                ],
              },
              {
                imgPosition: "top",
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
                          "/assets/audio/general/i-usually-wake-up-at-seven.mp3",
                        part: "I usually wake up at 7 a.m.",
                      },
                    ],
                  },
                ],
              },
              {
                imgPosition: "top",
                imgs: [
                  {
                    img: "/assets/img/general/woman-work.png",
                    alt: "a man working",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/kate-studie-programming.mp3",
                        part: "Kate studies finance.",
                      },
                    ],
                  },
                ],
              },
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/Now-answer-these-questions.mp3",
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
        </section>

        <section className="line-break">
          <Ribbon label="Presentation" />
          <Dialogue
            audioPlayer="/assets/audio/general/daily-routine-dialogue.mp3"
            lines={[
              {
                speaker: "A:",
                text: ["Hi! What do you do every day?"],
              },
              {
                speaker: "B:",
                text: ["I work from home."],
              },
              {
                speaker: "A:",
                text: ["Do you start work early?"],
              },
              {
                speaker: "B:",
                text: ["Yes, I start at 8 a.m."],
              },
              {
                speaker: "A:",
                text: ["Do you use your phone a lot?"],
              },
              {
                speaker: "B:",
                text: ["Yes, I check my phone in the morning."],
              },
            ]}
          />
        </section>

        <section className="line-break">
          <Ribbon label="Meaning" bgColor="var(--gray-4)" />
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      "Look at the dialogue again. These sentences talk about things that happen every day.",
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
                    example: "I get at 7 a.m. every morning.",
                    questions: [
                      {
                        question: "Is this something I do every day?",
                      },
                      {
                        question: "Is it happnening now?",
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
                    example: "...",
                    questions: [
                      {
                        question: "???",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </section>

        <section>
          <Ribbon label="Pronunciation + Form" bgColor="var(--gray-4)" />
        </section>

        <section className="line-break">
          <Ribbon label="Practice" />
          <FillInTheBlanks
            exercise={{
              instructions: "1. Fill in the blanks with affirmative form.",
              blocks: [
                {
                  block: [{ text: "I" }, { blank: "am" }],
                  lineBreak: true,
                },
              ],
            }}
          />
          <Radio
            exercise={{
              instruction: "Choose the correct form of the verb be.",
              questions: [
                {
                  question: "1. ...",
                  options: [
                    { option: "...", isCorrect: true },
                    { option: "...", isCorrect: false },
                    { option: "...", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </section>

        <section className="line-break">
          <Ribbon label="Production" />
          <InlineText
            audio="/assets/audio/"
            text={[
              "Talk about your daily routine. ",
              {
                correct: true,
                audio: "/assets/audio/",
                text: "...",
                type: "bold",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
