import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Adverbs() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Adverbs" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Adverbs", type: "bold" },
                    " ",
                    "describe how, when, where, or how often an action happens.",
                    " ",
                    {
                      part: "Advérbios descrevem como, quando, onde ou com que frequência uma ação acontece.",
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
            { href: "basic", label: "What Are Adverbs?" },
            { href: "manner", label: "Adverbs of Manner" },
            { href: "time", label: "Adverbs of Time" },
            { href: "place", label: "Adverbs of Place" },
            { href: "frequency", label: "Adverbs of Frequency" },
            { href: "degree", label: "Adverbs of Degree" },
            { href: "exercises", label: "Exercises" },
          ]}
        />

        <Section id="basic" label="What Are Adverbs?" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs", type: "bold" },
                      " ",
                      "answer questions like:",
                      " ",
                      { part: "How? When? Where? How often?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "He runs quickly.", type: "bold" },
                      " ",
                      { part: "Ele corre rapidamente.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "She arrived yesterday.", type: "bold" },
                      " ",
                      { part: "Ela chegou ontem.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "They live here.", type: "bold" },
                      " ",
                      { part: "Eles moram aqui.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "I always wake up early.", type: "bold" },
                      " ",
                      { part: "Eu sempre acordo cedo.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="manner" label="Adverbs of Manner" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs of manner", type: "bold" },
                      " ",
                      "describe how something happens.",
                      " ",
                      { part: "Descrevem como algo acontece.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "quickly, slowly, carefully, loudly", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She speaks ",
                      { part: "clearly", type: "bold" },
                      ". ",
                      { part: "Ela fala claramente.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He drives ",
                      { part: "carefully", type: "bold" },
                      ". ",
                      { part: "Ele dirige com cuidado.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="time" label="Adverbs of Time" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs of time", type: "bold" },
                      " ",
                      "tell us when something happens.",
                      " ",
                      { part: "Indicam quando algo acontece.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "today, yesterday, now, soon, later", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "We will meet ",
                      { part: "tomorrow", type: "bold" },
                      ". ",
                      { part: "Nós vamos nos encontrar amanhã.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She finished the work ",
                      { part: "yesterday", type: "bold" },
                      ". ",
                      { part: "Ela terminou o trabalho ontem.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="place" label="Adverbs of Place" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs of place", type: "bold" },
                      " ",
                      "tell us where something happens.",
                      " ",
                      { part: "Indicam onde algo acontece.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "here, there, outside, inside, everywhere", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "Come ",
                      { part: "here", type: "bold" },
                      ". ",
                      { part: "Venha aqui.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They are waiting ",
                      { part: "outside", type: "bold" },
                      ". ",
                      { part: "Eles estão esperando lá fora.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="frequency" label="Adverbs of Frequency" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs of frequency", type: "bold" },
                      " ",
                      "tell us how often something happens.",
                      " ",
                      { part: "Indicam com que frequência algo acontece.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "always, usually, often, sometimes, never", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I ",
                      { part: "always", type: "bold" },
                      " drink coffee in the morning. ",
                      { part: "Eu sempre tomo café de manhã.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "never", type: "bold" },
                      " eats fast food. ",
                      { part: "Ela nunca come fast food.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="degree" label="Adverbs of Degree" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Adverbs of degree", type: "bold" },
                      " ",
                      "show how much or how strong something is.",
                      " ",
                      { part: "Indicam intensidade ou quantidade.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "very, too, quite, enough, almost", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This coffee is ",
                      { part: "too", type: "bold" },
                      " hot. ",
                      { part: "Este café está quente demais.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is ",
                      { part: "very", type: "bold" },
                      " happy. ",
                      { part: "Ela está muito feliz.", type: "portuguese" },
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
              instruction: "1. Choose the correct adverb.",
              questions: [
                {
                  question: "1. She speaks very ___.",
                  options: [
                    { option: "clearly", isCorrect: true },
                    { option: "clear", isCorrect: false },
                    { option: "clarity", isCorrect: false },
                  ],
                },
                {
                  question: "2. We will meet ___.",
                  options: [
                    { option: "tomorrow", isCorrect: true },
                    { option: "yesterday", isCorrect: false },
                    { option: "quickly", isCorrect: false },
                  ],
                },
                {
                  question: "3. He always sits ___.",
                  options: [
                    { option: "here", isCorrect: true },
                    { option: "carefully", isCorrect: false },
                    { option: "often", isCorrect: false },
                  ],
                },
                {
                  question: "4. I ___ eat breakfast at home.",
                  options: [
                    { option: "usually", isCorrect: true },
                    { option: "yesterday", isCorrect: false },
                    { option: "outside", isCorrect: false },
                  ],
                },
                {
                  question: "5. This bag is ___ heavy to carry.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "very", isCorrect: false },
                    { option: "enough", isCorrect: false },
                  ],
                },
                {
                  question: "6. The children played ___.",
                  options: [
                    { option: "happily", isCorrect: true },
                    { option: "happy", isCorrect: false },
                    { option: "happiness", isCorrect: false },
                  ],
                },
                {
                  question: "7. She finished her work ___.",
                  options: [
                    { option: "late", isCorrect: true },
                    { option: "lately", isCorrect: false },
                    { option: "later", isCorrect: false },
                  ],
                },
                {
                  question: "8. Come ___. I need help.",
                  options: [
                    { option: "here", isCorrect: true },
                    { option: "there", isCorrect: false },
                    { option: "everywhere", isCorrect: false },
                  ],
                },
                {
                  question: "9. He is ___ tired to continue.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "very", isCorrect: false },
                    { option: "enough", isCorrect: false },
                  ],
                },
                {
                  question: "10. They almost ___.",
                  options: [
                    { option: "won", isCorrect: true },
                    { option: "win", isCorrect: false },
                    { option: "winning", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct adverb.",
              blocks: [
                {
                  block: [
                    { text: "1. She speaks " },
                    { blank: "slowly" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. I will call you " },
                    { blank: "later" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. They live " },
                    { blank: "nearby" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. He is " },
                    { blank: "very" },
                    { text: " tired today." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. She " },
                    { blank: "always" },
                    { text: " arrives on time." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. We met " },
                    { blank: "yesterday" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. The kids are playing " },
                    { blank: "outside" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. He finished the test " },
                    { blank: "quickly" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. She is " },
                    { blank: "too" },
                    { text: " shy to speak." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. They almost " },
                    { blank: "won" },
                    { text: " the game." }
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
