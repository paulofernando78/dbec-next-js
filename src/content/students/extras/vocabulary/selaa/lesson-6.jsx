import { Whiteboard } from "@/components/molecules/Whiteboard";
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
