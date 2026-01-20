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
          <Paragraph
            blocks={[
              {
                lines: [
                  // We use the present continuous to talk about:
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/.mp3",
                        part: "We use the present continuous to talk about:",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Things happening now (at the moment)
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/.mp3",
                        part: "Things happening now (at the moment)",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "coisas que estão acontecendo agora (neste momento)",
                        type: "portuguese",
                      },
                    ],
                  },
                  // ....
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/meaning/im-studying-english-right-now.mp3",
                        part: "I’m studying English right now. ",
                      },
                      {
                        part: "Eu estou estudando inglês agora.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/meaning/they-are-waiting-for-the-bus.mp3",
                        part: "They are waiting for the bus. ",
                      },
                      {
                        part: "Eles estão esperando o ônibus.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Temporary situations
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/.mp3",
                        part: "Temporary situations",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "situações temporárias (por um período, não para sempre)",
                        type: "portuguese",
                      },
                    ],
                  },
                  // ....
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/meaning/shes-working-from-home-this-week.mp3",
                        part: "She’s working from home this week. ",
                      },
                      {
                        part: "Ela está trabalhando de casa esta semana.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Trends and changing situations
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/.mp3",
                        part: "Trends and changing situations",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "tendências e situações em mudança",
                        type: "portuguese",
                      },
                    ],
                  },
                  // More people are using online classes.
                  {
                    text: [
                      {
                        audio: "/assets/audio/grammar/present-continuous/meaning/more-people-are-using-online-classes.mp3",
                        part: "More people are using online classes. ",
                      },
                      {
                        part: "Mais pessoas estão usando aulas online.",
                        type: "portuguese",
                      },
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
                    example: "I’m doing my homework.",
                    questions: [
                      {
                        question: "Is this about every day or happening now?",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
                            audio: "",
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
          <Radio
            exercise={{
              instruction: "Choose the correct answer.",
              questions: [
                {
                  question: "1. Right now, I ____ English.",
                  options: [
                    { option: "are studying", isCorrect: false },
                    { option: "am studying", isCorrect: true },
                  ],
                },
                {
                  question: "2. At the moment, she ____ the test.",
                  options: [
                    { option: "is answering", isCorrect: true },
                    { option: "are answering", isCorrect: false },
                  ],
                },
                {
                  question: "3. Look! They ____ outside.",
                  options: [
                    { option: "is playing", isCorrect: false },
                    { option: "are playing", isCorrect: true },
                  ],
                },
                {
                  question: "4. Listen! The baby ____.",
                  options: [
                    { option: "is crying", isCorrect: true },
                    { option: "are crying", isCorrect: false },
                  ],
                },
                {
                  question: "5. We ____ dinner right now.",
                  options: [
                    { option: "are having", isCorrect: true },
                    { option: "is having", isCorrect: false },
                  ],
                },
                {
                  question: "6. He ____ on the phone at the moment.",
                  options: [
                    { option: "are talking", isCorrect: false },
                    { option: "is talking", isCorrect: true },
                  ],
                },
                {
                  question: "7. I ____ to music now.",
                  options: [
                    { option: "am listening", isCorrect: true },
                    { option: "are listening", isCorrect: false },
                  ],
                },
                {
                  question: "8. She ____ a message right now.",
                  options: [
                    { option: "are writing", isCorrect: false },
                    { option: "is writing", isCorrect: true },
                  ],
                },
                {
                  question: "9. They ____ for the bus at the moment.",
                  options: [
                    { option: "are waiting", isCorrect: true },
                    { option: "is waiting", isCorrect: false },
                  ],
                },
                {
                  question: "10. The teacher ____ on the board now.",
                  options: [
                    { option: "are writing", isCorrect: false },
                    { option: "is writing", isCorrect: true },
                  ],
                },
              ],
            }}
          />
          <FillInTheBlanks
            exercise={{
              instructions:
                "Fill in the blanks with verb be + present continuous form.",
              blocks: [
                {
                  block: [
                    { text: "1. I" },
                    { blank: ["am studying", "'m studying", "’m studying"] },
                    { text: "(study) English right now." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "2. She" },
                    { blank: ["is answering", "'s answering", "’s answering"] },
                    { text: "the questions." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "3. They" },
                    { blank: ["are playing", "'re playing", "’re playing"] },
                    { text: "outside." },
                  ],
                  lineBreak: true,
                },

                {
                  block: [
                    { text: "4. The baby" },
                    { blank: ["is crying", "'s crying", "’s crying"] },
                    { text: "." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "5. We" },
                    { blank: ["are having", "'re having", "’re having"] },
                    { text: "dinner now." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "6. He" },
                    { blank: ["is taking", "'s taking", "’s taking"] },
                    { text: "on the phone." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "7. I" },
                    { blank: ["am listening", "'m listening", "’m listening"] },
                    { text: "to music." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "8. She" },
                    { blank: ["is writing", "'s writing", "’s writing"] },
                    { text: "a message." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "9. They" },
                    { blank: ["are waiting", "'re waiting", "’re waiting"] },
                    { text: "for the bus." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "10. The teacher" },
                    { blank: ["is writing", "'s writing", "’s writing"] },
                    { text: "on the board." },
                  ],
                  lineBreak: true,
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
