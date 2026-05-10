import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionaryArea } from "@/components/molecules/DictionaryArea";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { Guess } from "@/components/molecules/Guess";
import { FlipCard } from "@/components/molecules/FlipCard/";
import { Line } from "@/components/molecules/Line";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";
import { GridLayout } from "@/components/molecules/GridLayout";
import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";
import { LineBreak } from "@/components/atoms/LineBreak";
import { content, bold, dictionary } from "@/helpers/content";

export const metadata = {
  title: "Advanced | When Will the Next Ice Age Happen?",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about ice ages, climate cycles, and Earth's orbit.",
};

export default function IceAgeLesson() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="When will the next ice age happen?"
        description="Watch the video, understand ice age cycles, and discuss climate change and Earth's history."
      />

      <div className="line-break">
        <Card>
          <Paragraph
            value={[
              ...content({
                parts: [
                  "By the end of this lesson, you will understand what causes ice ages and discuss how climate patterns change over time.",
                ],
              }),
            ]}
          />
        </Card>

        <DictionaryArea />

        <PageSections>
          <Section id="introduction" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [bold("Discuss these questions.")],
                }),
              ]}
            />

            <LineBreak />

            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What do you know about ice ages?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Why does Earth's climate naturally change over time?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "How might human activity affect future climate cycles?",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="vocabulary-focus" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [bold("Flip the cards and describe what you see.")],
                }),
              ]}
            />

            <LineBreak />

            <GridLayout>
              <FlipCard backImg={dictionary("glacier.avif")} />
              <FlipCard backImg={dictionary("ice-age.avif")} />
              <FlipCard backImg={dictionary("orbit.avif")} />
              <FlipCard backImg={dictionary("climate-change.avif")} />
              <FlipCard backImg={dictionary("earth-axis.avif")} />
              <FlipCard backImg={dictionary("carbon-dioxide.avif")} />
              <FlipCard backImg={dictionary("fossil.avif")} />
              <FlipCard backImg={dictionary("temperature.avif")} />
            </GridLayout>
          </Section>

          <Section id="gist" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    bold(
                      "What is the video mainly about? Watch it and answer the question below.",
                    ),
                  ],
                }),
              ]}
            />

            <LineBreak />

            <VideoPlayer
              videoId="ztninkgZ0ws"
              title="When will the next ice age happen?"
            />

            <Radio
              score={false}
              exercise={{
                questions: [
                  {
                    options: [
                      {
                        option:
                          "How dinosaurs disappeared from the planet.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "Why weather forecasts are always inaccurate.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "How Earth's orbit and climate cycles influence ice ages.",
                        isCorrect: true,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="details" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    bold("Watch again and listen for specific information."),
                  ],
                }),
              ]}
            />

            <LineBreak />

            <Radio
              exercise={{
                instruction: "Choose the best response.",
                questions: [
                  {
                    question:
                      "1. What natural factor strongly affects ice age cycles?",
                    options: [
                      {
                        option: "Volcano colors",
                        isCorrect: false,
                      },
                      {
                        option: "Earth's orbit and tilt",
                        isCorrect: true,
                      },
                      {
                        option: "Ocean animals",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "2. What gas mentioned in the video influences global temperature?",
                    options: [
                      {
                        option: "Carbon dioxide",
                        isCorrect: true,
                      },
                      {
                        option: "Helium",
                        isCorrect: false,
                      },
                      {
                        option: "Hydrogen",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "3. Why might the next ice age be delayed?",
                    options: [
                      {
                        option: "Because mountains are disappearing",
                        isCorrect: false,
                      },
                      {
                        option:
                          "Because human activity is warming the planet",
                        isCorrect: true,
                      },
                      {
                        option: "Because the Moon is moving away",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="practice" heading={3}>
            <Guess
              words={[
                { word: "glacier", img: 0 },
                { word: "orbit", img: 0 },
                { word: "climate", img: 0 },
                { word: "temperature", img: 0 },
                { word: "carbon dioxide", img: 1 },
                { word: "axis", img: 0 },
                { word: "ice age", img: 0 },
                { word: "fossil", img: 0 },
              ]}
            />

            <LineBreak />

            <FillInTheBlanks
              showWordBank={false}
              numbered={true}
              exercise={{
                instruction: "Fill in the blank with words from Guess!.",
                blocks: [
                  {
                    block: [
                      {
                        text: "A massive moving sheet of ice is called a ",
                      },
                      { blank: "glacier" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Earth travels around the Sun in an ",
                      },
                      { blank: "orbit" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Scientists study Earth's ",
                      },
                      { blank: "climate" },
                      {
                        text: " to understand long-term weather patterns.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Global ",
                      },
                      { blank: "temperature" },
                      {
                        text: " has increased in recent decades.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Burning fossil fuels releases ",
                      },
                      { blank: "carbon dioxide" },
                      {
                        text: " into the atmosphere.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Earth spins on its ",
                      },
                      { blank: "axis" },
                      {
                        text: ".",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Large parts of Earth were covered in ice during the last ",
                      },
                      { blank: "ice age" },
                      {
                        text: ".",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Scientists study ancient ",
                      },
                      { blank: "fossil" },
                      {
                        text: " records to understand Earth's past.",
                      },
                    ],
                    lineBreak: true,
                  },
                ],
              }}
            />
          </Section>

          <Section
            id="follow-up-discussion"
            label="Follow-up Discussion"
            heading={3}
          >
            <Line
              value={[
                ...content({
                  parts: [bold("Discuss the questions below.")],
                }),
              ]}
            />

            <LineBreak />

            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        "What surprised you most about the video?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Why is it difficult to predict Earth's climate far into the future?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "How does human activity affect the environment today?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Should governments do more to fight climate change? Why?",
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