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
        lesson="Lesson 12 • Bob’s Big Cookie Order"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-12.mp3"/>
        <Card>
          ...
        </Card>
        <Text>
          <strong>...:</strong> ...
        </Text>
        
      </div>
    </>
  );
}
