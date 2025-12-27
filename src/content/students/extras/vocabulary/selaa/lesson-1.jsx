import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Audio } from "@/components/atoms/Audio";
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
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-1.mp3" />
        <Text>
          <Bold>Lesson 1 • Bob’s Day at Work</Bold>
        </Text>
        <Italic>
          Bob works as a manager in a furniture store. Peter, his boss, is not
          happy about sales. Bob’s new advertising campaign hasn’t helped. Peter
          decides to fire him.
        </Italic>
        <Text>
          <Bold>Peter:</Bold> Bob, I hate to break the news, but our sales were
          down again last month.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Down again, Peter?
        </Text>
        <Text>
          <Bold>Peter:</Bold> Yeah. These days, everybody’s shopping at our
          competition, Honest Abe’s Furniture Store.
        </Text>
        <Text>
          <Bold>Bob:</Bold> But everything in there{" "}
          <Audio src="/audio/general/costs-an-arm-and-a-leg.mp3" />
          <Mark>costs an arm and a leg</Mark>!
        </Text>
        <Text>
          <Bold>Peter:</Bold> That’s true. They do charge{" "}
          <Audio src="/audio/general/top-dollar.mp3" />
          <Mark>top dollar</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> And their salespeople are very strange. They really{" "}
          <Audio src="/audio/general/gives-me-the-creeps.mp3" />
          <Mark>give me the creeps</Mark>!
        </Text>
        <Text>
          <Bold>Peter:</Bold> Well, they must be doing something right over
          there. Meanwhile, we’re <Audio src="/audio/general/about-to.mp3" />
          <Mark>about to</Mark> <Audio src="/audio/general/belly-up.mp3" />
          <Mark>belly-up</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> I’m sorry to hear that. I thought my new advertising
          campaign would <Audio src="/audio/general/save-the-day.mp3" />
          <Mark>save the day</Mark>.
        </Text>
        <Text>
          <Bold>Peter:</Bold> <Audio src="/audio/general/lets-face-it.mp3" />
          <Mark>Let’s face it</Mark>: your advertising campaign was a{" "}
          <Audio src="/audio/general/real-flop.mp3" />
          <Mark>real flop</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Well then I’ll{" "}
          <Audio src="/audio/general/go-back-to-the-drawing-board.mp3" />
          <Mark>go back to the drawing board</Mark>.
        </Text>
        <Text>
          <Bold>Peter:</Bold> It’s too late for that. You’re fired!
        </Text>
        <Text>
          <Bold>Bob:</Bold> What? You’re{" "}
          <Audio src="/audio/general/giving-me-the-ax.mp3" />
          <Mark>giving me the ax</Mark>?
        </Text>
        <Text>
          <Bold>Peter:</Bold> Yes. I’ve already found a new manager. She’s{" "}
          <Audio src="/audio/general/as-sharp-as-a-tack.mp3" />
          <Mark>as sharp as a tack</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Can’t we even{" "}
          <Audio src="/audio/general/talk-this-over.mp3" />
          <Mark>talk this over</Mark>?{" "}
          <Audio src="/audio/general/after-all.mp3" />
          <Mark>After all</Mark> , I’ve been working here for 10 years!
        </Text>
        <Text>
          <Bold>Peter:</Bold> There’s{" "}
          <Audio src="/audio/general/no-point-in.mp3" />
          <Mark>no point in</Mark> arguing, Bob. I’ve already{" "}
          <Audio src="/audio/general/made-up-my-mind.mp3" />
          <Mark>made up my mind</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Oh well, <Audio src="/audio/general/at-least.mp3" />
          <Mark>at least</Mark> I won’t have to{" "}
          <Audio src="/audio/general/put-up-with.mp3" />
          <Mark>put up with</Mark> your nonsense anymore! Good-bye to you and
          good-bye to this <Audio src="/audio/general/dead-end-job.mp3" />
          <Mark>dead-end job</Mark>.
        </Text>
        <Text>
          <Bold>Peter:</Bold> Please leave before I{" "}
          <Audio src="/audio/general/lose-my-temper.mp3" />
          <Mark>lose my temper</Mark>!
        </Text>
      </div>
    </>
  );
}
