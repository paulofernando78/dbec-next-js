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

export default function PresebtContinuous() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Present Continuous" />
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
                    img: "/assets/img/grammar/present-continuous/introduction/mr-smith-teaching.png",
                    alt: "a teacher speaking in front of the students",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "Mr. Smith is teaching.",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/grammar/present-continuous/introduction/students-are-writing.png",
                    alt: "students are writting",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "Students are writing.",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/grammar/present-continuous/introduction/students-are-speaking.png",
                    alt: "students are speaking in the classroom",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "Students are speaking to one another.",
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
                  question: "1. Mr. Smith is...",
                  options: [
                    { option: "listening.", isCorrect: false },
                    { option: "teaching.", isCorrect: true },
                    { option: "writing.", isCorrect: false },
                  ],
                },
                {
                  question: "2. Students are...",
                  options: [
                    { option: "learning", isCorrect: false },
                    { option: "teaching", isCorrect: true },
                    { option: "sleeping", isCorrect: false },
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

        <Section lid="presentation" abel="Presentation" heading={3}>
          <Dialogue
            audioPlayer="/assets/audio/general/.mp3"
            lines={[
              {
                speaker: "A:",
                text: [
                  "What ",
                  { type: "mark", part: "are you doing" },
                  " now?",
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I ",
                  { type: "mark", part: "am answering" },
                  " questions.",
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
                    example: "I am answering questions now.",
                    questions: [
                      {
                        question: "Is this happening now?",
                        answer: "Yes",
                      },
                      {
                        question: "Is this about the past?",
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
                        part: "Form: am / is / are + verb-ing",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: ["I am studying. / She is answering."],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
          <FillInTheBlanks
            exercise={{
              instructions:
                "Fill in the blanks with the present continuous form.",
              blocks: [
                {
                  block: [
                    { text: "I" },
                    { blank: "am studying" },
                    { text: "English now." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She" },
                    { blank: "is answering" },
                    { text: "the questions." },
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
                  question: "1. Right now, I ____ English.",
                  options: [
                    { option: "am studying", isCorrect: true },
                    { option: "study", isCorrect: false },
                    { option: "studied", isCorrect: false },
                  ],
                },
                {
                  question: "2. At the moment, she ____ the test.",
                  options: [
                    { option: "is answering", isCorrect: true },
                    { option: "answers", isCorrect: false },
                    { option: "answered", isCorrect: false },
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
                        part: "Now talk about what is happening now.",
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
                text: ["What are you doing now?"],
              },
              {
                text: ["What is your teacher doing now?"],
              },
              {
                text: ["What are your classmates doing?"],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
