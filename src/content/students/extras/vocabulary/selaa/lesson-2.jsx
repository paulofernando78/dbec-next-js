import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Audio } from "@/components/atoms/Audio";
import { Text } from "@/components/molecules/Text";

export default function SELAAlessonOne() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Vocabulary"
        book="Speak English like an American"
        lesson="Lesson 2 • Bob Returns Home with Bad News"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-2.mp3" />
        <Text>
          <Bold>Lesson 2 • Bob Returns Home with Bad News</Bold>
        </Text>
        <Italic>
          Bob tells his wife Susan that he lost his job. Susan suggests that he
          start his own business.
        </Italic>
        <Text>
          <Bold>Susan:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>What’s the matter</Mark>, dear?
        </Text>
        <Text>
          <Bold>Bob:</Bold> Susan, I <Audio src="/audio/general/.mp3" />
          <Mark>got canned</Mark> today at work.
        </Text>
        <Text>
          <Bold>Susan:</Bold> But Bob, you were Peter’s{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>right-hand man</Mark>!
        </Text>
        <Text>
          <Bold>Bob:</Bold> Yes, and he <Audio src="/audio/general/.mp3" />
          <Mark>stabbed me in the back</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Keep your <Audio src="/audio/general/.mp3" />
          <Mark>chin up</Mark>. Maybe he’ll <Audio src="/audio/general/.mp3" />
          <Mark>change his mind</Mark> and take you back.
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>When pigs fly</Mark>! Once he{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>makes up his mind</Mark>, he never changes it. Besides, I told
          him off.
        </Text>
        <Text>
          <Bold>Susan:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>Look on the bright side</Mark>: you won’t have to{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>set eyes on</Mark> Peter ever again.
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>Thank goodness</Mark> for that!
        </Text>
        <Text>
          <Bold>Susan:</Bold> Hang in there. I’m sure you won’t be{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>out of work</Mark> for long.
        </Text>
        <Text>
          <Bold>Bob:</Bold> In the meantime, we’ll have to{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>live from hand to mouth</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Don’t get too <Audio src="/audio/general/.mp3" />
          <Mark>stressed out</Mark>, Bob. We’ll{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>make ends meet</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> I can always get a job at McDonald’s as a{" "}
          <Audio src="/audio/general/.mp3" />
          <Mark>last resort</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> I don’t think they’re hiring right now.
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>If worse comes to worst</Mark>, we can sell our home and move
          into a tent.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Let’s <Audio src="/audio/general/.mp3" />
          <Mark>think big</Mark>! Maybe you can start your own business.
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" />
          <Mark>Easier said than done</Mark>!
        </Text>
      </div>
    </>
  );
}
