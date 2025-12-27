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
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-7.mp3"/>
        <Card>
          Susan stays up all night thinking about her
cookie business. In the morning, she discusses it
with Bob. Bob agrees to work for her.
        </Card>
        <Text>
          <strong>Bob:</strong> You’re up bright and early this morning, Susan.
        </Text>
        <Text>
          <strong>Susan:</strong> I didn’t sleep a wink. I was awake all night thinking
about the new business.
        </Text>
        <Text>
          <strong>Bob:</strong> Running your own business is lots of work. Are you
prepared to work like a dog?
        </Text>
        <Text>
          <strong>Susan:</strong> No. But I am prepared to hire you to run the business.
        </Text>
        <Text>
          <strong>Bob:</strong> You want me to run a cookie business? Fat chance!
        </Text>
        <Text>
          <strong>Susan:</strong> Why not?
        </Text>
        <Text>
          <strong>Bob:</strong> I don’t have a clue about making cookies. I don’t even
know how to turn the oven on!
        </Text>
        <Text>
          <strong>Susan:</strong> I’ll give you a crash course.
        </Text>
        <Text>
          <strong>Bob:</strong> Do I have to do the baking?
        </Text>
        <Text>
          <strong>Susan:</strong> No. You’ll just manage the business side.
        </Text>
        <Text>
          <strong>Bob:</strong> Needless to say, I have mixed feelings about working
for you.
        </Text>
        <Text>
          <strong>Susan:</strong> I’ll be nice. I promise you’ll be a happy camper.
        </Text>
        <Text>
          <strong>Bob:</strong> Okay. Let’s give it a shot, boss!
        </Text>        
      </div>
    </>
  );
}
