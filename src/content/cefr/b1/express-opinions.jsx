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
  title: "B1 Intermediate | Express Opinions",
  description: "Giving opinions, reasons, and polite disagreement.",
};

export default function ExpressOpinions() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Express opinions"
        description="In my opinion, online classes are useful, but face-to-face classes are usually more interactive."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to express opinions
          clearly, give simple reasons, and agree or disagree politely in a
          discussion.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/two-people-talking.png"
                alt="Two people exchanging ideas."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the statements and notice how the speaker gives an opinion."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["In my opinion, public transport should be cheaper."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["I think online learning is useful because it is flexible."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Personally, I prefer small cities to very large ones."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "At B1 level, it is important not only to give an opinion, but also to explain why you think that way.",
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
                    question: "1. What does the speaker think about public transport?",
                    options: [
                      { option: "It should be cheaper.", isCorrect: true },
                      { option: "It should be slower.", isCorrect: false },
                      { option: "It should disappear.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Why does the speaker think online learning is useful?",
                    options: [
                      { option: "Because it is flexible.", isCorrect: true },
                      { option: "Because it is expensive.", isCorrect: false },
                      { option: "Because it is noisy.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What does the speaker personally prefer?",
                    options: [
                      { option: "Small cities.", isCorrect: true },
                      { option: "Long exams.", isCorrect: false },
                      { option: "Crowded buses.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric discuss whether students should use phones in class."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What do you think about students using phones in class?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Personally, I think it depends on the situation."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["Really? In my opinion, phones are usually too distracting."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I see your point, but they can also be useful for research or quick translations."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That is true. Maybe they should be allowed only for specific tasks."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Exactly. I do not think they should be used all the time, but I would not ban them completely."],
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
                    "Useful opinion language includes ",
                    mark("I think"),
                    ", ",
                    mark("In my opinion"),
                    ", ",
                    mark("Personally"),
                    ", and polite responses like ",
                    mark("I see your point"),
                    " or ",
                    mark("I am not sure I agree"),
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
                      "Expressões úteis para opinião incluem I think, In my opinion, Personally e respostas educadas como I see your point ou I am not sure I agree.",
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
                      parts: [bold("Opinion: "), mark("I think this rule is helpful.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reason: "), mark("...because it saves time.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Agreement: "), mark("I agree."), " / ", mark("That is true.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Polite disagreement: "), mark("I see your point, but...")],
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
                    "Strong B1 answers usually follow a simple pattern: ",
                    mark("opinion + reason + example"),
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
                  column: "Starters",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I think..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["In my opinion..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Personally..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Reason Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["because..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["since..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["for example..."] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Discussion Moves",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I agree."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I see your point, but..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I am not sure I agree."] })] }],
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
                  "Complete the opinions with suitable opinion and discussion phrases.",
                blocks: [
                  {
                    block: [
                      { text: "In my " },
                      { blank: "opinion" },
                      { text: ", schools should start later." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I think this idea is useful " },
                      { blank: "because" },
                      { text: " it saves time." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I see your " },
                      { blank: "point" },
                      { text: ", but I still disagree." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Personally, I " },
                      { blank: "prefer" },
                      { text: " working in small teams." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "For " },
                      { blank: "example" },
                      { text: ", online tools can help students review lessons." },
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
                    question: "1. Which answer gives an opinion and a reason?",
                    options: [
                      { option: "I think public parks are important because they give people space to relax.", isCorrect: true },
                      { option: "Parks are green.", isCorrect: false },
                      { option: "At six o'clock.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which phrase shows polite disagreement?",
                    options: [
                      { option: "I see your point, but I have a different view.", isCorrect: true },
                      { option: "You are wrong.", isCorrect: false },
                      { option: "I do not listen.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which phrase introduces a personal view?",
                    options: [
                      { option: "Personally, I prefer studying in the morning.", isCorrect: true },
                      { option: "Yesterday I went home.", isCorrect: false },
                      { option: "It costs ten dollars.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which phrase shows agreement?",
                    options: [
                      { option: "That is true.", isCorrect: true },
                      { option: "How much is it?", isCorrect: false },
                      { option: "Where did you go?", isCorrect: false },
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
                    "Choose one topic and discuss it with a partner. Give your opinion, explain why, and respond to your partner politely.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["students using phones in class"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["working from home versus working in an office"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["living in a big city versus a small town"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["whether school uniforms are a good idea"],
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
