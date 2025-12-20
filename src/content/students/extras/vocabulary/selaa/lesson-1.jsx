import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Card } from "@/components/atoms/Card";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Text } from "@/components/molecules/Text";


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
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-1.mp3"/>
        <Text bold>Lesson 1 • Bob’s Day at Work</Text>
        <Card>
          Bob works as a manager in a furniture store. Peter, his boss, is not
          happy about sales. Bob’s new advertising campaign hasn’t helped. Peter
          decides to fire him.
        </Card>
        <Text>
          <strong>Peter:</strong> Bob, I hate to break the news, but our sales were down again last month.
        </Text>
        <Text>
          <strong>Bob:</strong> Down again, Peter?
        </Text>
        <Text>
          <strong>Peter:</strong> Yeah. These days, everybody’s shopping at our competition, Honest Abe’s Furniture Store.
        </Text>
        <Text>
          <strong>Bob:</strong> But everything in there <mark>costs an arm and a leg</mark>!
        </Text>
        <Text>
          <strong>Peter:</strong> That’s true. They do charge <mark>top dollar</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> And their salespeople are very strange. They really <mark>give me the creeps</mark>!
        </Text>
        <Text>
          <strong>Peter:</strong> Well, they must be doing something right over there. Meanwhile, we’re <mark>about to</mark> <mark>belly-up</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> I’m sorry to hear that. I thought my new advertising campaign would <mark>save the day</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> <mark>Let’s face it</mark>: your advertising campaign was a <mark>real flop</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Well then I’ll <mark>go back to the drawing board</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> It’s too late for that. You’re fired!
        </Text>
        <Text>
          <strong>Bob:</strong> What? You’re <mark>giving me the ax</mark>?
        </Text>
        <Text>
          <strong>Peter:</strong> Yes. I’ve already found a new manager. She’s <mark>as sharp as a tack</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Can’t we even <mark>talk this over</mark>? <mark>After all</mark> , I’ve been working here for 10 years!
        </Text>
        <Text>
          <strong>Peter:</strong> There’s <mark>no point in</mark> arguing, Bob. I’ve already <mark>made up my mind</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Oh well, <mark>at least</mark> I won’t have to <mark>put up with</mark> your nonsense anymore! Good-bye to you and good-bye to this <mark>dead-end job</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> Please leave before I <mark>lose my temper</mark>!
        </Text>
      </div>
    </>
  );
}
