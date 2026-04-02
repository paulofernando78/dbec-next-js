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
  title: "B2 Upper-Intermediate | Debate and Argue a Point",
  description: "Presenting arguments, counterarguments, and conclusions clearly.",
};

export default function DebateAndArgue() {
  return (
    <>
      <Whiteboard
        title="B2 Upper-Intermediate"
        subtitle="Debate and argue a point"
        description="Although remote work offers flexibility, I would argue that in-person collaboration still matters in some contexts."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to present an
          argument, support it with reasons and examples, respond to opposing
          views, and reach a balanced conclusion.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking.png"
                alt="Two people engaged in discussion."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the statements and notice how the speaker builds an argument."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["I can see the advantages of remote work; however, I do not think it suits every team."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["One reason is that some tasks require immediate collaboration and quick decisions."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["That said, a hybrid model may be a more realistic solution than a complete return to the office."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "Strong B2 arguments are usually balanced. They recognize complexity instead of presenting only one side.",
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
                    question: "1. What does the speaker think about remote work?",
                    options: [
                      { option: "It has advantages, but it does not suit every team.", isCorrect: true },
                      { option: "It should disappear completely.", isCorrect: false },
                      { option: "It is exactly the same as office work in every case.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What reason does the speaker give?",
                    options: [
                      { option: "Some tasks require immediate collaboration.", isCorrect: true },
                      { option: "Offices are always quieter than homes.", isCorrect: false },
                      { option: "Remote workers never communicate.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What final position does the speaker suggest?",
                    options: [
                      { option: "A hybrid model may be more realistic.", isCorrect: true },
                      { option: "Everyone should work alone forever.", isCorrect: false },
                      { option: "No one should use technology.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric are debating whether universities should make attendance mandatory."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Do you think university attendance should always be mandatory?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Personally, I would argue that it depends on the course and the learning objectives."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["I understand that view, but I still think regular attendance improves discipline and engagement."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["That may be true in some cases. On the other hand, adult learners often need more flexibility because of work or family responsibilities."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Fair point. Even so, if attendance were completely optional, some students might fall behind very quickly."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Perhaps a better approach would be to require attendance in practical classes but allow more freedom in lecture-based courses."],
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
                    "At B2 level, argument language often includes ",
                    mark("position"),
                    ", ",
                    mark("reason"),
                    ", ",
                    mark("counterargument"),
                    ", and ",
                    mark("qualified conclusion"),
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
                      "No nível B2, a linguagem de argumentação geralmente inclui posição, razão, contra-argumento e conclusão qualificada.",
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
                      parts: [bold("Position: "), mark("I would argue that...")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reason: "), mark("One reason is that...")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Counterargument: "), mark("On the other hand..."), " / ", mark("That may be true, but...")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Conclusion: "), mark("A more balanced approach would be...")],
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
                    "Persuasive answers often sound stronger when they avoid extreme claims and use cautious framing such as ",
                    mark("in some cases"),
                    ", ",
                    mark("to a certain extent"),
                    ", or ",
                    mark("a better approach would be"),
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
                  column: "Position Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I would argue that..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["From my perspective..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I can see both sides, but..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Counterargument",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["That may be true; however..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["On the other hand..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Even so..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Balanced Conclusion",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["A better approach would be..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["A more realistic solution might be..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["The key point is that..."] })] }],
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
                  "Complete the argument phrases with the best missing word or expression.",
                blocks: [
                  {
                    block: [
                      { text: "I would " },
                      { blank: "argue" },
                      { text: " that flexibility matters in higher education." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "One " },
                      { blank: "reason" },
                      { text: " is that students have different responsibilities outside class." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "On the other " },
                      { blank: "hand" },
                      { text: ", too much freedom may reduce participation." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "A better " },
                      { blank: "approach" },
                      { text: " would be a partial attendance rule." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "The key " },
                      { blank: "point" },
                      { text: " is that one rule will not suit every situation." },
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
                      { option: "I can see the advantages, but I still think some limits are necessary.", isCorrect: true },
                      { option: "This is perfect in every situation.", isCorrect: false },
                      { option: "Everyone who disagrees is wrong.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase introduces a counterargument?",
                    options: [
                      { option: "On the other hand...", isCorrect: true },
                      { option: "For breakfast...", isCorrect: false },
                      { option: "At nine o'clock...", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence gives a qualified conclusion?",
                    options: [
                      { option: "A more practical solution might be to combine both systems.", isCorrect: true },
                      { option: "This is the only possible answer.", isCorrect: false },
                      { option: "I do not know the difference.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which answer sounds most suitable for a debate?",
                    options: [
                      { option: "I understand your point, but I am not convinced it would work in practice.", isCorrect: true },
                      { option: "That idea is stupid.", isCorrect: false },
                      { option: "Where is the station?", isCorrect: false },
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
                    "Debate one of the following topics with a partner. Give a position, one supporting argument, one counterargument, and a final conclusion.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["university attendance requirements"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["remote work versus office work"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["the role of smartphones in education"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["whether cities should limit private car use"],
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
