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
  audio,
  wordAudio,
  bold,
  mark,
  underline,
  stressed,
  phonetics,
  portuguese,
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
                                audio(
                                  "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/last-weekend-laura-went-to-the-beach.mp3",
                                ),
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
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/last-night-eric-watched-a-movie.mp3",
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
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/yesterday-laura-met-eric-in-the-school-cafeteria.mp3",
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
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/positive/they-had-lunch-together.mp3",
                              parts: ["They ", mark("had"), " lunch together."],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/negative/she-didnt-go-to-school.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/negative/he-didnt-watch-a-documentary.mp3",
                              ],
                              parts: [
                                "He ",
                                mark("didn’t"),
                                " ",
                                mark(" watch"),
                                " a docu",
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/negative/she-didnt-meet-eric-in-the-classroom.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/negative/they-didnt-have-breakfast.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-Laura-go-to-the-beach.mp3",
                              ],
                              parts: [
                                mark("Did"),
                                " Laura ",
                                mark("go"),
                                " to the beach?",
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // Did Laura go to school?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-laura-visit-her-parents.mp3",
                              ],
                              parts: [
                                mark("Did"),
                                " Laura ",
                                mark("visit"),
                                " her parents?",
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-eric-watch-a-moive.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-eric-watch-a-documentary.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-laura-meet-eric-in-the-school-cafeteria.mp3",
                              ],
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
                    // Did Laura meet Eric in the classroom?
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/question/did-laura-meet-eric-in-the-classroom.mp3",
                              ],
                              parts: [
                                mark("Did"),
                                " Laura ",
                                mark("meet"),
                                " Eric in the classroom?",
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/yes-she-did.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/no-she-didnt.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/yes-he-did.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/no-he-didnt.mp3",
                              ],
                              parts: ["No, he ", mark("didn’t"), "."],
                            }),
                          ],
                        },
                      ],
                    },
                    {
                      lineBreak: true,
                    },
                    // Yes, she did.
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/yes-she-did.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/no-she-didnt.mp3",
                              ],
                              parts: ["No, she ", mark("didn’t"), "."],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/yes-they-did.mp3",
                              ],
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
                              audio: [
                                "/assets/audio/cefr/a2/describe-the-past/language-focus/short-answer/no-they-didnt.mp3",
                              ],
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
                    "As a general rule, the ending ",
                    mark("-ed"),
                    " regular verbs can have 3 different sounds.",
                    portuguese(
                      "Como regra geral, a terminação -ed dos verbos regulares pode ter 3 sons diferentes.",
                    ),
                  ],
                }),
              ]}
            />
            <LineBreak />
            {/* /t/ after voiceless sounds like p, k, f, s. */}
            <Line
              value={[
                ...content({
                  audio: [
                    "/assets/audio/cefr/a2/describe-the-past/-ed-endings/t.mp3",
                  ],
                  parts: [
                    phonetics("/t/"),
                    " after voiceless sounds like ",
                    mark("p"),
                    ", ",
                    mark("k"),
                    ", ",
                    mark("f"),
                    ", ",
                    mark("s"),
                    ".",
                  ],
                }),
              ]}
            />

            {/* /d/ after voiced sounds like vowels, b, g, m, v, z. */}
            <Line
              value={[
                ...content({
                  audio: ["/"],
                  parts: [
                    phonetics("/d/"),
                    " after voiced sounds like vowels, ",
                    mark("b"),
                    ", ",
                    mark("g"),
                    ", ",
                    mark("m"),
                    ", ",
                    mark("v"),
                    ", ",
                    mark("z"),
                    ".",
                  ],
                }),
              ]}
            />

            {/* /ɪd/ after verbs ending in /t/ or /d/. */}
            <Line
              value={[
                ...content({
                  audio: [
                    "/assets/audio/cefr/a2/describe-the-past/-ed-endings/d2.mp3",
                  ],
                  parts: [
                    phonetics("/ɪd/"),
                    " after verbs ending in ",
                    mark("/t/"),
                    " or ",
                    mark("/d/"),
                    ".",
                  ],
                }),
              ]}
            />
            <LineBreak />
            {/* Regular / Irregular Verbs */}
            <Line
              value={[
                ...content({
                  icons: ["attention"],
                  parts: ["Common list of regular and irregular verbs "],
                }),
              ]}
            />
            <LineBreak />
            <Column
              width="250"
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
                              parts: [audio("ask.mp3"), "ask "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("asked.mp3"),
                                "ask",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
                                " ",
                                portuguese("perguntar"),
                              ],
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
                              parts: [audio("clean.mp3"), "clean "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("cleaned.mp3"),
                                "clean",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                                " ",
                                portuguese("limpar"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // help
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [audio("help.mp3"), "help "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("helped.mp3"),
                                "help",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
                                " ",
                                portuguese("ajudar"),
                              ],
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
                              parts: [audio("live1.mp3"), "live "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("lived.mp3"),
                                "liv",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                                " ",
                                portuguese("morar"),
                              ],
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
                              parts: [audio("play.mp3"), "play "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("played.mp3"),
                                "play",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                                " ",
                                portuguese("jogar / brincar"),
                              ],
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
                              parts: [audio("study.mp3"), "study "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("studied.mp3"),
                                "studi",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                                " ",
                                portuguese("estudar"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // use
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [audio("use-verb.mp3"), "use "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("used.mp3"),
                                "us",
                                underline("ed"),
                                " ",
                                phonetics("/d/"),
                                " ",
                                portuguese("usar"),
                              ],
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
                              parts: [audio("visit.mp3"), "visit "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("visited.mp3"),
                                "visit",
                                underline("ed"),
                                " ",
                                phonetics("/ɪd/"),
                                " ",
                                portuguese("visitar"),
                              ],
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
                              parts: [audio("want.mp3"), "want "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("wanted.mp3"),
                                "want",
                                underline("ed"),
                                " ",
                                phonetics("/ɪd/"),
                                " ",
                                portuguese("querer"),
                              ],
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
                              parts: [audio("watch.mp3"), "watch "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("watched.mp3"),
                                "watch",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
                                " ",
                                portuguese("assistir"),
                              ],
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
                              parts: [audio("work.mp3"), "work "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("worked.mp3"),
                                "work",
                                underline("ed"),
                                " ",
                                phonetics("/t/"),
                                " ",
                                portuguese("trabalhar"),
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
                    // come
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/",
                              parts: [audio("come.mp3"), "come "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("came.mp3"),
                                "came",
                                " ",
                                phonetics("/keɪm/"),
                                " ",
                                portuguese("vir"),
                              ],
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
                              parts: [audio("do.mp3"), "do "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("did.mp3"),
                                "did",
                                " ",
                                phonetics("/dɪd/"),
                                " ",
                                portuguese("fazer"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // eat
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [audio("eat.mp3"), "eat "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("ate.mp3"),
                                "ate",
                                " ",
                                phonetics("/eɪt/"),
                                " ",
                                portuguese("comer"),
                              ],
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
                              parts: [audio("get.mp3"), "get "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("got.mp3"),
                                "got",
                                " ",
                                phonetics("/gɑːt/"),
                                " ",
                                portuguese("conseguir / pegar"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // give
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [audio("give.mp3"), "give "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("gave.mp3"),
                                "gave",
                                " ",
                                phonetics("/geɪv/"),
                                " ",
                                portuguese("dar"),
                              ],
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
                              parts: [audio("go.mp3"), "go "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("went.mp3"),
                                "went",
                                " ",
                                phonetics("/went/"),
                                " ",
                                portuguese("ir"),
                              ],
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
                              parts: [audio("have.mp3"), "have "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("had.mp3"),
                                "had",
                                " ",
                                phonetics("/hæd/"),
                                " ",
                                portuguese("ter"),
                              ],
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
                              parts: [audio("make.mp3"), "make "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("made.mp3"),
                                "made",
                                " ",
                                phonetics("/meɪd/"),
                                " ",
                                portuguese("fazer"),
                              ],
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
                              parts: [audio("see.mp3"), "see "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("saw.mp3"),
                                "saw",
                                " ",
                                phonetics("/sɔː/"),
                                " ",
                                portuguese("ver"),
                              ],
                            }),
                          ],
                        },
                      ],
                    },
                    // take
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: [audio("take.mp3"), "take "],
                            }),
                            ...content({
                              icons: ["arrow"],
                              parts: [
                                audio("took.mp3"),
                                "took",
                                " ",
                                phonetics("/tʊk/"),
                                " ",
                                portuguese("pegar / levar"),
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
