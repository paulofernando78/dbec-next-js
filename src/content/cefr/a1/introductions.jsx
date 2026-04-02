import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
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
        description="What's your name? Where are you from? Nice to meet you."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to greet someone,
          say their name, ask for basic personal information, and introduce
          themselves clearly.
        </Card>

        <PageSections>
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
                    question: "3. When are they meeting?",
                    options: [
                      { option: "Before class.", isCorrect: true },
                      { option: "During lunch at home.", isCorrect: false },
                      { option: "After a football game.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
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
                      parts: ["Nice to meet you too."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Where are you from?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I'm from Brazil. And you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I'm from Mexico."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Great! How do you spell your name?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["L-A-U-R-A."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="meaning" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We use introductions to greet someone, say who we are, ask for a name, ask where a person is from, and respond politely.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos introduções para cumprimentar alguém, dizer quem somos, perguntar o nome, perguntar de onde a pessoa é e responder de forma educada.",
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
                        mark("I'm Laura."),
                        " / ",
                        mark("My name's Eric."),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Asking a name: "),
                        mark("What's your name?"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Asking origin: "),
                        mark("Where are you from?"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Being polite: "),
                        mark("Nice to meet you."),
                        " / ",
                        mark("Nice to meet you too."),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Spelling: "),
                        mark("How do you spell your name?"),
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="pronunciation-form" label="Pronunciation + Form" heading={3}>
            <Paragraph
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
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "Greetings",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["Hi!"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Hello!"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["Nice to meet you."],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
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
                                "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3",
                              parts: ["What's your name?"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["Where are you from?"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["How do you spell your name?"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
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
                              parts: ["I'm Laura."],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I'm from Brazil."],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["L-A-U-R-A."],
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
                      audio: "/assets/audio/pronunciation/the-alphabet/first-name.mp3",
                      parts: [bold("first name"), " = given name"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/pronunciation/the-alphabet/last-name.mp3",
                      parts: [bold("last name"), " = family name"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions: "Complete the dialogue with the correct words.",
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
                      { text: "A: Where are you " },
                      { blank: "from" },
                      { text: "?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "B: I'm from Canada. How do you spell your " },
                      { blank: "name" },
                      { text: "?" },
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
                      { option: "I'm from Brazil.", isCorrect: false },
                      { option: "How old is your school?", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What's your name?",
                    options: [
                      { option: "I'm from Mexico.", isCorrect: false },
                      { option: "My name's Diego.", isCorrect: true },
                      { option: "Nice to meet you too.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Where are you from?",
                    options: [
                      { option: "I'm from Japan.", isCorrect: true },
                      { option: "I'm Ana.", isCorrect: false },
                      { option: "J-A-P-A-N.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. How do you spell your name?",
                    options: [
                      { option: "I'm a student.", isCorrect: false },
                      { option: "A-N-N-A.", isCorrect: true },
                      { option: "I'm from Chile.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

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
                      parts: ["3. Ask where your partner is from."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["4. Ask your partner to spell their first name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "5. Introduce your partner to the class: ",
                        mark("This is Ana. She's from Peru."),
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
                      "Em duplas, conversem como se estivessem se conhecendo pela primeira vez. No final, apresentem o colega para a turma.",
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
