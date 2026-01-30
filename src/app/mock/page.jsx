import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Links } from "@/components/molecules/Links";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { InlineText } from "@/components/molecules/InlineText";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardText } from "@/components/molecules/CardText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Comparison } from "@/components/molecules/Comparison/";
import { Column } from "@/components/molecules/Column/";
import { Note } from "@/components/molecules/Note";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

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

        <Contents
          items={[
            {
              title: [
                {
                  part: "Components",
                  type: "bold",
                },
              ],
            },
            { href: "audio-player", label: "Audio Player" },
            { href: "line", label: "Line" },
            { href: "list", label: "List" },
            { href: "card-text", label: "CardText" },
            { href: "paragraph", label: "Paragraph" },
            { href: "note", label: "Note" },
            { href: "dialogue", label: "Dialogue" },
            { href: "comparison", label: "Comparison" },
            { href: "column", label: "Column" },
            { href: "links", label: "Links" },
            { href: "radio", label: "Radio" },
            { href: "fill", label: "Fill In the Blanks" },
          ]}
        />

        <Section id="audio-player" label="Audio Player" heading={3}>
          <AudioPlayer src="/assets/audio/general/about-to.mp3" />
        </Section>

        <Section id="line" label="Line" heading={3}>
          <Line
            value={[
              {
                icons: [
                  "us",
                  "uk",
                  "attetion",
                  "correct",
                  "incorrect",
                  "compare",
                ],
              },
              {
                audio: "/audio/",
              },
              "normal ",
              " ",
              {
                part: "italic",
                type: "italic",
              },
              " ",
              {
                part: "mark",
                type: "mark",
              },
              " ",
              {
                part: "bold mark",
                type: "bold-mark",
              },
              " ",
              {
                part: "phonetics",
                type: "phonetics",
              },
              " ",
              {
                part: "underline",
                type: "underline",
              },
              " ",
              {
                part: "portuguese",
                type: "portuguese",
              },
              " ",
            ]}
          />
        </Section>

        <Section id="List" label="List" heading={3}>
          <List
            bullet={false}
            items={[
              {
                text: [
                  "text ",
                  {
                    usFlag: true,
                    ukFlag: true,
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "bold",
                    type: "bold",
                  },
                  " ",
                  {
                    part: "italic",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "mark",
                    type: "mark",
                  },
                  " end ",
                ],
                phonetics: "phonetics",
                portuguese: "portuguese",
              },
            ]}
          />

          <InlineText text={["+ bullet"]} />
          <List
            items={[
              {
                text: [
                  "normal ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "bold",
                    type: "bold",
                  },
                  " ",
                  {
                    part: "italic",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "mark",
                    type: "mark",
                  },
                  " end ",
                ],
                phonetics: "phonetics",
                portuguese: "portuguese",
              },
            ]}
          />
        </Section>

        <Section id="card-text" label="CardText" heading={3}>
          <CardText
            blocks={[
              {
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/general/cat-2.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: ["normal "],
                  },
                ],
              },
              {
                imgs: [
                  {
                    img: "/assets/img/general/cat-3.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: ["normal"],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="paragraph" label="Paragraph" heading={3}>
          <Paragraph
            blocks={[
              // img top
              {
                audioPlayer: "/assets/audio/general/about-to.mp3",
                imgPosition: "top",
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // img right
              {
                audioPlayer: "/assets/audio/general/about-to.mp3",
                imgPosition: "right",
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // img bottom
              {
                audioPlayer: "/assets/audio/general/about-to.mp3",
                imgPosition: "bottom",
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // img left
              {
                audioPlayer: "/assets/audio/general/about-to.mp3",
                imgPosition: "left",
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
              // img top array
              {
                audioPlayer: "/assets/audio/general/about-to.mp3",
                imgPosition: "top",
                imgs: [
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                  {
                    img: "/assets/img/general/cat-1.jpg",
                    alt: "a cat photo",
                    width: 200,
                    height: 200,
                  },
                ],
                lines: [
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      "normal ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        attention: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "bold",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "italic",
                        type: "italic",
                      },
                      " ",
                      {
                        part: "mark",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "phonetics",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "portuguese",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="note" label="Note" heading={3}>
          <Note
            lines={[
              {
                text: [
                  "normal ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "bold",
                    type: "bold",
                  },
                  " ",
                  {
                    part: "italic",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "mark",
                    type: "mark",
                  },
                  " end ",
                ],
                phonetics: "phonetics",
                portuguese: "portuguese",
              },
            ]}
          />
        </Section>

        <Section id="dialogue" label="Dialogue" heading={3}>
          <Dialogue
            imgs={[
              {
                img: "/img/general/cat-1.jpg",
                alt: "",
                width: 200,
                height: 200,
              },
              {
                img: "/img/general/cat-2.jpg",
                alt: "",
                width: 200,
                height: 200,
              },
              {
                img: "/img/general/cat-3.jpg",
                alt: "",
                width: 200,
                height: 200,
              },
            ]}
            audioPlayer="/audio/vocabulary/selaa/lesson-1.mp3"
            lines={[
              {
                speaker: "speaker:",
                audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                text: [
                  "normal ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    attention: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "bold",
                    type: "bold",
                  },
                  " ",
                  {
                    part: "italic",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "mark",
                    type: "mark",
                  },
                  " end ",
                ],
              },
            ]}
          />
        </Section>

        <Section id="comparison" label="Comparison" heading={3}>
          <Comparison
            groups={[
              {
                group: [
                  {
                    audio: "/audio/.mp3",
                    word: "Example 1",
                    phonetics: "/.../",
                    translation: "...",
                  },
                  {
                    audio: "/audio/.mp3",
                    word: "Example 2",
                    phonetics: "/.../",
                    translation: "...",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="column" label="Column" heading={3}>
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

        <Section id="links" label="Links" heading={3}>
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

        <Section id="radio" label="Radio" heading={3}>
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

        <Section id="fill" label="FillInTheBlanks" heading={3}>
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
      </div>
    </>
  );
}
