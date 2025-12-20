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
        lesson="Lesson 3 • Ted”s Day at School"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-3.mp3"/>
        <Text bold>Lesson 3 • Ted”s Day at School</Text>
        <Card>
          Ted tells his parents he did poorly on his cheтistry test. They tell him he needs to get serious and study more.
        </Card>
        <Text>
          <strong>Susan:</strong> How was your day at school today, Ted?
        </Text>
        <Text>
          <strong>Ted:</strong> Bad. I had a chemistry test, and I <mark>blew it</mark>!
        </Text>
         <Text>
          <strong>Susan:</strong> Maybe if you didn’t <mark>cut class</mark> so often, you’d do better.
        </Text>
         <Text>
          <strong>Bob:</strong> That’s right, son. Stop <mark>slacking off</mark> and start <mark>hitting the books</mark>!
        </Text>
         <Text>
          <strong>Ted:</strong> But I <mark>can’t stand</mark> chemistry class. Besides, it’s a <mark>lost cause</mark>. That class is way <mark>over my head</mark>.
        </Text>
         <Text>
          <strong>Susan:</strong> You need to <mark>buckle down</mark>.
        </Text>
         <Text>
          <strong>Ted:</strong> When I’m a famous musician, people won’t <mark>give a hoot</mark> about my knowledge of atoms and molecules.
        </Text>
         <Text>
          <strong>Bob:</strong> That’s <mark>beside the point</mark>.
        </Text>
         <Text>
          <strong>Susan:</strong> We know you have your <mark>heart set on</mark> going to New York University.
        </Text>
         <Text>
          <strong>Bob:</strong> And you don’t <mark>stand a chance</mark> of getting in there with such poor grades!
        </Text>
        
      </div>
    </>
  );
}
