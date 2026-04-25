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
  title: "A2 Elementary | Talk About Food",
  description: "Meals, food preferences, and ordering or describing food.",
};

export default function TalkAboutFood() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Talk about food"
        description="I usually have coffee and bread for breakfast, but my favorite food is pasta."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about meals,
          describe food preferences, and ask simple questions about what people
          eat and drink.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-eat-dinner.png"
                alt="A woman eating dinner."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the meal sentences and think about your own routine."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["I usually have coffee and bread for breakfast."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["For lunch, I often eat rice, beans, and chicken."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["At dinner, I prefer something light."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Food conversations often include meals, favorite dishes, ingredients, and simple opinions such as healthy, delicious, or spicy.",
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
                    question: "1. What does the speaker have for breakfast?",
                    options: [
                      { option: "Coffee and bread.", isCorrect: true },
                      { option: "A jacket and shoes.", isCorrect: false },
                      { option: "A book and a pen.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What does the speaker often eat for lunch?",
                    options: [
                      { option: "Rice, beans, and chicken.", isCorrect: true },
                      { option: "Only water.", isCorrect: false },
                      { option: "A bus ticket.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What kind of dinner does the speaker prefer?",
                    options: [
                      { option: "Something light.", isCorrect: true },
                      { option: "Something broken.", isCorrect: false },
                      { option: "Something expensive.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are talking before lunch."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What do you usually have for lunch?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I usually have rice, beans, and chicken."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That sounds good. Do you cook every day?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Not every day. Sometimes I cook, and sometimes I order food."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What's your favorite dish?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["My favorite dish is pasta with vegetables."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Nice. I like pasta too, but I prefer spicy food."],
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
                    "We use food language to talk about ",
                    mark("meals"),
                    ", ",
                    mark("favorite dishes"),
                    ", and ",
                    mark("ingredients"),
                    ". We also use frequency words such as ",
                    mark("usually"),
                    ", ",
                    mark("often"),
                    ", and ",
                    mark("sometimes"),
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
                      "Usamos linguagem de comida para falar de refeições, pratos favoritos e ingredientes. Também usamos palavras de frequência como usually, often e sometimes.",
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
                      parts: [bold("Meals: "), mark("breakfast"), ", ", mark("lunch"), ", ", mark("dinner")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Favorite food: "), mark("My favorite dish is pasta.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Preferences: "), mark("I prefer spicy food."), " / ", mark("I don't like oily food.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Routine: "), mark("I usually cook at home.")],
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
                    mark("have"),
                    ", we can add a meal or a food: ",
                    mark("have breakfast"),
                    ", ",
                    mark("have coffee"),
                    ", ",
                    mark("have pasta"),
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
                  column: "Meals",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["breakfast"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["lunch"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["dinner"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Food Words",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/c/coffee.mp3",
                              parts: ["coffee"],
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
                              audio: "/assets/audio/words/b/bread.mp3",
                              parts: ["bread"],
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
                              audio: "/assets/audio/words/m/milk.mp3",
                              parts: ["milk"],
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
                  column: "Useful Questions",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["What do you usually eat?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["What's your favorite dish?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Do you cook at home?"] })] }],
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
                  "Complete the food sentences with the correct meal or food word.",
                blocks: [
                  {
                    block: [
                      { text: "I usually have coffee and bread for " },
                      { blank: "breakfast" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My favorite " },
                      { blank: "dish" },
                      { text: " is pasta with vegetables." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "At " },
                      { blank: "lunch" },
                      { text: ", I often eat rice and beans." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I " },
                      { blank: "prefer" },
                      { text: " light food at night." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Sometimes we order " },
                      { blank: "food" },
                      { text: " on Friday evening." },
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
                    question: "1. What do you usually have for breakfast?",
                    options: [
                      { option: "I usually have coffee and bread.", isCorrect: true },
                      { option: "At the shopping mall.", isCorrect: false },
                      { option: "Yesterday morning.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What's your favorite dish?",
                    options: [
                      { option: "My favorite dish is pasta.", isCorrect: true },
                      { option: "I pay by card.", isCorrect: false },
                      { option: "It's near my house.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Do you cook every day?",
                    options: [
                      { option: "Not every day. Sometimes I order food.", isCorrect: true },
                      { option: "I went there yesterday.", isCorrect: false },
                      { option: "It's twenty dollars.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Do you like spicy food?",
                    options: [
                      { option: "Yes, I do. I love it.", isCorrect: true },
                      { option: "A medium, please.", isCorrect: false },
                      { option: "She's my cousin.", isCorrect: false },
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
                    "Talk about your eating habits with a partner. Use complete sentences when possible.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What do you usually have for breakfast?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What is your favorite food or dish?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Do you prefer home-cooked food or restaurant food?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What food don't you like very much?"],
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
