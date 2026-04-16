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
  title: "B1 Intermediate | Health and Lifestyle",
  description: "Talking about habits, balance, stress, and healthy routines.",
};

export default function TalkAboutHealthAndLifestyle() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Talk about health and lifestyle"
        description="I try to stay healthy by sleeping well, eating balanced meals, and exercising a few times a week."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to describe health
          habits, talk about lifestyle choices, and explain how routines affect
          energy, stress, and well-being.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-watch-tv-evening.png"
                alt="A man in an evening routine."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the routine statements and think about which habits are healthy."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["She tries to walk every day and cook most of her meals at home."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["He often stays up too late, so he feels tired in the morning."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["They recently decided to reduce stress by taking short breaks during work."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "This topic often combines routine language with causes and effects: one habit leads to one result.",
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
                    question: "1. What healthy habit does she have?",
                    options: [
                      { option: "She walks every day.", isCorrect: true },
                      { option: "She misses breakfast on purpose.", isCorrect: false },
                      { option: "She never rests.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Why does he feel tired in the morning?",
                    options: [
                      { option: "Because he stays up too late.", isCorrect: true },
                      { option: "Because he exercises too much at noon.", isCorrect: false },
                      { option: "Because he travels by train.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. How do they reduce stress?",
                    options: [
                      { option: "By taking short breaks.", isCorrect: true },
                      { option: "By buying expensive food.", isCorrect: false },
                      { option: "By changing cities every week.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric talk about their routines and stress levels."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["You seem more energetic these days. Have you changed your routine?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Actually, yes. I have been trying to sleep earlier and exercise three times a week."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Has it made a difference?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Definitely. I feel less stressed, and I can focus better at work."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I need to improve my routine too. I often skip lunch when I am busy."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That probably affects your energy. Even a small change could help."],
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
                    "Health and lifestyle conversations often include ",
                    mark("habits"),
                    ", ",
                    mark("frequency"),
                    ", ",
                    mark("results"),
                    ", and ",
                    mark("small changes"),
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
                      "Conversas sobre saúde e estilo de vida geralmente incluem hábitos, frequência, resultados e pequenas mudanças.",
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
                      parts: [bold("Habit: "), mark("I exercise three times a week.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Problem habit: "), mark("I often stay up too late.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Result: "), mark("As a result, I feel more tired.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Improvement: "), mark("I am trying to sleep earlier.")],
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
                    "A useful B1 pattern is ",
                    mark("habit -> effect -> possible improvement"),
                    ".",
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
                  column: "Healthy Habits",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["sleep well"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["exercise regularly"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["eat balanced meals"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Lifestyle Problems",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["skip meals"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["stay up late"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["feel stressed"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Improvement Language",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I am trying to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["This helps me..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["A small change could be..."] })] }],
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
                  "Complete the health and lifestyle sentences.",
                blocks: [
                  {
                    block: [
                      { text: "I try to " },
                      { blank: "exercise" },
                      { text: " three times a week." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He often stays up too " },
                      { blank: "late" },
                      { text: ", so he feels tired." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A balanced " },
                      { blank: "diet" },
                      { text: " can improve your energy." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "They take short " },
                      { blank: "breaks" },
                      { text: " to reduce stress." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "One small change could " },
                      { blank: "help" },
                      { text: " a lot." },
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
                    question: "1. Which sentence describes a healthy routine?",
                    options: [
                      { option: "I try to sleep well and cook most of my meals at home.", isCorrect: true },
                      { option: "I never rest and always skip meals.", isCorrect: false },
                      { option: "I buy a shirt every Tuesday.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence shows cause and effect?",
                    options: [
                      { option: "I stay up late, so I feel tired the next day.", isCorrect: true },
                      { option: "I like tea and coffee.", isCorrect: false },
                      { option: "My city has a park.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence suggests improvement?",
                    options: [
                      { option: "A small change could be preparing lunch in advance.", isCorrect: true },
                      { option: "Lunch is at one.", isCorrect: false },
                      { option: "Yesterday was sunny.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which answer is more developed?",
                    options: [
                      { option: "I feel healthier because I sleep better and exercise more regularly.", isCorrect: true },
                      { option: "Healthy.", isCorrect: false },
                      { option: "At night.", isCorrect: false },
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
                    "Talk to a partner about your routine. Mention one healthy habit, one unhealthy habit, and one change you would like to make.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["sleep and rest"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["food and meals"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["exercise and movement"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["stress and work-life balance"],
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
