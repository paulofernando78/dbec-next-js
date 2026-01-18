import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { CardText } from "@/components/molecules/CardText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Column } from "@/components/molecules/Column";
import { Checking } from "@/components/molecules/Checking";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function PresentContinuous() {
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
                        audio:
                          "/assets/audio/grammar/present-continuous/introduction/mr-smith-is-teaching.mp3",
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
                    alt: "students are looking at pictures in a book",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/present-continuous/introduction/students-are-looking-at-a-picture-in-a-book.mp3",
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
                        audio:
                          "/assets/audio/grammar/present-continuous/introduction/people-are-wearing-swimsuits.mp3",
                      },
                      "People are wearing swimsuits. Some people are swimming.",
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
                        audio:
                          "/assets/audio/grammar/present-continuous/introduction/people-are-wearing-warm-clothes.mp3",
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
                        audio:
                          "/assets/audio/grammar/present-continuous/introduction/students-are-speaking-to-one-another.mp3",
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
              audio: "/assets/audio/general/choose-the-right-answer.mp3",
              instruction: "Choose the right answer.",
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
        </Section>

        <Section id="presentation" label="Presentation" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/listen-to-the-dialogue.mp3",
                        part: "Listen to the dialogue.",
                        type: "bold",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <Dialogue
            audioPlayer="/assets/img/grammar/present-continuous/presentation/dialogue.mp3"
            lines={[
              {
                speaker: "Mr. Smith:",
                text: [
                  "Good evening everyone. How are you doing? Ready for today’s class?",
                ],
              },
              {
                speaker: "Eric:",
                text: ["Yes, Mr. Smith."],
              },
              {
                speaker: "",
                text: [
                  {
                    part: "Laura asks Eric how he is...",
                    type: "italic",
                  },
                ],
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
                speaker: "Mr. Smith:",
                text: [
                  "Please, open your book on page 12. What can you see in picture 1?",
                ],
              },
              {
                speaker: "Laura:",
                text: [
                  "In picture 1, people are wearing swimsuits because they’re on the beach. Some people are swimming in the ocean.",
                ],
              },
              {
                speaker: "Mr. Smith:",
                text: ["How about picture 2?"],
              },
              {
                speaker: "Eric:",
                text: [
                  "In picture 2, people are wearing warm clothes because it’s winter and it’s snowing.",
                ],
              },
              {
                speaker: "Mr. Smith:",
                text: [
                  "Now stand up. Talk to your partner and tell them what you’re wearing.",
                ],
              },
              {
                speaker: "",
                text: [
                  {
                    part: "Students practice speaking...",
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
                    example: "I’m doing my homework.",
                    questions: [
                      {
                        question: "Is this happening now?",
                      },
                      {
                        question: "Is this about every day or just now?",
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
          <Column
            length="4"
            width="370"
            cols={[
              // Affirmative
              {
                bgColor: "var(--green-6)",
                column: "Affirmative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "subject + be + verb + ing",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // I’m working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/i-am-working-doing-studying.mp3",
                            part: "I’m ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "estou trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // you’re working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/youre-working-doing-studying.mp3",
                            part: "you’re ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he’re working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/hes-working-doing-studying.mp3",
                            part: "he’s ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she’s working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/shes-working-doing-studying.mp3",
                            part: "she’s ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // it’s working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/its-working-doing.mp3",
                            part: "it’s ",
                          },
                          {
                            part: "working / doing",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) está funcionando / fazendo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // we’re working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/were-working-doing-studying.mp3",
                            part: "we’re ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós estamos trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // they’re working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/affirmative/theyre-working-doing-studying.mp3",
                            part: "they’re ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas estão trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              },

              // Negative
              {
                bgColor: "var(--red-5)",
                column: "Negative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "subject + am / is / are + not + verb-ing",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // I’m not working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/im-not-working-doing-studying.mp3",
                            part: "I’m not ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eu não estou trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // you aren’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/you-arent-working-doing-studying.mp3",
                            part: "you aren’t ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você não está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he isn’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/he-isnt-working-doing-studying.mp3",
                            part: "he isn’t ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele não está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she isn’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/she-isnt-working-doing-studying.mp3",
                            part: "she isn’t ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela não está trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // it isn’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/it-isnt-working-doing.mp3",
                            part: "it isn’t ",
                          },
                          {
                            part: "working / doing",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) não está funcionando / fazendo ",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // we aren’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/we-arent-working-doing-studying.mp3",
                            part: "we aren’t ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós não estamos trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // they aren’t working / doing / studying
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/negative/they-arent-working-doing-studying.mp3",
                            part: "they aren’t ",
                          },
                          {
                            part: "working / doing / studying",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas não estão trabalhando / fazendo / estudando",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              },

              // Interrogative
              {
                bgColor: "var(--yellow-5)",
                column: "Interrogative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "am / is / are + subject + verb-ing",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Am I working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/am-i-working-doing-studying.mp3",
                            part: "Am I ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eu estou trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Are you working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/are-you-working-doing-studying.mp3",
                            part: "Are you ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Is he working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/is-he-working-doing-studying.mp3",
                            part: "Is he ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Is she working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/is-she-working-doing-studying.mp3",
                            part: "Is she ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Is it working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/is-it-working-doing.mp3",
                            part: "Is it ",
                          },
                          {
                            part: "working / doing?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) está funcionando / fazendo?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Are we working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/are-we-working-doing-studying.mp3",
                            part: "Are we ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós estamos trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Are they working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/are-they-working-doing-studying.mp3",
                            part: "Are they ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas estão trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              },

              // Interrogative Negative (Int. Neg.)
              {
                bgColor: "var(--blue-5)",
                column: "Interrogative Negative",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "aren’t / isn’t + subject + verb-ing",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Aren’t I working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/arent-i-working-doing-studying.mp3",
                            part: "Aren’t I ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "não estou trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Aren’t you working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/arent-you-working-doing-studying.mp3",
                            part: "Aren’t you ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você não está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Isn’t he working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/isnt-he-working-doing-studying.mp3",
                            part: "Isn’t he ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele não está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Isn’t she working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/isnt-she-working-doing-studying.mp3",
                            part: "Isn’t she ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela não está trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Isn’t it working / doing?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/isnt-it-working-doing.mp3",
                            part: "Isn’t it ",
                          },
                          {
                            part: "working / doing?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) não está funcionando / fazendo?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Aren’t we working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/arent-we-working-doing-studying.mp3",
                            part: "Aren’t we ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós não estamos trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Aren’t they working / doing / studying?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/present-continuous/pronunciation/interrogative/arent-they-working-doing-studying.mp3",
                            part: "Aren’t they ",
                          },
                          {
                            part: "working / doing / studying?",
                            type: "bold",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas não estão trabalhando / fazendo / estudando?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
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
