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
  title: "A2 Elementary | Shopping and Money",
  description: "Useful shopping questions, prices, and payment language.",
};

export default function ShoppingAndMoney() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Shopping and money"
        description="How much is this T-shirt? It's cheap. Can I pay by card?"
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to ask about prices,
          understand simple shopping conversations, and talk about paying with
          cash or card.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-finance.png"
                alt="A woman working with money and finance."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Look at the picture and listen to the shopping sentences."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/words/t/this-shirt-is-cheap.mp3",
                      parts: ["This shirt is cheap."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/words/i/ill-pay-you-tomorrow.mp3",
                      parts: ["I'll pay you tomorrow."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["I need to buy bread and milk."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "In shops, we usually ask about prices, sizes, payment, and change.",
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
                    question: "1. How is the shirt?",
                    options: [
                      { option: "It's cheap.", isCorrect: true },
                      { option: "It's asleep.", isCorrect: false },
                      { option: "It's late.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What does the speaker want to do tomorrow?",
                    options: [
                      { option: "Pay.", isCorrect: true },
                      { option: "Cook dinner.", isCorrect: false },
                      { option: "Call a doctor.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does the speaker need to buy?",
                    options: [
                      { option: "Bread and milk.", isCorrect: true },
                      { option: "A ticket and a pencil.", isCorrect: false },
                      { option: "A bedroom and a lamp.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura is buying a T-shirt in a shop."
              lines={[
                {
                  speaker: "Shop assistant:",
                  text: [
                    ...content({
                      parts: ["Can I help you?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, please. How much is this blue T-shirt?"],
                    }),
                  ],
                },
                {
                  speaker: "Shop assistant:",
                  text: [
                    ...content({
                      parts: ["It's twenty dollars."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Do you have it in a medium?"],
                    }),
                  ],
                },
                {
                  speaker: "Shop assistant:",
                  text: [
                    ...content({
                      parts: ["Yes, here you are."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Great. I'll take it. Can I pay by card?"],
                    }),
                  ],
                },
                {
                  speaker: "Shop assistant:",
                  text: [
                    ...content({
                      parts: ["Of course."],
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
                    "When we go shopping, we often ask about ",
                    mark("price"),
                    ", ",
                    mark("size"),
                    ", and ",
                    mark("payment"),
                    ". We also use adjectives like ",
                    mark("cheap"),
                    " and ",
                    mark("expensive"),
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
                      "Quando vamos às compras, perguntamos sobre preço, tamanho e pagamento. Também usamos adjetivos como cheap e expensive.",
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
                      parts: [bold("Price: "), mark("How much is it?"), " / ", mark("It's twenty dollars.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Size: "), mark("Do you have it in a medium?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Payment: "), mark("Can I pay by card?"), " / ", mark("Do you take cash?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Decision: "), mark("I'll take it.")],
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
                    "The question ",
                    mark("How much is it?"),
                    " is very common in shops. We often answer with ",
                    mark("It's + price"),
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
                  column: "Useful Questions",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["How much is it?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Do you have it in a medium?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Can I pay by card?"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Money Words",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/c/cheap.mp3",
                              parts: ["cheap"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["expensive"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["pay"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Shopping Actions",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/b/buy.mp3",
                              parts: ["buy"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["take"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["pay by card"] })] }],
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
                  "Complete the shopping sentences with the correct words.",
                blocks: [
                  {
                    block: [
                      { text: "How " },
                      { blank: "much" },
                      { text: " is this bag?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "It " },
                      { blank: "costs" },
                      { text: " fifteen dollars." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Can I " },
                      { blank: "pay" },
                      { text: " by card?" },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "This jacket is not expensive. It's " },
                      { blank: "cheap" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I'll " },
                      { blank: "take" },
                      { text: " it, please." },
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
                    question: "1. How much is this sweater?",
                    options: [
                      { option: "It's thirty dollars.", isCorrect: true },
                      { option: "It's in the kitchen.", isCorrect: false },
                      { option: "I go there on weekends.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Can I pay by card?",
                    options: [
                      { option: "Yes, of course.", isCorrect: true },
                      { option: "At the bus stop.", isCorrect: false },
                      { option: "I'm from Chile.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Do you have it in a large?",
                    options: [
                      { option: "Yes, here you are.", isCorrect: true },
                      { option: "It costs twenty.", isCorrect: false },
                      { option: "I don't like it.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. This T-shirt is very expensive.",
                    options: [
                      { option: "Then I won't buy it today.", isCorrect: true },
                      { option: "My house has two bedrooms.", isCorrect: false },
                      { option: "I visited my aunt yesterday.", isCorrect: false },
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
                    "Role-play a short shop conversation with a partner. One student is the customer and one is the shop assistant.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["Ask about the price."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Ask for a color or size."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Decide if the item is cheap or expensive."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Choose cash or card."],
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
