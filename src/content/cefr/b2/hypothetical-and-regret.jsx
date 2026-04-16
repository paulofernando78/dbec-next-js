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
  title: "B2 Upper-Intermediate | Hypothetical and Regret Structures",
  description: "Using advanced conditional and regret language to reflect on imagined alternatives.",
};

export default function HypotheticalAndRegret() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Hypothetical and regret structures"
        description="If I had prepared more carefully, I would not have made so many mistakes, and I wish I had asked for help earlier."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to discuss unreal
          present and past situations, express regret more naturally, and
          compare what happened with what might have happened.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-study-home.png"
                alt="A reflective study moment."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the sentences and notice the difference between present hypotheticals and past regret."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["If I had more confidence, I would apply for that position."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["If I had studied harder, I would have passed the exam more easily."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["I wish I had spoken to her sooner."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "At B2 level, it is important to distinguish between imagining a different present and regretting a different past.",
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
                    question: "1. Which sentence imagines a different present?",
                    options: [
                      { option: "If I had more confidence, I would apply for that position.", isCorrect: true },
                      { option: "I wish I had called her yesterday.", isCorrect: false },
                      { option: "I have confidence today.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence refers to regret about the past?",
                    options: [
                      { option: "I wish I had spoken to her sooner.", isCorrect: true },
                      { option: "If I were taller, I would play basketball.", isCorrect: false },
                      { option: "I am speaking now.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which structure describes an unreal past result?",
                    options: [
                      { option: "If I had studied harder, I would have passed.", isCorrect: true },
                      { option: "If I study harder, I pass.", isCorrect: false },
                      { option: "If I had study, I would pass yesterday.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura reflects on a presentation that did not go well."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["You seem disappointed. Did the presentation go badly?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Not terribly, but I know it could have gone better."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What would you change if you had the chance?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["If I had prepared more examples, I would have sounded more convincing."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Do you regret anything in particular?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes. I wish I had practiced the final section more carefully."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["At least you know what to improve next time."],
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
                    "This topic combines ",
                    mark("second conditional"),
                    ", ",
                    mark("third conditional"),
                    ", and ",
                    mark("wish + past perfect"),
                    " to describe imagined alternatives and regret.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Este tópico combina second conditional, third conditional e wish + past perfect para descrever alternativas imaginadas e arrependimento.",
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
                      parts: [bold("Unreal present: "), mark("If I had more time, I would learn another language.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Unreal past: "), mark("If I had left earlier, I would have caught the train.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Regret: "), mark("I wish I had asked for help sooner.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reflection: "), mark("Things might have been different if...")],
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
                    "A useful contrast is: ",
                    mark("If I had more... I would..."),
                    " for unreal present situations, and ",
                    mark("If I had done... I would have..."),
                    " for unreal past situations.",
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
                  column: "Unreal Present",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["If I had more time, I would..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If I were more confident, I would..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If I lived closer, I would..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Unreal Past",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["If I had prepared better, I would have..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If we had left earlier, we would have..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If she had known, she would have..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Regret",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I wish I had..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["If only I had..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Things might have been different if..."] })] }],
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
                  "Complete the hypothetical and regret sentences with the correct forms.",
                blocks: [
                  {
                    block: [
                      { text: "If I had more time, I " },
                      { blank: "would" },
                      { text: " read more." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "If she had left earlier, she would have " },
                      { blank: "arrived" },
                      { text: " on time." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I wish I had " },
                      { blank: "prepared" },
                      { text: " more carefully." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "If only we had " },
                      { blank: "known" },
                      { text: " about the change earlier." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Things might have been different if he had asked for " },
                      { blank: "help" },
                      { text: "." },
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
                    question: "1. Which sentence expresses regret?",
                    options: [
                      { option: "I wish I had listened more carefully.", isCorrect: true },
                      { option: "I wish I listen more carefully now yesterday.", isCorrect: false },
                      { option: "I am listening more carefully.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence describes an unreal past result?",
                    options: [
                      { option: "If I had left earlier, I would have caught the train.", isCorrect: true },
                      { option: "If I leave earlier, I caught the train.", isCorrect: false },
                      { option: "If I had earlier, train.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence imagines a different present?",
                    options: [
                      { option: "If I were more confident, I would speak more in meetings.", isCorrect: true },
                      { option: "If I had spoken more yesterday, I would speak now.", isCorrect: false },
                      { option: "I spoke more in meetings last year.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence sounds most natural at B2 level?",
                    options: [
                      { option: "Looking back, I wish I had asked for feedback before submitting the final version.", isCorrect: true },
                      { option: "I regret because yes.", isCorrect: false },
                      { option: "Feedback was table yesterday.", isCorrect: false },
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
                    "Reflect on a decision, mistake, or missed opportunity. Explain what happened, what might have happened differently, and what you regret, if anything.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["a presentation, exam, or interview"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a decision about work or study"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a missed opportunity"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a situation where you would act differently now"],
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
