import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Ribbon } from "@/components/atoms/Ribbon";
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
                      parts: ["I am a programmer. I work from home."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Easy life, huh?"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="meaning" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    "When we talk about ourselves, we usually give personal information in a simple order: name, country, job or studies.",
                  ],
                }),
              ]}
            />
            <Line
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
            <Ribbon label="Name" bgColor="var(--slate-7)" />
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
                                "/assets/audio/cefr/a1/talk-about-yourself/whats-your-name.mp3",
                              parts: ["What’s your name?"],
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/my-names.mp3",
                              parts: ["My name’s..."],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/im.mp3",
                              parts: ["I’m..."],
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
            <Ribbon label="Country / Nationality" bgColor="var(--slate-7)" />
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
                                "/assets/audio/cefr/a1/talk-about-yourself/where-are-you-from.mp3",
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/where-do-you-come-from.mp3",
                              parts: ["Where do you come from?"],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/where-do-you-come-from.mp3",
                              parts: ["Where are you from originally?"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Say...
                {
                  column: "Say...",
                  bgColor: "var(--slate-5)",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/im-from.mp3",
                              parts: ["I’m from..."],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/i-come-from.mp3",
                              parts: ["I come from..."],
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/brazil-im-brazilian-i-live-in-sao-paulo.mp3",
                              parts: [
                                "...Brazil. I’m Brazilian. I live in São Paulo.",
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/the-united-states-im-american-i-live-in-new-york.mp3",
                              parts: [
                                "...the United States. I’m American. I live in New York.",
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/england-im-british-i-live-in-london.mp3",
                              parts: [
                                "...England. I’m British. I live in London.",
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
            <Ribbon label="Studies / Jobs" bgColor="var(--slate-7)" />
            <LineBreak />
            <Column
              width="260"
              cols={[
                // Questions
                {
                  column: "Answers",
                  bgColor: "var(--slate-6)",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/what-do-you-do.mp3",
                              parts: ["What do you do?"],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/what-do-you-do-2.mp3",
                              parts: ["Wha", underline("t do"), " you do?"],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/what-do-you-do-for-a-living.mp3",
                              parts: ["What do you do for a living?"],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/what-do-you-do-for-a-living-2.mp3",
                              parts: [
                                "Wha",
                                underline("t do"),
                                " you do for a living?",
                              ],
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
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/im-a-teacher-i-work-in-a-school.mp3",
                              parts: ["I’m a teacher. I work in a school."],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/im-an-accountant-i-work-in-an-office.mp3",
                              parts: [
                                "I’m an accountant. I work in an office.",
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
                              audio:
                                "/assets/audio/cefr/a1/talk-about-yourself/im-a-doctor-i-work-in-a-hospital.mp3",
                              parts: ["I’m a doctor. I work in a hospital."],
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
                                "/assets/audio/cefr/a1/talk-about-yourself/Im-a-software-developer-i-work-from-home.mp3",
                              parts: [
                                "I’m a software developer. I work from home.",
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
            <Line
              value={[
                ...content({
                  parts: [
                    bold("Use "),
                    mark("a"),
                    bold(" before consonant sounds."),
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
                      parts: ["I’m ", underline("a t"), "eacher."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["I’m ", underline("a d"), "octor."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["I’m ", underline("a s"), "oftware developer."],
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
                    "Use ",
                    mark("an"),
                    " before vowel sounds (a, e, i, o, u).",
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
                      icons: ["correct"],
                      parts: ["I’m ", underline("an a"), "ccountant."],
                    }),
                    ...content({
                      icons: ["incorrect"],
                      parts: ["I’m a accountant."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      icons: ["correct"],
                      parts: ["I’m ", underline("an a"), "rchitect."],
                    }),
                    ...content({
                      icons: ["incorrect"],
                      parts: ["I’m a architect."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      icons: ["incorrect"],
                      parts: ["Where ", underline("you are"), " ", "from?"],
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

          <Section id="practice" heading={3}>
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
                    question: "4. What do you do?",
                    options: [
                      { option: "I’m from Brazil.", isCorrect: false },
                      { option: "I’m an architect.", isCorrect: true },
                      { option: "A-N-A.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
            <LineBreak />
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
            <FillInTheBlanks
              showWordBank={false}
              exercise={{
                instructions: "Build the sentence in the correct order.",
                blocks: [
                  {
                    block: [
                      { text: "1. your / name? / What's" },
                      {
                        blank: [
                          "What's your name?",
                          "What is your name?",
                          "What’s your name?",
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "2. from? / you / Where / are" },
                      { blank: ["Where are you from?"] },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "3. a / I’m / student." },
                      {
                        blank: [
                          "I am a student.",
                          "I'm a student.",
                          "I’m a student.",
                        ],
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "4. from / I’m / Brazil." },
                      { blank: ["I’m from Brazil.", "I am from Brazil."] },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "5. work / I / from / home." },
                      { blank: ["I work from home."] },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "6. do / What / you / do?" },
                      { blank: ["What do you do?"] },
                    ],
                    lineBreak: true,
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
