import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold, mark, portuguese } from "@/helpers/content";

export const metadata = {
  title: "A2 Elementary | Describe Past Experiences",
  description: "Simple past language for talking about finished experiences.",
};

export default function DescribePastExperiences() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Describe past experiences"
        description="Last weekend, I went to the beach."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about finished
          past experiences, use common regular and irregular past verbs, and ask
          follow-up questions about yesterday, last weekend, or last month.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <Line
              value={[
                ...content({
                  audio:
                    "/assets/audio/general/look-at-the-pictures-and-listen-to-the-sentences.mp3",
                  parts: [
                    "",
                    bold("Look at the pictures and listen to the sentences."),
                  ],
                }),
              ]}
            />
            <LineBreak />
            <div className="grid-container">
              <CardLayout width="max-content" mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/beach.jpg"
                  alt="Laura at the beach"
                />
                <div>
                  <Line
                    value={[
                      ...content({
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/last-weekend-laura-went-to-the-beach.mp3",
                        parts: ["Last weekend, Laura went to the beach."],
                      }),
                    ]}
                  />
                </div>
              </CardLayout>
              <CardLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/movie.png"
                  alt="Eric watching a movie at night"
                />
                <div>
                  <Line
                    value={[
                      ...content({
                        audio: "/assets/audio/cefr/a2/describe-the-past/last-night-eric-watched-a-movie.mp3",
                        parts: ["Last night, Eric watched a movie."],
                      }),
                    ]}
                  />
                </div>
              </CardLayout>
              <CardLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/cafeteria.png"
                  alt="Laura and Eric eating lunch in the cafeteria"
                />
                <div>
                  <Line
                    value={[
                      ...content({
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/last-weekend-laura-went-to-the-beach.mp3",
                        parts: [
                          "Yesterday, Laura and Eric ate lunch together in the cafeteria.",
                        ],
                      }),
                    ]}
                  />
                </div>
              </CardLayout>
            </div>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the correct answer.",
                questions: [
                  {
                    question: "1. Where did Laura go last weekend?",
                    options: [
                      { option: "She watched a movie.", isCorrect: false },
                      { option: "She went to the beach.", isCorrect: true },
                      { option: "She ate with Eric at the cafeteria.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What did Eric do last night?",
                    options: [
                      { option: "He went to the beach.", isCorrect: false },
                      { option: "He ate with Laura at the cafeteria.", isCorrect: false },
                      { option: "He watched a movie.", isCorrect: true },
                    ],
                  },
                  {
                    question: "3. What did Laura and Eric do yesterday?",
                    options: [
                      { option: "They ate lunch together in the cafeteria.", isCorrect: true },
                      { option: "They watched a movie.", isCorrect: false },
                      { option: "They went to the beach.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <div className="text-align-center">
              <Image
                src="/assets/img/cefr/a2/describe-past-experiences/cafeteria.png"
                alt="Eric and Laura at the school cafeteria"
                ratio="16-9"
              />
              <Line
              
                value={[
                  ...content({
                    audio: "",
                    parts: [
                      "Eric and Laura are at the school’s cafeteria.",
                    ],
                  }),
                ]}
              />
            </div>
            <LineBreak />
            <AudioPlayer src="/assets/audio/.mp3" />
            <LineBreak />
            <Dialogue
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["So, how was your weekend?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It was great! I went to the beach."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Nice!"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What about you?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I watched a movie last night."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That sounds fun! What movie did you watch?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I watched Star Wars: The Last Jedi, and I loved it."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Maybe next time we can watch another Star Wars movie."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Sounds good!"],
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
                    "We use the ",
                    mark("simple past"),
                    " to talk about finished actions in the past. We often add time expressions such as ",
                    mark("yesterday"),
                    ", ",
                    mark("last weekend"),
                    ", or ",
                    mark("two days ago"),
                    ".",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos o simple past para falar de ações terminadas no passado. Muitas vezes usamos expressões como yesterday, last weekend ou two days ago.",
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
                        bold("Regular verbs: "),
                        mark("visited"),
                        ", ",
                        mark("watched"),
                        ", ",
                        mark("finished"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Irregular verbs: "),
                        mark("went"),
                        ", ",
                        mark("had"),
                        ", ",
                        mark("saw"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Questions: "),
                        mark("What did you do?"),
                        " / ",
                        mark("Did you go out?"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Short answers: "),
                        mark("Yes, I did."),
                        " / ",
                        mark("No, I didn't."),
                      ],
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
                    "Regular past verbs usually end in ",
                    mark("-ed"),
                    ", but some common verbs are irregular and change form completely, like ",
                    mark("go -> went"),
                    ".",
                  ],
                }),
              ]}
            />

            <LineBreak />

            <Column
              width="220"
              cols={[
                {
                  bgColor: "var(--blue-5)",
                  textColor: "white",
                  column: "/t/",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["watched"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["finished"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "/d/",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["played"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["lived"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--orange-5)",
                  textColor: "white",
                  column: "/ɪd/",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["visited"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["wanted"] })] }],
                    },
                  ],
                },
              ]}
            />
            <LineBreak />

            <Column
              width="260"
              cols={[
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "Time Markers",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["yesterday"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [
                        { text: [...content({ parts: ["last weekend"] })] },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        { text: [...content({ parts: ["two days ago"] })] },
                      ],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Model Verbs",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["visited"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["watched"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["went"] })] }],
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
                        { text: [...content({ parts: ["What did you do?"] })] },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [...content({ parts: ["Where did you go?"] })],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [...content({ parts: ["Did you have fun?"] })],
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
                  "Complete the sentences with the correct past-time words or verbs.",
                blocks: [
                  {
                    block: [
                      { text: "Last Saturday, I " },
                      { blank: "visited" },
                      { text: " my grandmother." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We " },
                      { blank: "watched" },
                      { text: " a movie after dinner." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My brother " },
                      { blank: "went" },
                      { text: " to the beach yesterday." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I " },
                      { blank: "had" },
                      { text: " a busy weekend." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We stayed home two days " },
                      { blank: "ago" },
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
                    question: "1. What did you do last weekend?",
                    options: [
                      { option: "I visited my cousin.", isCorrect: true },
                      { option: "I am visiting now.", isCorrect: false },
                      {
                        option: "I usually visit on Fridays.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "2. Did you go out yesterday?",
                    options: [
                      { option: "Yes, I did.", isCorrect: true },
                      { option: "Yes, I do.", isCorrect: false },
                      { option: "Yes, I am.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Where did Laura go?",
                    options: [
                      {
                        option: "She went to the beach.",
                        isCorrect: true,
                      },
                      { option: "She goes every day.", isCorrect: false },
                      { option: "She is at work now.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. How was your weekend?",
                    options: [
                      { option: "It was great.", isCorrect: true },
                      { option: "At ten o'clock.", isCorrect: false },
                      { option: "I'm going tomorrow.", isCorrect: false },
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
                    "Talk to a partner about one real past experience. Try to answer with complete sentences.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What did you do last weekend?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Who did you spend time with?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Where did you go?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Did you enjoy it? Why or why not?"],
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
