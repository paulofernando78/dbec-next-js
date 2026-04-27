import { Whiteboard } from "@/components/molecules/Whiteboard";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { GuessWord } from "@/components/molecules/GuessWord";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { bold, content } from "@/helpers/content";

export const metadata = {
  title: "Advanced | What Causes Constipation?",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about constipation and how the digestive system works.",
};

export default function Constipation() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="What causes constipation?"
        description="Watch the video, understand why constipation happens, and discuss digestive health."
      />

      <div className="line-break">
        <Card>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "By the end of this lesson, you will understand the main causes of constipation and talk about healthy digestive habits.",
                ],
              }),
            ]}
          />
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
                        "how the digestive system works",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Condition: "),
                        "constipation and delayed bowel movements",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Possible causes: "),
                        "slow colon movement, dehydration, low fiber, pelvic floor issues",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        bold("Solutions mentioned: "),
                        "fiber, water, movement, posture, medical support",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="guess-word" heading={3}>
            <GuessWord words={["cat", "dog"]} />
          </Section>

          <Section id="Before watching" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: ["Discuss the questions below before watching."],
                }),
              ]}
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["1. What usually causes constipation?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. How can food choices affect digestion?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. What habits help keep the digestive system healthy?",
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
              videoId="0IVO50DuMCs"
              title="What causes constipation?"
            />

            <Radio
              exercise={{
                instruction: "Choose the best answer.",
                questions: [
                  {
                    question: "What is the video mainly about?",
                    options: [
                      {
                        option:
                          "How the digestive system works and why constipation happens.",
                        isCorrect: true,
                      },
                      {
                        option: "How to cook healthy meals.",
                        isCorrect: false,
                      },
                      {
                        option: "Why stomach pain always needs surgery.",
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
                      "1. What happens when stool moves too slowly through the colon?",
                    options: [
                      {
                        option:
                          "Too much water is absorbed and stool becomes hard.",
                        isCorrect: true,
                      },
                      {
                        option: "It becomes sweeter.",
                        isCorrect: false,
                      },
                      {
                        option: "It disappears completely.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "2. Which nutrient can help prevent constipation?",
                    options: [
                      {
                        option: "Fiber",
                        isCorrect: true,
                      },
                      {
                        option: "Sugar",
                        isCorrect: false,
                      },
                      {
                        option: "Salt",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "3. What body area can also affect bowel movements?",
                    options: [
                      {
                        option: "Pelvic floor muscles",
                        isCorrect: true,
                      },
                      {
                        option: "Shoulders",
                        isCorrect: false,
                      },
                      {
                        option: "Ears",
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
                        text: "When stool stays in the colon too long, it loses ",
                      },
                      { blank: "water" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Eating more ",
                      },
                      { blank: "fiber" },
                      {
                        text: " can help bowel movements.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Problems with the pelvic floor can make it harder to ",
                      },
                      { blank: "pass" },
                      {
                        text: " stool.",
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
                      parts: ["1. What surprised you most in the video?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Why do many people ignore digestive health?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. What healthy habits can reduce constipation?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Should schools teach more about nutrition and digestion? Why?",
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
