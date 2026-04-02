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
  title: "B2 Upper-Intermediate | Discuss Current Events",
  description: "Summarizing recent developments and reacting with nuance.",
};

export default function CurrentEvents() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Discuss current events"
        description="From what I have read, the issue is more complex than the headlines suggest."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to summarize current
          events, distinguish facts from reactions, and discuss recent topics in
          a more measured and nuanced way.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-office.png"
                alt="A woman reading and discussing information."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the short reactions and notice the difference between summary and opinion."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["According to the report, public transport use has increased over the past year."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Some people see this as a positive environmental trend, while others worry about overcrowding."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["At this stage, it is still too early to know the long-term impact."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When talking about current events, strong B2 speakers separate reported information from personal interpretation.",
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
                    question: "1. What does the report say?",
                    options: [
                      { option: "Public transport use has increased.", isCorrect: true },
                      { option: "Everyone now works from home.", isCorrect: false },
                      { option: "Crowding has completely disappeared.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What is one concern people have?",
                    options: [
                      { option: "Overcrowding.", isCorrect: true },
                      { option: "Too many private jets.", isCorrect: false },
                      { option: "A lack of weather reports.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does the speaker say about the long-term effect?",
                    options: [
                      { option: "It is too early to know.", isCorrect: true },
                      { option: "It is completely clear already.", isCorrect: false },
                      { option: "It does not matter.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are discussing a recent news story about artificial intelligence in schools."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Have you seen the recent debate about AI tools in schools?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Yes. From what I have read, schools are still trying to decide how these tools should be used."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Some teachers seem to be worried that students will rely on them too much."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That is a valid concern. At the same time, banning them completely may not be realistic."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Exactly. It might be more useful to teach students how to use them responsibly."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I agree. The real challenge seems to be creating clear rules rather than pretending the technology does not exist."],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="meaning" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "To discuss current events well, it helps to combine ",
                    mark("reported information"),
                    ", ",
                    mark("careful interpretation"),
                    ", and ",
                    mark("tentative language"),
                    " such as ",
                    mark("seems"),
                    ", ",
                    mark("may"),
                    ", or ",
                    mark("it is still unclear whether"),
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
                      "Para discutir atualidades bem, ajuda combinar informação relatada, interpretação cuidadosa e linguagem cautelosa como seems, may ou it is still unclear whether.",
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
                      parts: [bold("Reporting: "), mark("According to the report..."), " / ", mark("From what I have read...")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reaction: "), mark("Some people see this as...")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Caution: "), mark("It may be too early to say."), " / ", mark("The situation still seems unclear.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Evaluation: "), mark("The real challenge appears to be...")],
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
                    "Current-events discussions often sound more mature when they avoid certainty and use careful wording like ",
                    mark("appears to"),
                    ", ",
                    mark("seems to"),
                    ", ",
                    mark("is likely to"),
                    ", or ",
                    mark("it remains to be seen whether"),
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
                  column: "Reporting Language",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["According to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["From what I have read..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The report suggests that..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Careful Evaluation",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["It seems that..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["It may be too early to say..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["It remains to be seen whether..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Discussion Moves",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["What is your take on that?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["That is a valid concern."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The bigger issue might be..."] })] }],
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
                  "Complete the current-events phrases with the best missing words.",
                blocks: [
                  {
                    block: [
                      { text: "According " },
                      { blank: "to" },
                      { text: " the article, prices have risen this year." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "From what I have " },
                      { blank: "read" },
                      { text: ", the policy is still under review." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "It may be too early to " },
                      { blank: "say" },
                      { text: " what the final effect will be." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "That is a valid " },
                      { blank: "concern" },
                      { text: ", but the issue is more complex." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The bigger " },
                      { blank: "issue" },
                      { text: " might be how the change is managed." },
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
                    question: "1. Which sentence reports information rather than opinion?",
                    options: [
                      { option: "According to the report, attendance has increased by 12 percent.", isCorrect: true },
                      { option: "That policy is terrible.", isCorrect: false },
                      { option: "I completely hate the idea.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase sounds most cautious?",
                    options: [
                      { option: "It remains to be seen whether the measure will succeed.", isCorrect: true },
                      { option: "This will definitely fail.", isCorrect: false },
                      { option: "Everyone knows the answer.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence shows a balanced reaction?",
                    options: [
                      { option: "That is a valid concern, although there may also be long-term benefits.", isCorrect: true },
                      { option: "Only one side matters.", isCorrect: false },
                      { option: "The news is lunch.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which question invites discussion?",
                    options: [
                      { option: "What is your take on that issue?", isCorrect: true },
                      { option: "How old is the newspaper?", isCorrect: false },
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
                    "Choose a recent topic and discuss it with a partner. Summarize the issue first, then react to it carefully and explain what remains uncertain.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["technology in education"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["changes in transport or city planning"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a social or environmental issue in your country"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a recent development affecting work or study"],
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
