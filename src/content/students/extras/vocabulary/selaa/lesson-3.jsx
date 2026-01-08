import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonThree() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 3 • Ted's Day at School"
      />
      <div className="line-break">
        <Dialogue
          title="Lesson 3 • Ted's Day at School"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-3.mp3"
          lines={[
            {
              text: [
                {
                  part: "Ted tells his parents he did poorly on his chemistry test. They tell him he needs to get serious and study more.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "How was your day at school today, Ted?",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Bad. I had a chemistry test, and I ",
                {
                  audio: "/audio/general/blew-it.mp3",
                  part: "blew it",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Maybe if you didn't ",
                {
                  audio: "/audio/general/cut-class.mp3",
                  part: "cut class",
                  type: "mark",
                },
                " so often, you'd do better.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "That's right, son. Stop ",
                {
                  audio: "/audio/general/slacking-off.mp3",
                  part: "slacking off",
                  type: "mark",
                },
                " and start ",
                {
                  audio: "/audio/general/hitting-the-books.mp3",
                  part: "hitting the books",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "But I ",
                {
                  audio: "/audio/general/cant-stand.mp3",
                  part: "can't stand",
                  type: "mark",
                },
                " chemistry class. Besides, it's a ",
                {
                  audio: "/audio/general/lost-cause.mp3",
                  part: "lost cause",
                  type: "mark",
                },
                ". That class is way ",
                {
                  audio: "/audio/general/over-my-head.mp3",
                  part: "over my head",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "You need to ",
                {
                  audio: "/audio/general/buckle-down.mp3",
                  part: "buckle down",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "When I'm a famous musician, people won't ",
                {
                  audio: "/audio/general/give-a-hoot.mp3",
                  part: "give a hoot",
                  type: "mark",
                },
                " about my knowledge of atoms and molecules.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "That's ",
                {
                  audio: "/audio/general/beside-the-point.mp3",
                  part: "beside the point",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "We know you have your ",
                {
                  audio: "/audio/general/heart-set-on.mp3",
                  part: "heart set on",
                  type: "mark",
                },
                " going to New York University.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "And you don't ",
                {
                  audio: "/audio/general/stand-a-chance.mp3",
                  part: "stand a chance",
                  type: "mark",
                },
                " of getting in there with such poor grades!",
              ],
            },
          ]}
        />
        <Ribbon label="Exercises" />
        <Radio
          exercise={{
            instruction: "Choose the best response.",
            questions: [
              {
                question: "1. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "2. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "3. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "4. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "5. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "6. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "7. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question: "8. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
