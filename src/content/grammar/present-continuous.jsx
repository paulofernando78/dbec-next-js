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
                    img: "/assets/img/grammar/present-continuous/introduction/mr-smith-is-teaching.png",
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
                    img: "/assets/img/grammar/present-continuous/introduction/students-are-looking.png",
                    alt: "students are writting",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "Students are looking at pictures in a book.",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/grammar/present-continuous/introduction/book-beach.png",
                    alt: "people on the beach",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "People are wearing swimsuits. Some are swimming.",
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/grammar/present-continuous/introduction/book-snow.png",
                    alt: "people on the snow",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                      },
                      "People are wearing warm clothes. It is snowing.",
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
                  question: "1. Mr. Smith is _____ .",
                  options: [
                    { option: "listening.", isCorrect: false },
                    { option: "teaching.", isCorrect: true },
                    { option: "writing.", isCorrect: false },
                  ],
                },
                {
                  question: "2. Students are _____ .",
                  options: [
                    { option: "writing", isCorrect: false },
                    { option: "teaching", isCorrect: false },
                    { option: "looking at pictures", isCorrect: true },
                  ],
                },
                {
                  question: "3. Students are _____ .",
                  options: [
                    { option: "listening", isCorrect: false },
                    { option: "speaking", isCorrect: true },
                    { option: "writing", isCorrect: false },
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
                    text: ["What are you doing now?"],
                  },
                  {
                    text: ["What is your (someone) doing now?"],
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
                speaker: "Mr.Smith:",
                text: [
                  "Good evening everyone. How are you doing? Ready for today’s class?",
                ],
              },
              {
                speaker: "Eric:",
                text: ["Yes, we are."],
              },
              {
                speaker: "Laura:",
                text: ["Hey Eric. How’s it going?"],
              },
              {
                speaker: "Eric:",
                text: ["Pretty good. How about you?"],
              },
              {
                speaker: "",
                text: [
                  {
                    part: "Mr. Smith continues speaking...",
                    type: "italic",
                  },
                ],
              },
              {
                speaker: "Mr.Smith:",
                text: [
                  "Please, open your book on page 12. What can you see on picure 1?",
                ],
              },
              {
                speaker: "Laura:",
                text: [
                  "On Picture 1, people are wearing swimsuit because the’re on the beach. Some people are swimming in the sea.",
                ],
              },
              {
                speaker: "Mr.Smith:",
                text: ["How about picture 2?"],
              },
              {
                speaker: "Eric:",
                text: ["On picture 2, people are wearing clothes for cold because it‘s winter, and because it’s snowing."],
              },
              {
                speaker: "Eric:",
                text: ["Now stand up and talk to your partner and tell him what you’re wearing."],
              },
              {
                speaker: "",
                text: [
                  {
                    part: "Mr. Smith continues teaching...",
                    type: "italic",
                  },
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
