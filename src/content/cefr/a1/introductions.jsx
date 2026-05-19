import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LessonObjective } from "@/components/molecules/LessonObjective";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Ribbon } from "@/components/atoms/Ribbon";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { MediaWrapper } from "@/components/molecules/MediaWrapper";
import { Card } from "@/components/atoms/Card";
import { DialogueLesson } from "@/components/molecules/DialogueLesson";
import { TheAlphabet } from "@/components/lessons/TheAlphabet";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { Guess } from "@/components/molecules/Exercises/Guess";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  icon,
  audio,
  bold,
  italic,
  underline,
  portuguese,
} from "@/helpers/content";

import { phrases, questions } from "./introductions/introduction";
import { dialogue } from "./introductions/presentation";
import {
  columnCommonGreetings,
  columnCommonQuestions,
} from "./introductions/languageFocus";
import { radioQuestions } from "./introductions/practice";
import {} from "./introductions/production";

export const metadata = {
  title: "A1 Beginner | Introductions",
  description: "Basic greetings and personal introductions.",
};

export default function Introductions() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Introductions"
        description="What's your name? I’m Laura. Nice to meet you."
      />

      <div className="line-break">
        <LessonObjective>
By the end of this class, students will be able to greet someone, say their name, ask for basic personal information, and introduce themselves clearly.
        </LessonObjective>

        <PageSections>
          <Section id="introduction" heading={3}>
            <MediaWrapper
              mediaPosition="top"
              imgSrc="/assets/img/cefr/a1/introductions/introduction/laura-eric-mr-smith.png"
              imgAlt="Two students talking at school."
              ratio="16-9"
              instruction="Look at the picture and listen to the sentences."
              lines={phrases}
              tagAs="p"
            />
            <LineBreak />
            <Radio exercise={questions} />
          </Section>

          <Section id="presentation" heading={3}>
            <LineBreak />
            <DialogueLesson
              imgSrc="/assets/img/cefr/a1/introductions/presentation/laura-eric-introduction.png"
              imgAlt="Two students talking at school."
              description="Laura and Eric are shaking hands."
              audioPlayer="/assets/audio/cefr/a1/introductions/presentation.mp3"
              lines={dialogue.map((dialogue) => ({
                speaker: dialogue.speaker,
                line: [
                  ...content({
                    parts: [dialogue.text],
                  }),
                ],
              }))}
            />
          </Section>

          <Section id="language-focus" heading={3}>
            <LineBreak />
            <Ribbon label="Common Greetings" bgColor="var(--slate-7)" />
            <LineBreak />
            <Column
              width="260"
              cols={[
                // Saying hi!
                {
                  bgColor: "var(--gray-5)",
                  textColor: "white",
                  column: "Saying hi!",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/hi.mp3",
                                ),
                                "Hi!",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/hello.mp3",
                                ),
                                "Hello!",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/hey.mp3",
                                ),
                                "Hey!",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Common Questions
                {
                  bgColor: "var(--gray-5)",
                  textColor: "white",
                  column: "Common Questions",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/how-are-you.mp3",
                                ),

                                "How are you?",

                                portuguese("Como você está?"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/how-are-you-doing.mp3",
                                ),

                                "How are you doing?",

                                portuguese("Como vai você?"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/hows-it-going.mp3",
                                ),

                                "How’s it going?",

                                portuguese("Como vai?"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/hows-everything.mp3",
                                ),

                                "How’s everything?",

                                portuguese("Como andam as coisas?"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      lineBreak: true,
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [italic("Informal")],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/whats-up.mp3",
                                ),

                                "What’s up?",

                                portuguese("E aí, beleza? (Informal)"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  bgColor: "var(--gray-5)",

                  textColor: "white",

                  column: "Possible Answers",

                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/im-well.mp3",
                                ),

                                "I’m well.",

                                portuguese("Estou bem."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/im-great.mp3",
                                ),

                                "I’m great.",

                                portuguese("Estou ótimo(a)."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/im-good.mp3",
                                ),

                                "I’m good.",

                                portuguese("Estou bem. (Informal)"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/im-pretty-good.mp3",
                                ),

                                "I’m pretty good.",

                                portuguese("Estou bem / Muito bem. (Informal)"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/same-as-usual.mp3",
                                ),

                                "Same as usual.",

                                portuguese("O de sempre."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      lineBreak: true,
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [italic("Informal")],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/nothing-much.mp3",
                                ),

                                "Nothing much.",

                                portuguese("Nada demais."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/not-much-you.mp3",
                                ),

                                "Not much, you?",

                                portuguese("Nada demais, e você?"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/just-chilling.mp3",
                                ),

                                "Just chilling.",

                                portuguese("De boa / Relaxando."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },

                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [
                                audio(
                                  "/assets/audio/cefr/a1/introductions/just-working.mp3",
                                ),

                                "Just working.",

                                portuguese("Só trabalhando."),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
            <LineBreak />
            <TheAlphabet />
            <LineBreak />
            <Ribbon label="Common Questions" bgColor="var(--slate-7)" />
            <LineBreak />
            <Column
              width="260"
              cols={columnCommonQuestions.map((col) => ({
                column: col.column,
                bgColor: "var(--slate-5)",
                blocks: col.items.map((item) => {
                  if (item.lineBreak) {
                    return {
                      lineBreak: true,
                    };
                  }

                  return {
                    block: [
                      {
                        text: [
                          ...content({
                            audio: item.audio,
                            parts: [
                              item.part,
                              icon(item.icon),
                              italic(item.italic),
                              portuguese(item.portuguese),
                            ],
                          }),
                        ],
                      },
                    ],
                  };
                }),
              }))}
            />

            <LineBreak />
            <List
              items={[
                {
                  value: [
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/first-name-given-name.mp3",
                      parts: [bold("first name"), " = given name"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/last-name-surname-family-name.mp3",
                      parts: [bold("last name / surname"), " = family name"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="practice" heading={3}>
            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: radioQuestions,
              }}
            />
            <LineBreak />
            <FillInTheBlanks
              exercise={{
                instruction: "Complete the dialogue with the correct words.",
                blocks: [
                  {
                    block: [
                      { text: "A: Hi! " },
                      { blank: "I'm" },
                      { text: " Julia." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: Hello, Julia. " },
                      { blank: "I'm" },
                      { text: " Ben." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: Nice to " },
                      { blank: "meet" },
                      { text: " you." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: Nice to meet you " },
                      { blank: ["too", "Too"] },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: What's your " },
                      { blank: "last name" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: " },
                      { blank: "It's" },
                      { text: " Costa." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: How do you " },
                      { blank: "spell" },
                      { text: " it?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: " },
                      { blank: "C-O-S-T-A" },
                      { text: "." },
                    ],
                  },
                  {
                    block: [
                      { text: "A: Are you a new " },
                      { blank: "student" },
                      { text: " here?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: Yes, I " },
                      { blank: "am" },
                      { text: "." },
                    ],
                  },
                ],
              }}
            />
            <LineBreak />
            <FillInTheBlanks
              exercise={{
                instruction: "Unscramble the sentences.",
                blocks: [
                  {
                    block: [
                      { text: "Julia / I’m / Hi!" },
                      { blank: "Hi! I’m Julia." },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "name / What’s / your" },
                      { blank: "What’s your name" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "meet / Nice / you / to" },
                      { blank: "Nice to meet you" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "last / your / What’s / name" },
                      { blank: "What’s your last name?" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "spell / do / it / How / you?" },
                      { blank: "How do you spell it" },
                      { text: "?" },
                    ],
                  },
                  {
                    block: [
                      { text: "your / spell / How / do / name / you?" },
                      { blank: "How do you spell your name" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "am / I / student / a / new" },
                      { blank: "I am a new student" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "doing / How / you / are?" },
                      { blank: "How are you doing" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "good / pretty / I’m" },
                      { blank: "I’m pretty good" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "meet / Nice / too / you, / to" },
                      { blank: "Nice to meet you, too" },
                      { text: "." },
                    ],
                  },
                ],
              }}
            />
            <LineBreak />
            <Guess
              words={[
                {
                  word: "cat",
                  img: 0,
                },
                {
                  word: "dog",
                  img: 0,
                },
              ]}
            />
          </Section>

          <Section id="production" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    "Work with a partner. Take turns meeting each other for the first time.",
                  ],
                }),
              ]}
            />
            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["Say hello and say your name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Ask your partner's name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Ask your partner's last name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Ask your partner to spell his/her first name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Ask your partner to spell his/her last name."],
                    }),
                  ],
                },
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
