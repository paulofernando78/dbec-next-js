import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { CardLayout } from "@/components/molecules/CardLayout";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Column } from "@/components/molecules/Column/";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold, mark, portuguese } from "@/helpers/content";

export const metadata = {
  title: "B1 Intermediate | Hypothetical Situations",
  description: "Using the second conditional to talk about imaginary situations.",
};

export default function HypotheticalSituations() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Hypothetical situations"
        description="If I had more free time, I would learn another language."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about
          imaginary or unlikely situations, explain possible results, and ask
          follow-up questions using the second conditional.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-study-home.png"
                alt="A man thinking and studying at home."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the hypothetical ideas and think about your own answers."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["If I had a month off, I would travel around South America."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["If I were the manager, I would change the schedule."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["If people worked fewer hours, they might feel less stressed."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "These sentences describe unreal or unlikely situations in the present or future.",
                      ],
                    }),
                  ]}
                />
              </div>
            </CardLayout>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the correct answer.",
                questions: [
                  {
                    question: "1. What would the speaker do with a month off?",
                    options: [
                      { option: "Travel around South America.", isCorrect: true },
                      { option: "Buy a train station.", isCorrect: false },
                      { option: "Forget every language.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What would the speaker change as manager?",
                    options: [
                      { option: "The schedule.", isCorrect: true },
                      { option: "The weather.", isCorrect: false },
                      { option: "A birthday cake.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What might happen if people worked fewer hours?",
                    options: [
                      { option: "They might feel less stressed.", isCorrect: true },
                      { option: "They might become buses.", isCorrect: false },
                      { option: "They might miss breakfast forever.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric discuss imaginary life changes."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["If you could change one thing about your job, what would it be?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["If I had the chance, I would work four days a week instead of five."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That sounds nice. What would you do with the extra time?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I would probably study more and spend more time with my family."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["If I were in your position, I would also use the time to rest more."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Exactly. I think I would be much more productive."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="language-focus" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We use the ",
                    mark("second conditional"),
                    " for imaginary present or future situations: ",
                    mark("If + past simple, would + base verb"),
                    ".",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos o second conditional para situações imaginárias no presente ou futuro: If + passado simples, would + verbo base.",
                    ),
                  ],
                }),
              ]}
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [bold("Imaginary plan: "), mark("If I had more money, I would travel more.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Advice from another perspective: "), mark("If I were you, I would take a break.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Possible result: "), mark("People might feel better if they slept more.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Question: "), mark("What would you do if you had more free time?")],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="pronunciation-form" label="Pronunciation + Form" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "The most common pattern is ",
                    mark("If I had..., I would..."),
                    ". At this level, ",
                    mark("If I were you"),
                    " is also very useful.",
                  ],
                }),
              ]}
            />

            <LineBreak />

            <Column
              width="260"
              cols={[
                {
                  bgColor: "var(--green-6)",
                  textColor: "white",
                  column: "If Clauses",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["If I had more time..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If I were the manager..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If people worked less..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Results",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["...I would travel more."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["...I would change the rules."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["...they might feel better."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Questions",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["What would you do if...?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["How would you react if...?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If you were me, what would you do?"] })] }],
                    },
                  ],
                },
              ]}
            />
          </Section>

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions:
                  "Complete the hypothetical sentences with the correct form.",
                blocks: [
                  {
                    block: [
                      { text: "If I had more time, I " },
                      { blank: "would" },
                      { text: " exercise more." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "If she were the manager, she would " },
                      { blank: "change" },
                      { text: " the schedule." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "If we lived near the beach, we would go there every " },
                      { blank: "weekend" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "If I were you, I would take a short " },
                      { blank: "break" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "What would you do if you " },
                      { blank: "had" },
                      { text: " a free year?" },
                    ],
                  },
                ],
              }}
            />

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question: "1. Which sentence is a second conditional sentence?",
                    options: [
                      { option: "If I had more money, I would move to a bigger apartment.", isCorrect: true },
                      { option: "If I have breakfast, I am happy.", isCorrect: false },
                      { option: "I moved last year.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase gives advice in a hypothetical way?",
                    options: [
                      { option: "If I were you, I would talk to your boss.", isCorrect: true },
                      { option: "I talk to your boss yesterday.", isCorrect: false },
                      { option: "Your boss is tall.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which response fits the question 'What would you do if you had a month off?'",
                    options: [
                      { option: "I would travel and read more.", isCorrect: true },
                      { option: "I am traveling now.", isCorrect: false },
                      { option: "I traveled last month.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence sounds hypothetical, not real?",
                    options: [
                      { option: "If people worked fewer hours, they might feel better.", isCorrect: true },
                      { option: "People work here every day.", isCorrect: false },
                      { option: "He is working now.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="production" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Discuss imaginary situations with a partner. Try to give full answers and ask one follow-up question each time.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["If you could live anywhere, where would you live?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["If you had a year free from work or study, what would you do?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["If you were the school director, what would you change?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["If your city had more parks, how would life change?"],
                    }),
                  ],
                },
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
