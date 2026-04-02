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
  title: "A1 Beginner | Talk About Yourself",
  description: "Basic personal information and self-introductions.",
};

export default function TalkAboutYourself() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Talk about yourself"
        description="My name's Diego. I'm from Brazil. I'm a student."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to give basic
          personal information about themselves, including name, country, and
          job or studies.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-office.png"
                alt="A woman working in an office."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: ["", bold("Read the profile and answer the questions.")],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["Her name is Kate."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["She is from Brazil."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/grammar/simple-present/meaning/she-works-in-an-office.mp3",
                      parts: ["She works in an office."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Now think about your own information: your name, where you are from, and what you do.",
                      ],
                    }),
                  ]}
                />
              </div>
            </CardLayout>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the correct answer.",
                questions: [
                  {
                    question: "1. What is her name?",
                    options: [
                      { option: "Kate.", isCorrect: true },
                      { option: "Laura.", isCorrect: false },
                      { option: "Mexico.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where is she from?",
                    options: [
                      { option: "Brazil.", isCorrect: true },
                      { option: "Canada.", isCorrect: false },
                      { option: "An office.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does she do?",
                    options: [
                      { option: "She works in an office.", isCorrect: true },
                      { option: "She plays soccer.", isCorrect: false },
                      { option: "She is at school now.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="A teacher asks a new student for personal information."
              lines={[
                {
                  speaker: "Teacher:",
                  text: [
                    ...content({
                      parts: ["Hello. What's your name?"],
                    }),
                  ],
                },
                {
                  speaker: "Diego:",
                  text: [
                    ...content({
                      parts: ["My name's Diego."],
                    }),
                  ],
                },
                {
                  speaker: "Teacher:",
                  text: [
                    ...content({
                      parts: ["Where are you from, Diego?"],
                    }),
                  ],
                },
                {
                  speaker: "Diego:",
                  text: [
                    ...content({
                      parts: ["I'm from Brazil."],
                    }),
                  ],
                },
                {
                  speaker: "Teacher:",
                  text: [
                    ...content({
                      parts: ["Are you a student or do you work?"],
                    }),
                  ],
                },
                {
                  speaker: "Diego:",
                  text: [
                    ...content({
                      parts: ["I'm a student."],
                    }),
                  ],
                },
                {
                  speaker: "Teacher:",
                  text: [
                    ...content({
                      parts: ["Great. Nice to meet you."],
                    }),
                  ],
                },
                {
                  speaker: "Diego:",
                  text: [
                    ...content({
                      parts: ["Nice to meet you too."],
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
                    "When we talk about ourselves, we usually give personal information in a simple order: name, country, and job or studies.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Quando falamos sobre nós mesmos, normalmente damos informações pessoais em uma ordem simples: nome, país e trabalho ou estudos.",
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
                      parts: [bold("Name: "), mark("My name's Diego."), " / ", mark("I'm Diego.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Country: "), mark("I'm from Brazil.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Job / studies: "), mark("I'm a student."), " / ", mark("I'm a teacher.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Work place: "), mark("I work in an office.")],
                    }),
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
            <Paragraph
              value={[
                ...content({
                  parts: [
                    mark("I am"),
                    " usually becomes ",
                    mark("I'm"),
                    ", and ",
                    mark("my name is"),
                    " often becomes ",
                    mark("my name's"),
                    " in natural speech.",
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
                              parts: ["What do you do?"],
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
                  column: "Short Answers",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I'm Diego."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I'm from Brazil."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I'm a student."],
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
                  column: "Extra Information",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["My first name is Diego."],
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
                              parts: ["I'm from Salvador, Brazil."],
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
                              audio: "/assets/audio/general/Im-a-teacher.mp3",
                              parts: ["I'm a teacher."],
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
                instructions:
                  "Complete the answers with the correct information words.",
                blocks: [
                  {
                    block: [
                      { text: "A: What's your name? B: " },
                      { blank: ["I'm", "My name's"] },
                      { text: " Lucas." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: Where are you from? B: I'm " },
                      { blank: "from" },
                      { text: " Chile." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: Are you a student? B: Yes, I " },
                      { blank: "am" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: What do you do? B: I'm a " },
                      { blank: "teacher" },
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
                    question: "1. What's your name?",
                    options: [
                      { option: "I'm from Peru.", isCorrect: false },
                      { option: "My name's Camila.", isCorrect: true },
                      { option: "I'm 8 o'clock.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where are you from?",
                    options: [
                      { option: "I'm from Argentina.", isCorrect: true },
                      { option: "I'm a student.", isCorrect: false },
                      { option: "Nice to meet you.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Are you a student?",
                    options: [
                      { option: "Yes, I am.", isCorrect: true },
                      { option: "I'm from Mexico.", isCorrect: false },
                      { option: "My last name is Costa.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. What do you do?",
                    options: [
                      { option: "I'm an architect.", isCorrect: true },
                      { option: "I'm from Brazil.", isCorrect: false },
                      { option: "A-N-A.", isCorrect: false },
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
                    "Write or say a short self-introduction. Then share it with a partner.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Say your name."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Say where you are from."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Say if you are a student or what your job is."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("Hello. My name's Ana. I'm from Brazil. I'm a student."),
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
                      "Escreva ou fale uma pequena apresentação sobre você. Depois, compartilhe com um colega.",
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
