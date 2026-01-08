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
              img: "/assets/img/general/.png",
              imgPosition: "left",
              alt: "Two people talking.",
              width: 350,
              height: 250,
              items: [
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
                  text: ["... "],
                },
                {
                  text: ["..."],
                },
              ],
            },
          ]}
        />

        <Ribbon label="Presentaion" />
        <Dialogue
          audioPlayer="/assets/audio/general/i-am.mp3"
          lines={[
            {
              speaker: "speaker:",
              text: [
                "... ",
                {
                  type: "mark",
                  part: "...",
                },
                " ...",
              ],
            },
          ]}
        />

        <Ribbon label="Meaning" bgColor="var(--gray-4)" />

        <Checking
          type="CCQ"
          ccq={[
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

        <Ribbon label="Pronuncition + Form" bgColor="var(--gray-4)" />

        <Ribbon label="Practice" />
        <FillInTheBlanks
          data={{
            instructions: "1. Fill in the blanks with affirmative form.",
            blocks: [
              {
                block: [{ text: "I" }, { blank: "am" }],
                lineBreak: true,
              }
            ],
          }}
        />
        <Radio
          data={{
            instruction: "Choose the correct form of the verb be.",
            questions: [
              {
                question: "1. ...",
                options: [
                  { option: "...", isCorrect: true },
                  { option: "...", isCorrect: false },
                  { option: "...", isCorrect: false },
                ],
              }
            ],
          }}
        />

        <Ribbon label="Production" />
      </div>
    </>
  );
}
