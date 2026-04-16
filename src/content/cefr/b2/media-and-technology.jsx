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
  title: "B2 Upper-Intermediate | Discuss Media and Technology",
  description: "Analyzing how media and digital tools influence communication, work, and everyday life.",
};

export default function MediaAndTechnology() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Discuss media and technology"
        description="Technology makes communication faster, but it also changes how people pay attention, form opinions, and spend their time."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to discuss the
          effects of media and technology with greater precision, evaluate both
          benefits and risks, and support their views with relevant examples.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/man-watch-tv-evening.png"
                alt="A person interacting with media at home."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the statements and notice the balance between positive and negative effects."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["Digital tools have made information more accessible than ever before."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["At the same time, the speed of online content can make reflection more difficult."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["The main challenge is not technology itself, but how people and institutions choose to use it."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "This topic works best when speakers avoid simple answers and instead examine trade-offs.",
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
                    question: "1. What has technology made easier?",
                    options: [
                      { option: "Access to information.", isCorrect: true },
                      { option: "Living without electricity.", isCorrect: false },
                      { option: "Avoiding every disagreement.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What is one possible negative effect mentioned?",
                    options: [
                      { option: "People may reflect less carefully.", isCorrect: true },
                      { option: "Books no longer exist.", isCorrect: false },
                      { option: "No one communicates anymore.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What is described as the main challenge?",
                    options: [
                      { option: "How people and institutions use technology.", isCorrect: true },
                      { option: "How to destroy technology.", isCorrect: false },
                      { option: "How to stop all news permanently.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric discuss social media and attention."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Do you think social media is making people less patient?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["To some extent, yes. Many platforms encourage people to react immediately rather than think carefully."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I agree, although I also think they can help people discover useful ideas and communities."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Absolutely. The impact is not purely negative. The issue is more about habits, design, and digital literacy."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That is why I think education matters just as much as regulation."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Exactly. If people understand how platforms shape attention, they may use them more critically."],
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
                    "B2 discussions of media and technology often focus on ",
                    mark("impact"),
                    ", ",
                    mark("trade-offs"),
                    ", ",
                    mark("habits"),
                    ", and ",
                    mark("responsibility"),
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
                      "Discussões B2 sobre mídia e tecnologia frequentemente focam em impacto, trade-offs, hábitos e responsabilidade.",
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
                      parts: [bold("Benefit: "), mark("Digital tools make information easier to access.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Risk: "), mark("Online environments may encourage superficial reactions.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Balanced view: "), mark("The technology itself is not the only issue; user habits matter too.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Possible response: "), mark("Education and clear rules can help people use technology more responsibly.")],
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
                    "Useful B2 framing includes expressions like ",
                    mark("to some extent"),
                    ", ",
                    mark("at the same time"),
                    ", ",
                    mark("the issue is more about"),
                    ", and ",
                    mark("if..., they may..."),
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
                  column: "Benefits",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["accessibility"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["efficiency"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["connection"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Risks",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["distraction"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["misinformation"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["superficial engagement"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "B2 Discussion Frames",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["To some extent..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["At the same time..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The issue is more about..."] })] }],
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
                  "Complete the media and technology sentences with the best missing words.",
                blocks: [
                  {
                    block: [
                      { text: "To some " },
                      { blank: "extent" },
                      { text: ", social media changes how people react to news." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "At the same " },
                      { blank: "time" },
                      { text: ", it can help people stay informed." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The issue is more about user " },
                      { blank: "habits" },
                      { text: " than the tools themselves." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Digital literacy may help people think more " },
                      { blank: "critically" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "One major risk is the spread of " },
                      { blank: "misinformation" },
                      { text: "." },
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
                    question: "1. Which sentence sounds most balanced?",
                    options: [
                      { option: "Technology has clear benefits, although it can also create new problems.", isCorrect: true },
                      { option: "Technology is only good.", isCorrect: false },
                      { option: "Technology is always evil.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which issue is mentioned in the lesson?",
                    options: [
                      { option: "Superficial reactions to fast content.", isCorrect: true },
                      { option: "A shortage of roads in every city.", isCorrect: false },
                      { option: "The complete end of books.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which phrase introduces a nuanced opinion?",
                    options: [
                      { option: "To some extent...", isCorrect: true },
                      { option: "Absolutely never in any case...", isCorrect: false },
                      { option: "Kitchen and office...", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which sentence is most suitable for B2 discussion?",
                    options: [
                      { option: "The real challenge may be teaching people to use technology more critically.", isCorrect: true },
                      { option: "Phones bad.", isCorrect: false },
                      { option: "Everything online is false.", isCorrect: false },
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
                    "Discuss one media or technology topic with a partner. Give one benefit, one risk, and one suggestion for more responsible use.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["social media and attention"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["AI tools in education or work"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["online news and misinformation"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["how messaging apps affect relationships and communication"],
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
