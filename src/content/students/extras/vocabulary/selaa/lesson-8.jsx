import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionarySearch } from "@/components/molecules/DictionarySearch";
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
        <div className="dictionary-area">
          <DictionarySearch />
        </div>
        <Dialogue
          title="Lesson 8 • Ted Forms a Rock Band"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-8.mp3"
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
              text: ["I've got great news, Mom."],
            },
            {
              speaker: "Susan:",
              text: ["What is it?"],
            },
            {
              speaker: "Ted:",
              text: ["Amber and I are going to start a rock band!"],
            },
            {
              speaker: "Susan:",
              text: ["Good for you!"],
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
              text: ["I promise I'll pay you back."],
            },
            {
              speaker: "Susan:",
              text: ["How?"],
            },
            {
              speaker: "Ted:",
              text: [
                "We're going to ",
                {
                  audio:
                    "/assets/audio/general/take-the-music-world-by-storm.mp3",
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
              text: ["How?"],
            },
            {
              speaker: "Susan:",
              text: ["You can bake cookies."],
            },
            {
              speaker: "Ted:",
              text: [
                "I bet Mrs. Clapton never made Eric bake cookies, but I guess ",
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
                  "1. I'm in good spirits today because I got a promotion at work.",
                options: [
                  { option: "happy", isCorrect: true },
                  { option: "drunk", isCorrect: false },
                  { option: "tired", isCorrect: false },
                ],
              },
              {
                question:
                  "2. Renting an apartment on Park Avenue in Manhattan is difficult, unless you're made of money.",
                options: [
                  { option: "wealthy", isCorrect: true },
                  { option: "strange", isCorrect: false },
                  { option: "famous", isCorrect: false },
                ],
              },
              {
                question:
                  "3. My friend's daughter paints beautiful pictures. In a few years, she'll take the art world by storm.",
                options: [
                  {
                    option: "something bad will happen and she'll lose her job",
                    isCorrect: false,
                  },
                  {
                    option: "she'll draw an excellent painting of a storm",
                    isCorrect: false,
                  },
                  {
                    option: "she'll become a very successful artist",
                    isCorrect: true,
                  },
                ],
              },
              {
                question:
                  "4. Susan thinks that Ted's plan to become a famous rock star is a pipe dream.",
                options: [
                  {
                    option: "something that is not likely to happen",
                    isCorrect: true,
                  },
                  { option: "Ted's biggest hope", isCorrect: false },
                  { option: "something very realistic", isCorrect: false },
                ],
              },
              {
                question:
                  "5. If you're looking for a new suit, you shouldn't have a problem. Clothing shops in this town are a dime a dozen.",
                options: [
                  { option: "hard to find", isCorrect: false },
                  { option: "everywhere", isCorrect: true },
                  { option: "lousy", isCorrect: false },
                ],
              },
              {
                question:
                  "6. Ted performed at his high school dance. He knew he'd made a splash when all the girls started singing along.",
                options: [
                  { option: "done something wrong", isCorrect: false },
                  {
                    option: "made a very positive impression",
                    isCorrect: true,
                  },
                  { option: "created waves", isCorrect: false },
                ],
              },
              {
                question:
                  "7. Being a wise guy can be fun, but it might not make you popular with your teachers.",
                options: [
                  { option: "a very intelligent person", isCorrect: false },
                  {
                    option: "an obnoxious person who makes sarcastic comments",
                    isCorrect: true,
                  },
                  {
                    option: "a person whom everybody admires",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "8. Nicole wants to attend Yale, but her parents don't want to shell out $100,000 for the tuition.",
                options: [
                  { option: "waste", isCorrect: false },
                  { option: "save", isCorrect: false },
                  { option: "pay", isCorrect: true },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
