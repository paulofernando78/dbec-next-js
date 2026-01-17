import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { InlineText } from "@/components/molecules/InlineText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { CardText } from "@/components/molecules/CardText";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { Column } from "@/components/molecules/Column";
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
              // Laura usually wakes up at 7 a.m.
              {
                imgs: [
                  {
                    img: "/assets/img/general/woman-wake-up-seven.png",
                    alt: "a woman waking up",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/laura-wakes-up-at-seven.mp3",
                      },
                      "Laura usually wakes up at 7 a.m.",
                    ],
                  },
                ],
              },
              // Laura works in an office during the week.
              {
                imgs: [
                  {
                    img: "/assets/img/general/woman-work-office.png",
                    alt: "a woman working in an office",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/laura-works-in-an-office-during-the-week.mp3",
                      },
                      "Laura works in an office during the week.",
                    ],
                  },
                ],
              },
              // Laura has dinner around 10 p.m. before bed.
              {
                imgs: [
                  {
                    img: "/assets/img/general/woman-eat-dinner.png",
                    alt: "a woman having dinner",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/laura-has-dinner-around-ten-before-bed.mp3",
                      },
                      "Laura has dinner around 10 p.m. before bed.",
                    ],
                  },
                ],
              },
              // Eric doesn’t have to wake up very early. He usually wakes up at 10 a.m.
              {
                imgs: [
                  {
                    img: "/assets/img/general/man-wake-up-ten.png",
                    alt: "a man waking up",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/eric-doesnt-wake-up-very-early.mp3",
                        part: "Eric doesn’t wake up very early. He usually wakes up at 10.",
                      },
                    ],
                  },
                ],
              },
              // Eric has online classes. He studies from home.
              {
                imgs: [
                  {
                    img: "/assets/img/general/man-study-home.png",
                    alt: "a man studying from home",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/eric-takes-online-classes.mp3",
                        part: "Eric takes online classes. He studies from home.",
                      },
                    ],
                  },
                ],
              },
              // Eric watches movies in the evening before bed.
              {
                imgs: [
                  {
                    img: "/assets/img/general/man-watch-tv-evening.png",
                    alt: "a man watching tv",
                  },
                ],
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/introduction/sometimes-eric-watches-movies-in-the-evening.mp3",
                        part: "Sometimes Eric watches movies in the evening.",
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
                lines: [
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/now-answer-these-questions.mp3",
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
            audioPlayer="/assets/audio/grammar/simple-present/presentation/dialogue.mp3"
            lines={[
              {
                speaker: "Laura:",
                text: ["Hey, Eric! How are you?"],
              },
              {
                speaker: "Eric:",
                text: [
                  "I'm okay, just a little tired. I usually watch movies in the evening, but I have to wake up early during the week, you know.",
                ],
              },
              {
                speaker: "Laura:",
                text: ["Oh, I see. What do you do during the day?"],
              },
              {
                speaker: "Eric:",
                text: [
                  "I study programming. I have online classes, so I study from home.",
                ],
              },
              {
                speaker: "Laura:",
                text: ["Awesome! Do you like it?"],
              },
              {
                speaker: "Eric:",
                text: [
                  "Yeah, I like it a lot. What about you? Do you work or study?",
                ],
              },
              {
                speaker: "Laura:",
                text: [
                  "Actually, I do. I work in finance. I usually wake up at 7 and start work at 9.",
                ],
              },
              {
                speaker: "Eric:",
                text: [
                  "Wow, that's early! Do you usually eat anything before bed?",
                ],
              },
              {
                speaker: "Laura:",
                text: ["I usually have dinner around 10."],
              },
              {
                speaker: "Eric:",
                text: ["Sounds like a busy day! See you later."],
              },
              {
                speaker: "Laura:",
                text: ["See you!"],
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
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/use.mp3",
                        part: "We use the simple present to talk about:",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/daily-routines.mp3",
                        part: "daily routines",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/i-usually-wake-up-at-seven.mp3",
                        part: "I usually wake up at 7.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/i-go-for-walks-in-the-morning.mp3",
                        part: "I go for a walk in the morning.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/after-i-have-breakfast-i-go-to-work.mp3",
                        part: "After I eat breakfast and go to work.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/sometimes-i-go-to-bed-at-night.mp3",
                        part: "Sometimes I go to bed around 9.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/things-that-are-usually-true.mp3",
                        part: "things that are usually true",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/she-works-in-an-office.mp3",
                        part: "She works in an office.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/i-work-from-home.mp3",
                        part: "I work from home.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/grammar/simple-present/meaning/he-watches-movies-in-the-evening.mp3",
                        part: "He watches movies in the evening.",
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
                    example: "I wake up at 7 every day.",
                    questions: [
                      {
                        question: "Is this about the past?",
                        answer: "No",
                      },
                      {
                        question: "Is this about now or in general?",
                        answer: "In general",
                      },
                      {
                        question: "Is this a routine?",
                        answer: "Yes",
                      },
                    ],
                  },
                ],
              },
              {
                block: [
                  {
                    example: "She works in an office.",
                    questions: [
                      {
                        question: "Is this true only today?",
                        answer: "No",
                      },
                      {
                        question: "Is this usually true?",
                        answer: "Yes",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="Pronunciation + Form" heading={3}>
          <Column
            length="4"
            width="300"
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
                            part: "subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // I work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/i-work-do-study.mp3",
                            part: "I ",
                          },
                          {
                            part: "work / do / study",
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
                            part: "eu trabalho / faço / estudo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // you work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/you-work-do-study.mp3",
                            part: "you ",
                          },
                          { part: "work / do / study ", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [{ part: "você trabalha", type: "portuguese" }],
                      },
                    ],
                    lineBreak: true,
                  },
                  // he works / does / studies
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/he-works-does-studies.mp3",
                            part: "she ",
                          },
                          { part: "work", type: "bold" },
                          { part: "s", type: "mark" },
                          { part: " / ", type: "bold" },
                          { part: "do", type: "bold" },
                          { part: "es", type: "mark" },
                          { part: " / ", type: "bold" },
                          { part: "stud", type: "bold" },
                          { part: "ies", type: "mark" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: " ele trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // she works / does / studies
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/she-works-does-studies.mp3",
                            part: "she ",
                          },
                          { part: "work", type: "bold" },
                          { part: "s", type: "mark" },
                          { part: " / ", type: "bold" },
                          { part: "do", type: "bold" },
                          { part: "es", type: "mark" },
                          { part: " / ", type: "bold" },
                          { part: "stud", type: "bold" },
                          { part: "ies", type: "mark" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: " ela trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // it works / does
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/it-works-does.mp3",
                            part: "it ",
                          },
                          { part: "work", type: "bold" },
                          { part: "s", type: "mark" },
                          { part: " / ", type: "bold" },
                          { part: "do", type: "bold" },
                          { part: "es", type: "mark" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: " (algo) funciona / faz",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // we work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/we-work-do-study.mp3",
                            part: "we ",
                          },
                          { part: "work / do / study ", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nóes trabalhamos / fazemos / estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // you work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/you-work-do-study.mp3",
                            part: "you ",
                          },
                          { part: "work / do / study ", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "vocês trabalham / fazem / estudam",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // they work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative/they-work-do-study.mp3",
                            part: "they ",
                          },
                          {
                            part: "work / do / study",
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
                            part: "eles trabalham / fazem / estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              },

              // Affirmative (Emphatic Use)
              {
                bgColor: "var(--green-5)",
                column: "Affirmative (Emphatic Use)",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "subject + auxiliry + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // I do work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/i-do-work.mp3",
                            part: "I ",
                          },
                          { part: "do", type: "mark" },
                          { part: " " },
                          { part: "work / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: " eu realmente trabalho",
                            type: "portuguese",
                          },
                        ],
                      },
                    ], lineBreak: true,
                  },

                  // you
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/you-do-work.mp3",
                            part: "you ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "work", type: "bold" },
                          " ",
                          {
                            part: "você realmente trabalha",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/you-do-study.mp3",
                            part: "you ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "study", type: "bold" },
                          " ",
                          { part: "você realmente estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/he-does-work.mp3",
                            part: "he ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work", type: "bold" },
                          " ",
                          {
                            part: "ele realmente trabalha",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/he-does-study.mp3",
                            part: "he ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "study", type: "bold" },
                          " ",
                          { part: "ele realmente estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/she-does-work.mp3",
                            part: "she ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work", type: "bold" },
                          " ",
                          {
                            part: "ela realmente trabalha",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/she-does-study.mp3",
                            part: "she ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "study", type: "bold" },
                          " ",
                          { part: "ela realmente estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // it
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/it-does-work.mp3",
                            part: "it ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work", type: "bold" },
                          " ",
                          {
                            part: "(neutro) realmente funciona",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/it-does-study.mp3",
                            part: "it ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "study", type: "bold" },
                          " ",
                          {
                            part: "(neutro) realmente estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // we
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/we-do-work.mp3",
                            part: "we ",
                          },
                          { part: "do work ", type: "bold" },
                          {
                            part: "nós realmente trabalhamos",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/we-do-study.mp3",
                            part: "we ",
                          },
                          { part: "do study ", type: "bold" },
                          {
                            part: "nós realmente estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // they
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/they-do-work.mp3",
                            part: "they ",
                          },
                          { part: "do work ", type: "bold" },
                          {
                            part: "eles/elas realmente trabalham",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/they-do-study.mp3",
                            part: "they ",
                          },
                          { part: "do study ", type: "bold" },
                          {
                            part: "eles/elas realmente estudam",
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
                            part: "subject + auxiliry not + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // I do not work
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/i-do-not-work.mp3",
                            part: "I ",
                          },
                          { part: "do not ", type: "mark" },
                          " ",
                          { part: "work ", type: "bold" },
                          { part: "eu não trabalho", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  // I do not do
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/i-do-not-do.mp3",
                            part: "I ",
                          },
                          { part: "do not do ", type: "bold" },
                          { part: "eu não faço", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  // I do not study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/i-do-not-study.mp3",
                            part: "I ",
                          },
                          { part: "do not study ", type: "bold" },
                          { part: "eu não estudo", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // you do not work
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-work.mp3",
                            part: "you ",
                          },
                          { part: "do not work ", type: "bold" },
                          { part: "você não trabalha", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-do.mp3",
                            part: "you ",
                          },
                          { part: "do not do ", type: "bold" },
                          { part: "você não faz", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-study.mp3",
                            part: "you ",
                          },
                          { part: "do not study ", type: "bold" },
                          { part: "você não estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/he-does-not-work.mp3",
                            part: "he ",
                          },
                          { part: "does not work ", type: "bold" },
                          { part: "ele não trabalha", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/he-does-not-do.mp3",
                            part: "he ",
                          },
                          { part: "does not do ", type: "bold" },
                          { part: "ele não faz", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/he-does-not-study.mp3",
                            part: "he ",
                          },
                          { part: "does not study ", type: "bold" },
                          { part: "ele não estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/she-does-not-work.mp3",
                            part: "she ",
                          },
                          { part: "does not work ", type: "bold" },
                          { part: "ela não trabalha", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/she-does-not-do.mp3",
                            part: "she ",
                          },
                          { part: "does not do ", type: "bold" },
                          { part: "ela não faz", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/she-does-not-study.mp3",
                            part: "she ",
                          },
                          { part: "does not study ", type: "bold" },
                          { part: "ela não estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/it-does-not-work.mp3",
                            part: "it ",
                          },
                          { part: "does not work ", type: "bold" },
                          { part: "(neutro) não funciona", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/it-does-not-do.mp3",
                            part: "it ",
                          },
                          { part: "does not do ", type: "bold" },
                          { part: "(neutro) não faz", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/it-does-not-study.mp3",
                            part: "it ",
                          },
                          { part: "does not study ", type: "bold" },
                          { part: "(neutro) não estuda", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/we-do-not-work.mp3",
                            part: "we ",
                          },
                          { part: "do not work ", type: "bold" },
                          { part: "nós não trabalhamos", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/we-do-not-do.mp3",
                            part: "we ",
                          },
                          { part: "do not do ", type: "bold" },
                          { part: "nós não fazemos", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/we-do-not-study.mp3",
                            part: "we ",
                          },
                          { part: "do not study ", type: "bold" },
                          { part: "nós não estudamos", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-work.mp3",
                            part: "you ",
                          },
                          { part: "do not work ", type: "bold" },
                          { part: "vocês não trabalham", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-do-plural.mp3",
                            part: "you ",
                          },
                          { part: "do not do ", type: "bold" },
                          { part: "vocês não fazem", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-study-plural.mp3",
                            part: "you ",
                          },
                          { part: "do not study ", type: "bold" },
                          { part: "vocês não estudam", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/they-do-not-work.mp3",
                            part: "they ",
                          },
                          { part: "do not work ", type: "bold" },
                          {
                            part: "eles/elas não trabalham",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/they-do-not-do.mp3",
                            part: "they ",
                          },
                          { part: "do not do ", type: "bold" },
                          { part: "eles/elas não fazem", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/they-do-not-study.mp3",
                            part: "they ",
                          },
                          { part: "do not study ", type: "bold" },
                          { part: "eles/elas não estudam", type: "portuguese" },
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
                            part: "do/does + subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-i-work.mp3",
                            part: "Do I work?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu trabalho?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-i-do.mp3",
                            part: "Do I do?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu faço?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-i-study.mp3",
                            part: "Do I study?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu estudo?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-work.mp3",
                            part: "Do you work?",
                            type: "bold",
                          },
                          " ",
                          { part: "você trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-do.mp3",
                            part: "Do you do?",
                            type: "bold",
                          },
                          " ",
                          { part: "você faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-study.mp3",
                            part: "Do you study?",
                            type: "bold",
                          },
                          " ",
                          { part: "você estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-he-work.mp3",
                            part: "Does he work?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-he-do.mp3",
                            part: "Does he do?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-he-study.mp3",
                            part: "Does he study?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-she-work.mp3",
                            part: "Does she work?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-she-do.mp3",
                            part: "Does she do?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-she-study.mp3",
                            part: "Does she study?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-it-work.mp3",
                            part: "Does it work?",
                            type: "bold",
                          },
                          " ",
                          { part: "(neutro) funciona?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-it-do.mp3",
                            part: "Does it do?",
                            type: "bold",
                          },
                          " ",
                          { part: "(neutro) faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-it-study.mp3",
                            part: "Does it study?",
                            type: "bold",
                          },
                          " ",
                          { part: "(neutro) estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-we-work.mp3",
                            part: "Do we work?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós trabalhamos?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-we-do.mp3",
                            part: "Do we do?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós fazemos?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-we-study.mp3",
                            part: "Do we study?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós estudamos?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-work.mp3",
                            part: "Do you work?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês trabalham?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-do-plural.mp3",
                            part: "Do you do?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês fazem?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-study-plural.mp3",
                            part: "Do you study?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês estudam?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-they-work.mp3",
                            part: "Do they work?",
                            type: "bold",
                          },
                          " ",
                          { part: "eles/elas trabalham?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-they-do.mp3",
                            part: "Do they do?",
                            type: "bold",
                          },
                          " ",
                          { part: "eles/elas fazem?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-they-study.mp3",
                            part: "Do they study?",
                            type: "bold",
                          },
                          " ",
                          { part: "eles/elas estudam?", type: "portuguese" },
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
                            part: "do/does + not + subject",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-i-work.mp3",
                            part: "Don’t I work?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu não trabalho?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-i-do.mp3",
                            part: "Don’t I do?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu não faço?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-i-study.mp3",
                            part: "Don’t I study?",
                            type: "bold",
                          },
                          " ",
                          { part: "eu não estudo?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-work.mp3",
                            part: "Don’t you work?",
                            type: "bold",
                          },
                          " ",
                          { part: "você não trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-do.mp3",
                            part: "Don’t you do?",
                            type: "bold",
                          },
                          " ",
                          { part: "você não faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-study.mp3",
                            part: "Don’t you study?",
                            type: "bold",
                          },
                          " ",
                          { part: "você não estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-he-work.mp3",
                            part: "Doesn’t he work?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele não trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-he-do.mp3",
                            part: "Doesn’t he do?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele não faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-he-study.mp3",
                            part: "Doesn’t he study?",
                            type: "bold",
                          },
                          " ",
                          { part: "ele não estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-she-work.mp3",
                            part: "Doesn’t she work?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela não trabalha?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-she-do.mp3",
                            part: "Doesn’t she do?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela não faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-she-study.mp3",
                            part: "Doesn’t she study?",
                            type: "bold",
                          },
                          " ",
                          { part: "ela não estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-it-work.mp3",
                            part: "Doesn’t it work?",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "(neutro) não funciona?",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-it-do.mp3",
                            part: "Doesn’t it do?",
                            type: "bold",
                          },
                          " ",
                          { part: "(neutro) não faz?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-it-study.mp3",
                            part: "Doesn’t it study?",
                            type: "bold",
                          },
                          " ",
                          { part: "(neutro) não estuda?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-we-work.mp3",
                            part: "Don’t we work?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós não trabalhamos?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-we-do.mp3",
                            part: "Don’t we do?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós não fazemos?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-we-study.mp3",
                            part: "Don’t we study?",
                            type: "bold",
                          },
                          " ",
                          { part: "nós não estudamos?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-work.mp3",
                            part: "Don’t you work?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês não trabalham?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-do-plural.mp3",
                            part: "Don’t you do?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês não fazem?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-study-plural.mp3",
                            part: "Don’t you study?",
                            type: "bold",
                          },
                          " ",
                          { part: "vocês não estudam?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-they-work.mp3",
                            part: "Don’t they work?",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "eles/elas não trabalham?",
                            type: "portuguese",
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-they-do.mp3",
                            part: "Don’t they do?",
                            type: "bold",
                          },
                          " ",
                          { part: "eles/elas não fazem?", type: "portuguese" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-they-study.mp3",
                            part: "Don’t they study?",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "eles/elas não estudam?",
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
