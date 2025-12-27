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
        lesson="Lesson 7 • Susan Hires Bob to Run Her Business"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-7.mp3" />
        <Text>Lesson 7 • Susan Hires Bob to Run Her Business</Text>
        <Italic>
          Susan stays up all night thinking about her cookie business. In the
          morning, she discusses it with Bob. Bob agrees to work for her.
        </Italic>
        <Text>
          <Bold>Bob:</Bold> You’re up <Audio src="/audio/general/.mp3" />
          <Mark>bright and early</Mark> this morning, Susan.
        </Text>
        <Text>
          <Bold>Susan:</Bold> I <Audio src="/audio/general/.mp3" /><Mark>didn’t sleep a wink</Mark>. I was awake
          all night thinking about the new business.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Running your own business is lots of work. Are you
          prepared to <Audio src="/audio/general/.mp3" /><Mark>work like a dog</Mark>?
        </Text>
        <Text>
          <Bold>Susan:</Bold> No. But I am prepared to hire you to run the
          business.
        </Text>
        <Text>
          <Bold>Bob:</Bold> You want me to run a cookie business?{" "}
          <Audio src="/audio/general/.mp3" /><Mark>Fat chance!</Mark>
        </Text>
        <Text>
          <Bold>Susan:</Bold> Why not?
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" /><Mark>I don’t have a clue</Mark> about making
          cookies. I don’t even know how to turn the oven on!
        </Text>
        <Text>
          <Bold>Susan:</Bold> I’ll give you a <Audio src="/audio/general/.mp3" /><Mark>crash course</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Do I have to do the baking?
        </Text>
        <Text>
          <Bold>Susan:</Bold> No. You’ll just manage the business side.
        </Text>
        <Text>
          <Bold>Bob:</Bold> <Audio src="/audio/general/.mp3" /><Mark>Needless to say</Mark>, I have{" "}
          <Audio src="/audio/general/.mp3" /><Mark>mixed feelings</Mark> about working for you.
        </Text>
        <Text>
          <Bold>Susan:</Bold> I’ll be nice. I promise you’ll be a{" "}
          <Audio src="/audio/general/.mp3" /><Mark>happy camper</Mark>.
        </Text>
        <Text>
          <Bold>Bob:</Bold> Okay. <Audio src="/audio/general/.mp3" /><Mark>Let’s give it a shot</Mark>, boss!
        </Text>
      </div>
    </>
  );
}
