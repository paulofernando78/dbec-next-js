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
        <Ribbon label="Introduction" />
        <Paragraph
          blocks={[
            {
              img: "/assets/img/general/girl-wake-up.png",
              imgPosition: "top",
              alt: "Two people talking.",
              width: 350,
              height: 250,
              lines: [
                {
                  text: [
                    {
                      audio: "/assets/audio/general/answer-these-questions.mp3",
                      part: "Answer these questions.",
                      type: "bold",
                    },
                  ],
                  lineBreak: true,
                },
                {
                  text: ["What time do you wake up on the week? "],
                },
                {
                  text: ["Do you study? What do you study? What do you study?"],
                },
                {
                  text: ["Do you work? What do you do? Where do you work?"],
                },
              ],
            },
          ]}
        />

        <Ribbon label="Presentaion" />

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

        <Ribbon label="Meaning" bgColor="var(--gray-4)" />

        <Paragraph
          blocks={[
            {
              text: ["When to use the Simple Present."], lineBreak: true
            },
            {
              text: ["When to use the Simple Present."],
            },
          ]}
        />

        <Checking
          type="CCQ"
          ccq={[
            {
              block: [
                {
                  example: "I work from home?",
                  questions: [
                    {
                      question: "Is this about my routine?",
                    },
                    {
                      question: "Is this happening now??",
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

        <Ribbon label="Pronunciation + Form" bgColor="var(--gray-4)" />

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
      </div>
    </>
  );
}
