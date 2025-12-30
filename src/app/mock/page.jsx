import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Card } from "@/components/atoms/Card";
import { Paragraph } from "@/components/molecules/Paragraph";
import { InlineText } from "@/components/molecules/InlineText";
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
        <Ribbon label="INLINE TEXT" />
        <InlineText
          text={[
              "I ",
              {
                audio: "/audio/general/about-to.mp3",
                type: "bold",
                text: "am"
              },
              " a teacher."
            ]}
        />
        <Ribbon label="CARD" />
        <Card>Lorem ipsum ...</Card>
        <Ribbon label="PARAGRAPH" />
        <AudioPlayer src="/audio/audiobooks/starter/a-new-zealand-adventure/auckland.mp3" />
        <Paragraph
          paragraphs={[
            {
              img: "/img/general/cat-1.jpg",
              alt: "",
              width: 200,
              height: 200,
              text: [
                "This is ",
                {
                  type: "bold",
                  text: "important",
                },
                " text.",
              ],
            },
            {
              text: [
                "Another paragraph with ",
                {
                  type: "mark",
                  text: "highlight",
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
                  type: "bold",
                  text: "test",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  type: "italic",
                  text: "test",
                },
                " test ",
                {
                  audio: "/audio/vocabulary/selaa/lesson-1.mp3",
                  type: "mark",
                  text: "test",
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
                  type: "bold",
                  text: "test",
                },
                " test ",
                {
                  type: "italic",
                  text: "test",
                },
                " test ",
                {
                  type: "mark",
                  text: "test",
                },
                " test",
              ],
            },
          ]}
        />
        <Ribbon label="Word Sound" />
        <Comparison
          data={[
            {
              comparison: [
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
