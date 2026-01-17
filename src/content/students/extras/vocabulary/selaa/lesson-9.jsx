import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonNine() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 9 • Nicole For President!"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 9 • Nicole For President!"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-9.mp3"
          lines={[
            {
              text: [
                {
                  part: "Nicole discusses her plans to run for student body president. Nicole wants Ted to ask his friends to vote for her. Ted agrees, in exchange for Nicole's help with his homework.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "I've decided to run for student body president! If I'm going to become a senator one day, I should get some ",
                {
                  audio: "/audio/general/.mp3",
                  part: "<>experience under my belt<",
                  type: "",
                },
                "now.",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Andrea Jenkins is also running. She'll give you a <mark>run for your money</mark>!",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Andrea Jenkins is an idiot. I'm <mark>by far</mark> the better candidate.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Don't be so <mark>full of yourself</mark>! I might vote for Andrea.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Stop <mark>kidding around</mark>. Let's <mark>get down to business</mark>. I need your help.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "You want me to help yoи?",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "Yes. I need you to <mark>talk your friends into</mark> voting for me.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "But you never <mark>give my friends the time of day</mark>. All you give them is the <mark>cold shoulder</mark>.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "That's because they've got blue hair and nose rings!",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "They're better than your friends - a bunch of <mark>goody-goodies</mark> and <mark>brown-nosers</mark>!",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "<mark>That's beside the point</mark>. Let's talk about your friends and their votes.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "Okay. <mark>You scratch my back and I'll scratch yours</mark>. If you do my chemistry homework, I'll help you get the votes.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            },
            {
              speaker: "Nicole:",
              text: [
                "I'm not <mark>crazy about</mark> that idea. But, okay, it's a deal. I hope I can <mark>count on you</mark>.",
                {
                  audio: "/audio/general/.mp3",
                  part: "",
                  type: "",
                },
                "",
              ],
            }
          ]}
        />
        <Ribbon label="Exercises" />
        <Radio
          exercise={{
            instruction: "Choose the best response.",
            questions: [
              {
                question:
                  "1. Nicole is very reliable. You can always count ___ her.",
                options: [
                  { option: "on", isCorrect: true },
                  { option: "in", isCorrect: false },
                  { option: "with", isCorrect: false },
                ],
              },
              {
                question:
                  "2. I need to ask you for your help, and I’ll do something nice for you in return. You scratch my ___ and I’ll scratch yours.",
                options: [
                  { option: "back", isCorrect: true },
                  { option: "neck", isCorrect: false },
                  { option: "foot", isCorrect: false },
                ],
              },
              {
                question:
                  "3. Stop kidding ___! Tell me where you hid my shoes.",
                options: [
                  { option: "about", isCorrect: false },
                  { option: "around", isCorrect: true },
                  { option: "into", isCorrect: false },
                ],
              },
              {
                question:
                  "4. I can’t believe that Lisa gave you the ___ shoulder. I thought you two were friends.",
                options: [
                  { option: "hot", isCorrect: false },
                  { option: "freezing", isCorrect: false },
                  { option: "cold", isCorrect: true },
                ],
              },
              {
                question:
                  "5. Ted’s friends didn’t want to vote for Nicole, but Ted talked them ___ it.",
                options: [
                  { option: "into", isCorrect: true },
                  { option: "around", isCorrect: false },
                  { option: "for", isCorrect: false },
                ],
              },
              {
                question:
                  "6. Although Jim Greene was ___ far the more qualified candidate, he lost the election because of a scandal.",
                options: [
                  { option: "way", isCorrect: false },
                  { option: "in", isCorrect: false },
                  { option: "by", isCorrect: true },
                ],
              },
              {
                question:
                  "7. Denise is really full ___ herself. She thinks she’s the smartest and most beautiful woman in the world.",
                options: [
                  { option: "with", isCorrect: false },
                  { option: "of", isCorrect: true },
                  { option: "in", isCorrect: false },
                ],
              },
              {
                question:
                  "8. Nicole thinks that Andrea is a snob. She says Andrea won’t ___ her the time of day.",
                options: [
                  { option: "give", isCorrect: true },
                  { option: "allow", isCorrect: false },
                  { option: "tell", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
