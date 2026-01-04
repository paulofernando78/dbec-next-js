import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import Image from "next/image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { BulletPoint } from "@/components/atoms/BulletPoint";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";

import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function VerbBe() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Verb Be" />
      <div className="line-break">
        <Ribbon label="INTRODUCTION" />
        <Paragraph
          blocks={[
            {
              img: "/assets/img/general/two-people-talking-school.png",
              imgPosition: "left",
              alt: "Two people talking.",
              width: 350,
              height: 250,
              items: [
                {
                  text: [
                    {
                      audio: "/assets/audio/general/answer-these-questions.mp3",
                      part: "Answer these questions.",
                      type: "bold",
                    },
                  ],
                  lineBreak: true,
                },
                {
                  text: ["Where are Kate and Mike? "],
                },
                {
                  text: ["Are they students?"],
                },
              ],
            },
          ]}
        />
        <Ribbon label="PRESENTATION" />
        <Dialogue
          audioPlayer="/assets/audio/general/i-am.mp3"
          lines={[
            {
              speaker: "Anna:",
              text: [
                "Hi, I",
                {
                  type: "mark",
                  part: "’m",
                },
                " Anna.",
              ],
            },
            {
              speaker: "Scott:",
              text: [
                "Hello, I",
                {
                  type: "mark",
                  part: "’m",
                },
                " Scott.",
              ],
            },
            {
              speaker: "Anna:",
              text: [
                "I",
                {
                  type: "mark",
                  part: "’m",
                },
                " a student.",
              ],
            },
            {
              speaker: "Scott:",
              text: "",
              text: [
                "I",
                {
                  type: "mark",
                  part: "’m",
                },
                " the teacher.",
              ],
            },
            {
              speaker: "Scott:",
              text: "",
              text: ["Nice to meet you."],
            },
            {
              speaker: "Anna:",
              text: [
                "Nice to meet you, too.",
                {
                  type: "mark",
                  part: "",
                },
                "",
              ],
            },
          ]}
        />

        <Ribbon label="Meaning" />

        {/* Identity */}
        <div>
          <p>
            /audio/general/identity.mp3 Identity{" "}
            <Portuguese>Identidade</Portuguese>:
          </p>
          <p>
            /audio/general/im-paul.mp3
            <BulletPoint /> I’m Paul. Sou o Paulo.
          </p>
          <p>
            /audio/general/hes-my-brother.mp3
            <BulletPoint /> He’s my brother. Ele é o meu irmão.
          </p>
          <p>
            /audio/general/theyre-my-friends.mp3
            <BulletPoint /> They are my friends. Eles são meus amigos.
          </p>
        </div>

        {/* Job */}
        <div>
          <p>
            /audio/general/job.mp3 Job{" "}
            <Portuguese>Profissão / Função</Portuguese>:
          </p>
          <p>
            /audio/general//Im-a-teacher.mp3
            <BulletPoint /> I’m a teacher.{" "}
            <span className="portuguese">Sou professor(a).</span>
          </p>
          <p>
            /audio/general/hes-an-engineer.mp3
            <BulletPoint /> He’s an enginner.
          </p>
          <p>
            /audio/general/shes-a-doctor.mp3
            <BulletPoint /> She’s a doctor.
          </p>
        </div>

        {/* State */}
        <div>
          <p>
            /audio/general/state.mp3 State{" "}
            <Portuguese>Estado / Condição</Portuguese>:
          </p>
          <p>
            /audio/general/im-tired.mp3
            <BulletPoint /> I’m tired.
          </p>
          <p>
            /audio/general/shes-happy.mp3
            <BulletPoint /> She’s happy.
          </p>
          <p>
            /audio/general/shes-happy.mp3
            <BulletPoint /> This car is fast.
          </p>
        </div>
        <div>
          <p>
            /audio/general/nationality.mp3 Nationality{" "}
            <Portuguese>Nacionalidade</Portuguese>:
          </p>
          <p>
            /audio/general/nationality.mp3
            <BulletPoint /> Mike is American. He’s from the United States.
          </p>
          <p>
            /audio/general/George-is-british.mp3
            <BulletPoint /> George is British. He’s from England.
          </p>
          <p>
            /audio/general/juan-and-maria-are-mexican.mp3
            <BulletPoint /> Juan and Maria are Mexican. They’re from Mexico.
          </p>
        </div>

        <Checking
          type="CCQ"
          ccq={[
            {
              block: [
                {
                  example: "I’m Paul.",
                  questions: [
                    {
                      question:
                        "Is Paul talking about who he is or what he does?",
                    },
                  ],
                },
                {
                  example: "I’m a teacher.",
                  questions: [
                    {
                      question:
                        "Is Paul talking about who he is or what he does?",
                    },
                  ],
                },
              ],
            },
            {
              block: [
                {
                  example: "I’m tired.",
                  questions: [
                    {
                      question: "Is this a permanent situation?",
                    },
                    {
                      question: "Can this be changed?",
                    },
                  ],
                },
              ],
            },
          ]}
        />

        <Ribbon label="Pronunciation + Form" />
        <Column
          data={[
            // Affirmative
            {
              bgColor: "var(--green-4)",
              column: "Affirmative",
              blocks: [
                {
                  block: [
                    {
                      audio: "/assets/audio/general/i-am.mp3",
                    },
                    {
                      text: "I",
                    },
                    {
                      bold: "am",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/you-are.mp3",
                    },
                    {
                      text: "you",
                    },
                    {
                      bold: "are",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/he-is.mp3",
                    },
                    {
                      text: "he",
                    },
                    {
                      bold: "is",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/she-is.mp3",
                    },
                    {
                      text: "she",
                    },
                    {
                      bold: "is",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/it-is.mp3",
                    },
                    {
                      text: "it",
                    },
                    {
                      bold: "is",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/we-are.mp3",
                    },
                    {
                      text: "we",
                    },
                    {
                      bold: "are",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/you-are.mp3",
                    },
                    {
                      text: "you",
                    },
                    {
                      bold: "are",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/they-are.mp3",
                    },
                    {
                      text: "they",
                    },
                    {
                      bold: "are",
                    },
                  ],
                },
              ],
            },
            // Negative
            {
              bgColor: "var(--red-4)",
              column: "Negative",
              blocks: [
                {
                  block: [
                    {
                      audio: "/assets/audio/general/i-am-not.mp3",
                    },
                    {
                      text: "I",
                    },
                    {
                      bold: "am not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/you-are-not.mp3",
                    },
                    {
                      text: "you",
                    },
                    {
                      bold: "are not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/he-is-not.mp3",
                    },
                    {
                      text: "he",
                    },
                    {
                      bold: "is not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/she-is-not.mp3",
                    },
                    {
                      text: "she",
                    },
                    {
                      bold: "is not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/it-is-not.mp3",
                    },
                    {
                      text: "it",
                    },
                    {
                      bold: "is not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/we-are-not.mp3",
                    },
                    {
                      text: "we",
                    },
                    {
                      bold: "are not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/you-are-not.mp3",
                    },
                    {
                      text: "you",
                    },
                    {
                      bold: "are not",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/they-are-not.mp3",
                    },
                    {
                      text: "they",
                    },
                    {
                      bold: "are not",
                    },
                  ],
                },
              ],
            },
            // Interrogative
            {
              bgColor: "var(--yellow-4)",
              column: "Interrogative",
              blocks: [
                {
                  block: [
                    {
                      audio: "/assets/audio/general/am-i.mp3",
                    },
                    {
                      bold: "am",
                    },
                    {
                      text: "I?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/are-you.mp3",
                    },
                    {
                      bold: "are",
                    },
                    {
                      text: "you?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/is-he.mp3",
                    },
                    {
                      bold: "is",
                    },
                    {
                      text: "he?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/is-she.mp3",
                    },
                    {
                      bold: "is",
                    },
                    {
                      text: "she?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/is-it.mp3",
                    },
                    {
                      bold: "is",
                    },
                    {
                      text: "it?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/are-we.mp3",
                    },
                    {
                      bold: "are",
                    },
                    {
                      text: "we?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/are-you.mp3",
                    },
                    {
                      bold: "are",
                    },
                    {
                      text: "you?",
                    },
                  ],
                },
                {
                  block: [
                    {
                      audio: "/assets/audio/general/are-they.mp3",
                    },
                    {
                      bold: "are",
                    },
                    {
                      text: "they?",
                    },
                  ],
                },
              ],
            },
          ]}
        />

        <Ribbon label="PRACTICE" />
        <FillInTheBlanks
          data={{
            instructions: "1. Fill in the blanks with affirmative form.",
            blocks: [
              {
                block: [{ text: "I" }, { blank: "am" }],
                lineBreak: true,
              },
              {
                block: [{ text: "you" }, { blank: "are" }],
                lineBreak: true,
              },
              {
                block: [{ text: "he" }, { blank: "is" }],
                lineBreak: true,
              },
              {
                block: [{ text: "she" }, { blank: "is" }],
                lineBreak: true,
              },
              {
                block: [{ text: "it" }, { blank: "is" }],
                lineBreak: true,
              },
              {
                block: [{ text: "we" }, { blank: "are" }],
                lineBreak: true,
              },
              {
                block: [{ text: "you" }, { blank: "are" }],
                lineBreak: true,
              },
              {
                block: [{ text: "they" }, { blank: "are" }],
              },
            ],
          }}
        />
        <Radio
          data={{
            instruction: "Choose the correct form of the verb be.",
            questions: [
              {
                question: "1. She ___ a student.",
                options: [
                  { option: "am", isCorrect: false },
                  { option: "is", isCorrect: true },
                  { option: "are", isCorrect: false },
                ],
              },
              {
                question: "2. They ___ from Mexico.",
                options: [
                  { option: "is", isCorrect: false },
                  { option: "are", isCorrect: true },
                  { option: "am", isCorrect: false },
                ],
              },
              {
                question: "3. I ___ happy today.",
                options: [
                  { option: "am", isCorrect: true },
                  { option: "is", isCorrect: false },
                  { option: "are", isCorrect: false },
                ],
              },
              {
                question: "4. He ___ my brother.",
                options: [
                  { option: "am", isCorrect: false },
                  { option: "is", isCorrect: true },
                  { option: "are", isCorrect: false },
                ],
              },
              {
                question: "5. We ___ ready.",
                options: [
                  { option: "is", isCorrect: false },
                  { option: "are", isCorrect: true },
                  { option: "am", isCorrect: false },
                ],
              },
              {
                question: "6. It ___ cold today.",
                options: [
                  { option: "am", isCorrect: false },
                  { option: "is", isCorrect: true },
                  { option: "are", isCorrect: false },
                ],
              },
              {
                question: "7. You ___ my friend.",
                options: [
                  { option: "am", isCorrect: false },
                  { option: "are", isCorrect: true },
                  { option: "is", isCorrect: false },
                ],
              },
              {
                question: "8. They ___ students.",
                options: [
                  { option: "is", isCorrect: false },
                  { option: "are", isCorrect: true },
                  { option: "am", isCorrect: false },
                ],
              },
              {
                question: "9. I ___ from Brazil.",
                options: [
                  { option: "am", isCorrect: true },
                  { option: "is", isCorrect: false },
                  { option: "are", isCorrect: false },
                ],
              },
              {
                question: "10. She ___ tired.",
                options: [
                  { option: "am", isCorrect: false },
                  { option: "is", isCorrect: true },
                  { option: "are", isCorrect: false },
                ],
              },
            ],
          }}
        />

        <Ribbon label="PRODUCTION" />
        <Paragraph
          blocks={[
            {
              items: [
                {
                  text: [
                    {
                      audio: "/assets/audio/general/talk-about-yourself.mp3",
                      part: "Talk about yourself.",
                      type: "",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <List
          bullet={true}
          items={[
            {
              text: ["Name "],
            },
            {
              text: ["Job "],
            },
            {
              text: ["Nationality "],
            },
          ]}
        />
      </div>
    </>
  );
}
