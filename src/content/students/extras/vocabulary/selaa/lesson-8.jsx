import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonEight() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 8 • Ted Forms a Rock Band"
      />
      <div className="line-break">
        <Dialogue
          title="Lesson 8 • Ted Forms a Rock Band"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-7.mp3"
          lines={[
            {
              text: [
                {
                  part: "Ted plans to become a successful musician. First, he needs Susan to loan him money for a new guitar. Susan suggests that Ted bake cookies to earn the money.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "You're in ",
                {
                  audio: "/assets/audio/general/good-spirits.mp3",
                  part: "good spirits",
                  type: "mark",
                },
                " today, Ted.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "I've got great news, Mom.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "What is it?",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Amber and I are going to start a rock band!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/assets/audio/general/good-for-you.mp3",
                  part: "Good for you",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Mom, I'm not going to ",
                {
                  audio: "/assets/audio/general/beat-around-the-bush.mp3",
                  part: "beat around the bush",
                  type: "mark",
                },
                ". I need to borrow $1,000 for a new guitar.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Ted, your father and I can't ",
                {
                  audio: "/assets/audio/general/shell-out.mp3",
                  part: "shell out",
                  type: "mark",
                },
                " that much. We aren't ",
                {
                  audio: "/assets/audio/general/made-of-money.mp3",
                  part: "made of money",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "You're not? I thought you were millionaires, like Donald and Ivana Trump!*",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Ha ha. This is no time to be a ",
                {
                  audio: "/assets/audio/general/wise-guy.mp3",
                  part: "wise guy",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "I promise I'll pay you back.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "How?",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "We're going to ",
                {
                  audio: "/assets/audio/general/take-the-music-world-by-storm.mp3",
                  part: "take the music world by storm",
                  type: "mark",
                },
                " and make lots of money.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "That sounds like a ",
                {
                  audio: "/assets/audio/general/pipe-dream.mp3",
                  part: "pipe dream",
                  type: "mark",
                },
                ". Aren't high school rock bands ",
                {
                  audio: "/assets/audio/general/a-dime-a-dozen.mp3",
                  part: "a dime a dozen",
                  type: "mark",
                },
                "?",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Yeah, but we're different. With my guitar playing and Amber's beautiful voice, we're sure to ",
                {
                  audio: "/assets/audio/general/make-a-splash.mp3",
                  part: "make a splash",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Well, we're going through ",
                {
                  audio: "/assets/audio/general/hard-times.mp3",
                  part: "hard times",
                  type: "mark",
                },
                ". You're going to have to work for that $1,000.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "How?",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "You can bake cookies.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "I bet Mrs. Clapton never made Eric** bake cookies, but I guess ",
                {
                  audio: "/assets/audio/general/those-are-the-breaks.mp3",
                  part: "those are the breaks",
                  type: "mark",
                },
                ".",
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
