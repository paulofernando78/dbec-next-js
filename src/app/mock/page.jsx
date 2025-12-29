import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Ribbon } from "@/components/atoms/Ribbon";
import { Card } from "@/components/atoms/Card";
import { Text } from "@/components/molecules/Text";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Comparison } from "../../components/molecules/Comparison/Comparison";
import { AudioPlayer } from "@/components/atoms/AudioPlayer/AudioPlayer";
import { Radio } from "@/components/molecules/Exercises/Radio";
import { FillInTheBlanks } from "@/components/molecules/Exercises/FillInTheBlanks";

const words = [
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "Example 1",
        phonetics: "/.../",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "Example 2",
        phonetics: "/.../",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "Example 1",
        phonetics: "/.../",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "Example 2",
        phonetics: "/.../",
        translation: "...",
      },
    ],
  },
];

const radioExercises = {
  instruction: "Choose the best response.",
  questions: [
    {
      question: "1. Question",
      options: [
        { option: "option 1", isCorrect: true },
        { option: "option 2", isCorrect: false },
        { option: "option 3", isCorrect: false },
      ],
    },
    {
      question: "2. Question",
      options: [
        { option: "option 1", isCorrect: true },
        { option: "option 2", isCorrect: false },
        { option: "option 3", isCorrect: false },
      ],
    },
  ],
};

const fillInTheBlanksExercises = [
  {
    instructions: "1. Fill in the blanks with the correct answer.",
    blocks: [
      {
        block: [
          { text: "He" },
          { blank: "is" },
          { text: "a teacher." }
        ],
      },
      {
        block: [
          { text: "He" },
          { blank: "teaches" },
          { text: "in the morning." }
        ],
      },
      {
        block: [
          { text: "He" },
          { blank: "walks" },
          { text: "to school." }
        ],
      },
    ],
  },
  {
    instructions: "2. Fill in the blanks with the correct answer.",
    blocks: [
      {
        block: [
          {
            text: "1. He",
            blank: "lives",
          },
          {
            text: "in the USA.",
          },
        ],
        lineBreak: true
      },
      {
        block: [
          {
            text: "2. They",
            blank: "work",
          },
          {
            text: "in an office.",
          },
        ],
      },
    ],
  },
];

export default function Mock() {
  return (
    <>
      <Whiteboard
        title="Title (Mock)"
        subtitle="Subtitle"
        description="Description"
      />
      <div className="line-break">
        <Text>
          <span className="red-5 bold italic underlined">Lorem</span> ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
        <Ribbon label="CARD" />
        <Card>Lorem ipsum dolor sit amet, consectetur...</Card>
        <Ribbon label="Text" />
        <AudioPlayer src="/audio/audiobooks/starter/a-new-zealand-adventure/auckland.mp3" />
        <Text
          imgSrc="/img/paragraph-1.avif"
          imgAlt="Text pic 1"
          imgPosition="left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Ribbon label="Dialogue" />
        <Dialogue
          title="Title"
          audioSrc="/audio/vocabulary/selaa/lesson-1.mp3"
          lines={[
            {
              text: [
                {
                  type: "italic",
                  text: "Bob works as a manager in a furniture store. Peter, his boss, is not happy about sales. Bob’s new advertising campaign hasn’t helped. Peter decides to fire him.",
                },
              ],
            },
            {
              speaker: "Peter:",
              text: [
                "Bob, I hate to break the news ",
                {
                  audio: "/audio/general/break-the-news.mp3",
                  text: "break the news",
                  type: "mark",
                },
                ", but our sales were down again last month.",
              ],
            },
            {
              speaker: "Bob:",
              text: "Down again, Peter?",
            },
            {
              speaker: "Peter:",
              text: "Yeah. These days, everybody’s shopping at our competition, Honest Abe’s Furniture Store.",
            },
            {
              speaker: "Bob:",
              text: "But everything in there costs an arm and a leg!",
            },
            {
              speaker: "Peter:",
              text: "That’s true. They do charge top dollar",
            },
            {
              speaker: "Bob:",
              text: "And their salespeople are very strange. They really give me the creeps",
            },
            {
              speaker: "Peter:",
              text: "Well, they must be doing something right over there. Meanwhile, we’re about to belly-up.",
            },
            {
              speaker: "Bob:",
              text: "I’m sorry to hear that. I thought my new advertising campaign would save the day real flop",
            },
            {
              speaker: "Peter:",
              text: "Let’s face it your advertising campaign was a",
            },
            {
              speaker: "Bob:",
              text: "Well then I’ll go back to the drawing board.",
            },
            {
              speaker: "Peter:",
              text: "It’s too late for that. You’re fired!",
            },
            {
              speaker: "Bob:",
              text: "What? You’re giving me the ax?",
            },
            {
              speaker: "Peter:",
              text: "Yes. I’ve already found a new manager. She’s as sharp as a tack.",
            },
            {
              speaker: "Bob:",
              text: "Can’t we even talk this over? After all, I’ve been working here for 10 years!",
            },
            {
              speaker: "Peter:",
              text: "There’s no point in arguing, Bob. I’ve already made up my mind.",
            },
            {
              speaker: "Bob:",
              text: "Oh well, at least I won’t have to put up with your nonsense anymore! Good-bye to you and good-bye to this dead-end job",
            },
            {
              speaker: "Peter:",
              text: "Please leave before I lose my temper",
            },
          ]}
        />
        <Ribbon label="Word Sound" />
        <Comparison groups={words} />
        <Ribbon label="Exercises" />
        <Radio exercises={radioExercises} />
        <FillInTheBlanks exercises={fillInTheBlanksExercises} />
      </div>
    </>
  );
}
