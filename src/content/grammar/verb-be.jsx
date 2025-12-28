import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { Ribbon } from "@/components/atoms/Ribbon";
import { BulletPoint } from "@/components/atoms/BulletPoint";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { List } from "@/components/molecules/List";

const fillInTheBlanksExercises = [
  {
    instructions: "1. Fill in the blanks.",
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
        <div>
          <Text>Identidade:</Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
            <BulletPoint /> I’m Paul.{" "}
            <span className="portuguese">Sou o Paulo.</span>
          </Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/hes-my-brother.mp3">
            <BulletPoint /> He’s my brother.{" "}
            <span className="portuguese">Ele é o meu irmão.</span>
          </Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/theyre-my-friends.mp3">
            <BulletPoint /> They are my friends.{" "}
            <span className="portuguese">Eles são meus amigos.</span>
          </Text>
        </div>
        <div>
          <Text>Profissão:</Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/Im-a-teacher.mp3">
            <BulletPoint /> I’m a teacher.{" "}
            <span className="portuguese">Sou professor(a).</span>
          </Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/hes-an-engineer.mp3">
            <BulletPoint /> He’s an enginner.
          </Text>
          <Text playAudio="/audio/grammar/verb-be/identidade/shes-a-doctor.mp3">
            <BulletPoint /> She’s a doctor.
          </Text>
        </div>
        <div>
          <Text>Estado / Condição:</Text>
          <Text playAudio="/audio/general/im-tired.mp3">
            <BulletPoint /> I’m tired.
          </Text>
          <Text playAudio="/audio/general/shes-happy.mp3">
            <BulletPoint /> She’s happy.
          </Text>
          <Text playAudio="">
            <BulletPoint /> They’re ready to go.
          </Text>
        </div>
        <div>
          <Text>Nacionalidade:</Text>
          <Text playAudio="">
            <BulletPoint /> Mike is American
          </Text>
          <Text playAudio="">
            <BulletPoint /> George is British
          </Text>
          <Text playAudio="">
            <BulletPoint /> Juan and Maria are mexican.
          </Text>
        </div>
        <Ribbon label="PRESENTATION" />
        <Ribbon label="Meaning" />
        <Ribbon label="Pronunciation" />
        <Ribbon label="Form" />
        <div className="flex-container">
          <div>
            <Ribbon label="Affirmative" />
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              I <Bold>am</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              you <Bold>are</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              he <Bold>is</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              she <Bold>is</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              it <Bold>is</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              we <Bold>are</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              uou <Bold>are</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              they <Bold>are</Bold>
            </Text>
          </div>
          <div>
            <Ribbon label="Negative" />
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              I <Bold>am not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              you <Bold>are not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              he <Bold>is not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              she <Bold>is not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              It <Bold>is not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              we <Bold>are not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              you <Bold>are not</Bold>
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              they <Bold>are not</Bold>
            </Text>
          </div>
          <div>
            <Ribbon label="Interrogative" />
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>am</Bold> I ?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>are</Bold> you ?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>is</Bold> he ?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>is</Bold> she ?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>is</Bold> it ?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>are</Bold> we?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>are</Bold> you?
            </Text>
            <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3">
              <Bold>are</Bold> they ?
            </Text>
          </div>
        </div>
        <Ribbon label="PRACTICE" />
        <FillInTheBlanks exercises={fillInTheBlanksExercises} />
        <Radio exercises={radioExercises} />
        <Ribbon label="PRODUCTION" />
        <Text bold>Say 3 sentences about you.</Text>
        <List items={
          [
            "Name:",
            "Job:",
            "Nationality:"
          ]
        } />
      </div>
    </>
  );
}
