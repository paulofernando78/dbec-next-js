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
        lesson="Lesson 5 • Ted Goes Out for the Evening"
      />
      <div className="line-break">
        <AudioPlayer src="/audio/vocabulary/selaa/lesson-5.mp3" />
        <Text>
          <Bold>Lesson 5 • Ted Goes Out for the Evening</Bold>
        </Text>
        <Italic>
          Ted leaves to go visit his girlfriend Amber. Ted’s mother Susan says
          she doesn’t really like Amber. She wishes him a good time anyway.
        </Italic>
        <Text>
          <Bold>Ted:</Bold> See you later, Mom!
        </Text>
        <Text>
          <Bold>Susan:</Bold> Where are you going, Ted?
        </Text>
        <Text>
          <Bold>Ted:</Bold> I told Amber I’d <Audio src="/audio/general/.mp3" /><Mark>drop by</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> What are you two going to do?
        </Text>
        <Text>
          <Bold>Ted:</Bold> Maybe go to the movies or to a party. Our plans are
          still <Audio src="/audio/general/.mp3" /><Mark>up in the air</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Why don’t you invite her over here?
        </Text>
        <Text>
          <Bold>Ted:</Bold> I don’t want to <Audio src="/audio/general/.mp3" /><Mark>hang around</Mark> here. Dad is really <Audio src="/audio/general/.mp3" /><Mark>down in the dumps</Mark>.
        </Text>
        <Text>
          <Bold>Susan:</Bold> Is Amber the girl with the nose ring and the
          purple hair?
        </Text>
        <Text>
          <Bold>Ted:</Bold> Yeah. I’m <Audio src="/audio/general/.mp3" /><Mark>crazy about</Mark> her!
        </Text>
        <Text>
          <Bold>Susan:</Bold> Don’t <Audio src="/audio/general/.mp3" /><Mark>take this the wrong way</Mark>, but she’s not
          exactly my <Audio src="/audio/general/.mp3" /><Mark>cup of tea</Mark>.
        </Text>
        <Text>
          <Bold>Ted:</Bold> <Audio src="/audio/general/.mp3" /><Mark>Take it easy</Mark>, Mom. We’re not <Audio src="/audio/general/.mp3" /><Mark>about to</Mark> get married. We just enoy <Audio src="/audio/general/.mp3" /><Mark>hanging out</Mark> together.
        </Text>
        <Text>
          <Bold>Susan:</Bold> I guess <Audio src="/audio/general/.mp3" /><Mark>there’s no accounting for taste</Mark>. <Audio src="/audio/general/.mp3" /><Mark>Have a good time</Mark>.
        </Text>
        <Text>
          <Bold>Ted:</Bold> Don’t worry. We’ll <Audio src="/audio/general/.mp3" /><Mark>have a blast</Mark>!
        </Text>
        <Text>
          <Bold>Susan:</Bold> <Audio src="/audio/general/.mp3" />(<Mark>under her breath</Mark>) That’s what I’m afraid of!
        </Text>
      </div>
    </>
  );
}
