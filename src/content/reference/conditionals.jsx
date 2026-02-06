import { Whiteboard } from "@/components/molecules/Whiteboard";
import { ContentToken } from "@/components/molecules/ContentToken";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Conditionals() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Conditionals" />
      <div className="line-break">
        <ContentToken
          text={[
            { part: "English Conditionals – Reference Guide", type: "bold" },
          ]}
        />
        <Contents
          items={[
            { href: "zero-conditional", label: "Zero Conditional" },
            { href: "first-conditional", label: "First Conditional" },
            { href: "second-conditional", label: "Second Conditional" },
            { href: "third-conditional", label: "Third Conditional" },
          ]}
        />
        <Section id="zero-conditional" label="Zero Conditional" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Zero Conditional", type: "bold" },
                      " ",
                      {
                        part: "is used for facts, routines, and things that are always true.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Structure: If / When + present simple, present simple.",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "If you heat water, it boils.", type: "bold" },
                      " ",
                      {
                        part: "Se você aquece a água, ela ferve.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "When I wake up early, I feel better.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Quando eu acordo cedo, eu me sinto melhor.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If it rains, the ground gets wet.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se chove, o chão fica molhado.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="first-conditional" label="First Conditional" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "First Conditional", type: "bold" },
                      " ",
                      {
                        part: "is used for real and possible future situations and their results.",
                        type: "portuguese",
                      },
                    ],
                  },
                   {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Structure: If / When + present simple, will + base verb.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If it rains, I will stay at home.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se chover, eu vou ficar em casa.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If you study, you will pass the test.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se você estudar, você vai passar na prova.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "When she arrives, I will call you.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Quando ela chegar, eu vou te ligar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="second-conditional" label="Second Conditional" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Second Conditional", type: "bold" },
                      " ",
                      {
                        part: "is used for unreal, hypothetical, or unlikely situations in the present or future.",
                        type: "portuguese",
                      },
                    ],
                  },
                   {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Structure: If + past simple, would + base verb.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If I had more time, I would travel.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se eu tivesse mais tempo, eu viajaria.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If she were rich, she would buy a big house.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se ela fosse rica, ela compraria uma casa grande.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If we lived closer, we would see each other more often.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se morássemos mais perto, nós nos veríamos com mais frequência.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="third-conditional" label="Third Conditional" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Third Conditional", type: "bold" },
                      " ",
                      {
                        part: "is used to talk about unreal situations in the past and their imagined results.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                        part: "Structure: If + past perfect, would have + past participle.",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If I had studied, I would have passed the exam.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se eu tivesse estudado, eu teria passado na prova.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If she had left earlier, she would have arrived on time.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se ela tivesse saído mais cedo, ela teria chegado no horário.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      {
                        part: "If we had known about the meeting, we would have gone.",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "Se nós soubéssemos da reunião, nós teríamos ido.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
