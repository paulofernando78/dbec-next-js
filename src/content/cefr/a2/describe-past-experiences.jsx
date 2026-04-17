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
import {
  content,
  bold,
  mark,
  underline,
  portuguese,
  phonetics,
} from "@/helpers/content";

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
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/last-night-eric-watched-a-movie.mp3",
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
                      {
                        option: "She ate with Eric at the cafeteria.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "2. What did Eric do last night?",
                    options: [
                      { option: "He went to the beach.", isCorrect: false },
                      {
                        option: "He ate with Laura at the cafeteria.",
                        isCorrect: false,
                      },
                      { option: "He watched a movie.", isCorrect: true },
                    ],
                  },
                  {
                    question: "3. What did Laura and Eric do yesterday?",
                    options: [
                      {
                        option: "They ate lunch together in the cafeteria.",
                        isCorrect: true,
                      },
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
                    parts: ["Eric and Laura are at the school’s cafeteria."],
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
                      parts: [
                        "I watched Star Wars: The Last Jedi, and I loved it.",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: [
                        "Maybe next time we can watch another Star Wars movie.",
                      ],
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
            <LineBreak />
            <Column
              width="220"
              cols={[
                // Positive
                {
                  bgColor: "var(--green-5)",
                  textColor: "white",
                  column: "Positive",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["I worked today."],
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
                              audio: "/",
                              parts: ["I did my homework this morning."],
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
                              audio: "/",
                              parts: ["I studied in the afternoon."],
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
                              audio: "/",
                              parts: ["I ate chicken for lunch today."],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Negative
                {
                  bgColor: "var(--red-5)",
                  textColor: "white",
                  column: "Negative",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["I ", mark("didn’t"), " work yesterday."],
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
                              parts: [
                                "I ",
                                mark("didn’t"),
                                " do my homework last night.",
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
                              parts: ["I didn’t study in the morning. "],
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
                              parts: ["I didn’t eat past for lunch today. "],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Question
                {
                  bgColor: "var(--yellow-5)",
                  textColor: "white",
                  column: "Question",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [mark("Did"), " you work today?"],
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
                              parts: [
                                mark("Did"),
                                " you do your homework last night?",
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
                              parts: [
                                mark("Did"),
                                " you study in the afternoon?",
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
                              parts: [
                                mark("Did"),
                                " you eat pizza for lunch today?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Short answer
                {
                  bgColor: "var(--yellow-5)",
                  textColor: "white",
                  column: "Short answer",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["Yes, I", mark("did.")],
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
                              parts: ["No, I", mark("didn’t.")],
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
                              parts: ["Yes, I", mark("did.")],
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
                              parts: ["No, I", mark("didn’t.")],
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
            {/* Regular / Irregular Verbs */}
            <Column
              width="220"
              cols={[
                // Regular
                {
                  bgColor: "var(--slate-5)",
                  textColor: "white",
                  column: "Regular (-ed)",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["work "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "worked",
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
                              audio: "/",
                              parts: ["study "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "studied",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // Irregular
                {
                  bgColor: "var(--slate-5)",
                  textColor: "white",
                  column: "Irregular",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["do "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "did",
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
                              audio: "/",
                              parts: ["eat "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "ate",
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
                    "Regular past verbs can have 3 different sounds ",
                    ".",
                  ],
                }),
              ]}
            />
            <LineBreak />
            {/* -ed sound ending  */}
            <Column
              width="220"
              cols={[
                // /t/
                {
                  bgColor: "var(--blue-4)",
                  textColor: "white",
                  column: "/t/",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["ask "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "ask",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
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
                              audio: "/",
                              parts: ["work "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "work",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // /d/
                {
                  bgColor: "var(--blue-5)",
                  textColor: "white",
                  column: "/d/",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["play "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "play",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
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
                              audio: "/",
                              parts: ["live "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "liv",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                // /ɪd/
                {
                  bgColor: "var(--blue-6)",
                  textColor: "white",
                  column: "/ɪd/",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["visit "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "visit",
                                underline("ed"),
                                " ",
                                phonetics("/ɪd/"),
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
                              audio: "/",
                              parts: ["want "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "want",
                                underline("ed"),
                                " ",
                                phonetics("/ɪd/"),
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
