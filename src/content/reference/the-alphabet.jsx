import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Section } from "@/components/molecules/Section";
import { TheAlphabet } from "@/components/organisms/lessons/TheAlphabet";
import { Card } from "@/components/atoms/Card";
import { Line } from "@/components/molecules/Line";
import { List } from  "@/components/molecules/List";
import { content, audio, bold } from "@/helpers/content";
export default function TheAlphabetPage() {
  return <>
      <Whiteboard title="Pronunciation" subtitle="The Alphabet" />
      <div className="line-break">
        <Section id="line" label="Line" heading={3}>
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/26-letters.mp3",
          parts: ["There are 26 letters in the english alphabet."]
        })]} />
          <TheAlphabet />
          <Line value={[...content({
          audio: "/assets/audio/general/answer-these-questions.mp3",
          parts: ["Answer these questions."]
        })]} />
        </Section>

        <List bullet={false} items={[{
        value: [{
          audio: "/assets/audio/pronunciation/the-alphabet/first-name.mp3",
          part: "How do you spell your first name?"
        }]
      }, {
        value: [{
          audio: "/assets/audio/pronunciation/the-alphabet/last-name.mp3",
          part: "How do you spell your last name?"
        }]
      }, {
        value: [{
          audio: "/assets/audio/pronunciation/the-alphabet/email-address.mp3",
          part: "How do you spell your email address?"
        }]
      }]} />
        <Card>
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/letter-c.mp3",
          parts: ["“C” has the same sound as the verb “see” and the noun “sea.”"]
        })]} />
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/letter-d.mp3",
          parts: ["“D” is pronounced differently from letter “G.”"]
        })]} />
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/number-eight.mp3",
          parts: ["Number “eight” is pronounced differently from letter “H.”"]
        })]} />
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/letter-t.mp3",
          parts: ["“T” has the same sound as in “tea.”"]
        })]} />
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/letter-u.mp3",
          parts: ["“U” has the same sound as in “you.”"]
        })]} />
          <Line value={[...content({
          audio: "/assets/audio/pronunciation/the-alphabet/letter-z.mp3",
          parts: ["“Z” in British is pronounced “zed.”"]
        })]} />
        </Card>
      </div>
    </>;
}