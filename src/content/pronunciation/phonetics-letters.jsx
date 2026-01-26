import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";
import { InlineText } from "@/components/molecules/InlineText";
import { Paragraph } from "@/components/molecules/Paragraph";
import { List } from "@/components/molecules/List";

export default function PhoneticsLetters() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Phonetics + Letters" />
      <div className="line-break">
        <Contents
          items={[
            // Vowels
            { href: "vowels", label: "Vowels" },
            // Diphthongs
            { href: "diphthongs", label: "Diphthongs" },
            // Consonants
            { href: "consonants", label: "Consonants" },
            // Rhotic Vowes R
            {
              href: "rhotic-vowels-r",
              label: "Rhotic (Vowels + R)",
              phonetics: "/i/",
            },
            {
              lineBreak: true,
            },
            // Letter 'a'
            {
              href: "letter-a",
              label: "Letters 'a' (phonetics: /æ/, /ɑː/, /ə/, /eɪ/)",
            },
            // Letter 'ai'
            {
              href: "letter-ai",
              label: "Letter 'ai' (phonetics: /e/)",
            },
            // Letter 'au'
            {
              href: "",
              label: "Letter 'au' (phonetics: /ɑː/)",
            },
            // Letter 'aw'
            {
              href: "",
              label: "Letter 'aw' (phonetics: /ɑː/)",
            },
            // Letter 'awe'
            {
              href: "",
              label: "Letter 'awe' (phonetics: /ɑː/)",
            },
            {
              lineBreak: true,
            },
            // Letter 'e'
            {
              href: "letter e",
              label:
                "Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y' (phonetics: /iː/)",
            },
            // Letter 'e'
            {
              href: "letter-e-silent",
              label: "Letters 'e' silent",
            },
            // Letter 'ea'
            {
              href: "",
              label: "Letter 'ea' (phonetics: /iː/)",
            },
            // Letter 'eau'
            {
              href: "",
              label: "Letters 'eau' (phonetics: /oʊ/)",
            },
            // Letters 'ee'
            {
              href: "",
              label: "Letters 'ee' (phonetics: /iː/)",
            },
            // Letters 'ei'
            {
              href: "",
              label: "Letters 'ei' (phonetics: /eɪ/)",
            },
            // Letters 'eɪ'
            {
              href: "",
              label: "Letter 'et' (phonetics: /eɪ/)",
            },
            // Letters 'ey'
            {
              href: "",
              label: "Letter 'ey' (phonetics: /i/, /eɪ/)",
            },
            // Letters 'a' vs. 'e(a)'
            {
              href: "letters-a-e",
              label: "Letters 'a' vs. 'e(a)' (phonetics: /æ/ vs. /e/",
            },
            {
              lineBreak: true,
            },
            // Letter 'i'
            {
              href: "",
              label: "Letter 'i' (phonetics: /i/, /ɪ/, /ə/, /aɪ/, /ɑː/)",
            },
            // Letters 'ea', 'ee'. vs. 'i'
            {
              href: "letters-ea-ee-i",
              label: "Letters 'ea', 'ee' vs. 'i' (phonetics: /iː/ vs. /ɪ/)",
            },
            // Letter 'ie'
            {
              href: "",
              label: "Letters 'ie' (phonetics: /i/, /aɪ/)",
            },
            {
              lineBreak: true,
            },
            // Letters 'ng'
            {
              href: "",
              label: "Letters 'ng' (phonetics: /ŋ/)",
            },
            // Letters 'sh'
            {
              href: "",
              label: "Letters 'sh' (phonetics: /ʃ/)",
            },
            // Letters '(t)ch'
            {
              href: "",
              label: "Letters '(t)ch' (phonetics: /tʃ/, /ʃ/, /k/)",
            },
            // Letters 'sh' vs. 'ch'
            {
              href: "",
              label: "Letters 'sh' vs. 'ch' (phonetics: /ʃ/ vs. /tʃ/)",
            },
            {
              lineBreak: true,
            },
            // Letter 'o'
            {
              href: "",
              label: "Letter 'o' (phonetics: /ɑː/, /ɔː/, /oʊ/)",
            },
            // Letters 'oa'
            {
              href: "",
              label: "Letters 'oa' (phonetics: /ɔː/, /oʊ/)",
            },
            // Letters 'oo'
            {
              href: "",
              label: "Letters 'oo' (phonetics: /ʌ/, /ʊ/, /uː/)",
            },
            // Letters 'ous'
            {
              href: "",
              label: "Letters 'ous' (phonetics: /əs/)",
            },
            // Letters 'ow'
            {
              href: "",
              label: "Letters 'ow' (phonetics: /oʊ/, /aʊ/)",
            },
            {
              lineBreak: true,
            },
            // Letter 't'
            {
              href: "",
              label: "Letter 't' (phonetics: /t/)",
            },
            // Silent 't'
            {
              href: "silent-t",
              label: "Silent 't'",
            },
            // Flap 't'
            {
              href: "flap-t",
              label: "Flap 't'",
            },
            {
              lineBreak: true,
            },
            // Letter 'u'
            {
              href: "",
              label: "Letter 'u' (phonetics: /uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/)",
            },
            // Letters 'ui'
            {
              href: "",
              label: "Letters 'ui' (phonetics: /ɪ/, /aɪ/)",
            },
            {
              href: "",
              label: "Letters 'us' (phonetics: /əs/)",
            },
            // "Letters 'oo' vs. 'u'
            {
              href: "",
              label: "Letters 'oo' vs. 'u' (phonetics: /uː/ vs /ʊ/)",
            },
            // Letter 'y'
            {
              href: "",
              label: "Letter 'y' (phonetics: /i/, /j/, /aɪ/)",
            },
          ]}
        />
        <Paragraph
          blocks={[
            {
              lines: [
                {
                  text: [
                    {
                      audio: "/assets/audio/phonetics-letters/check-out.mp3",
                      part: "Check out the phonetic sounds of American English plus British variants.",
                      type: "bold",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <Section id="vowels" label="Vowels" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // æ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
                        part: "/æ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      // answer
                      {
                        audio: "/assets/audio/general/answer.mp3",
                      },
                      "answer ",
                      // ask
                      {
                        audio: "/assets/audio/general/ask.mp3",
                      },
                      "ask ",
                      // cat
                      {
                        audio: "/assets/audio/general/cat.mp3",
                      },
                      "cat ",
                      // cant
                      {
                        audio: "/assets/audio/general/cant.mp3",
                      },
                      "can’t ",
                      // dance
                      {
                        audio: "/assets/audio/general/dance.mp3",
                      },
                      "dance ",
                      // fat
                      {
                        audio: "/assets/audio/general/fat.mp3",
                      },
                      "fat ",
                      // fast
                      {
                        audio: "/assets/audio/general/fast.mp3",
                      },
                      "fast ",
                      // man
                      {
                        audio: "/assets/audio/general/man.mp3",
                      },
                      "man",
                    ],
                  },
                  // ɑː UK
                  {
                    text: [
                      {
                        ukFlag: true,
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                        part: "/ɑː/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(long)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      {
                        audio: "/assets/audio/general/answer-uk.mp3",
                      },
                      "answer ",
                      {
                        audio: "/assets/audio/general/ask-uk.mp3",
                      },
                      "ask ",
                      {
                        audio: "/assets/audio/general/cant-uk.mp3",
                      },
                      "can’t ",
                      {
                        audio: "/assets/audio/general/dance-uk.mp3",
                      },
                      "dance ",
                      {
                        audio: "/assets/audio/general/fast-uk.mp3",
                      },
                      "fast",
                    ],
                  },
                  { lineBreak: true },
                  // e
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
                        part: "/e/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/bed.mp3" },
                      "bed ",
                      { audio: "/assets/audio/general/head.mp3" },
                      "head ",
                      { audio: "/assets/audio/general/red.mp3" },
                      "red",
                    ],
                  },
                  // ɪ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                        part: "/ɪ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/busy.mp3" },
                      "busy ",
                      { audio: "/assets/audio/general/English.mp3" },
                      "English ",
                      { audio: "/assets/audio/general/it.mp3" },
                      "it",
                    ],
                  },
                  // iː
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                        part: "/iː/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(long)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/eat.mp3" },
                      "eat ",
                      { audio: "/assets/audio/general/key.mp3" },
                      "key ",
                      { audio: "/assets/audio/general/see.mp3" },
                      "see",
                    ],
                  },
                  { lineBreak: true },
                  // ə
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                        part: "/ə/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(schwa) " },
                      " ",
                      { part: "unstressed", type: "italic" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/about.mp3" },
                      "about ",
                      { audio: "/assets/audio/general/above.mp3" },
                      "above ",
                      { audio: "/assets/audio/general/cinema.mp3" },
                      "cinema ",
                      { audio: "/assets/audio/general/the.mp3" },
                      "the",
                    ],
                  },
                  // ʌ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                        part: "/ʌ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "stressed", type: "italic" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/but.mp3" },
                      "but ",
                      { audio: "/assets/audio/general/son-sun.mp3" },
                      "son / sun ",
                      { audio: "/assets/audio/general/under.mp3" },
                      "under",
                    ],
                  },
                  // In American English, /ə/ and /ʌ/ are not distinguished, but they are in British English.
                  {
                    text: [
                      { important: true },
                      "In American English, ",
                      { part: "/ə/", type: "phonetics" },
                      " and ",
                      { part: "/ʌ/", type: "phonetics" },
                      " are not distinguished, but they are in British English.",
                    ],
                  },
                  // ʌ
                  {
                    text: [
                      {
                        ukFlag: true,
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ʌ.mp3",
                        part: "/ʌ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/but-uk.mp3" },
                      "but ",
                      { audio: "/assets/audio/general/son-sun-uk.mp3" },
                      "son / sun ",
                      { audio: "/assets/audio/general/under-uk.mp3" },
                      "under",
                    ],
                  },
                  { lineBreak: true },
                  // ɑː
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                        part: "/ɑː/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(long)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/calm.mp3" },
                      "calm ",
                      { audio: "/assets/audio/general/father.mp3" },
                      "father ",
                      { audio: "/assets/audio/general/palm.mp3" },
                      "palm ",
                      { audio: "/assets/audio/general/spa.mp3" },
                      "spa",
                    ],
                  },
                  // ɔː
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                        part: "/ɔː/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/dog.mp3" },
                      "dog ",
                      { audio: "/assets/audio/general/frog.mp3" },
                      "frog ",
                      { audio: "/assets/audio/general/hot.mp3" },
                      "hot ",
                      { audio: "/assets/audio/general/job.mp3" },
                      "job ",
                      { audio: "/assets/audio/general/law.mp3" },
                      "law ",
                      { audio: "/assets/audio/general/lot.mp3" },
                      "lot ",
                      { audio: "/assets/audio/general/not.mp3" },
                      "not ",
                      { audio: "/assets/audio/general/rob.mp3" },
                      "rob ",
                      { audio: "/assets/audio/general/rock.mp3" },
                      "rock ",
                      { audio: "/assets/audio/general/raw.mp3" },
                      "raw ",
                      { audio: "/assets/audio/general/top.mp3" },
                      "top ",
                      { audio: "/assets/audio/general/thought.mp3" },
                      "thought",
                    ],
                  },
                  // (In some regions it’s pronounced /ɑː/)
                  {
                    text: [
                      {
                        important: true,
                        part: "(In some regions it’s pronounced ",
                      },
                      { part: "/ɑː/", type: "phonetics" },
                      { part: ")" },
                    ],
                  },
                  // ɒ UK
                  {
                    text: [
                      {
                        ukFlag: true,
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɒ.mp3",
                        part: "/ɒ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/dog-uk.mp3" },
                      "dog ",
                      { audio: "/assets/audio/general/frog-uk.mp3" },
                      "frog ",
                      { audio: "/assets/audio/general/hot-uk.mp3" },
                      "hot ",
                      { audio: "/assets/audio/general/lot-uk.mp3" },
                      "lot ",
                      { audio: "/assets/audio/general/rob-uk.mp3" },
                      "rob",
                    ],
                  },
                  { lineBreak: true },
                  // ʊ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ʊ.mp3",
                        part: "/ʊ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(short)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/book.mp3" },
                      "book ",
                      { audio: "/assets/audio/general/good.mp3" },
                      "good ",
                      { audio: "/assets/audio/general/wood-would.mp3" },
                      "wood ",
                      { audio: "/assets/audio/general/wood-would.mp3" },
                      "would",
                    ],
                  },
                  // uː
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/u.mp3",
                        part: "/uː/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(long)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/blue.mp3" },
                      "blue ",
                      { audio: "/assets/audio/general/food.mp3" },
                      "food ",
                      { audio: "/assets/audio/general/student.mp3" },
                      "student",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="diphthongs" label="Diphthongs" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // aɪ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                        part: "/aɪ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/buy.mp3" },
                      "buy ",
                      { audio: "/assets/audio/general/my.mp3" },
                      "my ",
                      { audio: "/assets/audio/general/time.mp3" },
                      "time ",
                    ],
                  },
                  // aʊ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/aʊ.mp3",
                        part: "/aʊ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/cow.mp3" },
                      "cow ",
                      { audio: "/assets/audio/general/bow-verb.mp3" },
                      "bow ",
                      { audio: "/assets/audio/general/south.mp3" },
                      "south",
                    ],
                  },
                  // eɪ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                        part: "/eɪ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/day.mp3" },
                      "day ",
                      { audio: "/assets/audio/general/make.mp3" },
                      "make ",
                      { audio: "/assets/audio/general/say.mp3" },
                      "say",
                    ],
                  },
                  // ɔɪ
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/ɔɪ.mp3",
                        part: "/ɔɪ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/boy.mp3" },
                      "boy ",
                      { audio: "/assets/audio/general/choice.mp3" },
                      "choice ",
                      { audio: "/assets/audio/general/toy.mp3" },
                      "toy",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // oʊ (US)
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
                        part: "/oʊ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/go.mp3" },
                      "go ",
                      { audio: "/assets/audio/general/show.mp3" },
                      "show ",
                      { audio: "/assets/audio/general/slow.mp3" },
                      "slow",
                    ],
                  },
                  // əʊ (UK)
                  {
                    text: [
                      {
                        ukFlag: true,
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/əʊ.mp3",
                        part: "/əʊ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/go-uk.mp3" },
                      "go ",
                      { audio: "/assets/audio/general/show-uk.mp3" },
                      "show ",
                      { audio: "/assets/audio/general/slow-uk.mp3" },
                      "slow",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="consonants" label="Consonants" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // /p/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/p.mp3",
                        part: "/p/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/pen.mp3" },
                      "pen ",
                      { audio: "/assets/audio/general/map.mp3" },
                      "map",
                    ],
                  },
                  // /b/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/b.mp3",
                        part: "/b/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/book.mp3" },
                      "book ",
                      { audio: "/assets/audio/general/table.mp3" },
                      "table",
                    ],
                  },
                  // /d/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/d.mp3",
                        part: "/d/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/do.mp3" },
                      "do ",
                      { audio: "/assets/audio/general/did.mp3" },
                      "did ",
                    ],
                  },
                  // /k/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/k.mp3",
                        part: "/k/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/cat.mp3" },
                      "cat ",
                      { audio: "/assets/audio/general/back.mp3" },
                      "back",
                    ],
                  },
                  // /g/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/g.mp3",
                        part: "/g/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/go.mp3" },
                      "go ",
                      { audio: "/assets/audio/general/bag.mp3" },
                      "bag",
                    ],
                  },
                  // /f/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/f.mp3",
                        part: "/f/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/fish.mp3" },
                      "fish ",
                      { audio: "/assets/audio/general/coffee.mp3" },
                      "coffee",
                    ],
                  },
                  // /v/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/v.mp3",
                        part: "/v/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/very.mp3" },
                      "very ",
                      { audio: "/assets/audio/general/over.mp3" },
                      "over",
                    ],
                  },
                  // /θ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/θ.mp3",
                        part: "/θ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless dental fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/think.mp3" },
                      "think ",
                      { audio: "/assets/audio/general/bath.mp3" },
                      "bath",
                    ],
                  },
                  // /ð/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ð.mp3",
                        part: "/ð/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced dental fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/this.mp3" },
                      "this ",
                      { audio: "/assets/audio/general/mother.mp3" },
                      "mother",
                    ],
                  },
                  // /s/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/s.mp3",
                        part: "/s/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/see.mp3" },
                      "see ",
                      { audio: "/assets/audio/general/city.mp3" },
                      "city",
                    ],
                  },
                  // /z/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/z.mp3",
                        part: "/z/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/zoo.mp3" },
                      "zoo ",
                      { audio: "/assets/audio/general/music.mp3" },
                      "music",
                    ],
                  },
                  // /ʃ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ʃ.mp3",
                        part: "/ʃ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/she.mp3" },
                      "she ",
                      { audio: "/assets/audio/general/nation.mp3" },
                      "nation",
                    ],
                  },
                  // /ʒ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ʒ.mp3",
                        part: "/ʒ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiced fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/vision.mp3" },
                      "vision ",
                      { audio: "/assets/audio/general/measure.mp3" },
                      "measure",
                    ],
                  },
                  // /h/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/h.mp3",
                        part: "/h/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless glottal fricative)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/hat.mp3" },
                      "hat ",
                      { audio: "/assets/audio/general/head.mp3" },
                      "head",
                    ],
                  },
                  // /m/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/m.mp3",
                        part: "/m/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(nasal)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/man.mp3" },
                      "man ",
                      { audio: "/assets/audio/general/summer.mp3" },
                      "summer",
                    ],
                  },
                  // /n/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/n.mp3",
                        part: "/n/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(nasal)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/no.mp3" },
                      "no ",
                      { audio: "/assets/audio/general/dinner.mp3" },
                      "dinner",
                    ],
                  },
                  // /ŋ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                        part: "/ŋ/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(nasal)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/sing.mp3" },
                      "sing ",
                      { audio: "/assets/audio/general/long.mp3" },
                      "long",
                    ],
                  },
                  // /l/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/l.mp3",
                        part: "/l/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(lateral approximant)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/love.mp3" },
                      "love ",
                      { audio: "/assets/audio/general/feel.mp3" },
                      "feel",
                    ],
                  },
                  // /r/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/r.mp3",
                        part: "/r/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(approximant)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/carry.mp3" },
                      "carry ",
                      { audio: "/assets/audio/general/red.mp3" },
                      "red",
                    ],
                  },
                  // /t/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/t.mp3",
                        part: "/t/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(voiceless plosive)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/ten.mp3" },
                      "ten ",
                      { audio: "/assets/audio/general/top.mp3" },
                      "top",
                    ],
                  },
                  // /j/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/j.mp3",
                        part: "/j/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(approximant)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/yes.mp3" },
                      "yes ",
                      { audio: "/assets/audio/general/yellow.mp3" },
                      "yellow ",
                      { audio: "/assets/audio/general/use.mp3" },
                      "use",
                    ],
                  },
                  // /w/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/w.mp3",
                        part: "/w/",
                        type: "phonetics",
                      },
                      " ",
                      { part: "(approximant)" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/we.mp3" },
                      "we ",
                      { audio: "/assets/audio/general/quick.mp3" },
                      "quick",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="rhotic-vowels-r" label="Rhotic (Vowels + R)" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ɑr
                  {
                    text: [
                      { part: "/ɑːr/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/car.mp3" },
                      "car ",
                      { audio: "/assets/audio/general/far.mp3" },
                      "far ",
                      { audio: "/assets/audio/general/heart.mp3" },
                      "heart ",
                      { audio: "/assets/audio/general/start.mp3" },
                      "start ",
                    ],
                  },
                  {
                    text: [
                      { ukFlag: true, part: "/ɑː/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/car-uk.mp3" },
                      "car ",
                      { audio: "/assets/audio/general/far-uk.mp3" },
                      "far ",
                      { audio: "/assets/audio/general/heart-uk.mp3" },
                      "heart ",
                      { audio: "/assets/audio/general/start-uk.mp3" },
                      "start ",
                    ],
                  },
                  { lineBreak: true },
                  // ɑɪr
                  {
                    text: [
                      { part: "/ɑɪr/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/choir.mp3" },
                      "choir ",
                      { audio: "/assets/audio/general/fire.mp3" },
                      "fire ",
                      { audio: "/assets/audio/general/inspire.mp3" },
                      "inspire ",
                      { audio: "/assets/audio/general/liar.mp3" },
                      "liar ",
                    ],
                  },
                  {
                    text: [
                      { ukFlag: true, part: "/ɑɪə/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/choir-uk.mp3" },
                      "choir ",
                      { audio: "/assets/audio/general/fire-uk.mp3" },
                      "fire ",
                      { audio: "/assets/audio/general/inspire-uk.mp3" },
                      "inspire ",
                      { audio: "/assets/audio/general/liar-uk.mp3" },
                      "liar ",
                    ],
                  },
                  { lineBreak: true },
                  // er
                  {
                    text: [
                      { part: "/er/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/air.mp3" },
                      "air ",
                      { audio: "/assets/audio/general/hair.mp3" },
                      "hair ",
                      { audio: "/assets/audio/general/pair.mp3" },
                      "pair ",
                      { audio: "/assets/audio/general/where.mp3" },
                      "where ",
                    ],
                  },
                  {
                    text: [
                      { ukFlag: true, part: "/eə/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/air-uk.mp3" },
                      "air ",
                      { audio: "/assets/audio/general/hair-uk.mp3" },
                      "hair ",
                      { audio: "/assets/audio/general/pair-uk.mp3" },
                      "pair ",
                      { audio: "/assets/audio/general/where-uk.mp3" },
                      "where ",
                    ],
                  },
                  { lineBreak: true },
                  // ɪr / ɝ
                  {
                    text: [
                      { part: "/ɝː/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/bird.mp3" },
                      "bird ",
                      { audio: "/assets/audio/general/learn.mp3" },
                      "learn ",
                      { audio: "/assets/audio/general/were.mp3" },
                      "were ",
                      { audio: "/assets/audio/general/word.mp3" },
                      "word ",
                      { audio: "/assets/audio/general/world.mp3" },
                      "world ",
                      { audio: "/assets/audio/general/work.mp3" },
                      "work",
                    ],
                  },
                  {
                    text: [
                      { ukFlag: true, part: "/ɜː/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/bird-uk.mp3" },
                      "bird ",
                      { audio: "/assets/audio/general/learn-uk.mp3" },
                      "learn ",
                      { audio: "/assets/audio/general/were-uk.mp3" },
                      "were ",
                      { audio: "/assets/audio/general/word-uk.mp3" },
                      "word ",
                      { audio: "/assets/audio/general/world-uk.mp3" },
                      "world ",
                      { audio: "/assets/audio/general/work-uk.mp3" },
                      "work",
                    ],
                  },
                  { lineBreak: true },
                  // ɔːr
                  {
                    text: [
                      { part: "/ɔːr/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/door.mp3" },
                      "door ",
                      { audio: "/assets/audio/general/four.mp3" },
                      "four ",
                      { audio: "/assets/audio/general/north.mp3" },
                      "north ",
                      { audio: "/assets/audio/general/war.mp3" },
                      "war ",
                    ],
                  },
                  {
                    text: [
                      { ukFlag: true, part: "/ɔː/", type: "phonetics" },
                      " ",
                      { part: "•", type: "bold" },
                      " ",
                      { audio: "/assets/audio/general/door-uk.mp3" },
                      "door ",
                      { audio: "/assets/audio/general/four-uk.mp3" },
                      "four ",
                      { audio: "/assets/audio/general/north-uk.mp3" },
                      "north ",
                      { audio: "/assets/audio/general/war-uk.mp3" },
                      "war ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        {/* Letters 'a' /æ/ vs. 'e' /e/ */}
        <Section
          id="letters-a-e"
          label="Letters 'a' /æ/ vs. 'e' /e/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  //! and vs. end
                  // and
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/and.mp3",
                        part: "and",
                        type: "bold",
                      },
                      " ",
                      { part: "/ænd/", type: "phonetics" },
                      " ",
                      { part: "e", type: "portuguese" },
                    ],
                  },
                  // Bread and butter.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bread-and-butter.mp3",
                      },
                      "Bread ",
                      { type: "mark", part: "and" },
                      " butter. ",
                      { part: "Pão e manteiga.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // end
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/end.mp3",
                        part: "end",
                        type: "bold",
                      },
                      { part: "/end/", type: "phonetics" },
                    ],
                  },
                  // This is the end.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "This is the ",
                      { type: "mark", part: "end" },
                      ". ",
                      { part: "Isso é o fim.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! bad vs. bed
                  // bad
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bad.mp3",
                        part: "bad",
                        type: "bold",
                      },
                      " ",
                      { part: "/bæd/", type: "phonetics" },
                      " ",
                      { part: "ruim", type: "portuguese" },
                    ],
                  },
                  // I had a day.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I had a ",
                      { type: "mark", part: "bad" },
                      " day. ",
                      { part: "Eu tive um dia ruim.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // bed
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bed.mp3",
                        part: "bed",
                        type: "bold",
                      },
                      " ",
                      { part: "/bed/", type: "phonetics" },
                      " ",
                      { part: "cama", type: "portuguese" },
                    ],
                  },
                  // She went to bed early.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "She went to ",
                      { type: "mark", part: "bed" },
                      " early. ",
                      { part: "Ela foi para a cama cedo.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! bat vs. bet
                  // bat
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bat.mp3",
                        part: "bat",
                        type: "bold",
                      },
                      " ",
                      { part: "/bæt/", type: "phonetics" },
                      " ",
                      { part: "taco / morcego", type: "portuguese" },
                    ],
                  },
                  // He hit the ball with a bat.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "He hit the ball with a ",
                      { type: "mark", part: "bat" },
                      ". ",
                      {
                        part: "Ele acertou a bola com um bastão.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // bet
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bet.mp3",
                        part: "bet",
                        type: "bold",
                      },
                      " ",
                      { part: "/bet/", type: "phonetics" },
                      " ",
                      { part: "apostar", type: "portuguese" },
                    ],
                  },
                  // I bet you are right.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I ",
                      { type: "mark", part: "bet" },
                      " you are right. ",
                      {
                        part: "Aposto que você está certo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { hr: true },

                  //! dad vs. dead
                  // dad
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dad.mp3",
                        part: "dad",
                        type: "bold",
                      },
                      " ",
                      { part: "/dæd/", type: "phonetics" },
                      " ",
                      { part: "pai", type: "portuguese" },
                    ],
                  },
                  // My dad is cool.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "My ",
                      { type: "mark", part: "dad" },
                      " is cool. ",
                      { part: "Meu pai é legal.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // dead
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dead.mp3",
                        part: "dead",
                        type: "bold",
                      },
                      " ",
                      { part: "/ded/", type: "phonetics" },
                      " ",
                      { part: "morto(a)", type: "portuguese" },
                    ],
                  },
                  // The plant is dead.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "The plant is ",
                      { type: "mark", part: "dead" },
                      ". ",
                      { part: "A planta está morta.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! had vs. head
                  // had
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/had.mp3",
                        part: "had",
                        type: "bold",
                      },
                      " ",
                      { part: "/hæd/", type: "phonetics" },
                      " ",
                      { part: "teve / tinha", type: "portuguese" },
                    ],
                  },
                  // John had a good time.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "John ",
                      { type: "mark", part: "had" },
                      " a good time. ",
                      { part: "John se divertiu.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // head
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/head.mp3",
                        part: "head",
                        type: "bold",
                      },
                      " ",
                      { part: "/hed/", type: "phonetics" },
                      " ",
                      { part: "cabeça", type: "portuguese" },
                    ],
                  },
                  // He hit his head.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "He hit his ",
                      { type: "mark", part: "head" },
                      ". ",
                      { part: "Ele bateu a cabeça.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! man vs. men
                  // man
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/man.mp3",
                        part: "man",
                        type: "bold",
                      },
                      " ",
                      { part: "/mæn/", type: "phonetics" },
                      " ",
                      { part: "homem", type: "portuguese" },
                    ],
                  },
                  // That man is here.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "That ",
                      { type: "mark", part: "man" },
                      " is tall. ",
                      { part: "O homem está aqui..", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // men
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/men.mp3",
                        part: "men",
                        type: "bold",
                      },
                      " ",
                      { part: "/men/", type: "phonetics" },
                      " ",
                      { part: "homens", type: "portuguese" },
                    ],
                  },
                  // The men are here.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "The ",
                      { type: "mark", part: "men" },
                      " are here. ",
                      { part: "Os homens estão aqui.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! pan vs. pen
                  // pan
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/pan.mp3",
                        part: "pan",
                        type: "bold",
                      },
                      " ",
                      { part: "/pæn/", type: "phonetics" },
                      " ",
                      { part: "panela", type: "portuguese" },
                    ],
                  },
                  // Put the eggs in the pan.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "Put the eggs in the ",
                      { type: "mark", part: "pan" },
                      ". ",
                      {
                        part: "Coloque os ovos na panela.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // pen
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/pen.mp3",
                        part: "pen",
                        type: "bold",
                      },
                      " ",
                      { part: "/pen/", type: "phonetics" },
                      " ",
                      { part: "caneta", type: "portuguese" },
                    ],
                  },
                  // I wrote with a pen.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I wrote with a ",
                      { type: "mark", part: "pen" },
                      ". ",
                      {
                        part: "Eu escrevi com uma caneta.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { hr: true },

                  //! tan vs. ten
                  // tan
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/tan.mp3",
                        part: "tan",
                        type: "bold",
                      },
                      " ",
                      { part: "/tæn/", type: "phonetics" },
                      " ",
                      { part: "bronzeado", type: "portuguese" },
                    ],
                  },
                  // She got a tan at the beach.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "She got a ",
                      { type: "mark", part: "tan" },
                      " at the beach. ",
                      {
                        part: "Ela ficou bronzeada na praia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // ten
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/ten.mp3",
                        part: "ten",
                        type: "bold",
                      },
                      " ",
                      { part: "/ten/", type: "phonetics" },
                      " ",
                      { part: "dez", type: "portuguese" },
                    ],
                  },
                  // I got ten out of ten on the test.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I got ",
                      { type: "mark", part: "ten" },
                      " out of ",
                      { type: "mark", part: "ten" },
                      " on the test. ",
                      {
                        part: "Eu tirei nota máxima na prova.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        {/* Letters 'ea', 'ee' /iː/ vs. 'i' /ɪ/ */}
        <Section
          id="letters-ea-ee-i"
          label="Letters 'ea', 'ee' /iː/ vs. 'i' /ɪ/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  //! eat vs, it
                  // eat
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/eat.mp3",
                        part: "eat",
                        type: "bold",
                      },
                      " ",
                      { part: "/iːt/", type: "phonetics" },
                      " ",
                      { part: "comer", type: "portuguese" },
                    ],
                  },
                  // I don’t usually eat breakfast.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I don’t usually ",
                      { type: "mark", part: "eat" },
                      " breakfast. ",
                      {
                        part: "Normalmente eu não tomo café da manhã.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // it
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/it.mp3",
                        part: "it",
                        type: "bold",
                      },
                      " ",
                      { part: "/ɪt/", type: "phonetics" },
                      " ",
                      { part: "isso / ele / ela", type: "portuguese" },
                    ],
                  },
                  // It is very cold today.
                  {
                    text: [
                      { type: "mark", part: "It" },
                      " is very cold today. ",
                      { part: "Está muito frio hoje.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! feel vs. fill
                  // feel
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/feel.mp3",
                        part: "feel",
                        type: "bold",
                      },
                      " ",
                      { part: "/fiːl/", type: "phonetics" },
                      " ",
                      { part: "sentir", type: "portuguese" },
                    ],
                  },
                  // I feel tired.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I ",
                      { type: "mark", part: "feel" },
                      " tired. ",
                      { part: "Eu me sinto cansado.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // fill
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/fill.mp3",
                        part: "fill",
                        type: "bold",
                      },
                      " ",
                      { part: "/fɪl/", type: "phonetics" },
                      " ",
                      { part: "encher", type: "portuguese" },
                    ],
                  },
                  // Fill the glass, please.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      { type: "mark", part: "Fill" },
                      " the glass, please. ",
                      { part: "Encha o copo, por favor.", type: "portuguese" },
                    ],
                  },
                  { hr: true },

                  //! sheep vs. ship
                  // sheep
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/sheep.mp3",
                        part: "sheep",
                        type: "bold",
                      },
                      " ",
                      { part: "/ʃiːp/", type: "phonetics" },
                      " ",
                      { part: "ovelha", type: "portuguese" },
                    ],
                  },
                  // I saw a sheep on the mark.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I saw a ",
                      { type: "mark", part: "sheep" },
                      " on the farm. ",
                      {
                        part: "Eu vi uma ovelha na fazenda.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },
                  // ship
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/ship.mp3",
                        part: "ship",
                        type: "bold",
                      },
                      " ",
                      { part: "/ʃɪp/", type: "phonetics" },
                      " ",
                      { part: "navio", type: "portuguese" },
                    ],
                  },
                  // This ship is huge.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "This ",
                      { type: "mark", part: "ship" },
                      " arrived late. ",
                      {
                        part: "Este navio é enorme.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { hr: true },

                  //! sleep vs. slip
                  // sleep
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/sleep.mp3",
                        part: "sleep",
                        type: "bold",
                      },
                      " ",
                      { part: "/sliːp/", type: "phonetics" },
                      " ",
                      { part: "dormir", type: "portuguese" },
                    ],
                  },
                  // I need to sleep.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "I need to ",
                      { type: "mark", part: "sleep" },
                      ". ",
                      { part: "Eu preciso dormir.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },
                  // slip
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/slip.mp3",
                        part: "slip",
                        type: "bold",
                      },
                      " ",
                      { part: "/slɪp/", type: "phonetics" },
                      " ",
                      { part: "escorregar", type: "portuguese" },
                    ],
                  },
                  // Becareful not to slip.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      "Be careful not to ",
                      { type: "mark", part: "slip" },
                      ". ",
                      {
                        part: "Cuidado para não escorregar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="silent-t" label="Silent 't'" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // center
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/center.mp3",
                        part: "center",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/cen(t)er.mp3",
                        part: "cen(t)er",
                      },
                      " ",
                      {
                        part: "centro",
                        type: "portuguese",
                      },
                    ],
                  },
                  // dentist
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dentist.mp3",
                        part: "dentist",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/den(t)ist.mp3",
                        part: "den(t)ist",
                      },
                      " ",
                      {
                        part: "dentista",
                        type: "portuguese",
                      },
                    ],
                  },
                  // indentify
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/identify.mp3",
                        part: "identify",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/iden(t)ify.mp3",
                        part: "iden(t)ify",
                      },
                      " ",
                      {
                        part: "identificar",
                        type: "portuguese",
                      },
                    ],
                  },
                  // identity
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/identity.mp3",
                        part: "identity",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/iden(t)ity.mp3",
                        part: "iden(t)ity",
                      },
                      " ",
                      {
                        part: "identidade",
                        type: "portuguese",
                      },
                    ],
                  },
                  // international
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/in(t)ernational.mp3",
                        part: "in(t)ernational",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/international.mp3",
                        part: "international",
                      },
                      " ",
                      {
                        part: "internacional",
                        type: "portuguese",
                      },
                    ],
                  },
                  // international
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/in(t)ervention.mp3",
                        part: "in(t)ervention",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/intervention.mp3",
                        part: "intervention",
                      },
                      " ",
                      {
                        part: "intervenção",
                        type: "portuguese",
                      },
                    ],
                  },
                  // interrupt
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/interrupt.mp3",
                        part: "in(t)errupt",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/in(t)errupt.mp3",
                        part: "interrupt",
                      },
                      " ",
                      {
                        part: "interromper",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section id="flap-t" label="Flap 't'" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "bo",
                      },
                      {
                        part: "tt",
                        type: "mark",
                      },
                      {
                        part: "om",
                      },
                      " ",
                      {
                        part: "/ˈbɑː.t̬əm/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "fundo, parte de baixo; bunda",
                        type: "portuguese",
                      },
                    ],
                  },
                  // butter
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "bu",
                      },
                      {
                        part: "tt",
                        type: "mark",
                      },
                      {
                        part: "er",
                      },
                      " ",
                      {
                        part: "/ˈbʌt̬.ɚ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "manteiga",
                        type: "portuguese",
                      },
                    ],
                  },
                  // party
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "par",
                      },
                      {
                        part: "t",
                        type: "mark",
                      },
                      {
                        part: "y",
                      },
                      " ",
                      {
                        part: "/ˈpɑːr.t̬i/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "festa, ???",
                        type: "portuguese",
                      },
                    ],
                  },
                  // photo
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "pho",
                      },
                      {
                        part: "t",
                        type: "mark",
                      },
                      {
                        part: "o",
                      },
                      " ",
                      {
                        part: "/ˈfoʊ.t̬oʊ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "foto",
                        type: "portuguese",
                      },
                    ],
                  },
                  // latter
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "la",
                      },
                      {
                        part: "t",
                        type: "mark",
                      },
                      {
                        part: "er",
                      },
                      " ",
                      {
                        part: "/ˈleɪ.t̬ɚ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "mais tarde (tempo)",
                        type: "portuguese",
                      },
                    ],
                  },
                  // water
                  {
                    text: [
                      {
                        audio: "/assets/audio/",
                        part: "wa",
                      },
                      {
                        part: "t",
                        type: "mark",
                      },
                      {
                        part: "er",
                      },
                      " ",
                      {
                        part: "/ˈwɔː.t̬ər/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "água",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
