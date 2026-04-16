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
  title: "A2 Elementary | Talk About Your Future Plans",
  description: "Using going to for simple future plans and intentions.",
};

export default function TalkAboutYourFuturePlans() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Talk about your future plans"
        description="I'm going to study tonight, and I'm going to visit my cousin on Saturday."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about future
          plans and intentions with going to, ask about upcoming activities,
          and mention future time expressions clearly.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/grammar/future-perfect/laura-working-on-her-report.png"
                alt="Laura working on her report."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the plan sentences and think about your next few days."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["I'm going to study tonight."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Laura is going to finish her report tomorrow."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["We're going to visit our friends this weekend."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "We often use going to when we already have a plan or intention for the future.",
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
                    question: "1. When is the speaker going to study?",
                    options: [
                      { option: "Tonight.", isCorrect: true },
                      { option: "Last night.", isCorrect: false },
                      { option: "Yesterday morning.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What is Laura going to finish tomorrow?",
                    options: [
                      { option: "Her report.", isCorrect: true },
                      { option: "A sandwich.", isCorrect: false },
                      { option: "A neighborhood.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. When are they going to visit their friends?",
                    options: [
                      { option: "This weekend.", isCorrect: true },
                      { option: "Two days ago.", isCorrect: false },
                      { option: "Every Monday last year.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are making plans for the weekend."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What are you going to do this weekend?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I'm going to visit my cousin on Saturday."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Nice. Are you going to stay there all day?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["No, I'm not. I'm going to come back in the evening."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I'm going to study for my English test on Sunday."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Good plan. Are you going to go out after that?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Maybe. I'm going to decide later."],
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
                    "We use ",
                    mark("be going to + base verb"),
                    " for future plans and intentions.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Usamos be going to + verbo na forma base para falar de planos e intenções futuras.",
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
                      parts: [bold("Affirmative: "), mark("I'm going to study tonight.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Negative: "), mark("I'm not going to stay long.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Question: "), mark("Are you going to visit your cousin?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Time markers: "), mark("tonight"), ", ", mark("tomorrow"), ", ", mark("this weekend")],
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
                    "The form changes with the verb ",
                    mark("be"),
                    ": ",
                    mark("I'm going to"),
                    ", ",
                    mark("you're going to"),
                    ", ",
                    mark("she's going to"),
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
                  column: "Starts",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I'm going to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["She's going to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["We're going to..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Verbs",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["study"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["visit"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["travel"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Time Expressions",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["tonight"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["tomorrow"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["next week"] })] }],
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
                  "Complete the future plan sentences with the correct words.",
                blocks: [
                  {
                    block: [
                      { text: "I am " },
                      { blank: "going" },
                      { text: " to study tonight." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "She is going to " },
                      { blank: "visit" },
                      { text: " her cousin tomorrow." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We are going to travel next " },
                      { blank: "week" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He isn't going to " },
                      { blank: "work" },
                      { text: " on Sunday." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Are you going to study " },
                      { blank: "tonight" },
                      { text: "?" },
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
                    question: "1. What are you going to do tonight?",
                    options: [
                      { option: "I'm going to study.", isCorrect: true },
                      { option: "I studied yesterday.", isCorrect: false },
                      { option: "At the supermarket.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Are you going to travel next month?",
                    options: [
                      { option: "Yes, I am.", isCorrect: true },
                      { option: "Yes, I do.", isCorrect: false },
                      { option: "Yes, I did.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Is Laura going to visit her cousin?",
                    options: [
                      { option: "Yes, she is.", isCorrect: true },
                      { option: "Yes, she does.", isCorrect: false },
                      { option: "Yes, she visited.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. When are you going to finish the report?",
                    options: [
                      { option: "Tomorrow afternoon.", isCorrect: true },
                      { option: "Last weekend.", isCorrect: false },
                      { option: "Because it's cheap.", isCorrect: false },
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
                    "Talk with a partner about your future plans. Use going to and clear time expressions.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What are you going to do tonight?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What are you going to do this weekend?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Are you going to study or work tomorrow?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What are you going to do next month?"],
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
