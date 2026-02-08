import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Line } from "@/components/molecules/Line";
import { Phonetics } from "@/components/molecules/Phonetics";
import { Examples } from "@/components/molecules/Examples";
import { Paragraph } from "@/components/molecules/Paragraph";
import {
  note,
  wordRowList,
  wordComparison,
  example,
} from "../../helpers/content";

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
                  part: "a...",
                  type: "bold",
                },
              ],
            },
            // Letter 'a':
            {
              href: "letter-a",
              label: [
                "Letter 'a':  ",
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
            // Letters 'aw', 'awe':
            {
              href: "letters-aw-awe",
              label: [
                "Letter 'aw', 'awe':  ",
                { part: "/ɔː/", type: "phonetics" },
              ],
            },
            // Letters 'ay':
            {
              href: "letters-ay",
              label: ["Letter 'ay':  ", { part: "/eɪ/", type: "phonetics" }],
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
                { part: "/e/, /iː/", type: "phonetics" },
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
            // Letters 'eo':
            {
              href: "letters-eo",
              label: ["Letters 'eo':  ", { part: "/iː/", type: "phonetics" }],
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
                { part: "/aʊ/, /oʊ/", type: "phonetics" },
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
                { part: "/ɪ/, /aɪ/, /uː/", type: "phonetics" },
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
            // Letters 'a': /æ/ and 'e': /e/:
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
                  part: "and ",
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
            // Letters 'ea', 'ee': /iː/ and 'i': /ɪ/
            {
              href: "letters-ea-ee-vs-i",
              label: [
                "Letters 'ea', 'ee': ",
                {
                  part: "/iː/ ",
                  type: "phonetics",
                },
                " ",
                {
                  part: "and ",
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
              href: "letters-n-vs-ng",
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
              href: "letters-t-vs-ch",
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
        <Section id="vowels" label="Vowels" heading={3}>
          {/* // æ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
                phonetics: "/æ/",
              }),
              // answer
              ...wordRowList({
                audio: "/assets/audio/general/answer.mp3",
                englishTerm: [{ part: "a", type: "mark" }, { part: "nswer" }],
                phonetics: "/ˈæn.sɚ/",
              }),
              // ask
              ...wordRowList({
                audio: "/assets/audio/general/ask.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "sk" }],
                phonetics: "/æsk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath.mp3",
                parts: ["b", { part: "a", type: "mark" }, "th"],
                phonetics: "/bæθ/",
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/kæt/",
              }),

              // can’t
              ...wordRowList({
                audio: "/assets/audio/general/cant.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "n’t" },
                ],
                phonetics: "/kænt/",
              }),

              // dance
              ...wordRowList({
                audio: "/assets/audio/general/dance.mp3",
                parts: [
                  { part: "d" },
                  { part: "a", type: "mark" },
                  { part: "nce" },
                ],
                phonetics: "/dæns/",
              }),

              // fat
              ...wordRowList({
                audio: "/assets/audio/general/fat.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/fæt/",
              }),

              // fast
              ...wordRowList({
                audio: "/assets/audio/general/fast.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "st" },
                ],
                phonetics: "/fæst/",
              }),

              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [
                  { part: "m" },
                  { part: "a", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/mæn/",
              }),
            ]}
          />
          {/* uk words */}
          <Phonetics
            variant="uk"
            value={[
              // /ɑː/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                phonetics: "/ɑː/",
              }),
              // answer
              ...wordRowList({
                audio: "/assets/audio/general/answer-uk.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "nswer" }],
                phonetics: "/ˈɑːn.sər/",
              }),
              // ask
              ...wordRowList({
                audio: "/assets/audio/general/ask-uk.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "sk" }],
                phonetics: "/ɑːsk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath-uk.mp3",
                parts: ["b", { part: "a", type: "mark" }, "th"],
                phonetics: "/bɑːθ/",
              }),
              // can’t
              ...wordRowList({
                audio: "/assets/audio/general/cant-uk.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "n’t" },
                ],
                phonetics: "/kɑːnt/",
              }),
              // dance
              ...wordRowList({
                audio: "/assets/audio/general/dance-uk.mp3",
                parts: [
                  { part: "d" },
                  { part: "a", type: "mark" },
                  { part: "nce" },
                ],
                phonetics: "/dɑːns/",
              }),
              // fast
              ...wordRowList({
                audio: "/assets/audio/general/fast-uk.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "st" },
                ],
                phonetics: "/fɑːst/",
              }),
            ]}
          />
          <LineBreak />
          {/* /e/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
                phonetics: "/e/",
              }),
              // bed
              ...wordRowList({
                audio: "/assets/audio/general/bed.mp3",
                parts: [
                  { part: "b" },
                  { part: "e", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/bed/",
              }),
              // head
              ...wordRowList({
                audio: "/assets/audio/general/head.mp3",
                parts: [
                  { part: "h" },
                  { part: "ea", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/hed/",
              }),
              // red
              ...wordRowList({
                audio: "/assets/audio/general/red.mp3",
                parts: [
                  { part: "r" },
                  { part: "e", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/red/",
              }),
            ]}
          />
          {/* /ɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                phonetics: "/ɪ/",
              }),
              // bed
              ...wordRowList({
                audio: "/assets/audio/general/busy.mp3",
                parts: [
                  { part: "b" },
                  { part: "u", type: "mark" },
                  { part: "sy" },
                ],
                phonetics: "/ˈbɪz.i/",
              }),
              //English
              ...wordRowList({
                audio: "/assets/audio/general/english.mp3",
                parts: [{ part: "e", type: "mark" }, { part: "nglish" }],
                phonetics: "/ˈɪŋ.ɡlɪʃ/",
              }),
              // it
              ...wordRowList({
                audio: "/assets/audio/general/it.mp3",
                parts: [{ part: "i", type: "mark" }, { part: "t" }],
                phonetics: "/ɪt/",
              }),
            ]}
          />
          {/* /iː/ */}
          <Phonetics
            value={[
              // word
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/iː/",
              }),
              // eat
              ...wordRowList({
                audio: "/assets/audio/general/eat.mp3",
                parts: [{ part: "ea", type: "mark" }, { part: "t" }],
                phonetics: "/iːt/",
              }),
              // key
              ...wordRowList({
                audio: "/assets/audio/general/key.mp3",
                parts: [
                  { part: "k" },
                  { part: "e", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "//",
              }),
              // sea
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [{ part: "s" }, { part: "ea", type: "mark" }],
                phonetics: "/siː/",
              }),
              // see
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [{ part: "s" }, { part: "ee", type: "mark" }],
                phonetics: "/siː/",
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...note({
                parts: [
                  "In American English, ",
                  { part: "/ə/", type: "phonetics" },
                  " and ",
                  { part: "/ʌ/", type: "phonetics" },
                  " are not distinguished, but they are in British English. The vowel ",
                  { part: "/ʌ/", type: "phonetics" },
                  "occurs in stressed syllables, while ",
                  { part: "/ə/", type: "phonetics" },
                  " occurs in unstressed syllables. In British English, they are distinguished as separate vowels.",
                ],
              }),
            ]}
          />
          <LineBreak />
          {/* /ə/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                parts: [
                  {
                    part: "/ə/",
                    type: "phonetics",
                  },
                  {
                    part: "unstressed schwa",
                    type: "italic",
                  },
                ],
              }),
              // about
              ...wordRowList({
                audio: "/assets/audio/general/about.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "bout" }],
                phonetics: "/əˈbaʊt/",
              }),
              // above
              ...wordRowList({
                audio: "/assets/audio/general/above.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "bove" }],
                phonetics: "/əˈbʌv/",
              }),
              // student
              ...wordRowList({
                audio: "/assets/audio/general/student.mp3",
                parts: [
                  { part: "stud" },
                  { part: "e", type: "mark" },
                  { part: "nt" },
                ],
                phonetics: "/ˈstuː.dənt/",
              }),
              // the
              ...wordRowList({
                audio: "/assets/audio/general/the2.mp3",
                parts: [{ part: "th" }, { part: "e", type: "mark" }],
                phonetics: "/ðə/",
              }),
            ]}
          />
          {/* uk */}
          <Phonetics
            variant="uk"
            value={[
              // cinema
              ...wordRowList({
                audio: "/assets/audio/general/cinema-uk.mp3",
                parts: [
                  { part: "vocab", type: "italic" },
                  " cin",
                  { part: "e", type: "mark" },
                  "m",
                  { part: "a", type: "mark" },
                ],
                phonetics: "/ˈsɪn.ə.mə/",
              }),
            ]}
          />
          <LineBreak />
          {/* /ʌ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                parts: [
                  {
                    part: "/ʌ/",
                    type: "phonetics",
                  },
                  {
                    part: "stressed",
                    type: "italic",
                  },
                ],
                phonetics: "",
              }),
              // but
              ...wordRowList({
                audio: "/assets/audio/general/but.mp3",
                parts: [
                  { part: "b" },
                  { part: "u", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/bʌt/",
              }),
              // cup
              ...wordRowList({
                audio: "/assets/audio/general/cup.mp3",
                parts: [
                  { part: "c" },
                  { part: "u", type: "mark" },
                  { part: "p" },
                ],
                phonetics: "/bʌt/",
              }),
              // hulk
              ...wordRowList({
                audio: "/assets/audio/general/hulk.mp3",
                parts: [
                  { part: "H" },
                  { part: "u", type: "mark" },
                  { part: "lk" },
                ],
                phonetics: "/hʌk/",
              }),
              // son
              ...wordRowList({
                audio: "/assets/audio/general/son-sun.mp3",
                parts: [
                  { part: "s" },
                  { part: "o", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // sun
              ...wordRowList({
                audio: "/assets/audio/general/son-sun.mp3",
                parts: [
                  { part: "s" },
                  { part: "u", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // under
              ...wordRowList({
                audio: "/assets/audio/general/under.mp3",
                parts: [{ part: "u", type: "mark" }, { part: "nder" }],
                phonetics: "/ˈʌn.dɚ/",
              }),
            ]}
          />
          {/* uk */}
          {/* /ʌ/ */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ʌ.mp3",
                phonetics: "/ʌ/",
              }),
              // but
              ...wordRowList({
                audio: "/assets/audio/general/but-uk.mp3",
                parts: [
                  { part: "b" },
                  { part: "u", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/bʌt/",
              }),
              // cup
              ...wordRowList({
                audio: "/assets/audio/general/cup-uk.mp3",
                parts: [
                  { part: "c" },
                  { part: "u", type: "mark" },
                  { part: "p" },
                ],
                phonetics: "/bʌt/",
              }),
              // son
              ...wordRowList({
                audio: "/assets/audio/general/son-sun-uk.mp3",
                parts: [
                  { part: "s" },
                  { part: "o", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // sun
              ...wordRowList({
                audio: "/assets/audio/general/son-sun-uk.mp3",
                parts: [
                  { part: "s" },
                  { part: "u", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // under
              ...wordRowList({
                audio: "/assets/audio/general/under-uk.mp3",
                parts: [{ part: "u", type: "mark" }, { part: "nder" }],
                phonetics: "/ˈʌn.də/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ɑː/ */}
          <Phonetics
            value={[
              // /ɑː/ (long)
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                parts: [{ part: "/ɑː/", type: "phonetics" }],
              }),
              // calm
              ...wordRowList({
                audio: "/assets/audio/general/calm.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "lm" },
                ],
                phonetics: "/kɑːm/",
              }),
              // father
              ...wordRowList({
                audio: "/assets/audio/general/father.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "ther" },
                ],
                phonetics: "/ˈfɑːðər/",
              }),
              // hot
              ...wordRowList({
                audio: "/assets/audio/general/hot.mp3",
                parts: [
                  { part: "h" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/hɑːt/",
              }),
              // job
              ...wordRowList({
                audio: "/assets/audio/general/job.mp3",
                parts: [
                  { part: "j" },
                  { part: "o", type: "mark" },
                  { part: "b" },
                ],
                phonetics: "/dʒɑːb/",
              }),
              // lot
              ...wordRowList({
                audio: "/assets/audio/general/lot.mp3",
                parts: [
                  { part: "l" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/lɑːt/",
              }),
              // not
              ...wordRowList({
                audio: "/assets/audio/general/not.mp3",
                parts: [
                  { part: "n" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/nɑːt/",
              }),
              // office
              ...wordRowList({
                audio: "/assets/audio/general/office.mp3",
                parts: [{ part: "o", type: "mark" }, "ffice"],
                phonetics: "/ˈɑː.fɪs/",
              }),
              // palm
              ...wordRowList({
                audio: "/assets/audio/general/palm.mp3",
                parts: [
                  { part: "p" },
                  { part: "a", type: "mark" },
                  { part: "lm" },
                ],
                phonetics: "/pɑːm/",
              }),
              // rob
              ...wordRowList({
                audio: "/assets/audio/general/rob.mp3",
                parts: [
                  { part: "r" },
                  { part: "o", type: "mark" },
                  { part: "b" },
                ],
                phonetics: "/rɑːb/",
              }),
              // rock
              ...wordRowList({
                audio: "/assets/audio/general/rock.mp3",
                parts: [
                  { part: "r" },
                  { part: "o", type: "mark" },
                  { part: "ck" },
                ],
                phonetics: "/rɑːk/",
              }),
              // shop
              ...wordRowList({
                audio: "/assets/audio/general/shop.mp3",
                parts: ["sh", { part: "o", type: "mark" }, "p"],
                phonetics: "/ʃɑːp/",
              }),
              // spa
              ...wordRowList({
                audio: "/assets/audio/general/spa.mp3",
                parts: [{ part: "sp" }, { part: "a", type: "mark" }],
                phonetics: "/spɑː/",
              }),
              // stop
              ...wordRowList({
                audio: "/assets/audio/general/stop.mp3",
                parts: ["st", { part: "o", type: "mark" }, "p"],
                phonetics: "/stɑːp/",
              }),
              // top
              ...wordRowList({
                audio: "/assets/audio/general/top.mp3",
                parts: [
                  { part: "t" },
                  { part: "o", type: "mark" },
                  { part: "p" },
                ],
                phonetics: "/tɑːp/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ɔː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                parts: [{ part: "/ɔː/", type: "phonetics" }],
              }),
              // all
              ...wordRowList({
                audio: "/assets/audio/general/all.mp3",
                parts: [{ part: "a", type: "mark" }, "ll"],
                phonetics: "/ɑːl/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/call.mp3",
                parts: ["ca", { part: "ll", type: "mark" }],
                phonetics: "/kɔːl/",
              }),
              // daughter
              ...wordRowList({
                audio: "/assets/audio/general/daughter.mp3",
                parts: ["d", { part: "au", type: "mark" }, "ghter"],
                phonetics: "/ˈdɔː.t̬ɚ/",
              }),
              // dog
              ...wordRowList({
                audio: "/assets/audio/general/dog.mp3",
                parts: [
                  { part: "d" },
                  { part: "o", type: "mark" },
                  { part: "g" },
                ],
                phonetics: "/dɔːg/",
              }),
              // fog
              ...wordRowList({
                audio: "/assets/audio/general/fog.mp3",
                parts: [
                  { part: "f" },
                  { part: "o", type: "mark" },
                  { part: "g" },
                ],
                phonetics: "/fɔːg/",
              }),
              // frog
              ...wordRowList({
                audio: "/assets/audio/general/frog.mp3",
                parts: [
                  { part: "fr" },
                  { part: "o", type: "mark" },
                  { part: "g" },
                ],
                phonetics: "/frɔːg/",
              }),
              // law
              ...wordRowList({
                audio: "/assets/audio/general/law.mp3",
                parts: [{ part: "l" }, { part: "aw", type: "mark" }],
                phonetics: "/lɔː/",
              }),
              // raw
              ...wordRowList({
                audio: "/assets/audio/general/raw.mp3",
                parts: [{ part: "r" }, { part: "aw", type: "mark" }],
                phonetics: "/rɔː/",
              }),
              // talk
              ...wordRowList({
                audio: "/assets/audio/general/talk.mp3",
                parts: ["t", { part: "a", type: "mark" }, "lk"],
                phonetics: "/tɔːk/",
              }),
              // walk
              ...wordRowList({
                audio: "/assets/audio/general/walk.mp3",
                parts: ["w", { part: "a", type: "mark" }, "lk"],
                phonetics: "/wɔːk/",
              }),
            ]}
          />
          <LineBreak />

          {/* uk */}
          {/* /ɒ/ */}
          <Line
            value={[
              ...note({
                parts: [
                  "In British English, ",
                  { part: "/ɑː/, /ɔː/", type: "phonetics" },
                  " is pronounced ",
                  { part: "/ɒ/", type: "phonetics" },
                  ".",
                ],
              }),
            ]}
          />
          <Phonetics
            variant="uk"
            value={[
              // UK /ɒ/ (short)
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɒ.mp3",
                parts: [{ part: "/ɒ/", type: "phonetics" }],
              }),
              // dog
              ...wordRowList({
                audio: "/assets/audio/general/dog-uk.mp3",
                parts: ["d", { part: "o", type: "mark" }, "g"],
                phonetics: "/dɒɡ/",
              }),
              // frog
              ...wordRowList({
                audio: "/assets/audio/general/frog-uk.mp3",
                parts: ["fr", { part: "o", type: "mark" }, "g"],
                phonetics: "/frɒɡ/",
              }),
              // hot
              ...wordRowList({
                audio: "/assets/audio/general/hot-uk.mp3",
                parts: ["h", { part: "o", type: "mark" }, "t"],
                phonetics: "/hɒt/",
              }),
              // shop
              ...wordRowList({
                audio: "/assets/audio/general/shop-uk.mp3",
                parts: ["sh", { part: "o", type: "mark" }, "p"],
                phonetics: "/ʃɒp/",
              }),
              // stop
              ...wordRowList({
                audio: "/assets/audio/general/stop-uk.mp3",
                parts: ["st", { part: "o", type: "mark" }, "p"],
                phonetics: "/ʃɒp/",
              }),
              //lot
              ...wordRowList({
                audio: "/assets/audio/general/lot-uk.mp3",
                parts: ["l", { part: "o", type: "mark" }, "t"],
                phonetics: "/lɒt/",
              }),
              // rob
              ...wordRowList({
                audio: "/assets/audio/general/rob-uk.mp3",
                parts: ["r", { part: "o", type: "mark" }, "b"],
                phonetics: "/rɒb/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ʊ.mp3",
                parts: [{ part: "/ʊ/", type: "phonetics" }],
              }),
              // book
              ...wordRowList({
                audio: "/assets/audio/general/book.mp3",
                parts: ["b", { part: "oo", type: "mark" }, "k"],
                phonetics: "/bʊk/",
              }),
              // good
              ...wordRowList({
                audio: "/assets/audio/general/good.mp3",
                parts: ["g", { part: "oo", type: "mark" }, "d"],
                phonetics: "/gʊk/",
              }),
              // wood
              ...wordRowList({
                audio: "/assets/audio/general/wood-would.mp3",
                parts: ["w", { part: "oo", type: "mark" }, "d"],
                phonetics: "/wʊk/",
              }),
              // would
              ...wordRowList({
                audio: "/assets/audio/general/wood-would.mp3",
                parts: ["w", { part: "oul", type: "mark" }, "d"],
                phonetics: "/wʊd/",
              }),
            ]}
          />

          {/* /uː/ */}
          <Phonetics
            value={[
              // /uː/ (long)
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/u.mp3",
                parts: [{ part: "/uː/", type: "phonetics" }],
              }),
              // blue
              ...wordRowList({
                audio: "/assets/audio/general/blue.mp3",
                parts: [{ part: "bl" }, { part: "ue", type: "mark" }],
                phonetics: "/bluː/",
              }),
              // food
              ...wordRowList({
                audio: "/assets/audio/general/food.mp3",
                parts: [
                  { part: "f" },
                  { part: "oo", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/fuːd/",
              }),
              // student
              ...wordRowList({
                audio: "/assets/audio/general/student.mp3",
                parts: [
                  { part: "st" },
                  { part: "u", type: "mark" },
                  { part: "dent" },
                ],
                phonetics: "/ˈstuː.dənt/",
              }),
            ]}
          />
        </Section>

        <Section id="diphthongs" label="Diphthongs" heading={3}>
          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                parts: [{ part: "/aɪ/", type: "phonetics" }],
              }),

              // buy
              ...wordRowList({
                audio: "/assets/audio/general/buy.mp3",
                parts: ["b", { part: "uy", type: "mark" }],
                phonetics: "/baɪ/",
              }),

              // my
              ...wordRowList({
                audio: "/assets/audio/general/my.mp3",
                parts: ["m", { part: "y", type: "mark" }],
                phonetics: "/maɪ/",
              }),

              // time
              ...wordRowList({
                audio: "/assets/audio/general/time.mp3",
                parts: ["t", { part: "i", type: "mark" }, "me"],
                phonetics: "/taɪm/",
              }),
            ]}
          />
          {/* /aʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aʊ.mp3",
                parts: [{ part: "/aʊ/", type: "phonetics" }],
              }),

              // cow
              ...wordRowList({
                audio: "/assets/audio/general/cow.mp3",
                parts: ["c", { part: "ow", type: "mark" }],
                phonetics: "/kaʊ/",
              }),

              // bow (verb)
              ...wordRowList({
                audio: "/assets/audio/general/bow-verb.mp3",
                parts: ["b", { part: "ow", type: "mark" }],
                phonetics: "/baʊ/",
              }),

              // south
              ...wordRowList({
                audio: "/assets/audio/general/south.mp3",
                parts: ["s", { part: "ou", type: "mark" }, "th"],
                phonetics: "/saʊθ/",
              }),
            ]}
          />
          {/* /eɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                parts: [{ part: "/eɪ/", type: "phonetics" }],
              }),

              // day
              ...wordRowList({
                audio: "/assets/audio/general/day.mp3",
                parts: ["d", { part: "a", type: "mark" }, "y"],
                phonetics: "/deɪ/",
              }),

              // make
              ...wordRowList({
                audio: "/assets/audio/general/make.mp3",
                parts: ["m", { part: "a", type: "mark" }, "ke"],
                phonetics: "/meɪk/",
              }),

              // say
              ...wordRowList({
                audio: "/assets/audio/general/say.mp3",
                parts: ["s", { part: "a", type: "mark" }, "y"],
                phonetics: "/seɪ/",
              }),
            ]}
          />
          {/* /ɔɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/ɔɪ.mp3",
                parts: [{ part: "/ɔɪ/", type: "phonetics" }],
              }),

              // boy
              ...wordRowList({
                audio: "/assets/audio/general/boy.mp3",
                parts: ["b", { part: "oy", type: "mark" }],
                phonetics: "/bɔɪ/",
              }),

              // choice
              ...wordRowList({
                audio: "/assets/audio/general/choice.mp3",
                parts: ["ch", { part: "oi", type: "mark" }, "ce"],
                phonetics: "/tʃɔɪs/",
              }),

              // toy
              ...wordRowList({
                audio: "/assets/audio/general/toy.mp3",
                parts: ["t", { part: "oy", type: "mark" }],
                phonetics: "/tɔɪ/",
              }),
            ]}
          />
          {/* /oʊ/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
                parts: [{ part: "/oʊ/", type: "phonetics" }],
              }),

              // go
              ...wordRowList({
                audio: "/assets/audio/general/go.mp3",
                parts: ["g", { part: "o", type: "mark" }],
                phonetics: "/goʊ/",
              }),

              // show
              ...wordRowList({
                audio: "/assets/audio/general/show.mp3",
                parts: ["sh", { part: "ow", type: "mark" }],
                phonetics: "/ʃoʊ/",
              }),

              // slow
              ...wordRowList({
                audio: "/assets/audio/general/slow.mp3",
                parts: ["sl", { part: "ow", type: "mark" }],
                phonetics: "/sloʊ/",
              }),
            ]}
          />
          {/* /əʊ/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/əʊ.mp3",
                parts: [{ part: "/əʊ/", type: "phonetics" }],
              }),

              // go
              ...wordRowList({
                audio: "/assets/audio/general/go-uk.mp3",
                parts: ["g", { part: "o", type: "mark" }],
                phonetics: "/gəʊ/",
              }),

              // show
              ...wordRowList({
                audio: "/assets/audio/general/show-uk.mp3",
                parts: ["sh", { part: "ow", type: "mark" }],
                phonetics: "/ʃəʊ/",
              }),

              // slow
              ...wordRowList({
                audio: "/assets/audio/general/slow-uk.mp3",
                parts: ["sl", { part: "ow", type: "mark" }],
                phonetics: "/sləʊ/",
              }),
            ]}
          />
        </Section>

        <Section id="consonants" label="Consonants" heading={3}>
          {/* /b/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/b.mp3",
                parts: [{ part: "/b/", type: "phonetics" }],
              }),
              // book
              ...wordRowList({
                audio: "/assets/audio/general/book.mp3",
                parts: [{ part: "b", type: "mark" }, "ook"],
                phonetics: "/bʊk/",
              }),
              // table
              ...wordRowList({
                audio: "/assets/audio/general/table.mp3",
                parts: ["ta", { part: "b", type: "mark" }, "le"],
                phonetics: "/ˈteɪ.bəl/",
              }),
            ]}
          />
          {/* /d/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/d.mp3",
                parts: [{ part: "/d/", type: "phonetics" }],
              }),
              // do
              ...wordRowList({
                audio: "/assets/audio/general/do.mp3",
                parts: [{ part: "d", type: "mark" }, "o"],
                phonetics: "/duː/",
              }),
              // did
              ...wordRowList({
                audio: "/assets/audio/general/did.mp3",
                parts: [{ part: "d", type: "mark" }, "id"],
                phonetics: "/dɪd/",
              }),
            ]}
          />
          {/* /f/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/f.mp3",
                parts: [{ part: "/f/", type: "phonetics" }],
              }),
              // fish
              ...wordRowList({
                audio: "/assets/audio/general/fish.mp3",
                parts: [{ part: "f", type: "mark" }, "ish"],
                phonetics: "/fɪʃ/",
              }),
              // coffee
              ...wordRowList({
                audio: "/assets/audio/general/coffee.mp3",
                parts: ["co", { part: "ff", type: "mark" }, "ee"],
                phonetics: "/ˈkɑː.fi/",
              }),
            ]}
          />
          {/* /g/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/g.mp3",
                parts: [{ part: "/g/", type: "phonetics" }],
              }),
              // go
              ...wordRowList({
                audio: "/assets/audio/general/go.mp3",
                parts: [{ part: "g", type: "mark" }, "o"],
                phonetics: "/goʊ/",
              }),
              // bag
              ...wordRowList({
                audio: "/assets/audio/general/bag.mp3",
                parts: ["ba", { part: "g", type: "mark" }],
                phonetics: "/bæg/",
              }),
            ]}
          />
          {/* /h/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/h.mp3",
                parts: [{ part: "/h/", type: "phonetics" }],
              }),
              // hat
              ...wordRowList({
                audio: "/assets/audio/general/hat.mp3",
                parts: [{ part: "h", type: "mark" }, "at"],
                phonetics: "/hæt/",
              }),
              // head
              ...wordRowList({
                audio: "/assets/audio/general/head.mp3",
                parts: [{ part: "h", type: "mark" }, "ead"],
                phonetics: "/hed/",
              }),
            ]}
          />
          {/* /j/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/j.mp3",
                parts: [{ part: "/j/", type: "phonetics" }],
              }),
              // university
              ...wordRowList({
                audio: "/assets/audio/general/university.mp3",
                parts: [{ part: "u", type: "mark" }, "niversity"],
                phonetics: "/ˌjuː.nəˈvɝː.sə.t̬i/",
              }),
              // yes
              ...wordRowList({
                audio: "/assets/audio/general/yes.mp3",
                parts: [{ part: "y", type: "mark" }, "es"],
                phonetics: "/jɛs/",
              }),
              // yeallow
              ...wordRowList({
                audio: "/assets/audio/general/yellow.mp3",
                parts: [{ part: "y", type: "mark" }, "ellow"],
                phonetics: "/ˈjɛloʊ/",
              }),
            ]}
          />
          {/* /k/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/k.mp3",
                parts: [{ part: "/k/", type: "phonetics" }],
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [{ part: "c", type: "mark" }, "at"],
                phonetics: "/kæt/",
              }),
              // back
              ...wordRowList({
                audio: "/assets/audio/general/back.mp3",
                parts: ["ba", { part: "ck", type: "mark" }],
                phonetics: "/bæk/",
              }),
            ]}
          />
          {/* /ʒ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ʒ.mp3",
                parts: [{ part: "/ʒ/", type: "phonetics" }],
              }),
              // vision
              ...wordRowList({
                audio: "/assets/audio/general/vision.mp3",
                parts: ["vi", { part: "s", type: "mark" }, "ion"],
                phonetics: "/ˈvɪʒən/",
              }),
              // measure
              ...wordRowList({
                audio: "/assets/audio/general/measure.mp3",
                parts: ["mea", { part: "su", type: "mark" }, "re"],
                phonetics: "/ˈmeʒ.ɚ/",
              }),
            ]}
          />
          {/* /l/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/l.mp3",
                parts: [{ part: "/l/", type: "phonetics" }],
              }),
              // love
              ...wordRowList({
                audio: "/assets/audio/general/love.mp3",
                parts: [{ part: "l", type: "mark" }, "ove"],
                phonetics: "/lʌv/",
              }),
              // feel
              ...wordRowList({
                audio: "/assets/audio/general/feel.mp3",
                parts: ["fee", { part: "l", type: "mark" }],
                phonetics: "/fiːl/",
              }),
            ]}
          />
          {/* /m/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/m.mp3",
                parts: [{ part: "/m/", type: "phonetics" }],
              }),
              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [{ part: "m", type: "mark" }, "an"],
                phonetics: "/mæn/",
              }),
              // summer
              ...wordRowList({
                audio: "/assets/audio/general/summer.mp3",
                parts: ["su", { part: "mm", type: "mark" }, "er"],
                phonetics: "/ˈsʌm.ɚ/",
              }),
            ]}
          />
          {/* /n/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/n.mp3",
                parts: [{ part: "/n/", type: "phonetics" }],
              }),
              // no
              ...wordRowList({
                audio: "/assets/audio/general/no.mp3",
                parts: [{ part: "n", type: "mark" }, "o"],
                phonetics: "/noʊ/",
              }),
              // dinner
              ...wordRowList({
                audio: "/assets/audio/general/dinner.mp3",
                parts: ["di", { part: "nn", type: "mark" }, "er"],
                phonetics: "/ˈdɪn.ɚ/",
              }),
            ]}
          />
          {/* /ŋ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                parts: [{ part: "/ŋ/", type: "phonetics" }],
              }),
              // sing
              ...wordRowList({
                audio: "/assets/audio/general/sing.mp3",
                parts: ["si", { part: "ng", type: "mark" }],
                phonetics: "/sɪŋ/",
              }),
              // long
              ...wordRowList({
                audio: "/assets/audio/general/long.mp3",
                parts: ["lo", { part: "ng", type: "mark" }],
                phonetics: "/lɔŋ/",
              }),
            ]}
          />
          {/* /p/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/p.mp3",
                parts: [{ part: "/p/", type: "phonetics" }],
              }),
              // pen
              ...wordRowList({
                audio: "/assets/audio/general/pen.mp3",
                parts: [{ part: "p", type: "mark" }, "en"],
                phonetics: "/pen/",
              }),
              // map
              ...wordRowList({
                audio: "/assets/audio/general/map.mp3",
                parts: ["ma", { part: "p", type: "mark" }],
                phonetics: "/mæp/",
              }),
            ]}
          />
          {/* /r/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/r.mp3",
                parts: [{ part: "/r/", type: "phonetics" }],
              }),
              // red
              ...wordRowList({
                audio: "/assets/audio/general/red.mp3",
                parts: [{ part: "r", type: "mark" }, "ed"],
                phonetics: "/red/",
              }),
              // carry
              ...wordRowList({
                audio: "/assets/audio/general/carry.mp3",
                parts: ["ca", { part: "rr", type: "mark" }, "y"],
                phonetics: "/ˈkæri/",
              }),
            ]}
          />
          {/* /s/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/s.mp3",
                parts: [{ part: "/s/", type: "phonetics" }],
              }),
              // see
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [{ part: "s", type: "mark" }, "ee"],
                phonetics: "/siː/",
              }),
              // city
              ...wordRowList({
                audio: "/assets/audio/general/city.mp3",
                parts: ["ci", { part: "t", type: "mark" }, "y"],
                phonetics: "/ˈsɪt̬.i/",
              }),
            ]}
          />
          {/* /ʃ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ʃ.mp3",
                parts: [{ part: "/ʃ/", type: "phonetics" }],
              }),
              // she
              ...wordRowList({
                audio: "/assets/audio/general/she.mp3",
                parts: [{ part: "sh", type: "mark" }, "e"],
                phonetics: "/ʃiː/",
              }),
              // nation
              ...wordRowList({
                audio: "/assets/audio/general/nation.mp3",
                parts: ["na", { part: "ti", type: "mark" }, "on"],
                phonetics: "/ˈneɪʃən/",
              }),
            ]}
          />
          {/* /t/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/t.mp3",
                parts: [{ part: "/t/", type: "phonetics" }],
              }),
              // ten
              ...wordRowList({
                audio: "/assets/audio/general/ten.mp3",
                parts: [{ part: "t", type: "mark" }, "en"],
                phonetics: "/ten/",
              }),
              // top
              ...wordRowList({
                audio: "/assets/audio/general/top.mp3",
                parts: [{ part: "t", type: "mark" }, "op"],
                phonetics: "/tɑːp/",
              }),
            ]}
          />
          {/* /θ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/θ.mp3",
                parts: [{ part: "/θ/", type: "phonetics" }],
              }),
              // think
              ...wordRowList({
                audio: "/assets/audio/general/think.mp3",
                parts: [{ part: "th", type: "mark" }, "ink"],
                phonetics: "/θɪŋk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath.mp3",
                parts: ["ba", { part: "th", type: "mark" }],
                phonetics: "/bæθ/",
              }),
            ]}
          />
          {/* /ð/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ð.mp3",
                parts: [{ part: "/ð/", type: "phonetics" }],
              }),
              // this
              ...wordRowList({
                audio: "/assets/audio/general/this.mp3",
                parts: [{ part: "th", type: "mark" }, "is"],
                phonetics: "/ðɪs/",
              }),
              // mother
              ...wordRowList({
                audio: "/assets/audio/general/mother.mp3",
                parts: ["mo", { part: "th", type: "mark" }, "er"],
                phonetics: "/ˈmʌð.ɚ/",
              }),
            ]}
          />
          {/* /v/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/v.mp3",
                parts: [{ part: "/v/", type: "phonetics" }],
              }),
              // very
              ...wordRowList({
                audio: "/assets/audio/general/very.mp3",
                parts: [{ part: "v", type: "mark" }, "ery"],
                phonetics: "/ˈver.i/",
              }),
              // over
              ...wordRowList({
                audio: "/assets/audio/general/over.mp3",
                parts: ["o", { part: "v", type: "mark" }, "er"],
                phonetics: "/ˈoʊ.vɚ/",
              }),
            ]}
          />
          {/* /w/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/w.mp3",
                parts: [{ part: "/w/", type: "phonetics" }],
              }),
              // we
              ...wordRowList({
                audio: "/assets/audio/general/we.mp3",
                parts: [{ part: "w", type: "mark" }, "e"],
                phonetics: "/wiː/",
              }),
              // quick
              ...wordRowList({
                audio: "/assets/audio/general/quick.mp3",
                parts: ["q", { part: "u", type: "mark" }, "ick"],
                phonetics: "/kwɪk/",
              }),
            ]}
          />
          {/* /z/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/z.mp3",
                parts: [{ part: "/z/", type: "phonetics" }],
              }),
              // zoo
              ...wordRowList({
                audio: "/assets/audio/general/zoo.mp3",
                parts: [{ part: "z", type: "mark" }, "oo"],
                phonetics: "/zuː/",
              }),
              // music
              ...wordRowList({
                audio: "/assets/audio/general/music.mp3",
                parts: ["mu", { part: "s", type: "mark" }, "ic"],
                phonetics: "/ˈmjuː.zɪk/",
              }),
            ]}
          />
        </Section>

        <Section id="rhotic-vowels-r" label="Rhotic (Vowels + R)" heading={3}>
          {/* /aɪr/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [{ part: "/aɪr/", type: "phonetics" }],
              }),
              // choir
              ...wordRowList({
                audio: "/assets/audio/general/choir.mp3",
                parts: ["cho", { part: "ir", type: "mark" }],
                phonetics: "/kwaɪr/",
              }),
              // fire
              ...wordRowList({
                audio: "/assets/audio/general/fire.mp3",
                parts: ["f", { part: "ir", type: "mark" }, "(e)"],
                phonetics: "/faɪr/",
              }),
              // inspire
              ...wordRowList({
                audio: "/assets/audio/general/inspire.mp3",
                parts: ["insp", { part: "ir", type: "mark" }, "(e)"],
                phonetics: "/ɪnˈspaɪr/",
              }),
              // liar
              ...wordRowList({
                audio: "/assets/audio/general/liar.mp3",
                parts: ["l", { part: "iar", type: "mark" }],
                phonetics: "/ˈlaɪr/",
              }),
            ]}
          />
          {/* /aɪə/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [{ part: "/aɪə/", type: "phonetics" }],
              }),
              // choir
              ...wordRowList({
                audio: "/assets/audio/general/choir-uk.mp3",
                parts: ["cho", { part: "ir", type: "mark" }],
                phonetics: "/ˈkwaɪə/",
              }),
              // fire
              ...wordRowList({
                audio: "/assets/audio/general/fire-uk.mp3",
                parts: ["f", { part: "ir", type: "mark" }, "(e)"],
                phonetics: "/ˈfaɪə/",
              }),
              // inspire
              ...wordRowList({
                audio: "/assets/audio/general/inspire-uk.mp3",
                parts: ["insp", { part: "ir", type: "mark" }, "(e)"],
                phonetics: "/ɪnˈspaɪə/",
              }),
              // liar
              ...wordRowList({
                audio: "/assets/audio/general/liar-uk.mp3",
                parts: ["l", { part: "iar", type: "mark" }],
                phonetics: "/ˈlaɪə/",
              }),
            ]}
          />
          <LineBreak />
          {/* /eər/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [{ part: "/eər/", type: "phonetics" }],
              }),
              // air
              ...wordRowList({
                audio: "/assets/audio/general/air.mp3",
                parts: ["a", { part: "ir", type: "mark" }],
                phonetics: "/eər/",
              }),
              // hair
              ...wordRowList({
                audio: "/assets/audio/general/hair.mp3",
                parts: ["h", { part: "air", type: "mark" }],
                phonetics: "/heər/",
              }),
              // pair
              ...wordRowList({
                audio: "/assets/audio/general/pair.mp3",
                parts: ["p", { part: "air", type: "mark" }],
                phonetics: "/peər/",
              }),
              // where
              ...wordRowList({
                audio: "/assets/audio/general/where.mp3",
                parts: ["wh", { part: "er", type: "mark" }, "(e)"],
                phonetics: "/wer/",
              }),
            ]}
          />
          {/* /eə/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [{ part: "/eə/", type: "phonetics" }],
              }),
              // air
              ...wordRowList({
                audio: "/assets/audio/general/air-uk.mp3",
                parts: ["a", { part: "ir", type: "mark" }],
                phonetics: "/eə/",
              }),
              // hair
              ...wordRowList({
                audio: "/assets/audio/general/hair-uk.mp3",
                parts: ["h", { part: "air", type: "mark" }],
                phonetics: "/heə/",
              }),
              // pair
              ...wordRowList({
                audio: "/assets/audio/general/pair-uk.mp3",
                parts: ["p", { part: "air", type: "mark" }],
                phonetics: "/peə/",
              }),
              // where
              ...wordRowList({
                audio: "/assets/audio/general/where-uk.mp3",
                parts: ["wh", { part: "ere", type: "mark" }, "(e)"],
                phonetics: "/weə/",
              }),
            ]}
          />
          <LineBreak />
          {/* /ɝː/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [{ part: "/ɝː/", type: "phonetics" }],
              }),
              // bird
              ...wordRowList({
                audio: "/assets/audio/general/bird.mp3",
                parts: ["b", { part: "ir", type: "mark" }, "d"],
                phonetics: "/bɝːd/",
              }),
              // girl
              ...wordRowList({
                audio: "/assets/audio/general/girl.mp3",
                parts: ["g", { part: "ir", type: "mark" }, "l"],
                phonetics: "/ɡɝːl/",
              }),
              // learn
              ...wordRowList({
                audio: "/assets/audio/general/learn.mp3",
                parts: ["l", { part: "ear", type: "mark" }, "n"],
                phonetics: "/lɝːn/",
              }),
              // were
              ...wordRowList({
                audio: "/assets/audio/general/were.mp3",
                parts: ["w", { part: "er", type: "mark" }, "(e)"],
                phonetics: "/wɝː/",
              }),
              // world
              ...wordRowList({
                audio: "/assets/audio/general/world.mp3",
                parts: [
                  "w",
                  {
                    part: "or",
                    type: "mark",
                  },
                  "ld",
                ],
                phonetics: "/wɝːld/",
              }),
              // word
              ...wordRowList({
                audio: "/assets/audio/general/word.mp3",
                parts: ["w", { part: "or", type: "mark" }, "d"],
                phonetics: "/wɝːd/",
              }),
              // work
              ...wordRowList({
                audio: "/assets/audio/general/work.mp3",
                parts: ["w", { part: "or", type: "mark" }, "k"],
                phonetics: "/wɝːk/",
              }),
            ]}
          />
          {/* /ɜː/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [{ part: "/ɜː/", type: "phonetics" }],
              }),
              // bird
              ...wordRowList({
                audio: "/assets/audio/general/bird-uk.mp3",
                parts: ["b", { part: "ir", type: "mark" }, "d"],
                phonetics: "/bɜːd/",
              }),
              // learn
              ...wordRowList({
                audio: "/assets/audio/general/learn-uk.mp3",
                parts: ["l", { part: "ear", type: "mark" }, "n"],
                phonetics: "/lɜːn/",
              }),
              // were
              ...wordRowList({
                audio: "/assets/audio/general/were-uk.mp3",
                parts: ["w", { part: "er", type: "mark" }, "(e)"],
                phonetics: "/wɜː/",
              }),
              // world
              ...wordRowList({
                audio: "/assets/audio/general/world-uk.mp3",
                parts: ["w", { part: "orl", type: "mark" }, "d"],
                phonetics: "/wɜːld/",
              }),
              // word
              ...wordRowList({
                audio: "/assets/audio/general/word-uk.mp3",
                parts: ["w", { part: "or", type: "mark" }, "d"],
                phonetics: "/wɜːd/",
              }),
              // work
              ...wordRowList({
                audio: "/assets/audio/general/work-uk.mp3",
                parts: ["w", { part: "or", type: "mark" }, "k"],
                phonetics: "/wɜːk/",
              }),
            ]}
          />
          <LineBreak />
          {/* /ɔːr/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [{ part: "/ɔːr/", type: "phonetics" }],
              }),
              // door
              ...wordRowList({
                audio: "/assets/audio/general/door.mp3",
                parts: ["d", { part: "oor", type: "mark" }],
                phonetics: "/dɔːr/",
              }),
              // four
              ...wordRowList({
                audio: "/assets/audio/general/four.mp3",
                parts: ["f", { part: "our", type: "mark" }],
                phonetics: "/fɔːr/",
              }),
              // north
              ...wordRowList({
                audio: "/assets/audio/general/north.mp3",
                parts: ["n", { part: "orth", type: "mark" }],
                phonetics: "/nɔːrθ/",
              }),
              // war
              ...wordRowList({
                audio: "/assets/audio/general/war.mp3",
                parts: ["w", { part: "ar", type: "mark" }],
                phonetics: "/wɔːr/",
              }),
            ]}
          />
          {/* /ɔː/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [{ part: "/ɔː/", type: "phonetics" }],
              }),
              // door
              ...wordRowList({
                audio: "/assets/audio/general/door-uk.mp3",
                parts: ["d", { part: "oor", type: "mark" }],
                phonetics: "/dɔː/",
              }),
              // four
              ...wordRowList({
                audio: "/assets/audio/general/four-uk.mp3",
                parts: ["f", { part: "our", type: "mark" }],
                phonetics: "/fɔː/",
              }),
              // north
              ...wordRowList({
                audio: "/assets/audio/general/north-uk.mp3",
                parts: ["n", { part: "orth", type: "mark" }],
                phonetics: "/nɔːθ/",
              }),
              // war
              ...wordRowList({
                audio: "/assets/audio/general/war-uk.mp3",
                parts: ["w", { part: "ar", type: "mark" }],
                phonetics: "/wɔː/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'a': /æ/, /ɑː/, /eɪ/, /ə/ */}
        <Section
          id="letter-a"
          label="Letter 'a': /æ/, /ɑː/, /eɪ/, /ə/"
          heading={3}
        >
          {/* /æ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
                phonetics: "/æ/",
              }),
              // apple
              ...wordRowList({
                audio: "/assets/audio/general/apple.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "pple" }],
                phonetics: "/ˈæp.əl/",
                pt: "maçã",
              }),
              // anniversary
              ...wordRowList({
                audio: "/assets/audio/general/anniversary.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "nniversary" }],
                phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
              }),
              // bad
              ...wordRowList({
                audio: "/assets/audio/general/bad.mp3",
                parts: [
                  { part: "b" },
                  { part: "a", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/bæd/",
              }),
              // bat
              ...wordRowList({
                audio: "/assets/audio/general/bat.mp3",
                parts: [
                  { part: "b" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/bæt/",
              }),
              // cap
              ...wordRowList({
                audio: "/assets/audio/general/cap.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "p" },
                ],
                phonetics: "/kæp/",
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/kæt/",
              }),
              // fat
              ...wordRowList({
                audio: "/assets/audio/general/fat.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/fæt/",
              }),
              // habit
              ...wordRowList({
                audio: "/assets/audio/general/habit.mp3",
                parts: [
                  { part: "h" },
                  { part: "a", type: "mark" },
                  { part: "bit" },
                ],
                phonetics: "/ˈhæb.ɪt/",
              }),
              // hat
              ...wordRowList({
                audio: "/assets/audio/general/hat.mp3",
                parts: [
                  { part: "h" },
                  { part: "a", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/hæt/",
              }),
              // has
              ...wordRowList({
                audio: "/assets/audio/general/has.mp3",
                parts: [
                  { part: "h" },
                  { part: "a", type: "mark" },
                  { part: "s" },
                ],
                phonetics: "/hæz/",
              }),
              // have
              ...wordRowList({
                audio: "/assets/audio/general/have.mp3",
                parts: [
                  { part: "h" },
                  { part: "a", type: "mark" },
                  { part: "ve" },
                ],
                phonetics: "/hæv/",
              }),
              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [
                  { part: "m" },
                  { part: "a", type: "mark" },
                  { part: "n" },
                ],
                phonetics: "/mæn/",
                square: false,
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/bats-usually-eat-apples.mp3",
                parts: ["Bats usually eat apples."],
                pt: "Morcegos normalmente comem maçã.",
              }),
              example({
                audio: "/assets/audio/general/the-cat-is-on-the-mat.mp3",
                parts: ["The cat is on the mat."],
                pt: "O gato está no tapete.",
              }),
              example({
                audio: "/assets/audio/general/the-man-has-a-black-cat.mp3",
                parts: ["The man has a black hat."],
                pt: "O homem tem um chapéu preto.",
              }),
              example({
                audio: "/assets/audio/general/she-has-a-bad-habit.mp3",
                parts: [{ part: "She has a bad habit." }],
                pt: "Ela tem um mau hábito.",
              }),
              example({
                audio: "/assets/audio/general/i-have-a-map-in-my-bag.mp3",
                parts: [{ part: "I have a map in my bag." }],
                pt: "Eu tenho um mapa na minha bolsa.",
              }),
            ]}
          />
          <LineBreak />

          {/* /ɑː/ */}
          <Phonetics
            value={[
              // /ɑː/ (long)
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                parts: [{ part: "/ɑː/", type: "phonetics" }],
              }),
              // calm
              ...wordRowList({
                audio: "/assets/audio/general/calm.mp3",
                parts: [
                  { part: "c" },
                  { part: "a", type: "mark" },
                  { part: "lm" },
                ],
                phonetics: "/kɑːm/",
              }),
              // father
              ...wordRowList({
                audio: "/assets/audio/general/father.mp3",
                parts: [
                  { part: "f" },
                  { part: "a", type: "mark" },
                  { part: "ther" },
                ],
                phonetics: "/ˈfɑːðər/",
              }),
              // palm
              ...wordRowList({
                audio: "/assets/audio/general/palm.mp3",
                parts: [
                  { part: "p" },
                  { part: "a", type: "mark" },
                  { part: "lm" },
                ],
                phonetics: "/pɑːm/",
              }),
              // spa
              ...wordRowList({
                audio: "/assets/audio/general/spa.mp3",
                parts: [{ part: "sp" }, { part: "a", type: "mark" }],
                phonetics: "/spɑː/",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • Keep calm and hold my arm.
              example({
                audio: "/assets/audio/general/keep-calm-and-hold-my-arm.mp3",
                parts: ["Keep calm and hold my arm."],
                pt: "Fique calmo e segure o meu braço.",
              }),
              // • My father drove the car far away.
              example({
                audio:
                  "/assets/audio/general/my-father-drove-the-car-far-away.mp3",
                parts: ["My father drove the car far away."],
                pt: "Meu pai dirigiu o carro para longe.",
              }),
              // • I could really use a spa right now.
              example({
                audio:
                  "/assets/audio/general/i-could-really-use-a-spa-right-now.mp3",
                parts: ["I could really use a spa right now."],
                pt: "Preciso de um spa no momento.",
              }),
            ]}
          />
          <LineBreak />

          {/* /eɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                phonetics: "/eɪ/",
              }),
              // ate
              ...wordRowList({
                audio: "/assets/audio/general/ate.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "te" }],
                phonetics: "/eɪt/",
                pt: "comi, comeu (passado verbo eat)",
              }),
              // chase
              ...wordRowList({
                audio: "/assets/audio/general/chase.mp3",
                parts: [
                  { part: "ch" },
                  { part: "a", type: "mark" },
                  { part: "se" },
                ],
                phonetics: "/tʃeɪs/",
              }),
              // day
              ...wordRowList({
                audio: "/assets/audio/general/day.mp3",
                parts: [
                  { part: "d" },
                  { part: "a", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "/deɪ/",
              }),
              // game
              ...wordRowList({
                audio: "/assets/audio/general/game.mp3",
                parts: [
                  { part: "g" },
                  { part: "a", type: "mark" },
                  { part: "me" },
                ],
                phonetics: "/ɡeɪm/",
              }),
              // made
              ...wordRowList({
                audio: "/assets/audio/general/made.mp3",
                parts: [
                  { part: "m" },
                  { part: "a", type: "mark" },
                  { part: "de" },
                ],
                phonetics: "//",
              }),
              // tape
              ...wordRowList({
                audio: "/assets/audio/general/tape.mp3",
                parts: [
                  { part: "t" },
                  { part: "a", type: "mark" },
                  { part: "pe" },
                ],
                phonetics: "/teɪp/",
              }),
              // pay
              ...wordRowList({
                audio: "/assets/audio/general/pay.mp3",
                parts: [
                  { part: "p" },
                  { part: "a", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "/peɪ/",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • I ate a sandwich this morning.
              example({
                audio:
                  "/assets/audio/general/i-ate-a-sandwhich-this-morning.mp3",
                parts: ["I ate a sandwich this morning."],
                pt: "Eu comi um sanduíche esta manhã.",
              }),
              // • She chased the dog across the yard.
              example({
                audio:
                  "/assets/audio/general/she-chased-the-dog-across-the-yard.mp3",
                parts: ["She chased the dog across the yard."],
                pt: "Ela correu atrás do cachorro pelo quintal.",
              }),
              // • We played a fun game after school.
              example({
                audio:
                  "/assets/audio/general/we-played-a-fun-game-after-school.mp3",
                parts: ["We played a fun game after school."],
                pt: "Nós jogamos um jogo divertido depois da escola.",
              }),
            ]}
          />
          <LineBreak />
          {/* /ə/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                phonetics: "/ə/",
              }),
              // a
              ...wordRowList({
                parts: [{ part: "a", type: "mark" }],
                phonetics: "/ə/",
              }),
              // about
              ...wordRowList({
                audio: "/assets/audio/general/about.mp3",
                parts: [{ part: "a", type: "mark" }, "bout"],
                phonetics: "/əˈweɪ/",
              }),
              // above
              ...wordRowList({
                audio: "/assets/audio/general/above.mp3",
                parts: [{ part: "a", type: "mark" }, { part: "bove" }],
                phonetics: "/əˈbʌv/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/idea.mp3",
                parts: ["ide", { part: "a", type: "mark" }],
                phonetics: "/aɪˈdiː.ə/",
              }),
              // of
              ...wordRowList({
                audio: "/assets/audio/general/of.mp3",
                parts: [{ part: "o", type: "mark" }, "f"],
                phonetics: "/əv/",
              }),
              // ago
              ...wordRowList({
                audio: "/assets/audio/general/ago.mp3",
                parts: [{ part: "a", type: "mark" }, "go"],
                phonetics: "/əˈɡoʊ/",
              }),
              // away
              ...wordRowList({
                audio: "/assets/audio/general/away.mp3",
                parts: [{ part: "a", type: "mark" }, "way"],
                phonetics: "/əˈweɪ/",
              }),
              // banana
              ...wordRowList({
                audio: "/assets/audio/general/banana.mp3",
                parts: [
                  { part: "b" },
                  { part: "a", type: "mark" },
                  { part: "nan" },
                  { part: "a", type: "mark" },
                ],
                phonetics: "/bəˈnænə/",
              }),
              // sofa
              ...wordRowList({
                audio: "/assets/audio/general/sofa.mp3",
                parts: ["sof", { part: "a", type: "mark" }],
                phonetics: "/ˈsoʊ.fə/",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • Bananas contain a lot of potassium.
              example({
                audio:
                  "/assets/audio/general/bananas-contain-a-lot-of-potassium.mp3",
                parts: ["Bananas contain a lot of potassium."],
                pt: "Bananas contém muito potássio.",
              }),
              // • It's out of ideas.
              example({
                audio: "/assets/audio/general/its-out-of-ideas.mp3",
                parts: ["It's out of ideas."],
                pt: "Está sem bateria.",
              }),

              // • We sat on the sofa a few minutes ago.
              example({
                audio:
                  "/assets/audio/general/we-sat-on-the-sofa-minutes-ago.mp3",
                parts: ["We sat on the sofa a few minutes ago."],
                pt: "Nós sentamos no sofá há alguns minutos.",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ai:' /e/ */}
        <Section id="letters-ai" label="Letters 'ai:' /e/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
                parts: [{ part: "/e/", type: "phonetics" }],
              }),

              // said
              ...wordRowList({
                audio: "/assets/audio/general/said.mp3",
                parts: ["s", { part: "ai", type: "mark" }, "d"],
                phonetics: "/sed/",
              }),

              // again
              ...wordRowList({
                audio: "/assets/audio/general/again.mp3",
                parts: ["ag", { part: "ai", type: "mark" }, "n"],
                phonetics: "/əˈɡen/",
              }),

              // against
              ...wordRowList({
                audio: "/assets/audio/general/against.mp3",
                parts: ["ag", { part: "ai", type: "mark" }, "nst"],
                phonetics: "/əˈɡenst/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'au': /ɔː/ */}
        <Section id="letters-au" label="Letters 'au': /ɔː/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                phonetics: "/ɔː/",
              }),
              // audio
              ...wordRowList({
                audio: "/assets/audio/general/audio.mp3",
                parts: [{ part: "au", type: "mark" }, "dio"],
                phonetics: "/ˈɔː.di.oʊ/",
              }),
              // automatic
              ...wordRowList({
                audio: "/assets/audio/general/automatic.mp3",
                parts: [{ part: "au", type: "mark" }, "tomatic"],
                phonetics: "/ˈɔː.t̬əˈmæt̬.ɪk/",
              }),
              // automaton
              ...wordRowList({
                audio: "/assets/audio/general/automaton.mp3",
                parts: [{ part: "au", type: "mark" }, "tomaton"],
                phonetics: "/ɔːˈtɑː.mə.tən/",
              }),
              // daughter
              ...wordRowList({
                audio: "/assets/audio/general/daughter.mp3",
                parts: ["d", { part: "au", type: "mark" }, "ghter"],
                phonetics: "/ˈdɔː.t̬ɚ/",
              }),
            ]}
          />
        </Section>

        {/*  Letters 'aw', 'awe': /ɔː/ */}
        <Section
          id="letters-aw-awe"
          label="Letters 'aw', 'awe': /ɔː/"
          heading={3}
        >
          {/* -aw */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                parts: [{ part: "'aw'", type: "bold" }],
                phonetics: "/ɑː/",
              }),
              // law
              ...wordRowList({
                audio: "/assets/audio/general/law.mp3",
                parts: ["l", { part: "aw", type: "mark" }],
                phonetics: "/lɑː/",
                pt: "lei",
              }),

              // saw
              ...wordRowList({
                audio: "/assets/audio/general/saw.mp3",
                parts: ["s", { part: "aw", type: "mark" }],
                phonetics: "/sɑː/",
                pt: "viu / serra",
              }),

              // draw
              ...wordRowList({
                audio: "/assets/audio/general/draw.mp3",
                parts: ["dr", { part: "aw", type: "mark" }],
                phonetics: "/drɑː/",
                pt: "desenhar / puxar / empatar",
              }),

              // raw
              ...wordRowList({
                audio: "/assets/audio/general/raw.mp3",
                parts: ["r", { part: "aw", type: "mark" }],
                phonetics: "/rɑː/",
                pt: "cru",
              }),

              // claw
              ...wordRowList({
                audio: "/assets/audio/general/claw.mp3",
                parts: ["cl", { part: "aw", type: "mark" }],
                phonetics: "/klɑː/",
                pt: "garra",
              }),

              // jaw
              ...wordRowList({
                audio: "/assets/audio/general/jaw.mp3",
                parts: ["j", { part: "aw", type: "mark" }],
                phonetics: "/dʒɑː/",
                pt: "mandíbula",
              }),
            ]}
          />
          {/* awe- */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                parts: [{ part: "'awe'", type: "bold" }],
                phonetics: "/ɑː/",
              }),
              // awe
              ...wordRowList({
                audio: "/assets/audio/general/awe.mp3",
                parts: [{ part: "awe", type: "mark" }, ""],
                phonetics: "/ˈɑː/",
              }),
              // awesome
              ...wordRowList({
                audio: "/assets/audio/general/awesome.mp3",
                parts: [{ part: "awe", type: "mark" }, "some"],
                phonetics: "/ˈɑː.səm/",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/this-is-the-law.mp3",
                parts: ["This is the law."],
                pt: "Esta é a lei.",
              }),

              example({
                audio: "/assets/audio/general/i-saw-a-bird.mp3",
                parts: ["I saw a bird."],
                pt: "Eu vi um pássaro.",
              }),

              example({
                audio: "/assets/audio/general/lets-draw-a-picture.mp3",
                parts: ["Let’s draw a picture."],
                pt: "Vamos desenhar um desenho.",
              }),

              example({
                audio: "/assets/audio/general/the-meat-is-raw.mp3",
                parts: ["The meat is raw."],
                pt: "A carne está crua.",
              }),

              example({
                audio: "/assets/audio/general/the-cat-has-a-sharp-claw.mp3",
                parts: ["The cat has a sharp claw."],
                pt: "O gato tem uma garra afiada.",
              }),

              example({
                audio: "/assets/audio/general/my-jaw-hurts.mp3",
                parts: ["My jaw hurts."],
                pt: "Minha mandíbula dói.",
              }),

              example({
                audio: "/assets/audio/general/that-movie-is-awesome.mp3",
                parts: ["That movie is awesome."],
                pt: "Esse filme é incrível.",
              }),

              example({
                audio: "/assets/audio/general/we-watched-in-awe.mp3",
                parts: ["We watched in awe."],
                pt: "Nós assistimos com admiração.",
              }),
            ]}
          />
        </Section>

        {/* Letters: 'ay': /eɪ/ */}
        <Section id="letters-ay" label="Letters: 'ay': /eɪ/'" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                phonetics: "/eɪ/",
              }),
              // day
              ...wordRowList({
                audio: "/assets/audio/general/day.mp3",
                parts: [
                  { part: "d" },
                  { part: "a", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "/deɪ/",
              }),
              // lay
              ...wordRowList({
                audio: "/assets/audio/general/lay.mp3",
                parts: [
                  { part: "l" },
                  { part: "a", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "/leɪ/",
              }),
              // pay
              ...wordRowList({
                audio: "/assets/audio/general/pay.mp3",
                parts: [
                  { part: "p" },
                  { part: "a", type: "mark" },
                  { part: "y" },
                ],
                phonetics: "/peɪ/",
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • I’ll pay you tomorrow.
              example({
                audio: "/assets/audio/general/ill-pay-you-tomorrow.mp3",
                parts: ["I’ll pay you tomorrow."],
                pt: "Te pago amanhã.",
              }),
              // • She laid the book on the table.
              example({
                audio:
                  "/assets/audio/general/she-laid-the-book-on-the-table.mp3",
                parts: ["She laid the book on the table."],
                pt: "Ela colocou o livro na mesa.",
              }),
              // • It’s a beautiful day today.
              example({
                audio: "/assets/audio/general/its-a-beautiful-day-today.mp3",
                parts: ["It’s a beautiful day today."],
                pt: "Hoje é um dia bonito.",
              }),
            ]}
          />
        </Section>

        {/* Letter 'e' silent */}
        <Section id="letter-e-silent" label="Letter 'e' silent" heading={3}>
          <Phonetics
            value={[
              // ate
              ...wordRowList({
                audio: "/assets/audio/general/ate.mp3",
                parts: ["at(e)"],
                phonetics: "/eɪt/",
              }),
              // fate
              ...wordRowList({
                audio: "/assets/audio/general/fate.mp3",
                parts: ["fat(e)"],
                phonetics: "/feɪt/",
              }),
              // time
              ...wordRowList({
                audio: "/assets/audio/general/time.mp3",
                parts: ["tim(e)"],
                phonetics: "/taɪm/",
              }),
              // make
              ...wordRowList({
                audio: "/assets/audio/general/make.mp3",
                parts: ["mak(e)"],
                phonetics: "/meɪk/",
              }),
              // where
              ...wordRowList({
                audio: "/assets/audio/general/where.mp3",
                parts: ["wher(e)"],
                phonetics: "/wer/",
              }),
              // write
              ...wordRowList({
                audio: "/assets/audio/general/right-write.mp3",
                parts: ["writ(e)"],
                phonetics: "/raɪt/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ea': /e/, /iː/  */}
        <Section id="letters-ea" label="Letters 'ea': /e/, /iː/" heading={3}>
          {/* /e/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/e/",
              }),
              // bread
              ...wordRowList({
                audio: "/assets/audio/general/bread.mp3",
                parts: ["br", { part: "ea", type: "mark" }, "d"],
                phonetics: "/bred/",
              }),
              // head
              ...wordRowList({
                audio: "/assets/audio/general/head.mp3",
                parts: ["h", { part: "ea", type: "mark" }, "d"],
                phonetics: "/hed/",
              }),
              // meant
              ...wordRowList({
                audio: "/assets/audio/general/meant.mp3",
                parts: ["m", { part: "ea", type: "mark" }, "nt"],
                phonetics: "/ment/",
              }),
            ]}
          />
          <LineBreak />
          {/* /iː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/i/",
              }),
              // eat
              ...wordRowList({
                audio: "/assets/audio/general/eat.mp3",
                parts: [{ part: "ea", type: "mark" }, "t"],
                phonetics: "/iːt/",
              }),
              // meat
              ...wordRowList({
                audio: "/assets/audio/general/meat.mp3",
                parts: ["m", { part: "ea", type: "mark" }, "t"],
                phonetics: "/miːt/",
              }),
              // seat
              ...wordRowList({
                audio: "/assets/audio/general/seat.mp3",
                parts: ["s", { part: "ea", type: "mark" }, "t"],
                phonetics: "/siːt/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'eau': /oʊ/ */}
        <Section
          id="letters-eau"
          label="Letters 'eau': /juː/, /oʊ/"
          heading={3}
        >
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/oʊ.mp3",
                parts: [{ part: "/juː/", type: "phonetics" }],
              }),
              // beauty
              ...wordRowList({
                audio: "/assets/audio/general/beauty.mp3",
                parts: ["b", { part: "eau", type: "mark" }, "ty"],
                phonetics: "/ˈbjuː.t̬i/",
                pt: "beleza",
              }),

              // beautiful
              ...wordRowList({
                audio: "/assets/audio/general/beautiful.mp3",
                parts: ["b", { part: "eau", type: "mark" }, "tiful"],
                phonetics: "/ˈbjuː.t̬ə.fəl/",
                pt: "bonito / bonito(a)",
              }),
            ]}
          />
          <LineBreak />
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/oʊ.mp3",
                parts: [{ part: "/oʊ/", type: "phonetics" }],
              }),

              // beau
              ...wordRowList({
                audio: "/assets/audio/general/beau.mp3",
                parts: ["b", { part: "eau", type: "mark" }],
                phonetics: "/boʊ/",
              }),

              // bureau
              ...wordRowList({
                audio: "/assets/audio/general/bureau.mp3",
                parts: ["bur", { part: "eau", type: "mark" }],
                phonetics: "/ˈbjʊr.oʊ/",
                pt: "escritório / departamento",
              }),

              // plateau (último sem square)
              ...wordRowList({
                audio: "/assets/audio/general/plateau.mp3",
                parts: ["plat", { part: "eau", type: "mark" }],
                phonetics: "/plæˈtoʊ/",
                pt: "planalto / estabilizar",
                square: false,
              }),
            ]}
          />
        </Section>

        {/* Letters 'ee': /iː/ */}
        <Section id="letters-ee" label="Letters 'ee': /iː/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/iː/",
              }),
              // see
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: ["s", { part: "ee", type: "mark" }],
                phonetics: "/siː/",
              }),

              // green
              ...wordRowList({
                audio: "/assets/audio/general/green.mp3",
                parts: ["gr", { part: "ee", type: "mark" }, "n"],
                phonetics: "/ɡriːn/",
              }),

              // meet
              ...wordRowList({
                audio: "/assets/audio/general/meet.mp3",
                parts: ["m", { part: "ee", type: "mark" }, "t"],
                phonetics: "/miːt/",
              }),

              // need
              ...wordRowList({
                audio: "/assets/audio/general/need.mp3",
                parts: ["n", { part: "ee", type: "mark" }, "d"],
                phonetics: "/niːd/",
              }),

              // sleep
              ...wordRowList({
                audio: "/assets/audio/general/sleep.mp3",
                parts: ["sl", { part: "ee", type: "mark" }, "p"],
                phonetics: "/sliːp/",
              }),

              // tree
              ...wordRowList({
                audio: "/assets/audio/general/tree.mp3",
                parts: ["tr", { part: "ee", type: "mark" }],
                phonetics: "/triː/",
                square: false,
              }),
            ]}
          />
        </Section>

        {/* Letters 'ei': /eɪ/ */}
        <Section id="letters-ei" label="Letters 'ei': /eɪ/" heading={3}>
          <Phonetics
            value={[
              // /eɪ/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                phonetics: "/eɪ/",
              }),

              // eight
              ...wordRowList({
                audio: "/assets/audio/general/eight.mp3",
                parts: [{ part: "ei", type: "mark" }, "ght"],
                phonetics: "/eɪt/",
              }),

              // vein
              ...wordRowList({
                audio: "/assets/audio/general/vein.mp3",
                parts: ["v", { part: "ei", type: "mark" }, "n"],
                phonetics: "/veɪn/",
              }),

              // rein
              ...wordRowList({
                audio: "/assets/audio/general/rein.mp3",
                parts: ["r", { part: "ei", type: "mark" }, "n"],
                phonetics: "/reɪn/",
              }),

              // neighbor
              ...wordRowList({
                audio: "/assets/audio/general/neighbor.mp3",
                parts: ["n", { part: "ei", type: "mark" }, "ghbor"],
                phonetics: "/ˈneɪ.bɚ/",
              }),

              // weight (último sem square)
              ...wordRowList({
                audio: "/assets/audio/general/weight.mp3",
                parts: ["w", { part: "ei", type: "mark" }, "ght"],
                phonetics: "/weɪt/",
                square: false,
              }),
            ]}
          />
        </Section>

        {/* Letters 'eo' */}
        <Section id="letters-eo" label="Letters 'eo': /iː/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/iː/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["", { part: "", type: "" }, ""],
                phonetics: "//",
              }),
            ]}
          />
        </Section>

        {/* Letter 'et': /eɪ/ */}
        <Section id="letters-et" label="Letter 'et': /eɪ/" heading={3}>
          <Phonetics
            value={[
              // /eɪ/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/eɪ.mp3",
                phonetics: "/eɪ/",
              }),

              // ballet
              ...wordRowList({
                audio: "/assets/audio/general/ballet.mp3",
                parts: ["ball", { part: "et", type: "mark" }],
                phonetics: "/bæˈleɪ/",
              }),

              // buffet
              ...wordRowList({
                audio: "/assets/audio/general/buffet.mp3",
                parts: ["buff", { part: "et", type: "mark" }],
                phonetics: "/bəˈfeɪ/",
              }),

              // gourmet
              ...wordRowList({
                audio: "/assets/audio/general/gourmet.mp3",
                parts: ["gourm", { part: "et", type: "mark" }],
                phonetics: "/ɡʊrˈmeɪ/",
                square: false,
              }),
            ]}
          />
        </Section>

        {/* Letters 'ey': /i/, /eɪ/ */}
        <Section id="letters-ey" label="Letters 'ey': /i/, /eɪ/" heading={3}>
          {/* /i/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/i/",
              }),
              // abbey
              ...wordRowList({
                audio: "/assets/audio/general/abbey.mp3",
                parts: ["abb", { part: "ey", type: "mark" }],
                phonetics: "/ˈæb.i/",
              }),
              // disney
              ...wordRowList({
                audio: "/assets/audio/general/disney.mp3",
                parts: ["Disn", { part: "ey", type: "mark" }],
                phonetics: "/ˈdɪz.ni/",
              }),
              // donkey
              ...wordRowList({
                audio: "/assets/audio/general/donkey.mp3",
                parts: ["donk", { part: "ey", type: "mark" }],
                phonetics: "/ˈdɑːŋ.ki/",
              }),
              // money
              ...wordRowList({
                audio: "/assets/audio/general/money.mp3",
                parts: ["mon", { part: "ey", type: "mark" }],
                phonetics: "/ˈmʌn.i/",
              }),
              // odyssey
              ...wordRowList({
                audio: "/assets/audio/general/odyssey.mp3",
                parts: ["odyss", { part: "ey", type: "mark" }],
                phonetics: "/ˈɑː.dɪ.si/",
              }),
              // Sydney
              ...wordRowList({
                audio: "/assets/audio/general/sydney.mp3",
                parts: ["sydn", { part: "ey", type: "mark" }],
                phonetics: "/ˈsɪd.ni/",
              }),
            ]}
          />
        </Section>

        {/* Letter 'i': /i/, /ɪ/, /ə/, /aɪ/, /ɑː/ */}
        <Section
          id="letter-i"
          label="Letter 'i': /i/, /ɪ/, /ə/, /aɪ/, /ɑː/"
          heading={3}
        ></Section>

        {/* Letters 'ie': /i/, /aɪ/ */}
        <Section
          id="letters-ie"
          label="Letters 'ie': /i/, /aɪ/"
          heading={3}
        ></Section>

        {/* Letters 'n', 'ng': /ŋ/ */}
        <Section id="letters-n-ng" label="Letters 'n', 'ng': /ŋ/" heading={3}>
          {/* 'n' */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/n.mp3",
                parts: [{ part: "'n'", type: "bold" }],
                phonetics: "/ŋ/",
              }),

              // anger
              ...wordRowList({
                audio: "/assets/audio/general/anger.mp3",
                parts: ["a", { part: "n", type: "mark" }, "ger"],
                phonetics: "/ˈæŋ.ɡɚ/",
                pt: "raiva, braveza",
              }),

              // angry
              ...wordRowList({
                audio: "/assets/audio/general/angry.mp3",
                parts: ["a", { part: "n", type: "mark" }, "gry"],
                phonetics: "/ˈæŋ.ɡri/",
                pt: "com raiva",
              }),
            ]}
          />
          <LineBreak />
          {/* 'ng' */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
                phonetics: "/ŋ/",
                parts: [{ part: "'ng'", type: "bold" }],
              }),

              // going
              ...wordRowList({
                audio: "/assets/audio/general/going.mp3",
                parts: ["goi", { part: "ng", type: "mark" }],
                phonetics: "/ɡoʊɪŋ/",
                pt: "em andamento",
              }),

              // interesting
              ...wordRowList({
                audio: "/assets/audio/general/interesting.mp3",
                parts: ["interesti", { part: "ng", type: "mark" }],
                phonetics: "/ˈɪn.trə.stɪŋ/",
                pt: "interessante",
              }),

              // thing
              ...wordRowList({
                audio: "/assets/audio/general/thing.mp3",
                parts: ["thi", { part: "ng", type: "mark" }],
                phonetics: "/θɪŋ/",
                pt: "coisa",
              }),
            ]}
          />
        </Section>

        {/* Letter 'o': /ɑː/, /ɔː/, /oʊ/ */}
        <Section id="letter-o" label="Letter 'o': /ɑː/, /ɔː/, /oʊ/" heading={3}>
          {/* /ɑː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɑ.mp3",
                phonetics: "/ɑː/",
              }),
              // donkey
              ...wordRowList({
                audio: "/assets/audio/general/donkey.mp3",
                parts: ["d", { part: "o", type: "mark" }, "nkey"],
                phonetics: "/ˈdɑːŋ.ki/",
              }),
              // hot
              ...wordRowList({
                audio: "/assets/audio/general/hot.mp3",
                parts: [
                  { part: "h" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/hɑːt/",
              }),
              // job
              ...wordRowList({
                audio: "/assets/audio/general/job.mp3",
                parts: [
                  { part: "j" },
                  { part: "o", type: "mark" },
                  { part: "b" },
                ],
                phonetics: "/dʒɑːb/",
              }),
              // lot
              ...wordRowList({
                audio: "/assets/audio/general/lot.mp3",
                parts: [
                  { part: "l" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/lɑːt/",
              }),
              // not
              ...wordRowList({
                audio: "/assets/audio/general/not.mp3",
                parts: [
                  { part: "n" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/nɑːt/",
              }),
              // odyssey
              ...wordRowList({
                audio: "/assets/audio/general/odyssey.mp3",
                parts: [{ part: "o", type: "mark" }, "dyssey"],
                phonetics: "/ˈɑː.dɪ.si/",
              }),
              // office
              ...wordRowList({
                audio: "/assets/audio/general/office.mp3",
                parts: [{ part: "o", type: "mark" }, "ffice"],
                phonetics: "/ˈɑː.fɪs/",
              }),
              // rob
              ...wordRowList({
                audio: "/assets/audio/general/rob.mp3",
                parts: [
                  { part: "r" },
                  { part: "o", type: "mark" },
                  { part: "b" },
                ],
                phonetics: "/rɑːb/",
              }),
              // rock
              ...wordRowList({
                audio: "/assets/audio/general/rock.mp3",
                parts: [
                  { part: "r" },
                  { part: "o", type: "mark" },
                  { part: "ck" },
                ],
                phonetics: "/rɑːk/",
              }),
              // shop
              ...wordRowList({
                audio: "/assets/audio/general/shop.mp3",
                parts: ["sh", { part: "o", type: "mark" }, "p"],
                phonetics: "/ʃɑːp/",
              }),
              // stop
              ...wordRowList({
                audio: "/assets/audio/general/stop.mp3",
                parts: ["st", { part: "o", type: "mark" }, "p"],
                phonetics: "/stɑːp/",
              }),
              // top
              ...wordRowList({
                audio: "/assets/audio/general/top.mp3",
                parts: [
                  { part: "t" },
                  { part: "o", type: "mark" },
                  { part: "p" },
                ],
                phonetics: "/tɑːp/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'oa': /ɔː/, /oʊ/ */}
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

        {/* etters 'ous': /əs/ */}
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

        {/* Letters 'ow': /aʊ/, /oʊ/ */}
        <Section id="letters-ow" label="Letters 'ow': /aʊ/, /oʊ/" heading={3}>
          {/* /aʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aʊ.mp3",
                phonetics: "/aʊ/",
              }),
              // brown
              ...wordRowList({
                audio: "/assets/audio/general/bow-verb.mp3",
                parts: [
                  "b",
                  { part: "ow", type: "mark" },
                  " ",
                  { part: "verb", type: "italic" },
                ],
                phonetics: "/baʊ/",
              }),
              // brown
              ...wordRowList({
                audio: "/assets/audio/general/brown.mp3",
                parts: ["br", { part: "ow", type: "mark" }, "n"],
                phonetics: "/braʊn/",
              }),
              // clown
              ...wordRowList({
                audio: "/assets/audio/general/clown.mp3",
                parts: ["cl", { part: "ow", type: "mark" }, "n"],
                phonetics: "/klaʊn/",
              }),
              // cow
              ...wordRowList({
                audio: "/assets/audio/general/cow.mp3",
                parts: ["c", { part: "ow", type: "mark" }, ""],
                phonetics: "/kaʊ/",
              }),
              // coward
              ...wordRowList({
                audio: "/assets/audio/general/coward.mp3",
                parts: ["c", { part: "ow", type: "mark" }, "ard"],
                phonetics: "/ˈkaʊ.ɚd/",
              }),
              // frown
              ...wordRowList({
                audio: "/assets/audio/general/frown.mp3",
                parts: ["fr", { part: "ow", type: "mark" }, "n"],
                phonetics: "/fraʊn/",
              }),
              // town
              ...wordRowList({
                audio: "/assets/audio/general/town.mp3",
                parts: ["t", { part: "ow", type: "mark" }, "n"],
                phonetics: "/taʊn/",
              }),
            ]}
          />
          <LineBreak />
          {/* /oʊ/ */}
          <Phonetics
            value={[
              // ...
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
                phonetics: "/oʊ/",
              }),
              // bow
              ...wordRowList({
                audio: "/assets/audio/general/bow-noun.mp3",
                parts: [
                  "b",
                  { part: "ow", type: "mark" },
                  " ",
                  { part: "noun", type: "italic" },
                ],
                phonetics: "/boʊ/",
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...note({
                parts: ["Listen to the differences. "],
              }),
            ]}
          />

          {/* cow vs. call */}
          <Phonetics
            value={[
              //cow vs. call
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/cow.mp3",
                  parts: ["c", { part: "ow", type: "mark" }],
                  phonetics: "/kaʊ/",
                },
                right: {
                  audio: "/assets/audio/general/call.mp3",
                  parts: ["ca", { part: "ll", type: "mark" }],
                  phonetics: "/kɔːl/",
                },
              }),
            ]}
          />
          {/* bow vs. bowl */}
          <Phonetics
            value={[
              // bow vs. bowl
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/bow-noun.mp3",
                  parts: [
                    "b",
                    {
                      part: "ow",
                      type: "mark",
                    },
                  ],
                  phonetics: "/boʊ/",
                },
                right: {
                  audio: "/assets/audio/general/bowl.mp3",
                  parts: ["bow", { part: "l", type: "mark" }],
                  phonetics: "/boʊl/",
                },
              }),
            ]}
          />
        </Section>

        {/* Letter s'u': /uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/ */}
        <Section
          id="letter-u"
          label="Letters 'u': /uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/"
          heading={3}
        >
          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/u.mp3",
                phonetics: "/uː/",
              }),
              // student
              ...wordRowList({
                audio: "/assets/audio/general/student.mp3",
                parts: ["st", { part: "u", type: "mark" }, "dent"],
                phonetics: "/ˈstuː.dənt/",
              }),
            ]}
            word
          />
          <LineBreak />

          <Line
            value={[
              {
                icons: ["attention", "us"],
              },
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
              },
              {
                part: "/ʌ/",
                type: "phonetics",
              },
            ]}
          />
          {/* /ʌ/, */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                phonetics: "/ʌ/",
              }),
              // but
              ...wordRowList({
                audio: "/assets/audio/general/but.mp3",
                parts: ["b", { part: "u", type: "mark" }, "t"],
                phonetics: "/bʌt/",
              }),
              // cuff
              ...wordRowList({
                audio: "/assets/audio/general/cuff.mp3",
                parts: ["c", { part: "u", type: "ark" }, "ff"],
                phonetics: "/kʌf/",
              }),
              // cut
              ...wordRowList({
                audio: "/assets/audio/general/cut.mp3",
                parts: ["c", { part: "u", type: "mark" }, "t"],
                phonetics: "/cʌt/",
              }),
              // hulk
              ...wordRowList({
                audio: "/assets/audio/general/hulk.mp3",
                parts: ["h", { part: "u", type: "mark" }, "lk"],
                phonetics: "/hʌlk/",
              }),
              // hut
              ...wordRowList({
                audio: "/assets/audio/general/hut.mp3",
                parts: ["h", { part: "u", type: "mark" }, "t"],
                phonetics: "/hʌt/",
              }),
              // success
              ...wordRowList({
                audio: "/assets/audio/general/success.mp3",
                parts: ["s", { part: "u", type: "mark" }, "ccess"],
                phonetics: "/səkˈses/",
              }),
              // support
              ...wordRowList({
                audio: "/assets/audio/general/support.mp3",
                parts: ["s", { part: "u", type: "mark" }, "pport"],
                phonetics: "/səˈpɔːrt/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/u.mp3",
                phonetics: "/ɪ/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/u.mp3",
                phonetics: "/ʊ/",
              }),
            ]}
          />
          <LineBreak />

          {/* /jʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/u.mp3",
                phonetics: "/jʊ/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ui': /ɪ/, /aɪ/, /uː/ */}
        <Section
          id="letters-ui"
          label="Letters 'ui': /ɪ/, /aɪ/, /uː/"
          heading={3}
        >
          {/* /ɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/ɪ.mp3",
                phonetics: "/ɪ/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["...", { part: "", type: "" }, ""],
                phonetics: "/.../",
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["...", { part: "", type: "" }, ""],
                phonetics: "/.../",
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/u.mp3",
                phonetics: "/uː/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/nuisance.mp3",
                parts: ["n", { part: "ui", type: "mark" }, "sance"],
                phonetics: "/ˈnuː.səns/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'us': /əs/ */}
        <Section id="letters-us" label="Letters 'us': /əs/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/əs.mp3",
                phonetics: "/əs/",
              }),
              // focus
              ...wordRowList({
                audio: "/assets/audio/general/focus.mp3",
                parts: ["foc", { part: "us", type: "mark" }],
                phonetics: "/ˈfoʊ.kəs/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'sh': /ʃ/ */}
        <Section id="letters-sh" label="Letters 'sh': /ʃ/" heading={3}>
          {/* ... */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/.../",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["...", { part: "", type: "" }, ""],
                phonetics: "/.../",
              }),
            ]}
          />
        </Section>

        {/* Letters '(t)ch': /tʃ/, /ʃ/, /k/ */}
        <Section
          id="letters-(t)ch"
          label="Letters '(t)ch': /tʃ/, /ʃ/, /k/"
          heading={3}
        >
          {/* /.../ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/ɪ.mp3",
                phonetics: "/.../",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["...", { part: "", type: "" }, ""],
                phonetics: "/.../",
              }),
            ]}
          />
          <LineBreak />

          {/* ... */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/.../",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["...", { part: "", type: "" }, ""],
                phonetics: "/.../",
              }),
            ]}
          />
          <LineBreak />

          {/* /.../ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                phonetics: "/.../",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/.mp3",
                parts: ["", { part: "", type: "mark" }, ""],
                phonetics: "/.../",
              }),
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

        {/* Letter 'y': /aɪ/, /i/, /j/ */}
        <Section id="letter-y" label="Letter 'y': /aɪ/, /i/, /j/" heading={3}>
          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // by
              ...wordRowList({
                audio: "/assets/audio/general/by-bye.mp3",
                parts: ["b", { part: "y", type: "mark" }],
                phonetics: "/baɪ/",
              }),
              // bye
              ...wordRowList({
                audio: "/assets/audio/general/by-bye.mp3",
                parts: ["b", { part: "y", type: "mark" }, "e"],
                phonetics: "/baɪ/",
              }),
              // fly
              ...wordRowList({
                audio: "/assets/audio/general/fly.mp3",
                parts: ["fl", { part: "y", type: "mark" }],
                phonetics: "/flaɪ/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/type.mp3",
                parts: ["t", { part: "y", type: "mark" }, "pe"],
                phonetics: "/taɪp/",
              }),
            ]}
          />
          <LineBreak />

          {/* /i/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/i/",
              }),
              // angry
              ...wordRowList({
                audio: "/assets/audio/general/angry.mp3",
                parts: ["angr", { part: "y", type: "mark" }],
                phonetics: "/ˈæŋ.ɡri/",
              }),
              // crazy
              ...wordRowList({
                audio: "/assets/audio/general/crazy.mp3",
                parts: ["craz", { part: "y", type: "mark" }],
                phonetics: "/ˈkreɪ.zi/",
              }),
              // hungry
              ...wordRowList({
                audio: "/assets/audio/general/hungry.mp3",
                parts: ["hungr", { part: "y", type: "mark" }],
                phonetics: "/ˈhʌŋ.ɡri/",
              }),
              // odyssey
              ...wordRowList({
                audio: "/assets/audio/general/odyssey.mp3",
                parts: ["odysse", { part: "y", type: "mark" }],
                phonetics: "/ˈɑː.dɪ.si/",
              }),
              // salty
              ...wordRowList({
                audio: "/assets/audio/general/salty.mp3",
                parts: ["salt", { part: "y", type: "mark" }],
                phonetics: "/ˈsɑːl.t̬i/",
              }),
              // sleepy
              ...wordRowList({
                audio: "/assets/audio/general/sleepy.mp3",
                parts: ["slepp", { part: "y", type: "mark" }],
                phonetics: "/ˈsliː.pi/",
              }),
            ]}
          />
          <LineBreak />

          {/* /j/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/j.mp3",
                phonetics: "/j/",
              }),
              // yes
              ...wordRowList({
                audio: "/assets/audio/general/yes.mp3",
                parts: [{ part: "y", type: "mark" }, "es"],
                phonetics: "/jes/",
              }),
              // year
              ...wordRowList({
                audio: "/assets/audio/general/year.mp3",
                parts: ["y", { part: "ear", type: "mark" }],
                phonetics: "/jɪr/",
              }),
              // yellow
              ...wordRowList({
                audio: "/assets/audio/general/yellow.mp3",
                parts: [{ part: "y", type: "mark" }, "ellow"],
                phonetics: "/ˈjel.oʊ/",
              }),
              // yesterday
              ...wordRowList({
                audio: "/assets/audio/general/yesterday.mp3",
                parts: [{ part: "y", type: "mark" }, "esterday"],
                phonetics: "/ˈjes.tɚ.deɪ/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ye': /aɪ/ */}
        <Section id="letter-y" label="Letter 'y': /aɪ/, /i/, /j/" heading={3}>
          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // bye
              ...wordRowList({
                audio: "/assets/audio/general/by-bye.mp3",
                parts: ["b", { part: "ye", type: "mark" }],
                phonetics: "/baɪ/",
              }),
            ]}
          />
        </Section>

        {/*  Letters 'a': /æ/ vs. 'e', 'ea': /e/ */}
        <Section
          id="letters-a-vs-e"
          label="Letters 'a': /æ/ vs. 'e', 'ea': /e/"
          heading={3}
        >
          <Line
            value={[
              {
                icons: ["attention"],
              },
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
              },
              "'a': ",
              {
                part: "/æ/",
                type: "phonetics",
              },
              " ",
              {
                part: "vs.",
                type: "connector",
              },
              " ",
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
              },
              "'e': ",
              {
                part: "/e/",
                type: "phonetics",
              },
            ]}
          />
          {/* and vs. end */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/and.mp3",
                      },
                      {
                        part: "and",
                      },
                      " ",
                      { part: "/ænd/", type: "phonetics" },
                      " ",
                      { part: "e", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/end.mp3",
                        part: "end",
                      },
                      " ",
                      { part: "/end/", type: "phonetics" },
                      " ",
                      { part: "acabar; fim", type: "portuguese" },
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
                      " Bread and butter.",
                      "  ",
                      { part: "Pão e manteiga.", type: "portuguese" },
                    ],
                  },
                  // This is the end.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/this-is-the-end.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " This is the end.",
                      " ",
                      { part: "Isso é o fim.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* bad vs. bed */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bad.mp3",
                      },
                      {
                        part: "bad",
                      },
                      " ",
                      { part: "/bæd/", type: "phonetics" },
                      " ",
                      { part: "ruim", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/bed.mp3",
                        part: "bed",
                      },
                      " ",
                      { part: "/bed/", type: "phonetics" },
                      " ",
                      { part: "cama", type: "portuguese" },
                    ],
                  },
                  // I had a bad day.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-had-a-bad-day.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I had a bad day.",
                      "  ",
                      { part: "Eu tive um péssimo dia.", type: "portuguese" },
                    ],
                  },
                  // he went to bed early.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/she-went-to-bed-early.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " She went to bed early.",
                      " ",
                      { part: "Ela foi para a cama cedo.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
          {/* bat vs. bet */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/bat.mp3",
                        part: "bat",
                      },
                      " ",
                      { part: "/bæt/", type: "phonetics" },
                      " ",
                      { part: "morcego; taco", type: "portuguese" },
                      {
                        part: " vs. ",
                        type: "connector",
                      },
                      // bet
                      {
                        audio: "/assets/audio/general/bet.mp3",
                        part: "bet",
                      },
                      " ",
                      { part: "/bet/", type: "phonetics" },
                      " ",
                      { part: "apostar", type: "portuguese" },
                    ],
                  },
                  // He hit the ball with a bat.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/he-hit-the-ball-with-a-bat.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " He hit the ball with a bat.",
                      ". ",
                      {
                        part: "Ele acertou a bola com um bastão.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I bet you are right.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-bet-you-were-right.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I bet you are right.",
                      " ",
                      {
                        part: "Aposto que você está certo.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* dad vs. dead */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/dad.mp3",
                      },
                      {
                        part: "dad",
                      },
                      " ",
                      { part: "/dæd/", type: "phonetics" },
                      " ",
                      { part: "pai", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/dead.mp3",
                        part: "dead",
                      },
                      " ",
                      { part: "/ded/", type: "phonetics" },
                      " ",
                      { part: "morto(a)", type: "portuguese" },
                    ],
                  },
                  // My dad is cool.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/my-dad-is-cool.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " My dad is cool.",
                      "  ",
                      { part: "Meu pai é legal.", type: "portuguese" },
                    ],
                  },
                  // The plant is dead.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/the-plant-is-dead.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " The plant is dead.",
                      " ",
                      { part: "A planta está morta.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* had vs. head */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/had.mp3",
                      },
                      {
                        part: "had",
                      },
                      " ",
                      { part: "/hæd/", type: "phonetics" },
                      " ",
                      { part: "teve, tinha", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/head.mp3",
                        part: "head",
                      },
                      " ",
                      { part: "/hed/", type: "phonetics" },
                      " ",
                      { part: "cabeça", type: "portuguese" },
                    ],
                  },
                  // John had a good time.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/john-had-a-good-time.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " John had a good time.",
                      "  ",
                      { part: "John se divertiu.", type: "portuguese" },
                    ],
                  },
                  // He hit his head.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/he-hit-his-head.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " He hit his head.",
                      " ",
                      { part: "Ele bateu a cabeça.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* man vs. men */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/man.mp3",
                      },
                      {
                        part: "man",
                      },
                      " ",
                      { part: "/mæn/", type: "phonetics" },
                      " ",
                      { part: "homem", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/men.mp3",
                        part: "men",
                      },
                      " ",
                      { part: "/men/", type: "phonetics" },
                      " ",
                      { part: "homens", type: "portuguese" },
                    ],
                  },
                  // That man is here.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/the-man-is-here.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " The man is here.",
                      "  ",
                      { part: "O homem está aqui.", type: "portuguese" },
                    ],
                  },
                  // The men are here.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/the-men-are-here.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " The men are here.",
                      "  ",
                      { part: "Os homens estão aqui.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* pan vs. pen */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/pan.mp3",
                      },
                      {
                        part: "pan",
                      },
                      " ",
                      { part: "/pæn/", type: "phonetics" },
                      " ",
                      { part: "panela", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/pen.mp3",
                        part: "pen",
                      },
                      " ",
                      { part: "/pen/", type: "phonetics" },
                      " ",
                      { part: "caneta", type: "portuguese" },
                    ],
                  },
                  // Put the eggs in the pan.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/put-the-eggs-in-the-pan.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Put the eggs in the pan. ",
                      {
                        part: "Coloque os ovos na panela.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I wrote with a pen.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/you-can-use-this-pen.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " You can use this pen. ",
                      {
                        part: "Você pode usar esta caneta.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* shad vs. shed */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/shad.mp3",
                      },
                      {
                        part: "shad",
                      },
                      " ",
                      { part: "/ʃæd/", type: "phonetics" },
                      " ",
                      { part: "peixe (tipo de arenque)", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/shed.mp3",
                        part: "shed",
                      },
                      " ",
                      { part: "/ʃed/", type: "phonetics" },
                      " ",
                      {
                        part: "derramar, perder (pele, cabelo, lágrimas, etc.); galpão",
                        type: "portuguese",
                      },
                    ],
                  },
                  // The fisherman caught a shad.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/the-fisherman-caught-a-shad.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " The fisherman caught a shad.",
                      "  ",
                      {
                        part: "O pescador pegou um peixe shad.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Cats shed their fur every day.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/cats-shed-their-fur-every-day.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Cats shed their fur every day.",
                      " ",
                      {
                        part: "Gatos soltam pelos todos os dias.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // He built a shed in the yard.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/he-built-a-shed-in-the-yard.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " He built a shed in the yard.",
                      " ",
                      {
                        part: "Ele construiu um galpão no quintal.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* tan vs. ten */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/tan.mp3",
                      },
                      {
                        part: "tan",
                      },
                      " ",
                      { part: "/tæn/", type: "phonetics" },
                      " ",
                      { part: "bronzear; bronzeado", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/ten.mp3",
                        part: "ten",
                      },
                      " ",
                      { part: "/ten/", type: "phonetics" },
                      " ",
                      { part: "dez (numeral)", type: "portuguese" },
                    ],
                  },
                  // She got a tan at the beach.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/she-got-a-tan-at-the-beach.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " She got a tan t the beach.",
                      " ",
                      {
                        part: "Ela ficou bronzeada na praia.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // I got ten out of ten on the test.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I got ten out of ten on the test.",
                      { type: "mark", part: "" },
                      "  ",
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

          {/* than vs. then */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/than.mp3",
                      },
                      {
                        part: "than",
                      },
                      " ",
                      { part: "/ðæn/", type: "phonetics" },
                      " ",
                      { part: "do que (comparativo)", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/then.mp3",
                        part: "then",
                      },
                      " ",
                      { part: " /ðen/", type: "phonetics" },
                      " ",
                      { part: "então; depois", type: "portuguese" },
                    ],
                  },
                  // She is taller than me.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/she-is-taller-than-me.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " She is taller than me.",
                      " ",
                      {
                        part: "Ela é mais alta do que eu.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // Finish your work,then.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/finish-your-work-then-you-can-rest.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Finish your work, then you can rest.",
                      "  ",
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
          id="letters-ea-ee-vs-i"
          label="Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/"
          heading={3}
        >
          <Line
            value={[
              {
                icons: ["attention"],
              },
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
              },
              "'ea', 'ee': ",
              {
                part: "/iː/",
                type: "phonetics",
              },
              " ",
              {
                part: "vs.",
                type: "connector",
              },
              " ",
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
              },
              "'i': ",
              {
                part: "/ɪ/",
                type: "phonetics",
              },
            ]}
          />
          {/* eat vs. it*/}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/eat.mp3",
                      },
                      {
                        part: "eat",
                      },
                      " ",
                      { part: "/iːt/", type: "phonetics" },
                      " ",
                      { part: "comer", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/it.mp3",
                        part: "it",
                      },
                      " ",
                      { part: "/ɪt/", type: "phonetics" },
                      " ",
                      { part: "isso / ele / ela", type: "portuguese" },
                    ],
                  },
                  // I don’t usually eat breakfast.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I don’t usually eat breakfast.",
                      "  ",
                      {
                        part: "Normalmente eu não tomo café da manhã.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // It is very cold today.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/it-is-very-cold-today.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " It is very cold today. ",
                      { part: "Está muito frio hoje.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />
          {/* feel vs. fill */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/feel.mp3",
                      },
                      {
                        part: "feel",
                      },
                      " ",
                      { part: "/fiːl/", type: "phonetics" },
                      " ",
                      { part: "sentir", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/fill.mp3",
                        part: "fill",
                      },
                      " ",
                      { part: "/fɪl/", type: "phonetics" },
                      " ",
                      { part: "encher", type: "portuguese" },
                    ],
                  },
                  // I feel tired.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-feel-tired.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I feel tired.",
                      "  ",
                      { part: "Eu me sinto cansado.", type: "portuguese" },
                    ],
                  },
                  // Fill the glass, please.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/fill-the-glass-please.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Fill the glass, please.",
                      "  ",
                      { part: "Encha o copo, por favor.", type: "portuguese" },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* sheep vs. ship */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/sheep.mp3",
                      },
                      {
                        part: "sheep",
                      },
                      " ",
                      { part: "/ʃiːp/", type: "phonetics" },
                      " ",
                      { part: "ovelha", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/ship.mp3",
                        part: "ship",
                      },
                      " ",
                      { part: "/ʃɪp/", type: "phonetics" },
                      " ",
                      { part: "navio", type: "portuguese" },
                    ],
                  },
                  // I saw a sheep on the mark.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/i-saw-a-sheep-on-the-farm.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I saw a sheep on the farm.",
                      "  ",
                      {
                        part: "Eu vi uma ovelha na fazenda.",
                        type: "portuguese",
                      },
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
                      {
                        bullet: true,
                      },
                      " This ship is huge.",
                      "  ",
                      {
                        part: "Este navio é enorme.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* sleep vs. slip */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/sleep.mp3",
                      },
                      {
                        part: "sleep",
                      },
                      " ",
                      { part: "/sliːp/", type: "phonetics" },
                      " ",
                      { part: "dormir", type: "portuguese" },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      {
                        audio: "/assets/audio/general/slip.mp3",
                        part: "slip",
                      },
                      " ",
                      { part: "/slɪp/", type: "phonetics" },
                      " ",
                      { part: "escorregar", type: "portuguese" },
                    ],
                  },
                  // I need to sleep.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/i-need-to-sleep.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " I need to sleep.",
                      ". ",
                      { part: "Eu preciso dormir.", type: "portuguese" },
                    ],
                  },
                  // Becareful not to slip.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/becareful-not-to-slip.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " Be careful not to slip.",
                      " ",
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
          id="letters-n-vs-ng"
          label="Letters 'n': /n/ vs. 'ng': /ŋ/"
          heading={3}
        >
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/n.mp3",
              },
              "'n': ",
              {
                part: "/n/",
                type: "phonetics",
              },
              " ",
              {
                part: "vs.",
                type: "connector",
              },
              " ",
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ŋ.mp3",
              },
              "'ng': ",
              {
                part: "/ŋ/",
                type: "phonetics",
              },
            ]}
          />

          {/* sin vs. sing */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/sin.mp3",
                      },
                      {
                        part: "si",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/sɪn/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "pecado",
                        type: "portuguese",
                      },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      // sing
                      {
                        audio: "/assets/audio/general/sing.mp3",
                      },
                      {
                        part: "si",
                      },
                      {
                        part: "ng",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/sɪŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "cantar",
                        type: "portuguese",
                      },
                    ],
                  },
                  // He confessed his sin.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/he-confessed-his-sin.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " He confessed his sin.",
                      " ",
                      {
                        part: "Ele confessou seu pecado.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // She loves to sing in the shower.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/she-loves-to-sing-in-the-shower.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " She loves to sing in the shower.",
                      " ",
                      {
                        part: "Ela adora cantar no chuveiro.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />

          {/* thin vs. thing */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/thin.mp3",
                      },
                      {
                        part: "thi",
                      },
                      {
                        part: "n",
                        type: "mark",
                      },
                      " ",
                      {
                        part: "/θɪn/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "fino, magro",
                        type: "portuguese",
                      },
                      " ",
                      {
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      // thing
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
                        part: "/θɪŋ/",
                        type: "phonetics",
                      },
                      " ",
                      {
                        part: "coisa",
                        type: "portuguese",
                      },
                    ],
                  },
                  // The ice is thin.
                  {
                    text: [
                      {
                        audio: "/assets/audio/general/the-ice-is-thin.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " The ice is thin.",
                      " ",
                      {
                        part: "O gelo está fino.",
                        type: "portuguese",
                      },
                    ],
                  },
                  // This thing is important.
                  {
                    text: [
                      {
                        audio:
                          "/assets/audio/general/this-thing-is-important.mp3",
                      },
                      {
                        bullet: true,
                      },
                      " This thing is important.",
                      " ",
                      {
                        part: "Esta coisa é importante.",
                        type: "portuguese",
                      },
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
          <Line
            value={[
              {
                icons: ["attention"],
              },
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/.mp3",
              },
              "'...': ",
              {
                part: "/.../",
                type: "phonetics",
              },
              " ",
              {
                part: "vs.",
                type: "connector",
              },
              " ",
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/....mp3",
              },
              "'...': ",
              {
                part: "/.../",
                type: "phonetics",
              },
            ]}
          />

          {/* ... vs ... */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      // ...
                      {
                        audio: "/assets/audio/general/....mp3",
                      },
                      {
                        part: "...",
                      },
                      {
                        part: "...",
                        type: "mark",
                      },
                      " ",
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
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      // ...
                      {
                        audio: "/assets/audio/general/....mp3",
                      },
                      {
                        part: "...",
                      },
                      {
                        part: "...",
                        type: "mark",
                      },
                      " ",
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
                  // ...
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " ...",
                    ],
                  },
                  // ...
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " ...",
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
          <Line
            value={[
              {
                icons: ["attention"],
              },
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/.mp3",
              },
              "'...': ",
              {
                part: "/.../",
                type: "phonetics",
              },
              " ",
              {
                part: "vs.",
                type: "connector",
              },
              " ",
              {
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/....mp3",
              },
              "'...': ",
              {
                part: "/.../",
                type: "phonetics",
              },
            ]}
          />

          {/* ... vs ... */}
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      // ...
                      {
                        audio: "/assets/audio/general/....mp3",
                      },
                      {
                        part: "...",
                      },
                      {
                        part: "...",
                        type: "mark",
                      },
                      " ",
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
                        part: "vs.",
                        type: "connector",
                      },
                      " ",
                      // ...
                      {
                        audio: "/assets/audio/general/....mp3",
                      },
                      {
                        part: "...",
                      },
                      {
                        part: "...",
                        type: "mark",
                      },
                      " ",
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
                  // ...
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " ...",
                    ],
                  },
                  // ...
                  {
                    text: [
                      {
                        bullet: true,
                      },
                      " ...",
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
