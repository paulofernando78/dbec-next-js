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
  title: "B1 Intermediate | Compare Things",
  description: "Comparatives, superlatives, and useful comparison structures.",
};

export default function CompareThings() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Compare things"
        description="A train is usually more comfortable than a bus, but a bus can be cheaper."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to compare people,
          places, and options using a range of comparative expressions and
          simple supporting details.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-hand-over-report.png"
                alt="A woman presenting information."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the comparisons and notice the different structures."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["A train is faster than a bus on this route."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["This apartment is not as big as the other one, but it is cheaper."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Both options are good, but the second one seems more practical."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "At B1 level, comparisons should sound more natural and more balanced than simple one-word answers.",
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
                    question: "1. What is faster on this route?",
                    options: [
                      { option: "A train.", isCorrect: true },
                      { option: "An apartment.", isCorrect: false },
                      { option: "A report.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. How is the second apartment different?",
                    options: [
                      { option: "It is cheaper.", isCorrect: true },
                      { option: "It is slower.", isCorrect: false },
                      { option: "It is earlier.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. How does the speaker describe the second option?",
                    options: [
                      { option: "More practical.", isCorrect: true },
                      { option: "More dangerous.", isCorrect: false },
                      { option: "More silent than water.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric compare two ways of commuting to work."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["How do you usually get to work now?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["These days I take the train instead of the bus."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Is it better?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["In some ways, yes. It is faster and usually more comfortable."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What about the price?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["It is slightly more expensive, but it is much more reliable."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That makes sense. The bus is cheaper, but it is not as punctual."],
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
                    "We can compare things with ",
                    mark("-er than"),
                    ", ",
                    mark("more + adjective + than"),
                    ", ",
                    mark("not as ... as"),
                    ", and pairing words like ",
                    mark("both"),
                    " or ",
                    mark("whereas"),
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
                      "Podemos comparar coisas com -er than, more + adjective + than, not as ... as e palavras como both ou whereas.",
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
                      parts: [bold("Direct comparison: "), mark("The train is faster than the bus.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Long adjective: "), mark("Online classes are more flexible than face-to-face classes.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Equal / unequal: "), mark("It is not as cheap as the other one.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Balanced view: "), mark("Both options are useful, but one is more practical.")],
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
                    "Good comparison answers often include ",
                    mark("one advantage"),
                    ", ",
                    mark("one disadvantage"),
                    ", and ",
                    mark("a conclusion"),
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
                  column: "Structures",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["faster than"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["more comfortable than"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["not as reliable as"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Modifiers",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["slightly"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["much"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["a bit"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Balancing Language",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["both"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["however"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["whereas"] })] }],
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
                  "Complete the comparisons with the best comparative form.",
                blocks: [
                  {
                    block: [
                      { text: "A bike is usually " },
                      { blank: "cheaper" },
                      { text: " than a car." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "This exercise is " },
                      { blank: "more" },
                      { text: " interesting than the last one." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The first option is not as " },
                      { blank: "practical" },
                      { text: " as the second one." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The train is much " },
                      { blank: "faster" },
                      { text: " than the bus." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Both choices are useful; " },
                      { blank: "however" },
                      { text: ", one is easier to manage." },
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
                    question: "1. Which sentence compares two things clearly?",
                    options: [
                      { option: "Working from home is more flexible than working in an office.", isCorrect: true },
                      { option: "Working from home every day.", isCorrect: false },
                      { option: "The office yesterday.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase shows a weaker difference?",
                    options: [
                      { option: "a bit more expensive", isCorrect: true },
                      { option: "the most", isCorrect: false },
                      { option: "every day", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence shows contrast?",
                    options: [
                      { option: "The bus is cheaper, whereas the train is faster.", isCorrect: true },
                      { option: "The bus is blue.", isCorrect: false },
                      { option: "The train at six.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence uses not as ... as correctly?",
                    options: [
                      { option: "This route is not as convenient as the other one.", isCorrect: true },
                      { option: "This route not convenient than the other.", isCorrect: false },
                      { option: "This route as convenient not the other.", isCorrect: false },
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
                    "Compare the following options with a partner. Mention at least two differences and one final opinion.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["living in a city versus living in a small town"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["studying online versus studying in person"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["traveling by bus versus traveling by train"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["working alone versus working in a team"],
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
