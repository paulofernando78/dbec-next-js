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
  title: "B1 Intermediate | Tell a Story",
  description: "Sequencing events and telling short personal stories clearly.",
};

export default function TellAStory() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Tell a story"
        description="First we missed the bus, then we ran to the station, and in the end we arrived just in time."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to tell a short story
          in a clear order, use narrative linkers, and add key details to make
          the story more interesting.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-man-birthday-school.png"
                alt="Two people talking after an event."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the story steps and notice the order of events."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["First, we left home late."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Then, we missed the bus and had to call a taxi."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["In the end, we arrived at the party just in time."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Good stories usually have a clear beginning, middle, and ending. Linkers help the listener follow each step.",
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
                    question: "1. What happened first?",
                    options: [
                      { option: "They left home late.", isCorrect: true },
                      { option: "They arrived at the party.", isCorrect: false },
                      { option: "They took a flight.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What happened after they missed the bus?",
                    options: [
                      { option: "They called a taxi.", isCorrect: true },
                      { option: "They cooked dinner.", isCorrect: false },
                      { option: "They stayed at home.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. How did the story end?",
                    options: [
                      { option: "They arrived just in time.", isCorrect: true },
                      { option: "They forgot the address.", isCorrect: false },
                      { option: "They bought new clothes.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura tells Eric about a surprising trip to the airport."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["You look tired. What happened yesterday?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It was a long day. First, my sister and I left home very early to go to the airport."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Did everything go smoothly?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Not really. On the way there, our car suddenly stopped working."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That sounds stressful. What did you do next?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["We called a ride, and luckily it arrived quickly. After that, we finally got to the airport."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Did you catch your flight?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Yes, we did, but only a few minutes before boarding."],
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
                    "When we tell a story, we usually combine ",
                    mark("past verbs"),
                    " with ",
                    mark("narrative linkers"),
                    " such as ",
                    mark("first"),
                    ", ",
                    mark("then"),
                    ", ",
                    mark("after that"),
                    ", and ",
                    mark("in the end"),
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
                      "Quando contamos uma história, normalmente combinamos verbos no passado com conectores narrativos como first, then, after that e in the end.",
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
                      parts: [bold("Beginning: "), mark("First, we left home very early.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Middle: "), mark("Then, the car suddenly stopped working.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Next step: "), mark("After that, we called a ride.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Ending: "), mark("In the end, we caught the flight.")],
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
                    "Stories sound clearer when we group actions into steps and give extra details with short time phrases like ",
                    mark("on the way there"),
                    " or ",
                    mark("a few minutes later"),
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
                  column: "Linkers",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["first"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["then"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["in the end"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Action Verbs",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["left"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["called"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["caught"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Extra Detail",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["very early"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["on the way there"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["only a few minutes before boarding"] })] }],
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
                  "Complete the story with suitable linkers and past verbs.",
                blocks: [
                  {
                    block: [
                      { text: "First, we " },
                      { blank: "arrived" },
                      { text: " at the station." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Then, we " },
                      { blank: "realized" },
                      { text: " we had the wrong platform." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "After that, we " },
                      { blank: "ran" },
                      { text: " to the other side." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "In the " },
                      { blank: "end" },
                      { text: ", we got on the train." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "It was a very " },
                      { blank: "stressful" },
                      { text: " morning." },
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
                    question: "1. What makes a story easy to follow?",
                    options: [
                      { option: "A clear order of events.", isCorrect: true },
                      { option: "Only one short sentence.", isCorrect: false },
                      { option: "No time expressions.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence is a good story opener?",
                    options: [
                      { option: "First, we got to the airport at six in the morning.", isCorrect: true },
                      { option: "Airports are big places.", isCorrect: false },
                      { option: "I usually like coffee.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which linker usually introduces the final part?",
                    options: [
                      { option: "In the end.", isCorrect: true },
                      { option: "Every Monday.", isCorrect: false },
                      { option: "At least.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which question helps continue a story?",
                    options: [
                      { option: "What happened next?", isCorrect: true },
                      { option: "How much is the ticket?", isCorrect: false },
                      { option: "Where is your kitchen?", isCorrect: false },
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
                    "Tell a partner about a real or invented experience. Try to use at least four story steps and one surprising detail.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["a journey that went wrong"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a funny day at school or work"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a weekend plan that changed suddenly"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["an event that ended better than expected"],
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
