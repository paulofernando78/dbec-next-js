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
        lesson="Lesson 7 • Susan Hires Bob to Run Her Business"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-7.mp3" />
        <Text>Lesson 7 • Susan Hires Bob to Run Her Business</Text>
        <Card>
          Susan stays up all night thinking about her cookie business. In the
          morning, she discusses it with Bob. Bob agrees to work for her.
        </Card>
        <Text>
          <strong>Bob:</strong> You’re up <mark>bright and early</mark> this
          morning, Susan.
        </Text>
        <Text>
          <strong>Susan:</strong> I <mark>didn’t sleep a wink</mark>. I was
          awake all night thinking about the new business.
        </Text>
        <Text>
          <strong>Bob:</strong> Running your own business is lots of work. Are
          you prepared to <mark>work like a dog</mark>?
        </Text>
        <Text>
          <strong>Susan:</strong> No. But I am prepared to hire you to run the
          business.
        </Text>
        <Text>
          <strong>Bob:</strong> You want me to run a cookie business?{" "}
          <mark>Fat chance!</mark>
        </Text>
        <Text>
          <strong>Susan:</strong> Why not?
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>I don’t have a clue</mark> about making
          cookies. I don’t even know how to turn the oven on!
        </Text>
        <Text>
          <strong>Susan:</strong> I’ll give you a <mark>crash course</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Do I have to do the baking?
        </Text>
        <Text>
          <strong>Susan:</strong> No. You’ll just manage the business side.
        </Text>
        <Text>
          <strong>Bob:</strong> <mark>Needless to say</mark>, I have{" "}
          <mark>mixed feelings</mark> about working for you.
        </Text>
        <Text>
          <strong>Susan:</strong> I’ll be nice. I promise you’ll be a{" "}
          <mark>happy camper</mark>.
        </Text>
        <Text>
          <strong>Bob:</strong> Okay. <mark>Let’s give it a shot</mark>, boss!
        </Text>
      </div>
    </>
  );
}
