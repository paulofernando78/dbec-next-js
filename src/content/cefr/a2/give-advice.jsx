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
  title: "A2 Elementary | Give Advice",
  description: "Basic advice with should and shouldn't.",
};

export default function GiveAdvice() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Give advice"
        description="You should rest. You shouldn't work today."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to ask for simple
          advice, give recommendations with should and shouldn&apos;t, and
          respond naturally to everyday problems.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking.png"
                alt="Two people talking."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the problem sentences and think of good advice."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["I have a bad headache."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["My friend is very tired after work."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["I have an English test tomorrow."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When someone has a problem, we can give simple advice with should or shouldn't.",
                      ],
                    }),
                  ]}
                />
              </div>
            </CardLayout>

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the best advice.",
                questions: [
                  {
                    question: "1. I have a bad headache.",
                    options: [
                      { option: "You should rest.", isCorrect: true },
                      { option: "You should buy a jacket.", isCorrect: false },
                      { option: "You should move house.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. My friend is very tired after work.",
                    options: [
                      { option: "She should sleep early.", isCorrect: true },
                      { option: "She should eat a bus.", isCorrect: false },
                      { option: "She should learn Japanese today.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. I have an English test tomorrow.",
                    options: [
                      { option: "You should study tonight.", isCorrect: true },
                      { option: "You should forget your book.", isCorrect: false },
                      { option: "You should skip school forever.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Eric feels sick, and Laura gives advice."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I don't feel very well today."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What's wrong?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I have a sore throat and a headache."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["You should drink water and rest."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Should I go to work?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["No, you shouldn't. You should stay home today."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Maybe I should see a doctor too."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, that's a good idea."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="meaning" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "We use ",
                    mark("should"),
                    " and ",
                    mark("shouldn't"),
                    " to give advice or recommendations.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos should e shouldn't para dar conselhos ou recomendações.",
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
                      parts: [bold("Advice: "), mark("You should rest.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Negative advice: "), mark("You shouldn't work today.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Question: "), mark("Should I see a doctor?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Response: "), mark("Yes, you should."), " / ", mark("No, you shouldn't.")],
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
                    "After ",
                    mark("should"),
                    " and ",
                    mark("shouldn't"),
                    ", we use the base verb: ",
                    mark("should rest"),
                    ", ",
                    mark("should drink"),
                    ", ",
                    mark("should go"),
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
                  column: "Problems",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["headache"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["sore throat"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["tired"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Good Advice",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["You should rest."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["You should drink water."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["You should see a doctor."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Negative Advice",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["You shouldn't work today."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["You shouldn't stay up late."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["You shouldn't ignore the problem."] })] }],
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
                  "Complete the advice sentences with should or shouldn't and the correct verb.",
                blocks: [
                  {
                    block: [
                      { text: "You " },
                      { blank: "should" },
                      { text: " rest if you have a headache." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "You shouldn't " },
                      { blank: "work" },
                      { text: " if you feel very sick." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "You should " },
                      { blank: "drink" },
                      { text: " more water." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Should I " },
                      { blank: "see" },
                      { text: " a doctor?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "You shouldn't stay up " },
                      { blank: "late" },
                      { text: " before an exam." },
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
                    question: "1. I have a sore throat.",
                    options: [
                      { option: "You should drink warm tea.", isCorrect: true },
                      { option: "You should buy a sofa.", isCorrect: false },
                      { option: "You should go shopping for shoes.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Should I study tonight?",
                    options: [
                      { option: "Yes, you should.", isCorrect: true },
                      { option: "Yes, you are.", isCorrect: false },
                      { option: "Yes, you did.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. I'm very tired.",
                    options: [
                      { option: "You shouldn't stay up late.", isCorrect: true },
                      { option: "You shouldn't eat a bicycle.", isCorrect: false },
                      { option: "You shouldn't count to ten.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. What's good advice for Eric?",
                    options: [
                      { option: "He should stay home and rest.", isCorrect: true },
                      { option: "He should pay by card.", isCorrect: false },
                      { option: "He should visit a supermarket.", isCorrect: false },
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
                    "Work with a partner. Read a problem and give one or two pieces of advice.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["I have an exam tomorrow."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["I'm very stressed at work."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["I don't sleep enough."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["I want to improve my English."],
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
