import styles from "./introductions.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Ribbon } from "@/components/atoms/Ribbon";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
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

const alphabet = [
  {
    number: "1",
    letter: "A",
    phonetics: "/eɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/a.mp3",
  },
  {
    number: "2",
    letter: "B",
    phonetics: "/biː/",
    audio: "/assets/audio/pronunciation/the-alphabet/b.mp3",
  },
  {
    number: "3",
    letter: "C",
    phonetics: "/siː/",
    audio: "/assets/audio/pronunciation/the-alphabet/c.mp3",
  },
  {
    number: "4",
    letter: "D",
    phonetics: "/diː/",
    audio: "/assets/audio/pronunciation/the-alphabet/d.mp3",
  },
  {
    number: "5",
    letter: "E",
    phonetics: "/iː/",
    audio: "/assets/audio/pronunciation/the-alphabet/e.mp3",
  },
  {
    number: "6",
    letter: "F",
    phonetics: "/ef/",
    audio: "/assets/audio/pronunciation/the-alphabet/f.mp3",
  },
  {
    number: "7",
    letter: "G",
    phonetics: "/dʒiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/g.mp3",
  },
  {
    number: "8",
    letter: "H",
    phonetics: "/eɪtʃ/",
    audio: "/assets/audio/pronunciation/the-alphabet/h.mp3",
  },
  {
    number: "9",
    letter: "I",
    phonetics: "/aɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/i.mp3",
  },
  {
    number: "10",
    letter: "J",
    phonetics: "/dʒeɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/j.mp3",
  },
  {
    number: "11",
    letter: "K",
    phonetics: "/keɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/k.mp3",
  },
  {
    number: "12",
    letter: "L",
    phonetics: "/el/",
    audio: "/assets/audio/pronunciation/the-alphabet/l.mp3",
  },
  {
    number: "13",
    letter: "M",
    phonetics: "/em/",
    audio: "/assets/audio/pronunciation/the-alphabet/m.mp3",
  },
  {
    number: "14",
    letter: "N",
    phonetics: "/en/",
    audio: "/assets/audio/pronunciation/the-alphabet/n.mp3",
  },
  {
    number: "15",
    letter: "O",
    phonetics: "/oʊ/",
    audio: "/assets/audio/pronunciation/the-alphabet/o.mp3",
  },
  {
    number: "16",
    letter: "P",
    phonetics: "/piː/",
    audio: "/assets/audio/pronunciation/the-alphabet/p.mp3",
  },
  {
    number: "17",
    letter: "Q",
    phonetics: "/kjuː/",
    audio: "/assets/audio/pronunciation/the-alphabet/q.mp3",
  },
  {
    number: "18",
    letter: "R",
    phonetics: "/ɑːr/",
    audio: "/assets/audio/pronunciation/the-alphabet/r.mp3",
  },
  {
    number: "19",
    letter: "S",
    phonetics: "/es/",
    audio: "/assets/audio/pronunciation/the-alphabet/s.mp3",
  },
  {
    number: "20",
    letter: "T",
    phonetics: "/tiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/t.mp3",
  },
  {
    number: "21",
    letter: "U",
    phonetics: "/juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/u.mp3",
  },
  {
    number: "22",
    letter: "V",
    phonetics: "/viː/",
    audio: "/assets/audio/pronunciation/the-alphabet/v.mp3",
  },
  {
    number: "23",
    letter: "W",
    phonetics: "/ˈdʌb.əl.juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/w.mp3",
  },
  {
    number: "24",
    letter: "X",
    phonetics: "/eks/",
    audio: "/assets/audio/pronunciation/the-alphabet/x.mp3",
  },
  {
    number: "25",
    letter: "Y",
    phonetics: "/waɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/y.mp3",
  },
  {
    number: "26",
    letter: "Z",
    phonetics: "/ziː/",
    audio: "/assets/audio/pronunciation/the-alphabet/z.mp3",
  },
];

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
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/cefr/a1/introductions/two-people-talking-school.png"
                alt="Two students talking at school."
              />
              <div>
                {/* Look at the picture and listen to the sentences. */}
                <Line
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
            </CardLayout>

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
                  parts: [bold("Listen to Laura and Eric.")],
                }),
              ]}
            />
            <LineBreak />
            <AudioPlayer src="/assets/audio/cefr/a1/introductions/presentation.mp3" />
            <LineBreak />
            <Dialogue
              description=""
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({ parts: ["Hi there! How are you doing?"] }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Hello, I'm pretty good. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({ parts: ["I'm great, thanks. I'm Laura."] }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [...content({ parts: ["Hello, Laura. I'm Eric."] })],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Nice to meet you."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Nice to meet you too. What's your last name?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It's Palmer. "],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["How do you spell it?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["P-A-L-M-E-R."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Are you a new student here?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, I am. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: [
                        "Me too. So, class starts in 5 minutes, right? Ready?",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
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
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hi.mp3",
                  parts: ["Hi!"],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hello.mp3",
                  parts: ["Hello!"],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/hey.mp3",
                  parts: ["Hey!"],
                }),
              ]}
            />
            <LineBreak />
            <Line
              value={[
                ...content({
                  parts: [bold("Questions & Answers")],
                }),
              ]}
            />
            <LineBreak />

            <Line
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/how-are-you.mp3",
                  parts: ["How are you? ", portuguese("Como você está?")],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/how-are-you-doing.mp3",
                  parts: ["How are you doing? ", portuguese("Como vai você?")],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/hows-it-going.mp3",
                  parts: ["How’s it going? ", portuguese("Como vai?")],
                }),
              ]}
            />
            <Line
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
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/im-well.mp3",
                  parts: ["I’m well. ", portuguese("Estou bem.")],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/im-great.mp3",
                  parts: ["I’m great. ", portuguese("Estou ótimo(a).")],
                }),
              ]}
            />
            <Line
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
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/nothing-much.mp3",
                  parts: ["Nothing much. ", portuguese("Nada demais.")],
                }),
              ]}
            />
            <Line
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
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/just-chilling.mp3",
                  parts: ["Just chilling. ", portuguese("De boa / Relaxando")],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio:
                    "/assets/audio/cefr/a1/introductions/same-as-usual.mp3",
                  parts: ["Same as usual. ", portuguese("O de sempre")],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  audio: "/assets/audio/cefr/a1/introductions/just-working.mp3",
                  parts: ["Just working. ", portuguese("Só trabalhando")],
                }),
              ]}
            />
            <LineBreak />
            <span>
              <b>THE ALPHABET</b>
            </span>
            <LineBreak />
            <Line
              value={[
                ...content({
                  audio:
                    "/assets/audio/pronunciation/the-alphabet/26-letters.mp3",
                  parts: ["There are 26 letters in the english alphabet."],
                }),
              ]}
            />
            <LineBreak />
            <div className={styles.container}>
              {alphabet.map((a, i) => (
                <div key={i} className={styles.wrapper}>
                  <>
                    <span className={styles.number}>{a.number}</span>
                    <span className={styles.letter}>{a.letter}</span>
                    <span className="phonetics">{a.phonetics}</span>
                    <Audio src={a.audio} />
                  </>
                </div>
              ))}
            </div>
            <LineBreak />
            <div className="line-break">
              <Card>
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/letter-c.mp3",
                      parts: [
                        "“C” has the same sound as the verb “see” and the noun “sea.”",
                      ],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/letter-d.mp3",
                      parts: ["“D” is pronounced differently from letter “G.”"],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/number-eight.mp3",
                      parts: [
                        "Number “eight” is pronounced differently from letter “H.”",
                      ],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/letter-t.mp3",
                      parts: ["“T” has the same sound as in “tea.”"],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/letter-u.mp3",
                      parts: ["“U” has the same sound as in “you.”"],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/pronunciation/the-alphabet/letter-z.mp3",
                      parts: ["“Z” in British is pronounced “zed.”"],
                    }),
                  ]}
                />
              </Card>
            </div>
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
                ],
              }}
            />

            <LineBreak />

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
                ],
              }}
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
                      parts: [
                        "Ask your partner to spell his/her first name.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Ask your partner to spell his/her last name.",
                      ],
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
