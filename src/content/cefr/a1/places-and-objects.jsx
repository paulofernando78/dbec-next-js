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
  title: "A1 Beginner | Places and Objects",
  description: "Basic classroom and everyday object vocabulary.",
};

export default function PlacesAndObjects() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Places & Objects"
        description="It's on the table. It's in my bag. Where's the book?"
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to name common places
          and objects, ask where things are, and answer with short sentences
          using in and on.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/grammar/verb-to-be/students-classroom.png"
                alt="Students in a classroom."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Look at the picture and listen to the sentences."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/verb-be/introduction/this-is-an-english-school.mp3",
                      parts: ["This is an English school."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/grammar/present-continuous/introduction/students-are-looking-at-a-picture-in-a-book.mp3",
                      parts: ["The students are looking at a picture in a book."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["There is a book on the table."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "In class, students often talk about places like school, house, and room, and objects like books, bags, and pens.",
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
                    question: "1. Where are the students?",
                    options: [
                      { option: "At an English school.", isCorrect: true },
                      { option: "At a beach.", isCorrect: false },
                      { option: "On a bus.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What are they looking at?",
                    options: [
                      { option: "A picture in a book.", isCorrect: true },
                      { option: "A football game.", isCorrect: false },
                      { option: "A train station.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are in the classroom before the lesson starts."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Where's my book?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["It's on the table."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["And where's my pen?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["It's in your bag."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Is my chair near the door?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Yes, it is."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Great. This classroom is nice."],
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
                    "We use place words to talk about locations and object words to talk about things around us. We often ask ",
                    mark("Where's ...?"),
                    " or ",
                    mark("Where are ...?"),
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
                      "Usamos palavras de lugar para falar sobre localizações e palavras de objetos para falar sobre coisas ao nosso redor. Muitas vezes perguntamos Where's ...? ou Where are ...?.",
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
                      parts: [bold("Places: "), mark("school"), ", ", mark("house"), ", ", mark("room")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Objects: "), mark("book"), ", ", mark("bag"), ", ", mark("pen"), ", ", mark("chair"), ", ", mark("table")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("On: "), mark("The book is on the table.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("In: "), mark("The pen is in the bag.")],
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
                    "We often say ",
                    mark("Where is"),
                    " as ",
                    mark("Where's"),
                    " in conversation.",
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
                              audio: "/assets/audio/words/s/school.mp3",
                              parts: ["school"],
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
                              parts: ["house"],
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
                              audio: "/assets/audio/words/r/room.mp3",
                              parts: ["room"],
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
                  column: "Objects",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/words/b/book.mp3",
                              parts: ["book"],
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
                              audio: "/assets/audio/words/b/bag.mp3",
                              parts: ["bag"],
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
                              audio: "/assets/audio/words/p/pen.mp3",
                              parts: ["pen"],
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
                  column: "Questions + Answers",
                  blocks: [
                    {
                      block: [
                        {
                          text: [
                            ...content({
                              audio: "/assets/audio/pronunciation/linked-sounds/s-y/wheres-your-phone.mp3",
                              parts: ["Where's your phone?"],
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
                              parts: ["It's on the table."],
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
                              parts: ["It's in the bag."],
                            }),
                          ],
                        },
                      ],
                    },
                  ],
                },
              ]}
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/words/t/table.mp3",
                      parts: [bold("table"), " = a flat piece of furniture"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/words/c/chair.mp3",
                      parts: [bold("chair"), " = something you sit on"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      audio: "/assets/audio/words/d/door.mp3",
                      parts: [bold("door"), " = the part you open and close"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions:
                  "Complete the sentences with the correct place or object word.",
                blocks: [
                  {
                    block: [
                      { text: "The book is on the " },
                      { blank: "table" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The pen is in the " },
                      { blank: "bag" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The students are at " },
                      { blank: "school" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I sit on a " },
                      { blank: "chair" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My bedroom is a " },
                      { blank: "room" },
                      { text: " in my house." },
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
                    question: "1. Where's the book?",
                    options: [
                      { option: "It's on the table.", isCorrect: true },
                      { option: "It's a book.", isCorrect: false },
                      { option: "At school every day.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Where's the pen?",
                    options: [
                      { option: "It's in the bag.", isCorrect: true },
                      { option: "It's a chair.", isCorrect: false },
                      { option: "Yes, it is bag.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What is this place?",
                    options: [
                      { option: "It's a classroom.", isCorrect: true },
                      { option: "It's a pen.", isCorrect: false },
                      { option: "They're on the table.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Is the chair near the door?",
                    options: [
                      { option: "Yes, it is.", isCorrect: true },
                      { option: "It's in my bag.", isCorrect: false },
                      { option: "I am from Brazil.", isCorrect: false },
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
                    "Look around your classroom, bedroom, or office. Describe three objects and where they are.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. Name one object."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Say where it is."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["3. Ask your partner about one object."],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Use this model: ",
                        mark("The book is on the table. The pen is in my bag. The chair is near the door."),
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
                      "Olhe ao seu redor e descreva três objetos e onde eles estão. Depois, faça uma pergunta para o colega.",
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
