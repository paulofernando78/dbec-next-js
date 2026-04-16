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
  title: "B2 Upper-Intermediate | Formal vs Informal Register",
  description: "Choosing suitable language for professional and casual contexts.",
};

export default function FormalVsInformal() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Formal vs informal register"
        description="I was wondering whether you could send me the report by Friday sounds very different from Can you send me the report by Friday?"
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to distinguish
          between formal and informal register, choose appropriate language for
          different situations, and rewrite messages to sound more suitable.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-hand-over-report.png"
                alt="A professional communication setting."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Compare the two versions and think about which context each one fits."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["Can you send me the file today?"],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Could you please send me the file by the end of the day?"],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["I would appreciate it if you could confirm your availability."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Register is not only about vocabulary. It also involves tone, directness, sentence structure, and the relationship between speakers.",
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
                    question: "1. Which sentence sounds more casual?",
                    options: [
                      { option: "Can you send me the file today?", isCorrect: true },
                      { option: "I would appreciate it if you could confirm your availability.", isCorrect: false },
                      { option: "Please accept my apologies for the inconvenience caused.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence sounds more polite and professional?",
                    options: [
                      { option: "Could you please send me the file by the end of the day?", isCorrect: true },
                      { option: "Send it now.", isCorrect: false },
                      { option: "Where is your bag?", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What changes between formal and informal language?",
                    options: [
                      { option: "Tone, directness, and wording.", isCorrect: true },
                      { option: "Only spelling.", isCorrect: false },
                      { option: "Only the subject of the sentence.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura compares two emails with Eric."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I wrote two versions of the same email, and I am not sure which one sounds more appropriate."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What is the situation?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I need to ask my professor for an extension."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["In that case, the more formal version is probably safer."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["The first version says, 'Hi, I need more time for the assignment.' The second says, 'I am writing to request a short extension for the assignment.'"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["The second one is much more suitable because it sounds respectful and specific."],
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
                    "Formal language often sounds ",
                    mark("less direct"),
                    ", ",
                    mark("more polite"),
                    ", and ",
                    mark("more carefully structured"),
                    ", while informal language tends to be shorter and more personal.",
                  ],
                }),
              ]}
            />
            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "A linguagem formal costuma soar menos direta, mais polida e mais cuidadosamente estruturada, enquanto a linguagem informal tende a ser mais curta e pessoal.",
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
                      parts: [bold("Informal request: "), mark("Can you send me the file?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Formal request: "), mark("Could you please send me the file at your earliest convenience?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Informal apology: "), mark("Sorry I am late.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Formal apology: "), mark("Please accept my apologies for the delay.")],
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
                    "More formal language often uses longer framing expressions such as ",
                    mark("I am writing to..."),
                    ", ",
                    mark("I would like to..."),
                    ", and ",
                    mark("I would appreciate it if..."),
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
                  column: "Informal",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["Can you help me?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I need more time."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Sorry I missed the meeting."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Formal",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["Could you please assist me?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I am writing to request additional time."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Please accept my apologies for missing the meeting."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Useful Contexts",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["friend"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["teacher or manager"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["email or message"] })] }],
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
                  "Complete the sentences with suitable formal or informal phrases.",
                blocks: [
                  {
                    block: [
                      { text: "I am writing to " },
                      { blank: "request" },
                      { text: " a short extension." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Could you " },
                      { blank: "please" },
                      { text: " confirm your availability?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Sorry I " },
                      { blank: "missed" },
                      { text: " your message earlier." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I would " },
                      { blank: "appreciate" },
                      { text: " it if you could reply by Friday." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "That version sounds too " },
                      { blank: "casual" },
                      { text: " for a professor." },
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
                    question: "1. Which sentence is most appropriate for a professor?",
                    options: [
                      { option: "I am writing to ask whether it would be possible to meet next week.", isCorrect: true },
                      { option: "Hey, can we talk sometime?", isCorrect: false },
                      { option: "Meet me tomorrow.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence sounds more informal?",
                    options: [
                      { option: "Sorry, I cannot make it today.", isCorrect: true },
                      { option: "Please accept my apologies for my inability to attend today.", isCorrect: false },
                      { option: "I would be grateful for your response.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which expression softens a request?",
                    options: [
                      { option: "I would appreciate it if...", isCorrect: true },
                      { option: "Do it now.", isCorrect: false },
                      { option: "No excuses.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Why does register matter?",
                    options: [
                      { option: "Because different relationships and situations require different tones.", isCorrect: true },
                      { option: "Because formal language is always better.", isCorrect: false },
                      { option: "Because informal language is always rude.", isCorrect: false },
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
                    "Rewrite one informal message in a more formal way, then do the opposite with a formal message. Explain why each version fits its context.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["asking a professor for an extension"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["inviting a friend to meet after work"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["apologizing to a manager for a delay"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["messaging a classmate about homework"],
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
