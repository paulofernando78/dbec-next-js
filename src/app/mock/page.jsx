import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
// import { Card } from "@/components/molecules/Card";
import { InlineText } from "@/components/molecules/InlineText";
import { List } from "@/components/molecules/List";
import { Note } from "@/components/molecules/Note";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Comparison } from "../../components/molecules/Comparison/Comparison";
import { AudioPlayer } from "@/components/atoms/AudioPlayer/AudioPlayer";
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
        {/* Audio Player */}
        <Ribbon label="Audio Player" />
        <AudioPlayer src="/audio/general/about-to.mp3" />

        {/* Inline Text */}
        <Ribbon label="Inline Text" />
        <InlineText
          text={[
            {
              audio: "/audio/general/am.mp3",
              text: "Hi",
              type: "bold",
            },
            ". I ",
            {
              audio: "/audio/general/am.mp3",
              text: "am",
              type: "bold",
            },
            " a teacher. I ",
            {
              audio: "/audio/general/work.mp3",
              text: "work",
              type: "bold",
            },
            " at a school.",
          ]}
        />
        <InlineText
          text={[
            {
              correct: true,
              text: "Hi",
              type: "bold",
            },
            ". ",
            {
              incorrect: true,
              text: "Hy",
              type: "bold",
            },
            ". ",
            {
              important: true,
              text: "Attention",
              type: "bold",
            },
            ". ",
          ]}
        />

        {/* Paragraph */}
        <Ribbon label="Paragraph" />
        <Paragraph
          audioPlayer="/audio/general/about-to.mp3"
          paragraphs={[
            {
              lineBreak: true,
              img: "/img/general/cat-1.jpg",
              alt: "a cat photo",
              width: 200,
              height: 200,
              imgPosition: "top",
              text: [
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "bold",
                  type: "bold",
                },
                " text. ",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "mark",
                  type: "mark",
                },
                " text.",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "italic",
                  type: "italic",
                },
                " text.",
              ],
            },
            {
              lineBreak: true,
              img: "/img/general/cat-2.jpg",
              alt: "a cat photo",
              width: 200,
              height: 200,
              imgPosition: "left",
              audioPlayer: "/audio/general/",
              text: [
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "bold",
                  type: "bold",
                },
                " text. ",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "mark",
                  type: "mark",
                },
                " text.",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "italic",
                  type: "italic",
                },
                " text.",
              ],
            },
            {
              img: "/img/general/cat-2.jpg",
              alt: "a cat photo",
              width: 200,
              height: 200,
              imgPosition: "right",
              audioPlayer: "/audio/general/",
              text: [
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "bold",
                  type: "bold",
                },
                " text. ",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "mark",
                  type: "mark",
                },
                " text.",
                "This is ",
                {
                  audio: "/audio/general/",
                  text: "italic",
                  type: "italic",
                },
                " text.",
              ],
            },
          ]}
        />

        {/* List */}
        <Ribbon label="List" />
        <List
          bullet={false}
          items={[
            {
              text: [
                "List 1 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "bold",
                },
                " teste",
              ],
            },
            {
              text: [
                "List 2 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "italic",
                },
                " teste",
              ],
            },
            {
              text: [
                "List 3 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "mark",
                },
                " teste",
              ],
            },
          ]}
        />
        <InlineText text={["+ bullet"]} />
        <List
          items={[
            {
              text: [
                "List 1 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "bold",
                },
                " teste",
              ],
            },
            {
              text: [
                "List 2 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "italic",
                },
                " teste",
              ],
            },
            {
              text: [
                "List 3 ",
                {
                  audio: "/audio/general/about-to.mp3",
                  text: "teste",
                  type: "mark",
                },
                " teste",
              ],
            },
          ]}
        />

        {/* Note */}
        <Ribbon label="Note" />
        <Note
          items={[
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "...",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "...",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "...",
                },
              ],
            },
            {
              text: [
                {
                  audio: "/audio/general/.mp3",
                  text: "...",
                },
              ],
            },
          ]}
        />

        <Ribbon label="DIALOGUE" />
        <Dialogue
          title="Title"
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
                "test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  text: "test",
                  type: "bold",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  text: "test",
                  type: "italic",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  text: "test",
                  type: "mark",
                },
                " test",
              ],
            },
            {
              imgs: [
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
              ],
            },
            {
              speaker: "speaker:",
              audio: "/audio/vocabulary/selaa/lesson-1.mp3",
              text: [
                "test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  text: "test",
                  type: "bold",
                },
                " test ",
                {
                  text: "test",
                  type: "italic",
                },
                " test ",
                {
                  text: "test",
                  type: "mark",
                },
                " test",
              ],
            },
          ]}
        />
        <Ribbon label="Word Sound" />
        <Comparison
          groups={[
            {
              group: [
                {
                  playAudio: "/....mp3",
                  word: "Example 1",
                  phonetics: "/.../",
                  translation: "...",
                },
                {
                  playAudio: "/....mp3",
                  word: "Example 2",
                  phonetics: "/.../",
                  translation: "...",
                },
              ],
            },
          ]}
        />
        <Ribbon label="Exercises" />
        <Radio
          data={{
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
        <FillInTheBlanks
          data={{
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
      </div>
    </>
  );
}
