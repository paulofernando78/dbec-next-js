import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Prepositions() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Prepositions" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Prepositions", type: "bold" },
                    " ",
                    "show the relationship between a noun or pronoun and another word in the sentence.",
                    " ",
                    {
                      part: "Preposições mostram a relação entre um substantivo ou pronome e outra palavra na frase.",
                      type: "portuguese",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <Contents
          items={[
            { href: "basic", label: "Overview" },
            { href: "time", label: "Prepositions of Time" },
            { href: "place", label: "Prepositions of Place" },
            { href: "movement", label: "Prepositions of Movement" },
            { href: "phrases", label: "Common Prepositional Phrases" },
            { href: "exercises", label: "Exercises" },
          ]}
        />

        <Section id="basic" label="Overview" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Prepositions", type: "bold" },
                      " ",
                      "often answer the questions:",
                      " ",
                      { part: "Where? When? How?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "in, on, at, to, from, with, by, about", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "The keys are ",
                      { part: "on", type: "bold" },
                      " the table. ",
                      { part: "As chaves estão sobre a mesa.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "We will meet ",
                      { part: "at", type: "bold" },
                      " 5 p.m. ",
                      { part: "Nós vamos nos encontrar às 5 horas.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="time" label="Prepositions of Time" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use", type: "bold" },
                      " ",
                      { part: "in / on / at", type: "mark" },
                      " for time expressions.",
                      " ",
                      { part: "Usamos in / on / at para expressões de tempo.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "in", type: "bold" },
                      " → months, years, long periods ",
                      { part: "(in June, in 2025)", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "on", type: "bold" },
                      " → days and dates ",
                      { part: "(on Monday, on July 5th)", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "at", type: "bold" },
                      " → exact times ",
                      { part: "(at 7 a.m., at night)", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "My birthday is ",
                      { part: "in", type: "bold" },
                      " May. ",
                      { part: "Meu aniversário é em maio.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "We have class ",
                      { part: "on", type: "bold" },
                      " Friday. ",
                      { part: "Nós temos aula na sexta-feira.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The movie starts ",
                      { part: "at", type: "bold" },
                      " 8 p.m. ",
                      { part: "O filme começa às 8 da noite.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="place" label="Prepositions of Place" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common prepositions of place:", type: "bold" },
                      " ",
                      { part: "in / on / at / under / next to / between", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "The cat is ",
                      { part: "under", type: "bold" },
                      " the table. ",
                      { part: "O gato está debaixo da mesa.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is sitting ",
                      { part: "next to", type: "bold" },
                      " me. ",
                      { part: "Ela está sentada ao meu lado.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The bank is ",
                      { part: "between", type: "bold" },
                      " the school and the supermarket. ",
                      { part: "O banco fica entre a escola e o supermercado.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="movement" label="Prepositions of Movement" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Prepositions of movement", type: "bold" },
                      " ",
                      "show direction.",
                      " ",
                      { part: "Mostram direção.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "to, into, out of, through, across", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She walked ",
                      { part: "into", type: "bold" },
                      " the room. ",
                      { part: "Ela entrou na sala.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They ran ",
                      { part: "across", type: "bold" },
                      " the street. ",
                      { part: "Eles atravessaram a rua correndo.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="phrases" label="Common Prepositional Phrases" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common phrases:", type: "bold" },
                      " ",
                      { part: "in front of, at home, on time, by accident, in charge of", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "Please be ",
                      { part: "on time", type: "bold" },
                      ". ",
                      { part: "Por favor, seja pontual.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He broke the glass ",
                      { part: "by accident", type: "bold" },
                      ". ",
                      { part: "Ele quebrou o copo sem querer.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is ",
                      { part: "in charge of", type: "bold" },
                      " the project. ",
                      { part: "Ela está responsável pelo projeto.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="exercises" label="Exercises" heading={3}>
          <Radio
            exercise={{
              instruction: "1. Choose the correct preposition.",
              questions: [
                {
                  question: "1. We will meet ___ Monday.",
                  options: [
                    { option: "on", isCorrect: true },
                    { option: "in", isCorrect: false },
                    { option: "at", isCorrect: false },
                  ],
                },
                {
                  question: "2. The keys are ___ the table.",
                  options: [
                    { option: "on", isCorrect: true },
                    { option: "under", isCorrect: false },
                    { option: "between", isCorrect: false },
                  ],
                },
                {
                  question: "3. She arrived ___ 7 p.m.",
                  options: [
                    { option: "at", isCorrect: true },
                    { option: "on", isCorrect: false },
                    { option: "in", isCorrect: false },
                  ],
                },
                {
                  question: "4. The cat is ___ the chair and the sofa.",
                  options: [
                    { option: "between", isCorrect: true },
                    { option: "under", isCorrect: false },
                    { option: "across", isCorrect: false },
                  ],
                },
                {
                  question: "5. He walked ___ the door.",
                  options: [
                    { option: "through", isCorrect: true },
                    { option: "at", isCorrect: false },
                    { option: "on", isCorrect: false },
                  ],
                },
                {
                  question: "6. My birthday is ___ June.",
                  options: [
                    { option: "in", isCorrect: true },
                    { option: "on", isCorrect: false },
                    { option: "at", isCorrect: false },
                  ],
                },
                {
                  question: "7. She sits ___ me in class.",
                  options: [
                    { option: "next to", isCorrect: true },
                    { option: "between", isCorrect: false },
                    { option: "across", isCorrect: false },
                  ],
                },
                {
                  question: "8. They ran ___ the street.",
                  options: [
                    { option: "across", isCorrect: true },
                    { option: "into", isCorrect: false },
                    { option: "on", isCorrect: false },
                  ],
                },
                {
                  question: "9. He did it ___ accident.",
                  options: [
                    { option: "by", isCorrect: true },
                    { option: "on", isCorrect: false },
                    { option: "with", isCorrect: false },
                  ],
                },
                {
                  question: "10. She is ___ charge of the team.",
                  options: [
                    { option: "in", isCorrect: true },
                    { option: "on", isCorrect: false },
                    { option: "at", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct preposition.",
              blocks: [
                {
                  block: [
                    { text: "1. We live " },
                    { blank: "in" },
                    { text: " Brazil." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. The book is " },
                    { blank: "on" },
                    { text: " the desk." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. She arrived " },
                    { blank: "at" },
                    { text: " noon." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. The dog is " },
                    { blank: "under" },
                    { text: " the bed." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. He sat " },
                    { blank: "between" },
                    { text: " his friends." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. She walked " },
                    { blank: "into" },
                    { text: " the room." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. Please be " },
                    { blank: "on" },
                    { text: " time." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. He did it " },
                    { blank: "by" },
                    { text: " accident." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. The park is " },
                    { blank: "next to" },
                    { text: " the school." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. They walked " },
                    { blank: "across" },
                    { text: " the bridge." }
                  ]
                }
              ]
            }}
          />
        </Section>
      </div>
    </>
  );
}
