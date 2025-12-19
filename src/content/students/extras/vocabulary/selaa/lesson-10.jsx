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
        lesson="Lesson • ..."
      />
      <div className="line-break">
        <Card>
          ...
        </Card>
        <AudioPlayer />
        <Text>
          <strong>...:</strong> ...
        </Text>
        
      </div>
    </>
  );
}
