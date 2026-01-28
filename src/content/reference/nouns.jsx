import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Nouns() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Nouns" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Nouns", type: "bold" },
                    " ",
                    "are words used to name people, places, things, or ideas.",
                    " ",
                    {
                      part: "Substantivos são palavras usadas para nomear pessoas, lugares, coisas ou ideias.",
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
            { href: "basic", label: "What Are Nouns?" },
            { href: "countable", label: "Countable vs. Uncountable" },
            { href: "plural", label: "Plural Nouns" },
            { href: "possessive", label: "Possessive Nouns" },
            { href: "exercises", label: "Exercises" },
          ]}
        />

        <Section id="basic" label="What Are Nouns?" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Nouns", type: "bold" },
                      " ",
                      "name people, places, things, and ideas.",
                      " ",
                      { part: "Eles respondem à pergunta: What is it?", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "a teacher", type: "bold" },
                      " ",
                      { part: "um professor / uma professora", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "a city", type: "bold" },
                      " ",
                      { part: "uma cidade", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "a book", type: "bold" },
                      " ",
                      { part: "um livro", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "happiness", type: "bold" },
                      " ",
                      { part: "felicidade", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "The teacher is in the classroom.",
                      " ",
                      { part: "O professor está na sala de aula.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "This book is very interesting.",
                      " ",
                      { part: "Este livro é muito interessante.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="countable" label="Countable vs. Uncountable" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Countable nouns", type: "bold" },
                      " ",
                      "can be counted and have singular and plural forms.",
                      " ",
                      { part: "Podem ser contados.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "one apple / two apples", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Uncountable nouns", type: "bold" },
                      " ",
                      "cannot be counted and usually do not have a plural form.",
                      " ",
                      { part: "Não podem ser contados.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "water, money, information, rice", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "I have two apples.",
                      " ",
                      { part: "Eu tenho duas maçãs.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I need some information.",
                      " ",
                      { part: "Eu preciso de alguma informação.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="plural" label="Plural Nouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "To form the plural", type: "bold" },
                      " ",
                      "we usually add -s or -es.",
                      " ",
                      { part: "Para formar o plural, geralmente adicionamos -s ou -es.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "book → books", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "box → boxes", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Irregular plurals:", type: "bold" },
                    ],
                  },
                  {
                    text: [
                      { part: "man → men / woman → women / child → children / person → people", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "There are many people in the room.",
                      " ",
                      { part: "Há muitas pessoas na sala.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The children are playing outside.",
                      " ",
                      { part: "As crianças estão brincando lá fora.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="possessive" label="Possessive Nouns" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Possessive nouns", type: "bold" },
                      " ",
                      "show ownership.",
                      " ",
                      { part: "Eles mostram posse.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "John's book", type: "mark" },
                      " ",
                      { part: "o livro do John", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { part: "the students' room", type: "mark" },
                      " ",
                      { part: "a sala dos alunos", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "This is Maria's bag.",
                      " ",
                      { part: "Esta é a bolsa da Maria.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The teachers' office is upstairs.",
                      " ",
                      { part: "A sala dos professores fica no andar de cima.", type: "portuguese" },
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
              instruction: "1. Choose the correct noun form.",
              questions: [
                {
                  question: "1. I have two ___.",
                  options: [
                    { option: "apples", isCorrect: true },
                    { option: "apple", isCorrect: false },
                    { option: "appls", isCorrect: false },
                  ],
                },
                {
                  question: "2. She needs some ___.",
                  options: [
                    { option: "information", isCorrect: true },
                    { option: "informations", isCorrect: false },
                    { option: "inform", isCorrect: false },
                  ],
                },
                {
                  question: "3. That is John's ___.",
                  options: [
                    { option: "book", isCorrect: true },
                    { option: "books", isCorrect: false },
                    { option: "book's", isCorrect: false },
                  ],
                },
                {
                  question: "4. The ___ are playing in the yard.",
                  options: [
                    { option: "children", isCorrect: true },
                    { option: "childs", isCorrect: false },
                    { option: "child", isCorrect: false },
                  ],
                },
                {
                  question: "5. I need a piece of ___.",
                  options: [
                    { option: "advice", isCorrect: true },
                    { option: "advices", isCorrect: false },
                    { option: "advises", isCorrect: false },
                  ],
                },
                {
                  question: "6. There are many ___ in the city.",
                  options: [
                    { option: "people", isCorrect: true },
                    { option: "persons", isCorrect: false },
                    { option: "peoples", isCorrect: false },
                  ],
                },
                {
                  question: "7. This is my ___ room.",
                  options: [
                    { option: "brother's", isCorrect: true },
                    { option: "brothers", isCorrect: false },
                    { option: "brother", isCorrect: false },
                  ],
                },
                {
                  question: "8. We bought three ___.",
                  options: [
                    { option: "boxes", isCorrect: true },
                    { option: "boxs", isCorrect: false },
                    { option: "box", isCorrect: false },
                  ],
                },
                {
                  question: "9. She gave me some ___.",
                  options: [
                    { option: "money", isCorrect: true },
                    { option: "moneys", isCorrect: false },
                    { option: "coins", isCorrect: false },
                  ],
                },
                {
                  question: "10. The ___ office is on the second floor.",
                  options: [
                    { option: "teachers'", isCorrect: true },
                    { option: "teacher's", isCorrect: false },
                    { option: "teachers", isCorrect: false },
                  ],
                },
                // Inserted questions from FillInTheBlanks
                {
                  question: "11. She has two ___.",
                  options: [
                    { option: "friends", isCorrect: true },
                    { option: "friend", isCorrect: false },
                    { option: "friend's", isCorrect: false },
                  ],
                },
                {
                  question: "12. I need some ___.",
                  options: [
                    { option: "water", isCorrect: true },
                    { option: "waters", isCorrect: false },
                    { option: "watery", isCorrect: false },
                  ],
                },
                {
                  question: "13. This is my ___ car.",
                  options: [
                    { option: "father's", isCorrect: true },
                    { option: "fathers", isCorrect: false },
                    { option: "father", isCorrect: false },
                  ],
                },
                {
                  question: "14. The ___ are at school.",
                  options: [
                    { option: "children", isCorrect: true },
                    { option: "childs", isCorrect: false },
                    { option: "child", isCorrect: false },
                  ],
                },
                {
                  question: "15. She gave me good ___.",
                  options: [
                    { option: "advice", isCorrect: true },
                    { option: "advices", isCorrect: false },
                    { option: "advise", isCorrect: false },
                  ],
                },
                {
                  question: "16. There are many ___ here.",
                  options: [
                    { option: "people", isCorrect: true },
                    { option: "persons", isCorrect: false },
                    { option: "peoples", isCorrect: false },
                  ],
                },
                {
                  question: "17. We bought three ___.",
                  options: [
                    { option: "boxes", isCorrect: true },
                    { option: "boxs", isCorrect: false },
                    { option: "box", isCorrect: false },
                  ],
                },
                {
                  question: "18. This is Maria's ___.",
                  options: [
                    { option: "bag", isCorrect: true },
                    { option: "bags", isCorrect: false },
                    { option: "bag's", isCorrect: false },
                  ],
                },
                {
                  question: "19. I need more ___.",
                  options: [
                    { option: "information", isCorrect: true },
                    { option: "informations", isCorrect: false },
                    { option: "inform", isCorrect: false },
                  ],
                },
                {
                  question: "20. The students' ___ is clean.",
                  options: [
                    { option: "room", isCorrect: true },
                    { option: "rooms", isCorrect: false },
                    { option: "room's", isCorrect: false },
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
