import { Card } from "@/components/atoms/Card";
import { InlineText } from "@/components/molecules/InlineText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { Whiteboard } from "@/components/molecules/Whiteboard";

export default function Collocations() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Collocations" />
      <div className="line-break">
        <InlineText
          text={[
            {
              audio: "/audio/general/",
              text: "do / make",
              type: "bold",
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Tenho que fazer minha lição (tarefa de casa).",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["I have to make my homework."],
            },
            {
              correct: true,
              audio: "/audio/general/i-have-to-do-my-homework.mp3",
              text: ["I have to do my homework."],
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Tenho que fazer a minha cama.",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["I have to do my bed."],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["I have to make my bed."],
            },
          ]}
        />
        <InlineText
          text={[
            {
              text: "for / with",
              type: "bold",
              audio: "/audio/general/",
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Estou apaixonado por você.",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["I’m in love for you."],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["I’m in love with you."],
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Estou preocupado com você.",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["I’m worried with you."],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["I’m worried about you."],
            },
          ]}
        />
        <InlineText
          text={[
            {
              text: "fast / quick",
              type: "bold",
              audio: "/audio/general/",
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Um carro rápido",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["It’s a quick car."],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["It’s a fast car."],
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Posso ter uma palavrinha com você?",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["Can I have a fast word with you?"],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["Can I have a quick word with you?"],
            },
          ]}
        />
        <Paragraph
          paragraphs={[
            {
              text: [
                {
                  text: "Ele é um corredor rápido.",
                  type: "translation",
                },
              ],
            },
            {
              incorrect: true,
              text: ["He’s a quick runner."],
            },
            {
              correct: true,
              audio: "/audio/general/.mp3",
              text: ["He’s a fast runner."],
            },
          ]}
        />
        <InlineText
          text={[
            {
              text: "Quick costuma enfatizar agilidade, reação, rapidez em pouco tempo:",
              type: "translation",
            },
          ]}
        />

        <Card
          texts={[
            {
              text: ["quick movement"],
            },
            {
              text: ["quick decision"],
            },
            {
              text: ["quick response"],
            },
            {
              text: ["quick learner"],
            },
          ]}
        />
      </div>
    </>
  );
}
