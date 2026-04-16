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
  title: "A2 Elementary | Describe Your Neighborhood",
  description: "Places in town and simple location language.",
};

export default function DescribeYourNeighborhood() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Describe your neighborhood"
        description="There is a park near my house, and there&apos;s a bakery on the corner."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to describe places in
          their neighborhood, say where things are, and talk about what they
          like or don&apos;t like about the area.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking-school.png"
                alt="Two people talking outside."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the neighborhood sentences and think about your area."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["There is a park near my house."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["The supermarket is across from the pharmacy."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["My neighborhood is quiet during the week."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When we describe a neighborhood, we often talk about places, location, and general atmosphere.",
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
                    question: "1. What is near the house?",
                    options: [
                      { option: "A park.", isCorrect: true },
                      { option: "A mountain bike.", isCorrect: false },
                      { option: "A teacher.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where is the supermarket?",
                    options: [
                      { option: "Across from the pharmacy.", isCorrect: true },
                      { option: "Inside the bedroom.", isCorrect: false },
                      { option: "On a sandwich.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. How is the neighborhood during the week?",
                    options: [
                      { option: "Quiet.", isCorrect: true },
                      { option: "Purple.", isCorrect: false },
                      { option: "Hungry.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura is telling Eric about the neighborhood where she lives."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Do you like your neighborhood?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, I do. It's quiet and very convenient."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What places are near your house?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["There is a bakery, a pharmacy, and a small park nearby."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Is there a supermarket too?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes. It's across from the pharmacy."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That sounds nice."],
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
                    "We describe neighborhoods with ",
                    mark("there is / there are"),
                    ", place words, and location expressions such as ",
                    mark("near"),
                    ", ",
                    mark("next to"),
                    ", and ",
                    mark("across from"),
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
                      "Descrevemos bairros com there is / there are, nomes de lugares e expressões de localização como near, next to e across from.",
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
                      parts: [bold("Places: "), mark("park"), ", ", mark("bakery"), ", ", mark("pharmacy"), ", ", mark("supermarket")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Location: "), mark("near my house"), ", ", mark("next to the bank"), ", ", mark("across from the pharmacy")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Opinion: "), mark("It's quiet."), " / ", mark("It's busy.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Convenience: "), mark("Everything is close.")],
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
                    "We often start descriptions with ",
                    mark("There is"),
                    " for one place and ",
                    mark("There are"),
                    " for two or more places.",
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
                  column: "Places",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/general/park.mp3",
                              parts: ["park"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/general/shop.mp3",
                              parts: ["shop"],
                            }),
                          ],
                        },
                      ],
                      lineBreak: true,
                    },
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/general/town.mp3",
                              parts: ["town"],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Location",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["near"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["next to"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["across from"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Model Sentences",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["There is a park near my house."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The bakery is next to the bank."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The supermarket is across from the pharmacy."] })] }],
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
                  "Complete the neighborhood sentences with the correct place or location word.",
                blocks: [
                  {
                    block: [
                      { text: "There is a " },
                      { blank: "park" },
                      { text: " near my house." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The bakery is " },
                      { blank: "next" },
                      { text: " to the bank." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The supermarket is across " },
                      { blank: "from" },
                      { text: " the pharmacy." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My neighborhood is very " },
                      { blank: "quiet" },
                      { text: " at night." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "There " },
                      { blank: "are" },
                      { text: " two cafes on my street." },
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
                    question: "1. What places are near your house?",
                    options: [
                      { option: "There is a pharmacy and a bakery.", isCorrect: true },
                      { option: "I went there yesterday.", isCorrect: false },
                      { option: "It costs twenty dollars.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Is there a park in your neighborhood?",
                    options: [
                      { option: "Yes, there is.", isCorrect: true },
                      { option: "Yes, it is.", isCorrect: false },
                      { option: "Yes, I am.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Where is the supermarket?",
                    options: [
                      { option: "It's across from the pharmacy.", isCorrect: true },
                      { option: "It's very delicious.", isCorrect: false },
                      { option: "It was last week.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. How is your neighborhood?",
                    options: [
                      { option: "It's quiet and convenient.", isCorrect: true },
                      { option: "It's a teacher.", isCorrect: false },
                      { option: "It's at nine o'clock.", isCorrect: false },
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
                    "Describe your neighborhood to a partner. Try to mention places, location, and one opinion.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What places are near your house?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Is your neighborhood quiet or busy?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What's across from your home or apartment?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What place do you like most in your neighborhood?"],
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
