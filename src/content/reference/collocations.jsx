import { ContentToken } from "@/components/molecules/ContentToken";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { Section } from "@/components/molecules/Section";
import { Whiteboard } from "@/components/molecules/Whiteboard";

export default function Collocations() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Collocations" />
      <div className="line-break">
        <Section label="have / take classes" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        part: "have classes",
                        type: "bold"
                      },
                    ],
                  },
                  {
                    text: ["Focus: routine / schedule / fact"],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/reference/have-take/i-have-classes-in-the-morning.mp3",
                      },
                      "I have classes in the morning.",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/reference/have-take/she-has-english-classes-twice-a-week..mp3",
                      },
                      "She has English classes twice a week.",
                    ],
                  },
                ],
              },
              {
                lines: [
                  {
                    text: [
                      {
                        part: "take classes",
                        type: "bold"
                      },
                    ],
                  },
                  {
                    text: ["Focus: action / learning / personal choice"],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/take-classes-1.mp3",
                      },
                      "I take online classes at night.",
                    ],
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/take-classes-2.mp3",
                      },
                      "He takes piano classes.",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section label="do / make" heading={3}>
          <Paragraph
            lineBreak={true}
            blocks={[
              {
                lines: [
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
        </Section>

        <Section label="for / with" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
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
        </Section>

        <Section label="fast / quick" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
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
                        audio:
                          "/audio/general/Can-I-have-a-quick-word-with-you.mp3",
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
          <ContentToken
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
        </Section>
      </div>
    </>
  );
}
