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
  title: "A2 Elementary | Describe Your Home",
  description: "Basic language for rooms, furniture, and home descriptions.",
};

export default function DescribeYourHome() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Talk about your home"
        description="My house is small, but it has a big kitchen."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to describe a home,
          talk about rooms and furniture, and give short details about where
          things are.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-study-home.png"
                alt="A man studying at home."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read and listen to the sentences about the home."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio: "/assets/audio/words/t/this-is-my-house.mp3",
                      parts: ["This is my house."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["It has two bedrooms and a kitchen."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["The table is in the kitchen."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When we describe a home, we often talk about size, rooms, furniture, and location inside the house.",
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
                    question: "1. What is it?",
                    options: [
                      { option: "A house.", isCorrect: true },
                      { option: "A train station.", isCorrect: false },
                      { option: "A school bag.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where is the table?",
                    options: [
                      { option: "In the kitchen.", isCorrect: true },
                      { option: "On the teacher.", isCorrect: false },
                      { option: "Under the bus.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura is telling Eric about her apartment."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Do you live in a house or an apartment?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I live in a small apartment."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["How many rooms does it have?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It has one bedroom, one bathroom, and a living room."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Is the kitchen big?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["No, it isn't, but it's very nice."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["What furniture do you have in your bedroom?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I have a bed, a chair, and a small table."],
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
                    "We describe homes with ",
                    mark("there is / there are"),
                    ", ",
                    mark("has / have"),
                    ", and simple adjectives such as ",
                    mark("big"),
                    ", ",
                    mark("small"),
                    ", or ",
                    mark("nice"),
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
                      "Descrevemos casas com there is / there are, has / have e adjetivos simples como big, small e nice.",
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
                      parts: [bold("Type of home: "), mark("I live in a house."), " / ", mark("I live in an apartment.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Rooms: "), mark("It has two bedrooms and one bathroom.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Furniture: "), mark("There is a table in the kitchen.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Adjectives: "), mark("My living room is small but comfortable.")],
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
                    "Use ",
                    mark("has"),
                    " with ",
                    mark("it"),
                    " or singular subjects, and use ",
                    mark("have"),
                    " with ",
                    mark("I"),
                    ", ",
                    mark("you"),
                    ", ",
                    mark("we"),
                    ", and ",
                    mark("they"),
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
                  column: "Rooms",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/r/room.mp3",
                              parts: ["room"],
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
                              audio: "/assets/audio/words/k/kitchen.mp3",
                              parts: ["kitchen"],
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
                              parts: ["bedroom"],
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
                  column: "Furniture",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/t/table.mp3",
                              parts: ["table"],
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
                              audio: "/assets/audio/words/c/chair.mp3",
                              parts: ["chair"],
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
                              audio: "/assets/audio/words/d/door.mp3",
                              parts: ["door"],
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
                  column: "Model Sentences",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              parts: ["My house has two bedrooms."],
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
                              parts: ["There is a table in the kitchen."],
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
                              parts: ["There are two chairs in the living room."],
                            }),
                          ],
                        },
                      ],
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
                  "Complete the sentences with the correct home words.",
                blocks: [
                  {
                    block: [
                      { text: "My house has one " },
                      { blank: "kitchen" },
                      { text: " and two bedrooms." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "There is a " },
                      { blank: "table" },
                      { text: " in the dining room." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I have a small " },
                      { blank: "room" },
                      { text: " for studying." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The " },
                      { blank: "door" },
                      { text: " is next to the kitchen." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "There are two " },
                      { blank: "chairs" },
                      { text: " in the room." },
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
                    question: "1. Do you live in a house or an apartment?",
                    options: [
                      { option: "I live in an apartment.", isCorrect: true },
                      { option: "It's in the kitchen.", isCorrect: false },
                      { option: "She is friendly.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. How many bedrooms does it have?",
                    options: [
                      { option: "It has two bedrooms.", isCorrect: true },
                      { option: "There is a table.", isCorrect: false },
                      { option: "I like coffee.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Is your kitchen big?",
                    options: [
                      { option: "No, it isn't, but it's nice.", isCorrect: true },
                      { option: "It is on the chair.", isCorrect: false },
                      { option: "I'm from Brazil.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. What furniture is in your bedroom?",
                    options: [
                      { option: "A bed, a chair, and a table.", isCorrect: true },
                      { option: "A teacher and two students.", isCorrect: false },
                      { option: "At home every day.", isCorrect: false },
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
                    "Describe your home, your apartment, or one room in it.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Say what kind of home you live in."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Say how many rooms it has."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Describe one room and the furniture in it."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("I live in a small apartment. It has one bedroom, one bathroom, and a kitchen. There is a table in the kitchen."),
                      ],
                    }),
                  ],
                },
              ]}
            />

            <LineBreak />

            <Paragraph
              value={[
                ...content({
                  parts: [
                    portuguese(
                      "Descreva sua casa, apartamento ou um cômodo usando frases simples sobre tamanho, quartos e móveis.",
                    ),
                  ],
                }),
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
