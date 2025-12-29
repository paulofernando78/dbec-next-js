import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Text } from "@/components/molecules/Text";
import { Checking } from "@/components/molecules/Checking";
import { BulletPoint } from "@/components/atoms/BulletPoint";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Column } from "@/components/molecules/Column";
import { List } from "@/components/molecules/List";

import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

const CCQquestions = [
  {
    block: [
      {
        example: "I’m Paul.",
        questions: [
          {
            question: "Is Paul talking about who he is or what he does?",
          },
        ],
      },
      {
        example: "I’m a teacher.",
        questions: [
          {
            question: "Is Paul talking about who he is or what he does?",
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
];

const columnForm = [
  // Affirmative
  {
    bgColor: "var(--green-4)",
    column: "Affirmative",
    blocks: [
      {
        block: [
          {
            audio: "/audio/general/i-am.mp3",
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
            audio: "/audio/general/you-are.mp3",
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
            audio: "/audio/general/he-is.mp3",
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
            audio: "/audio/general/she-is.mp3",
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
            audio: "/audio/general/it-is.mp3",
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
            audio: "/audio/general/we-are.mp3",
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
            audio: "/audio/general/you-are.mp3",
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
            audio: "/audio/general/they-are.mp3",
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
            audio: "/audio/general/i-am-not.mp3",
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
            audio: "/audio/general/you-are-not.mp3",
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
            audio: "/audio/general/he-is-not.mp3",
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
            audio: "/audio/general/she-is-not.mp3",
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
            audio: "/audio/general/it-is-not.mp3",
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
            audio: "/audio/general/we-are-not.mp3",
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
            audio: "/audio/general/you-are-not.mp3",
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
            audio: "/audio/general/they-are-not.mp3",
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
            audio: "/audio/general/am-i.mp3",
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
            audio: "/audio/general/are-you.mp3",
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
            audio: "/audio/general/is-he.mp3",
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
            audio: "/audio/general/is-she.mp3",
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
            audio: "/audio/general/is-it.mp3",
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
            audio: "/audio/general/are-we.mp3",
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
            audio: "/audio/general/are-you.mp3",
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
            audio: "/audio/general/are-they.mp3",
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
];

const fillInTheBlanksExercises = [
  {
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
  },
];

const radioExercises = {
  instruction: "Choose the best response.",
  questions: [
    {
      question: "1. ",
      options: [
        { option: "option 1", isCorrect: true },
        { option: "option 2", isCorrect: false },
        { option: "option 3", isCorrect: false },
      ],
    },
  ],
};

export default function VerbBe() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Verb Be" />
      <div className="line-break">
        <Ribbon label="INTRODUCTION" />

        <Text imgSrc="/img/general/two-people-talking.png" imgPosition="top">
          Teste Teste
        </Text>

        <Ribbon label="PRESENTATION" />

        <Dialogue
          title="Meeting someone"
          image = {[
            {
              img: "/img/general/two-people-talking.png",
              alt: "Two people talking",
              width: 450,
              height: 300
            }
          ]}
          audioSrc="/audio/general/i-am.mp3"
          lines={[
            {
              speaker: "Anna",
              text: [
                "Hi, I",
                {
                  type: "mark",
                  text: "’m",
                },
                " Anna.",
              ],
            },
            {
              speaker: "Scott",
              text: "Hello, I’m Scott.",
            },
            {
              speaker: "Anna",
              text: "I’m a student.",
            },
            {
              speaker: "Scott",
              text: "I’m the teacher.",
            },
            {
              speaker: "Scott",
              text: "Nice to meet you.",
            },
            {
              speaker: "Anna",
              text: "Nice to meet you, too.",
            },
          ]}
        />

        <Ribbon label="Meaning" />

        {/* Identity */}
        <div>
          <Text bold playAudio="/audio/general/identity.mp3">
            Identity <Portuguese>Identidade</Portuguese>:
          </Text>
          <Text playAudio="/audio/general/im-paul.mp3">
            <BulletPoint /> I’m Paul.{" "}
            <span className="portuguese">Sou o Paulo.</span>
          </Text>
          <Text playAudio="/audio/general/hes-my-brother.mp3">
            <BulletPoint /> He’s my brother.{" "}
            <span className="portuguese">Ele é o meu irmão.</span>
          </Text>
          <Text playAudio="/audio/general/theyre-my-friends.mp3">
            <BulletPoint /> They are my friends.{" "}
            <span className="portuguese">Eles são meus amigos.</span>
          </Text>
        </div>

        {/* Job */}
        <div>
          <Text bold playAudio="/audio/general/job.mp3">
            Job <Portuguese>Profissão / Função</Portuguese>:
          </Text>
          <Text playAudio="/audio/general//Im-a-teacher.mp3">
            <BulletPoint /> I’m a teacher.{" "}
            <span className="portuguese">Sou professor(a).</span>
          </Text>
          <Text playAudio="/audio/general/hes-an-engineer.mp3">
            <BulletPoint /> He’s an enginner.
          </Text>
          <Text playAudio="/audio/general/shes-a-doctor.mp3">
            <BulletPoint /> She’s a doctor.
          </Text>
        </div>

        {/* State */}
        <div>
          <Text bold playAudio="/audio/general/state.mp3">
            State <Portuguese>Estado / Condição</Portuguese>:
          </Text>
          <Text playAudio="/audio/general/im-tired.mp3">
            <BulletPoint /> I’m tired.
          </Text>
          <Text playAudio="/audio/general/shes-happy.mp3">
            <BulletPoint /> She’s happy.
          </Text>
          <Text playAudio="/audio/general/shes-happy.mp3">
            <BulletPoint /> This car is fast.
          </Text>
        </div>
        <div>
          <Text bold playAudio="/audio/general/nationality.mp3">
            Nationality <Portuguese>Nacionalidade</Portuguese>:
          </Text>
          <Text playAudio="/audio/general/mike-is-american.mp3">
            <BulletPoint /> Mike is American. He’s from the United States.
          </Text>
          <Text playAudio="/audio/general/George-is-british.mp3">
            <BulletPoint /> George is British. He’s from England.
          </Text>
          <Text playAudio="/audio/general/juan-and-maria-are-mexican.mp3">
            <BulletPoint /> Juan and Maria are Mexican. They’re from Mexico.
          </Text>
        </div>

        <Checking type="CCQ" data={CCQquestions} />

        <Ribbon label="Pronunciation + Form" />
        <Column data={columnForm} />

        <Ribbon label="PRACTICE" />
        <FillInTheBlanks exercises={fillInTheBlanksExercises} />
        <Radio exercises={radioExercises} />

        <Ribbon label="PRODUCTION" />
        <Text bold>Say 3 sentences about you.</Text>
        <List items={["Name", "Job", "Nationality"]} />
      </div>
    </>
  );
}
