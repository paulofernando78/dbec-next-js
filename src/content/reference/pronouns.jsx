import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Column } from "@/components/molecules/Column";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Pronouns() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="blank" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    {
                      attention: true,
                      part: "Pronouns",
                      type: "bold",
                    },
                    " are words that replace a noun to avoid repetition. ",
                    {
                      part: "Eles substituem o substantivo para evitar repetição.",
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
            { href: "overview", label: "Overview" },
            { href: "subject", label: "Subject Pronouns" },
            { href: "object", label: "Object Pronouns" },
            { href: "possessive-adjectives", label: "Possessive Adjectives" },
            { href: "possessive", label: "Possessive Pronouns" },
            { href: "reflexive", label: "Reflexive Pronouns" },
            { href: "exercises", label: "Exercises" },
          ]}
        />

        <Section id="overview" label="Overview" heading={3}>
          <Column
            width="200"
            cols={[
              // Subject Pronouns
              {
                bgColor: "var(--slate-4)",
                textColor: "white",
                column: "Subject",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "I",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "eu",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "you",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "você / vocês",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "he",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ele",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "she",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ela",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "it",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ele / ela (coisa / animal)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "we",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "nós",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "you",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "vocês",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "they",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "eles / elas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Object Pronouns
              {
                bgColor: "var(--slate-4)",
                textColor: "white",
                column: "Object",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "me",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "me mim, comigo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "you",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "você / vocês",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "him",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ele",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "her",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ela",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "it",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "ele / ela (coisa / animal)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "us",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "nós",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "you",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "vocês",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "them",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "eles / elas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Possessive Adjectives
              {
                bgColor: "var(--slate-4)",
                textColor: "white",
                column: "Possessive Adjectives",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "my",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "meu / minha",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "your",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "seu / sua",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "his",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "dele",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "her",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "dela",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "its",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "dele / dela (coisa / animal)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "our",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "nosso / nossa",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "your",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "seus / suas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "their",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "deles / delas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Possessive Pronous
              {
                bgColor: "var(--slate-4)",
                textColor: "white",
                column: "Possessive Pronouns",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "mine",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "meu / minha",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "your",
                            type: "bold",
                          },
                          {
                            part: "s",
                            type: "bold-mark",
                          },
                          " ",
                          {
                            part: "seu / sua",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "his",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "dele",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "her",
                            type: "bold",
                          },
                          {
                            part: "s",
                            type: "bold-mark",
                          },
                          " ",
                          {
                            part: "dela",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "its",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "dele / dela (coisa / animal)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "our",
                            type: "bold",
                          },
                          {
                            part: "s",
                            type: "bold-mark",
                          },
                          " ",
                          {
                            part: "nosso / nossa",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "your",
                            type: "bold",
                          },
                          {
                            part: "s",
                            type: "bold-mark",
                          },
                          " ",
                          {
                            part: "seus / suas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "their",
                            type: "bold",
                          },
                          {
                            part: "s",
                            type: "bold-mark",
                          },
                          " ",
                          {
                            part: "deles / delas",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Possessive Pronous
              {
                bgColor: "var(--slate-4)",
                textColor: "white",
                column: "Reflexive Pronouns",
                blocks: [
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "myself",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a mim mesmo(a)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "yourself",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a si mesmo(a)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "himself",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a si mesmo",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "herself",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a si mesma",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "itself",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a si mesmo(a) (coisa / animal)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "ourselves",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a nós mesmos(as)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "yourselves",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a vocês mesmos(as)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    block: [
                      {
                        text: [
                          {
                            part: "themselves",
                            type: "bold",
                          },
                          " ",
                          {
                            part: "a si mesmos(as)",
                            type: "portuguese",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="subject" label="Subject Pronouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Subject pronouns", type: "bold" },
                      " ",
                      "are used as the subject of a sentence.",
                      " ",
                      { part: "Eles fazem a ação.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I am a student.",
                      " ",
                      { part: "Eu sou um estudante.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She works here.",
                      " ",
                      { part: "Ela trabalha aqui.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They are ready.",
                      " ",
                      { part: "Eles estão prontos.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="object" label="Object Pronouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Object pronouns", type: "bold" },
                      " ",
                      "are used after a verb or preposition.",
                      " ",
                      { part: "Eles recebem a ação.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She called me.",
                      " ",
                      { part: "Ela me ligou.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I saw them.",
                      " ",
                      { part: "Eu os vi.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He gave her a gift.",
                      " ",
                      {
                        part: "Ele deu um presente para ela.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="possessive-adjectives" label="Possessive Adjectives" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Possessive adjectives", type: "bold" },
                      " ",
                      "come before a noun and show who owns something.",
                      " ",
                      { part: "Eles vêm antes do substantivo e mostram posse.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is ",
                      { part: "my", type: "bold" },
                      " book. ",
                      { part: "Este é o meu livro.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She lost ",
                      { part: "her", type: "bold" },
                      " keys. ",
                      { part: "Ela perdeu as chaves dela.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "They love ",
                      { part: "their", type: "bold" },
                      " dog. ",
                      { part: "Eles amam o cachorro deles.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="possessive" label="Possessive Pronouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Possessive pronouns", type: "bold" },
                      " ",
                      "show who owns something.",
                      " ",
                      { part: "Eles mostram posse.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "This book is mine.", type: "bold" },
                      " ",
                      { part: "Este livro é meu.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "The house is hers.", type: "bold" },
                      " ",
                      { part: "A casa é dela.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "These seats are ours.",
                      " ",
                      {
                        part: "Esses assentos são nossos.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="reflexive" label="Reflexive Pronouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Reflexive pronouns", type: "bold" },
                      " ",
                      "are used when the subject and the object are the same person.",
                      " ",
                      {
                        part: "Usamos quando a pessoa faz e recebe a ação.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "I taught myself English.", type: "bold" },
                      " ",
                      {
                        part: "Eu aprendi inglês sozinho(a).",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "She hurt herself.", type: "bold" },
                      " ",
                      { part: "Ela se machucou.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "They introduced themselves.",
                      " ",
                      { part: "Eles se apresentaram.", type: "portuguese" },
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
              instruction: "1. Choose the correct pronoun.",
              questions: [
                {
                  question: "1. Maria is my sister. ___ is very kind.",
                  options: [
                    { option: "She", isCorrect: true },
                    { option: "Her", isCorrect: false },
                    { option: "Hers", isCorrect: false },
                  ],
                },
                {
                  question: "2. I can't find my keys. Did you see ___?",
                  options: [
                    { option: "them", isCorrect: true },
                    { option: "they", isCorrect: false },
                    { option: "their", isCorrect: false },
                  ],
                },
                {
                  question: "3. This phone is ___. Not yours.",
                  options: [
                    { option: "mine", isCorrect: true },
                    { option: "my", isCorrect: false },
                    { option: "me", isCorrect: false },
                  ],
                },
                {
                  question: "4. He cut ___ while cooking.",
                  options: [
                    { option: "himself", isCorrect: true },
                    { option: "him", isCorrect: false },
                    { option: "his", isCorrect: false },
                  ],
                },
                {
                  question: "5. We finished the project by ___.",
                  options: [
                    { option: "ourselves", isCorrect: true },
                    { option: "us", isCorrect: false },
                    { option: "our", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Fill in the blanks with the correct pronoun.",
              blocks: [
                {
                  block: [
                    { text: "1. This book is " },
                    { blank: "mine" },
                    { text: "." },
                  ],
                },
                {
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "2. She called " },
                    { blank: "me" },
                    { text: " yesterday." },
                  ],
                },
                {
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "3. They introduced " },
                    { blank: "themselves" },
                    { text: " to the class." },
                  ],
                },
                {
                },
                {
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "4." },
                    { blank: "They" },
                    { text: "are my best friends." },
                  ],
                },
                {
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "5. I can't find my phone. Did you see " },
                    { blank: "it" },
                    { text: "?" },
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
