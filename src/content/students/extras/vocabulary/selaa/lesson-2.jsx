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
        lesson="Lesson 2 • Bob Returns Home with Bad News"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-2.mp3"/>
        <Text bold>Lesson 2 • Bob Returns Home with Bad News</Text>
        <Card>
          Bob tells his wife Susan that he lost his job. Susan suggests that he start his own business.
        </Card>
        <Text>
          <strong>Susan:</strong> <mark>What’s the matter</mark>, dear?
        </Text>
        <Text>
          <strong>Bob:</strong> Susan, I <mark>got canned</mark> today at work.
        </Text>
        <Text>
          <strong>Susan:</strong> But Bob, you were Peter’s <mark>right-hand man</mark>!
        </Text>
        <Text>
          <strong>Bob:</strong> Yes, and he <mark>stabbed me in the back</mark>.
        </Text>
        <Text>
          <strong>Susan:</strong> Keep your <mark>chin up</mark>. Maybe he’ll <mark>change his mind</mark> and take you back.
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>When pigs fly</mark>! Once he <mark>makes up his mind</mark>, he never changes it. Besides, I told him off.
        </Text>
        <Text>
          <strong>Susan:</strong> <mark>Look on the bright side</mark>: you won’t have to <mark>set eyes on</mark> Peter ever again.
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>Thank goodness</mark> for that!
        </Text>
        <Text>
          <strong>Susan:</strong> Hang in there. I’m sure you won’t be <mark>out of work</mark> for long.
        </Text>
        <Text>
          <strong>Bob:</strong> In the meantime, we’ll have to <mark>live from hand to mouth</mark>.
        </Text>
        <Text>
          <strong>Susan:</strong> Don’t get too <mark>stressed out</mark>, Bob. We’ll <mark>make ends meet</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> I can always get a job at McDonald’s as a <mark>last resort</mark>.
        </Text>
        <Text>
          <strong>Susan:</strong> I don’t think they’re hiring right now.
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>If worse comes to worst</mark>, we can sell our home and move into a tent.
        </Text>
        <Text>
          <strong>Susan:</strong> Let’s <mark>think big</mark>! Maybe you can start your own business.
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>Easier said than done</mark>!
        </Text>
        
      </div>
    </>
  );
}
