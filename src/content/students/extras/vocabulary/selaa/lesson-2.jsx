import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonTwo() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 2 • Bob Returns Home with Bad News"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 2 • Bob Returns Home with Bad News"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-2.mp3"
          lines={[
            {
              text: [
                {
                  part: "Bob tells his wife Susan that he lost his job. Susan suggests that he start his own business.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/right-hand-man.mp3",
                  part: "What’s the matter",
                  type: "mark",
                },
                ", dear?",
              ],
            },
            {
              speaker: "Bob:",
              text: [{ part: "Susan, I got canned today at work." }],
            },
            {
              speaker: "Susan:",
              text: [
                "But Bob, you were Peter’s ",
                {
                  audio: "/audio/general/right-hand-man.mp3",
                  part: "right-hand man",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "Yes, and he ",
                {
                  audio: "/audio/general/stabbed-me-in-the-back.mp3",
                  part: "stabbed me in the back",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/keep-your-chin-up.mp3",
                  part: "Keep your chin up",
                  type: "mark",
                },
                ". Maybe he’ll ",
                {
                  audio: "/audio/general/change-his-mind.mp3",
                  part: "change his mind",
                  type: "mark",
                },
                " and take you back.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                {
                  audio: "/audio/general/when-pigs-fly.mp3",
                  part: "When pigs fly",
                  type: "mark",
                },
                "! Once he ",
                {
                  audio: "/audio/general/makes-up-his-mind.mp3",
                  part: "makes up his mind",
                  type: "mark",
                },
                ", he never changes it. Besides, I told him off.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/look-on-the-bright-side.mp3",
                  part: "Look on the bright side",
                  type: "mark",
                },
                ": you won’t have to ",
                {
                  audio: "/audio/general/set-eyes-on.mp3",
                  part: "set eyes on",
                  type: "mark",
                },
                " Peter ever again.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                {
                  audio: "/audio/general/thank-goodness.mp3",
                  part: "Thank goodness",
                  type: "mark",
                },
                " for that!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/hang-in-there.mp3",
                  part: "Hang in there",
                  type: "mark",
                },
                ", I’m sure you won’t be ",
                {
                  audio: "/audio/general/out-of-work.mp3",
                  part: "out of work",
                  type: "mark",
                },
                " for long.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "In the meantime, we’ll have to ",
                {
                  audio: "/audio/general/live-from-hand-to-mouth.mp3",
                  part: "live from hand to mouth",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Don’t get too ",
                {
                  audio: "/audio/general/stressed-out.mp3",
                  part: "stressed out",
                  type: "mark",
                },
                ", Bob. We’ll ",
                {
                  audio: "/audio/general/make-ends-meet.mp3",
                  part: "make ends meet",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "I can always get a job at McDonald’s as a ",
                {
                  audio: "/audio/general/last-resort.mp3",
                  part: "last resort",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: ["I don’t think they’re hiring right now."],
            },
            {
              speaker: "Bob:",
              text: [
                "If ",
                {
                  audio: "/audio/general/worse-comes-to-worst.mp3",
                  part: "worse comes to worst",
                  type: "mark",
                },
                ", we can sell our home and move into a tent.",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                {
                  audio: "/audio/general/lets-think-big.mp3",
                  part: "Let’s think big",
                  type: "mark",
                },
                "! Maybe you can start your own business.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                {
                  audio: "/audio/general/easier-said-than-done.mp3",
                  part: "Easier said than done",
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
                question: "1) What’s the ____? You look upset.",
                options: [
                  { option: "situation", isCorrect: false },
                  { option: "issue", isCorrect: false },
                  { option: "matter", isCorrect: true },
                ],
              },
              {
                question:
                  "2) I know I can trust you. You would never stab me in the ____.",
                options: [
                  { option: "leg", isCorrect: false },
                  { option: "back", isCorrect: true },
                  { option: "arm", isCorrect: false },
                ],
              },
              {
                question:
                  "3) If Bob and Susan run out of money, they can always borrow money from Susan’s sister as a ____ resort.",
                options: [
                  { option: "final", isCorrect: false },
                  { option: "first", isCorrect: false },
                  { option: "last", isCorrect: true },
                ],
              },
              {
                question:
                  "4) You look really stressed ____. Why don’t you sit down, relax, and have a cup of tea?",
                options: [
                  { option: "about", isCorrect: false },
                  { option: "in", isCorrect: false },
                  { option: "out", isCorrect: true },
                ],
              },
              {
                question:
                  "5) Bob, everything will be fine. You just need to keep your chin ____ and remember that tomorrow is another day.",
                options: [
                  { option: "up", isCorrect: true },
                  { option: "down", isCorrect: false },
                  { option: "above", isCorrect: false },
                ],
              },
              {
                question:
                  "6) I just can’t make up my ____ whether to order chicken or fish.",
                options: [
                  { option: "head", isCorrect: false },
                  { option: "brain", isCorrect: false },
                  { option: "mind", isCorrect: true },
                ],
              },
              {
                question:
                  "7) Nicole accidentally stepped on Ted’s guitar. Ted got really angry and told her ____.",
                options: [
                  { option: "off", isCorrect: true },
                  { option: "out", isCorrect: false },
                  { option: "away", isCorrect: false },
                ],
              },
              {
                question:
                  "8) Your husband left you for his psychologist? Hang ____ there! I’m sure he’ll realize she’s crazy and then come back to you.",
                options: [
                  { option: "up", isCorrect: false },
                  { option: "in", isCorrect: true },
                  { option: "out", isCorrect: false },
                ],
              },
            ],
          }}
        />
      </div>
    </>
  );
}
