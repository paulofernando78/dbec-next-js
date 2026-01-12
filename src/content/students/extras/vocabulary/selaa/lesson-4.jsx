import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
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
        <div className="dictionary-area">
          <Dictionary />
        </div>
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
              text: ["How was your day at school today, Nicole?"],
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
              text: ["What did she say?"],
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
                  "1. Nicole is in a good mood because her teacher ___ her a compliment.",
                options: [
                  { option: "told", isCorrect: false },
                  { option: "paid", isCorrect: true },
                  { option: "provided", isCorrect: false },
                ],
              },
              {
                question:
                  "2. Nicole’s teacher told her she was ___ and shoulders above her classmates.",
                options: [
                  { option: "elbow", isCorrect: false },
                  { option: "neck", isCorrect: false },
                  { option: "head", isCorrect: true },
                ],
              },
              {
                question:
                  "3. When my friend Chad told me he’d just won the lottery, I was ___ with envy.",
                options: [
                  { option: "blue", isCorrect: false },
                  { option: "green", isCorrect: true },
                  { option: "red", isCorrect: false },
                ],
              },
              {
                question:
                  '4. When you do something well, your boss might tell you, "Way ___!"',
                options: [
                  { option: "to come", isCorrect: false },
                  { option: "to go", isCorrect: true },
                  { option: "to act", isCorrect: false },
                ],
              },
              {
                question:
                  "5. When the robbers entered my house, I was in the kitchen shaking in my ___.",
                options: [
                  { option: "slippers", isCorrect: false },
                  { option: "pajamas", isCorrect: false },
                  { option: "shoes", isCorrect: true },
                ],
              },
              {
                question:
                  "6. If somebody is bothering you, you can tell them they’re driving you ___.",
                options: [
                  { option: "crazy", isCorrect: true },
                  { option: "angry", isCorrect: false },
                  { option: "unhappy", isCorrect: false },
                ],
              },
              {
                question:
                  "7. If you like power, you might consider going ___ politics.",
                options: [
                  { option: "above", isCorrect: false },
                  { option: "towards", isCorrect: false },
                  { option: "into", isCorrect: true },
                ],
              },
              {
                question:
                  '8. "You’ve been yelling and screaming for the past two hours. Could you just shut ___ already?"',
                options: [
                  { option: "up", isCorrect: true },
                  { option: "in", isCorrect: false },
                  { option: "off", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
