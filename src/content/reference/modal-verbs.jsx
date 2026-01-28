import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Modal Verbs" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Modal verbs", type: "bold" },
                    " ",
                    "are auxiliary verbs used to express ability, possibility, permission, obligation, and advice.",
                    " ",
                    {
                      part: "Os verbos modais são verbos auxiliares usados para expressar habilidade, possibilidade, permissão, obrigação e conselho.",
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
            { href: "ability", label: "Ability (Can / Could)" },
            { href: "possibility", label: "Possibility (May / Might / Could)" },
            { href: "permission", label: "Permission (Can / May)" },
            { href: "obligation", label: "Obligation (Must / Have to)" },
            { href: "advice", label: "Advice (Should / Ought to)" },
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
                      { part: "Modal verbs", type: "bold" },
                      " ",
                      "do not change form and are followed by the base verb (without 'to').",
                      " ",
                      { part: "Verbos modais não mudam de forma e são seguidos pelo verbo na forma base (sem 'to').", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "can, could, may, might, must, should, will, would", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "can", type: "bold" },
                      " swim. ",
                      { part: "Ela pode nadar.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "You ",
                      { part: "must", type: "bold" },
                      " wear a seatbelt. ",
                      { part: "Você deve usar cinto de segurança.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="ability" label="Ability (Can / Could)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use", type: "bold" },
                      " ",
                      { part: "can", type: "mark" },
                      " for present ability and ",
                      { part: "could", type: "mark" },
                      " for past ability.",
                      " ",
                      { part: "Usamos can para habilidade no presente e could para o passado.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I ",
                      { part: "can", type: "bold" },
                      " drive. ",
                      { part: "Eu sei dirigir.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "could", type: "bold" },
                      " read at age five. ",
                      { part: "Ela sabia ler aos cinco anos.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="possibility" label="Possibility (May / Might / Could)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "These modals", type: "bold" },
                      " express possibility.",
                      " ",
                      { part: "Esses modais expressam possibilidade.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "It may / might / could rain", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "He ",
                      { part: "might", type: "bold" },
                      " be late. ",
                      { part: "Ele pode se atrasar.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "We ",
                      { part: "may", type: "bold" },
                      " see her later. ",
                      { part: "Podemos vê-la mais tarde.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="permission" label="Permission (Can / May)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use", type: "bold" },
                      " ",
                      { part: "can", type: "mark" },
                      " for informal permission and ",
                      { part: "may", type: "mark" },
                      " for more formal situations.",
                      " ",
                      { part: "Usamos can para permissão informal e may para situações formais.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      { part: "Can", type: "bold" },
                      " I leave early? ",
                      { part: "Posso sair mais cedo?", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      { part: "May", type: "bold" },
                      " I come in? ",
                      { part: "Posso entrar?", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="obligation" label="Obligation (Must / Have to)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Must", type: "bold" },
                      " shows strong obligation or rules. ",
                      { part: "Have to", type: "bold" },
                      " shows external obligation.",
                      " ",
                      { part: "Must indica obrigação forte ou regra; have to indica obrigação externa.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "You ",
                      { part: "must", type: "bold" },
                      " wear a helmet. ",
                      { part: "Você deve usar capacete.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I ",
                      { part: "have to", type: "bold" },
                      " work tomorrow. ",
                      { part: "Eu tenho que trabalhar amanhã.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="advice" label="Advice (Should / Ought to)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use", type: "bold" },
                      " ",
                      { part: "should", type: "mark" },
                      " and ",
                      { part: "ought to", type: "mark" },
                      " to give advice.",
                      " ",
                      { part: "Usamos should e ought to para dar conselhos.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "You ",
                      { part: "should", type: "bold" },
                      " drink more water. ",
                      { part: "Você deveria beber mais água.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She ",
                      { part: "ought to", type: "bold" },
                      " rest today. ",
                      { part: "Ela deveria descansar hoje.", type: "portuguese" },
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
              instruction: "1. Choose the correct modal verb.",
              questions: [
                {
                  question: "1. You ___ wear a seatbelt.",
                  options: [
                    { option: "must", isCorrect: true },
                    { option: "may", isCorrect: false },
                    { option: "could", isCorrect: false },
                  ],
                },
                {
                  question: "2. She ___ swim when she was five.",
                  options: [
                    { option: "could", isCorrect: true },
                    { option: "can", isCorrect: false },
                    { option: "may", isCorrect: false },
                  ],
                },
                {
                  question: "3. It ___ rain later.",
                  options: [
                    { option: "might", isCorrect: true },
                    { option: "must", isCorrect: false },
                    { option: "should", isCorrect: false },
                  ],
                },
                {
                  question: "4. ___ I open the window?",
                  options: [
                    { option: "May", isCorrect: true },
                    { option: "Must", isCorrect: false },
                    { option: "Should", isCorrect: false },
                  ],
                },
                {
                  question: "5. You ___ see a doctor.",
                  options: [
                    { option: "should", isCorrect: true },
                    { option: "may", isCorrect: false },
                    { option: "can", isCorrect: false },
                  ],
                },
                {
                  question: "6. We ___ finish this today.",
                  options: [
                    { option: "have to", isCorrect: true },
                    { option: "might", isCorrect: false },
                    { option: "could", isCorrect: false },
                  ],
                },
                {
                  question: "7. He ___ be at home. The lights are on.",
                  options: [
                    { option: "must", isCorrect: true },
                    { option: "may", isCorrect: false },
                    { option: "should", isCorrect: false },
                  ],
                },
                {
                  question: "8. You ___ park here. It’s forbidden.",
                  options: [
                    { option: "mustn’t", isCorrect: true },
                    { option: "don’t have to", isCorrect: false },
                    { option: "couldn’t", isCorrect: false },
                  ],
                },
                {
                  question: "9. She ___ speak three languages.",
                  options: [
                    { option: "can", isCorrect: true },
                    { option: "might", isCorrect: false },
                    { option: "must", isCorrect: false },
                  ],
                },
                {
                  question: "10. You ___ be tired. You worked all day.",
                  options: [
                    { option: "must", isCorrect: true },
                    { option: "may", isCorrect: false },
                    { option: "could", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct modal verb.",
              blocks: [
                {
                  block: [
                    { text: "1. You " },
                    { blank: "must" },
                    { text: " follow the rules." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. She " },
                    { blank: "can" },
                    { text: " play the piano." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. It " },
                    { blank: "might" },
                    { text: " snow tonight." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. " },
                    { blank: "May" },
                    { text: " I come in?" }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. You " },
                    { blank: "should" },
                    { text: " eat more vegetables." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. We " },
                    { blank: "have to" },
                    { text: " leave now." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. He " },
                    { blank: "could" },
                    { text: " run very fast when he was young." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. You " },
                    { blank: "mustn’t" },
                    { text: " touch that button." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. She " },
                    { blank: "may" },
                    { text: " arrive late." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. You " },
                    { blank: "ought to" },
                    { text: " apologize." }
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
