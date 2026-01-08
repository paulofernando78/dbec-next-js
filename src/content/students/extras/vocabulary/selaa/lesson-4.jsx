import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonFour() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 4 • Nicole's Day at School"
      />
      <div className="line-break">
        <Dialogue
          title="Lesson 4 • Nicole's Day at School"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-4.mp3"
          lines={[
            {
              text: [
                {
                  part: "Nicole tells her mother Susan about her suсcessful presentation at school. Her brother Ted overhears and interrupts the conversation.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "How was your day at school today, Nicole?",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "It was great, Mom. I gave a presentation on Hillary Clinton in government class. Afterwards, my teacher ",
                {
                  audio: "/audio/general/paid-me-a-compliment.mp3",
                  part: "paid me a compliment",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "What did she say?",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "She said my presentation was ",
                {
                  audio: "/audio/general/head-and-shoulders-above.mp3",
                  part: "head and shoulders above",
                  type: "mark",
                },
                " the others.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/way-to-go.mp3",
                  part: "Way to go!",
                  type: "mark",
                },
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "She also said I should ",
                {
                  audio: "/audio/general/go-into-politics.mp3",
                  part: "go into politics",
                  type: "mark",
                },
                ", just like Hillary.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "You're so ",
                {
                  audio: "/audio/general/gung-ho.mp3",
                  part: "gung ho",
                  type: "mark",
                },
                " about school. It drives me crazy.",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Ted, don't ",
                {
                  audio: "/audio/general/butt-in.mp3",
                  part: "butt in",
                  type: "mark",
                },
                "! You're just jealous.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Right. You ",
                {
                  audio: "/audio/general/hit-the-nail-on-the-head.mp3",
                  part: "hit the nail on the head",
                  type: "mark",
                },
                ". I'm ",
                {
                  audio: "/audio/general/green-with-envy.mp3",
                  part: "green with envy",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Would you just ",
                {
                  audio: "/audio/general/shut-up.mp3",
                  part: "shut up",
                  type: "mark",
                },
                "? You're ",
                {
                  audio: "/audio/general/on-thin-ice.mp3",
                  part: "on thin ice",
                  type: "mark",
                },
                " with me right now.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Oh no! Look at me. I'm ",
                {
                  audio: "/audio/general/shaking-in-my-shoes.mp3",
                  part: "shaking in my shoes",
                  type: "mark",
                },
                "!",
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
