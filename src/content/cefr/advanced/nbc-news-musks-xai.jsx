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
  title: "Advanced | Musk's xAI in Memphis",
  description:
    "Advanced listening and discussion practice based on a YouTube news report about xAI in Memphis.",
};

export default function MusksXaiMemphis() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="Musk’s xAI supercomputer concerns some Memphis residents"
        description="Watch a short news report, identify the main issue, and discuss local concerns."
      />

      <div className="line-break">
        <Card>
          By the end of this lesson, students will be able to summarize the
          topic of a short news video, use key words from the report, and
          discuss the tension between innovation and local impact.
        </Card>

        <PageSections>
          <Section id="video" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "Watch the report and listen for the main issue, the people affected, and the reason for concern.",
                  ],
                }),
              ]}
            />
            <VideoPlayer
              videoId="C8rU4dv2w8Q"
              title="Musk’s xAI supercomputer concerns some Memphis residents"
            />

            <LineBreak />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: [bold("Topic: "), "xAI's supercomputer project"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Place: "), "Memphis"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("People: "), "local residents"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Issue: "), "community concerns"],
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
                      { text: "The report is about xAI's " },
                      { blank: "supercomputer" },
                      { text: " project." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Some " },
                      { blank: "residents" },
                      { text: " in Memphis are concerned." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The video focuses on local " },
                      { blank: "concerns" },
                      { text: " and public reaction." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The story takes place in " },
                      { blank: "Memphis" },
                      { text: "." },
                    ],
                    lineBreak: true,
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
                    question: "1. What is the main topic of the report?",
                    options: [
                      {
                        option: "An xAI supercomputer project and local concern.",
                        isCorrect: true,
                      },
                      {
                        option: "A school competition in Memphis.",
                        isCorrect: false,
                      },
                      {
                        option: "A travel guide to Tennessee.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "2. Who is mentioned as being concerned?",
                    options: [
                      { option: "Some Memphis residents.", isCorrect: true },
                      { option: "Only foreign tourists.", isCorrect: false },
                      { option: "A football team.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which summary best matches the title?",
                    options: [
                      {
                        option:
                          "A powerful technology project is creating concern in the local community.",
                        isCorrect: true,
                      },
                      {
                        option:
                          "A new music festival is attracting more residents.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "A science class is learning about computers for the first time.",
                        isCorrect: false,
                      },
                    ],
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
                    "Discuss the report with a partner. Use the prompts below to summarize the issue and give your opinion.",
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
                      parts: ["1. What is happening in Memphis?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["2. Why might some residents be concerned?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "3. Do you think large technology projects should move forward when local people are worried?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "4. Give your opinion: ",
                        mark("The project could be beneficial, but..."),
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
