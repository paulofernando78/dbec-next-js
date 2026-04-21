import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Notes } from "@/components/molecules/Notes";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { GridLayout } from "@/components/molecules/GridLayout";
import { FlipCard } from "@/components/molecules/FlipCard/";
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
  stressed,
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
        <Notes>
          By the end of this class, students will be able to talk about finished
          past experiences, use common regular and irregular past verbs, and ask
          follow-up questions about yesterday, last weekend, or last month, etc.
        </Notes>

        <PageSections>
          <Section id="introduction" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    bold(
                      "Look at the pictures. Describe what you see, then flip each card to listen to the sentence.",
                    ),
                  ],
                }),
              ]}
            />
            <LineBreak />
            <GridLayout>
              {/* Last weekend, Laura went to the beach. */}
              <FlipCard
                frontImg="/assets/img/cefr/a2/describe-past-experiences/beach.jpg"
                frontAlt="Laura on the beach"
                backContent={
                  <Line
                    value={[
                      ...content({
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/last-weekend-laura-went-to-the-beach.mp3",
                        parts: ["Last weekend, Laura went to the beach."],
                      }),
                    ]}
                  />
                }
              />
              {/* Last night, Eric watched a movie. */}
              <FlipCard
                frontImg="/assets/img/cefr/a2/describe-past-experiences/movie.png"
                frontAlt="Eric watching a movie at night"
                backContent={
                  <Line
                    value={[
                      ...content({
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/last-night-eric-watched-a-movie.mp3",
                        parts: ["Last night, Eric watched a movie."],
                      }),
                    ]}
                  />
                }
              />
              {/* Yesterday, Laura met Eric in the cafeteria.  */}
              <FlipCard
                frontImg="/assets/img/cefr/a2/describe-past-experiences/cafeteria.png"
                frontAlt="Laura and Eric eating lunch in the cafeteria"
                backContent={
                  <Line
                    value={[
                      ...content({
                        audio:
                          "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/yesterday-laura-met-eric-in-the-school-cafeteria.mp3",
                        parts: [
                          "Yesterday, Laura met Eric in the school cafeteria.",
                        ],
                      }),
                    ]}
                  />
                }
              />
            </GridLayout>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the correct answer.",
                questions: [
                  // . Where did Laura go last weekend?
                  {
                    question: "1. Where did Laura go last weekend?",
                    options: [
                      { option: "She watched a movie.", isCorrect: false },
                      { option: "She went to the beach.", isCorrect: true },
                      {
                        option: "She met Eric in the school cafeteria.",
                        isCorrect: false,
                      },
                    ],
                  },
                  // 2. What did Eric do last night?
                  {
                    question: "2. What did Eric do last night?",
                    options: [
                      { option: "He went to the beach.", isCorrect: false },
                      {
                        option: "He met Laura in the school cafeteria.",
                        isCorrect: false,
                      },
                      { option: "He watched a movie.", isCorrect: true },
                    ],
                  },
                  // 3. Where did Laura meet Eric yesterday?
                  {
                    question: "3. Where did Laura meet Eric yesterday?",
                    options: [
                      {
                        option: "She met him at the movies.",
                        isCorrect: false,
                      },
                      {
                        option: "She met him in the cafeteria.",
                        isCorrect: true,
                      },
                      { option: "She met him at the beach.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <figure className="text-align-center">
              <Image
                src="/assets/img/cefr/a2/describe-past-experiences/cafeteria-lunch.png"
                alt="Eric and Laura at the school cafeteria"
                ratio="16-9"
              />
              <LineBreak />
              <figcaption>
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/cefr/a2/describe-the-past/presentation/yesterday-laura-met-eric-in-the-school-cafeteria-they-had-lunch-together.mp3",
                      parts: [
                        "Yesterday, Laura met Eric in the school cafe",
                        stressed("te"),
                        "ria. They had lunch together.",
                      ],
                    }),
                  ]}
                />
              </figcaption>
            </figure>
            <LineBreak />
            <AudioPlayer src="/assets/audio/cefr/a2/describe-the-past/presentation/dialogue.mp3" />
            <LineBreak />
            <Dialogue
              lines={[
                // Eric: Hey Laura, how’s it going?
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Hey Laura, how’s it going?"],
                    }),
                  ],
                },
                // Laura: Pretty good. How are you?
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Pretty good. How are you?"],
                    }),
                  ],
                },
                // Eric: I’m good. So, how was your weekend?
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I’m good. So, how was your weekend?"],
                    }),
                  ],
                },
                // Laura: It was great! I was going to visit my parents, but my dad was sick. So, I went to the beach.
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: [
                        "It was great! I was going to visit my parents, but my dad was sick. So, I went to the beach.",
                      ],
                    }),
                  ],
                },
                // Eric: Oh, I hope your dad gets better soon.
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Oh, I hope your dad gets better soon."],
                    }),
                  ],
                },
                // Laura: What about you?
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What about you?"],
                    }),
                  ],
                },
                // Eric: I wanted to go out, but I stayed home and watched a movie.
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: [
                        "I wanted to go out, but I stayed home and watched a movie.",
                      ],
                    }),
                  ],
                },
                // Laura: Sounds you had fun! What movie did you watch?
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: [
                        "Oh really? Sounds you had fun! What movie did you watch?",
                      ],
                    }),
                  ],
                },
                // Eric: You know I enjoy watching documentaries... I watched Star Wars: The Last Jedi, and I loved it.
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: [
                        "You know I enjoy documentaries, right? But this time I watched Star Wars: The Last Jedi, and I loved it.",
                      ],
                    }),
                  ],
                },
                // Cool! Next time, let's watch another Star Wars movie together.
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: [
                        "Cool! Next time, let's watch another Star Wars movie together.",
                      ],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Sounds great!"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="language-focus" heading={3}>
            <LineBreak />
            <Column
              width="240"
              cols={[
                // Positive
                {
                  bgColor: "var(--green-5)",
                  textColor: "white",
                  column: "Positive",
                  blocks: [
                    // Last weekend, Laura went to the beach.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/last-weekend-laura-went-to-the-beach.mp3",
                              parts: [
                                "Last weekend, Laura ",
                                mark("went"),
                                " to the beach.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Last night, Eric watched a movie.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a2/describe-the-past/languague-focus/positive/last-night-eric-watched-a-movie.mp3",
                              parts: [
                                "Last night, Eric ",
                                mark("watched"),
                                " a movie.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Yesterday, Laura met Eric in the cafeteria.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a2/describe-the-past/languague-focus/positive/yesterday-laura-met-eric-in-the-school-cafeteria.mp3",
                              parts: [
                                "Yesterday, Laura ",
                                mark("met"),
                                " Eric in the cafeteria.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // They had lunch together.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio:
                                "/assets/audio/cefr/a2/describe-the-past/languague-focus/positive/they-had-lunch-together.mp3",
                              parts: ["They ", mark("had"), "lunch together."],
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
                    // She didn’t go to school.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/assets/audio/cefr/a2/describe-the-past/language-focus/negative/she-didnt-go-to-school.mp3"],
                              parts: [
                                "She ",
                                mark("didn’t"),
                                " ",
                                mark("go"),
                                " to school.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // He didn’t watch the news.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                "He ",
                                mark("didn’t"),
                                " ",
                                mark(" watch"),
                                " watch a docu",
                                stressed("me"),
                                "ntary.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // She didn’t meet Eric in the classroom.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                "She ",
                                mark("didn’t"),
                                " ",
                                mark("meet"),
                                " Eric in the classroom.",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // They didn’t have breakfast.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                "They ",
                                mark("didn’t"),
                                " ",
                                mark("have"),
                                " breakfast.",
                              ],
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
                    // Did Laura go to the beach?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                mark("Did"),
                                " she ",
                                mark("go"),
                                " to the beach?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Did Laura go to school?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                mark("Did"),
                                " she ",
                                mark("go"),
                                " to school?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Did Eric watch a movie?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                mark("Did"),
                                " Eric ",
                                mark("watch"),
                                " a movie?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // Did Eric watch a documentary?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                mark("Did"),
                                " Eric ",
                                mark("watch"),
                                " a documentary?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Did Laura meet Eric in the school cafeteria?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: [
                                mark("Did"),
                                " Laura ",
                                mark("meet"),
                                " Eric in the school cafeteria?",
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
                  bgColor: "var(--yellow-6)",
                  textColor: "white",
                  column: "Short answer",
                  blocks: [
                    // Yes, she did.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["Yes, she ", mark("did"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    // No, she didn’t.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["No, she ", mark("didn’t"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Yes, he did.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["Yes, he ", mark("did"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    // No, he didn’t.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["No, he ", mark("didn’t"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Yes, they did.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["Yes, they ", mark("did"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    // No, they didn’t.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["No, they ", mark("didn’t"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Yes, they did.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["Yes, they ", mark("did"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    // No, they didn’t.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: ["/"],
                              parts: ["No, they ", mark("didn’t"), "."],
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
                  icons: ["attention"],
                  parts: [
                    "Regular verbs usually end in ",
                    mark("-ed"),
                    ", but some common verbs are irregular and change form completely, like ",
                    mark("go - went"),
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
                    // ask
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
                              parts: ["asked"],
                            }),
                          ],
                        },
                      ],
                    },
                    // play
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
                              parts: ["played"],
                            }),
                          ],
                        },
                      ],
                    },
                    // study
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
                              parts: ["studied"],
                            }),
                          ],
                        },
                      ],
                    },
                    // work
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
                              parts: ["worked"],
                            }),
                          ],
                        },
                      ],
                    },
                    // watch
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["watch "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["watched"],
                            }),
                          ],
                        },
                      ],
                    },
                    // visit
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
                              parts: ["visited"],
                            }),
                          ],
                        },
                      ],
                    },
                    // live
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
                              parts: ["lived"],
                            }),
                          ],
                        },
                      ],
                    },
                    // want
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
                              parts: ["wanted"],
                            }),
                          ],
                        },
                      ],
                    },
                    // clean
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["clean "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["cleaned"],
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
                    // eat
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
                              parts: ["ate"],
                            }),
                          ],
                        },
                      ],
                    },
                    // do
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
                              parts: ["did"],
                            }),
                          ],
                        },
                      ],
                    },
                    // go
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["go "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["went"],
                            }),
                          ],
                        },
                      ],
                    },
                    // have
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["have "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["had"],
                            }),
                          ],
                        },
                      ],
                    },
                    // make
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["make "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["made"],
                            }),
                          ],
                        },
                      ],
                    },
                    // see
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["see "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["saw"],
                            }),
                          ],
                        },
                      ],
                    },
                    // come
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["come "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["came"],
                            }),
                          ],
                        },
                      ],
                    },
                    // get
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["get "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: ["got"],
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
                    // wash -> washed /t/
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["wash "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "wash",
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
                    // clean -> cleaned /d/
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["clean "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "clean",
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
                    // need -> needed /ɪd/
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: ["need "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                "need",
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
            <Line
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
