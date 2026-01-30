import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function PhoneticsLetters() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Phonetics + Letters" />
      <div className="line-break">
        <Contents
          items={[
            // Vowels
            {
              href: "vowels",
              label: "Vowels",
            },
            // Diphthongs
            {
              href: "diphthongs",
              label: "Diphthongs",
            },
            // Consonants
            {
              href: "consonants",
              label: "Consonants",
            },
            // Rhotic (Vowels + R)
            {
              href: "rhotic-vowels-r",
              label: "Rhotic (Vowels + R)",
              phonetics: "/i/",
            },
            {
              title: [
                {
                  part: "Letters",
                  type: "bold",
                },
              ],
            },
            {
              title: [
                {
                  part: "a...",
                  type: "bold",
                },
              ],
            },
            // Letters 'a':
            {
              href: "letter-a",
              label: [
                "Letters 'a':  ",
                {
                  part: "/æ/, /ɑː/, /eɪ/, /ə/",
                  type: "phonetics",
                },
              ],
            },
            // Letters 'ai':
            {
              href: "letters-ai",
              label: ["Letters 'ai':", { part: "/e/", type: "phonetics" }],
            },
            // Letters 'au':
            {
              href: "letters-au",
              label: ["Letters 'au':  ", { part: "/ɔː/", type: "phonetics" }],
            },
            // Letter 'aw', 'awe':
            {
              href: "letters-aw-awe",
              label: [
                "Letter 'aw', 'awe':  ",
                { part: "/ɔː/", type: "phonetics" },
              ],
            },
            {
              title: [
                {
                  part: "e...",
                  type: "bold",
                },
              ],
            },
            // Letter 'e' silent
            {
              href: "letter-e-silent",
              label: "Letter 'e' silent",
            },
            // Letters 'ea':
            {
              href: "letters-ea",
              label: [
                "Letters 'ea':  ",
                { part: "/iː/, /e/", type: "phonetics" },
              ],
            },
            // Letters 'eau':
            {
              href: "letters-eau",
              label: ["Letters 'eau':  ", { part: "/oʊ/", type: "phonetics" }],
            },
            // Letters 'ee':
            {
              href: "letters-ee",
              label: ["Letters 'ee':  ", { part: "/iː/", type: "phonetics" }],
            },
            // Letters 'ei':
            {
              href: "letters-ei",
              label: ["Letters 'ei':  ", { part: "/eɪ/", type: "phonetics" }],
            },
            // Letter 'et':
            {
              href: "letters-et",
              label: ["Letter 'et':  ", { part: "/eɪ/", type: "phonetics" }],
            },
            // Letters 'ey':
            {
              href: "letters-ey",
              label: [
                "Letters 'ey': ",
                { part: "/i/, /eɪ/", type: "phonetics" },
              ],
            },
            // Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y':
            {
              href: "letters-e-ea-ee-ei-eo-ey-i-ie-y",
              label: [
                "Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y':  ",
                { part: "/iː/", type: "phonetics" },
              ],
            },
            {
              title: [
                {
                  part: "i...",
                  type: "bold",
                },
              ],
            },
            // Letter 'i':
            {
              href: "letter-i",
              label: [
                "Letter 'i': ",
                { part: "/i/, /ɪ/, /ə/, /aɪ/, /ɑː/", type: "phonetics" },
              ],
            },
            // Letters 'ie':
            {
              href: "letters-ie",
              label: [
                "Letters 'ie':  ",
                { part: "/i/, /aɪ/", type: "phonetics" },
              ],
            },
            {
              title: [
                {
                  part: "n...",
                  type: "bold",
                },
              ],
            },
            // Letters 'n', 'ng':
            {
              href: "letters-n-ng",
              label: [
                "Letters 'n', 'ng':  ",
                { part: "/ŋ/", type: "phonetics" },
              ],
            },
            {
              title: [
                {
                  part: "o...",
                  type: "bold",
                },
              ],
            },
            // Letter 'o':
            {
              href: "letter-o",
              label: [
                "Letter 'o':  ",
                { part: "/ɑː/, /ɔː/, /oʊ/", type: "phonetics" },
              ],
            },
            // Letters 'oa':
            {
              href: "letters-oa",
              label: [
                "Letters 'oa':  ",
                { part: "/ɔː/, /oʊ/", type: "phonetics" },
              ],
            },
            // Letters 'oo':
            {
              href: "letters-oo",
              label: [
                "Letters 'oo':  ",
                { part: "/ʌ/, /ʊ/, /uː/", type: "phonetics" },
              ],
            },
            // Letters 'ous':
            {
              href: "letters-ous",
              label: ["Letters 'ous':  ", { part: "/əs/", type: "phonetics" }],
            },
            // Letters 'ow':
            {
              href: "letters-ow",
              label: [
                "Letters 'ow':  ",
                { part: "/oʊ/, /aʊ/", type: "phonetics" },
              ],
            },
            {
              title: [
                {
                  part: "u...",
                  type: "bold",
                },
              ],
            },
            // Letter 'u':
            {
              href: "letter-u",
              label: [
                "Letter 'u':  ",
                { part: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/", type: "phonetics" },
              ],
            },
            // Letters 'ui':
            {
              href: "letters-ui",
              label: [
                "Letters 'ui':  ",
                { part: "/ɪ/, /aɪ/", type: "phonetics" },
              ],
            },
            // Letters 'us':
            {
              href: "letters-us",
              label: ["Letters 'us':  ", { part: "/əs/", type: "phonetics" }],
            },
            {
              lineBreak: true,
            },
            // Letters 'sh':
            {
              href: "letters-sh",
              label: ["Letters 'sh':  ", { part: "/ʃ/", type: "phonetics" }],
            },
            // Letters '(t)ch':
            {
              href: "letters-(t)ch",
              label: [
                "Letters '(t)ch':  ",
                { part: "/tʃ/, /ʃ/, /k/", type: "phonetics" },
              ],
            },
            // Letter 't' and its sounds
            {
              href: "letter-t-sounds",
              label: ["Letter 't'  and its sounds"],
            },
            // Letter 'y':
            {
              href: "letter-y",
              label: [
                "Letter 'y':  ",
                { part: "/i/, /j/, /aɪ/", type: "phonetics" },
              ],
            },

            // Comparison
            {
              title: [
                {
                  icons: ["compare"],
                },
                {
                  part: "Comparison",
                  type: "bold",
                },
              ],
            },
            // Letters 'a': /æ/ vs. 'e': /e/:
            {
              href: "letters-a-vs-e",
              label: [
                "Letters 'a': ",
                {
                  part: "/æ/ ",
                  type: "phonetics",
                },
                " ",
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'e': ",
                {
                  part: "/e/",
                  type: "phonetics",
                },
                ": ",
              ],
            },
            // Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/
            {
              href: "letters-ea-ee-i",
              label: [
                "Letters 'ea', 'ee': ",
                {
                  part: "/iː/ ",
                  type: "phonetics",
                },
                " ",
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'i': ",
                {
                  part: "/ɪ/",
                  type: "phonetics",
                },
              ],
            },
            // Letters 'n': /n/ vs. 'ng': /ŋ/
            {
              href: "letters-n-ng",
              label: [
                "Letters 'n':  ",
                {
                  part: "/n/",
                  type: "phonetics",
                },
                " ",
                {
                  part: "vs.",
                  type: "connector",
                },
                " 'ng': ",
                {
                  part: "/ŋ/",
                  type: "phonetics",
                },
              ],
            },
            // Letters 'oo' vs. 'u':
            {
              href: "letters-oo-vs-u",
              label: [
                "Letters 'oo':  ",
                {
                  part: "/uː/",
                  type: "phonetics",
                },
                " ",
                {
                  part: "vs.",
                  type: "connector",
                },
                " 'u': ",
                {
                  part: "/ʊ/",
                  type: "phonetics",
                },
              ],
            },
            // Letters 'sh': /ʃ/ vs. 'ch': /tʃ/:
            {
              href: "letters-sh-vs-ch",
              label: [
                "Letters 'sh': ",
                " ",
                {
                  part: "/ʃ/ ",
                  type: "phonetics",
                },
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'ch': ",
                {
                  part: "/tʃ/",
                  type: "phonetics",
                },
              ],
            },
            // Letters 't': /t/ vs. 'ch': /tʃ/:
            {
              href: "letters-sh-vs-ch",
              label: [
                "Letters 't': ",
                " ",
                {
                  part: "/t/ ",
                  type: "phonetics",
                },
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'ch': ",
                {
                  part: "/tʃ/",
                  type: "phonetics",
                },
              ],
            },
          ]}
        />

        {/* Check out the phonetic sounds of American English plus British variants. */}
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
                      },
                      {
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

        {/* Letters 'a': /æ/, /ɑː/, /eɪ/, /ə/ */}
        <Section
          id="letter-a"
          label="Letters 'a': /æ/, /ɑː/, /eɪ/, /ə/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // /æ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
                      },
                      {
                        part: "/æ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // apple
                      {
                        audio: "/assets/audio/general/apple.mp3",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "pple",
                        type: "bold",
                      },
                      " ",
                      { part: "/ˈæp.əl/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // anniversary
                      {
                        audio: "/assets/audio/general/anniversary.mp3",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "nniversary",
                        type: "bold",
                      },
                      " ",
                      { part: "/ˌæn.əˈvɝː.sɚ.i/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // bad
                      {
                        audio: "/assets/audio/general/bad.mp3",
                      },
                      {
                        part: "b",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "d ",
                      { part: "/bæd/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // bat
                      {
                        audio: "/assets/audio/general/bat.mp3",
                      },
                      {
                        part: "b",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "t ",
                      { part: "/bæt/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // cap
                      {
                        audio: "/assets/audio/general/cap.mp3",
                      },
                      {
                        part: "c",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "p ",
                      { part: "/cæp/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // cat
                      {
                        audio: "/assets/audio/general/cat.mp3",
                      },
                      {
                        part: "c",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "t ",
                      { part: "/kæt/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // fat
                      {
                        audio: "/assets/audio/general/fat.mp3",
                      },
                      {
                        part: "f",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "t ",
                      { part: "/fæt/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // hat
                      {
                        audio: "/assets/audio/general/hat.mp3",
                      },
                      {
                        part: "h",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "t ",
                      { part: "/hæt/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // have
                      {
                        audio: "/assets/audio/general/have.mp3",
                      },
                      {
                        part: "h",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "ve ",
                      { part: "/hæv/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // man
                      {
                        audio: "/assets/audio/general/man.mp3",
                      },
                      {
                        part: "m",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      "n ",
                      { part: "/mæn/", type: "phonetics" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // • It’s an apple.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/its-an-apple.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " It’s an ",
                      { type: "mark", part: "apple" },
                      ". ",
                      { part: "É uma maçã.", type: "portuguese" },
                    ],
                  },
                  { hr: true },
                  // /ɑː/ — long
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                      },
                      {
                        part: "/ɑː/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // calm
                      {
                        audio: "/assets/audio/general/calm.mp3",
                      },
                      {
                        part: "c",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "lm",
                        type: "bold",
                      },
                      " ",
                      { part: "/kɑːm/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // palm
                      {
                        audio: "/assets/audio/general/palm.mp3",
                      },
                      {
                        part: "p",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "lm",
                        type: "bold",
                      },
                      " ",
                      { part: "/pɑːm/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // father
                      {
                        audio: "/assets/audio/general/father.mp3",
                      },
                      {
                        part: "f",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "ther",
                        type: "bold",
                      },
                      " ",
                      { part: "/ˈfɑːðər/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // spa
                      {
                        audio: "/assets/audio/general/spa.mp3",
                      },
                      {
                        part: "sp",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      " ",
                      { part: "/spɑː/", type: "phonetics" },
                      " ",
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // • Father John is at the church.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/father-john-is-at-the-church.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " ",
                      { type: "mark", part: "Father" },
                      " John is at the church. ",
                      {
                        part: 'O padre "John" está na igreja.',
                        type: "portuguese",
                      },
                    ],
                  },
                  { hr: true },
                  // /eɪ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                        part: "/eɪ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // ate
                      {
                        audio: "/assets/audio/general/ate.mp3",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "te",
                        type: "bold",
                      },
                      " ",
                      { part: "/eɪt/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // chase
                      {
                        audio: "/assets/audio/general/chase.mp3",
                      },
                      {
                        part: "ch",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "se",
                        type: "bold",
                      },
                      " ",
                      { part: "/tʃeɪs/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // day
                      {
                        audio: "/assets/audio/general/day.mp3",
                        part: "d",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "y",
                        type: "bold",
                      },
                      " ",
                      { part: "/deɪ/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // game
                      {
                        audio: "/assets/audio/general/game.mp3",
                        part: "g",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "me",
                        type: "bold",
                      },
                      " ",
                      { part: "/ɡeɪm/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // made
                      {
                        audio: "/assets/audio/general/made.mp3",
                        part: "m",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "de",
                        type: "bold",
                      },
                      " ",
                      { part: "/meɪd/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // pay
                      {
                        audio: "/assets/audio/general/pay.mp3",
                        part: "p",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "y",
                        type: "bold",
                      },
                      " ",
                      { part: "/peɪ/", type: "phonetics" },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // tape
                      {
                        audio: "/assets/audio/general/tape.mp3",
                        part: "t",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "pe",
                        type: "bold",
                      },
                      " ",
                      { part: "/teɪp/", type: "phonetics" },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // Have a nice day.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/have-a-nice-day.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Have a nice ",
                      { type: "mark", part: "day" },
                      "! ",
                      { part: "Tenha um bom dia!", type: "portuguese" },
                    ],
                  },

                  { hr: true },

                  // /ə/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                      },
                      {
                        part: "/ə/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // banana
                      {
                        audio: "/assets/audio/general/banana.mp3",
                      },
                      {
                        part: "b",
                        type: "bold",
                      },
                      {
                        part: "a",
                        type: "bold-mark",
                      },
                      {
                        part: "nana",
                        type: "bold",
                      },
                      " ",
                      { part: "/bəˈnænə/", type: "phonetics" },
                    ],
                  },
                  { lineBreak: true },
                  // I prefer bananas.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-prefer-bananas.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I prefer ",
                      { type: "mark", part: "banana" },
                      "s. ",
                      { part: "Eu prefiro de bananas.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ai" label="Letters 'ai:' /e/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-au" label="Letters 'au': /ɔː/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // audio
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/audio.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/*  Letters 'aw', 'awe': /ɔː/ */}
        <Section
          id="letters-aw-awe"
          label="Letters 'aw', 'awe': /ɔː/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // awe
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/awe.mp3",
                        part: "awe",
                        type: "bold",
                      },
                      " ",
                      { part: "/ɔː/", type: "phonetics" },
                      " ",
                      { part: "admiração; espanto", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "We watched in ",
                      { type: "mark", part: "awe" },
                      ". ",
                      {
                        part: "Nós assistimos com admiração.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // law
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/law.mp3",
                        part: "law",
                        type: "bold",
                      },
                      " ",
                      { part: "/lɔː/", type: "phonetics" },
                      " ",
                      { part: "lei", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "This is the ",
                      { type: "mark", part: "law" },
                      ". ",
                      { part: "Esta é a lei.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },

                  // saw
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/saw.mp3",
                        part: "saw",
                        type: "bold",
                      },
                      " ",
                      { part: "/sɔː/", type: "phonetics" },
                      " ",
                      { part: "viu / serra", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "I ",
                      { type: "mark", part: "saw" },
                      " a bird. ",
                      { part: "Eu vi um pássaro.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },

                  // draw
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/draw.mp3",
                        part: "draw",
                        type: "bold",
                      },
                      " ",
                      { part: "/drɔː/", type: "phonetics" },
                      " ",
                      {
                        part: "desenhar / puxar / empatar",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      "Let’s ",
                      { type: "mark", part: "draw" },
                      " a picture. ",
                      {
                        part: "Vamos desenhar um desenho.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },

                  // raw
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/raw.mp3",
                        part: "raw",
                        type: "bold",
                      },
                      " ",
                      { part: "/rɔː/", type: "phonetics" },
                      " ",
                      { part: "cru", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "The meat is ",
                      { type: "mark", part: "raw" },
                      ". ",
                      { part: "A carne está crua.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },

                  // claw
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/claw.mp3",
                        part: "claw",
                        type: "bold",
                      },
                      " ",
                      { part: "/klɔː/", type: "phonetics" },
                      " ",
                      { part: "garra", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "The cat has a sharp ",
                      { type: "mark", part: "claw" },
                      ". ",
                      {
                        part: "O gato tem uma garra afiada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },

                  // jaw
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/jaw.mp3",
                        part: "jaw",
                        type: "bold",
                      },
                      " ",
                      { part: "/dʒɔː/", type: "phonetics" },
                      " ",
                      { part: "mandíbula", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "My ",
                      { type: "mark", part: "jaw" },
                      " hurts. ",
                      { part: "Minha mandíbula dói.", type: "portuguese" },
                    ],
                  },
                  { lineBreak: true },

                  { hr: true },

                  // awesome
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/awesome.mp3",
                        part: "awesome",
                        type: "bold",
                      },
                      " ",
                      { part: "/ˈɔːsəm/", type: "phonetics" },
                      " ",
                      { part: "incrível / impressionante", type: "portuguese" },
                    ],
                  },
                  {
                    text: [
                      "That movie is ",
                      { type: "mark", part: "awesome" },
                      ". ",
                      { part: "Esse filme é incrível.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letter-e-silent" label="Letter 'e' silent" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ea" label="Letters 'ea': /iː/, /e/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letters 'eau': /oʊ/ */}
        <Section id="letters-eau" label="Letters 'eau': /oʊ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ee" label="Letters 'ee': /iː/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // b...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ei" label="Letters 'ei': /eɪ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-et" label="Letter 'et': /eɪ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ey" label="Letters 'ey': /i/, /eɪ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // /i/
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i.mp3",
                      },
                      {
                        part: "/i/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // abbey
                      {
                        audio: "/assets/audio/general/abbey.mp3",
                      },
                      {
                        part: "abb",
                      },
                      {
                        part: "ey",
                        type: "mark",
                      },
                      {
                        part: "/ˈæb.i/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // disney
                      {
                        audio: "/assets/audio/general/disney.mp3",
                      },
                      {
                        part: "Disn",
                      },
                      {
                        part: "ey",
                        type: "mark",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // ...
                      {
                        audio: "/assets/audio/general/.mp3",
                      },
                      {
                        part: "...",
                      },
                      {
                        part: "...",
                        type: "mark",
                      },
                      {
                        part: "...",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y': /iː/ */}
        <Section
          id="letters-e-ea-ee-ei-eo-ey-i-ie-y"
          label="Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y': /iː/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letter 'i': /i/, /ɪ/, /ə/, /aɪ/, /ɑː/ */}
        <Section
          id="letter-i"
          label="Letter 'i': /i/, /ɪ/, /ə/, /aɪ/, /ɑː/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ie" label="Letters 'ie': /i/, /aɪ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-n-ng" label="Letters 'n', 'ng': /ŋ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // letter 'n'
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                      },
                      {
                        part: "/ŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      {
                        part: "'n'",
                        type: "",
                      },
                    ],
                  },
                  //. words...
                  {
                    text: [
                      // anger
                      {
                        audio: "/assets/audio/general/anger.mp3",
                      },
                      {
                        part: "a",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      {
                        part: "ger",
                      },
                      {
                        part: "/ˈæŋ.ɡɚ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "raiva, braveza",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // angry
                      {
                        audio: "/assets/audio/general/angry.mp3",
                      },
                      {
                        part: "a",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      {
                        part: "gry",
                      },
                      {
                        part: "/ˈæŋ.ɡri/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "com raiva",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                      },
                      {
                        part: "/ŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      {
                        part: "'ng'",
                        type: "",
                      },
                    ],
                  },
                  //. words...
                  {
                    text: [
                      // going
                      {
                        audio: "/assets/audio/general/going.mp3",
                      },
                      {
                        part: "goi",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "em andamento",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // interesting
                      {
                        audio: "/assets/audio/general/interesting.mp3",
                      },
                      {
                        part: "interesti",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "interessante",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // interesting
                      {
                        audio: "/assets/audio/general/thing.mp3",
                      },
                      {
                        part: "thi",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "coisa",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letter-o" label="Letter 'o': /ɑː/, /ɔː/, /oʊ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-oa" label="Letters 'oa': /ɔː/, /oʊ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letters 'oo': /ʌ/, /ʊ/, /uː/ */}
        <Section
          id="letters-oo"
          label="Letters 'oo': /ʌ/, /ʊ/, /uː/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ous" label="Letters 'ous': /əs/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ow" label="Letters 'ow': /oʊ/, /aʊ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letter s'u': /uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/ */}
        <Section
          id="letter-u"
          label="Letters 'u': /uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-ui" label="Letters 'ui': /ɪ/, /aɪ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-us" label="Letters 'us': /əs/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ..
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="letters-sh" label="Letters 'sh': /ʃ/" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letters '(t)ch': /tʃ/, /ʃ/, /k/ */}
        <Section
          id="letters-(t)ch"
          label="Letters '(t)ch': /tʃ/, /ʃ/, /k/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letter 't': /t/ and its sounds */}
        <Section
          id="letter-t-sounds"
          label="Letter 't': /t/ and its sounds"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
          <Paragraph
            blocks={[
              {
                lines: [
                  // 't' silent in /nt/
                  {
                    text: [
                      {
                        part: "'t' silent in",
                        type: "bold",
                      },
                      " ",
                      {
                        part: "/nt/",
                        type: "phonetics",
                      },
                    ],
                  },
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
                        audio: "/assets/audio/general/international.mp3",
                        part: "international",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/in(t)ernational.mp3",
                        part: "in(t)ernational",
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
                        audio: "/assets/audio/general/intervention.mp3",
                        part: "intervention",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/in(t)ervention.mp3",
                        part: "in(t)ervention",
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
                        part: "interrupt",
                      },
                      " ",
                      {
                        part: "or",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/in(t)errupt.mp3",
                        part: "in(t)errupt",
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
          <Paragraph
            blocks={[
              {
                lines: [
                  // Flap t
                  {
                    text: [
                      {
                        part: "Flap t",
                        type: "bold",
                      },
                    ],
                  },
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bottom-us.mp3",
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
                        audio: "/assets/audio/general/butter-us.mp3",
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
                        audio: "/assets/audio/general/party-us.mp3",
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
                        part: "festa, grupo, partido político",
                        type: "portuguese",
                      },
                    ],
                  },
                  // photo
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/photo-us.mp3",
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
                        audio: "/assets/audio/general/later-us.mp3",
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
                        audio: "/assets/audio/general/water-us.mp3",
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

        <Section id="letter-y" label="Letter 'y': /aɪ/, /i/, /j/, " heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  // /aɪ/
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                      },
                      {
                        part: "/aɪ/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // fly
                      {
                        audio: "/assets/audio/general/fly.mp3",
                      },
                      {
                        part: "fl",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/flaɪ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "voar",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // type
                      {
                        audio: "/assets/audio/general/type.mp3",
                      },
                      {
                        part: "t",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "pe",
                      },
                      " ",
                      {
                        part: "/flaɪ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "tipo",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  // /i/
                  {
                    text: [
                      // /i/
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                      },
                      {
                        part: "/i/",
                        type: "phonetics",
                      },
                    ],
                  },
                  // words...
                  {
                    text: [
                      // angry
                      {
                        audio: "/assets/audio/general/angry.mp3",
                      },
                      {
                        part: "angr",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "/ˈæŋ.ɡri/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "com raiva",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // crazy
                      {
                        audio: "/assets/audio/general/crazy.mp3",
                      },
                      {
                        part: "craz",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "/ˈkreɪ.zi/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "louco(a)",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // hungry
                      {
                        audio: "/assets/audio/general/hungry.mp3",
                      },
                      {
                        part: "hungr",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "/ˈhʌŋ.ɡri/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "com fome",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // salty
                      {
                        audio: "/assets/audio/general/salty.mp3",
                      },
                      {
                        part: "salt",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "/ˈsɑːl.t̬i/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "salgado",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // sleepy
                      {
                        audio: "/assets/audio/general/sleepy.mp3",
                      },
                      {
                        part: "sleep",
                      },
                      {
                        part: "y",
                        type: "mark",
                      },
                      {
                        part: "/ˈsliː.pi/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "sonolent",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Comparison */}

        {/*  Letters 'a': /æ/ vs. 'e': /e/ */}
        <Section
          id="letters-a-vs-e"
          label="Letters 'a': /æ/ vs. 'e': /e/"
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
                      },
                      {
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
                      {
                        bullet: true,
                      },
                      " Bread ",
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
                      " ",
                      { part: "/end/", type: "phonetics" },
                    ],
                  },
                  // This is the end.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/this-is-the-end.mp3",
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
                        audio: "/assets/audio/general/i-had-a-bad-day.mp3",
                      },
                      "I had a ",
                      { type: "mark", part: "bad" },
                      " day. ",
                      { part: "Eu tive um péssimo dia.", type: "portuguese" },
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
                        audio:
                          "/assets/audio/general/she-went-to-bed-early.mp3",
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
                        audio:
                          "/assets/audio/general/he-hit-the-ball-with-a-bat.mp3",
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
                        audio: "/assets/audio/general/i-bet-you-were-right.mp3",
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
                        audio: "/assets/audio/general/my-dad-is-cool.mp3",
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
                        audio: "/assets/audio/general/the-plant-is-dead.mp3",
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
                        audio: "/assets/audio/general/john-had-a-good-time.mp3",
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
                        audio: "/assets/audio/general/he-hit-his-head.mp3",
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
                        audio: "/assets/audio/general/the-man-is-here.mp3",
                      },
                      "The ",
                      { type: "mark", part: "man" },
                      " is here. ",
                      { part: "O homem está aqui.", type: "portuguese" },
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
                        audio: "/assets/audio/general/the-men-are-here.mp3",
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
                        audio:
                          "/assets/audio/general/put-the-eggs-in-the-pan.mp3",
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
                        audio: "/assets/audio/general/i-wrote-with-a-pen.mp3",
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

                  //! shad vs. shed
                  // shad
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/shad.mp3",
                        part: "shad",
                        type: "bold",
                      },
                      " ",
                      { part: "/ʃæd/", type: "phonetics" },
                      " ",
                      {
                        part: "peixe shad (tipo de arenque)",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Example shad
                  {
                    text: [
                      "The fisherman caught a ",
                      { type: "mark", part: "shad" },
                      ". ",
                      {
                        part: "O pescador pegou um peixe shad.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },

                  // shed
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/shed.mp3",
                        part: "shed",
                        type: "bold",
                      },
                      " ",
                      { part: "/ʃed/", type: "phonetics" },
                      " ",
                      {
                        part: "galpão / derramar / perder (pele, lágrimas)",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Example shed
                  {
                    text: [
                      "He built a ",
                      { type: "mark", part: "shed" },
                      " in the yard. ",
                      {
                        part: "Ele construiu um galpão no quintal.",
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
                        audio:
                          "/assets/audio/general/she-got-a-tan-at-the-beach.mp3",
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
                        audio:
                          "/assets/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
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

                  { hr: true },

                  //! than vs. then
                  // than
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/than.mp3",
                        part: "than",
                        type: "bold",
                      },
                      " ",
                      { part: "/ðæn/", type: "phonetics" },
                      " ",
                      { part: "do que (comparação)", type: "portuguese" },
                    ],
                  },
                  // Example than
                  {
                    text: [
                      "She is taller ",
                      { type: "mark", part: "than" },
                      " me. ",
                      {
                        part: "Ela é mais alta do que eu.",
                        type: "portuguese",
                      },
                    ],
                  },
                  { lineBreak: true },

                  // then
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/then.mp3",
                        part: "then",
                        type: "bold",
                      },
                      " ",
                      { part: "/ðen/", type: "phonetics" },
                      " ",
                      { part: "então / depois", type: "portuguese" },
                    ],
                  },
                  // Example then
                  {
                    text: [
                      "Finish your work, ",
                      { type: "mark", part: "then" },
                      " you can rest. ",
                      {
                        part: "Termine seu trabalho, depois você pode descansar.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/* Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/ */}
        <Section
          id="letters-ea-ee-i"
          label="Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/"
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
                        audio:
                          "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
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
                      {
                        audio:
                          "/assets/audio/general/it-is-very-cold-today.mp3",
                      },
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
                        audio: "/assets/audio/general/i-feel-tired.mp3",
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
                        audio:
                          "/assets/audio/general/fill-the-glass-please.mp3",
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
                        audio:
                          "/assets/audio/general/i-saw-a-sheep-on-the-farm.mp3",
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
                  {
                    audio:
                      "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
                  }, // This ship is huge.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/this-ship-is-huge.mp3",
                      },
                      "This ",
                      { type: "mark", part: "ship" },
                      " is huge. ",
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
                        audio: "/assets/audio/general/i-need-to-sleep.mp3",
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
                        audio:
                          "/assets/audio/general/becareful-not-to-slip.mp3",
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

        {/* Letters 'n': /n/ vs. 'ng': /ŋ/ */}
        <Section
          id="letters-n-ng"
          label="Letters 'n': /n/ vs. 'ng': /ŋ/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // letter 'n'
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                      },
                      {
                        part: "/ŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      {
                        part: "'n'",
                        type: "",
                      },
                    ],
                  },
                  //. words...
                  {
                    text: [
                      // anger
                      {
                        audio: "/assets/audio/general/anger.mp3",
                      },
                      {
                        part: "a",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      {
                        part: "ger",
                      },
                      {
                        part: "/ˈæŋ.ɡɚ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "raiva, braveza",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // angry
                      {
                        audio: "/assets/audio/general/angry.mp3",
                      },
                      {
                        part: "a",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      {
                        part: "gry",
                      },
                      {
                        part: "/ˈæŋ.ɡri/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "com raiva",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                      },
                      {
                        part: "/ŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      {
                        part: "'ng'",
                        type: "",
                      },
                    ],
                  },
                  //. words...
                  {
                    text: [
                      // going
                      {
                        audio: "/assets/audio/general/going.mp3",
                      },
                      {
                        part: "goi",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "em andamento",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // interesting
                      {
                        audio: "/assets/audio/general/interesting.mp3",
                      },
                      {
                        part: "interesti",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "interessante",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                      // interesting
                      {
                        audio: "/assets/audio/general/thing.mp3",
                      },
                      {
                        part: "thi",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/ing/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "coisa",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/*  Letters 'oo' /uː/ vs. 'u' /ʊ/ */}
        <Section
          id="letters-oo-vs-u"
          label="Letters 'oo' /uː/ vs. 'u' /ʊ/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // bottom
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>

        {/*  Letters 'sh': /ʃ/ vs. 'ch': /tʃ/ */}
        <Section
          id="letters-sh-vs-ch"
          label="Letters 'sh': /ʃ/ vs. 'ch': /tʃ/"
          heading={3}
        >
          <Paragraph
            blocks={[
              {
                lines: [
                  // ...
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/.mp3",
                        part: "... ",
                      },
                      {
                        part: "/.../",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "...",
                        type: "portuguese",
                      },
                      " ",
                      {
                        square: true,
                      },
                      " ",
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
