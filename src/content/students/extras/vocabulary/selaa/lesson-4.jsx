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
        lesson="Lesson 4 • Nicole Day’s at School"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-4.mp3"/>
        <Text><Bold>Lesson 4 • Nicole Day’s at School</Bold></Text>
        <Italic>
          Nicole tells her mother Susan about her successful presentation at school. Her brother Ted overhears and interrupts the conversation.
        </Italic>
        <Text>
          <Bold>Susan:</Bold> How was your day at school today, Nicole?
        </Text>
        <Text>
          <Bold>Nicole:</Bold> It was great, Mom. I gave a presentation on Hillary Clinton in government class Afterwards, my teacher <Audio src="/audio/general/.mp3"/><Mark>paid me a compliment</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> What did she say?
        </Text>
        <Text>
          <Bold>Nicole:</Bold> She said my presentation was <Audio src="/audio/general/.mp3"/><Mark>head and shoulders above</Mark> the others.
        </Text>
        <Text>
          <Bold>Susan:</Bold> <Audio src="/audio/general/.mp3"/><Mark>Way to go!</Mark>
        </Text>
        <Text>
          <Bold>Nicole:</Bold> She also said I should <Audio src="/audio/general/.mp3"/><Mark>go into</Mark> politics, just like Hillary.
        </Text>
        <Text>
          <Bold>Ted:</Bold> You’re so <Audio src="/audio/general/.mp3"/><Mark>gung ho</Mark> about school. It <Audio src="/audio/general/.mp3"/><Mark>drives me crazy</Mark>.
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Ted, don’t <Audio src="/audio/general/.mp3"/><Mark>butt in</Mark>! You’re just jealous.
        </Text>
        <Text>
          <Bold>Ted:</Bold> Right. You <Audio src="/audio/general/.mp3"/><Mark>hit the nail on the head</Mark>. I’m <Audio src="/audio/general/.mp3"/><Mark>green with envy</Mark>.
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Would you just shut up? You’re <Audio src="/audio/general/.mp3"/><Mark>on thin ice with</Mark> me
right now.
        </Text>
        <Text>
          <Bold>Ted:</Bold> Oh no! Look at me. I’m <Audio src="/audio/general/.mp3"/><Mark>shaking in my shoes</Mark>!
        </Text>
      </div>
    </>
  );
}
