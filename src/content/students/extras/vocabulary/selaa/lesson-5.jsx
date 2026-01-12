import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonFive() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 5 • Ted Goes Out for the Evening."
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 5 • Ted Goes Out for the Evening."
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-5.mp3"
          lines={[
            {
              text: [
                {
                  part: "Ted leaves to go visit his girlfriend Amber. Ted's mother Susan says she doesn't really like Amber. She wishes him a good time anyway.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Ted:",
              text: ["See you later, Mom!"],
            },
            {
              speaker: "Susan:",
              text: ["Where are you going, Ted?"],
            },
            {
              speaker: "Ted:",
              text: [
                "I told Amber I'd ",
                {
                  audio: "/assets/audio/general/drop-by.mp3",
                  part: "drop by",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: ["hat are you two going to do?"],
            },
            {
              speaker: "Ted:",
              text: [
                "Maybe go to the movies or to a party. Our plans are still ",
                {
                  audio: "/assets/audio/general/up-in-the-air.mp3",
                  part: "up in the air",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: ["Why don't you invite her over here?"],
            },
            {
              speaker: "Ted:",
              text: [
                "I don't want to ",
                {
                  audio: "/assets/audio/general/hang-around.mp3",
                  part: "hang around",
                  type: "mark",
                },
                " here. Dad is really ",
                {
                  audio: "/assets/audio/general/down-in-the-dumps.mp3",
                  part: "down in the dumps",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Is Amber the girl with the nose ring and the purple hair?",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Yeah. I'm ",
                {
                  audio: "/assets/audio/general/crazy-about.mp3",
                  part: "crazy about",
                  type: "mark",
                },
                " her!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Don't ",
                {
                  audio: "/assets/audio/general/take-this-the-wrong-way.mp3",
                  part: "take this the wrong way",
                  type: "mark",
                },
                ", but she's not exactly my ",
                {
                  audio: "/assets/audio/general/cup-of-tea.mp3",
                  part: "cup of tea",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                {
                  audio: "/assets/audio/general/take-it-easy.mp3",
                  part: "Take it easy",
                  type: "mark",
                },
                ", Mom. We're not ",
                {
                  audio: "/assets/audio/general/about-to.mp3",
                  part: "about to",
                  type: "mark",
                },
                " get married. We just enoy ",
                {
                  audio: "/assets/audio/general/hanging-out.mp3",
                  part: "hanging out",
                  type: "mark",
                },
                " together.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "I guess ",
                {
                  audio: "/assets/audio/general/no-accounting-for-taste.mp3",
                  part: "there’s no accounting for taste",
                  type: "mark",
                },
                ". Have a good time.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Don't worry. We'll ",
                {
                  audio: "/assets/audio/general/have-a-blast.mp3",
                  part: "have a blast",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "(",
                {
                  audio: "/assets/audio/general/under-her-breath.mp3",
                  part: "under her breath",
                  type: "mark",
                },
                ") That's what I'm afraid of!",
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
                  "1. Bob was fired. It’s not surprising that he’s down ___ the dumps.",
                options: [
                  { option: "at", isCorrect: false },
                  { option: "in", isCorrect: true },
                  { option: "with", isCorrect: false },
                ],
              },
              {
                question:
                  "2. Ted thinks Amber is wonderful. He’s just crazy ___ her.",
                options: [
                  { option: "about", isCorrect: true },
                  { option: "around", isCorrect: false },
                  { option: "into", isCorrect: false },
                ],
              },
              {
                question:
                  "3. “Don’t ___ this the wrong way, but I really don’t like your girlfriend,” said Susan to Ted.",
                options: [
                  { option: "understand", isCorrect: false },
                  { option: "put", isCorrect: false },
                  { option: "take", isCorrect: true },
                ],
              },
              {
                question:
                  "4. Ted likes to hang ___ with Amber. She’s fun to be with.",
                options: [
                  { option: "on", isCorrect: false },
                  { option: "out", isCorrect: true },
                  { option: "in", isCorrect: false },
                ],
              },
              {
                question:
                  "5. Ted decided to go over to Amber’s house. He’d promised her he’d drop ___.",
                options: [
                  { option: "by", isCorrect: true },
                  { option: "around", isCorrect: false },
                  { option: "near", isCorrect: false },
                ],
              },
              {
                question:
                  "6. Bob and Susan don’t know where they’ll go on vacation. Their travel plans are still up ___ the air.",
                options: [
                  { option: "around", isCorrect: false },
                  { option: "in", isCorrect: true },
                  { option: "above", isCorrect: false },
                ],
              },
              {
                question:
                  "7. Judy muttered something nasty ___ her breath, but I couldn’t quite hear it.",
                options: [
                  { option: "about", isCorrect: false },
                  { option: "under", isCorrect: true },
                  { option: "below", isCorrect: false },
                ],
              },
              {
                question:
                  "8. Why are you hanging ___ the house on such a beautiful day? You should be outside enjoying the weather.",
                options: [
                  { option: "inside", isCorrect: false },
                  { option: "from", isCorrect: false },
                  { option: "around", isCorrect: true },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
