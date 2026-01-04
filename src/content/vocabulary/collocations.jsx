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
              text: "do / make",
              type: "bold",
            },
          ]}
        />
        <Paragraph
          lineBreak={true}
          blocks={[
            {
              items: [
                {
                  text: [
                    {
                      part: "Tenho que fazer minha lição (tarefa de casa).",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "I have to make my homework.",
                    },
                  ],
                },
                {
                  correct: true,
                  text: [
                    "",
                    {
                      audio: "/audio/general/i-have-to-do-my-homework.mp3",
                      correct: true,
                      part: "I have to do my homework.",
                    },
                  ],
                },
                {
                  text: [
                    {
                      part: "Tenho que fazer a minha cama.",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "I have to do my bed.",
                    },
                  ],
                },
                {
                  lineBreak: true,
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/I-have-to-make-my-bed.mp3",
                      part: "I have to make my bed.",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <InlineText text={[{ text: "for / with", type: "bold" }]} />
        <Paragraph
          lineBreak={true}
          blocks={[
            {
              items: [
                {
                  text: [
                    {
                      part: "Estou apaixonado por você.",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "I’m in love for you.",
                    },
                  ],
                },
                {
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/im-in-love-with-you.mp3",
                      part: "I’m in love with you.",
                    },
                  ],
                },
                {
                  text: [
                    {
                      part: "Estou preocupado com você.",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "I’m worried with you.",
                    },
                  ],
                },
                {
                  lineBreak: true,
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/im-worried-about-you.mp3",
                      part: "I’m worried about you.",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <InlineText text={[{ text: "fast / quick", type: "bold" }]} />
        <Paragraph
          lineBreak={true}
          blocks={[
            {
              items: [
                {
                  text: [
                    {
                      part: "Um carro rápido",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "It’s a quick car.",
                    },
                  ],
                },
                {
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/.mp3",
                      part: "It’s a fast car.",
                    },
                  ],
                },
                {
                  text: [
                    {
                      part: "Posso ter uma palavrinha com você?",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "Can I have a fast word with you?",
                    },
                  ],
                },
                {
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/Can-I-have-a-quick-word-with-you.mp3",
                      part: "Can I have a quick word with you?",
                    },
                  ],
                },
                {
                  text: [
                    {
                      part: "Ele é um corredor rápido.",
                      type: "translation",
                    },
                  ],
                },
                {
                  text: [
                    {
                      incorrect: true,
                      part: "He’s a quick runner.",
                    },
                  ],
                },
                {
                  audio: "/audio/general/.mp3",
                  text: [
                    {
                      correct: true,
                      audio: "/audio/general/hes-a-fast-runner.mp3",
                      part: "He’s a fast runner.",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <InlineText
          text={[
            {
              part: "Quick costuma enfatizar agilidade, reação, rapidez em pouco tempo:",
              type: "translation",
            },
          ]}
        />
        <List
          items={[
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
