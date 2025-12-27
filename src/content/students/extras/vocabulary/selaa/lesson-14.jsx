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
        lesson="Lesson 14 • Amber and Ted Heat Up the itchen"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-14.mp3"/>
        <Italic>
          ...
        </Italic>
        <Text>
          <strong>...:</strong> ...
        </Text>
        
      </div>
    </>
  );
}
