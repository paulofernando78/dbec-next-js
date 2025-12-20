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
        lesson="Lesson 4 • Nicole Day’s at School"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-4.mp3"/>
        <Text bold>Lesson 4 • Nicole Day’s at School</Text>
        <Card>
          Nicole tells her mother Susan about her successful presentation at school. Her brother Ted overhears and interrupts the conversation.
        </Card>
        <Text>
          <strong>Susan:</strong> How was your day at school today, Nicole?
        </Text>
        <Text>
          <strong>Nicole:</strong> It was great, Mom. I gave a presentation on Hillary Clinton in government class Afterwards, my teacher <mark>paid me a compliment</mark>.
        </Text>
        <Text>
          <strong>Susan:</strong> What did she say?
        </Text>
        <Text>
          <strong>Nicole:</strong> She said my presentation was <mark>head and shoulders above</mark> the others.
        </Text>
        <Text>
          <strong>Susan:</strong> <mark>Way to go!</mark>
        </Text>
        <Text>
          <strong>Nicole:</strong> She also said I should <mark>go into</mark> politics, just like Hillary.
        </Text>
        <Text>
          <strong>Ted:</strong> You’re so <mark>gung ho</mark> about school. It <mark>drives me crazy</mark>.
        </Text>
        <Text>
          <strong>Nicole:</strong> Ted, don’t <mark>butt in</mark>! You’re just jealous.
        </Text>
        <Text>
          <strong>Ted:</strong> Right. You <mark>hit the nail on the head</mark>. I’m <mark>green with envy</mark>.
        </Text>
        <Text>
          <strong>Nicole:</strong> Would you just <mark>shut up</mark>? You’re <mark>on thin ice with</mark> me
right now.
        </Text>
        <Text>
          <strong>Ted:</strong> Oh no! Look at me. I’m <mark>shaking in my shoes</mark>!
        </Text>
      </div>
    </>
  );
}
