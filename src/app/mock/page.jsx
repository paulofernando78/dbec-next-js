import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { Links } from "@/components/molecules/Links";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { InlineText } from "@/components/molecules/InlineText";
import { List } from "@/components/molecules/List";
import { CardText } from "@/components/molecules/CardText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Comparison } from "../../components/molecules/Comparison/";
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
        <Section label="introduction" heading={4}>
          <section className="line-break">
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
          </section>
        </Section>

        {/* <Ribbon label="Audio Player" /> */}
        <AudioPlayer src="/assets/audio/general/about-to.mp3" />

        <section className="line-break">
          {/* <Ribbon label="Inline Text" /> */}
          <InlineText
            text={[
              "normal ",
              {
                usFlag: true,
                ukFlag: true,
                important: true,
                correct: true,
                incorrect: true,
                audio: "/audio/",
                part: "normal",
              },
              " ",
              {
                usFlag: true,
                ukFlag: true,
                important: true,
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
              " ",
              {
                part: "underline",
                type: "underline",
              },
              " end ",
            ]}
          />
        </section>

        <section className="line-break">
          {/* <Ribbon label="List" /> */}
          <List
            bullet={false}
            items={[
              {
                text: [
                  "normal ",
                  {
                    usFlag: true,
                    ukFlag: true,
                    important: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    important: true,
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
                    important: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    important: true,
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="CardText" /> */}
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="Paragraph" /> */}
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
                        important: true,
                        correct: true,
                        incorrect: true,
                        audio: "/audio/",
                        part: "normal",
                      },
                      " ",
                      {
                        usFlag: true,
                        ukFlag: true,
                        important: true,
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="Note" /> */}
          <Note
            items={[
              {
                text: [
                  "normal ",
                  {
                    important: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    important: true,
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="DIALOGUE" /> */}
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
                    important: true,
                    correct: true,
                    incorrect: true,
                    audio: "/audio/",
                    part: "normal",
                  },
                  " ",
                  {
                    important: true,
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="Word Sound" /> */}
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
        </section>

        <section className="line-break">
          {/* <Ribbon label="Exercises" /> */}
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
                {
                  question: "2. Question",
                  options: [
                    { option: "option 1", isCorrect: true },
                    { option: "option 2", isCorrect: false },
                    { option: "option 3", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </section>

        <section className="line-break">
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
        </section>
      </div>
    </>
  );
}
