import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function AllVerbsTense() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="All Verb Tenses" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Verb Tenses", type: "bold" },
                    " ",
                    "show when an action happens and how it is viewed (simple, continuous, or perfect).",
                    " ",
                    {
                      part: "Os tempos verbais mostram quando uma ação acontece e como ela é vista (simples, contínua ou perfeita).",
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
            { href: "verb-be-present", label: "Verb Be (Present)" },
            { href: "verb-be-past", label: "Verb Be (PAst)" },
            { href: "exerises", label: "Exercises" },
            {
              lineBreak: true,
            },
            { href: "simple-present", label: "Simple Present" },
            { href: "present-continuous", label: "Present Continuous" },
            { href: "present-perfect", label: "Present Perfect" },
            { href: "present-perfect-continuous", label: "Present Perfect Continuous",},
            { href: "exerises", label: "Exercises" },
            {
              lineBreak: true,
            },
            { href: "simple-past", label: "Simple Past" },
            { href: "past-continuous", label: "Past Continuous" },
            { href: "past-perfect", label: "Past Perfect" },
            { href: "past-perfect-continuous", label: "Past Perfect Continuous",},
            { href: "exerises", label: "Exercises" },
            {
              lineBreak: true,
            },
            { href: "simple-future", label: "Simple Future (Will vs. Going to)" },
            { href: "future-continuous", label: "Future Continuous" },
            { href: "future-perfect", label: "Future Perfect" },
            { href: "future-perfect-continuous", label: "Future Perfect Continuous",},
            { href: "exerises", label: "Exercises" },
            {
              lineBreak: true,
            },
          ]}
        />

        <Section id="verb-be-present" label="Verb Be (Present)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " am / is / are",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " states, identity, age, location.",
                      " ",
                      { part: "Usamos para estado, identidade, idade e localização.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I am a student. ",
                      { part: "Eu sou um estudante.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is at home. ",
                      { part: "Ela está em casa.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="verb-be-past" label="Verb Be (Past)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " was / were",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " past states and situations.",
                      " ",
                      { part: "Usamos para estados e situações no passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I was tired yesterday. ",
                      { part: "Eu estava cansado ontem.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They were late. ",
                      { part: "Eles estavam atrasados.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="simple-present" label="Simple Present" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " routines, facts, and general truths.",
                      " ",
                      { part: "Rotinas, fatos e verdades gerais.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " base verb (+s in 3rd person singular)",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She works in an office. ",
                      { part: "Ela trabalha em um escritório.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "We live in Brazil. ",
                      { part: "Nós moramos no Brasil.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="present-continuous" label="Present Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " am / is / are + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " actions happening now or temporary situations.",
                      " ",
                      { part: "Ações acontecendo agora ou situações temporárias.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I am studying now. ",
                      { part: "Estou estudando agora.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They are working this week. ",
                      { part: "Eles estão trabalhando esta semana.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="present-perfect" label="Present Perfect" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " have / has + past participle",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " life experience and actions with results now.",
                      " ",
                      { part: "Experiências de vida e ações com resultado no presente.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I have visited London. ",
                      { part: "Eu visitei Londres.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She has finished her homework. ",
                      { part: "Ela terminou a lição.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="present-perfect-continuous" label="Present Perfect Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " have / has been + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " duration of an action that started in the past and continues now.",
                      " ",
                      { part: "Duração de uma ação que começou no passado e continua agora.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I have been studying for two hours. ",
                      { part: "Eu estou estudando há duas horas.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="simple-past" label="Simple Past" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " finished actions in the past.",
                      " ",
                      { part: "Ações concluídas no passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " regular (-ed) / irregular verbs",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "We watched a movie. ",
                      { part: "Nós assistimos a um filme.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He went home early. ",
                      { part: "Ele foi para casa cedo.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="past-continuous" label="Past Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " was / were + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " an action in progress in the past.",
                      " ",
                      { part: "Ação em progresso no passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I was studying when you called. ",
                      { part: "Eu estava estudando quando você ligou.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="past-perfect" label="Past Perfect" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " had + past participle",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " an action before another action in the past.",
                      " ",
                      { part: "Ação que aconteceu antes de outra no passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She had left before I arrived. ",
                      { part: "Ela tinha saído antes de eu chegar.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="past-perfect-continuous" label="Past Perfect Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " had been + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " duration before a past moment.",
                      " ",
                      { part: "Duração antes de um momento no passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "They had been waiting for an hour. ",
                      { part: "Eles estavam esperando há uma hora.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="simple-future" label="Simple Future (Will vs. Going to)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Will", type: "bold" },
                      " → decisions made now, promises, predictions.",
                      " ",
                      { part: "Decisões no momento, promessas, previsões.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Going to", type: "bold" },
                      " → plans and strong evidence.",
                      " ",
                      { part: "Planos e evidência forte.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I will help you. ",
                      { part: "Eu vou te ajudar.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She is going to travel tomorrow. ",
                      { part: "Ela vai viajar amanhã.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="future-continuous" label="Future Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " will be + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " an action in progress at a future time.",
                      " ",
                      { part: "Ação em progresso em um momento futuro.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This time tomorrow, I will be working. ",
                      { part: "A essa hora amanhã, estarei trabalhando.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="future-perfect" label="Future Perfect" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " will have + past participle",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " an action finished before a future moment.",
                      " ",
                      { part: "Ação concluída antes de um momento futuro.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "By 6 p.m., she will have finished. ",
                      { part: "Até as 18h, ela terá terminado.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="future-perfect-continuous" label="Future Perfect Continuous" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Form:", type: "bold" },
                      " will have been + verb-ing",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Use:", type: "bold" },
                      " duration up to a future point.",
                      " ",
                      { part: "Duração até um ponto no futuro.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "By next year, I will have been working here for five years. ",
                      { part: "Até o ano que vem, estarei trabalhando aqui há cinco anos.", type: "portuguese" },
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
              instruction: "1. Choose the correct verb tense.",
              questions: [
                {
                  question: "1. She usually ___ to work by bus.",
                  options: [
                    { option: "goes", isCorrect: true },
                    { option: "is going", isCorrect: false },
                    { option: "has gone", isCorrect: false },
                  ],
                },
                {
                  question: "2. I ___ my homework already.",
                  options: [
                    { option: "have finished", isCorrect: true },
                    { option: "finished", isCorrect: false },
                    { option: "am finishing", isCorrect: false },
                  ],
                },
                {
                  question: "3. This time yesterday, we ___ dinner.",
                  options: [
                    { option: "were having", isCorrect: true },
                    { option: "have", isCorrect: false },
                    { option: "had", isCorrect: false },
                  ],
                },
                {
                  question: "4. By tomorrow, he ___ the report.",
                  options: [
                    { option: "will have completed", isCorrect: true },
                    { option: "completes", isCorrect: false },
                    { option: "is completing", isCorrect: false },
                  ],
                },
                {
                  question: "5. They ___ here since 2018.",
                  options: [
                    { option: "have lived", isCorrect: true },
                    { option: "live", isCorrect: false },
                    { option: "are living", isCorrect: false },
                  ],
                },
                {
                  question: "6. Look at those clouds! It ___ rain.",
                  options: [
                    { option: "is going to", isCorrect: true },
                    { option: "will", isCorrect: false },
                    { option: "rains", isCorrect: false },
                  ],
                },
                {
                  question: "7. When I arrived, she ___ on the phone.",
                  options: [
                    { option: "was talking", isCorrect: true },
                    { option: "talked", isCorrect: false },
                    { option: "has talked", isCorrect: false },
                  ],
                },
                {
                  question: "8. He ___ three books this month.",
                  options: [
                    { option: "has read", isCorrect: true },
                    { option: "reads", isCorrect: false },
                    { option: "read", isCorrect: false },
                  ],
                },
                {
                  question: "9. By next week, we ___ here for a year.",
                  options: [
                    { option: "will have been working", isCorrect: true },
                    { option: "will work", isCorrect: false },
                    { option: "are working", isCorrect: false },
                  ],
                },
                {
                  question: "10. She ___ when the lights went out.",
                  options: [
                    { option: "was studying", isCorrect: true },
                    { option: "studied", isCorrect: false },
                    { option: "has studied", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct verb tense.",
              blocks: [
                {
                  block: [
                    { text: "1. I " },
                    { blank: "have been working" },
                    { text: " here since 2020." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. She " },
                    { blank: "is cooking" },
                    { text: " dinner right now." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. They " },
                    { blank: "went" },
                    { text: " to the party last night." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. By 8 p.m., he " },
                    { blank: "will have finished" },
                    { text: " the task." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. When I called, she " },
                    { blank: "was sleeping" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. We " },
                    { blank: "are going to travel" },
                    { text: " next month." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. He " },
                    { blank: "has read" },
                    { text: " that book already." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. This time tomorrow, I " },
                    { blank: "will be working" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. They " },
                    { blank: "had left" },
                    { text: " before we arrived." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. By next year, she " },
                    { blank: "will have been studying" },
                    { text: " here for five years." }
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
