import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Paragraph } from "@/components/molecules/Paragraph";
import { InlineText } from "@/components/molecules/InlineText";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Checking } from "@/components/molecules/Checking";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function VerbBe() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Verb Be" />
      <div className="line-break">
        <Ribbon label="Introduction" />
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

        <Ribbon label="Presentation" />
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

        <Ribbon label="Meaning" bgColor="var(--gray-4)" />

        {/* Identity */}
        <div>
          <p>
            <InlineText
              text={[
                {
                  audio: "/assets/audio/general/identity.mp3",
                  part: "Identity",
                  type: "bold",
                },
                " ",
                { part: "Identidade", type: "portuguese" },
                ":",
              ]}
            />
          </p>

          <List
            bullet={false}
            items={[
              {
                text: [
                  {
                    audio: "/assets/audio/general/im-paul.mp3",
                    part: "I’m Paul.",
                  },
                  " ",
                  { part: "Sou o Paulo.", type: "portuguese" },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/hes-my-brother.mp3",
                    part: "He’s my brother.",
                  },
                  " ",
                  { part: "Ele é o meu irmão.", type: "portuguese" },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/theyre-my-friends.mp3",
                    part: "They are my friends.",
                  },
                  " ",
                  { part: "Eles são meus amigos.", type: "portuguese" },
                ],
              },
            ]}
          />
        </div>

        {/* Job */}
        <div>
          <p>
            <InlineText
              text={[
                {
                  audio: "/assets/audio/general/job.mp3",
                  part: "Job",
                  type: "bold",
                },
                " ",
                { part: "Profissão / Função", type: "portuguese" },
                ":",
              ]}
            />
          </p>

          <List
            bullet={false}
            items={[
              {
                text: [
                  {
                    audio: "/assets/audio/general/Im-a-teacher.mp3",
                    part: "I’m a teacher.",
                  },
                  " ",
                  { part: "Sou professor(a).", type: "portuguese" },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/hes-an-engineer.mp3",
                    part: "He’s an engineer.",
                  },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/shes-a-doctor.mp3",
                    part: "She’s a doctor.",
                  },
                ],
              },
            ]}
          />
        </div>

        {/* State */}
        <div>
          <InlineText
            text={[
              {
                audio: "/assets/audio/general/state.mp3",
                part: "State / Condition / Description",
                type: "bold",
              },
              " ",
              { part: "Estado / Condição / Descrição", type: "portuguese" },
              ":",
            ]}
          />

          <List
            bullet={false}
            items={[
              {
                text: [
                  {
                    audio: "/assets/audio/general/im-tired.mp3",
                    part: "I’m tired.",
                  },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/shes-happy.mp3",
                    part: "She’s happy.",
                  },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/shes-happy.mp3",
                    part: "This car is fast.",
                  },
                ],
              },
            ]}
          />
        </div>

        {/* Nationality */}
        <div>
          <p>
            <InlineText
              text={[
                {
                  audio: "/assets/audio/general/nationality.mp3",
                  part: "Nationality",
                  type: "bold",
                },
                " ",
                { part: "Nacionalidade", type: "portuguese" },
                ":",
              ]}
            />
          </p>

          <List
            bullet={false}
            items={[
              {
                text: [
                  {
                    audio: "/assets/audio/general/nationality.mp3",
                    part: "Mike is American. He’s from the United States.",
                  },
                ],
              },
              {
                text: [
                  {
                    audio: "/assets/audio/general/George-is-british.mp3",
                    part: "George is British. He’s from England.",
                  },
                ],
              },
              {
                text: [
                  {
                    audio:
                      "/assets/audio/general/juan-and-maria-are-mexican.mp3",
                    part: "Juan and Maria are Mexican. They’re from Mexico.",
                  },
                ],
              },
            ]}
          />
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

        <Ribbon label="Pronunciation + Form" bgColor="var(--gray-4)" />
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

        <Ribbon label="Practice" />
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

        <Ribbon label="Production" />
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
