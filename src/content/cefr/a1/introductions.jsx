import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold, mark, portuguese } from "@/helpers/content";

// Lessons
import { TheAlphabet } from "@/components/organisms/lessons/TheAlphabet";

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
        description="What's your name? Nice to meet you."
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
                src="/assets/img/general/two-people-talking-school.png"
                alt="Two students talking at school."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold(
                          "Look at the picture and listen to the sentences.",
                        ),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/this-is-an-english-school.mp3",
                      parts: ["This is an English school."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/laura-and-eric-are-students.mp3",
                      parts: ["Laura and Eric are students."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/theyre-in-the-classroom.mp3",
                      parts: ["They're in the classroom."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/introductions/theyre-classmates.mp3",
                      parts: ["They are classmates."],
                    }),
                  ]}
                />
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
                      { option: "At an English school.", isCorrect: true },
                      { option: "At a restaurant.", isCorrect: false },
                      { option: "At a hospital.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Are Laura and Eric students?",
                    options: [
                      { option: "Yes, they are.", isCorrect: true },
                      { option: "No, they aren't.", isCorrect: false },
                      { option: "One is a doctor.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Who is Mr. Smith?",
                    options: [
                      { option: "The teacher.", isCorrect: true },
                      { option: "A student.", isCorrect: false },
                      { option: "A classmate.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          {/* Presentation */}
          <Section id="presentation" heading={3}>
            <AudioPlayer src="/" />
            <LineBreak />
            <Dialogue
              description="Laura and Eric meet for the first time before class."
              lines={[
                {
                  speaker: "Laura:",
                  text: [...content({ parts: ["Hi! I'm Laura."] })],
                },
                {
                  speaker: "Eric:",
                  text: [...content({ parts: ["Hello, Laura. I'm Eric."] })],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Nice to meet you, Eric."],
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
                      parts: ["It's P-A-L-M-E-R."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Are you new here?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, I am."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Great! Me too. So, class starts in 5 minutes."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Good. Let's go then."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Meaning */}
          <Section id="meaning" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We use introductions to greet someone, say who we are, ask for a name or last name, ask for spelling, and respond politely.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos introduções para cumprimentar alguém, dizer quem somos, perguntar o nome ou sobrenome, pedir a soletração e responder de forma educada.",
                    ),
                  ],
                }),
              ]}
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [bold("Greeting: "), "Hi! / Hello!"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Saying your name: "),
                        "I'm Laura.",
                        " / ",
                        "My name's Eric.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Asking a name: "), "What's your name?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Asking a last name: "),
                        "What's your last name?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Being polite: "),
                        "Nice to meet you.",
                        " / ",
                        "Nice to meet you too.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Spelling: "),
                        "How do you spell your name?",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Pronunciation-Form */}
          <Section
            id="pronunciation-form"
            label="Pronunciation + Form"
            heading={3}
          >
            <Line
              value={[
                ...content({
                  parts: [
                    "In conversation, we often use short forms. ",
                    mark("I am"),
                    " becomes ",
                    mark("I'm"),
                    ", and ",
                    mark("my name is"),
                    " often becomes ",
                    mark("my name's"),
                    ".",
                  ],
                }),
              ]}
            />

            <LineBreak />

            <Column
              width="260"
              cols={[
                // Greetings
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "Greetings",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/introductions/hi.mp3",
                              parts: ["Hi!"],
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
                                "/assets/audio/cefr/a1/introductions/hello.mp3",
                              parts: ["Hello!"],
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
                                "/assets/audio/cefr/a1/introductions/nice-to-meet-you-1.mp3",
                              parts: ["Nice to meet you."],
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
                              parts: ["Nice to meet you."],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Questions
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Questions",
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
                              audio:
                                "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3",
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
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Answers",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/introductions/im-laura.mp3",
                              parts: ["I'm Laura."],
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
                                "/assets/audio/cefr/a1/introductions/l-a-u-r-a.mp3",
                              parts: ["L-A-U-R-A."],
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
                                "/assets/audio/cefr/a1/introductions/p-a-l-m-e-r.mp3",
                              parts: ["P-A-L-M-E-R."],
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
            <hr className="hr" />
            <TheAlphabet />
          </Section>

          {/* Practice */}
          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions: "Complete the dialogue with the correct words.",
                description:
                  "It's • C-O-S-T-A • spell • I'm • meet • last name • too • I'm",
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
                      { option: "It's Gomez.", isCorrect: true },
                      { option: "I'm Ana.", isCorrect: false },
                      { option: "Nice to meet you too.", isCorrect: false },
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
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Work with a partner. Take turns meeting each other for the first time.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Say hello and say your name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Ask your partner's name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Ask your partner's last name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Ask your partner to spell his/her first name.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Ask your partner to spell his/her last name.",
                      ],
                    }),
                  ],
                },
              ]}
            />

            <LineBreak />

            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Em duplas, conversem como se estivessem se conhecendo pela primeira vez.",
                    ),
                  ],
                }),
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
