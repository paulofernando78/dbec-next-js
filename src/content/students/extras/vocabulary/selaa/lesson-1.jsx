import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dialogue } from "@/components/molecules/Dialogue";
import { Radio } from "@/components/molecules/Exercises/Radio";

export default function SELAAlessonOne() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 1 • Bob’s Day at Work"
      />
      <div className="line-break">
        <Dialogue
          title="Lesson 1 • Bob’s Day at Work"
          audio="/audio/vocabulary/selaa/lesson-1.mp3"
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
      </div>
    </>
  );
}
