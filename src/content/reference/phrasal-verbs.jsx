import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function PhrasalVerbs() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Phrasal Verbs" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Phrasal verbs", type: "bold" },
                    " ",
                    "are combinations of a verb + particle (preposition or adverb) that create a new meaning.",
                    " ",
                    {
                      part: "Phrasal verbs são combinações de verbo + partícula (preposição ou advérbio) que criam um novo significado.",
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
            { href: "daily", label: "Daily Life" },
            { href: "work", label: "Work & Study" },
            { href: "communication", label: "Communication" },
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
                      { part: "Phrasal verbs", type: "bold" },
                      " ",
                      "can be separable or inseparable.",
                      " ",
                      { part: "Eles podem ser separáveis ou inseparáveis.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Separable:", type: "bold" },
                      " turn off the light / turn the light off",
                    ],
                  },
                  {
                    text: [
                      { part: "Inseparable:", type: "bold" },
                      " look after the kids (not: look the kids after)",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "Please ",
                      { part: "turn off", type: "bold" },
                      " the TV. ",
                      { part: "Por favor, desligue a TV.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "looks after", type: "bold" },
                      " her brother. ",
                      { part: "Ela cuida do irmão.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="daily" label="Daily Life" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common daily phrasal verbs:", type: "bold" },
                      " ",
                      { part: "wake up, get up, sit down, turn on, turn off, put on, take off", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "wake up", type: "bold" },
                      " ",
                      { part: "acordar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I ",
                      { part: "wake up", type: "bold" },
                      " at 7 a.m. ",
                      { part: "Eu acordo às 7 da manhã.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "turn on", type: "bold" },
                      " ",
                      { part: "ligar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "Please ",
                      { part: "turn on", type: "bold" },
                      " the lights. ",
                      { part: "Por favor, ligue as luzes.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "put on", type: "bold" },
                      " ",
                      { part: "vestir / colocar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "put on", type: "bold" },
                      " her jacket. ",
                      { part: "Ela vestiu o casaco.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="work" label="Work & Study" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common at work/school:", type: "bold" },
                      " ",
                      { part: "hand in, look up, carry out, set up, go over", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "hand in", type: "bold" },
                      " ",
                      { part: "entregar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "Please ",
                      { part: "hand in", type: "bold" },
                      " your homework. ",
                      { part: "Por favor, entregue sua lição.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "look up", type: "bold" },
                      " ",
                      { part: "procurar (informação)", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I will ",
                      { part: "look up", type: "bold" },
                      " the word in the dictionary. ",
                      { part: "Vou procurar a palavra no dicionário.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "set up", type: "bold" },
                      " ",
                      { part: "configurar / montar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They ",
                      { part: "set up", type: "bold" },
                      " a new office. ",
                      { part: "Eles montaram um novo escritório.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="communication" label="Communication" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common in communication:", type: "bold" },
                      " ",
                      { part: "find out, get back to, speak up, point out", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "find out", type: "bold" },
                      " ",
                      { part: "descobrir", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I will ",
                      { part: "find out", type: "bold" },
                      " the answer. ",
                      { part: "Vou descobrir a resposta.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "get back to", type: "bold" },
                      " ",
                      { part: "retornar contato", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I will ",
                      { part: "get back to", type: "bold" },
                      " you tomorrow. ",
                      { part: "Eu retorno para você amanhã.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "point out", type: "bold" },
                      " ",
                      { part: "apontar / destacar", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "pointed out", type: "bold" },
                      " the mistake. ",
                      { part: "Ela apontou o erro.", type: "portuguese" },
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
              instruction: "1. Choose the correct phrasal verb.",
              questions: [
                {
                  question: "1. Please ___ the lights before you leave.",
                  options: [
                    { option: "turn off", isCorrect: true },
                    { option: "turn on", isCorrect: false },
                    { option: "put on", isCorrect: false },
                  ],
                },
                {
                  question: "2. I need to ___ this word in the dictionary.",
                  options: [
                    { option: "look up", isCorrect: true },
                    { option: "find out", isCorrect: false },
                    { option: "hand in", isCorrect: false },
                  ],
                },
                {
                  question: "3. She will ___ you later with the answer.",
                  options: [
                    { option: "get back to", isCorrect: true },
                    { option: "speak up", isCorrect: false },
                    { option: "carry out", isCorrect: false },
                  ],
                },
                {
                  question: "4. Please ___ your homework tomorrow.",
                  options: [
                    { option: "hand in", isCorrect: true },
                    { option: "set up", isCorrect: false },
                    { option: "go over", isCorrect: false },
                  ],
                },
                {
                  question: "5. He ___ the main problem in the meeting.",
                  options: [
                    { option: "pointed out", isCorrect: true },
                    { option: "found out", isCorrect: false },
                    { option: "woke up", isCorrect: false },
                  ],
                },
                {
                  question: "6. Can you ___ the plan with me again?",
                  options: [
                    { option: "go over", isCorrect: true },
                    { option: "set up", isCorrect: false },
                    { option: "turn off", isCorrect: false },
                  ],
                },
                {
                  question: "7. I usually ___ at 6 a.m.",
                  options: [
                    { option: "wake up", isCorrect: true },
                    { option: "get back", isCorrect: false },
                    { option: "carry out", isCorrect: false },
                  ],
                },
                {
                  question: "8. They need to ___ a new system.",
                  options: [
                    { option: "set up", isCorrect: true },
                    { option: "look after", isCorrect: false },
                    { option: "sit down", isCorrect: false },
                  ],
                },
                {
                  question: "9. Please ___ and speak louder.",
                  options: [
                    { option: "speak up", isCorrect: true },
                    { option: "get up", isCorrect: false },
                    { option: "turn on", isCorrect: false },
                  ],
                },
                {
                  question: "10. I will ___ what time the meeting starts.",
                  options: [
                    { option: "find out", isCorrect: true },
                    { option: "hand in", isCorrect: false },
                    { option: "put on", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct phrasal verb.",
              blocks: [
                {
                  block: [
                    { text: "1. Please " },
                    { blank: "turn off" },
                    { text: " the TV." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. She will " },
                    { blank: "get back to" },
                    { text: " you tomorrow." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. I need to " },
                    { blank: "look up" },
                    { text: " this word." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. Please " },
                    { blank: "hand in" },
                    { text: " your assignment." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. He " },
                    { blank: "pointed out" },
                    { text: " the mistake." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. I " },
                    { blank: "wake up" },
                    { text: " early on weekdays." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. They " },
                    { blank: "set up" },
                    { text: " a new office." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. Can you " },
                    { blank: "go over" },
                    { text: " the report?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. Please " },
                    { blank: "speak up" },
                    { text: " in class." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. I will " },
                    { blank: "find out" },
                    { text: " the answer." }
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
