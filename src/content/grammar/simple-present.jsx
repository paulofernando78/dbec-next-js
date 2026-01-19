import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
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
          <Radio
            exercise={{
              instruction: "Answer the questions. / Choose the best response.",
              questions: [
                {
                  question: "1. What time does Laura usually wake up?",
                  options: [
                    { option: "At 9 a.m.", isCorrect: false },
                    { option: "At 10 a.m.", isCorrect: false },
                    { option: "At 7 a.m.", isCorrect: true },
                  ],
                },
                {
                  question: "2. Where does Laura work?",
                  options: [
                    { option: "In an office", isCorrect: true },
                    { option: "From home", isCorrect: false },
                    { option: "At a school", isCorrect: false },
                  ],
                },
                {
                  question: "3. What does Eric usually do in the evening?",
                  options: [
                    { option: "He studies at a library", isCorrect: false },
                    { option: "He watches movies", isCorrect: true },
                    { option: "He goes to work", isCorrect: false },
                  ],
                },
                {
                  question: "4. Where does Eric study?",
                  options: [
                    { option: "At the gym", isCorrect: false },
                    { option: "In an office", isCorrect: false },
                    { option: "From home", isCorrect: true },
                  ],
                },
                {
                  question: "5. Who usually wakes up at 10 a.m.?",
                  options: [
                    { option: "Eric", isCorrect: true },
                    { option: "Laura", isCorrect: false },
                    { option: "Both Laura and Eric", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>

        <Section id="presentation" label="Presentation" heading={3}>
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

        <Section id="meaning" label="Meaning" heading={3}>
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

        <Section
          id="pronunciation-form"
          label="Pronunciation + Form"
          heading={3}
        >
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
                            part: "subject + auxiliary + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // I do work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/i-do-work-do-study.mp3",
                            part: "I ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eu realmente trabalho / faço / estudo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // you do work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/you-do-work-do-study.mp3",
                            part: "you ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você realmente trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he does work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/he-does-work-do-study.mp3",
                            part: "he ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele realmente trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she does work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/she-does-work-do-study.mp3",
                            part: "she ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela realmente trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // it does work / do
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/it-does-work-do-study.mp3",
                            part: "it ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work / do", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) realmente funciona / faz",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // we do work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/we-do-work-do-study.mp3",
                            part: "we ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós realmente trabalhamos / fazemos / estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // they do work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/emphatic/they-do-work-do-study.mp3",
                            part: "they ",
                          },
                          { part: "do", type: "mark" },
                          " ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas realmente trabalham / fazem / estudam",
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
                            part: "subject + auxiliary + not + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // I do not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/i-do-not-work-do-study.mp3",
                            part: "I ",
                          },
                          { part: "do", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eu não trabalho / faço / estudo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // you do not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-do-not-work-do-study.mp3",
                            part: "you ",
                          },
                          { part: "do", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você não trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he does not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/he-does-not-work-do-study.mp3",
                            part: "he ",
                          },
                          { part: "does", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele não trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she does not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/she-does-not-work-do-study.mp3",
                            part: "she ",
                          },
                          { part: "does", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela não trabalha / faz / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // it does not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/it-does-not-work-do.mp3",
                            part: "it ",
                          },
                          { part: "does", type: "mark" },
                          " not ",
                          { part: "work / do", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) não funciona / faz",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // we do not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/we-do-not-work-do-study.mp3",
                            part: "we ",
                          },
                          { part: "do", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós não trabalhamos / fazemos / estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // they do not work / do / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/they-do-not-work-do-study.mp3",
                            part: "they ",
                          },
                          { part: "do", type: "mark" },
                          " not ",
                          { part: "work / do / study", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas não trabalham / fazem / estudam",
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
                            part: "auxiliary + subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  // Do I work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-i-work-do-study.mp3",
                          },
                          { part: "Do", type: "mark" },
                          " I ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eu trabalho / faço / estudo?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Do you work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-you-work-do-study.mp3",
                          },
                          { part: "Do", type: "mark" },
                          " you ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Does he work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-he-work-do-study.mp3",
                          },
                          { part: "Does", type: "mark" },
                          " he ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Does she work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-she-work-do-study.mp3",
                          },
                          { part: "Does", type: "mark" },
                          " she ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Does it work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-it-work-do-study.mp3",
                          },
                          { part: "Does", type: "mark" },
                          " it ",
                          { part: "work / do?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) funciona / faz?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Do we work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-we-work-do-study.mp3",
                          },
                          { part: "Do", type: "mark" },
                          " we ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós trabalhamos / fazemos / estudamos?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Do they work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/do-they-work-do-study.mp3",
                          },
                          { part: "Do", type: "mark" },
                          " they ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas trabalham / fazem / estudam?",
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
                            part: "do/does + not + subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Don’t I work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-i-work-do-study.mp3",
                          },
                          { part: "Don’t", type: "mark" },
                          " I ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          { part: "eu não trabalho / faço / estudo?", type: "portuguese" },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Don’t you work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-you-work-do-study.mp3",
                          },
                          { part: "Don’t", type: "mark" },
                          " you ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "você não trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Doesn’t he work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-he-work-do-study.mp3",
                          },
                          { part: "Doesn’t", type: "mark" },
                          " he ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ele não trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Doesn’t she work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-she-work-do-study.mp3",
                          },
                          { part: "Doesn’t", type: "mark" },
                          " she ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ela não trabalha / faz / estuda?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Doesn’t it work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-it-work-do-study.mp3",
                          },
                          { part: "Doesn’t", type: "mark" },
                          " it ",
                          { part: "work / do?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) não funciona / faz?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Don’t we work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-we-work-do-study.mp3",
                          },
                          { part: "Don’t", type: "mark" },
                          " we ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "nós não trabalhamos / fazemos / estudamos?",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // Don’t they work / do / study?
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/dont-they-work-do-study.mp3",
                          },
                          { part: "Don’t", type: "mark" },
                          " they ",
                          { part: "work / do / study?", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "eles / elas não trabalham / fazem / estudam?",
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

        <Section id="production" label="Production" heading={3}>
          <InlineText
            audio="/assets/audio/"
            text={["Talk about your daily routine."]}
          />
        </Section>
      </div>
    </>
  );
}
