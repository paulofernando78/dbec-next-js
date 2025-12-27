import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Italic } from "@/components/atoms/Italic";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
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
        <Text><Bold>Lesson 1 • Bob’s Day at Work</Bold></Text>
        <Italic>
          Bob works as a manager in a furniture store. Peter, his boss, is not
          happy about sales. Bob’s new advertising campaign hasn’t helped. Peter
          decides to fire him.
        </Italic>
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
          <strong>Bob:</strong> But everything in there <Audio src="/audio/dictionary/costs-an-arm-and-a-leg.mp3"/><mark>costs an arm and a leg</mark>!
        </Text>
        <Text>
          <strong>Peter:</strong> That’s true. They do charge <Audio src="/audio/dictionary/top-dollar.mp3"/><mark>top dollar</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> And their salespeople are very strange. They really <Audio src="/audio/dictionary/gives-me-the-creeps.mp3"/><mark>give me the creeps</mark>!
        </Text>
        <Text>
          <strong>Peter:</strong> Well, they must be doing something right over there. Meanwhile, we’re <Audio src="/audio/dictionary/about-to.mp3"/><mark>about to</mark> <Audio src="/audio/dictionary/belly-up.mp3"/><mark>belly-up</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> I’m sorry to hear that. I thought my new advertising campaign would <Audio src="/audio/dictionary/save-the-day.mp3"/><mark>save the day</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> <Audio src="/audio/dictionary/lets-face-it.mp3"/><mark>Let’s face it</mark>: your advertising campaign was a <Audio src="/audio/dictionary/real-flop.mp3"/><mark>real flop</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Well then I’ll <Audio src="/audio/dictionary/go-back-to-the-drawing-board.mp3"/><mark>go back to the drawing board</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> It’s too late for that. You’re fired!
        </Text>
        <Text>
          <strong>Bob:</strong> What? You’re <Audio src="/audio/dictionary/giving-me-the-ax.mp3"/><mark>giving me the ax</mark>?
        </Text>
        <Text>
          <strong>Peter:</strong> Yes. I’ve already found a new manager. She’s <Audio src="/audio/dictionary/as-sharp-as-a-tack.mp3"/><mark>as sharp as a tack</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Can’t we even <Audio src="/audio/dictionary/talk-this-over.mp3"/><mark>talk this over</mark>? <Audio src="/audio/dictionary/after-all.mp3"/><mark>After all</mark> , I’ve been working here for 10 years!
        </Text>
        <Text>
          <strong>Peter:</strong> There’s <Audio src="/audio/dictionary/no-point-in.mp3"/><mark>no point in</mark> arguing, Bob. I’ve already <Audio src="/audio/dictionary/made-up-my-mind.mp3"/><mark>made up my mind</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Oh well, <Audio src="/audio/dictionary/at-least.mp3"/><mark>at least</mark> I won’t have to <Audio src="/audio/dictionary/put-up-with.mp3"/><mark>put up with</mark> your nonsense anymore! Good-bye to you and good-bye to this <Audio src="/audio/dictionary/dead-end-job.mp3"/><mark>dead-end job</mark>.
        </Text>
        <Text>
          <strong>Peter:</strong> Please leave before I <Audio src="/audio/dictionary/lose-my-temper.mp3"/><mark>lose my temper</mark>!
        </Text>
      </div>
    </>
  );
}
