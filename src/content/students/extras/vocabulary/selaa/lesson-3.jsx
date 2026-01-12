import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "@/components/molecules/Dictionary";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { Ribbon } from "@/components/atoms/Ribbon";

export default function SELAAlessonThree() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 3 • Ted's Day at School"
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <Dialogue
          title="Lesson 3 • Ted's Day at School"
          audioPlayer="/assets/audio/vocabulary/selaa/lesson-3.mp3"
          lines={[
            {
              text: [
                {
                  part: "Ted tells his parents he did poorly on his chemistry test. They tell him he needs to get serious and study more.",
                  type: "italic",
                },
              ],
            },
            {
              speaker: "Susan:",
              text: ["How was your day at school today, Ted?"],
            },
            {
              speaker: "Ted:",
              text: [
                "Bad. I had a chemistry test, and I ",
                {
                  audio: "/audio/general/blew-it.mp3",
                  part: "blew it",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "Maybe if you didn't ",
                {
                  audio: "/audio/general/cut-class.mp3",
                  part: "cut class",
                  type: "mark",
                },
                " so often, you'd do better.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "That's right, son. Stop ",
                {
                  audio: "/audio/general/slacking-off.mp3",
                  part: "slacking off",
                  type: "mark",
                },
                " and start ",
                {
                  audio: "/audio/general/hitting-the-books.mp3",
                  part: "hitting the books",
                  type: "mark",
                },
                "!",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "But I ",
                {
                  audio: "/audio/general/cant-stand.mp3",
                  part: "can't stand",
                  type: "mark",
                },
                " chemistry class. Besides, it's a ",
                {
                  audio: "/audio/general/lost-cause.mp3",
                  part: "lost cause",
                  type: "mark",
                },
                ". That class is way ",
                {
                  audio: "/audio/general/over-my-head.mp3",
                  part: "over my head",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "You need to ",
                {
                  audio: "/audio/general/buckle-down.mp3",
                  part: "buckle down",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Ted:",
              text: [
                "When I'm a famous musician, people won't ",
                {
                  audio: "/audio/general/give-a-hoot.mp3",
                  part: "give a hoot",
                  type: "mark",
                },
                " about my knowledge of atoms and molecules.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "That's ",
                {
                  audio: "/audio/general/beside-the-point.mp3",
                  part: "beside the point",
                  type: "mark",
                },
                ".",
              ],
            },
            {
              speaker: "Susan:",
              text: [
                "We know you have your ",
                {
                  audio: "/audio/general/heart-set-on.mp3",
                  part: "heart set on",
                  type: "mark",
                },
                " going to New York University.",
              ],
            },
            {
              speaker: "Bob:",
              text: [
                "And you don't ",
                {
                  audio: "/audio/general/stand-a-chance.mp3",
                  part: "stand a chance",
                  type: "mark",
                },
                " of getting in there with such poor grades!",
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
                  '1. Bob: "Susan, I can’t get my old job back. It’s a lost cause."',
                options: [
                  {
                    option: "“Lost? Maybe I can help you find it.”",
                    isCorrect: false,
                  },
                  {
                    option: "“Yes, I know it’s not a good cause.”",
                    isCorrect: false,
                  },
                  {
                    option: "“I understand. You’ll find something else.”",
                    isCorrect: true,
                  },
                ],
              },
              {
                question:
                  "2. Susan: “How could Peter fire you? Were you slacking off?”",
                options: [
                  { option: "“No. I was working very hard!”", isCorrect: true },
                  {
                    option: "“No. I talked on the phone to friends all day.”",
                    isCorrect: false,
                  },
                  {
                    option: "“Yes. I was working very hard!”",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "3. Ted: “It’s getting late. I’d better start hitting the books.”",
                options: [
                  {
                    option:
                      "“Yes, that’s a good idea. Spend some time studying.”",
                    isCorrect: true,
                  },
                  {
                    option: "“Hit the books? Why don’t you read them instead?”",
                    isCorrect: false,
                  },
                  {
                    option: "“Why don’t you study instead?”",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "4. Peter: “I don’t give a hoot how long you’ve been working here.”",
                options: [
                  {
                    option: "“I wouldn’t give you a hoot either.”",
                    isCorrect: false,
                  },
                  {
                    option:
                      "“I guess our years together aren’t important to you.”",
                    isCorrect: true,
                  },
                  { option: "“Yes, it was a long time.”", isCorrect: false },
                ],
              },
              {
                question:
                  "5. Bob: “Susan, the truth is that I couldn’t stand Peter.”",
                options: [
                  {
                    option: "“I know. Peter really liked you too.”",
                    isCorrect: false,
                  },
                  {
                    option: "“I liked him too. He was a nice guy.”",
                    isCorrect: false,
                  },
                  {
                    option: "“I didn’t like him either. He was a jerk.”",
                    isCorrect: true,
                  },
                ],
              },
              {
                question: "6. Susan: “Nicole, do you ever cut class?”",
                options: [
                  {
                    option: "“No. I’ve never missed a single class.”",
                    isCorrect: true,
                  },
                  {
                    option:
                      "“Yes. I had to leave my math class early yesterday.”",
                    isCorrect: false,
                  },
                  {
                    option:
                      "“No. Sometimes I go to the mall during class time.”",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "7. Bob: “This book on computers is way over my head.”",
                options: [
                  {
                    option:
                      "“Over your head? It should be in front of your face!”",
                    isCorrect: false,
                  },
                  {
                    option: "“Why don’t you start with an easier book?”",
                    isCorrect: true,
                  },
                  {
                    option: "“Here, try this book. It’s more difficult.”",
                    isCorrect: false,
                  },
                ],
              },
              {
                question:
                  "8. Nicole: “I’ve got my heart set on going to the school picnic.”",
                options: [
                  {
                    option: "“Okay. You should definitely go.”",
                    isCorrect: true,
                  },
                  {
                    option: "“Really? Why don’t you want to go?”",
                    isCorrect: false,
                  },
                  {
                    option: "“I understand. Picnics can be boring.”",
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
