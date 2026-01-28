import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Reference" subtitle="Reported Speech" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    { part: "Reported speech", type: "bold" },
                    " ",
                    "is used to tell someone what another person said without using their exact words.",
                    " ",
                    {
                      part: "Reported speech é usado para contar o que outra pessoa disse sem usar as palavras exatas.",
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
            { href: "statements", label: "Statements" },
            { href: "questions", label: "Questions" },
            { href: "tense", label: "Tense Changes" },
            { href: "time-place", label: "Time & Place Changes" },
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
                      { part: "In reported speech,", type: "bold" },
                      " we often change the tense and pronouns.",
                      " ",
                      {
                        part: "No discurso indireto, geralmente mudamos o tempo verbal e os pronomes.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Direct → Reported", type: "mark" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She said, ",
                      { part: "“I am tired.”", type: "bold" },
                      " → She said ",
                      { part: "she was tired.", type: "bold" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="statements" label="Statements" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "We use", type: "bold" },
                      " ",
                      { part: "said (that) / told + object", type: "mark" },
                      " to report statements.",
                      " ",
                      { part: "Usamos said (that) / told + objeto para relatar afirmações.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "He said ",
                      { part: "that he was busy.", type: "bold" },
                      " ",
                      { part: "Ele disse que estava ocupado.", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "She told me ",
                      { part: "that she would call.", type: "bold" },
                      " ",
                      { part: "Ela me disse que ligaria.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="questions" label="Questions" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "For reported questions,", type: "bold" },
                      " we use ",
                      { part: "if / whether", type: "mark" },
                      " for yes/no questions and remove auxiliary inversion.",
                      " ",
                      { part: "Para perguntas no discurso indireto, usamos if / whether e removemos a inversão.", type: "portuguese" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { bullet: true },
                      "She asked ",
                      { part: "if I was ready.", type: "bold" },
                    ],
                  },
                  {
                    text: [
                      { bullet: true },
                      "He asked ",
                      { part: "where I lived.", type: "bold" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="tense" label="Tense Changes" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Common tense changes:", type: "bold" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "Present Simple → Past Simple", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "Present Continuous → Past Continuous", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "Will → Would", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "Can → Could", type: "mark" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="time-place" label="Time & Place Changes" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "Some words change in reported speech:", type: "bold" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      { part: "today → that day", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "tomorrow → the next day", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "here → there", type: "mark" },
                    ],
                  },
                  {
                    text: [
                      { part: "this → that", type: "mark" },
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
              instruction: "1. Choose the correct reported sentence.",
              questions: [
                {
                  question: "1. She said, “I am happy.”",
                  options: [
                    { option: "She said she was happy.", isCorrect: true },
                    { option: "She said she is happy.", isCorrect: false },
                    { option: "She told she was happy.", isCorrect: false },
                  ],
                },
                {
                  question: "2. He said, “I will call you.”",
                  options: [
                    { option: "He said he would call me.", isCorrect: true },
                    { option: "He said he will call me.", isCorrect: false },
                    { option: "He told me he will call.", isCorrect: false },
                  ],
                },
                {
                  question: "3. She asked, “Do you like coffee?”",
                  options: [
                    { option: "She asked if I liked coffee.", isCorrect: true },
                    { option: "She asked do I like coffee.", isCorrect: false },
                    { option: "She asked whether did I like coffee.", isCorrect: false },
                  ],
                },
                {
                  question: "4. He asked, “Where do you live?”",
                  options: [
                    { option: "He asked where I lived.", isCorrect: true },
                    { option: "He asked where did I live.", isCorrect: false },
                    { option: "He asked I lived where.", isCorrect: false },
                  ],
                },
                {
                  question: "5. She said, “I can help you.”",
                  options: [
                    { option: "She said she could help me.", isCorrect: true },
                    { option: "She said she can help me.", isCorrect: false },
                    { option: "She told me she can help.", isCorrect: false },
                  ],
                },
                {
                  question: "6. He said, “We are leaving today.”",
                  options: [
                    { option: "He said they were leaving that day.", isCorrect: true },
                    { option: "He said they are leaving today.", isCorrect: false },
                    { option: "He told they were leaving today.", isCorrect: false },
                  ],
                },
                {
                  question: "7. She asked, “Will you come tomorrow?”",
                  options: [
                    { option: "She asked if I would come the next day.", isCorrect: true },
                    { option: "She asked will I come tomorrow.", isCorrect: false },
                    { option: "She asked if I will come tomorrow.", isCorrect: false },
                  ],
                },
                {
                  question: "8. He said, “I have finished.”",
                  options: [
                    { option: "He said he had finished.", isCorrect: true },
                    { option: "He said he has finished.", isCorrect: false },
                    { option: "He told he finished.", isCorrect: false },
                  ],
                },
                {
                  question: "9. She said, “I am here.”",
                  options: [
                    { option: "She said she was there.", isCorrect: true },
                    { option: "She said she is here.", isCorrect: false },
                    { option: "She told she was here.", isCorrect: false },
                  ],
                },
                {
                  question: "10. He asked, “Can you help me?”",
                  options: [
                    { option: "He asked if I could help him.", isCorrect: true },
                    { option: "He asked can I help him.", isCorrect: false },
                    { option: "He asked if can I help him.", isCorrect: false },
                  ],
                },
              ],
            }}
          />

          <FillInTheBlanks
            exercise={{
              instructions: "2. Rewrite the sentences in reported speech.",
              blocks: [
                {
                  block: [
                    { text: "1. She said, “I am tired.” → She said " },
                    { blank: "she was tired" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "2. He said, “I will call you.” → He said " },
                    { blank: "he would call me" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "3. She asked, “Do you like tea?” → She asked " },
                    { blank: "if I liked tea" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "4. He asked, “Where are you?” → He asked " },
                    { blank: "where I was" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "5. She said, “I can drive.” → She said " },
                    { blank: "she could drive" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "6. He said, “We are leaving today.” → He said " },
                    { blank: "they were leaving that day" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "7. She asked, “Will you come tomorrow?” → She asked " },
                    { blank: "if I would come the next day" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "8. He said, “I have finished.” → He said " },
                    { blank: "he had finished" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "9. She said, “I am here.” → She said " },
                    { blank: "she was there" },
                    { text: "." }
                  ],
                  lineBreak: true
                },
                {
                  block: [
                    { text: "10. He asked, “Can you help me?” → He asked " },
                    { blank: "if I could help him" },
                    { text: "." }
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
