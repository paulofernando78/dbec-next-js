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
          important={true}
          correct={true}
          incorrect={true}
          audio="/audio/"
          text={[
            "start ",
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
          ]}
          phonetics="phonetics"
          portuguese="portuguese"
        />

        {/* Paragraph */}
        <Ribbon label="Paragraph" />
        <Paragraph
          paragraphs={[
            {
              lineBreak: true,
              audioPlayer: "/audio/general/about-to.mp3",
              img: "/img/general/cat-1.jpg",
              alt: "a cat photo",
              width: 200,
              height: 200,
              imgPosition: "top",
              important: true,
              correct: true,
              incorrect: true,
              audio: "/audio/",
              text: [
                "This is ",
                {
                  important: true,
                  correct: true,
                  incorrect: true,
                  audio: "/audio/general/",
                  part: "bold",
                  type: "bold",
                },
                " part. ",
                "This is ",
                {
                  audio: "/audio/general/",
                  part: "mark",
                  type: "mark",
                },
                " part.",
                "This is ",
                {
                  audio: "/audio/general/",
                  part: "italic",
                  type: "italic",
                },
                " text. ",
              ],
              phonetics: "phonetics",
              portuguese: "portuguese",
            },
          ]}
        />

        {/* List */}
        <Ribbon label="List" />
        <List
          bullet={false}
          items={[
            {
              important: true,
              correct: true,
              incorrect: true,
              audio: "/audio/",
              text: [
                "start ",
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
              important: true,
              correct: true,
              incorrect: true,
              audio: "/audio/",
              text: [
                "start ",
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

        {/* Note */}
        <Ribbon label="Note" />
        <Note
          items={[
            {
              important: true,
              correct: true,
              incorrect: true,
              audio: "/audio/general/about-to.mp3",
              text: [
                "start ",
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
                  part: "bold",
                  type: "bold",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  part: "italic",
                  type: "italic",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  part: "mark",
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
                  part: "test",
                  type: "bold",
                },
                " test ",
                {
                  part: "test",
                  type: "italic",
                },
                " test ",
                {
                  part: "test",
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
