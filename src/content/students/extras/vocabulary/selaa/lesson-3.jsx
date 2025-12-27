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
        lesson="Lesson 3 • Ted”s Day at School"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-3.mp3"/>
        <Text><Bold>Lesson 3 • Ted”s Day at School</Bold></Text>
        <Italic>
          Ted tells his parents he did poorly on his cheтistry test. They tell him he needs to get serious and study more.
        </Italic>
        <Text>
          <Bold>Susan:</Bold> How was your day at school today, Ted?
        </Text>
        <Text>
          <Bold>Ted:</Bold> Bad. I had a chemistry test, and I <Audio src="/audio/general/.mp3"/><Mark>blew it</Mark>!
        </Text>
         <Text>
          <Bold>Susan:</Bold> Maybe if you didn’t <Audio src="/audio/general/.mp3"/><Mark>cut class</Mark> so often, you’d do better.
        </Text>
         <Text>
          <Bold>Bob:</Bold> That’s right, son. Stop <Audio src="/audio/general/.mp3"/><Mark>slacking off</Mark> and start <Audio src="/audio/general/.mp3"/><Mark>hitting the books</Mark>!
        </Text>
         <Text>
          <Bold>Ted:</Bold> But I <Audio src="/audio/general/.mp3"/><Mark>can’t stand</Mark> chemistry class. Besides, it’s a <Audio src="/audio/general/.mp3"/><Mark>lost cause</Mark>. That class is way <Audio src="/audio/general/.mp3"/><Mark>over my head</Mark>.
        </Text>
         <Text>
          <Bold>Susan:</Bold> You need to <Audio src="/audio/general/.mp3"/><Mark>buckle down</Mark>.
        </Text>
         <Text>
          <Bold>Ted:</Bold> When I’m a famous musician, people won’t <Audio src="/audio/general/.mp3"/><Mark>give a hoot</Mark> about my knowledge of atoms and molecules.
        </Text>
         <Text>
          <Bold>Bob:</Bold> That’s <Audio src="/audio/general/.mp3"/><Mark>beside the point</Mark>.
        </Text>
         <Text>
          <Bold>Susan:</Bold> We know you have your <Audio src="/audio/general/.mp3"/><Mark>heart set on</Mark> going to New York University.
        </Text>
         <Text>
          <Bold>Bob:</Bold> And you don’t <Audio src="/audio/general/.mp3"/><Mark>stand a chance</Mark> of getting in there with such poor grades!
        </Text>
        
      </div>
    </>
  );
}
