import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Italic } from "@/components/atoms/Italic";
import { Bold } from "@/components/atoms/Bold";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
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
        <Text><Bold>Lesson 6 • Susan Stays Home and Bakes Cookies</Bold></Text>
        <Italic>
          Susan decides to cheer up her husband. Bob loves her homemade cookies.
          Nicole suggests she start a cookie business.
        </Italic>
        <Text>
          <Bold>Susan:</Bold> Bob, I baked cookies for you.
        </Text>
        <Text>
          <Bold>Bob:</Bold> That was so nice of you, dear. You’ve got a heart of gold!
        </Text>
        <Text>
          <Bold>Susan:</Bold> Go ahead and pig out!
        </Text>
        <Text>
          <Bold>Bob:</Bold> These are delicious!
        </Text>
        <Text>
          <Bold>Susan:</Bold> I thought they might cheer you up. You’ve been in a
bad mood lately.
        </Text>
        <Text>
          <Bold>Bob:</Bold> I guess I have been a little on edge. But these cookies
are just what the doctor ordered
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Do I smell cookies?
        </Text>
        <Text>
          <Bold>Susan:</Bold> Yes, Nicole. Help yourself.
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Yum-yum.* These are out of this world. You could go
into business selling these!
        </Text>
        <Text>
          <Bold>Bob:</Bold> You could call them Susan’s Scrumptious Cookies.
You’d make a bundle.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Good thinking!
        </Text>
        <Text>
          <Bold>Nicole:</Bold> Don’t forget to give me credit for the idea after you’re
rich and famous!
        </Text>
        <Text>
          <Bold>Susan:</Bold> You know I always give credit where credit is due!
        </Text>
      </div>
    </>
  );
}
