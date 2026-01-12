import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonOne() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 1 • Bob’s Day at Work"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 1 • Bob’s Day at Work"
          audioPlayer="/assets/audio//vocabulary/selaa/lesson-1.mp3"
          lines={[
            {
              text: [
                {
                  type: "italic",
                  part: "Bob works as a manager in a furniture store. Peter, his boss, is not happy about sales. Bob’s new advertising campaign hasn’t helped. Peter decides to fire him.",
                },
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "Bob, I hate to ",
                {
                  audio: "/assets/audio//general/break-the-news.mp3",
                  part: "break the news",
                  type: "mark",
                },
                ", but our sales were down again last month.",
              ],
            },
            {
              speaker: "Bob:",
              text: ["Down again, Peter?"],
            },
            {
              speaker: "Peter:",
              text: [
                "Yeah. These days, everybody’s shopping at our competition, Honest Abe’s Furniture Store.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "But everything in there ",
                {
                  audio: "/assets/audio//general/costs-an-arm-and-a-leg.mp3",
                  part: "costs an arm and a leg",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "That’s true. They do charge ",
                {
                  audio: "/assets/audio//general/top-dollar.mp3",
                  part: "top dollar",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "And their salespeople are very strange. They really ",
                {
                  audio: "/assets/audio//general/give-me-the-creeps.mp3",
                  part: "give me the creeps",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "Well, they must be doing something right over there. Meanwhile, we’re ",
                {
                  audio: "/assets/audio//general/about-to.mp3",
                  part: "about to",
                  type: "mark",
                },
                " ",
                {
                  audio: "/assets/audio//general/go-belly-up.mp3",
                  part: "go-belly-up",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "I’m sorry to hear that. I thought my new advertising campaign would ",
                {
                  audio: "/assets/audio//general/save-the-day.mp3",
                  part: "save the day",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                {
                  audio: "/assets/audio//general/lets-face-it.mp3",
                  part: "Let’s face it",
                  type: "mark",
                },
                ": your advertising campaign was a ",
                {
                  audio: "/assets/audio//general/real-flop.mp3",
                  part: "real flop",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Well then I’ll ",
                {
                  audio:
                    "/assets/audio//general/go-back-to-the-drawing-board.mp3",
                  part: "go back to the drawing board",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Peter:",
              text: ["It’s too late for that. You’re fired!"],
            },
            {
              speaker: "Bob:",
              text: [
                "What? You’re ",
                {
                  audio: "/assets/audio//general/giving-me-the-ax.mp3",
                  part: "giving me the ax",
                  type: "mark",
                },
                "?",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "Yes. I’ve already found a new manager. She’s ",
                {
                  audio: "/assets/audio//general/as-sharp-as-a-tack.mp3",
                  part: "as sharp as a tack",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Can’t we even ",
                {
                  audio: "/assets/audio//general/talk-this-over.mp3",
                  part: "talk this over",
                  type: "mark",
                },
                "? ",
                {
                  audio: "/assets/audio//general/after-all.mp3",
                  part: "After all",
                  type: "mark",
                },
                ", I’ve been working here for 10 years!",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "There’s ",
                {
                  audio: "/assets/audio//general/no-point-in.mp3",
                  part: "no point in",
                  type: "mark",
                },
                " arguing, Bob. I’ve already ",
                {
                  audio: "/assets/audio//general/made-up-my-mind.mp3",
                  part: "made up my mind",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Oh well, ",
                {
                  audio: "/assets/audio//general/at-least.mp3",
                  part: "at least",
                  type: "mark",
                },
                " I won’t have to ",
                {
                  audio: "/assets/audio//general/put-up-with.mp3",
                  part: "put up with",
                  type: "mark",
                },
                " your nonsense anymore! Good-bye to you and good-bye to this ",
                {
                  audio: "/assets/audio//general/dead-end-job.mp3",
                  part: "dead-end job",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "Please leave before I ",
                {
                  audio: "/assets/audio//general/lose-my-temper.mp3",
                  part: "lose my temper",
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
                  "1. I can't believe you bought a couch at Honest Abe's. Everything in that store costs an arm and a _____ .",
                options: [
                  { option: "foot", isCorrect: false },
                  { option: "leg", isCorrect: true },
                  { option: "hand", isCorrect: false },
                ],
              },
              {
                question:
                  "2. After Bob found out that his advertising campaign failed, he wanted to go back to the drawing _____ .",
                options: [
                  { option: "board", isCorrect: true },
                  { option: "table", isCorrect: false },
                  { option: "room", isCorrect: false },
                ],
              },
              {
                question:
                  "3. When somebody isn't listening to you, there's no _____ in trying to argue with them.",
                options: [
                  { option: "edge", isCorrect: false },
                  { option: "tip", isCorrect: false },
                  { option: "point", isCorrect: true },
                ],
              },
              {
                question: "4. José is really smart. He's as sharp as a _____ .",
                options: [
                  { option: "tack", isCorrect: true },
                  { option: "nail", isCorrect: false },
                  { option: "screw", isCorrect: false },
                ],
              },
              {
                question:
                  "5. The salespeople at Honest Abe's always look angry and never speak to anybody. No wonder they _____ Bob the creeps.",
                options: [
                  { option: "take", isCorrect: false },
                  { option: "give", isCorrect: true },
                  { option: "allow", isCorrect: false },
                ],
              },
              {
                question:
                  "6. Bob got fired. He isn't looking forward to _____ the news to his family.",
                options: [
                  { option: "breaking", isCorrect: true },
                  { option: "cracking", isCorrect: false },
                  { option: "saying", isCorrect: false },
                ],
              },
              {
                question:
                  "7. Bob thought his new advertisements would bring in lots of customers and save the _____ .",
                options: [
                  { option: "morning", isCorrect: false },
                  { option: "night", isCorrect: false },
                  { option: "day", isCorrect: true },
                ],
              },
              {
                question:
                  "8. Fortunately, Bob no longer has to put _____ with his stupid boss at the furniture store.",
                options: [
                  { option: "over", isCorrect: false },
                  { option: "in", isCorrect: false },
                  { option: "up", isCorrect: true },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
