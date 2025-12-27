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
        lesson="Lesson 5 • Ted Goes Out for the Evening"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-5.mp3" />
        <Card>
          Susan decides to cheer up her husband. Bob loves her homemade cookies.
          Nicole suggests she start a cookie business.
        </Card>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
        <Text>
          <strong>Bob:</strong> ...
        </Text>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
        <Text>
          <strong>Bob:</strong> ...
        </Text>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
        <Text>
          <strong>Bob:</strong> ...
        </Text>
        <Text>
          <strong>Nicole:</strong> ...
        </Text>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
        <Text>
          <strong>Nicole:</strong> ...
        </Text>
        <Text>
          <strong>Bob:</strong> ...
        </Text>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
        <Text>
          <strong>Nicole:</strong> ...
        </Text>
        <Text>
          <strong>Susan:</strong> ...
        </Text>
      </div>
    </>
  );
}
