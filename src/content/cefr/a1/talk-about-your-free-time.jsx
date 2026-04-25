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
  title: "A1 Beginner | Talk About Your Free Time",
  description: "Basic language for hobbies and free-time activities.",
};

export default function TalkAboutYourFreeTime() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Talk about your free time"
        description="I watch movies, listen to music, and study English."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about simple
          free-time activities, ask basic questions about hobbies, and answer
          with short personal sentences.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-watch-tv-evening.png"
                alt="A man watching TV in the evening."
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
                      audio:
                        "/assets/audio/grammar/simple-present/introduction/sometimes-eric-watches-movies-in-the-evening.mp3",
                      parts: ["Sometimes Eric watches movies in the evening."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/simple-present/meaning/daily-routines/he-watches-movies-in-the-evening.mp3",
                      parts: ["He watches movies in the evening."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/words/i/i-usually-watch-tv-at-night.mp3",
                      parts: ["I usually watch TV at night."],
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
                    question: "1. What does Eric do in the evening?",
                    options: [
                      { option: "He watches movies.", isCorrect: true },
                      { option: "He plays basketball at school.", isCorrect: false },
                      { option: "He works in a hospital.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. When does he watch movies?",
                    options: [
                      { option: "In the evening.", isCorrect: true },
                      { option: "At six in the morning.", isCorrect: false },
                      { option: "Only on airplanes.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric talk after class about what they do in their free time."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What do you do in your free time?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I watch movies and listen to music."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Nice! Do you play any sports?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Yes, I play soccer on weekends."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["How about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I read books and study English."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Do you watch movies too?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, sometimes I do."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Language Focus */}
          <Section id="language-focus" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We use the simple present to talk about hobbies, routines, and activities we do regularly in our free time.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos o simple present para falar sobre hobbies, rotinas e atividades que fazemos regularmente no nosso tempo livre.",
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
                        bold("Question: "),
                        mark("What do you do in your free time?"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Answer: "),
                        mark("I watch movies."),
                        " / ",
                        mark("I listen to music."),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Sports: "),
                        mark("I play soccer."),
                        " / ",
                        mark("I don't play sports."),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Reading / studying: "),
                        mark("I read books."),
                        " / ",
                        mark("I study English."),
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
                    "After ",
                    mark("I"),
                    ", ",
                    mark("you"),
                    ", ",
                    mark("we"),
                    ", and ",
                    mark("they"),
                    ", we use the base verb: ",
                    mark("I watch"),
                    ", ",
                    mark("we play"),
                    ", ",
                    mark("they study"),
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
                  column: "Questions",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["What do you do in your free time?"],
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
                              parts: ["Do you play sports?"],
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
                              parts: ["Do you watch movies?"],
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
                  column: "Affirmative",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I watch movies."],
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
                              parts: ["I listen to music."],
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
                              parts: ["I study English."],
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
                  column: "Negative",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I don't watch TV every day."],
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
                              parts: ["I don't play soccer."],
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
                              parts: ["I don't read comics."],
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
                      audio: "/assets/audio/words/w/watch.mp3",
                      parts: [bold("watch"), " = movies / TV"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("listen to music"), " = hear music"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("read"), " = books / stories / comics"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("play"), " = sports / games"],
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
                  "Complete the sentences with the correct free-time words.",
                blocks: [
                  {
                    block: [
                      { text: "In my free time, I " },
                      { blank: "watch" },
                      { text: " movies." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I listen to " },
                      { blank: "music" },
                      { text: " at night." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "On weekends, I " },
                      { blank: "play" },
                      { text: " soccer." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Sometimes I " },
                      { blank: "read" },
                      { text: " books at home." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I " },
                      { blank: "study" },
                      { text: " English after class." },
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
                    question: "1. What do you do in your free time?",
                    options: [
                      { option: "I watch movies and read books.", isCorrect: true },
                      { option: "I'm from Brazil.", isCorrect: false },
                      { option: "It's seven thirty.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Do you play sports?",
                    options: [
                      { option: "Yes, I do.", isCorrect: true },
                      { option: "I'm a student.", isCorrect: false },
                      { option: "Nice to meet you.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Do you watch TV at night?",
                    options: [
                      { option: "Yes, sometimes I do.", isCorrect: true },
                      { option: "My name's Lucas.", isCorrect: false },
                      { option: "I'm from Mexico.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. What do you read?",
                    options: [
                      { option: "I read comics.", isCorrect: true },
                      { option: "I am at home.", isCorrect: false },
                      { option: "I play soccer on weekends.", isCorrect: false },
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
                    "Talk to a partner about your hobbies and free-time activities.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Ask: What do you do in your free time?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Ask one more question about movies, music, reading, or sports."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Answer with two or three short sentences."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("In my free time, I watch movies and listen to music. I also play soccer on weekends."),
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
                      "Converse com um colega sobre hobbies e atividades de tempo livre. Responda com frases curtas e pessoais.",
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
