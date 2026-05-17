import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Ribbon } from "@/components/atoms/Ribbon";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { MediaLayout } from "@/components/molecules/MediaLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
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
          {/* Introduction */}
          <Section id="introduction" heading={3}>
            <MediaLayout mediaPosition="top">
              <Image
                src="/assets/img/cefr/a1/introductions/laura-eric-mr-smith.png"
                alt="Two students talking at school."
                ratio="16-9"
              />
              <div>
                {/* Look at the picture and listen to the sentences. */}
                <Line
                  as="p"
                  value={[
                    ...content({
                      parts: [
                        bold(
                          "Look at the picture and listen to the sentences.",
                        ),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                {/* This is an English school. */}
                <Line
                  as="p"
                  value={[
                    ...content({
                      parts: [
                        audio(
                          "/assets/audio/cefr/a1/introductions/this-is-an-english-school.mp3",
                        ),
                        "This is an English school.",
                      ],
                    }),
                  ]}
                />
                {/* Laura and Eric are students. */}
                <Line
                  as="p"
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/laura-and-eric-are-students.mp3",
                      parts: ["Laura and Eric are students."],
                    }),
                  ]}
                />
                {/* They're in the classroom. */}
                <Line
                  as="p"
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/theyre-in-the-classroom.mp3",
                      parts: ["They're in the classroom."],
                    }),
                  ]}
                />
                {/* They are classmates. */}
                <Line
                  as="p"
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/theyre-classmates.mp3",
                      parts: ["They are classmates."],
                    }),
                  ]}
                />
                {/* Mr. Smith is the teacher. */}
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/mr-smith-is-the-teacher.mp3",
                      parts: ["Mr. Smith is the teacher."],
                    }),
                  ]}
                />
              </div>
            </MediaLayout>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Now answer the questions.",
                questions: [
                  {
                    question: "1. Where are Laura and Eric?",
                    options: [
                      { option: "At a restaurant.", isCorrect: false },
                      { option: "At a hospital.", isCorrect: false },
                      { option: "At an English school.", isCorrect: true },
                    ],
                  },
                  {
                    question: "2. Are Laura and Eric students?",
                    options: [
                      { option: "No, they aren't.", isCorrect: false },
                      { option: "Yes, they are.", isCorrect: true },
                      { option: "One is a doctor.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Who is Mr. Smith?",
                    options: [
                      { option: "A student.", isCorrect: false },
                      { option: "A classmate.", isCorrect: false },
                      { option: "The teacher.", isCorrect: true },
                    ],
                  },
                ],
              }}
            />
          </Section>

          {/* Presentation */}
          <Section id="presentation" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [bold("")],
                }),
              ]}
            />
            <LineBreak />
            <DialogueLesson
              imgSrc="/assets/img/cefr/a1/introductions/laura-eric-mr-smith.png"
              imgAlt="Two students talking at school."
              description="Laura and Eric are in the classroom."
              audioPlayer="/assets/audio/cefr/a1/introductions/presentation.mp3"
              lines={[
                {
                  speaker: "Laura",
                  line: [
                    ...content({ parts: ["Hi there! How are you doing?"] }),
                  ],
                },
                {
                  speaker: "Eric",
                  line: [
                    ...content({
                      parts: ["Hello, I'm pretty good. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura",
                  line: [
                    ...content({ parts: ["I'm great, thanks. I'm Laura."] }),
                  ],
                },
                {
                  speaker: "Eric",
                  line: [...content({ parts: ["Hello, Laura. I'm Eric."] })],
                },
                {
                  speaker: "Laura",
                  line: [
                    ...content({
                      parts: ["Nice to meet you."],
                    }),
                  ],
                },
                {
                  speaker: "Eric",
                  line: [
                    ...content({
                      parts: ["Nice to meet you too. What's your last name?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura",
                  line: [
                    ...content({
                      parts: ["It's Palmer. "],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  line: [
                    ...content({
                      parts: ["How do you spell it?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  line: [
                    ...content({
                      parts: ["P-A-L-M-E-R."],
                    }),
                  ],
                },
                {
                  speaker: "Eric",
                  line: [
                    ...content({
                      parts: ["Are you a new student here?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura",
                  line: [
                    ...content({
                      parts: ["Yes, I am. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric",
                  line: [
                    ...content({
                      parts: [
                        "Me too. So, class starts in 5 minutes, right? Ready?",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "Laura",
                  line: [
                    ...content({
                      parts: ["Yes. I am. Let's go."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Language Focus */}
          <Section id="language-focus" heading={3}>
            <LineBreak />
            <Ribbon label="Greetings" bgColor="var(--slate-7)" />
            <LineBreak />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hi.mp3",
                  parts: ["Hi!"],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hello.mp3",
                  parts: ["Hello!"],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hey.mp3",
                  parts: ["Hey!"],
                }),
              ]}
            />
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

            <Line
              as="p"
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/how-are-you.mp3",
                  parts: ["How are you? ", portuguese("Como você está?")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/how-are-you-doing.mp3",
                  parts: ["How are you doing? ", portuguese("Como vai você?")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/hows-it-going.mp3",
                  parts: ["How’s it going? ", portuguese("Como vai?")],
                }),
              ]}
            />
            <Line
              as="p"
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/hows-everything.mp3",
                  parts: ["How’s everything? ", portuguese("Como está tudo?")],
                }),
              ]}
            />
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

          {/* Practice */}
          <Section id="practice" heading={3}>
            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question: "1. Hello! I'm Sara.",
                    options: [
                      { option: "Nice to meet you.", isCorrect: true },
                      { option: "My last name is Silva.", isCorrect: false },
                      { option: "How old is your school?", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What's your name?",
                    options: [
                      { option: "My last name is Costa.", isCorrect: false },
                      { option: "My name's Diego.", isCorrect: true },
                      { option: "Nice to meet you too.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What's your last name?",
                    options: [
                      { option: "I'm Ana.", isCorrect: false },
                      { option: "Nice to meet you too.", isCorrect: false },
                      { option: "It's Gomez.", isCorrect: true },
                    ],
                  },
                  {
                    question: "4. How do you spell your name?",
                    options: [
                      { option: "I'm a student.", isCorrect: false },
                      { option: "A-N-N-A.", isCorrect: true },
                      { option: "My name's Anna.", isCorrect: false },
                    ],
                  },
                  {
                    question: "5. Nice to meet you.",
                    options: [
                      {
                        option: "Nice to meet you too.",
                        isCorrect: true,
                      },
                      { option: "I'm from Brazil.", isCorrect: false },
                      { option: "See you yesterday.", isCorrect: false },
                    ],
                  },
                  {
                    question: "6. What's your first name?",
                    options: [
                      { option: "It's Pereira.", isCorrect: false },
                      { option: "My first name's Lucas.", isCorrect: true },
                      { option: "I'm fine, thanks.", isCorrect: false },
                    ],
                  },
                  {
                    question: "7. Are you a new student?",
                    options: [
                      { option: "Yes, I am.", isCorrect: true },
                      { option: "My name is Clara.", isCorrect: false },
                      { option: "P-A-U-L-A.", isCorrect: false },
                    ],
                  },
                  {
                    question: "8. How are you doing?",
                    options: [
                      { option: "I'm pretty good.", isCorrect: true },
                      { option: "My last name is Costa.", isCorrect: false },
                      { option: "Nice meeting you.", isCorrect: false },
                    ],
                  },
                  {
                    question: "9. How do you spell your last name?",
                    options: [
                      { option: "C-O-S-T-A.", isCorrect: true },
                      { option: "I'm a teacher.", isCorrect: false },
                      { option: "It's my first class.", isCorrect: false },
                    ],
                  },
                  {
                    question: "10. Hey! What's up?",
                    options: [
                      { option: "Not much, you?", isCorrect: true },
                      { option: "My name's Kevin.", isCorrect: false },
                      { option: "See you tomorrow.", isCorrect: false },
                    ],
                  },
                ],
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

          {/* Production */}
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
