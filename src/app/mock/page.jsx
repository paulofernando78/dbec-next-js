import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Links } from "@/components/molecules/Links";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { GridLayout } from "@/components/molecules/GridLayout";
import { CardLayout } from "@/components/molecules/CardLayout";
import { FlipCard } from "@/components/molecules/FlipCard/";
import { CardText } from "@/components/molecules/CardText";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Examples } from "@/components/molecules/Examples";
import { Comparison } from "@/components/molecules/Comparison/";
import { Column } from "@/components/molecules/Column/";
import { Notes } from "@/components/molecules/Notes";
import { GuessWord } from "@/components/molecules/GuessWord";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  audio,
  bold,
  italic,
  mark,
  boldMark,
  underline,
  stressed,
  phonetics,
  portuguese,
} from "@/helpers/content";

export default function Mock() {
  return (
    <>
      <Whiteboard
        title="Title (Mock)"
        subtitle="Subtitle"
        description="Description"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>

        <PageSections>
          <Section id="video-player" label="Video Player" heading={3}>
            <VideoPlayer videoId="C8rU4dv2w8Q" />
          </Section>

          {/* AudioPlayer */}
          <Section id="audio-player" heading={3}>
            <AudioPlayer src="/assets/audio/words/a/about-to.mp3" />
          </Section>

          {/* Text only */}
          <Section id="text-only" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: ["..."],
                }),
              ]}
            />
          </Section>

          {/* Line */}
          <Section id="line" heading={3}>
            <Line
              value={[
                ...content({
                  icons: [
                    "us",
                    "uk",
                    "attention",
                    "correct",
                    "incorrect",
                    "compare",
                    "arrow",
                    "variation",
                    "soundVariation",
                    "square",
                  ],
                  parts: [
                    "normal ",
                    audio("/"),
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold-mark"),
                    " ",
                    underline("underline"),
                    " ",
                    stressed("stressed"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
            <Line
              value={[
                ...content({
                  icons: [
                    "us",
                    "uk",
                    "attention",
                    "correct",
                    "incorrect",
                    "compare",
                    "arrow",
                    "variation",
                    "soundVariation",
                  ],
                  parts: [
                    "normal ",
                    audio("/"),
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    mark("mark"),
                    " ",
                    underline("underline"),
                    " ",
                    boldMark("bold-mark"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
          </Section>

          {/* Paragraph */}
          <Section id="paragraph" heading={3}>
            <Paragraph
              value={[
                ...content({
                  icons: [
                    "us",
                    "uk",
                    "attention",
                    "correct",
                    "incorrect",
                    "compare",
                  ],
                  parts: [
                    "normal ",
                    audio("/"),
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    mark("mark"),
                    " ",
                    underline("underline"),
                    " ",
                    boldMark("bold-mark"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
          </Section>

          {/* Line / Paragraph + Media */}
          <Section
            id="line-paragraph-media"
            label="Line / Paragraph + Media"
            heading={3}
          >
            {/* Card Layout */}
            <AudioPlayer src="/assets/audio/words/a/about-to.mp3" />
            <LineBreak />
            <CardLayout mediaPosition="top">
              <Image
                src="/assets/img/general/cat-1.jpg"
                alt="cat"
                width={200}
              />
              <Paragraph
                value={[
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ]}
              />
            </CardLayout>
            <LineBreak />
            <CardLayout mediaPosition="right">
              <Image
                src="/assets/img/general/cat-1.jpg"
                alt="cat"
                width={200}
              />
              <Paragraph
                value={[
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ]}
              />
            </CardLayout>
            <LineBreak />
            <CardLayout mediaPosition="bottom">
              <Image
                src="/assets/img/general/cat-1.jpg"
                alt="cat"
                width={200}
              />
              <Paragraph
                value={[
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ]}
              />
            </CardLayout>
            <LineBreak />
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/cat-1.jpg"
                alt="cat"
                width={200}
              />
              <Paragraph
                value={[
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ]}
              />
            </CardLayout>
          </Section>

          {/* List */}
          <Section id="list" heading={3}>
            <List
              bullet={false}
              items={[
                {
                  value: [
                    ...content({
                      icons: [
                        "us",
                        "uk",
                        "attention",
                        "correct",
                        "incorrect",
                        "compare",
                      ],
  
                      parts: [
                        "normal ",
                        audio("/"),
                        bold("bold"),
                        " ",
                        italic("italic"),
                        " ",
                        mark("mark"),
                        " ",
                        underline("underline"),
                        " ",
                        boldMark("bold-mark"),
                        " ",
                        phonetics("phonetics"),
                        " ",
                        portuguese("portuguese"),
                      ],
                    }),
                  ],
                },
              ]}
            />
            <LineBreak />
            <Line text={["+ bullet"]} />
            <List
              items={[
                {
                  value: [
                    ...content({
                      icons: [
                        "us",
                        "uk",
                        "attention",
                        "correct",
                        "incorrect",
                        "compare",
                      ],
  
                      parts: [
                        "normal ",
                        audio("/"),
                        bold("bold"),
                        " ",
                        italic("italic"),
                        " ",
                        mark("mark"),
                        " ",
                        underline("underline"),
                        " ",
                        boldMark("bold-mark"),
                        " ",
                        phonetics("phonetics"),
                        " ",
                        portuguese("portuguese"),
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      icons: [
                        "us",
                        "uk",
                        "attention",
                        "correct",
                        "incorrect",
                        "compare",
                      ],
  
                      parts: [
                        "normal ",
                        audio("/"),
                        bold("bold"),
                        " ",
                        italic("italic"),
                        " ",
                        mark("mark"),
                        " ",
                        underline("underline"),
                        " ",
                        boldMark("bold-mark"),
                        " ",
                        phonetics("phonetics"),
                        " ",
                        portuguese("portuguese"),
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Notes */}
          <Section id="notes" heading={3}>
            <Notes>
              <Line
                value={[
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ]}
              />
            </Notes>
          </Section>

          <Section id="images" heading={3}>
            <GridLayout>
              {/* Last weekend, Laura went to the beach. */}
              <CardLayout width="max-content" mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/beach.jpg"
                  alt="Laura at the beach"
                />
              </CardLayout>
              {/* Last night, Eric watched a movie. */}
              <CardLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/movie.png"
                  alt="Eric watching a movie at night"
                />
              </CardLayout>
              {/* Yesterday, Laura met Eric in the cafeteria.  */}
              <CardLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/cafeteria.png"
                  alt="Laura and Eric eating lunch in the cafeteria"
                />
              </CardLayout>
            </GridLayout>
          </Section>

          {/* Flip Card 1 Image */}
          <Section id="flip-card-1-image" heading={3}>
            <GridLayout>
              <FlipCard
                backImg="/assets/img/general/cat-1.jpg"
                backAlt="A cat photo"
              />
            </GridLayout>
          </Section>

          {/* Flip Card 2 Images */}
          <Section id="flip-card-2-image" heading={3}>
            <GridLayout>
              <FlipCard
                backImg="/assets/img/general/cat-1.jpg"
                backAlt="A cat photo"
              />
              <FlipCard
                frontImg="/assets/img/general/cat-2.jpg"
                frontAlt="A cat photo"
                backImg="/assets/img/general/cat-3.jpg"
                backAlt="A cat photo"
              />
            </GridLayout>
          </Section>

          {/* Flip Card 3 Images */}
          <Section id="flip-card-3-image" heading={3}>
            <GridLayout>
              <FlipCard
                backImg="/assets/img/general/cat-1.jpg"
                backAlt="A cat photo"
              />
              <FlipCard
                frontImg="/assets/img/general/cat-2.jpg"
                frontAlt="A cat photo"
                backImg="/assets/img/general/cat-3.jpg"
                backAlt="A cat photo"
              />
              <FlipCard
                frontContent={
                  <Line
                    value={[
                      ...content({
                        parts: ["What's the past of ", mark("ask"), "?"],
                      }),
                    ]}
                  />
                }
                backContent={
                  <Line
                    value={[
                      ...content({
                        parts: [mark("asked")],
                      }),
                    ]}
                  />
                }
              />


              <FlipCard
                frontImg=""
                frontAlt=""
                backImg=""
                backAlt=""
              />
              <FlipCard
                frontContent={
                  <Line
                    value={[
                      ...content({
                        parts: [""],
                      }),
                    ]}
                  />
                }
                backContent={
                  <Line
                    value={[
                      ...content({
                        parts: ["asked"],
                      }),
                    ]}
                  />
                }
              />
            </GridLayout>
          </Section>

          {/* Dialogue */}
          <Section id="dialogue" heading={3}>
            <Dialogue
              description="Description"
              imgs={[
                {
                  img: "/assets/img/general/cat-1.jpg",
                  alt: "",
                  width: 200,
                  height: 200,
                },
                {
                  img: "/assets/img/general/cat-2.jpg",
                  alt: "",
                  width: 200,
                  height: 200,
                },
                {
                  img: "/assets/img/general/cat-3.jpg",
                  alt: "",
                  width: 200,
                  height: 200,
                },
              ]}
              audioPlayer="/assets/audio/vocabulary/selaa/lesson-1.mp3"
              lines={[
                {
                  speaker: "speaker:",
                  audio: "/assets/audio/vocabulary/selaa/lesson-1.mp3",
                  text: [
                    ...content({
                      icons: [
                        "us",
                        "uk",
                        "attention",
                        "correct",
                        "incorrect",
                        "compare",
                      ],
  
                      parts: [
                        "normal ",
                        audio("/"),
                        bold("bold"),
                        " ",
                        italic("italic"),
                        " ",
                        mark("mark"),
                        " ",
                        underline("underline"),
                        " ",
                        boldMark("bold-mark"),
                        " ",
                        phonetics("phonetics"),
                        " ",
                        portuguese("portuguese"),
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* Example */}
          <Section id="example" heading={3}>
            <Examples
              items={[
                [
                  ...content({
                    icons: [
                      "us",
                      "uk",
                      "attention",
                      "correct",
                      "incorrect",
                      "compare",
                    ],

                    parts: [
                      "normal ",
                      audio("/"),
                      bold("bold"),
                      " ",
                      italic("italic"),
                      " ",
                      mark("mark"),
                      " ",
                      underline("underline"),
                      " ",
                      boldMark("bold-mark"),
                      " ",
                      phonetics("phonetics"),
                      " ",
                      portuguese("portuguese"),
                    ],
                  }),
                ],
              ]}
            />
          </Section>

          {/* Comparison */}
          <Section id="comparison" heading={3}>
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/.mp3",
                      word: "Example 1",
                      phonetics: "/.../",
                      portuguese: "...",
                    },
                    {
                      audio: "/assets/audio/.mp3",
                      word: "Example 2",
                      phonetics: "/.../",
                      portuguese: "...",
                    },
                  ],
                },
              ]}
            />
          </Section>

          {/* Column */}
          <Section id="column" heading={3}>
            <Column
              width="300"
              cols={[
                // Column 1
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "Column 1",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            {
                              usFlag: true,
                              ukFlag: true,
                              attention: true,
                              correct: true,
                              incorrect: true,
                              audio: "/assets/audio/",
                              part: "normal",
                            },
                            " ",
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                  ],
                },

                // Column 2
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Column 2",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            {
                              usFlag: true,
                              ukFlag: true,
                              attention: true,
                              correct: true,
                              incorrect: true,
                              audio: "/assets/audio/",
                              part: "normal",
                            },
                            " ",
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                  ],
                },

                // Column 3
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Column 3",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            {
                              usFlag: true,
                              ukFlag: true,
                              attention: true,
                              correct: true,
                              incorrect: true,
                              audio: "/assets/audio/",
                              part: "normal",
                            },
                            " ",
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                  ],
                },
              ]}
            />
          </Section>

          {/* Links */}
          <Section id="links" heading={3}>
            {/* <Ribbon label="Links" /> */}
            <Links
              groups={[
                {
                  items: [
                    {
                      href: "/",
                      label: "... ",
                      phonetics: "...",
                    },
                  ],
                },
              ]}
            />
          </Section>

          <Section id="guess-word" heading={3}>
            <GuessWord />
          </Section>

          {/* Radio */}
          <Section id="radio" heading={3}>
            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question: "1. Question",
                    options: [
                      { option: "option 1", isCorrect: true },
                      { option: "option 2", isCorrect: false },
                      { option: "option 3", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          {/* Fill in the Blanks */}
          <Section id="fill-in-the-blanks" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions: "1. Fill in the blanks with the correct answer.",
                blocks: [
                  {
                    block: [
                      { text: "He" },
                      { blank: "is" },
                      { text: "a teacher." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He" },
                      { blank: "teaches" },
                      { text: "in the morning." },
                    ],
                  },
                  {
                    block: [
                      { text: "He" },
                      { blank: "walks" },
                      { text: "to school." },
                    ],
                  },
                ],
              }}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
