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
  title: "B1 Intermediate | Discuss Work and Study",
  description: "Talking about responsibilities, goals, and challenges in work and study.",
};

export default function DiscussWorkAndStudy() {
  return (
    <>
      <Whiteboard
        title="B1 Intermediate"
        subtitle="Discuss work and study"
        description="I am responsible for client emails at work, and I am also trying to improve my academic writing."
      />

      <div className="line-break">
        <Card>
          By the end of this class, students will be able to talk about work
          and study responsibilities, describe current challenges, and explain
          short-term goals more confidently.
        </Card>

        <PageSections>
          <Section id="introduction" heading={3}>
            <CardLayout mediaPosition="left">
              <Image
                src="/assets/img/general/woman-work-hand-over-report.png"
                alt="A woman presenting work materials."
                width={320}
                height={220}
              />
              <div>
                <Line
                  value={[
                    ...content({
                      parts: [
                        "",
                        bold("Read the statements and notice how they describe responsibilities and goals."),
                      ],
                    }),
                  ]}
                />
                <LineBreak />
                <Line
                  value={[
                    ...content({
                      parts: ["At work, I am responsible for writing weekly reports and replying to clients."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["At university, I am focusing on improving my research and presentation skills."],
                    }),
                  ]}
                />
                <Line
                  value={[
                    ...content({
                      parts: ["My biggest challenge right now is balancing deadlines with personal time."],
                    }),
                  ]}
                />
                <Paragraph
                  value={[
                    ...content({
                      parts: [
                        "This topic often combines present responsibilities with future goals and personal reflection.",
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
                    question: "1. What is one work responsibility?",
                    options: [
                      { option: "Writing weekly reports.", isCorrect: true },
                      { option: "Buying train tickets every hour.", isCorrect: false },
                      { option: "Building a hospital alone.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. What skill is the student improving?",
                    options: [
                      { option: "Research and presentation skills.", isCorrect: true },
                      { option: "Cooking breakfast faster than sound.", isCorrect: false },
                      { option: "Changing the weather.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. What is the biggest challenge?",
                    options: [
                      { option: "Balancing deadlines with personal time.", isCorrect: true },
                      { option: "Learning to fly.", isCorrect: false },
                      { option: "Choosing a cheap sweater.", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="presentation" heading={3}>
            <Dialogue
              description="Laura and Eric talk about their jobs and courses."
              lines={[
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["How are things going at work these days?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Quite well, actually, but I have more responsibility now than I did last year."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["What kind of responsibility?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["I manage client communication and help train new team members."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["That sounds demanding. Are you still studying in the evenings too?"],
                    }),
                  ],
                },
                {
                  speaker: "Eric:",
                  text: [
                    ...content({
                      parts: ["Yes, I am. I am taking an online course because I want to improve my project management skills."],
                    }),
                  ],
                },
                {
                  speaker: "Laura:",
                  text: [
                    ...content({
                      parts: ["It must be hard to balance everything, but it sounds like a good investment."],
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
                    "When we discuss work and study, we often talk about ",
                    mark("responsibilities"),
                    ", ",
                    mark("skills"),
                    ", ",
                    mark("challenges"),
                    ", and ",
                    mark("goals"),
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
                      "Quando discutimos trabalho e estudo, geralmente falamos sobre responsabilidades, habilidades, desafios e objetivos.",
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
                      parts: [bold("Responsibility: "), mark("I manage client communication.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Challenge: "), mark("It is difficult to balance work and study.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Goal: "), mark("I want to improve my presentation skills.")],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [bold("Reason: "), mark("I am taking a course because I want to grow professionally.")],
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
                    "A strong B1 answer usually combines ",
                    mark("what you do"),
                    ", ",
                    mark("what is difficult"),
                    ", and ",
                    mark("what you are trying to improve"),
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
                  column: "Useful Verbs",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["manage"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["focus on"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["improve"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--red-4)",
                  textColor: "white",
                  column: "Work and Study Nouns",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["responsibility"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["deadline"] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["skill"] })] }],
                    },
                  ],
                },
                {
                  bgColor: "var(--yellow-4)",
                  textColor: "white",
                  column: "Goal Phrases",
                  blocks: [
                    {
                      block: [{ text: [...content({ parts: ["I want to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["I am trying to..."] })] }],
                      lineBreak: true,
                    },
                    {
                      block: [{ text: [...content({ parts: ["My goal is to..."] })] }],
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
                  "Complete the work and study sentences with the correct words.",
                blocks: [
                  {
                    block: [
                      { text: "I am responsible for writing weekly " },
                      { blank: "reports" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My biggest challenge is balancing " },
                      { blank: "deadlines" },
                      { text: " and personal time." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "I am taking a course because I want to improve my presentation " },
                      { blank: "skills" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "At work, I help " },
                      { blank: "train" },
                      { text: " new team members." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "My short-term " },
                      { blank: "goal" },
                      { text: " is to become more organized." },
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
                    question: "1. Which sentence describes a responsibility?",
                    options: [
                      { option: "I am responsible for replying to clients and organizing meetings.", isCorrect: true },
                      { option: "I like music.", isCorrect: false },
                      { option: "My city is small.", isCorrect: false },
                    ],
                  },
                  {
                    question: "2. Which sentence describes a challenge?",
                    options: [
                      { option: "It is hard to balance a full-time job with evening classes.", isCorrect: true },
                      { option: "The class starts at eight.", isCorrect: false },
                      { option: "I bought a book yesterday.", isCorrect: false },
                    ],
                  },
                  {
                    question: "3. Which sentence shows a goal?",
                    options: [
                      { option: "I want to improve my academic writing this semester.", isCorrect: true },
                      { option: "I wrote an email this morning.", isCorrect: false },
                      { option: "My office has four chairs.", isCorrect: false },
                    ],
                  },
                  {
                    question: "4. Which answer sounds more developed?",
                    options: [
                      { option: "I manage client emails at work, and I am also taking a course to improve my communication skills.", isCorrect: true },
                      { option: "I work.", isCorrect: false },
                      { option: "Emails.", isCorrect: false },
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
                    "Talk about your work or study situation with a partner. Mention your responsibilities, one challenge, and one goal for the near future.",
                  ],
                }),
              ]}
            />

            <List
              items={[
                {
                  value: [
                    ...content({
                      parts: ["your main tasks or subjects"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["skills you want to improve"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["a challenge you are dealing with now"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["one realistic goal for the next few months"],
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
