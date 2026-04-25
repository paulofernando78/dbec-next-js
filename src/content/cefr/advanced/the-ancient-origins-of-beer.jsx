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
          <Section id="Guess" heading={3}>
            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question: "1. What is the main purpose of the video?",
                    options: [
                      {
                        option: "To advertise a modern beer brand.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "To explain how beer developed from ancient times to the present.",
                        isCorrect: true,
                      },
                      {
                        option: "To compare beer with soft drinks.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "2. What did ancient brewing require before fermentation?",
                    options: [
                      {
                        option:
                          "Turning grain starches into sugars that yeast could act on.",
                        isCorrect: true,
                      },
                      {
                        option: "Freezing the beer mixture.",
                        isCorrect: false,
                      },
                      { option: "Adding modern chemicals.", isCorrect: false },
                    ],
                  },
                  {
                    question:
                      "3. Why were hops important in the history of beer?",
                    options: [
                      {
                        option:
                          "They made beer sweeter and removed all alcohol.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "They added bitterness and acted as a preservative.",
                        isCorrect: true,
                      },
                      {
                        option:
                          "They replaced cereal grains as the main ingredient.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="video" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Watch the video and listen for when beer first appeared, how ancient people brewed it, and which later innovations changed its flavor and production.",
                  ],
                }),
              ]}
            />
            <VideoPlayer
              videoId="D98UJl6Ea6o"
              title="The ancient origins of beer"
            />

            <LineBreak />

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

          <Section id="practice" heading={3}>
            <FillInTheBlanks
              exercise={{
                instructions: "Complete the summary with the key words.",
                blocks: [
                  {
                    block: [
                      {
                        text: "The oldest evidence of beer brewing dates back about ",
                      },
                      { blank: "13,000" },
                      { text: " years." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Ancient brewers needed to convert grain starches into fermentable ",
                      },
                      { blank: "sugars" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Wild " },
                      { blank: "yeast" },
                      { text: " helped transform the mixture into alcohol." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Later, brewers added " },
                      { blank: "hops" },
                      { text: " to create bitterness and help preserve beer." },
                    ],
                    lineBreak: true,
                  },
                ],
              }}
            />
          </Section>

          <Section id="discussion" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Discuss the video with a partner. Use the prompts below to summarize the history and evaluate which changes were most important.",
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
                        "1. What surprised you most about the earliest forms of beer?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "2. Why do you think beer developed differently in different regions?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. Which innovation seems most significant to you: hops, refrigeration, or understanding yeast?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Give your opinion: ",
                        mark(
                          "Beer changed not only because of taste, but because of science, safety, and culture.",
                        ),
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
