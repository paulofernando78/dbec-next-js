import styles from "./phonetics.module.css";

import React from "react";
import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Links } from "@/components/molecules/Links";
import { Audio } from "@/components/atoms/Audio";

const vowels = [
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/æ.mp3",
    symbol: "/æ/",
    description: "short",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/e.mp3",
    symbol: "/e/",
    description: "short",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/eɪ.mp3",
    symbol: "/eɪ/",
    description: "short",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/i.mp3",
    symbol: "/iː/",
    description: "long",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3",
    symbol: "/ɔ/",
    description: "long",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/oʊ.mp3",
    symbol: "/oʊ/",
    description: "long",
  },
  {
    audio: "/assets/audio/pronunciation/phonetics/vowels/ə-unstressed.mp3",
    symbol: "/ə/",
    description: "schwa (unstressed)",
  },
];



export default function PhoneticsLetters() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Phonetics + Letters" />
      <div className="line-break">
        <Paragraph
          blocks={[
            {
              items: [
                {
                  audio: "/assets/audio/phonetics/check-out.mp3",
                  text: [
                    {
                      part: "Check out the phonetic sounds of American English.",
                      type: "bold",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <div className={styles.container}>
          {vowels.map((vowel, index) => (
            <div key={index} className={styles.wrapper}>
              <span className={styles.symbol}>{vowel.symbol}</span>
              {vowel.audio && <Audio src={vowel.audio} />}
              <span className={styles.description}>{vowel.description}</span>
            </div>
          ))}
        </div>
        <h3>Sounds by letters</h3>
        <Links
          links={[
            {
              links: [
                // {
                //   href: "/pronunciation/phonetics-letters/letter-a",
                //   label: "Letter \"a\" ",
                //   phonetics: "/æ/, /ɑː/, /ə/, /eɪ/"
                // },
                {
                  href: "/pronunciation/phonetics-letters/letters-a-vs-ea",
                  label: 'Letters "a vs. e(a)"',
                  phonetics: "/æ/ vs. /e/",
                },
                {
                  href: "/pronunciation/phonetics-letters/letters-ea-ee-vs-i",
                  label: 'Letters "ea, ee vs. i"',
                  phonetics: "/iː/ vs /ɪ/",
                },
                // {
                //   href: "/pronunciation/phonetics-letters/letteru",
                //   label: 'Letter "u"',
                //   phonetics: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/"
                // },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
