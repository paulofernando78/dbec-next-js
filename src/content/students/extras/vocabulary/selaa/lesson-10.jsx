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
        lesson="Lesson 10 • Bob Visits the Village Market"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-10.mp3"/>
        <Italic>
          ...
        </Italic>
        <Text>
          <Bold>...:</Bold> ...
        </Text>
        
      </div>
    </>
  );
}
