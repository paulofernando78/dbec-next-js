import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Line } from "@/components/molecules/Line";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";
import { instruction, text, audio, mark } from "@/helpers/content";

export default function SELAAlessonTen() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 10 • Bob Visits the Village Market"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Line
          value={[
            instruction({
              audio: "/assets/audio/general/.mp3",
              englishInstruction:
                "Listen to 'Lesson 10 • Bob Visits the Village Market'",
              portugueseInstruction: "aaa",
            }),
          ]}
        />
        <AudioPlayer src="/assets/audio/vocabulary/selaa/lesson-10.mp3" />
        <Dialogue
          description=""
          lines={[
            {
              speaker: "Bob:",
              text: text([
                "Thank you for ",
                audio("/assets/audio/general/making-time-for.mp3"),
                mark(" making time for"),
                " me today, Carol.",
              ]),
            },
            {
              speaker: "Carol:",
              text: text([
                audio("/assets/audio/general/dont-mention-it.mp3"),
                mark("Don’t mention it"),
                ", Bob. ",
                audio("/assets/audio/general/whats-up.mp3"),
                mark("What’s up?"),
              ]),
            },
            {
              speaker: "Bob:",
              text: text([
                "My wife baked these cookies ",
                audio("/assets/audio/general/from-scratch.mp3"),
                mark("from scratch"),
                ". Please take one.",
              ]),
            },
            {
              speaker: "Carol:",
              text: text([
                "Mmmm, chewy. These are ",
                audio("/assets/audio/general/out-of-this-world.mp3"),
                mark("out of this world!"),
              ]),
            },
            {
              speaker: "Bob:",
              text: text(["My wife’s a great cook."]),
            },
            {
              speaker: "Carol:",
              text: text([
                audio("/assets/audio/general/you-can-say-that-again.mp3"),
                mark("You can say that again"),
                ". I don’t want to make a pig of myself, but let me take a few more.",
                mark(""),
              ]),
            },
            {
              speaker: "Bob:",
              text: text([
                "Oink oink! ",
                audio("/assets/audio/general/just-kidding.mp3"),
                mark("Just kidding"),
                "! ",
              ]),
            },
            {
              speaker: "Carol:",
              text: text([
                "I’d like to sell these at the Village Market. My customers will ",
                audio("/assets/audio/general/go-nuts.mp3"),
                mark("go nuts"),
                " over these ",
              ]),
            },
            {
              speaker: "Bob:",
              text: text(["How much would you pay us for each cookie?"]),
            },
            {
              speaker: "Carol:",
              text: text([
                "I’m not sure. I need to ",
                audio("/assets/audio/general/roll-up-my-sleeves.mp3"),
                mark("roll up my sleeves"),
                " and ",
                audio("/assets/audio/general/figure-out.mp3"),
                mark(" figure out "),
                " the finances.",
              ]),
            },
            {
              speaker: "Bob:",
              text: text([
                "Can you give me a ",
                audio("/assets/audio/general/ballpark-figure.mp3"),
                mark("ballpark figure"),
                " now? ",
              ]),
            },
            {
              speaker: "Carol:",
              text: text([
                "I don’t want to ",
                audio("/assets/audio/general/jump-the-gun.mp3"),
                mark("jump the gun"),
                ". ",
                audio("/assets/audio/general/sit-tight.mp3"),
                mark("Sit tight"),
                " for now, and we'll talk things over this evening.",
              ]),
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
                  "1. Carol: “I’m glad I was able to make time to see you today.” Bob’s reply:",
                options: [
                  {
                    option: "I guess I’ll see you tomorrow then.",
                    isCorrect: false,
                  },
                  {
                    option: "It must be nice to have so much free time.",
                    isCorrect: false,
                  },
                  {
                    option:
                      "Yes, thanks for fitting me into your busy schedule.",
                    isCorrect: true,
                  },
                ],
              },
              {
                question: "2. Carol: “What’s up?” Bob’s reply:",
                options: [
                  { option: "Fine, thank you.", isCorrect: false },
                  {
                    option: "I’d like to discuss a business deal with you.",
                    isCorrect: true,
                  },
                  {
                    option: "I don’t know. Let me check with my wife.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "3. Carol: “These cookies are out of this world. What do you think?” Bob’s reply:",
                options: [
                  { option: "I agree. They’re delicious!", isCorrect: true },
                  { option: "I don’t know where they are.", isCorrect: false },
                  {
                    option: "No thanks. I’ve already had ten cookies.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "4. Carol: “Did your wife make these from scratch?” Bob’s reply:",
                options: [
                  {
                    option: "No, she made them from flour, eggs, and sugar.",
                    isCorrect: false,
                  },
                  {
                    option: "Yes, she did. She loves to bake.",
                    isCorrect: true,
                  },
                  {
                    option:
                      "Yes. She bought a roll of Pillsbury frozen dough and heated it in the oven for 15 minutes.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "5. Carol: “I ate seven cookies. Do you think I’ve made a pig of myself?” Bob’s reply:",
                options: [
                  {
                    option: "Not at all. These cookies are hard to resist!",
                    isCorrect: true,
                  },
                  {
                    option: "Yes. You look just like a pig.",
                    isCorrect: false,
                  },
                  {
                    option: "Yes. Pigs love to eat cookies too.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "6. Carol: “I think my customers will go nuts over these cookies.” Bob’s reply:",
                options: [
                  {
                    option: "I agree. After all, they’re very good!",
                    isCorrect: true,
                  },
                  {
                    option: "Nuts? Sure, we can put nuts in the cookies.",
                    isCorrect: false,
                  },
                  {
                    option: "I disagree. They’ll probably like them.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "7. Carol: “Bob, I’m not ready to give you a ballpark figure yet.” Bob’s reply:",
                options: [
                  {
                    option: "Okay, how about one dollar per cookie?",
                    isCorrect: false,
                  },
                  {
                    option:
                      "When you’re ready, we can sell them in the ballpark.",
                    isCorrect: false,
                  },
                  {
                    option: "Okay, I can wait until tomorrow.",
                    isCorrect: true,
                  },
                ],
              },
              {
                question:
                  "8. Carol: “I don’t want to jump the gun by discussing details now.” Bob’s reply:",
                options: [
                  {
                    option: "I understand. Take some time to think about it.",
                    isCorrect: true,
                  },
                  {
                    option: "I didn’t say anything about selling you guns.",
                    isCorrect: false,
                  },
                  {
                    option: "Thanks, I’d love an answer right now.",
                    isCorrect: false,
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
