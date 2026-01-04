import styles from "./phonetics.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Links } from "@/components/molecules/Links";
import { Audio } from "@/components/atoms/Audio";
import { BulletPoint } from "@/components/atoms/BulletPoint";

const phonetics = [
  {
    sections: [
      {
        title: "Vowels",
        sounds: [
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/æ.mp3",
            symbol: "/æ/",
            description: "short",
            examples: ["cat", "fat", "man"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/e.mp3",
            symbol: "/e/",
            description: "short",
            examples: ["bed", "head", "red"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3",
            symbol: "/ɪ/",
            description: "short",
            examples: ["it", "sit", "hit"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/i.mp3",
            symbol: "/iː/",
            description: "long",
            examples: ["eat", "see", "tree"],
          },
          {
            audio:
              "/assets/audio/pronunciation/phonetics/vowels/ə-unstressed.mp3",
            symbol: "/ə/",
            description: "schwa [unstressed]",
            examples: ["around", "about", "sofa", "the"],
          },
          {
            audio:
              "/assets/audio/pronunciation/phonetics/vowels/ʌ-stressed.mp3",
            symbol: "/ʌ/",
            description: "short",
            examples: ["but", "cup", "sun"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
            symbol: "/ɑː/",
            description: "long",
            examples: ["car", "father", "law", "thought"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/ʊ.mp3",
            symbol: "/ʊ/",
            description: "short",
            examples: ["book", "good", "would"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/vowels/u.mp3",
            symbol: "/uː/",
            description: "long",
            examples: ["blue", "food", "student"],
          },
          {
            subSection: [
              {
                subTitle: "American vs. British",
                sounds: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
                    symbol: "/ɑː/",
                    description: "long",
                    examples: ["thought", "law"],
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
                    symbol: "/ɔː/",
                    description: "long",
                    examples: ["father", "thought", "law"],
                    lineBreak: true,
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɜ.mp3",
                    symbol: "/ɝː/",
                    description: "long",
                    examples: ["bird, word", "learn"],
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɜ.mp3",
                    symbol: "/ɜː/",
                    description: "long",
                    examples: ["bird, word", "learn"],
                    lineBreak: true,
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
                    symbol: "/ɑː/",
                    description: "long",
                    examples: ["frog", "hot", "lot", "rob"],
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɒ.mp3",
                    symbol: "/ɒ/",
                    description: "short",
                    examples: ["frog", "hot", "lot", "rob"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Diphthongs",
        sounds: [
          {
            audio: "/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3",
            symbol: "/eɪ/",
            examples: ["day", "say", "make"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3",
            symbol: "/aɪ/",
            examples: ["my", "time", "buy"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/diphthongs/ɔɪ.mp3",
            symbol: "/ɔɪ/",
            examples: ["boy", "toy", "choice"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/diphthongs/aʊ.mp3",
            symbol: "/aʊ/",
            examples: ["now", "out", "house"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3",
            symbol: "/oʊ/",
            examples: ["go", "home", "no"],
          },
          {
            subSection: [
              {
                subTitle: "American vs. British",
                sounds: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/ɪə.mp3",
                    symbol: "/ɪə/",
                    examples: ["near", "here", "fear"],
                    examples: [""],
                  },
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/diphthongs/ɪə.mp3",
                    symbol: "/ɪə/",
                    examples: ["near", "here", "fear"],
                    lineBreak: true,
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/eə.mp3",
                    symbol: "",
                    description: "",
                    examples: [""],
                  },
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/diphthongs/eə.mp3",
                    symbol: "/eə/",
                    examples: ["hair", "care", "there"],
                    lineBreak: true,
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/ʊə.mp3",
                    symbol: "",
                    description: "",
                    examples: [""],
                  },
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/diphthongs/ʊə.mp3",
                    symbol: "/ʊə/",
                    examples: ["tour", "pure", "cure"],
                    lineBreak: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Consonants",
        sounds: [
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/p.mp3",
            symbol: "/p/",
            description: "voiceless plosive",
            examples: ["pen", "happy", "map"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/b.mp3",
            symbol: "/b/",
            description: "voiced plosive",
            examples: ["book", "cab", "table"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/t.mp3",
            symbol: "/t/",
            description: "voiceless plosive",
            examples: ["ten", "better"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/d.mp3",
            symbol: "/d/",
            description: "voiced plosive",
            examples: ["dog", "ladder"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/k.mp3",
            symbol: "/k/",
            description: "voiceless plosive",
            examples: ["cat", "back"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/g.mp3",
            symbol: "/g/",
            description: "voiced plosive",
            examples: ["go", "bag"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/f.mp3",
            symbol: "/f/",
            description: "voiceless fricative",
            examples: ["fish", "coffee"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/v.mp3",
            symbol: "/v/",
            description: "voiced fricative",
            examples: ["very", "over"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/θ.mp3",
            symbol: "/θ/",
            description: "voiceless dental fricative",
            examples: ["think", "bath"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/ð.mp3",
            symbol: "/ð/",
            description: "voiced dental fricative",
            examples: ["this", "mother"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/s.mp3",
            symbol: "/s/",
            description: "voiceless fricative",
            examples: ["see", "city"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/z.mp3",
            symbol: "/z/",
            description: "voiced fricative",
            examples: ["zoo", "music"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/ʃ.mp3",
            symbol: "/ʃ/",
            description: "voiceless fricative",
            examples: ["she", "nation"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3",
            symbol: "/ʒ/",
            description: "voiced fricative",
            examples: ["vision", "measure"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/h.mp3",
            symbol: "/h/",
            description: "voiceless glottal fricative",
            examples: ["hat", "head"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/m.mp3",
            symbol: "/m/",
            description: "nasal",
            examples: ["man", "summer"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/n.mp3",
            symbol: "/n/",
            description: "nasal",
            examples: ["no", "dinner"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/ŋ.mp3",
            symbol: "/ŋ/",
            description: "nasal",
            examples: ["sing", "long"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/l.mp3",
            symbol: "/l/",
            description: "lateral approximant",
            examples: ["love", "feel"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/r.mp3",
            symbol: "/r/",
            description: "approximant",
            examples: ["red", "carry"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/j.mp3",
            symbol: "/j/",
            description: "approximant",
            examples: ["yes", "use"],
          },
          {
            audio: "/assets/audio/pronunciation/phonetics/consonants/w.mp3",
            symbol: "/w/",
            description: "approximant",
            examples: ["we", "quick"],
          },
          {
            subSection: [
              {
                subTitle: "American vs. British",
                sounds: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/.mp3",
                    symbol: "",
                    description: "",
                    examples: [""],
                  },
                  {
                    audio: "/assets/audio/pronunciation/phonetics/.mp3",
                    symbol: "",
                    description: "",
                    examples: [""],
                    lineBreak: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const vowels = [];

const consonants = [];

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
                      part: "Check out the phonetic sounds of American English plus British variants.",
                      type: "bold",
                    },
                  ],
                },
              ],
            },
          ]}
        />

        {phonetics[0].sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3>{section.title}</h3>

            <div>
              {section.sounds.map((item, index) => (
                <div key={index}>
                  {/* CASE 1 — normal sound */}
                  {!item.subSection && (
                    <div
                      className={`${styles.wrapper} ${
                        item.lineBreak ? "line-break-item" : ""
                      }`}
                    >
                      {item.audio && <Audio src={item.audio} />}
                      <span className={styles.symbol}>{item.symbol}</span>{" "}
                      {item.description && <span className={styles.description}>({item.description})</span>}{" "}
                      <BulletPoint />{" "}
                      {item.examples && (<span className={styles.examples}>{item.examples.join(", ")}</span>
                      )}
                    </div>
                  )}

                  {/* CASE 2 — subsection */}
                  {item.subSection &&
                    item.subSection.map((sub, subIndex) => (
                      <div key={subIndex} className="line-break">
                        <h4>{sub.subTitle}</h4>

                        <div style={{ marginBottom: "5px" }}>
                          {sub.sounds.map((sound, soundIndex) => (
                            <div
                              key={soundIndex}
                              className={`${styles.wrapper} ${
                                sound.lineBreak ? "line-break-item" : ""
                              }`}
                            >
                              {sound.audio && <Audio src={sound.audio} />}
                              <span className={styles.symbol}>
                                {sound.symbol}
                              </span>{" "}
                              {sound.description && <span className={styles.description}>
                                ({sound.description})
                              </span>}{" "}
                              <BulletPoint />{" "}
                              {sound.examples && (
                                <span className={styles.examples}>
                                  {sound.examples.join(", ")}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        <h3>Sounds by letters</h3>
        <Links
          links={[
            {
              links: [
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
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
