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
  title: "B2 Upper-Intermediate | Idiomatic Language in Context",
  description: "Understanding and using common idioms naturally in conversation.",
};

export default function IdiomaticLanguage() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Idiomatic language in context"
        description="After a difficult week, I finally felt like I could see the light at the end of the tunnel."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to understand common
          idiomatic expressions from context, explain their meaning, and use a
          few of them naturally without sounding forced.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking.png"
                alt="A conversational setting for idiomatic language."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the expressions and focus on their meaning in context, not word by word."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["At first the project seemed impossible, but now we can see the light at the end of the tunnel."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["When the meeting became tense, Maria broke the ice with a joke."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["After months of uncertainty, they were finally back on track."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Idioms are most useful when they appear in a believable context and match the tone of the conversation.",
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
                    question: "1. What does 'see the light at the end of the tunnel' suggest?",
                    options: [
                      { option: "A difficult situation is starting to improve.", isCorrect: true },
                      { option: "Someone is literally in a tunnel.", isCorrect: false },
                      { option: "A train is arriving immediately.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What does 'break the ice' mean here?",
                    options: [
                      { option: "Make people feel more comfortable.", isCorrect: true },
                      { option: "Start an argument.", isCorrect: false },
                      { option: "Open a cold drink.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does 'back on track' imply?",
                    options: [
                      { option: "Progress has returned to normal.", isCorrect: true },
                      { option: "A train is late.", isCorrect: false },
                      { option: "The team has disappeared.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are talking about a stressful month at work."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["How are things going with that big project now?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Much better. For a while, it felt as if everything was falling apart, but we are finally back on track."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That is good to hear. Last time we spoke, you sounded completely overwhelmed."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I was. Still, once the team started communicating properly, we began to see the light at the end of the tunnel."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Sometimes that first honest conversation is enough to break the ice and get everyone moving again."],
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
                    "Idiomatic language should be learned as ",
                    mark("whole expressions in context"),
                    ", not as literal word-by-word translations.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "A linguagem idiomática deve ser aprendida como expressões completas em contexto, e não como tradução literal palavra por palavra.",
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
                      parts: [bold("break the ice"), " = make a situation feel less tense or awkward"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("back on track"), " = progressing normally again"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("see the light at the end of the tunnel"), " = feel that a difficult period is almost over"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("fall apart"), " = fail or lose control badly"],
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
                    "At B2 level, it is better to use a few idioms accurately than many idioms unnaturally. Context and tone matter more than quantity.",
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
                  column: "Useful Idioms",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["break the ice"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["back on track"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["fall apart"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Context Clues",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["tense conversation"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["difficult period"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["recovered progress"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Safer Use",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["It feels like we are finally back on track."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Her joke helped break the ice."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["We can see the light at the end of the tunnel now."] })] }],
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
                  "Complete the idioms with the correct missing words.",
                blocks: [
                  {
                    block: [
                      { text: "Her comment helped break the " },
                      { blank: "ice" },
                      { text: " at the start of the meeting." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "After several delays, the team is finally back on " },
                      { blank: "track" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The plan almost fell " },
                      { blank: "apart" },
                      { text: " when two people left the project." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We can see the light at the end of the " },
                      { blank: "tunnel" },
                      { text: " now." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "That idiom fits the " },
                      { blank: "context" },
                      { text: " well." },
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
                    question: "1. Which sentence uses an idiom naturally?",
                    options: [
                      { option: "After a difficult few months, the company is finally back on track.", isCorrect: true },
                      { option: "I ate back on track for breakfast.", isCorrect: false },
                      { option: "The tunnel is my opinion.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which idiom is useful in a tense social situation?",
                    options: [
                      { option: "break the ice", isCorrect: true },
                      { option: "see the light at the end of the tunnel", isCorrect: false },
                      { option: "back on track", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which advice about idioms is best?",
                    options: [
                      { option: "Use a few idioms accurately and in the right context.", isCorrect: true },
                      { option: "Use as many idioms as possible in every sentence.", isCorrect: false },
                      { option: "Translate every idiom literally.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence shows understanding of the idiom?",
                    options: [
                      { option: "Seeing the light at the end of the tunnel means a hard situation is nearly over.", isCorrect: true },
                      { option: "It means someone bought a lamp.", isCorrect: false },
                      { option: "It means there is a train ticket on the table.", isCorrect: false },
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
                    "Choose one real situation from your life and describe it using one idiom naturally. Then explain what the idiom means in that context.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["a difficult project or course"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["an awkward first meeting"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a period when things nearly went wrong"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a moment when you started to feel hopeful again"],
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
