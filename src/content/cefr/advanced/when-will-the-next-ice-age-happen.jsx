import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionaryArea } from "@/components/molecules/DictionaryArea";
import { PageSections } from "@/components/molecules/PageSections";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { Guess } from "@/components/molecules/Exercises/Guess";
import { FlipCards } from "@/components/molecules/FlipCards/";
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
                        "How do Earth's orbit and tilt affect climate over long periods of time?",
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

            <FlipCards
  cards={[
    {
      backImg: dictionary("glacier.avif"),
    },
    {
      backImg: dictionary("ice-age.avif"),
    },
    {
      backImg: dictionary("orbit.avif"),
    },
    {
      backImg: dictionary("climate-change.avif"),
    },
    {
      backImg: dictionary("earth-axis.avif"),
    },
    {
      backImg: dictionary("carbon-dioxide.avif"),
    },
    {
      backImg: dictionary("fossil-ammonite.avif"),
    },
    {
      backImg: dictionary("temperature.avif"),
    },
  ]}
/>
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
              videoId="I4EZCy14te0"
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
                          "Why humans survived the Ice Age better than dinosaurs.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "How Earth's orbit, tilt, and carbon dioxide levels affect ice ages.",
                        isCorrect: true,
                      },
                      {
                        option:
                          "Why the Moon controls all climate changes on Earth.",
                        isCorrect: false,
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
                      "1. What astronomical factor strongly influences ice age cycles?",
                    options: [
                      {
                        option: "Earth's orbit and tilt",
                        isCorrect: true,
                      },
                      {
                        option: "The color of the oceans",
                        isCorrect: false,
                      },
                      {
                        option: "Volcanic ash clouds",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "2. What greenhouse gas mentioned in the video affects global temperature?",
                    options: [
                      {
                        option: "Carbon dioxide",
                        isCorrect: true,
                      },
                      {
                        option: "Oxygen",
                        isCorrect: false,
                      },
                      {
                        option: "Nitrogen",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question:
                      "3. Why could the next ice age happen later than expected?",
                    options: [
                      {
                        option: "Because Earth's orbit stopped changing",
                        isCorrect: false,
                      },
                      {
                        option:
                          "Because human-caused warming increased greenhouse gases",
                        isCorrect: true,
                      },
                      {
                        option: "Because Antarctica completely melted already",
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
                { word: "carbon dioxide", img: 0 },
                { word: "earth axis", img: 0 },
                { word: "fossil", img: 0 },
                { word: "ice age", img: 0 },
                { word: "temperature", img: 0 },
                { word: "glacier", img: 0 },
                { word: "climate change", img: 0 },
                { word: "orbit", img: 0 },
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
                        "How can scientists learn about past climates from glaciers and fossils?",
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