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
  title: "A2 Elementary | Describe Past Experiences",
  description: "Simple past language for talking about finished experiences.",
};

export default function DescribePastExperiences() {
  return (
    <>
      <Whiteboard
        title="A2 Elementary"
        subtitle="Describe past experiences"
        description="Last weekend I visited my cousin and we watched a movie."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about
          finished past experiences, use common regular and irregular past
          verbs, and ask follow-up questions about yesterday, last weekend, or
          last month.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-man-birthday-school.png"
                alt="Two people talking at a birthday celebration."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read and listen to the short past-time sentences."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      audio:
                        "/assets/audio/general/we-played-a-fun-game-after-school.mp3",
                      parts: ["We played a fun game after school."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["Laura visited her aunt on Saturday."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["They watched a movie in the evening."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "When we describe past experiences, we talk about actions that started and finished in the past.",
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
                    question: "1. When did they play a game?",
                    options: [
                      { option: "After school.", isCorrect: true },
                      { option: "Tomorrow morning.", isCorrect: false },
                      { option: "Every day.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What did Laura do on Saturday?",
                    options: [
                      { option: "She visited her aunt.", isCorrect: true },
                      { option: "She studies math.", isCorrect: false },
                      { option: "She is cooking now.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What did they do in the evening?",
                    options: [
                      { option: "They watched a movie.", isCorrect: true },
                      { option: "They are going to work.", isCorrect: false },
                      { option: "They don't like movies.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Eric and Laura are talking about last weekend."
              lines={[
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["How was your weekend?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It was great. I visited my cousin on Saturday."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Nice. What did you do there?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["We cooked dinner, talked for hours, and watched a movie."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Did you stay there all day?"],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["No, I went home at about ten."],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Sounds good. I stayed home and finished a book."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That sounds relaxing."],
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
                    "We use the ",
                    mark("simple past"),
                    " to talk about finished actions in the past. We often add time expressions such as ",
                    mark("yesterday"),
                    ", ",
                    mark("last weekend"),
                    ", or ",
                    mark("two days ago"),
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
                      "Usamos o simple past para falar de ações terminadas no passado. Muitas vezes usamos expressões como yesterday, last weekend ou two days ago.",
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
                      parts: [bold("Regular verbs: "), mark("visited"), ", ", mark("watched"), ", ", mark("finished")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Irregular verbs: "), mark("went"), ", ", mark("had"), ", ", mark("saw")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Questions: "), mark("What did you do?"), " / ", mark("Did you go out?")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Short answers: "), mark("Yes, I did."), " / ", mark("No, I didn't.")],
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
                    "Regular past verbs usually end in ",
                    mark("-ed"),
                    ", but some common verbs are irregular and change form completely, like ",
                    mark("go -> went"),
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
                  column: "Time Markers",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["yesterday"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["last weekend"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["two days ago"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Model Verbs",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["visited"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["watched"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["went"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Questions",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["What did you do?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Where did you go?"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["Did you have fun?"] })] }],
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
                  "Complete the sentences with the correct past-time words or verbs.",
                blocks: [
                  {
                    block: [
                      { text: "Last Saturday, I " },
                      { blank: "visited" },
                      { text: " my grandmother." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We " },
                      { blank: "watched" },
                      { text: " a movie after dinner." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My brother " },
                      { blank: "went" },
                      { text: " to the beach yesterday." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I " },
                      { blank: "had" },
                      { text: " a busy weekend." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "We stayed home two days " },
                      { blank: "ago" },
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
                    question: "1. What did you do last weekend?",
                    options: [
                      { option: "I visited my cousin.", isCorrect: true },
                      { option: "I am visiting now.", isCorrect: false },
                      { option: "I usually visit on Fridays.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Did you go out yesterday?",
                    options: [
                      { option: "Yes, I did.", isCorrect: true },
                      { option: "Yes, I do.", isCorrect: false },
                      { option: "Yes, I am.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Where did Laura go?",
                    options: [
                      { option: "She went to her cousin's house.", isCorrect: true },
                      { option: "She goes every day.", isCorrect: false },
                      { option: "She is at work now.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. How was your weekend?",
                    options: [
                      { option: "It was great.", isCorrect: true },
                      { option: "At ten o'clock.", isCorrect: false },
                      { option: "I'm going tomorrow.", isCorrect: false },
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
                    "Talk to a partner about one real past experience. Try to answer with complete sentences.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What did you do last weekend?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Who did you spend time with?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Where did you go?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Did you enjoy it? Why?"],
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
