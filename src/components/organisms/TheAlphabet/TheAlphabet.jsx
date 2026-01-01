import styles from "./TheAlphabet.module.css";

import { Audio } from "@/components/atoms/Audio";
import { InlineText } from "@/components/molecules/InlineText";

const alphabet = [
  {
    number: "1",
    letter: "A",
    phonetics: "/eɪ/",
    audio: "/audio/alphabet/a.mp3",
  },
  {
    number: "2",
    letter: "B",
    phonetics: "/biː/",
    audio: "/audio/alphabet/b.mp3",
  },
  {
    number: "3",
    letter: "C",
    phonetics: "/siː/",
    audio: "/audio/alphabet/c.mp3",
  },
  {
    number: "4",
    letter: "D",
    phonetics: "/diː/",
    audio: "/audio/alphabet/d.mp3",
  },
  {
    number: "5",
    letter: "E",
    phonetics: "/iː/",
    audio: "/audio/alphabet/e.mp3",
  },
  {
    number: "6",
    letter: "F",
    phonetics: "/ef/",
    audio: "/audio/alphabet/f.mp3",
  },
  {
    number: "7",
    letter: "G",
    phonetics: "/dʒiː/",
    audio: "/audio/alphabet/g.mp3",
  },
  {
    number: "8",
    letter: "H",
    phonetics: "/eɪtʃ/",
    audio: "/audio/alphabet/h.mp3",
  },
  {
    number: "9",
    letter: "I",
    phonetics: "/aɪ/",
    audio: "/audio/alphabet/i.mp3",
  },
  {
    number: "10",
    letter: "J",
    phonetics: "/dʒeɪ/",
    audio: "/audio/alphabet/j.mp3",
  },
  {
    number: "11",
    letter: "K",
    phonetics: "/keɪ/",
    audio: "/audio/alphabet/k.mp3",
  },
  {
    number: "12",
    letter: "L",
    phonetics: "/el/",
    audio: "/audio/alphabet/l.mp3",
  },
  {
    number: "13",
    letter: "M",
    phonetics: "/em/",
    audio: "/audio/alphabet/m.mp3",
  },
  {
    number: "14",
    letter: "N",
    phonetics: "/en/",
    audio: "/audio/alphabet/n.mp3",
  },
  {
    number: "15",
    letter: "O",
    phonetics: "/oʊ/",
    audio: "/audio/alphabet/o.mp3",
  },
  {
    number: "16",
    letter: "P",
    phonetics: "/piː/",
    audio: "/audio/alphabet/p.mp3",
  },
  {
    number: "17",
    letter: "Q",
    phonetics: "/kjuː/",
    audio: "/audio/alphabet/q.mp3",
  },
  {
    number: "18",
    letter: "R",
    phonetics: "/ɑːr/",
    audio: "/audio/alphabet/r.mp3",
  },
  {
    number: "19",
    letter: "S",
    phonetics: "/es/",
    audio: "/audio/alphabet/s.mp3",
  },
  {
    number: "20",
    letter: "T",
    phonetics: "/tiː/",
    audio: "/audio/alphabet/t.mp3",
  },
  {
    number: "21",
    letter: "U",
    phonetics: "/juː/",
    audio: "/audio/alphabet/u.mp3",
  },
  {
    number: "22",
    letter: "V",
    phonetics: "/viː/",
    audio: "/audio/alphabet/v.mp3",
  },
  {
    number: "23",
    letter: "W",
    phonetics: "/ˈdʌb.əl.juː/",
    audio: "/audio/alphabet/w.mp3",
  },
  {
    number: "24",
    letter: "X",
    phonetics: "/eks/",
    audio: "/audio/alphabet/x.mp3",
  },
  {
    number: "25",
    letter: "Y",
    phonetics: "/waɪ/",
    audio: "/audio/alphabet/y.mp3",
  },
  {
    number: "26",
    letter: "Z",
    phonetics: "/ziː/",
    audio: "/audio/alphabet/z.mp3",
  },
];

export const TheAlphabet = () => {
  return (
    <>
      <InlineText />
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
    </>
  );
};
