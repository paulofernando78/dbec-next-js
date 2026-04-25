import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { bold, content, mark } from "@/helpers/content";

export const metadata = {
  title: "Advanced | The Ancient Origins of Beer",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about the history of beer.",
};

export default function AncientOriginsOfBeer() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="The ancient origins of beer"
        description="Watch the video, identify the main historical stages, and discuss how brewing changed over time."
      />

      <div className="line-break">
        <Card>
          By the end of this lesson, students will be able to summarize the
          historical development of beer, identify key brewing concepts, and
          discuss how scientific and cultural changes shaped the drink.
        </Card>

        <PageSections>
          <Section id="Introduction" heading={3}>
            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Topic: "),
                        "the historical development of beer",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Time span: "),
                        "from ancient brewing to modern varieties",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Key process: "),
                        "converting grain starches into sugars and fermenting them",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Important innovations: "),
                        "hops, refrigeration, and understanding yeast",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>
          <Section id="Before watching" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Discuss the questions below before watching the video.",
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
                      parts: [
                        "1. Why do you think beer became popular in ancient societies?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. What ingredients are needed to make beer?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. How do you think modern beer is different from ancient beer?",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="Gist" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: ["Watch the video once and choose the best summary."],
                }),
              ]}
            />

            <VideoPlayer
              videoId="D98UJl6Ea6o"
              title="The ancient origins of beer"
            />

            <Radio
              exercise={{
                instruction: "Choose the best answer.",
                questions: [
                  {
                    question: "What is the video mainly about?",
                    options: [
                      {
                        option: "How to brew beer at home.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "How beer developed from ancient times to the modern world.",
                        isCorrect: true,
                      },
                      {
                        option: "Why people should stop drinking beer.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="Details" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: ["Watch again and listen for specific information."],
                }),
              ]}
            />

            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question:
                      "1. How old is the oldest evidence of beer brewing?",
                    options: [
                      {
                        option: "About 2,000 years old.",
                        isCorrect: false,
                      },
                      {
                        option: "About 13,000 years old.",
                        isCorrect: true,
                      },
                      {
                        option: "About 500 years old.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "2. What had to happen before fermentation could begin?",
                    options: [
                      {
                        option: "Grain starches had to be turned into sugars.",
                        isCorrect: true,
                      },
                      {
                        option: "The beer had to be frozen.",
                        isCorrect: false,
                      },
                      {
                        option: "Hops had to be added first.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "3. Why were hops important?",
                    options: [
                      {
                        option: "They added bitterness and preserved beer.",
                        isCorrect: true,
                      },
                      {
                        option: "They removed alcohol.",
                        isCorrect: false,
                      },
                      {
                        option: "They made beer sweeter.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />

            <FillInTheBlanks
              exercise={{
                instructions: "Complete the notes.",
                blocks: [
                  {
                    block: [
                      {
                        text: "The oldest evidence of brewing dates back about ",
                      },
                      { blank: "13,000" },
                      { text: " years." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Wild ",
                      },
                      { blank: "yeast" },
                      {
                        text: " helped create alcohol.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Later, brewers added ",
                      },
                      { blank: "hops" },
                      {
                        text: " for flavor and preservation.",
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              }}
            />
          </Section>

          <Section id="Follow-up discussion" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: ["Discuss the questions below."],
                }),
              ]}
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        "1. What surprised you most about the history of beer?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "2. Which innovation was most important: hops, refrigeration, or understanding yeast?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. How has technology changed the food and drink we consume today?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Do traditional foods and drinks matter in modern society? Why?",
                      ],
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
