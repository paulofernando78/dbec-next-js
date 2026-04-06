import styles from "./TheAlphabet.module.css";

import { Section } from "@/components/molecules/Section";
import { ContentToken } from "@/components/molecules/ContentToken";
import { Audio } from "@/components/atoms/Audio";
import { Card } from "@/components/atoms/Card";
import { Line } from "@/components/molecules/Line";
import { List } from  "@/components/molecules/List";
import { LineBreak } from "@/components/atoms/LineBreak";

import { content } from "@/helpers/content";

const alphabet = [
  {
    number: "1",
    letter: "A",
    phonetics: "/eɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/a.mp3",
  },
  {
    number: "2",
    letter: "B",
    phonetics: "/biː/",
    audio: "/assets/audio/pronunciation/the-alphabet/b.mp3",
  },
  {
    number: "3",
    letter: "C",
    phonetics: "/siː/",
    audio: "/assets/audio/pronunciation/the-alphabet/c.mp3",
  },
  {
    number: "4",
    letter: "D",
    phonetics: "/diː/",
    audio: "/assets/audio/pronunciation/the-alphabet/d.mp3",
  },
  {
    number: "5",
    letter: "E",
    phonetics: "/iː/",
    audio: "/assets/audio/pronunciation/the-alphabet/e.mp3",
  },
  {
    number: "6",
    letter: "F",
    phonetics: "/ef/",
    audio: "/assets/audio/pronunciation/the-alphabet/f.mp3",
  },
  {
    number: "7",
    letter: "G",
    phonetics: "/dʒiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/g.mp3",
  },
  {
    number: "8",
    letter: "H",
    phonetics: "/eɪtʃ/",
    audio: "/assets/audio/pronunciation/the-alphabet/h.mp3",
  },
  {
    number: "9",
    letter: "I",
    phonetics: "/aɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/i.mp3",
  },
  {
    number: "10",
    letter: "J",
    phonetics: "/dʒeɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/j.mp3",
  },
  {
    number: "11",
    letter: "K",
    phonetics: "/keɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/k.mp3",
  },
  {
    number: "12",
    letter: "L",
    phonetics: "/el/",
    audio: "/assets/audio/pronunciation/the-alphabet/l.mp3",
  },
  {
    number: "13",
    letter: "M",
    phonetics: "/em/",
    audio: "/assets/audio/pronunciation/the-alphabet/m.mp3",
  },
  {
    number: "14",
    letter: "N",
    phonetics: "/en/",
    audio: "/assets/audio/pronunciation/the-alphabet/n.mp3",
  },
  {
    number: "15",
    letter: "O",
    phonetics: "/oʊ/",
    audio: "/assets/audio/pronunciation/the-alphabet/o.mp3",
  },
  {
    number: "16",
    letter: "P",
    phonetics: "/piː/",
    audio: "/assets/audio/pronunciation/the-alphabet/p.mp3",
  },
  {
    number: "17",
    letter: "Q",
    phonetics: "/kjuː/",
    audio: "/assets/audio/pronunciation/the-alphabet/q.mp3",
  },
  {
    number: "18",
    letter: "R",
    phonetics: "/ɑːr/",
    audio: "/assets/audio/pronunciation/the-alphabet/r.mp3",
  },
  {
    number: "19",
    letter: "S",
    phonetics: "/es/",
    audio: "/assets/audio/pronunciation/the-alphabet/s.mp3",
  },
  {
    number: "20",
    letter: "T",
    phonetics: "/tiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/t.mp3",
  },
  {
    number: "21",
    letter: "U",
    phonetics: "/juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/u.mp3",
  },
  {
    number: "22",
    letter: "V",
    phonetics: "/viː/",
    audio: "/assets/audio/pronunciation/the-alphabet/v.mp3",
  },
  {
    number: "23",
    letter: "W",
    phonetics: "/ˈdʌb.əl.juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/w.mp3",
  },
  {
    number: "24",
    letter: "X",
    phonetics: "/eks/",
    audio: "/assets/audio/pronunciation/the-alphabet/x.mp3",
  },
  {
    number: "25",
    letter: "Y",
    phonetics: "/waɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/y.mp3",
  },
  {
    number: "26",
    letter: "Z",
    phonetics: "/ziː/",
    audio: "/assets/audio/pronunciation/the-alphabet/z.mp3",
  },
];

export const TheAlphabet = () => {
  return (
    <>
    <span><b>THE ALPHABET</b></span>
    <LineBreak />
      <ContentToken />
      <div className={styles.container}>
        {alphabet.map((a, i) => (
          <div key={i} className={styles.wrapper}>
            <>
              <span className={styles.number}>{a.number}</span>
              <span className={styles.letter}>{a.letter}</span>
              <span className="phonetics">{a.phonetics}</span>
              <Audio src={a.audio} />
            </>
          </div>
        ))}
      </div>
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
    </>
  );
};
