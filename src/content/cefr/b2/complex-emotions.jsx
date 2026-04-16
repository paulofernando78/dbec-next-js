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
  title: "B2 Upper-Intermediate | Express Complex Emotions",
  description: "Describing mixed feelings, emotional nuance, and personal reactions.",
};

export default function ComplexEmotions() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Express complex emotions"
        description="I was relieved that the project was over, but at the same time I felt strangely disappointed."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to describe mixed or
          complex emotions, explain why they felt that way, and talk about
          emotional reactions with greater nuance.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-study-home.png"
                alt="A reflective moment at home."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the emotional reactions and notice how the speaker combines feelings."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["I felt relieved, but also slightly guilty."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["She sounded frustrated rather than angry, although there was clearly some disappointment too."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["At first I was excited, but the feeling gradually turned into anxiety."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Complex emotions often involve contrast, change over time, or two feelings that exist at once.",
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
                    question: "1. What mixed feeling does the speaker describe first?",
                    options: [
                      { option: "Relief and guilt.", isCorrect: true },
                      { option: "Hunger and sleepiness.", isCorrect: false },
                      { option: "Boredom and pride in cooking.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. How is the second person's emotion described?",
                    options: [
                      { option: "Frustrated, with some disappointment too.", isCorrect: true },
                      { option: "Only happy and relaxed.", isCorrect: false },
                      { option: "Completely calm and silent.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. How did the third speaker's feeling change?",
                    options: [
                      { option: "Excitement gradually turned into anxiety.", isCorrect: true },
                      { option: "Anger turned into laughter immediately.", isCorrect: false },
                      { option: "Nothing changed at all.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura reflects on how she felt after getting a new job offer."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["You got the offer, right? You must be thrilled."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I am happy, of course, but I am not feeling only one thing."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What do you mean?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Part of me feels excited about the opportunity, but another part feels uneasy about leaving my current team."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That makes sense. Big changes can be both exciting and unsettling."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Exactly. I think I will feel more confident once I have had time to process everything."],
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
                    "B2 speakers often move beyond basic words like ",
                    mark("happy"),
                    " or ",
                    mark("sad"),
                    " and combine feelings with phrases such as ",
                    mark("part of me feels..."),
                    ", ",
                    mark("I was torn between..."),
                    ", or ",
                    mark("the feeling gradually changed into..."),
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
                      "Falantes de nível B2 costumam ir além de palavras básicas como happy ou sad e combinar sentimentos com expressões como part of me feels..., I was torn between... ou the feeling gradually changed into....",
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
                      parts: [bold("Mixed feeling: "), mark("I felt relieved but also disappointed.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Internal conflict: "), mark("I was torn between staying and leaving.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Emotional shift: "), mark("My excitement gradually turned into anxiety.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Nuanced reaction: "), mark("I was not angry exactly, just deeply frustrated.")],
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
                    "Useful complex-emotion language often relies on contrast and qualification: ",
                    mark("not exactly"),
                    ", ",
                    mark("to some extent"),
                    ", ",
                    mark("at the same time"),
                    ", and ",
                    mark("part of me"),
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
                  column: "Emotion Words",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["relieved"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["uneasy"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["overwhelmed"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Nuance Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["not exactly..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["to some extent..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["at the same time..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Complex Patterns",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["Part of me feels..., but..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I was torn between... and..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The feeling gradually turned into..."] })] }],
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
                  "Complete the complex-emotion sentences with the best missing words.",
                blocks: [
                  {
                    block: [
                      { text: "I felt relieved, but at the same " },
                      { blank: "time" },
                      { text: " I was still worried." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Part of me felt excited, while another part felt " },
                      { blank: "uneasy" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I was " },
                      { blank: "torn" },
                      { text: " between accepting the offer and staying where I was." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My excitement gradually turned into " },
                      { blank: "anxiety" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I was not exactly angry, just deeply " },
                      { blank: "frustrated" },
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
                    question: "1. Which sentence expresses mixed emotions?",
                    options: [
                      { option: "I was proud of the result, but I still felt strangely dissatisfied.", isCorrect: true },
                      { option: "I was proud.", isCorrect: false },
                      { option: "I bought a book.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase shows internal conflict?",
                    options: [
                      { option: "I was torn between two options.", isCorrect: true },
                      { option: "I took the bus.", isCorrect: false },
                      { option: "I like sandwiches.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence sounds most nuanced?",
                    options: [
                      { option: "I was not angry exactly; it was more a sense of disappointment.", isCorrect: true },
                      { option: "I was emotion.", isCorrect: false },
                      { option: "Everything was the same forever.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence describes an emotional shift?",
                    options: [
                      { option: "At first I felt calm, but later I became increasingly nervous.", isCorrect: true },
                      { option: "I am calm and nervous and kitchen.", isCorrect: false },
                      { option: "I was at school on Tuesday.", isCorrect: false },
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
                    "Describe a moment when your feelings were not simple. Explain what happened, how your emotions changed, and why the situation was complicated.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["receiving good news that also created pressure"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["finishing a difficult project or course"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["making a decision that felt both right and difficult"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["saying goodbye to a place, role, or group"],
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
