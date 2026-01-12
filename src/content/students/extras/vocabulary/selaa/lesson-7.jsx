import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
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
        <div className="dictionary-area">
          <Dictionary />
        </div>
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
              text: ["No. But I am prepared to hire you to run the business."],
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
              text: ["Why not?"],
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
              text: ["Do I have to do the baking?"],
            },
            {
              speaker: "Susan:",
              text: ["No. You'll just manage the business side."],
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
                  "1. Bob was surprised to see his wife up ____ and early in the morning.",
                options: [
                  { option: "light", isCorrect: false },
                  { option: "bright", isCorrect: true },
                  { option: "ready", isCorrect: false },
                ],
              },
              {
                question:
                  "2. Last week I worked 80 hours. I really worked like a ____.",
                options: [
                  { option: "dog", isCorrect: true },
                  { option: "cat", isCorrect: false },
                  { option: "squirrel", isCorrect: false },
                ],
              },
              {
                question:
                  "3. Bob had never baked anything before in his life. He didn’t even have a ____ about how to turn the oven on.",
                options: [
                  { option: "hint", isCorrect: false },
                  { option: "suggestion", isCorrect: false },
                  { option: "clue", isCorrect: true },
                ],
              },
              {
                question:
                  "4. If you need to learn something quickly, you’d better take a ____ course.",
                options: [
                  { option: "crash", isCorrect: true },
                  { option: "fast", isCorrect: false },
                  { option: "beginner’s", isCorrect: false },
                ],
              },
              {
                question:
                  "5. Bob wasn’t sure he wanted to work for his wife. He had ____ feelings.",
                options: [
                  { option: "nervous", isCorrect: false },
                  { option: "mixed", isCorrect: true },
                  { option: "confused", isCorrect: false },
                ],
              },
              {
                question:
                  "6. Jennifer’s boss is lousy and her salary is low. She’s not a happy ____.",
                options: [
                  { option: "scout", isCorrect: false },
                  { option: "tourist", isCorrect: false },
                  { option: "camper", isCorrect: true },
                ],
              },
              {
                question:
                  "7. Bob decided to work for Susan. He figured he’d give it a ____.",
                options: [
                  { option: "shot", isCorrect: true },
                  { option: "pop", isCorrect: false },
                  { option: "choice", isCorrect: false },
                ],
              },
              {
                question:
                  "8. Nicole was up all night finishing her Spanish homework. She didn’t sleep a ____.",
                options: [
                  { option: "drink", isCorrect: false },
                  { option: "blink", isCorrect: false },
                  { option: "wink", isCorrect: true },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
