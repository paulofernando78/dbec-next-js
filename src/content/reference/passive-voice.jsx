import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Passive Voice" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "The passive voice", type: "bold" },
                    " ",
                    "is used when the focus is on the action or the result, not on who does the action.",
                    " ",
                    {
                      part: "A voz passiva é usada quando o foco está na ação ou no resultado, e não em quem faz a ação.",
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
            { href: "form", label: "Form (Be + Past Participle)" },
            { href: "use", label: "When to Use Passive" },
            { href: "tenses", label: "Passive in Different Tenses" },
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
                      { part: "In the passive voice,", type: "bold" },
                      " the object of the active sentence becomes the subject.",
                      " ",
                      {
                        part: "Na voz passiva, o objeto da frase ativa vira o sujeito.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Active → Passive", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "They built the house. → ",
                      { part: "The house was built.", type: "bold" },
                      " ",
                      { part: "Eles construíram a casa. → A casa foi construída.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="form" label="Form (Be + Past Participle)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Structure:", type: "bold" },
                      " subject + be (in the correct tense) + past participle (+ by + agent)",
                      " ",
                      {
                        part: "Estrutura: sujeito + be (no tempo correto) + particípio passado (+ por + agente)",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "is / was / has been / will be", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "The email ",
                      { part: "was sent", type: "bold" },
                      " by the manager. ",
                      { part: "O e-mail foi enviado pelo gerente.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The work ",
                      { part: "will be finished", type: "bold" },
                      " tomorrow. ",
                      { part: "O trabalho será terminado amanhã.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="use" label="When to Use Passive" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use the passive voice", type: "bold" },
                      " when the agent is unknown, obvious, or not important.",
                      " ",
                      {
                        part: "Usamos a voz passiva quando o agente é desconhecido, óbvio ou não é importante.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "My bike ",
                      { part: "was stolen", type: "bold" },
                      ". ",
                      { part: "Minha bicicleta foi roubada.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The road ",
                      { part: "is being repaired", type: "bold" },
                      ". ",
                      { part: "A estrada está sendo consertada.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="tenses" label="Passive in Different Tenses" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Present Simple:", type: "bold" },
                      " am / is / are + past participle",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The room ",
                      { part: "is cleaned", type: "bold" },
                      " every day.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Past Simple:", type: "bold" },
                      " was / were + past participle",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The window ",
                      { part: "was broken", type: "bold" },
                      " last night.",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Future:", type: "bold" },
                      " will be + past participle",
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The report ",
                      { part: "will be delivered", type: "bold" },
                      " tomorrow.",
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
              instruction: "1. Choose the correct passive form.",
              questions: [
                {
                  question: "1. The book ___ by the teacher.",
                  options: [
                    { option: "was explained", isCorrect: true },
                    { option: "explained", isCorrect: false },
                    { option: "has explain", isCorrect: false },
                  ],
                },
                {
                  question: "2. The room ___ every day.",
                  options: [
                    { option: "is cleaned", isCorrect: true },
                    { option: "was cleaned", isCorrect: false },
                    { option: "has clean", isCorrect: false },
                  ],
                },
                {
                  question: "3. The email ___ yesterday.",
                  options: [
                    { option: "was sent", isCorrect: true },
                    { option: "is sent", isCorrect: false },
                    { option: "has send", isCorrect: false },
                  ],
                },
                {
                  question: "4. The work ___ tomorrow.",
                  options: [
                    { option: "will be finished", isCorrect: true },
                    { option: "is finished", isCorrect: false },
                    { option: "has finished", isCorrect: false },
                  ],
                },
                {
                  question: "5. The car ___ right now.",
                  options: [
                    { option: "is being repaired", isCorrect: true },
                    { option: "was repaired", isCorrect: false },
                    { option: "has repaired", isCorrect: false },
                  ],
                },
                {
                  question: "6. The cake ___ by my mom.",
                  options: [
                    { option: "was made", isCorrect: true },
                    { option: "made", isCorrect: false },
                    { option: "has make", isCorrect: false },
                  ],
                },
                {
                  question: "7. The tickets ___ already.",
                  options: [
                    { option: "have been sold", isCorrect: true },
                    { option: "are sold", isCorrect: false },
                    { option: "sold", isCorrect: false },
                  ],
                },
                {
                  question: "8. The house ___ in 1990.",
                  options: [
                    { option: "was built", isCorrect: true },
                    { option: "is built", isCorrect: false },
                    { option: "has build", isCorrect: false },
                  ],
                },
                {
                  question: "9. The lesson ___ by the students.",
                  options: [
                    { option: "is understood", isCorrect: true },
                    { option: "understood", isCorrect: false },
                    { option: "has understand", isCorrect: false },
                  ],
                },
                {
                  question: "10. The phone ___ when I arrived.",
                  options: [
                    { option: "was being charged", isCorrect: true },
                    { option: "is charged", isCorrect: false },
                    { option: "has charged", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks using the correct passive form.",
              blocks: [
                {
                  block: [
                    { text: "1. The homework " },
                    { blank: "was finished" },
                    { text: " yesterday." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. The movie " },
                    { blank: "is watched" },
                    { text: " by many people." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. The cake " },
                    { blank: "will be made" },
                    { text: " tomorrow." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. The car " },
                    { blank: "is being washed" },
                    { text: " right now." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. The letter " },
                    { blank: "was sent" },
                    { text: " last week." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. The room " },
                    { blank: "has been cleaned" },
                    { text: " already." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. The report " },
                    { blank: "will be delivered" },
                    { text: " soon." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. The window " },
                    { blank: "was broken" },
                    { text: " last night." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. The emails " },
                    { blank: "are sent" },
                    { text: " every morning." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. The house " },
                    { blank: "was built" },
                    { text: " in 2005." }
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
