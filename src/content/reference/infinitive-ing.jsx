import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function InfinitiveIng() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Infinitive vs. -ing" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Infinitive and -ing forms", type: "bold" },
                    " ",
                    "are used after certain verbs and expressions to show purpose, intention, or the activity itself.",
                    " ",
                    {
                      part: "As formas no infinitivo e com -ing são usadas após certos verbos e expressões para mostrar propósito, intenção ou a atividade em si.",
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
            { href: "infinitive", label: "Infinitive (to + verb)" },
            { href: "gerund", label: "-ing (Gerund)" },
            { href: "change-meaning", label: "Verbs that Change Meaning" },
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
                      { part: "Some verbs are followed by the infinitive (to + verb),", type: "bold" },
                      " while others are followed by the -ing form.",
                      " ",
                      {
                        part: "Alguns verbos são seguidos pelo infinitivo (to + verbo), enquanto outros são seguidos pela forma -ing.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "to study / studying", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I want ",
                      { part: "to study", type: "bold" },
                      " English. ",
                      { part: "Eu quero estudar inglês.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I enjoy ",
                      { part: "studying", type: "bold" },
                      " English. ",
                      { part: "Eu gosto de estudar inglês.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="infinitive" label="Infinitive (to + verb)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use the infinitive", type: "bold" },
                      " after many verbs, adjectives, and to show purpose.",
                      " ",
                      { part: "Usamos o infinitivo após muitos verbos, adjetivos e para mostrar propósito.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "want, decide, need, hope, plan, try", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She decided ",
                      { part: "to leave", type: "bold" },
                      ". ",
                      { part: "Ela decidiu sair.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I went to the store ",
                      { part: "to buy", type: "bold" },
                      " milk. ",
                      { part: "Eu fui à loja para comprar leite.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="gerund" label="-ing (Gerund)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use the -ing form", type: "bold" },
                      " after certain verbs and as a noun.",
                      " ",
                      { part: "Usamos a forma -ing após certos verbos e como substantivo.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "enjoy, avoid, finish, keep, suggest, mind", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She enjoys ",
                      { part: "reading", type: "bold" },
                      ". ",
                      { part: "Ela gosta de ler.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "Swimming ",
                      { part: "is good", type: "bold" },
                      " for your health. ",
                      { part: "Nadar é bom para sua saúde.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="change-meaning" label="Verbs that Change Meaning" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Some verbs change meaning", type: "bold" },
                      " depending on whether they are followed by the infinitive or the -ing form.",
                      " ",
                      { part: "Alguns verbos mudam de significado dependendo se são seguidos por infinitivo ou -ing.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "remember, stop, try, forget", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I remembered ",
                      { part: "to call", type: "bold" },
                      " her. ",
                      { part: "Eu lembrei de ligar para ela (ação depois).", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I remember ",
                      { part: "calling", type: "bold" },
                      " her. ",
                      { part: "Eu lembro de ter ligado para ela (memória passada).", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "He stopped ",
                      { part: "to smoke", type: "bold" },
                      ". ",
                      { part: "Ele parou para fumar (parou outra coisa para fumar).", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He stopped ",
                      { part: "smoking", type: "bold" },
                      ". ",
                      { part: "Ele parou de fumar (cessou o hábito).", type: "portuguese" },
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
              instruction: "1. Choose the correct form (to + verb or -ing).",
              questions: [
                {
                  question: "1. I decided ___ a new language.",
                  options: [
                    { option: "to learn", isCorrect: true },
                    { option: "learning", isCorrect: false },
                    { option: "learn", isCorrect: false },
                  ],
                },
                {
                  question: "2. She enjoys ___ music.",
                  options: [
                    { option: "listening to", isCorrect: true },
                    { option: "to listen to", isCorrect: false },
                    { option: "listen", isCorrect: false },
                  ],
                },
                {
                  question: "3. We stopped ___ a break.",
                  options: [
                    { option: "to take", isCorrect: true },
                    { option: "taking", isCorrect: false },
                    { option: "take", isCorrect: false },
                  ],
                },
                {
                  question: "4. He avoided ___ late.",
                  options: [
                    { option: "arriving", isCorrect: true },
                    { option: "to arrive", isCorrect: false },
                    { option: "arrive", isCorrect: false },
                  ],
                },
                {
                  question: "5. I remembered ___ her about the meeting.",
                  options: [
                    { option: "to tell", isCorrect: true },
                    { option: "telling", isCorrect: false },
                    { option: "tell", isCorrect: false },
                  ],
                },
                {
                  question: "6. They suggested ___ earlier.",
                  options: [
                    { option: "leaving", isCorrect: true },
                    { option: "to leave", isCorrect: false },
                    { option: "leave", isCorrect: false },
                  ],
                },
                {
                  question: "7. He forgot ___ the door.",
                  options: [
                    { option: "to lock", isCorrect: true },
                    { option: "locking", isCorrect: false },
                    { option: "lock", isCorrect: false },
                  ],
                },
                {
                  question: "8. She tried ___ the problem.",
                  options: [
                    { option: "to solve", isCorrect: true },
                    { option: "solving", isCorrect: false },
                    { option: "solve", isCorrect: false },
                  ],
                },
                {
                  question: "9. I don’t mind ___ here.",
                  options: [
                    { option: "waiting", isCorrect: true },
                    { option: "to wait", isCorrect: false },
                    { option: "wait", isCorrect: false },
                  ],
                },
                {
                  question: "10. He hopes ___ a promotion.",
                  options: [
                    { option: "to get", isCorrect: true },
                    { option: "getting", isCorrect: false },
                    { option: "get", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct form (to + verb or -ing).",
              blocks: [
                {
                  block: [
                    { text: "1. She decided " },
                    { blank: "to move" },
                    { text: " to another city." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. I enjoy " },
                    { blank: "reading" },
                    { text: " before bed." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. He stopped " },
                    { blank: "to smoke" },
                    { text: " for a moment." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. They avoided " },
                    { blank: "talking" },
                    { text: " about the problem." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. I remembered " },
                    { blank: "to call" },
                    { text: " my boss." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. She suggested " },
                    { blank: "going" },
                    { text: " by taxi." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. He forgot " },
                    { blank: "to bring" },
                    { text: " his keys." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. We don’t mind " },
                    { blank: "waiting" },
                    { text: " here." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. She tried " },
                    { blank: "to explain" },
                    { text: " the rule." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. He plans " },
                    { blank: "to travel" },
                    { text: " next year." }
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
