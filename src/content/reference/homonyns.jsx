import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";

export default function Homonyms() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Homonyms" />
      <div className="line-break">
        <Contents
          items={[
            { href: "basic", label: "Overview" },
            { href: "homophones", label: "Homophones" },
            { href: "homographs", label: "Homographs" },
            { href: "true-homonyms", label: "True Homonyms" },
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
                      { part: "Homonyms", type: "bold" },
                      " are words that look or sound the same but have different meanings. ",
                      {
                        part: "Homônimos são palavras que têm a mesma forma ou som, mas significados diferentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="homophones" label="Homophones" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Homophones", type: "bold" },
                      " sound the same but have different spelling and meaning. ",
                      {
                        part: "Soam iguais, mas têm escrita e significado diferentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [{ part: "to / too / two", type: "mark" }],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I want ",
                      { part: "to", type: "bold" },
                      " go home. ",
                      { part: "Eu quero ir para casa.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "It’s ",
                      { part: "too", type: "bold" },
                      " hot. ",
                      { part: "Está quente demais.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I have ",
                      { part: "two", type: "bold" },
                      " brothers. ",
                      { part: "Eu tenho dois irmãos.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="homographs" label="Homographs" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Homographs", type: "bold" },
                      " are spelled the same but have different meanings (and sometimes pronunciation). ",
                      {
                        part: "Têm a mesma escrita, mas significados (e às vezes pronúncia) diferentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [{ part: "lead", type: "mark" }],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "Please ",
                      { part: "lead", type: "bold" },
                      " the way. ",
                      { part: "Por favor, lidere o caminho.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The pipe is made of ",
                      { part: "lead", type: "bold" },
                      ". ",
                      { part: "O cano é feito de chumbo.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="true-homonyms" label="True Homonyms" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "True homonyms", type: "bold" },
                      " have the same spelling and pronunciation but different meanings. ",
                      {
                        part: "Têm a mesma escrita e pronúncia, mas significados diferentes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [{ part: "bank", type: "mark" }],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I went to the ",
                      { part: "bank", type: "bold" },
                      " to get money. ",
                      { part: "Eu fui ao banco sacar dinheiro.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "We sat on the river ",
                      { part: "bank", type: "bold" },
                      ". ",
                      { part: "Sentamos na margem do rio.", type: "portuguese" },
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
              instruction: "1. Choose the correct word.",
              questions: [
                {
                  question: "1. I have ___ apples.",
                  options: [
                    { option: "two", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "to", isCorrect: false },
                  ],
                },
                {
                  question: "2. It’s ___ late to call.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "3. She wants ___ travel.",
                  options: [
                    { option: "to", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "4. The ___ is very high.",
                  options: [
                    { option: "bank", isCorrect: true },
                    { option: "lead", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "5. He will ___ the team.",
                  options: [
                    { option: "lead", isCorrect: true },
                    { option: "bank", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "6. The ring is made of ___.",
                  options: [
                    { option: "lead", isCorrect: true },
                    { option: "bank", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "7. We sat by the river ___.",
                  options: [
                    { option: "bank", isCorrect: true },
                    { option: "two", isCorrect: false },
                    { option: "too", isCorrect: false },
                  ],
                },
                {
                  question: "8. She has ___ dogs.",
                  options: [
                    { option: "two", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "too", isCorrect: false },
                  ],
                },
                {
                  question: "9. It’s ___ cold outside.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "10. I need ___ finish this.",
                  options: [
                    { option: "to", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "11. I have ___ brothers.",
                  options: [
                    { option: "two", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "to", isCorrect: false },
                  ],
                },
                {
                  question: "12. It’s ___ hot today.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "13. She wants ___ learn English.",
                  options: [
                    { option: "to", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "14. He will ___ the project.",
                  options: [
                    { option: "lead", isCorrect: true },
                    { option: "bank", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "15. The boat is near the river ___.",
                  options: [
                    { option: "bank", isCorrect: true },
                    { option: "lead", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "16. The pipe is made of ___.",
                  options: [
                    { option: "lead", isCorrect: true },
                    { option: "bank", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "17. It’s ___ late now.",
                  options: [
                    { option: "too", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "18. She has ___ cats.",
                  options: [
                    { option: "two", isCorrect: true },
                    { option: "to", isCorrect: false },
                    { option: "too", isCorrect: false },
                  ],
                },
                {
                  question: "19. I need ___ go home.",
                  options: [
                    { option: "to", isCorrect: true },
                    { option: "too", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
                {
                  question: "20. They sat on the river ___.",
                  options: [
                    { option: "bank", isCorrect: true },
                    { option: "lead", isCorrect: false },
                    { option: "two", isCorrect: false },
                  ],
                },
              ],
            }}
          />
        </Section>
      </div>
    </>
  );
}
