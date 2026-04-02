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
  title: "B1 Intermediate | Describe Problems and Solutions",
  description: "Explaining issues, causes, and practical solutions clearly.",
};

export default function DescribeProblemsAndSolutions() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Describe problems and solutions"
        description="The main problem is that deadlines are too close together, so one possible solution is to plan the work earlier."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to explain a problem,
          describe its effects, and suggest realistic solutions in work, study,
          and daily-life contexts.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-office.png"
                alt="A woman dealing with tasks at work."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the short problem statements and notice the solution language."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["The problem is that the team receives too many tasks at the same time."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["As a result, people feel stressed and make more mistakes."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["One possible solution is to set clearer priorities."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "At B1 level, speakers should move beyond naming a problem and start explaining cause, effect, and solution.",
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
                    question: "1. What is the main problem?",
                    options: [
                      { option: "The team gets too many tasks at the same time.", isCorrect: true },
                      { option: "The office is too quiet.", isCorrect: false },
                      { option: "Nobody likes buses.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What is one effect of the problem?",
                    options: [
                      { option: "People feel stressed.", isCorrect: true },
                      { option: "People sleep all day.", isCorrect: false },
                      { option: "People move to another country.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What is the suggested solution?",
                    options: [
                      { option: "Set clearer priorities.", isCorrect: true },
                      { option: "Buy more coffee only.", isCorrect: false },
                      { option: "Stop working forever.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are discussing a problem in their course."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I am having trouble keeping up with my course assignments."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What seems to be the main issue?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["The deadlines are too close together, and I also work in the evenings."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That sounds difficult. How is it affecting you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I am sleeping less, and I cannot focus well in class."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Maybe one solution would be to make a weekly study plan and ask the teacher for extra guidance."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, that would probably help me feel more organized."],
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
                    "A clear B1 explanation often follows this order: ",
                    mark("problem -> cause -> effect -> solution"),
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
                      "Uma explicação clara no nível B1 geralmente segue esta ordem: problema -> causa -> efeito -> solução.",
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
                      parts: [bold("Problem: "), mark("The deadlines are too close together.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Effect: "), mark("As a result, I feel stressed and tired.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Solution: "), mark("One possible solution is to plan my week better.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Suggestion: "), mark("Another option would be to ask for support.")],
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
                    "Useful linking phrases include ",
                    mark("the problem is that"),
                    ", ",
                    mark("as a result"),
                    ", ",
                    mark("because of this"),
                    ", and ",
                    mark("one possible solution is"),
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
                  column: "Problem Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["The main problem is that..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I am having trouble with..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["One issue is..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Effect Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["As a result..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Because of this..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["This means that..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Solution Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["One possible solution is..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Another option would be to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["This could help because..."] })] }],
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
                  "Complete the sentences about problems and solutions.",
                blocks: [
                  {
                    block: [
                      { text: "The main " },
                      { blank: "problem" },
                      { text: " is that students have too much homework." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "As a " },
                      { blank: "result" },
                      { text: ", they feel tired and stressed." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "One possible " },
                      { blank: "solution" },
                      { text: " is to organize the deadlines better." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Another option would be to ask for extra " },
                      { blank: "support" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "This could " },
                      { blank: "help" },
                      { text: " students manage their time." },
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
                    question: "1. Which sentence explains a problem clearly?",
                    options: [
                      { option: "The problem is that meetings often start late, so people lose time.", isCorrect: true },
                      { option: "Meetings are meetings.", isCorrect: false },
                      { option: "I like coffee.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence gives a possible solution?",
                    options: [
                      { option: "One possible solution is to create a weekly schedule.", isCorrect: true },
                      { option: "The solution yesterday.", isCorrect: false },
                      { option: "At seven o'clock.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which phrase shows an effect?",
                    options: [
                      { option: "As a result, people feel frustrated.", isCorrect: true },
                      { option: "In my kitchen, there is a table.", isCorrect: false },
                      { option: "How much is the jacket?", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which answer is more complete?",
                    options: [
                      { option: "The problem is long commutes, and one solution would be to allow hybrid work.", isCorrect: true },
                      { option: "Commutes.", isCorrect: false },
                      { option: "I went home.", isCorrect: false },
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
                    "Discuss one real problem from work, study, or daily life. Explain the cause, the effect, and at least one possible solution.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["too many deadlines in the same week"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["heavy traffic in your city"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["difficulty balancing work and study"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["lack of time for exercise or rest"],
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
