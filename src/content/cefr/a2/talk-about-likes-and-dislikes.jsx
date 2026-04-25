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
  title: "A2 Elementary | Likes and Dislikes",
  description: "Talking about preferences, hobbies, and tastes.",
};

export default function TalkAboutLikesAndDislikes() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Talk about likes and dislikes"
        description="I like coffee, but I don't like horror movies."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about
          preferences, agree and disagree politely, and explain likes and
          dislikes with simple reasons.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking.png"
                alt="Two people talking."
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
                      audio: "/assets/audio/words/i/i-prefer-bananas.mp3",
                      parts: ["I prefer bananas."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/words/s/she-loves-to-sing-in-the-shower.mp3",
                      parts: ["She loves to sing."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["He doesn't like fast food very much."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "People often talk about food, music, movies, and free-time activities when they want to know each other better.",
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
                    question: "1. What does the speaker prefer?",
                    options: [
                      { option: "Bananas.", isCorrect: true },
                      { option: "A chair.", isCorrect: false },
                      { option: "A school.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What does she love?",
                    options: [
                      { option: "To sing.", isCorrect: true },
                      { option: "To drive a bus.", isCorrect: false },
                      { option: "To open the door.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are talking about food, music, and movies."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What kind of music do you like?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I really like rock, and I love jazz too."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Interesting. I prefer pop music."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Do you like action movies?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, I do, but I don't like horror movies."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Me neither. What about food?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I like pasta, but I don't really like fast food."],
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
                    mark("like"),
                    ", ",
                    mark("love"),
                    ", ",
                    mark("prefer"),
                    ", and ",
                    mark("don't like"),
                    " to talk about preferences and tastes.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos like, love, prefer e don't like para falar sobre preferências e gostos.",
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
                      parts: [bold("Positive: "), mark("I like coffee."), " / ", mark("I love jazz.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Negative: "), mark("I don't like horror movies.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Preference: "), mark("I prefer pop music.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reason: "), mark("I like pasta because it's delicious.")],
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
                    mark("do"),
                    " and ",
                    mark("don't"),
                    ", we use the base verb: ",
                    mark("Do you like"),
                    ", not ",
                    mark("Do you likes"),
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
                              parts: ["Do you like it?"],
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
                              parts: ["What kind of music do you like?"],
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
                              parts: ["Do you prefer coffee or tea?"],
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
                  column: "Answers",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I like coffee."],
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
                              parts: ["I love music."],
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
                              parts: ["I prefer tea."],
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
                              parts: ["I don't like fast food."],
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
                              parts: ["I don't really like horror movies."],
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
                              parts: ["I don't enjoy spicy food."],
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
                      audio: "/assets/audio/words/c/coffee.mp3",
                      parts: [bold("coffee"), " = a drink"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/words/m/music.mp3",
                      parts: [bold("music"), " = songs and sounds"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/words/f/food.mp3",
                      parts: [bold("food"), " = what we eat"],
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
                  "Complete the sentences with the correct preference words.",
                blocks: [
                  {
                    block: [
                      { text: "I " },
                      { blank: "like" },
                      { text: " coffee, but I don't drink it every day." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "She " },
                      { blank: "loves" },
                      { text: " pop music." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We don't " },
                      { blank: "like" },
                      { text: " horror movies." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I " },
                      { blank: "prefer" },
                      { text: " tea to coffee." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Do you " },
                      { blank: "enjoy" },
                      { text: " fast food?" },
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
                    question: "1. Do you like jazz?",
                    options: [
                      { option: "Yes, I do. I love it.", isCorrect: true },
                      { option: "I'm from Brazil.", isCorrect: false },
                      { option: "It's in my bag.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What kind of movies do you like?",
                    options: [
                      { option: "I like action movies.", isCorrect: true },
                      { option: "At school.", isCorrect: false },
                      { option: "She's tall.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Do you like coffee?",
                    options: [
                      { option: "No, I don't. I prefer tea.", isCorrect: true },
                      { option: "Yes, it is coffee.", isCorrect: false },
                      { option: "I am a student.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Do you enjoy fast food?",
                    options: [
                      { option: "Not really. I don't like it very much.", isCorrect: true },
                      { option: "I'm twenty-nine.", isCorrect: false },
                      { option: "It's on the table.", isCorrect: false },
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
                    "Interview a partner about food, music, movies, and free-time activities.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Ask at least three questions about likes and dislikes."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Ask one follow-up question with why or what kind."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Report one answer to the class."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("He likes rock music, but he doesn't like horror movies. He prefers tea to coffee."),
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
                      "Entreviste um colega sobre comida, música, filmes e atividades de tempo livre. Depois, conte uma resposta para a turma.",
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
