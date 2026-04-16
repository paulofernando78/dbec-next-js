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
  title: "A1 Beginner | Describe People",
  description: "Basic language for describing people.",
};

export default function DescribePeople() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Describe people"
        description="She has long hair. He is tall. They are friendly."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to describe people
          using basic adjectives and simple sentences with the verb be and have.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-man-birthday-school.png"
                alt="A woman and a man at school."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Look at the picture and listen to the sentences."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["The woman is beautiful."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/general/that-man-is-tall.mp3",
                      parts: ["The man is tall."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["They are at school."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When we describe people, we often talk about hair, clothes, age, height, and personality.",
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
                    question: "1. Where are the people?",
                    options: [
                      { option: "At school.", isCorrect: true },
                      { option: "At the beach.", isCorrect: false },
                      { option: "In a kitchen.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. How is the man?",
                    options: [
                      { option: "He is tall.", isCorrect: true },
                      { option: "He is a table.", isCorrect: false },
                      { option: "He is from Peru.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are talking about their teacher."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Who is that woman?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["She is our teacher, Ms. Brown."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["She is very friendly."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Yes, and she has long brown hair."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Is that tall man a student?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["No, he isn't. He is a teacher too."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["He looks serious, but he is nice."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="language-focus" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We often use ",
                    mark("be"),
                    " to describe people with adjectives, and ",
                    mark("have"),
                    " to talk about hair, eyes, or other physical features.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Muitas vezes usamos be para descrever pessoas com adjetivos e have para falar sobre cabelo, olhos ou outras características físicas.",
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
                      parts: [bold("With be: "), mark("She is friendly."), " / ", mark("He is tall.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("With have: "), mark("She has long hair."), " / ", mark("He has brown eyes.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Age: "), mark("She is young."), " / ", mark("He is old.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Personality: "), mark("She is nice."), " / ", mark("He is serious.")],
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
                    "In conversation, ",
                    mark("she is"),
                    " often becomes ",
                    mark("she's"),
                    " and ",
                    mark("he is"),
                    " often becomes ",
                    mark("he's"),
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
                  column: "Appearance",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/general/beautiful.mp3",
                              parts: ["beautiful"],
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
                              parts: ["tall"],
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
                              audio: "/assets/audio/general/hair.mp3",
                              parts: ["long hair"],
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
                  column: "Sentences",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["She's friendly."],
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
                              parts: ["He's tall."],
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
                              parts: ["She has long brown hair."],
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
                  column: "Questions",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/grammar/verb-be/pronunciation/interrogative/is-she.mp3",
                              parts: ["Is she friendly?"],
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
                              audio: "/assets/audio/grammar/verb-be/pronunciation/interrogative/is-he.mp3",
                              parts: ["Is he tall?"],
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
                              parts: ["Does she have long hair?"],
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
                      audio: "/assets/audio/general/man.mp3",
                      parts: [bold("man"), " = an adult male person"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/general/student.mp3",
                      parts: [bold("student"), " = a person who studies"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("teacher"), " = a person who teaches"],
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
                  "Complete the sentences with the correct describing word.",
                blocks: [
                  {
                    block: [
                      { text: "She is very " },
                      { blank: "friendly" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He is " },
                      { blank: "tall" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "She has long brown " },
                      { blank: "hair" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He is a " },
                      { blank: "teacher" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "They are nice " },
                      { blank: "people" },
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
                    question: "1. How is your teacher?",
                    options: [
                      { option: "She is friendly.", isCorrect: true },
                      { option: "She is in my bag.", isCorrect: false },
                      { option: "She is at seven o'clock.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Is he tall?",
                    options: [
                      { option: "Yes, he is.", isCorrect: true },
                      { option: "He has a chair.", isCorrect: false },
                      { option: "I'm from Chile.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does she look like?",
                    options: [
                      { option: "She has long hair.", isCorrect: true },
                      { option: "She is in the classroom.", isCorrect: false },
                      { option: "She watches TV at night.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Is that man a student?",
                    options: [
                      { option: "No, he isn't. He is a teacher.", isCorrect: true },
                      { option: "Yes, it is.", isCorrect: false },
                      { option: "He is on the table.", isCorrect: false },
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
                    "Describe one person in your class, family, or a picture.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Say if the person is a man or a woman."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Say one physical description."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Say one personality description."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("She is young and friendly. She has long black hair."),
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
                      "Descreva uma pessoa da sua turma, da sua família ou de uma imagem usando frases curtas.",
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
