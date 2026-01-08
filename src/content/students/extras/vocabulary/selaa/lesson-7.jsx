import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonSeven() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 7 • Susan Hires Bob to Run Her Business"
      />
      <div className="line-break">
        <Dialogue
          title="Lesson 7 • Susan Hires Bob to Run Her Business"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-7.mp3"
          lines={[
            {
              text: [
                {
                  part: "Susan stays up all night thinking about her cookie business. In the morning, she discusses it with Bob. Bob agrees to work for her.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "You're up ",
                {
                  audio: "/assets/audio/general/bright-and-early.mp3",
                  part: "bright and early",
                  type: "mark",
                },
                " this morning, Susan.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "I didn't ",
                {
                  audio: "/assets/audio/general/sleep-a-wink.mp3",
                  part: "sleep a wink",
                  type: "mark",
                },
                ". I was awake all night thinking about the new business.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Running your own business is lots of work. Are you prepared to ",
                {
                  audio: "/assets/audio/general/work-like-a-dog.mp3",
                  part: "work like a dog",
                  type: "mark",
                },
                "?",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "No. But I am prepared to hire you to run the business.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "You want me to run a cookie business? ",
                {
                  audio: "/assets/audio/general/fat-chance.mp3",
                  part: "Fat chance",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Why not?",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "I don't ",
                {
                  audio: "/assets/audio/general/have-a-clue.mp3",
                  part: "have a clue",
                  type: "mark",
                },
                " about making cookies. I don't even know how to turn the oven on!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "I'll give you a ",
                {
                  audio: "/assets/audio/general/crash-course.mp3",
                  part: "crash course",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Do I have to do the baking?",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "No. You'll just manage the business side.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                {
                  audio: "/assets/audio/general/needless-to-say.mp3",
                  part: "Needless to say",
                  type: "mark",
                },
                ", I have ",
                {
                  audio: "/assets/audio/general/mixed-feelings.mp3",
                  part: "mixed feelings",
                  type: "mark",
                },
                " about working for you.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "I'll be nice. I promise you'll be a ",
                {
                  audio: "/assets/audio/general/happy-camper.mp3",
                  part: "happy camper",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Okay. Let's ",
                {
                  audio: "/assets/audio/general/give-it-a-shot.mp3",
                  part: "give it a shot",
                  type: "mark",
                },
                ", boss!",
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
                question:
                  "1. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "2. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "3. ",
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
                question:
                  "5. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "6. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "7. ",
                options: [
                  { option: "", isCorrect: true },
                  { option: "", isCorrect: false },
                  { option: "", isCorrect: false },
                ],
              },
              {
                question:
                  "8. ",
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
