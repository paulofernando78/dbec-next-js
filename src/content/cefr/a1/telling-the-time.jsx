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
  title: "A1 Beginner | Telling the Time",
  description: "Basic clock times and simple time questions.",
};

export default function TellingTheTime() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Telling the time"
        description="What time is it? It's seven o'clock."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to ask and answer
          basic time questions, say common clock times, and talk about simple
          daily schedule times.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/cefr/a1-beginner/what-time-is-it/introduction.png"
                alt="Students looking at clocks and talking about time."
                width={350}
                height={250}
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
                        "/assets/audio/grammar/simple-present/introduction/laura-wakes-up-at-seven.mp3",
                      parts: ["Laura wakes up at seven."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/simple-present/meaning/fixed-schedules-and-timetables/classes-start-at-nine-am.mp3",
                      parts: ["Classes start at nine a.m."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/simple-present/introduction/laura-has-dinner-around-ten-before-bed.mp3",
                      parts: ["Laura has dinner around ten before bed."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/simple-present/introduction/sometimes-eric-watches-movies-in-the-evening.mp3",
                      parts: ["Sometimes Eric watches movies in the evening."],
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
                    question: "1. What time does Laura wake up?",
                    options: [
                      { option: "At seven.", isCorrect: true },
                      { option: "At ten.", isCorrect: false },
                      { option: "At midnight.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What time do classes start?",
                    options: [
                      { option: "At nine a.m.", isCorrect: true },
                      { option: "At six a.m.", isCorrect: false },
                      { option: "At nine p.m.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. When does Eric sometimes watch movies?",
                    options: [
                      { option: "In the evening.", isCorrect: true },
                      { option: "In the morning.", isCorrect: false },
                      { option: "At lunchtime.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are talking before class."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What time is it?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["It's seven o'clock."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Oh no! What time do classes start?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["They start at nine a.m."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Good. What time do you usually have dinner?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Around ten."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That's late! I have dinner at half past eight."],
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
                    "We use ",
                    mark("What time is it?"),
                    " to ask about the time now, and ",
                    mark("What time do ... start?"),
                    " or ",
                    mark("What time do you ...?"),
                    " to ask about schedules and routines.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos What time is it? para perguntar as horas agora, e What time do ... start? ou What time do you ...? para perguntar sobre horários e rotinas.",
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
                      parts: [bold("Exact time: "), mark("It's seven o'clock.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Quarter past: "), mark("It's quarter past six.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Half past: "), mark("It's half past eight.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Quarter to: "), mark("It's quarter to ten.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Schedules: "), mark("Classes start at nine a.m.")],
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
                    "Use ",
                    mark("at"),
                    " before clock times in routines and schedules: ",
                    mark("at seven"),
                    ", ",
                    mark("at half past eight"),
                    ", ",
                    mark("at nine a.m."),
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
                              parts: ["What time is it?"],
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
                              parts: ["What time do classes start?"],
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
                              parts: ["What time do you have dinner?"],
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
                  column: "Exact Times",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["7:00 = seven o'clock"],
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
                              parts: ["9:00 = nine o'clock"],
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
                              parts: ["10:00 = ten o'clock"],
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
                  column: "More Time Phrases",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["6:15 = quarter past six"],
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
                              parts: ["8:30 = half past eight"],
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
                              parts: ["9:45 = quarter to ten"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
          </Section>

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions:
                  "Complete the time expressions with the correct words.",
                blocks: [
                  {
                    block: [
                      { text: "7:00 = seven " },
                      { blank: "o'clock" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "6:15 = quarter " },
                      { blank: "past" },
                      { text: " six" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "8:30 = half " },
                      { blank: "past" },
                      { text: " eight" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "9:45 = quarter " },
                      { blank: "to" },
                      { text: " ten" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Classes start " },
                      { blank: "at" },
                      { text: " nine a.m." },
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
                    question: "1. What time is it?",
                    options: [
                      { option: "It's seven o'clock.", isCorrect: true },
                      { option: "It's a clock.", isCorrect: false },
                      { option: "At school.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What time do classes start?",
                    options: [
                      { option: "At nine a.m.", isCorrect: true },
                      { option: "In the evening.", isCorrect: false },
                      { option: "It's quarter past.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which is correct for 8:30?",
                    options: [
                      { option: "Half past eight.", isCorrect: true },
                      { option: "Quarter to eight.", isCorrect: false },
                      { option: "Eight past half.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which is correct for 9:45?",
                    options: [
                      { option: "Quarter to ten.", isCorrect: true },
                      { option: "Quarter past ten.", isCorrect: false },
                      { option: "Half past nine.", isCorrect: false },
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
                  parts: [bold("Now talk about your routine.")],
                }),
              ]}
            />
            <List
              bullet={true}
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What time do you wake up?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What time do your classes or work start?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What time do you have dinner?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Use this model: ",
                        mark(
                          "I wake up at seven. My classes start at nine a.m. I have dinner at half past eight.",
                        ),
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
