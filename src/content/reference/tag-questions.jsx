import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function TagQuestions() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Tag Questions" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Tag questions", type: "bold" },
                    " ",
                    "are short questions added to the end of a sentence to check information or ask for agreement.",
                    " ",
                    {
                      part: "Tag questions são perguntas curtas adicionadas ao final da frase para confirmar informação ou pedir concordância.",
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
            { href: "positive-negative", label: "Positive → Negative" },
            { href: "negative-positive", label: "Negative → Positive" },
            { href: "special", label: "Special Cases" },
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
                      { part: "Structure:", type: "bold" },
                      " statement + comma + auxiliary + subject pronoun?",
                      " ",
                      { part: "Estrutura: frase + vírgula + auxiliar + pronome?", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "You are coming, aren’t you?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is your sister, ",
                      { part: "isn’t she", type: "bold" },
                      "? ",
                      { part: "Ela é sua irmã, não é?", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="positive-negative" label="Positive → Negative" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "If the statement is positive,", type: "bold" },
                      " the tag is negative.",
                      " ",
                      { part: "Se a frase é afirmativa, a tag é negativa.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "You like coffee, don’t you?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She can drive, ",
                      { part: "can’t she", type: "bold" },
                      "? ",
                      { part: "Ela pode dirigir, não pode?", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They have finished, ",
                      { part: "haven’t they", type: "bold" },
                      "? ",
                      { part: "Eles terminaram, não terminaram?", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="negative-positive" label="Negative → Positive" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "If the statement is negative,", type: "bold" },
                      " the tag is positive.",
                      " ",
                      { part: "Se a frase é negativa, a tag é positiva.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "You don’t like tea, do you?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She isn’t coming, ",
                      { part: "is she", type: "bold" },
                      "? ",
                      { part: "Ela não vem, vem?", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They didn’t call, ",
                      { part: "did they", type: "bold" },
                      "? ",
                      { part: "Eles não ligaram, ligaram?", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="special" label="Special Cases" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Let’s", type: "bold" },
                      " → ",
                      { part: "shall we?", type: "mark" },
                      " ",
                      { part: "(Vamos..., não é?)", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Imperatives:", type: "bold" },
                      " → will you? / won’t you?",
                      " ",
                      { part: "(Pedidos e ordens)", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "Let’s go, ",
                      { part: "shall we", type: "bold" },
                      "? ",
                      { part: "Vamos, não é?", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "Open the window, ",
                      { part: "will you", type: "bold" },
                      "? ",
                      { part: "Abra a janela, por favor.", type: "portuguese" },
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
              instruction: "1. Choose the correct tag question.",
              questions: [
                {
                  question: "1. You are coming, ___?",
                  options: [
                    { option: "aren’t you", isCorrect: true },
                    { option: "are you", isCorrect: false },
                    { option: "don’t you", isCorrect: false },
                  ],
                },
                {
                  question: "2. She can drive, ___?",
                  options: [
                    { option: "can’t she", isCorrect: true },
                    { option: "can she", isCorrect: false },
                    { option: "doesn’t she", isCorrect: false },
                  ],
                },
                {
                  question: "3. They finished the work, ___?",
                  options: [
                    { option: "didn’t they", isCorrect: true },
                    { option: "don’t they", isCorrect: false },
                    { option: "haven’t they", isCorrect: false },
                  ],
                },
                {
                  question: "4. You don’t like coffee, ___?",
                  options: [
                    { option: "do you", isCorrect: true },
                    { option: "don’t you", isCorrect: false },
                    { option: "are you", isCorrect: false },
                  ],
                },
                {
                  question: "5. She isn’t here, ___?",
                  options: [
                    { option: "is she", isCorrect: true },
                    { option: "isn’t she", isCorrect: false },
                    { option: "does she", isCorrect: false },
                  ],
                },
                {
                  question: "6. Let’s start now, ___?",
                  options: [
                    { option: "shall we", isCorrect: true },
                    { option: "will we", isCorrect: false },
                    { option: "don’t we", isCorrect: false },
                  ],
                },
                {
                  question: "7. Open the door, ___?",
                  options: [
                    { option: "will you", isCorrect: true },
                    { option: "won’t you", isCorrect: false },
                    { option: "do you", isCorrect: false },
                  ],
                },
                {
                  question: "8. He has finished, ___?",
                  options: [
                    { option: "hasn’t he", isCorrect: true },
                    { option: "didn’t he", isCorrect: false },
                    { option: "doesn’t he", isCorrect: false },
                  ],
                },
                {
                  question: "9. They aren’t ready, ___?",
                  options: [
                    { option: "are they", isCorrect: true },
                    { option: "aren’t they", isCorrect: false },
                    { option: "do they", isCorrect: false },
                  ],
                },
                {
                  question: "10. You like English, ___?",
                  options: [
                    { option: "don’t you", isCorrect: true },
                    { option: "do you", isCorrect: false },
                    { option: "aren’t you", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Complete the sentences with the correct tag.",
              blocks: [
                {
                  block: [
                    { text: "1. She is your friend, " },
                    { blank: "isn’t she" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. They don’t live here, " },
                    { blank: "do they" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. He can swim, " },
                    { blank: "can’t he" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. You finished the task, " },
                    { blank: "didn’t you" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. She isn’t coming, " },
                    { blank: "is she" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. Let’s go now, " },
                    { blank: "shall we" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. Open the window, " },
                    { blank: "will you" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. He has arrived, " },
                    { blank: "hasn’t he" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. They weren’t late, " },
                    { blank: "were they" },
                    { text: "?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. You like pizza, " },
                    { blank: "don’t you" },
                    { text: "?" }
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
