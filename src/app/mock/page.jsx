"use client";

import { GridLayout } from "@/components/molecules/GridLayout";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionaryArea } from "@/components/molecules/DictionaryArea";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { MediaContainer } from "@/components/molecules/MediaContainer";
import { Links } from "@/components/molecules/Links";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { FlipCards } from "@/components/molecules/FlipCards/";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Examples } from "@/components/molecules/Examples";
import { Comparison } from "@/components/molecules/Comparison";
import { Column } from "@/components/molecules/Column/";
import { MediaLayout } from "@/components/molecules/MediaLayout";
import { Notes } from "@/components/molecules/Notes";
import { Guess } from "@/components/molecules/Guess";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import {
  content,
  icon,
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
        <DictionaryArea />

        <PageSections>
          <Section id="video-player" label="Video Player" heading={3}>
            <VideoPlayer videoId="C8rU4dv2w8Q" />
          </Section>

          {/* AudioPlayer */}
          <Section id="audio-player" heading={3}>
            <AudioPlayer src="/assets/audio/words/a/about-to.mp3" />
          </Section>

          {/* Line */}
          <Section id="line" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    icon("us"),
                    icon("uk"),
                    icon("attention"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("compare"),
                    icon("arrow"),
                    icon("variation"),
                    icon("soundVariation"),
                    icon("square"),
                    audio("/"),
                    "normal",
                    " ",
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    underline("underline"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold mark"),
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
          </Section>

          {/* Paragraph */}
          <Section id="paragraph" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    icon("us"),
                    icon("uk"),
                    icon("attention"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("compare"),
                    icon("arrow"),
                    icon("variation"),
                    icon("soundVariation"),
                    icon("square"),
                    audio("/"),
                    "normal",
                    " ",
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    underline("underline"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold mark"),
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
          </Section>

          {/* Media Container + Line / Paragraph */}
          <Section
            id="line-paragraph-media"
            label="Media Container + Line / Paragraph"
            heading={3}
          >
            <LineBreak />

            <MediaContainer
              groups={[
                {
                  mediaPosition: "top",
                  img: "cat.avif",
                  line: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                  paragraph: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
                {
                  mediaPosition: "right",
                  img: "cat.avif",
                  line: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                  paragraph: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
                {
                  mediaPosition: "bottom",
                  img: "cat.avif",
                  line: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                  paragraph: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
                {
                  mediaPosition: "left",
                  img: "cat.avif",
                  line: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                  paragraph: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          {/* List */}
          <Section id="list" heading={3}>
            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
              ]}
            />
            <LineBreak />
            <Line text={["+ ordered"]} />
            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["... "],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["... "],
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
                    parts: ["... "],
                  }),
                ]}
              />
            </Notes>
          </Section>

          <Section id="images" heading={3}>
            <GridLayout>
              {/* Last weekend, Laura went to the beach. */}
              <MediaLayout width="max-content" mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/beach.jpg"
                  alt="Laura at the beach"
                />
              </MediaLayout>
              {/* Last night, Eric watched a movie. */}
              <MediaLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/movie.png"
                  alt="Eric watching a movie at night"
                />
              </MediaLayout>
              {/* Yesterday, Laura met Eric in the cafeteria.  */}
              <MediaLayout mediaPosition="top">
                <Image
                  src="/assets/img/cefr/a2/describe-past-experiences/cafeteria.png"
                  alt="Laura and Eric eating lunch in the cafeteria"
                />
              </MediaLayout>
            </GridLayout>
          </Section>

          {/* Flip Card */}
          <Section id="flip-card" heading={3}>
            <FlipCards
              cards={[
                {
                  backImg: "cat",
                },
                {
                  frontImg: "cat",
                  backImg: "cat",
                },
                {
                  frontContent: (
                    <Line
                      value={[
                        ...content({
                          parts: ["What’s the past of ask?"],
                        }),
                      ]}
                    />
                  ),
                  backContent: (
                    <Line
                      value={[
                        ...content({
                          parts: [mark("asked")],
                        }),
                      ]}
                    />
                  ),
                },
              ]}
            />
          </Section>

          {/* Dialogue */}
          <Section id="dialogue" heading={3}>
            <Dialogue
              audioPlayer="/assets/audio/vocabulary/selaa/lesson-1.mp3"
              lines={[
                {
                  speaker: "speaker:",
                  text: [
                    ...content({
                      parts: ["...", " ", audio("/")],
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
                    parts: ["..."],
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
                            ...content({
                              parts: [audio("/"), "..."],
                            }),
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
                            ...content({
                              parts: [audio("/"), "..."],
                            }),
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
                            ...content({
                              parts: [audio("/"), "..."],
                            }),
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
                      description: "... ",
                      phonetics: "...",
                      external: true,
                    },
                  ],
                },
              ]}
            />
          </Section>

          {/* Guess */}
          <Section id="guess" heading={3}>
            <Guess
              words={[
                {
                  word: "cat",
                  img: 0,
                },
                {
                  word: "dog",
                  img: 0,
                },
                {
                  word: "year's time",
                  img: 0,
                },
              ]}
            />
          </Section>

          {/* Radio */}
          <Section id="radio" heading={3}>
            <Radio
              exercise={{
                instruction: "Choose the best response.",
                description: "description",
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
              showWordBank={true}
              numbered={true}
              exercise={{
                instruction: "Fill in the blanks.",
                description: "description",
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
