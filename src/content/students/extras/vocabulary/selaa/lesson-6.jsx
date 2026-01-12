import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonSix() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 6 • Susan Stays Home and Bakes Cookies"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 6 • Susan Stays Home and Bakes Cookies"
          audioPlayer="/assets//audio/vocabulary/selaa/lesson-6.mp3"
          lines={[
            {
              text: [
                {
                  part: "Susan decides to cheer up her husband. Bob loves her homemade cookies. Nicole suggests she start a cookie business.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: ["Bob, I baked cookies for you."],
            },
            {
              speaker: "Bob:",
              text: [
                "That was so nice of you, dear. You've got a ",
                {
                  audio: "/assets/audio/general/heart-of-gold.mp3",
                  part: "heart of gold",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Go ahead and ",
                {
                  audio: "/assets/audio/general/pig-out.mp3",
                  part: "pig out",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Bob:",
              text: ["These are delicious!"],
            },
            {
              speaker: "Susan:",
              text: [
                "I thought they might ",
                {
                  audio: "/assets/audio/general/cheer-you-up.mp3",
                  part: "cheer you up",
                  type: "mark",
                },
                ". You've been ",
                {
                  audio: "/assets/audio/general/in-a-bad-mood.mp3",
                  part: "in a bad mood",
                  type: "mark",
                },
                " lately.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "I guess I have been a little ",
                {
                  audio: "/assets/audio/general/on-edge.mp3",
                  part: "on edge",
                  type: "mark",
                },
                ". But these cookies are ",
                {
                  audio:
                    "/assets/audio/general/just-what-the-doctor-ordered.mp3",
                  part: "just what the doctor ordered",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Nicole:",
              text: ["Do I smell cookies?"],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/assets/audio/general/help-yourself.mp3",
                  part: "Help yourself",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Yum-yum. These are ",
                {
                  audio: "/assets/audio/general/out-of-this-world.mp3",
                  part: "out of this world",
                  type: "mark",
                },
                ". You could ",
                {
                  audio: "/assets/audio/general/go-into-business.mp3",
                  part: "go into business",
                  type: "mark",
                },
                " selling these!",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "You could call them Susan's Scrumptious Cookies. You'd ",
                {
                  audio: "/assets/audio/general/make-a-bundle.mp3",
                  part: "make a bundle",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/assets/audio/general/good-thinking.mp3",
                  part: "Good thinking",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Don't forget to ",
                {
                  audio: "/assets/audio/general/give-me-credit.mp3",
                  part: "give me credit",
                  type: "mark",
                },
                " for the idea after you're rich and famous!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "You know I always ",
                {
                  audio:
                    "/assets/audio/general/give-credit-where-credit-is-due.mp3",
                  part: "give credit where credit is due",
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
            instruction:
              "Choose the best response.",
            questions: [
              {
                question:
                  "1. Thanks for baking cookies for me. You’ve got a heart of gold.",
                options: [
                  { option: "You’re a very nice person.", isCorrect: true },
                  { option: "You’re a reliable person.", isCorrect: false },
                  {
                    option: "You’re very generous with your money.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "2. I baked these cookies for you. Why don’t you pig out?",
                options: [
                  { option: "Please take just one cookie.", isCorrect: false },
                  {
                    option: "Take as many cookies as you like.",
                    isCorrect: true,
                  },
                  {
                    option: "Why don’t you ever eat my cookies?",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "3. I know you’ll like my cookies since you’ve got a sweet tooth.",
                options: [
                  { option: "Your teeth are hurting.", isCorrect: false },
                  { option: "You don’t like sweet things.", isCorrect: false },
                  { option: "You like sweet things.", isCorrect: true },
                ],
              },
              {
                question: "4. You should go into business selling cookies.",
                options: [
                  {
                    option: "You should go to the store and buy some cookies.",
                    isCorrect: false,
                  },
                  {
                    option: "You should try to get a job baking cookies.",
                    isCorrect: false,
                  },
                  {
                    option: "You should start a company that sells cookies.",
                    isCorrect: true,
                  },
                ],
              },
              {
                question: "5. I baked these cookies. Help yourself!",
                options: [
                  { option: "Let me get you one!", isCorrect: false },
                  { option: "Take some!", isCorrect: true },
                  { option: "You need to get some help!", isCorrect: false },
                ],
              },
              {
                question:
                  "6. If you went into business selling these delicious cookies, you’d make a bundle.",
                options: [
                  { option: "You’d make many cookies.", isCorrect: false },
                  { option: "You’d make a lot of money.", isCorrect: true },
                  { option: "You’d make a few dollars.", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
