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

        <Section id="meaning" label="Meaning" heading={4}>
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
                        type: "bold",
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
          heading={4}
        >
          {/* Conjugation */}
          <Column
            width="310"
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
                            part: "he ",
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
                            part: "nós trabalhamos / fazemos / estudamos",
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

                  // I do work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/i-do-work-study.mp3",
                            part: "I ",
                          },
                          { part: "do", type: "mark" },
                          " ",
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
                            part: "eu realmente trabalho / estudo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // you do work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/you-do-work-study.mp3",
                            part: "you ",
                          },
                          { part: "do", type: "mark" },
                          " ",
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
                            part: "você realmente trabalha / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // he does work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/he-does-work-study.mp3",
                            part: "he ",
                          },
                          { part: "does", type: "mark" },
                          " ",
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
                            part: "ele realmente trabalha / estuda",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // she does work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/she-does-work-study.mp3",
                            part: "she ",
                          },
                          { part: "does", type: "mark" },
                          " ",
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
                            part: "ela realmente trabalha / estuda",
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
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/it-does-work.mp3",
                            part: "it ",
                          },
                          { part: "does", type: "mark" },
                          " ",
                          { part: "work", type: "bold" },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "(neutro) realmente funciona",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // we do work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/we-do-work-study.mp3",
                            part: "we ",
                          },
                          { part: "do", type: "mark" },
                          " ",
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
                            part: "nós realmente trabalhamos / estudamos",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // they do work / study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/affirmative(emphatic-use)/they-do-work-study.mp3",
                            part: "they ",
                          },
                          { part: "do", type: "mark" },
                          " ",
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
                            part: "eles / elas realmente trabalham / estudam",
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
                          { part: "do not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/i-dont-work-do-study.mp3",
                            part: "I ",
                          },
                          { part: "don’t", type: "mark" },
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
                          { part: "do not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/you-dont-work-do-study.mp3",
                            part: "you ",
                          },
                          { part: "don’t", type: "mark" },
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
                          { part: "does not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/he-doesnt-work-do-study.mp3",
                            part: "he ",
                          },
                          { part: "doesn’t", type: "mark" },
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
                          { part: "does not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/she-doesnt-work-do-study.mp3",
                            part: "she ",
                          },
                          { part: "doesn’t", type: "mark" },
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
                          { part: "does not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/it-doesnt-work-do.mp3",
                            part: "it ",
                          },
                          { part: "doesn't", type: "mark" },
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
                          { part: "do not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/we-dont-work-do-study.mp3",
                            part: "we ",
                          },
                          { part: "don’t", type: "mark" },
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
                          { part: "do not", type: "mark" },
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
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/negative/they-dont-work-do-study.mp3",
                            part: "they ",
                          },
                          { part: "don’t", type: "mark" },
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
                        text: ["..."],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "...",
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
                              "/assets/audio/grammar/simple-present/pronunciation/interrogative/does-it-work-do.mp3",
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
                            part: "auxiliary + not + subject + verb",
                            type: "italic",
                          },
                        ],
                      },
                    ],
                    lineBreak: true,
                  },

                  // ...
                  {
                    block: [
                      {
                        text: ["..."],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "...",
                            type: "portuguese",
                          },
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
                              "/assets/audio/grammar/simple-present/pronunciation/int-neg/doesnt-it-work-do.mp3",
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

          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "Now take a look at how we add -s for he / she / it in the simple present.",
                        type: "bold",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* -s, -es, -ies endings */}
          <Column
            width="200"
            cols={[
              // Column 1
              {
                bgColor: "var(--gray-4)",
                textColor: "white",
                column: "-s",
                blocks: [
                  // eat
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/eat-eats.mp3",
                            part: "eat",
                          },
                          " ➜ ",
                          { part: "eat" },
                          { part: "s", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // live
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/live-lives.mp3",
                            part: "eat",
                            part: "live",
                          },
                          " ➜ ",
                          { part: "live" },
                          { part: "s", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // play
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/play-plays.mp3",
                            part: "play",
                          },
                          " ➜ ",
                          { part: "play" },
                          { part: "s", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // read
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/read-reads.mp3",
                            part: "read",
                          },
                          " ➜ ",
                          { part: "read" },
                          { part: "s", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // work
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/work-works.mp3",
                            part: "work",
                          },
                          " ➜ ",
                          {
                            part: "work",
                          },
                          {
                            part: "s",
                            type: "mark",
                          },
                        ],
                      },
                    ],
                  },
                  // write
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/s/write-writes.mp3",
                            part: "write",
                          },
                          " ➜ ",
                          { part: "write" },
                          { part: "s", type: "mark" },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Column 2
              {
                bgColor: "var(--gray-5)",
                textColor: "white",
                column: "-es",
                blocks: [
                  // do
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/es/do-does.mp3",
                            part: "do",
                          },
                          " ➜ ",
                          {
                            part: "do",
                          },
                          {
                            part: "es",
                            type: "mark",
                          },
                        ],
                      },
                    ],
                  },
                  // fix
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/es/fix-fixes.mp3",
                            part: "fix",
                          },
                          " ➜ ",
                          { part: "fix" },
                          { part: "es", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // go
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/es/go-goes.mp3",
                            part: "go",
                          },
                          " ➜ ",
                          { part: "go" },
                          { part: "es", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // wash
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/es/wash-washes.mp3",
                            part: "wash",
                          },
                          " ➜ ",
                          { part: "wash" },
                          { part: "es", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // watch
                  {
                    block: [
                      {
                        text: [
                          {
                            audio:
                              "/assets/audio/grammar/simple-present/pronunciation/s-endings/es/watch-watches.mp3",
                            part: "watch",
                          },
                          " ➜ ",
                          { part: "watch" },
                          { part: "es", type: "mark" },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Column 3
              {
                bgColor: "var(--gray-6)",
                textColor: "white",
                column: "-ies",
                blocks: [
                  // carry
                  {
                    block: [
                      {
                        text: [
                          { audio: "/assets/audio/", part: "carry" },
                          " ➜ ",
                          { part: "carr" },
                          { part: "ies", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // cry
                  {
                    block: [
                      {
                        text: [
                          { audio: "/assets/audio/", part: "cry" },
                          " ➜ ",
                          { part: "cr" },
                          { part: "ies", type: "mark" },
                        ],
                      },
                    ],
                  },
                  // study
                  {
                    block: [
                      {
                        text: [
                          {
                            audio: "/assets/audio/",
                            part: "study",
                          },
                          " ➜ ",
                          {
                            part: "stud",
                          },
                          {
                            part: "ies",
                            type: "mark",
                          },
                        ],
                      },
                    ],
                  },
                  // try
                  {
                    block: [
                      {
                        text: [
                          { audio: "/assets/audio/", part: "try" },
                          " ➜ ",
                          { part: "tr" },
                          { part: "ies", type: "mark" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="practice" label="Practice" heading={3}>
          <Radio
            exercise={{
              instruction:
                "2. Choose the correct answer. (Pay attention to he / she / it and do / does)",
              questions: [
                {
                  question: "1. Laura ___ in an office.",
                  options: [
                    { option: "work", isCorrect: false },
                    { option: "works", isCorrect: true },
                    { option: "is working", isCorrect: false },
                  ],
                },
                {
                  question: "2. Eric usually ___ at 10 a.m.",
                  options: [
                    { option: "wake up", isCorrect: false },
                    { option: "wakes up", isCorrect: true },
                    { option: "is waking up", isCorrect: false },
                  ],
                },
                {
                  question: "3. ___ Eric study from home?",
                  options: [
                    { option: "Do", isCorrect: false },
                    { option: "Does", isCorrect: true },
                    { option: "Is", isCorrect: false },
                  ],
                },
                {
                  question:
                    "4. She ___ watch movies in the morning. (negative)",
                  options: [
                    { option: "doesn't", isCorrect: true },
                    { option: "don't", isCorrect: false },
                    { option: "isn't", isCorrect: false },
                  ],
                },
                {
                  question: "5. They ___ work on weekends.",
                  options: [
                    { option: "doesn't", isCorrect: false },
                    { option: "don't", isCorrect: true },
                    { option: "aren't", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions:
                "1. Complete the sentences. Use the correct form of the verb in brackets. (Focus on he / she / it and -s)",
              blocks: [
                {
                  block: [
                    { text: "Laura usually (wake up)" },
                    { blank: "wakes up" },
                    { text: " at 7 a.m." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "She (work)" },
                    { blank: "works" },
                    { text: " in an office." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "Eric (study)" },
                    { blank: "studies" },
                    { text: " from home." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "He (watch)" },
                    { blank: "watches" },
                    { text: " movies in the evening." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "They (work)" },
                    { blank: "work" },
                    { text: " during the week." },
                  ],
                  lineBreak: true,
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
