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
        lesson="Lesson 6 • Susan Stays Home and Bakes Cookies"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-6.mp3" />
        <Text>
          <Bold>Lesson 6 • Susan Stays Home and Bakes Cookies</Bold>
        </Text>
        <Italic>
          Susan decides to cheer up her husband. Bob loves her homemade cookies.
          Nicole suggests she start a cookie business.
        </Italic>
        <Text>
          <Bold>Susan:</Bold> Bob, I baked cookies for you.
        </Text>
        <Text>
          <Bold>Bob:</Bold> That was so nice of you, dear. You’ve got a{" "}
          <Audio src="/audio/general/.mp3" /><Mark>heart of gold</Mark>!
        </Text>
        <Text>
          <Bold>Susan:</Bold> Go ahead and <Audio src="/audio/general/.mp3" /><Mark>pig out</Mark>!
        </Text>
        <Text>
          <Bold>Bob:</Bold> These are delicious!
        </Text>
        <Text>
          <Bold>Susan:</Bold> I thought they might <Audio src="/audio/general/.mp3" /><Mark>cheer you up</Mark>.
          You’ve been <Audio src="/audio/general/.mp3" /><Mark>in a bad mood</Mark> lately.
        </Text>
        <Text>
          <Bold>Bob:</Bold> I guess I have been a little <Audio src="/audio/general/.mp3" /><Mark>on edge</Mark>. But these
          cookies are <Audio src="/audio/general/.mp3" /><Mark>just what the doctor ordered</Mark>!
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Do I smell cookies?
        </Text>
        <Text>
          <Bold>Susan:</Bold> Yes, Nicole. <Audio src="/audio/general/.mp3" /><Mark>Help yourself</Mark>.
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Yum-yum.* These are <Audio src="/audio/general/.mp3" /><Mark>out of this world</Mark>. You could <Audio src="/audio/general/.mp3" /><Mark>go into business</Mark> selling these!
        </Text>
        <Text>
          <Bold>Bob:</Bold> You could call them Susan’s Scrumptious Cookies.
          You’d <Audio src="/audio/general/.mp3" /><Mark>make a bundle</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> <Audio src="/audio/general/.mp3" /><Mark>Good thinking</Mark>!
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Don’t forget to <Audio src="/audio/general/.mp3" /><Mark>give me credit</Mark> for the idea after
          you’re rich and famous!
        </Text>
        <Text>
          <Bold>Susan:</Bold> You know I always <Audio src="/audio/general/.mp3" /><Mark>give credit where credit is due</Mark>!
        </Text>
      </div>
    </>
  );
}
