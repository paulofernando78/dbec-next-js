import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/exercises/FillInTheBlanks";

export default function Articles() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="blank" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              audioPlayer: "/assets/audio/general/",
              img: "/img/general/",
              alt: "",
              width: 200,
              height: 200,
              lines: [
                {
                  text: [
                    {
                      part: "Articles",
                      type: "bold",
                    },
                    " ",
                    "are small words that come before a noun to show if it is specific or general.",
                    " ",
                    {
                      part: "Eles vêm antes do substantivo para mostrar se algo é específico ou geral.",
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
            { href: "basic", label: "What Are Articles?" },
            { href: "a-an", label: "A / An (Indefinite)" },
            { href: "the", label: "The (Definite)" },
            { href: "zero", label: "No Article (Zero Article)" },
            { href: "exercises", label: "Exercises" },
          ]}
        />
        <Section id="basic" label="What Are Articles?" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Articles", type: "bold" },
                      " ",
                      "are words that come before a noun.",
                      " ",
                      {
                        part: "They help us know if we are talking about something general or specific.",
                        type: "mark",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // In English, there are three main forms: a, an, and the.
                  {
                    text: [
                      {
                        attention: true,
                        part: "In English, there are three main forms: a, an, and the.",
                      },
                      " ",
                      {
                        part: "Em inglês, existem três formas principais: a, an e the.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // a book
                  {
                    text: ["a book ", { part: "um livro", type: "portuguese" }],
                  },
                  // an apple
                  {
                    text: [
                      "an apple ",
                      { part: "uma maçã", type: "portuguese" },
                    ],
                  },
                  // the teacher
                  {
                    text: [
                      "the teacher ",
                      {
                        part: "o professor / a professora",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    lineBreak: true,
                  },
                  // I have a book.
                  {
                    text: [
                      { bullet: true },
                      "I have a book.",
                      " ",
                      { part: "Eu tenho um livro.", type: "portuguese" },
                    ],
                  },
                  // She eats an apple every day.
                  {
                    text: [
                      { bullet: true },
                      "She eats an apple every day.",
                      " ",
                      {
                        part: "Ela come uma maçã todos os dias.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // The teacher is in the classroom.
                  {
                    text: [
                      { bullet: true },
                      "The teacher is in the classroom.",
                      " ",
                      {
                        part: "O professor está na sala de aula.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="a-an" label="A / An (Indefinite Articles)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // A and An are used when we talk about something for the first time or something general.
                  {
                    text: [
                      { part: "A and An", type: "bold" },
                      " ",
                      "are used when we talk about something for the first time or something general.",
                      " ",
                      {
                        part: "Usamos quando não sabemos exatamente qual.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Use 'a' before words that start with a consonant sound.
                  {
                    text: [
                      {
                        attention: true,
                      },
                      {
                        important: true,
                        part: "Use ",
                      },
                      " ",
                      {
                        part: "'a'",
                        type: "mark",
                      },
                      " before words that start with a consonant sound. ",
                      {
                        part: "Use 'a' antes de som de consoante e 'an' antes de som de vogal.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // a dog
                  {
                    text: [
                      "a dog ",
                      { part: "um cachorro", type: "portuguese" },
                    ],
                  },
                  // a person
                  {
                    text: [
                      "a person ",
                      { part: "uma pessoa", type: "portuguese" },
                    ],
                  },
                  // a table
                  {
                    text: [
                      "a table ",
                      { part: "uma mesa", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        attention: true,
                      },
                      "The letter 'u' can have the phonetic symbol ",
                      {
                        part: "/j/",
                        type: "phonetics",
                      },
                      ", which means it starts with a consonant sound, not a vowel sound.",
                      " ",
                      {
                        part: "A letra 'u' pode ter o símbolo fonético",
                        type: "portuguese",
                      },
                      " ",
                      {
                        part: "/j/",
                        type: "phonetics",
                      },
                      {
                        part: ", o que significa que começa com som de consoante, e não de vogal.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // a unicorn
                  {
                    text: [
                      "a unicorn ",
                      {
                        part: "/ˈjuː.nɪ.kɔːrn/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "uma universidade",
                        type: "portuguese",
                      },
                    ],
                  },
                  // a university
                  {
                    text: [
                      "a university ",
                      {
                        part: "/ˌjuː.nəˈvɝː.sə.t̬i/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "uma universidade",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // • I see a dog in the park.
                  {
                    text: [
                      { bullet: true },
                      "I see a dog in the park.",
                      " ",
                      {
                        part: "Eu vejo um cachorro no parque.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    hr: true,
                  },
                  // Use 'an' before words that start with a vowel sound.
                  {
                    text: [
                      {
                        attention: true,
                      },
                      {
                        part: "Use",
                      },
                      " ",
                      {
                        part: "'an'",
                        type: "mark",
                      },
                      " before words that start with a vowel sound. ",
                      {
                        part: "Use 'a' antes de som de consoante e 'an' antes de som de vogal.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // an orange
                  {
                    text: [
                      "an orange ",
                      { part: "uma laranja", type: "portuguese" },
                    ],
                  },
                  // an hour
                  {
                    text: [
                      "an hour ",
                      { part: "uma hora (h muda)", type: "portuguese" },
                    ],
                  },
                  // an umbrella
                  {
                    text: [
                      "an umbrella ",
                      { part: "um guarda-chuva", type: "portuguese" },
                    ],
                  },
                  // an idea
                  {
                    text: [
                      "an idea ",
                      { part: "uma ideia", type: "portuguese" },
                    ],
                  },
                  // an email
                  {
                    text: [
                      "an email ",
                      { part: "um e-mail", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // • He forgot an umbrella at home.
                  {
                    text: [
                      { bullet: true },
                      "He forgot an umbrella at home.",
                      " ",
                      {
                        part: "Ele esqueceu um guarda-chuva em casa.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // • She sent me an email.
                  {
                    text: [
                      { bullet: true },
                      "She sent me an email.",
                      " ",
                      { part: "Ela me enviou um e-mail.", type: "portuguese" },
                    ],
                  },
                  // • He wants an orange. Ela quer uma laranja.
                  {
                    text: [
                      { bullet: true },
                      "He wants an orange.",
                      " ",
                      { part: "Ela quer uma laranja.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="the" label="The (Definite Article)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "The", type: "bold" },
                      " ",
                      "is used when both the speaker and the listener know what we are talking about.",
                      " ",
                      {
                        part: "Usamos quando algo é específico.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        attention: true,
                      },
                      {
                        important: true,
                        part: "Use 'the' when there is only one, or when it is clear which one you mean.",
                      },
                      " ",
                      {
                        part: "Use 'the' quando existe apenas um ou quando está claro qual é.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: ["the sun ", { part: "o sol", type: "portuguese" }],
                  },
                  {
                    text: [
                      "the door ",
                      {
                        part: "a porta (a porta específica)",
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
                      "Please close the door.",
                      " ",
                      { part: "Por favor, feche a porta.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "The sun is very bright today.",
                      " ",
                      {
                        part: "O sol está muito forte hoje.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="zero" label="No Article (Zero Article)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Zero article", type: "bold" },
                      " ",
                      "means we do not use an article before the noun.",
                      " ",
                      {
                        part: "Significa que não usamos artigo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        attention: true,
                      },
                      {
                        part: "We often use no article with plural nouns and uncountable nouns when talking in general.",
                      },
                      " ",
                      {
                        part: "Usamos sem artigo com plurais e substantivos incontáveis em sentido geral.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      "Dogs are friendly. ",
                      { part: "Cachorros são amigáveis.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      "Water is important. ",
                      { part: "Água é importante.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "I like music.",
                      " ",
                      { part: "Eu gosto de música.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "Children need love.",
                      " ",
                      {
                        part: "Crianças precisam de amor.",
                        type: "portuguese",
                      },
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
              instruction: "1. Choose the correct article.",
              questions: [
                {
                  question: "1. I have ___ apple in my bag.",
                  options: [
                    { option: "an", isCorrect: true },
                    { option: "a", isCorrect: false },
                    { option: "the", isCorrect: false },
                  ],
                },
                {
                  question: "2. She is ___ teacher at my school.",
                  options: [
                    { option: "a", isCorrect: true },
                    { option: "an", isCorrect: false },
                    { option: "the", isCorrect: false },
                  ],
                },
                {
                  question: "3. ___ sun is very bright today.",
                  options: [
                    { option: "The", isCorrect: true },
                    { option: "A", isCorrect: false },
                    { option: "An", isCorrect: false },
                  ],
                },
                {
                  question: "4. I like ___ music.",
                  options: [
                    { option: "—", isCorrect: true },
                    { option: "a", isCorrect: false },
                    { option: "the", isCorrect: false },
                  ],
                },
                {
                  question: "5. He bought ___ umbrella.",
                  options: [
                    { option: "an", isCorrect: true },
                    { option: "a", isCorrect: false },
                    { option: "the", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions:
                "2. Fill in the blanks with the correct article (a, an, the, or -).",
              blocks: [
                {
                  block: [
                    { text: "1. She has " },
                    { blank: "a" },
                    { text: " dog." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "2. I need " },
                    { blank: "an" },
                    { text: " answer." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "3. Please close " },
                    { blank: "the" },
                    { text: " door." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "4. We like " },
                    { blank: "-" },
                    { text: " water." },
                  ],
                  lineBreak: true,
                },
                {
                  block: [
                    { text: "5. He lives near " },
                    { blank: "the" },
                    { text: " school." },
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
