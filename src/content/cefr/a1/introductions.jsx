import { Whiteboard } from "@/components/molecules/Whiteboard";
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

import { introPhrases, introQuestions } from "./instroductions/introduction";
import {
  presentationDialogue,
  langFocusGreetings,
  langFocusQandA,
  practiceRadioQuestions,
} from "./instroductions/data";

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
        <Card>
          By the end of this class, students will be able to greet someone, say
          their name, ask for basic personal information, and introduce
          themselves clearly.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <MediaWrapper
              mediaPosition="top"
              imgSrc="/assets/img/cefr/a1/introductions/laura-eric-mr-smith.png"
              imgAlt="Two students talking at school."
              ratio="16-9"
              instruction="Look at the picture and listen to the sentences."
              lines={introPhrases}
              tagAs="p"
            />
            <LineBreak />
            <Radio exercise={introQuestions} />
          </Section>

          <Section id="presentation" heading={3}>
            <LineBreak />
            <DialogueLesson
              imgSrc="/assets/img/cefr/a1/introductions/laura-eric-mr-smith.png"
              imgAlt="Two students talking at school."
              description="Laura and Eric are in the classroom."
              audioPlayer="/assets/audio/cefr/a1/introductions/presentation.mp3"
              lines={presentationDialogue.map((dialogue) => ({
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
            <Ribbon label="Greetings" bgColor="var(--slate-7)" />
            <LineBreak />
            {langFocusGreetings.map((phrase, index) => (
              <Line
                key={index}
                as="p"
                value={[
                  ...content({
                    audio: phrase.audio,
                    parts: [phrase.text],
                  }),
                ]}
              />
            ))}
            <LineBreak />
            <Line
              as="p"
              value={[
                ...content({
                  parts: [bold("Questions & Answers")],
                }),
              ]}
            />
            <LineBreak />

            {langFocusQandA.map((question, index) => (
              <Line
                key={index}
                as="p"
                value={[
                  ...content({
                    audio: question.audio,
                    parts: [question.text, portuguese(question.portugueseText)],
                  }),
                ]}
              />
            ))}
            <LineBreak />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/im-well.mp3",
                  parts: ["I’m well. ", portuguese("Estou bem.")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/im-great.mp3",
                  parts: ["I’m great. ", portuguese("Estou ótimo(a).")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/im-good.mp3",
                  parts: [
                    "I’m good. ",
                    portuguese("Estou bem."),
                    " ",
                    italic("informal"),
                  ],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/im-pretty-good.mp3",
                  parts: [
                    "I’m pretty good. ",
                    portuguese("Estou bem / Muito bem."),
                    " ",
                    italic("informal"),
                  ],
                }),
              ]}
            />
            <LineBreak />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/whats-up.mp3",
                  parts: [
                    "What’s up? ",
                    italic("informal "),
                    portuguese("E aí, beleza?"),
                  ],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/nothing-much.mp3",
                  parts: ["Nothing much. ", portuguese("Nada demais.")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/not-much-you.mp3",
                  parts: [
                    "Not much, you? ",
                    portuguese("Nada demais, e você?"),
                  ],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/just-chilling.mp3",
                  parts: ["Just chilling. ", portuguese("De boa / Relaxando")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/same-as-usual.mp3",
                  parts: ["Same as usual. ", portuguese("O de sempre")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/just-working.mp3",
                  parts: ["Just working. ", portuguese("Só trabalhando")],
                }),
              ]}
            />
            <LineBreak />
            <TheAlphabet />
            <LineBreak />
            <Column
              width="260"
              cols={[
                // Questions
                {
                  column: "Questions",
                  bgColor: "var(--slate-5)",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/introductions/whats-your-name.mp3",
                              parts: ["What's your name?"],
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
                              icons: ["attention"],
                              audio:
                                "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3",
                              parts: ["What’", underline("s y"), "our name?"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/whats-your-first-name.mp3",
                              parts: ["What's your first name?"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/how-do-you-spell-your-first-name.mp3",
                              parts: ["How do you spell your first name?"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/how-do-you-spell-it.mp3",
                              parts: ["How do you spell it?"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/whats-your-last-name.mp3",
                              parts: ["What's your last name?"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/how-do-you-spell-your-last-name.mp3",
                              parts: ["How do you spell your last name?"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Answers
                {
                  column: "Answers",
                  bgColor: "var(--slate-5)",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: [
                                "/assets/audio/cefr/a1/introductions/I-am.mp3",
                              ],
                              parts: ["I am..."],
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
                              icons: ["attention"],
                              audio: [
                                "/assets/audio/cefr/a1/introductions/Im.mp3",
                              ],
                              parts: ["I’m..."],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/my-name-is.mp3",
                              parts: ["My name is..."],
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
                              icons: ["attention"],
                              audio:
                                "/assets/audio/cefr/a1/introductions/my-names.mp3",
                              parts: ["My na", underline("me’s...")],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/my-first-names.mp3",
                              parts: ["My first name’s..."],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/my-last-names.mp3",
                              parts: ["My last name’s..."],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/nice-to-meet-you-1.mp3",
                              parts: ["Nice to meet you"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/nice-to-meet-you-2.mp3",
                              parts: ["Nice to mee", underline("t y"), "ou"],
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
                              audio:
                                "/assets/audio/cefr/a1/introductions/nice-meeting-you.mp3",
                              parts: [icon("attention"), "Nice meeting you."],
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
                questions: practiceRadioQuestions,
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
