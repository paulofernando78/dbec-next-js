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
import { content, bold, mark, underline, portuguese } from "@/helpers/content";

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
        description="My name’s Laura. I’m from the United States. I’m an accountant."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to give basic personal
          information about themselves, including name, country, job or studies.
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
                      parts: [
                        "",
                        bold("Read the profile and answer the questions."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/talk-about-yourself/her-names-laura.mp3",
                      parts: ["Her name’s Laura."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/talk-about-yourself/shes-from-the-united-states.mp3",
                      parts: ["She is from the United States."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/talk-about-yourself/shes-an-accountant.mp3",
                      parts: ["She’s an accountant."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a1/talk-about-yourself/she-works-in-an-office.mp3",
                      parts: ["She works in an office."],
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
                    question: "1. Where is she from?",
                    options: [
                      { option: "Brazil", isCorrect: false },
                      { option: "U.S.", isCorrect: true },
                      { option: "England", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Is she an American?",
                    options: [
                      { option: "No, she isn’t.", isCorrect: false },
                      { option: "Yes, she is.", isCorrect: true },
                    ],
                  },
                  {
                    question: "3. Is she a student?",
                    options: [
                      { option: "Yes, she is.", isCorrect: true },
                      { option: "No, she isn’t.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric talk after class."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Hi, Laura. How’s it going?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Pretty good, thanks. What’s up?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Not much really. So, where are you from?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I’m from the United States. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I’m from England. Tell me, what do you do?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I’m an accountant. How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: [
                        "I am a musician. I play the drums. I play in bars and at events.",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Cool!"],
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
                    "When we talk about ourselves, we usually give personal information in a simple order: name, country, job or studies.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Quando falamos sobre nós mesmos, normalmente damos informações pessoais em uma ordem simples: nome, país, trabalho ou estudos.",
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
                      parts: [
                        bold("Name: "),
                        "My name’s Diego.",
                        " / ",
                        "I’m Diego.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Country / Nationality: "), "I’m from Brazil. I’m Brazilian."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Studies / Job: "),
                        "I’m a student.",
                        " / ",
                        "I’m a teacher.",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Work place: "),
                        "I work in an office.",
                      ],
                    }),
                  ],
                },
              ]}
            />
            <LineBreak />
            <Line
              value={[
                ...content({
                  parts: [bold("Variations: ")],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        "Where are you from?",
                      ],
                    }),
                    ...content({
                      icons: ["correct"],
                      parts: [       
                        "Where are you from originally?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "What do you do?",
                      ],
                    }),
                    ...content({
                      icons: ["arrow"],
                      parts: [
                        "What do you do for a living?",
                      ],
                    }),
                  ],
                },
              ]}
            />
            <LineBreak />
            <Line
              value={[
                ...content({
                  parts: [bold("Common mistakes:")],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      icons: ["incorrect"],
                      parts: ["I’m accountant."],
                    }),
                    ...content({
                      icons: ["correct"],
                      parts: ["I’m an accountant"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      icons: ["incorrect"],
                      parts: ["I’m musician."],
                    }),
                    ...content({
                      icons: ["bullet"],
                    }),
                    ...content({
                      icons: ["correct"],
                      parts: ["I’m a musician"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      icons: ["incorrect"],
                      parts: [
                        "Where ",
                        underline("you are"),
                        " ",
                        "from?"
                      ],
                      
                    }),
                    ...content({
                      icons: ["correct"],
                      parts: ["Where are you from?"],
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
                              parts: ["What’s your name?"],
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
                              parts: ["Where are you from?"],
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
                      block: [
                        { text: [...content({ parts: ["I’m Diego."] })] },
                      ],
                    },
                    {
                      block: [
                        { text: [...content({ parts: ["I’m from Brazil."] })] },
                      ],
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I’m a student."],
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
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I’m from Salvador, Brazil."],
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
                              audio: "/assets/audio/general/Im-a-teacher.mp3",
                              parts: ["I’m a teacher."],
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
          </Section>

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions:
                  "Complete the answers with the correct information words.",
                blocks: [
                  {
                    block: [
                      { text: "A: What’s your name? B: " },
                      { blank: ["I’m", "My name’s"] },
                      { text: " Lucas." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A: Where are you from? B: I’m " },
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
                      { text: "A: What do you do? B: I’m a " },
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
                    question: "1. What’s your name?",
                    options: [
                      { option: "I’m from Peru.", isCorrect: false },
                      { option: "My name’s Camila.", isCorrect: true },
                      { option: "I’m doctor.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where are you from?",
                    options: [
                      { option: "I’m from Argentina.", isCorrect: true },
                      { option: "I’m a student.", isCorrect: false },
                      { option: "Nice to meet you.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Are you a student?",
                    options: [
                      { option: "I’m from Mexico.", isCorrect: false },
                      { option: "My last name is Costa.", isCorrect: false },
                      { option: "Yes, I am.", isCorrect: true },
                    ],
                  },
                  {
                    question: "4. What’s your job?",
                    options: [
                      { option: "I’m from Brazil.", isCorrect: false },
                      { option: "I’m an architect.", isCorrect: true },
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
                      parts: [
                        "3. Say if you are a student or what your job is.",
                      ],
                    }),
                  ],
                },
              ]}
            />

            <LineBreak />

            <Line
              value={[
                ...content({
                  parts: [
                    bold("Model:"),
                    " Hello. My name’s ... I’m from ... I’m a ....",
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
