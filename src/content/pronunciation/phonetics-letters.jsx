import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Line } from "@/components/molecules/Line";
import { Phonetics } from "@/components/molecules/Phonetics";
import { Examples } from "@/components/molecules/Examples";
import {
  attention,
  bold,
  mark,
  phonetics,
  wordRowList,
  wordComparison,
  example,
  wordVariant,
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
                phonetics("/æ/, /ɑː/, /eɪ/, /ə/")
              ],
            },
            // Letters 'ai':
            {
              href: "letters-ai",
              label: ["Letters 'ai': ", phonetics("/e/")],
            },
            // Letters 'au':
            {
              href: "letters-au",
              label: ["Letters 'au':  ", phonetics("/ɔː/")],
            },
            // Letters 'aw', 'awe':
            {
              href: "letters-aw-awe",
              label: [
                "Letter 'aw', 'awe':  ",
                phonetics("/ɔː/"),
              ],
            },
            // Letters 'ay':
            {
              href: "letters-ay",
              label: ["Letter 'ay':  ", phonetics("/eɪ/")],
            },
            // e...
            {
              title: [
                {
                  part: "e...",
                  type: "bold",
                },
              ],
            },
            // Letter 'e':
            {
              href: "letter-e",
              label: ["Letter 'e': ", phonetics("/e/, /ə/")],
            },
            // Letter 'e silent'
            {
              href: "letter-e-silent",
              label: "Letter 'e' silent",
            },
            // Letters 'ea':
            {
              href: "letters-ea",
              label: [
                "Letters 'ea':  ",
                phonetics("/e/, /iː/"),
              ],
            },
            // Letters 'eau':
            {
              href: "letters-eau",
              label: ["Letters 'eau':  ", phonetics("/oʊ/")],
            },
            // Letters 'ee':
            {
              href: "letters-ee",
              label: ["Letters 'ee':  ", phonetics("/iː/")],
            },
            // Letters 'ei':
            {
              href: "letters-ei",
              label: ["Letters 'ei':  ", phonetics("/eɪ/")],
            },
            // Letters 'eo':
            {
              href: "letters-eo",
              label: ["Letters 'eo':  ", phonetics("/iː/")],
            },
            // Letter 'et':
            {
              href: "letters-et",
              label: ["Letter 'et':  ", phonetics("/eɪ/")],
            },
            // Letters 'ey':
            {
              href: "letters-ey",
              label: [
                "Letters 'ey': ",
                phonetics("/i/, /eɪ/"),
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
                phonetics("/i/, /ɪ/, /ə/, /aɪ/"),
              ],
            },
            // Letters 'ie':
            {
              href: "letters-ie",
              label: [
                "Letters 'ie':  ",
                phonetics("/i/, /aɪ/"),
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
                phonetics("/ŋ/"),
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
                phonetics("/ɑː/, /ɔː/, /oʊ/"),
              ],
            },
            // Letters 'oa':
            {
              href: "letters-oa",
              label: [
                "Letters 'oa':  ",
                phonetics("/ɔː/, /oʊ/"),
              ],
            },
            // Letters 'oo':
            {
              href: "letters-oo",
              label: [
                "Letters 'oo':  ",
                phonetics("/ʌ/, /ʊ/, /uː/"),
              ],
            },
            // Letters 'ous':
            {
              href: "letters-ous",
              label: ["Letters 'ous':  ", phonetics("/əs/")],
            },
            // Letters 'ow':
            {
              href: "letters-ow",
              label: [
                "Letters 'ow':  ",
                phonetics("/aʊ/, /oʊ/"),
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
                phonetics("/ʌ/, /ɪ/, /ʊ/, /uː/, /juː/"),
              ],
            },
            // Letters 'ui':
            {
              href: "letters-ui",
              label: [
                "Letters 'ui':  ",
                phonetics("/ɪ/, /aɪ/, /uː/"),
              ],
            },
            // Letters 'us':
            {
              href: "letters-us",
              label: ["Letters 'us':  ", phonetics("/əs/")],
            },
            {
              lineBreak: true,
            },
            // Letters 'sh':
            {
              href: "letters-sh",
              label: ["Letters 'sh':  ", phonetics("/ʃ/")],
            },
            // Letters '(t)ch':
            {
              href: "letters-(t)ch",
              label: [
                "Letters '(t)ch':  ",
                phonetics("/tʃ/, /ʃ/, /k/"),
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
                phonetics("/i/, /j/, /aɪ/"),
              ],
            },
            // Letter 'ye':
            {
              href: "letter-ye",
              label: ["Letter 'ye':  ", phonetics("/aɪ/")],
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
                phonetics("/æ/ "),
                " ",
                {
                  part: "and ",
                  type: "connector",
                },
                "'e': ",
                phonetics("/e/"),
                ": ",
              ],
            },
            // Letters 'ea', 'ee': /iː/ and 'i': /ɪ/
            {
              href: "letters-ea-ee-vs-i",
              label: [
                "Letters 'ea', 'ee': ",
                phonetics("/iː/ "),
                " ",
                {
                  part: "and ",
                  type: "connector",
                },
                "'i': ",
                phonetics("/ɪ/"),
              ],
            },
            // Letters 'n': /n/ vs. 'ng': /ŋ/
            {
              href: "letters-n-vs-ng",
              label: [
                "Letters 'n':  ",
                phonetics("/n/"),
                " ",
                {
                  part: "vs.",
                  type: "connector",
                },
                " 'ng': ",
                phonetics("/ŋ/"),
              ],
            },
            // Letters 'oo' vs. 'u':
            {
              href: "letters-oo-vs-u",
              label: [
                "Letters 'oo':  ",
                phonetics("/uː/"),
                " ",
                {
                  part: "vs.",
                  type: "connector",
                },
                " 'u': ",
                phonetics("/ʊ/"),
              ],
            },
            // Letters 'sh': /ʃ/ vs. 'ch': /tʃ/:
            {
              href: "letters-sh-vs-ch",
              label: [
                "Letters 'sh': ",
                " ",
                phonetics("/ʃ/ "),
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'ch': ",
                phonetics("/tʃ/"),
              ],
            },
            // Letters 't': /t/ vs. 'ch': /tʃ/:
            {
              href: "letters-t-vs-ch",
              label: [
                "Letters 't': ",
                " ",
                phonetics("/t/ "),
                {
                  part: "vs. ",
                  type: "connector",
                },
                "'ch': ",
                phonetics("/tʃ/"),
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
                parts: [
                  mark("a"),
                  { part: "nswer" }
                ],
                phonetics: "/ˈæn.sɚ/",
              }),
              // ask
              ...wordRowList({
                audio: "/assets/audio/general/ask.mp3",
                parts: [mark("a"), { part: "sk" }],
                phonetics: "/æsk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath.mp3",
                parts: ["b", mark("a"), "th"],
                phonetics: "/bæθ/",
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [
                  { part: "c" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/kæt/",
              }),
              // can’t
              ...wordRowList({
                audio: "/assets/audio/general/cant.mp3",
                parts: [
                  { part: "c" },
                  mark("a"),
                  { part: "n’t" },
                ],
                phonetics: "/kænt/",
              }),
              // dance
              ...wordRowList({
                audio: "/assets/audio/general/dance.mp3",
                parts: [
                  { part: "d" },
                  mark("a"),
                  { part: "nce" },
                ],
                phonetics: "/dæns/",
              }),
              // fat
              ...wordRowList({
                audio: "/assets/audio/general/fat.mp3",
                parts: [
                  { part: "f" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/fæt/",
              }),
              // fast
              ...wordRowList({
                audio: "/assets/audio/general/fast.mp3",
                parts: [
                  { part: "f" },
                  mark("a"),
                  { part: "st" },
                ],
                phonetics: "/fæst/",
              }),
              // last
              ...wordRowList({
                audio: "/assets/audio/general/last-us.mp3",
                parts: ["l", mark("a"), "st"],
                phonetics: "/læst/",
              }),
              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [
                  { part: "m" },
                  mark("a"),
                  { part: "n" },
                ],
                phonetics: "/mæn/",
              }),
              // task
              ...wordRowList({
                audio: "/assets/audio/general/task-us.mp3",
                parts: ["t", mark("a"), "sk"],
                phonetics: "/tæsk/",
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...attention({
                parts: [
                  "In British English, ",
                  phonetics("/æ/"),
                  " often becomes ",
                  phonetics("/ɑː/"),
                  " in certain words.",
                ],
                pt: "",
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
                parts: [mark("a"), { part: "nswer" }],
                phonetics: "/ˈɑːn.sər/",
              }),
              // ask
              ...wordRowList({
                audio: "/assets/audio/general/ask-uk.mp3",
                parts: [mark("a"), { part: "sk" }],
                phonetics: "/ɑːsk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath-uk.mp3",
                parts: ["b", mark("a"), "th"],
                phonetics: "/bɑːθ/",
              }),
              // can’t
              ...wordRowList({
                audio: "/assets/audio/general/cant-uk.mp3",
                parts: [
                  { part: "c" },
                  mark("a"),
                  { part: "n’t" },
                ],
                phonetics: "/kɑːnt/",
              }),
              // dance
              ...wordRowList({
                audio: "/assets/audio/general/dance-uk.mp3",
                parts: [
                  { part: "d" },
                  mark("a"),
                  { part: "nce" },
                ],
                phonetics: "/dɑːns/",
              }),
              // fast
              ...wordRowList({
                audio: "/assets/audio/general/fast-uk.mp3",
                parts: [
                  { part: "f" },
                  mark("a"),
                  { part: "st" },
                ],
                phonetics: "/fɑːst/",
              }),
              ...wordRowList({
                audio: "/assets/audio/general/last-uk.mp3",
                parts: ["l", mark("a"), "st"],
                phonetics: "/lɑːst/",
              }),
              // task
              ...wordRowList({
                audio: "/assets/audio/general/task-uk.mp3",
                parts: ["t", mark("a"), "sk"],
                phonetics: "/tæsk/",
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
                  mark("e"),
                  { part: "d" },
                ],
                phonetics: "/bed/",
              }),
              // head
              ...wordRowList({
                audio: "/assets/audio/general/head.mp3",
                parts: [
                  { part: "h" },
                  mark("ea"),
                  { part: "d" },
                ],
                phonetics: "/hed/",
              }),
              // red
              ...wordRowList({
                audio: "/assets/audio/general/red.mp3",
                parts: [
                  { part: "r" },
                  mark("e"),
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
                  mark("u"),
                  { part: "sy" },
                ],
                phonetics: "/ˈbɪz.i/",
              }),
              //English
              ...wordRowList({
                audio: "/assets/audio/general/english.mp3",
                parts: [mark("e"), { part: "nglish" }],
                phonetics: "/ˈɪŋ.ɡlɪʃ/",
              }),
              // it
              ...wordRowList({
                audio: "/assets/audio/general/it.mp3",
                parts: [mark("i"), { part: "t" }],
                phonetics: "/ɪt/",
              }),
            ]}
          />

          {/* /iː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/iː/",
              }),
              // eat
              ...wordRowList({
                audio: "/assets/audio/general/eat.mp3",
                parts: [mark("ea"), { part: "t" }],
                phonetics: "/iːt/",
              }),
              // key
              ...wordRowList({
                audio: "/assets/audio/general/key.mp3",
                parts: [
                  { part: "k" },
                  mark("e"),
                  { part: "y" },
                ],
                phonetics: "/kiː/",
              }),
              // sea
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [{ part: "s" }, mark("ea")],
                phonetics: "/siː/",
              }),
              // see
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [{ part: "s" }, mark("ee")],
                phonetics: "/siː/",
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...attention({
                parts: [
                  "In American English, ",
                  phonetics("/ə/"),
                  " and ",
                  phonetics("/ʌ/"),
                  " are not distinguished, but they are in British English. The vowel ",
                  phonetics("/ʌ/"),
                  "occurs in stressed syllables, while ",
                  phonetics("/ə/"),
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
                  phonetics("/ə/"),
                  {
                    part: "unstressed schwa",
                    type: "italic",
                  },
                ],
              }),
              // about
              ...wordRowList({
                audio: "/assets/audio/general/about.mp3",
                parts: [mark("a"), { part: "bout" }],
                phonetics: "/əˈbaʊt/",
              }),
              // above
              ...wordRowList({
                audio: "/assets/audio/general/above.mp3",
                parts: [mark("a"), { part: "bove" }],
                phonetics: "/əˈbʌv/",
              }),
              // open
              ...wordRowList({
                audio: "/assets/audio/general/open.mp3",
                parts: ["op", mark("e"), "n"],
                phonetics: "/ˈoʊ.pən/",
              }),
              // student
              ...wordRowList({
                audio: "/assets/audio/general/student.mp3",
                parts: [
                  { part: "stud" },
                  mark("e"),
                  { part: "nt" },
                ],
                phonetics: "/ˈstuː.dənt/",
              }),
              // the
              ...wordRowList({
                audio: "/assets/audio/general/the2.mp3",
                parts: [{ part: "th" }, mark("e")],
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
                  mark("e"),
                  "m",
                  mark("a"),
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
                  phonetics("/ʌ/"),
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
                  mark("u"),
                  { part: "t" },
                ],
                phonetics: "/bʌt/",
              }),
              // cup
              ...wordRowList({
                audio: "/assets/audio/general/cup.mp3",
                parts: [
                  { part: "c" },
                  mark("u"),
                  { part: "p" },
                ],
                phonetics: "/kʌp/",
              }),
              // hulk
              ...wordRowList({
                audio: "/assets/audio/general/hulk.mp3",
                parts: [
                  { part: "H" },
                  mark("u"),
                  { part: "lk" },
                ],
                phonetics: "/hʌk/",
              }),
              // son
              ...wordRowList({
                audio: "/assets/audio/general/son-sun.mp3",
                parts: [
                  { part: "s" },
                  mark("o"),
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // sun
              ...wordRowList({
                audio: "/assets/audio/general/son-sun.mp3",
                parts: [
                  { part: "s" },
                  mark("u"),
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // under
              ...wordRowList({
                audio: "/assets/audio/general/under.mp3",
                parts: [mark("u"), { part: "nder" }],
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
                  mark("u"),
                  { part: "t" },
                ],
                phonetics: "/bʌt/",
              }),
              // cup
              ...wordRowList({
                audio: "/assets/audio/general/cup-uk.mp3",
                parts: [
                  { part: "c" },
                  mark("u"),
                  { part: "p" },
                ],
                phonetics: "/kʌp/",
              }),
              // son
              ...wordRowList({
                audio: "/assets/audio/general/son-sun-uk.mp3",
                parts: [
                  { part: "s" },
                  mark("o"),
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // sun
              ...wordRowList({
                audio: "/assets/audio/general/son-sun-uk.mp3",
                parts: [
                  { part: "s" },
                  mark("u"),
                  { part: "n" },
                ],
                phonetics: "/sʌn/",
              }),
              // under
              ...wordRowList({
                audio: "/assets/audio/general/under-uk.mp3",
                parts: [mark("u"), { part: "nder" }],
                phonetics: "/ˈʌn.də/",
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
                parts: [phonetics("/ɔː/")],
              }),
              // all
              ...wordRowList({
                audio: "/assets/audio/general/all.mp3",
                parts: [mark("a"), "ll"],
                phonetics: "/l/",
              }),
              // bought
              ...wordRowList({
                audio: "/assets/audio/general/bought.mp3",
                parts: ["b", mark("o"), "ught"],
                phonetics: "/bɔːt/",
              }),
              // call
              ...wordRowList({
                audio: "/assets/audio/general/call.mp3",
                parts: ["c", mark("a"), "ll"],
                phonetics: "/kɔːl/",
              }),
              // caught
              ...wordRowList({
                audio: "/assets/audio/general/caught.mp3",
                parts: ["c", mark("augh"), "t"],
                phonetics: "/kɔːt/",
              }),
              // claw
              ...wordRowList({
                audio: "/assets/audio/general/claw.mp3",
                parts: ["cl", mark("aw")],
                phonetics: "/klɔː/",
              }),
              // coffee
              ...wordRowList({
                audio: "/assets/audio/general/coffee.mp3",
                parts: ["c", mark("o"), "ffee"],
                phonetics: "/ˈkɔː.fi/",
              }),
              // daughter
              ...wordRowList({
                audio: "/assets/audio/general/daughter.mp3",
                parts: ["d", mark("au"), "ghter"],
                phonetics: "/ˈdɔː.t̬ɚ/",
              }),
              // dog
              ...wordRowList({
                audio: "/assets/audio/general/dog.mp3",
                parts: [
                  { part: "d" },
                  mark("o"),
                  { part: "g" },
                ],
                phonetics: "/dɔːg/",
              }),
              // draw
              ...wordRowList({
                audio: "/assets/audio/general/draw.mp3",
                parts: ["dr", mark("aw")],
                phonetics: "/drɔː/",
              }),
              // fog
              ...wordRowList({
                audio: "/assets/audio/general/fog.mp3",
                parts: [
                  { part: "f" },
                  mark("o"),
                  { part: "g" },
                ],
                phonetics: "/fɔːg/",
              }),
              // jaw
              ...wordRowList({
                audio: "/assets/audio/general/jaw.mp3",
                parts: ["j", mark("aw")],
                phonetics: "//dʒɔː/",
              }),
              // frog
              ...wordRowList({
                audio: "/assets/audio/general/frog.mp3",
                parts: [
                  { part: "fr" },
                  mark("o"),
                  { part: "g" },
                ],
                phonetics: "/frɔːg/",
              }),
              // law
              ...wordRowList({
                audio: "/assets/audio/general/law.mp3",
                parts: [{ part: "l" }, mark("aw")],
                phonetics: "/lɔː/",
              }),
              // raw
              ...wordRowList({
                audio: "/assets/audio/general/raw.mp3",
                parts: [{ part: "r" }, mark("aw")],
                phonetics: "/rɔː/",
              }),
              // saw
              ...wordRowList({
                audio: "/assets/audio/general/saw.mp3",
                parts: [{ part: "s" }, mark("aw")],
                phonetics: "/sɔː/",
              }),
              // talk
              ...wordRowList({
                audio: "/assets/audio/general/talk.mp3",
                parts: ["t", mark("a"), "lk"],
                phonetics: "/tɔːk/",
              }),
              // walk
              ...wordRowList({
                audio: "/assets/audio/general/walk.mp3",
                parts: ["w", mark("a"), "lk"],
                phonetics: "/wɔːk/",
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
              // bottom
              ...wordRowList({
                audio: "/assets/audio/general/bottom.mp3",
                parts: [
                  { part: "b" },
                  { part: "o", type: "mark" },
                  { part: "ttom" },
                ],
                phonetics: "/ˈbɑː.t̬əm/",
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
              // cot
              ...wordRowList({
                audio: "/assets/audio/general/cot.mp3",
                parts: [
                  { part: "c" },
                  { part: "o", type: "mark" },
                  { part: "t" },
                ],
                phonetics: "/kɑːt/",
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
              // god
              ...wordRowList({
                audio: "/assets/audio/general/god.mp3",
                parts: [
                  { part: "g" },
                  { part: "o", type: "mark" },
                  { part: "d" },
                ],
                phonetics: "/ɡɑːd/",
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
              // lock
              ...wordRowList({
                audio: "/assets/audio/general/lock.mp3",
                parts: [
                  { part: "l" },
                  { part: "o", type: "mark" },
                  { part: "ck" },
                ],
                phonetics: "/lɑːk/",
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
              // odd
              ...wordRowList({
                audio: "/assets/audio/general/odd.mp3",
                parts: [{ part: "o", type: "mark" }, "dd"],
                phonetics: "/ɑːd/",
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
              // sock
              ...wordRowList({
                audio: "/assets/audio/general/sock.mp3",
                parts: ["s", { part: "o", type: "mark" }, "ck"],
                phonetics: "/sɑːk/",
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

          <Line
            value={[
              ...attention({
                parts: [
                  "On the West Coast, in much of the Midwest, in Canada, and in parts of the Northeast, the ",
                  phonetics("/ɔː/"),
                  "sound is usually merged with the ",
                  phonetics("/ɑː/"),
                  " sound, so cot and caught sound the same.",
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* uk */}
          {/* /ɒ/ */}
          <Line
            value={[
              ...attention({
                parts: [
                  "In British English, ",
                  phonetics("/ɑː/, /ɔː/"),
                  " is pronounced ",
                  phonetics("/ɒ/"),
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
                parts: [phonetics("/ɒ/")],
              }),
              // dog
              ...wordRowList({
                audio: "/assets/audio/general/dog-uk.mp3",
                parts: ["d", mark("o"), "g"],
                phonetics: "/dɒɡ/",
              }),
              // frog
              ...wordRowList({
                audio: "/assets/audio/general/frog-uk.mp3",
                parts: ["fr", mark("o"), "g"],
                phonetics: "/frɒɡ/",
              }),
              // hot
              ...wordRowList({
                audio: "/assets/audio/general/hot-uk.mp3",
                parts: ["h", mark("o"), "t"],
                phonetics: "/hɒt/",
              }),
              // shop
              ...wordRowList({
                audio: "/assets/audio/general/shop-uk.mp3",
                parts: ["sh", mark("o"), "p"],
                phonetics: "/ʃɒp/",
              }),
              // stop
              ...wordRowList({
                audio: "/assets/audio/general/stop-uk.mp3",
                parts: ["st", mark("o"), "p"],
                phonetics: "/ʃɒp/",
              }),
              //lot
              ...wordRowList({
                audio: "/assets/audio/general/lot-uk.mp3",
                parts: ["l", mark("o"), "t"],
                phonetics: "/lɒt/",
              }),
              // rob
              ...wordRowList({
                audio: "/assets/audio/general/rob-uk.mp3",
                parts: ["r", mark("o"), "b"],
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
                parts: [phonetics("/ʊ/")],
              }),
              // book
              ...wordRowList({
                audio: "/assets/audio/general/book.mp3",
                parts: ["b", mark("oo"), "k"],
                phonetics: "/bʊk/",
              }),
              // good
              ...wordRowList({
                audio: "/assets/audio/general/good.mp3",
                parts: ["g", mark("oo"), "d"],
                phonetics: "/gʊk/",
              }),
              // wood
              ...wordRowList({
                audio: "/assets/audio/general/wood-would.mp3",
                parts: ["w", mark("oo"), "d"],
                phonetics: "/wʊk/",
              }),
              // would
              ...wordRowList({
                audio: "/assets/audio/general/wood-would.mp3",
                parts: ["w", mark("oul"), "d"],
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
                parts: [phonetics("/uː/")],
              }),
              // blue
              ...wordRowList({
                audio: "/assets/audio/general/blue.mp3",
                parts: [{ part: "bl" }, mark("ue")],
                phonetics: "/bluː/",
              }),
              // food
              ...wordRowList({
                audio: "/assets/audio/general/food.mp3",
                parts: [
                  { part: "f" },
                  mark("oo"),
                  { part: "d" },
                ],
                phonetics: "/fuːd/",
              }),
              // student
              ...wordRowList({
                audio: "/assets/audio/general/student.mp3",
                parts: [
                  { part: "st" },
                  mark("u"),
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
                parts: [phonetics("/aɪ/")],
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
                parts: [phonetics("/aʊ/")],
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
                parts: [phonetics("/eɪ/")],
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
                parts: [phonetics("/ɔɪ/")],
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
                parts: [phonetics("/oʊ/")],
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
                parts: [phonetics("/əʊ/")],
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
                parts: [phonetics("/b/")],
              }),
              // book
              ...wordRowList({
                audio: "/assets/audio/general/book.mp3",
                parts: [mark("b"), "ook"],
                phonetics: "/bʊk/",
              }),
              // table
              ...wordRowList({
                audio: "/assets/audio/general/table.mp3",
                parts: ["ta", mark("b"), "le"],
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
                parts: [phonetics("/d/")],
              }),
              // do
              ...wordRowList({
                audio: "/assets/audio/general/do.mp3",
                parts: [mark("d"), "o"],
                phonetics: "/duː/",
              }),
              // did
              ...wordRowList({
                audio: "/assets/audio/general/did.mp3",
                parts: [mark("d"), "id"],
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
                parts: [phonetics("/f/")],
              }),
              // fish
              ...wordRowList({
                audio: "/assets/audio/general/fish.mp3",
                parts: [mark("f"), "ish"],
                phonetics: "/fɪʃ/",
              }),
              // coffee
              ...wordRowList({
                audio: "/assets/audio/general/coffee.mp3",
                parts: ["co", mark("ff"), "ee"],
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
                parts: [phonetics("/g/")],
              }),
              // go
              ...wordRowList({
                audio: "/assets/audio/general/go.mp3",
                parts: [mark("g"), "o"],
                phonetics: "/goʊ/",
              }),
              // bag
              ...wordRowList({
                audio: "/assets/audio/general/bag.mp3",
                parts: ["ba", mark("g")],
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
                parts: [phonetics("/h/")],
              }),
              // hat
              ...wordRowList({
                audio: "/assets/audio/general/hat.mp3",
                parts: [mark("h"), "at"],
                phonetics: "/hæt/",
              }),
              // head
              ...wordRowList({
                audio: "/assets/audio/general/head.mp3",
                parts: [mark("h"), "ead"],
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
                parts: [phonetics("/j/")],
              }),
              // university
              ...wordRowList({
                audio: "/assets/audio/general/university.mp3",
                parts: [mark("u"), "niversity"],
                phonetics: "/ˌjuː.nəˈvɝː.sə.t̬i/",
              }),
              // yes
              ...wordRowList({
                audio: "/assets/audio/general/yes.mp3",
                parts: [mark("y"), "es"],
                phonetics: "/jɛs/",
              }),
              // yeallow
              ...wordRowList({
                audio: "/assets/audio/general/yellow.mp3",
                parts: [mark("y"), "ellow"],
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
                parts: [phonetics("/k/")],
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [mark("c"), "at"],
                phonetics: "/kæt/",
              }),
              // back
              ...wordRowList({
                audio: "/assets/audio/general/back.mp3",
                parts: ["ba", mark("ck")],
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
                parts: [phonetics("/ʒ/")],
              }),
              // vision
              ...wordRowList({
                audio: "/assets/audio/general/vision.mp3",
                parts: ["vi", mark("s"), "ion"],
                phonetics: "/ˈvɪʒən/",
              }),
              // measure
              ...wordRowList({
                audio: "/assets/audio/general/measure.mp3",
                parts: ["mea", mark("su"), "re"],
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
                parts: [phonetics("/l/")],
              }),
              // love
              ...wordRowList({
                audio: "/assets/audio/general/love.mp3",
                parts: [mark("l"), "ove"],
                phonetics: "/lʌv/",
              }),
              // feel
              ...wordRowList({
                audio: "/assets/audio/general/feel.mp3",
                parts: ["fee", mark("l")],
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
                parts: [phonetics("/m/")],
              }),
              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [mark("m"), "an"],
                phonetics: "/mæn/",
              }),
              // summer
              ...wordRowList({
                audio: "/assets/audio/general/summer.mp3",
                parts: ["su", mark("mm"), "er"],
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
                parts: [phonetics("/n/")],
              }),
              // no
              ...wordRowList({
                audio: "/assets/audio/general/no.mp3",
                parts: [mark("n"), "o"],
                phonetics: "/noʊ/",
              }),
              // dinner
              ...wordRowList({
                audio: "/assets/audio/general/dinner.mp3",
                parts: ["di", mark("nn"), "er"],
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
                parts: [phonetics("/ŋ/")],
              }),
              // sing
              ...wordRowList({
                audio: "/assets/audio/general/sing.mp3",
                parts: ["si", mark("ng")],
                phonetics: "/sɪŋ/",
              }),
              // long
              ...wordRowList({
                audio: "/assets/audio/general/long.mp3",
                parts: ["lo", mark("ng")],
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
                parts: [phonetics("/p/")],
              }),
              // pen
              ...wordRowList({
                audio: "/assets/audio/general/pen.mp3",
                parts: [mark("p"), "en"],
                phonetics: "/pen/",
              }),
              // map
              ...wordRowList({
                audio: "/assets/audio/general/map.mp3",
                parts: ["ma", mark("p")],
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
                parts: [phonetics("/r/")],
              }),
              // red
              ...wordRowList({
                audio: "/assets/audio/general/red.mp3",
                parts: [mark("r"), "ed"],
                phonetics: "/red/",
              }),
              // carry
              ...wordRowList({
                audio: "/assets/audio/general/carry.mp3",
                parts: ["ca", mark("rr"), "y"],
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
                parts: [phonetics("/s/")],
              }),
              // see
              ...wordRowList({
                audio: "/assets/audio/general/sea-see.mp3",
                parts: [mark("s"), "ee"],
                phonetics: "/siː/",
              }),
              // city
              ...wordRowList({
                audio: "/assets/audio/general/city.mp3",
                parts: ["ci", mark("t"), "y"],
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
                parts: [phonetics("/ʃ/")],
              }),
              // she
              ...wordRowList({
                audio: "/assets/audio/general/she.mp3",
                parts: [mark("sh"), "e"],
                phonetics: "/ʃiː/",
              }),
              // nation
              ...wordRowList({
                audio: "/assets/audio/general/nation.mp3",
                parts: ["na", mark("ti"), "on"],
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
                parts: [phonetics("/t/")],
              }),
              // ten
              ...wordRowList({
                audio: "/assets/audio/general/ten.mp3",
                parts: [mark("t"), "en"],
                phonetics: "/ten/",
              }),
              // top
              ...wordRowList({
                audio: "/assets/audio/general/top.mp3",
                parts: [mark("t"), "op"],
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
                parts: [phonetics("/θ/")],
              }),
              // think
              ...wordRowList({
                audio: "/assets/audio/general/think.mp3",
                parts: [mark("th"), "ink"],
                phonetics: "/θɪŋk/",
              }),
              // bath
              ...wordRowList({
                audio: "/assets/audio/general/bath.mp3",
                parts: ["ba", mark("th")],
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
                parts: [phonetics("/ð/")],
              }),
              // this
              ...wordRowList({
                audio: "/assets/audio/general/this.mp3",
                parts: [mark("th"), "is"],
                phonetics: "/ðɪs/",
              }),
              // mother
              ...wordRowList({
                audio: "/assets/audio/general/mother.mp3",
                parts: ["mo", mark("th"), "er"],
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
                parts: [phonetics("/v/")],
              }),
              // very
              ...wordRowList({
                audio: "/assets/audio/general/very.mp3",
                parts: [mark("v"), "ery"],
                phonetics: "/ˈver.i/",
              }),
              // over
              ...wordRowList({
                audio: "/assets/audio/general/over.mp3",
                parts: ["o", mark("v"), "er"],
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
                parts: [phonetics("/w/")],
              }),
              // we
              ...wordRowList({
                audio: "/assets/audio/general/we.mp3",
                parts: [mark("w"), "e"],
                phonetics: "/wiː/",
              }),
              // quick
              ...wordRowList({
                audio: "/assets/audio/general/quick.mp3",
                parts: ["q", mark("u"), "ick"],
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
                parts: [phonetics("/z/")],
              }),
              // zoo
              ...wordRowList({
                audio: "/assets/audio/general/zoo.mp3",
                parts: [mark("z"), "oo"],
                phonetics: "/zuː/",
              }),
              // music
              ...wordRowList({
                audio: "/assets/audio/general/music.mp3",
                parts: ["mu", mark("s"), "ic"],
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
                parts: [phonetics("/aɪr/")],
              }),
              // choir
              ...wordRowList({
                audio: "/assets/audio/general/choir.mp3",
                parts: ["cho", mark("ir")],
                phonetics: "/kwaɪr/",
              }),
              // fire
              ...wordRowList({
                audio: "/assets/audio/general/fire.mp3",
                parts: ["f", mark("ir"), "(e)"],
                phonetics: "/faɪr/",
              }),
              // inspire
              ...wordRowList({
                audio: "/assets/audio/general/inspire.mp3",
                parts: ["insp", mark("ir"), "(e)"],
                phonetics: "/ɪnˈspaɪr/",
              }),
              // liar
              ...wordRowList({
                audio: "/assets/audio/general/liar.mp3",
                parts: ["l", mark("iar")],
                phonetics: "/ˈlaɪr/",
              }),
            ]}
          />
          {/* /aɪə/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [phonetics("/aɪə/")],
              }),
              // choir
              ...wordRowList({
                audio: "/assets/audio/general/choir-uk.mp3",
                parts: ["cho", mark("ir")],
                phonetics: "/ˈkwaɪə/",
              }),
              // fire
              ...wordRowList({
                audio: "/assets/audio/general/fire-uk.mp3",
                parts: ["f", mark("ir"), "(e)"],
                phonetics: "/ˈfaɪə/",
              }),
              // inspire
              ...wordRowList({
                audio: "/assets/audio/general/inspire-uk.mp3",
                parts: ["insp", mark("ir"), "(e)"],
                phonetics: "/ɪnˈspaɪə/",
              }),
              // liar
              ...wordRowList({
                audio: "/assets/audio/general/liar-uk.mp3",
                parts: ["l", mark("iar")],
                phonetics: "/ˈlaɪə/",
              }),
            ]}
          />
          <LineBreak />
          {/* /eər/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [phonetics("/eər/")],
              }),
              // air
              ...wordRowList({
                audio: "/assets/audio/general/air.mp3",
                parts: ["a", mark("ir")],
                phonetics: "/eər/",
              }),
              // hair
              ...wordRowList({
                audio: "/assets/audio/general/hair.mp3",
                parts: ["h", mark("air")],
                phonetics: "/heər/",
              }),
              // pair
              ...wordRowList({
                audio: "/assets/audio/general/pair.mp3",
                parts: ["p", mark("air")],
                phonetics: "/peər/",
              }),
              // where
              ...wordRowList({
                audio: "/assets/audio/general/where.mp3",
                parts: ["wh", mark("er"), "(e)"],
                phonetics: "/wer/",
              }),
            ]}
          />
          {/* /eə/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [phonetics("/eə/")],
              }),
              // air
              ...wordRowList({
                audio: "/assets/audio/general/air-uk.mp3",
                parts: ["a", mark("ir")],
                phonetics: "/eə/",
              }),
              // hair
              ...wordRowList({
                audio: "/assets/audio/general/hair-uk.mp3",
                parts: ["h", mark("air")],
                phonetics: "/heə/",
              }),
              // pair
              ...wordRowList({
                audio: "/assets/audio/general/pair-uk.mp3",
                parts: ["p", mark("air")],
                phonetics: "/peə/",
              }),
              // where
              ...wordRowList({
                audio: "/assets/audio/general/where-uk.mp3",
                parts: ["wh", mark("ere"), "(e)"],
                phonetics: "/weə/",
              }),
            ]}
          />
          <LineBreak />
          {/* /ɝː/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [phonetics("/ɝː/")],
              }),
              // bird
              ...wordRowList({
                audio: "/assets/audio/general/bird.mp3",
                parts: ["b", mark("ir"), "d"],
                phonetics: "/bɝːd/",
              }),
              // girl
              ...wordRowList({
                audio: "/assets/audio/general/girl.mp3",
                parts: ["g", mark("ir"), "l"],
                phonetics: "/ɡɝːl/",
              }),
              // learn
              ...wordRowList({
                audio: "/assets/audio/general/learn.mp3",
                parts: ["l", mark("ear"), "n"],
                phonetics: "/lɝːn/",
              }),
              // were
              ...wordRowList({
                audio: "/assets/audio/general/were.mp3",
                parts: ["w", mark("er"), "(e)"],
                phonetics: "/wɝː/",
              }),
              // world
              ...wordRowList({
                audio: "/assets/audio/general/world.mp3",
                parts: [
                  "w",
                  mark("or"),
                  "ld",
                ],
                phonetics: "/wɝːld/",
              }),
              // word
              ...wordRowList({
                audio: "/assets/audio/general/word.mp3",
                parts: ["w", mark("or"), "d"],
                phonetics: "/wɝːd/",
              }),
              // work
              ...wordRowList({
                audio: "/assets/audio/general/work.mp3",
                parts: ["w", mark("or"), "k"],
                phonetics: "/wɝːk/",
              }),
            ]}
          />
          {/* /ɜː/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [phonetics("/ɜː/")],
              }),
              // bird
              ...wordRowList({
                audio: "/assets/audio/general/bird-uk.mp3",
                parts: ["b", mark("ir"), "d"],
                phonetics: "/bɜːd/",
              }),
              // learn
              ...wordRowList({
                audio: "/assets/audio/general/learn-uk.mp3",
                parts: ["l", mark("ear"), "n"],
                phonetics: "/lɜːn/",
              }),
              // were
              ...wordRowList({
                audio: "/assets/audio/general/were-uk.mp3",
                parts: ["w", mark("er"), "(e)"],
                phonetics: "/wɜː/",
              }),
              // world
              ...wordRowList({
                audio: "/assets/audio/general/world-uk.mp3",
                parts: ["w", mark("orl"), "d"],
                phonetics: "/wɜːld/",
              }),
              // word
              ...wordRowList({
                audio: "/assets/audio/general/word-uk.mp3",
                parts: ["w", mark("or"), "d"],
                phonetics: "/wɜːd/",
              }),
              // work
              ...wordRowList({
                audio: "/assets/audio/general/work-uk.mp3",
                parts: ["w", mark("or"), "k"],
                phonetics: "/wɜːk/",
              }),
            ]}
          />
          <LineBreak />
          {/* /ɔːr/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [phonetics("/ɔːr/")],
              }),
              // door
              ...wordRowList({
                audio: "/assets/audio/general/door.mp3",
                parts: ["d", mark("oor")],
                phonetics: "/dɔːr/",
              }),
              // four
              ...wordRowList({
                audio: "/assets/audio/general/four.mp3",
                parts: ["f", mark("our")],
                phonetics: "/fɔːr/",
              }),
              // north
              ...wordRowList({
                audio: "/assets/audio/general/north.mp3",
                parts: ["n", mark("orth")],
                phonetics: "/nɔːrθ/",
              }),
              // war
              ...wordRowList({
                audio: "/assets/audio/general/war.mp3",
                parts: ["w", mark("ar")],
                phonetics: "/wɔːr/",
              }),
            ]}
          />
          {/* /ɔː/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [phonetics("/ɔː/")],
              }),
              // door
              ...wordRowList({
                audio: "/assets/audio/general/door-uk.mp3",
                parts: ["d", mark("oor")],
                phonetics: "/dɔː/",
              }),
              // four
              ...wordRowList({
                audio: "/assets/audio/general/four-uk.mp3",
                parts: ["f", mark("our")],
                phonetics: "/fɔː/",
              }),
              // north
              ...wordRowList({
                audio: "/assets/audio/general/north-uk.mp3",
                parts: ["n", mark("orth")],
                phonetics: "/nɔːθ/",
              }),
              // war
              ...wordRowList({
                audio: "/assets/audio/general/war-uk.mp3",
                parts: ["w", mark("ar")],
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
                parts: [mark("a"), { part: "pple" }],
                phonetics: "/ˈæp.əl/",
                pt: "maçã",
              }),
              // anniversary
              ...wordRowList({
                audio: "/assets/audio/general/anniversary.mp3",
                parts: [mark("a"), { part: "nniversary" }],
                phonetics: "/ˌæn.əˈvɝː.sɚ.i/",
              }),
              // bad
              ...wordRowList({
                audio: "/assets/audio/general/bad.mp3",
                parts: [
                  { part: "b" },
                  mark("a"),
                  { part: "d" },
                ],
                phonetics: "/bæd/",
              }),
              // bat
              ...wordRowList({
                audio: "/assets/audio/general/bat.mp3",
                parts: [
                  { part: "b" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/bæt/",
              }),
              // cap
              ...wordRowList({
                audio: "/assets/audio/general/cap.mp3",
                parts: [
                  { part: "c" },
                  mark("a"),
                  { part: "p" },
                ],
                phonetics: "/kæp/",
              }),
              // cat
              ...wordRowList({
                audio: "/assets/audio/general/cat.mp3",
                parts: [
                  { part: "c" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/kæt/",
              }),
              // fat
              ...wordRowList({
                audio: "/assets/audio/general/fat.mp3",
                parts: [
                  { part: "f" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/fæt/",
              }),
              // habit
              ...wordRowList({
                audio: "/assets/audio/general/habit.mp3",
                parts: [
                  { part: "h" },
                  mark("a"),
                  { part: "bit" },
                ],
                phonetics: "/ˈhæb.ɪt/",
              }),
              // hat
              ...wordRowList({
                audio: "/assets/audio/general/hat.mp3",
                parts: [
                  { part: "h" },
                  mark("a"),
                  { part: "t" },
                ],
                phonetics: "/hæt/",
              }),
              // has
              ...wordRowList({
                audio: "/assets/audio/general/has.mp3",
                parts: [
                  { part: "h" },
                  mark("a"),
                  { part: "s" },
                ],
                phonetics: "/hæz/",
              }),
              // have
              ...wordRowList({
                audio: "/assets/audio/general/have.mp3",
                parts: [
                  { part: "h" },
                  mark("a"),
                  { part: "ve" },
                ],
                phonetics: "/hæv/",
              }),
              // man
              ...wordRowList({
                audio: "/assets/audio/general/man.mp3",
                parts: [
                  { part: "m" },
                  mark("a"),
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

              // • We sat on the sofa minutes ago.
              example({
                audio:
                  "/assets/audio/general/we-sat-on-the-sofa-a-few-minutes-ago.mp3",
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
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                parts: [{ part: "'aw'", type: "bold" }],
                phonetics: "/ɔː/",
              }),
              // law
              ...wordRowList({
                audio: "/assets/audio/general/law.mp3",
                parts: ["l", { part: "aw", type: "mark" }],
                phonetics: "/lɔː/",
                pt: "lei",
              }),

              // saw
              ...wordRowList({
                audio: "/assets/audio/general/saw.mp3",
                parts: ["s", { part: "aw", type: "mark" }],
                phonetics: "/sɔː/",
                pt: "viu / serra",
              }),

              // draw
              ...wordRowList({
                audio: "/assets/audio/general/draw.mp3",
                parts: ["dr", { part: "aw", type: "mark" }],
                phonetics: "/drɔː/",
                pt: "desenhar / puxar / empatar",
              }),

              // raw
              ...wordRowList({
                audio: "/assets/audio/general/raw.mp3",
                parts: ["r", { part: "aw", type: "mark" }],
                phonetics: "/rɔː/",
                pt: "cru",
              }),

              // claw
              ...wordRowList({
                audio: "/assets/audio/general/claw.mp3",
                parts: ["cl", { part: "aw", type: "mark" }],
                phonetics: "/klɔː/",
                pt: "garra",
              }),

              // jaw
              ...wordRowList({
                audio: "/assets/audio/general/jaw.mp3",
                parts: ["j", { part: "aw", type: "mark" }],
                phonetics: "/dʒɔː/",
                pt: "mandíbula",
              }),
            ]}
          />
          {/* awe- */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                parts: [{ part: "'awe'", type: "bold" }],
                phonetics: "/ɔː/",
              }),
              // awe
              ...wordRowList({
                audio: "/assets/audio/general/awe.mp3",
                parts: [{ part: "awe", type: "mark" }, ""],
                phonetics: "/ˈɔː/",
              }),
              // awesome
              ...wordRowList({
                audio: "/assets/audio/general/awesome.mp3",
                parts: [{ part: "awe", type: "mark" }, "some"],
                phonetics: "/ˈɔː.səm/",
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

        {/* Letter 'e' */}
        <Section id="letter-e" label="Letter 'e': /e/, /ə/" heading={3}>
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
                parts: ["b", { part: "e", type: "mark" }, "d"],
                phonetics: "/bed/",
              }),
              // get
              ...wordRowList({
                audio: "/assets/audio/general/get.mp3",
                parts: ["g", { part: "e", type: "mark" }, "t"],
                phonetics: "/get/",
              }),
              // men
              ...wordRowList({
                audio: "/assets/audio/general/men.mp3",
                parts: ["m", { part: "e", type: "mark" }, "n"],
                phonetics: "/men/",
              }),
              // red
              ...wordRowList({
                audio: "/assets/audio/general/red.mp3",
                parts: ["r", { part: "e", type: "mark" }, "d"],
                phonetics: "/red/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ə/ */}
          <Phonetics
            value={[
              //
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                phonetics: "/ə/",
              }),
              // business
              ...wordRowList({
                audio: "/assets/audio/general/business.mp3",
                parts: ["busin", { part: "e", type: "mark" }, "ss"],
                phonetics: "/ˈbɪ.znəs/",
              }),
              // open
              ...wordRowList({
                audio: "/assets/audio/general/open.mp3",
                parts: ["op", { part: "e", type: "mark" }, "n"],
                phonetics: "/ˈoʊ.pən/",
              }),
              // problem
              ...wordRowList({
                audio: "/assets/audio/general/problem.mp3",
                parts: ["probl", { part: "e", type: "mark" }, "m"],
                phonetics: "/ˈprɑː.bləm/",
              }),
              // taken
              ...wordRowList({
                audio: "/assets/audio/general/taken.mp3",
                parts: ["tak", { part: "e", type: "mark" }, "n"],
                phonetics: "/ˈteɪ.kən/",
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
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
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
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
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
                audio: "/assets/audio/pronunciation/phonetics-letters/ju.mp3",
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
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
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
        <Section
          id="letters-eo"
          label="Letters 'eo':  /iːə/, /iːɑː/, /iː/, /e/"
          heading={3}
        >
          <Phonetics
            value={[
              // ...wordRowList({
              //   audio: "/assets/audio/general/.mp3",
              //   phonetics: "/iːə/",
              // }),
              // theory
              ...wordRowList({
                audio: "/assets/audio/general/theory.mp3",
                parts: ["th", { part: "eo", type: "mark" }, "ry"],
                phonetics: "/ˈθiːər.i/",
              }),
              // theorem
              ...wordRowList({
                audio: "/assets/audio/general/theorem.mp3",
                parts: ["th", { part: "eo", type: "mark" }, "rem"],
                phonetics: "/ˈθiːə.rəm/",
              }),
              // Theodoro
              ...wordRowList({
                audio: "/assets/audio/general/theodore.mp3",
                parts: ["Th", { part: "eo", type: "mark" }, "dore"]
              }),
              // leotard
              ...wordRowList({
                audio: "/assets/audio/general/leotard.mp3",
                parts: ["l", { part: "eo", type: "mark" }, "tard"],
                phonetics: "/ˈliː.ə.tɑːrd/",
              }),
            ]}
          />
          <LineBreak />
          <Phonetics
            value={[
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/neon.mp3",
                parts: ["n", { part: "eo", type: "mark" }, "n"],
                phonetics: "/ˈniː.ɑːn/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/peon.mp3",
                parts: ["p", { part: "eo", type: "mark" }, "n"],
                phonetics: "/ˈpiː.ən/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/theology.mp3",
                parts: ["th", { part: "eo", type: "mark" }, "logy"],
                phonetics: "/θiˈɑː.lə.dʒi/",
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...attention({
                parts: [{ part: "Exception:", type: "bold" }],
                pt: "",
              }),
            ]}
          />

          <Phonetics
            value={[
              // leopard
              ...wordRowList({
                audio: "/assets/audio/general/leopard.mp3",
                parts: ["l", { part: "eo", type: "mark" }, "pard"],
                phonetics: " /ˈlep.ɚd/",
              }),
              // jeopardy
              ...wordRowList({
                audio: "/assets/audio/general/jeopardy.mp3",
                parts: ["j", { part: "eo", type: "mark" }, "pardy"],
                phonetics: " /ˈdʒep.ɚ.di/",
              }),
              // people
              ...wordRowList({
                audio: "/assets/audio/general/people.mp3",
                parts: ["p", { part: "eo", type: "mark" }, "ple"],
                phonetics: " /ˈpiː.pəl/",
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

        {/* Letters 'ey':  /iː/, /eɪ/ */}
        <Section id="letters-ey" label="Letters 'ey':  /iː/, /eɪ/" heading={3}>
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
                parts: ["Sydn", { part: "ey", type: "mark" }],
                phonetics: "/ˈsɪd.ni/",
              }),
            ]}
          />
        </Section>

        {/* Letter 'i':  /iː/, /ɪ/, /ə/, /aɪ/, /ɑː/ */}
        <Section
          id="letter-i"
          label="Letter 'i': /iː/, /ɪ/, /ə/, /aɪ/"
          heading={3}
        >
          {/* /iː/ */}
          <Phonetics
            value={[
              // /i/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/i/",
              }),
              // machine
              ...wordRowList({
                audio: "/assets/audio/general/machine.mp3",
                parts: ["mach", { part: "i", type: "mark" }, "ne"],
                phonetics: "/məˈʃiːn/",
              }),
              // police
              ...wordRowList({
                audio: "/assets/audio/general/police.mp3",
                parts: ["pol", { part: "i", type: "mark" }, "ce"],
                phonetics: "/pəˈliːs/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/ski.mp3",
                parts: ["sk", { part: "i", type: "mark" }],
                phonetics: "/skiː/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ɪ/ */}
          <Phonetics
            value={[
              // /i/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                phonetics: "/ɪ/",
              }),
              // animal
              ...wordRowList({
                audio: "/assets/audio/general/animal.mp3",
                parts: ["an", { part: "i", type: "mark" }, "mal"],
                phonetics: "/ˈæn.ɪ.məl/",
              }),
              // big
              ...wordRowList({
                audio: "/assets/audio/general/big.mp3",
                parts: ["b", { part: "i", type: "mark" }, "g"],
                phonetics: "/bɪɡ/",
              }),
              // city
              ...wordRowList({
                audio: "/assets/audio/general/city.mp3",
                parts: ["c", { part: "i", type: "mark" }, "ty"],
                phonetics: "/ˈsɪt̬.i/",
              }),
              // finish
              ...wordRowList({
                audio: "/assets/audio/general/finish.mp3",
                parts: [
                  "f",
                  { part: "i", type: "mark" },
                  "n",
                  { part: "i", type: "mark" },
                  "sh",
                ],
                phonetics: "/ˈfɪn.ɪʃ/",
              }),
              // limit
              ...wordRowList({
                audio: "/assets/audio/general/limit.mp3",
                parts: [
                  "l",
                  { part: "i", type: "mark" },
                  "m",
                  { part: "i", type: "mark" },
                  "t",
                ],
                phonetics: "/ˈlɪm.ɪt/",
              }),
              // milk
              ...wordRowList({
                audio: "/assets/audio/general/milk.mp3",
                parts: ["m", { part: "i", type: "mark" }, "lk"],
                phonetics: "/mɪlk/",
              }),
              // minute
              ...wordRowList({
                audio: "/assets/audio/general/minute.mp3",
                parts: ["m", { part: "i", type: "mark" }, "nute"],
                phonetics: "/ˈmɪn.ɪt/",
              }),
              // sit
              ...wordRowList({
                audio: "/assets/audio/general/sit.mp3",
                parts: ["s", { part: "i", type: "mark" }, "t"],
                phonetics: "/sɪt/",
              }),
              // visit
              ...wordRowList({
                audio: "/assets/audio/general/visit.mp3",
                parts: [
                  "v",
                  { part: "i", type: "mark" },
                  "s",
                  { part: "i", type: "mark" },
                  "t",
                ],
                phonetics: "/ˈvɪz.ɪt/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ə/ */}
          <Phonetics
            value={[
              // /i/
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                phonetics: "/ə/",
              }),
              // family
              ...wordRowList({
                audio: "/assets/audio/general/family.mp3",
                parts: ["fam", { part: "i", type: "mark" }, "ly"],
                phonetics: "/ˈfæm.əl.i/",
              }),
              // possible
              ...wordRowList({
                audio: "/assets/audio/general/possible.mp3",
                parts: ["poss", { part: "i", type: "mark" }, "ble"],
                phonetics: "/ˈpɑː.sə.bəl/",
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // find
              ...wordRowList({
                audio: "/assets/audio/general/find.mp3",
                parts: ["f", { part: "i", type: "mark" }, "nd"],
                phonetics: "/faɪnd/",
              }),
              // kind
              ...wordRowList({
                audio: "/assets/audio/general/kind.mp3",
                parts: ["k", { part: "i", type: "mark" }, "nd"],
                phonetics: "/kaɪnd/",
              }),
              // kite
              ...wordRowList({
                audio: "/assets/audio/general/kite.mp3",
                parts: ["k", { part: "i", type: "mark" }, "te"],
                phonetics: "/kaɪt/",
              }),
              // like
              ...wordRowList({
                audio: "/assets/audio/general/like.mp3",
                parts: ["l", { part: "i", type: "mark" }, "ke"],
                phonetics: "/laɪk/",
              }),
              // time
              ...wordRowList({
                audio: "/assets/audio/general/time.mp3",
                parts: ["t", { part: "i", type: "mark" }, "me"],
                phonetics: "/taɪm/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ie': /iː/, /aɪ/ */}
        <Section id="letters-ie" label="Letters 'ie': /iː/, /aɪ/" heading={3}>
          {/* /iː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                phonetics: "/iː/",
              }),
              // believe
              ...wordRowList({
                audio: "/assets/audio/general/believe.mp3",
                parts: ["bel", { part: "ie", type: "mark" }, "ve"],
                phonetics: "/bɪˈliːv/",
              }),
              // brief
              ...wordRowList({
                audio: "/assets/audio/general/brief.mp3",
                parts: ["br", { part: "ie", type: "mark" }, "f"],
                phonetics: "/briːf/",
              }),
              // chief
              ...wordRowList({
                audio: "/assets/audio/general/chief.mp3",
                parts: ["ch", { part: "ie", type: "mark" }, "f"],
                phonetics: "/tʃiːf/",
              }),
              // field
              ...wordRowList({
                audio: "/assets/audio/general/field.mp3",
                parts: ["f", { part: "ie", type: "mark" }, "ld"],
                phonetics: "/fiːld/",
              }),
              // piece
              ...wordRowList({
                audio: "/assets/audio/general/piece.mp3",
                parts: ["p", { part: "ie", type: "mark" }, "ce"],
                phonetics: "/piːs/",
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // cried
              ...wordRowList({
                audio: "/assets/audio/general/cried.mp3",
                parts: ["cr", { part: "ie", type: "mark" }, "d"],
                phonetics: "/kraɪd/",
              }),
              // die
              ...wordRowList({
                audio: "/assets/audio/general/die.mp3",
                parts: ["d", { part: "ie", type: "mark" }],
                phonetics: "/daɪ/",
              }),
              // lie
              ...wordRowList({
                audio: "/assets/audio/general/lie.mp3",
                parts: ["l", { part: "ie", type: "mark" }],
                phonetics: "/laɪ/",
              }),
              // pie
              ...wordRowList({
                audio: "/assets/audio/general/pie.mp3",
                parts: ["p", { part: "ie", type: "mark" }],
                phonetics: "/paɪ/",
              }),
              ...wordRowList({
                audio: "/assets/audio/general/tie.mp3",
                parts: ["t", { part: "ie", type: "mark" }],
                phonetics: "/taɪ/",
              }),
            ]}
          />
        </Section>

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
          <LineBreak />

          {/* /ɔː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                parts: [{ part: "/ɔː/", type: "phonetics" }],
              }),
              // bought
              ...wordRowList({
                audio: "/assets/audio/general/bought.mp3",
                parts: ["b", { part: "o", type: "mark" }, "ught"],
                phonetics: "/bɔːt/",
              }),
              // coffee
              ...wordRowList({
                audio: "/assets/audio/general/coffee.mp3",
                parts: ["c", { part: "o", type: "mark" }, "ffee"],
                phonetics: "/ˈkɔː.fi/",
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
            ]}
          />
          <LineBreak />

          {/* /oʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
                phonetics: "/oʊ/",
              }),
              // go
              ...wordRowList({
                audio: "/assets/audio/general/go.mp3",
                parts: ["g", { part: "o", type: "mark" }],
                phonetics: "/ɡoʊ/",
              }),
              // hotel
              ...wordRowList({
                audio: "/assets/audio/general/hotel.mp3",
                parts: ["h", { part: "o", type: "mark" }, "tel"],
                phonetics: "/hoʊˈtel/",
              }),
              // no
              ...wordRowList({
                audio: "/assets/audio/general/no.mp3",
                parts: ["n", { part: "o", type: "mark" }],
                phonetics: "/noʊ/",
              }),
              // open
              ...wordRowList({
                audio: "/assets/audio/general/open.mp3",
                parts: [{ part: "o", type: "mark" }, "pen"],
                phonetics: "/ˈoʊ.pən/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'oa': /ɔː/, /oʊ/ */}
        <Section id="letters-oa" label="Letters 'oa': /ɔː/, /oʊ/" heading={3}>
          {/* /ɔː/ */}
          <Phonetics
            value={[
              //
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɔ.mp3",
                phonetics: "/ɔː/",
              }),
              // abroad
              ...wordRowList({
                audio: "/assets/audio/general/abroad.mp3",
                parts: ["abr", { part: "oa", type: "mark" }, "d"],
                phonetics: "/əˈbrɔːd/",
              }),
              // broad
              ...wordRowList({
                audio: "/assets/audio/general/broad.mp3",
                parts: ["br", { part: "oa", type: "mark" }, "d"],
                phonetics: "/brɔːd/",
              }),
            ]}
          />
          <LineBreak />

          {/* /oʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/oʊ.mp3",
                phonetics: "/oʊ/",
              }),
              // boat
              ...wordRowList({
                audio: "/assets/audio/general/boat.mp3",
                parts: ["b", { part: "oa", type: "mark" }, "t"],
                phonetics: "/boʊt/",
              }),
              // coat
              ...wordRowList({
                audio: "/assets/audio/general/coat.mp3",
                parts: ["c", { part: "oa", type: "mark" }, "t"],
                phonetics: "/koʊt/",
              }),
              // goat
              ...wordRowList({
                audio: "/assets/audio/general/goat.mp3",
                parts: ["g", { part: "oa", type: "mark" }, "t"],
                phonetics: "/goʊt/",
              }),
              // road
              ...wordRowList({
                audio: "/assets/audio/general/road.mp3",
                parts: ["r", { part: "oa", type: "mark" }, "d"],
                phonetics: "/roʊd/",
              }),
              // soap
              ...wordRowList({
                audio: "/assets/audio/general/soap.mp3",
                parts: ["s", { part: "oa", type: "mark" }, "p"],
                phonetics: "/soʊp/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'oo': /ʌ/, /ʊ/, /uː/ */}
        <Section
          id="letters-oo"
          label="Letters 'oo': /ʌ/, /ʊ/, /uː/"
          heading={3}
        >
          {/* /ʌ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ə-ʌ.mp3",
                phonetics: "/ʌ/",
              }),
              // blood
              ...wordRowList({
                audio: "/assets/audio/general/blood.mp3",
                parts: ["bl", { part: "oo", type: "mark" }, "d"],
                phonetics: "/blʌd/",
              }),
              // flood
              ...wordRowList({
                audio: "/assets/audio/general/flood.mp3",
                parts: ["fl", { part: "oo", type: "mark" }, "d"],
                phonetics: "/flʌd/",
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
                phonetics: "/ʊ/",
              }),
              // book
              ...wordRowList({
                audio: "/assets/audio/general/book.mp3",
                parts: ["b", { part: "oo", type: "mark" }, "k"],
                phonetics: "/bʊk/",
              }),
              // cook
              ...wordRowList({
                audio: "/assets/audio/general/cook.mp3",
                parts: ["c", { part: "oo", type: "mark" }, "k"],
                phonetics: "/kʊk/",
              }),
              // foot
              ...wordRowList({
                audio: "/assets/audio/general/foot.mp3",
                parts: ["f", { part: "oo", type: "mark" }, "t"],
                phonetics: "/fʊt/",
              }),
              // good
              ...wordRowList({
                audio: "/assets/audio/general/good.mp3",
                parts: ["g", { part: "oo", type: "mark" }, "d"],
                phonetics: "/gʊd/",
              }),
              // look
              ...wordRowList({
                audio: "/assets/audio/general/look.mp3",
                parts: ["l", { part: "oo", type: "mark" }, "k"],
                phonetics: "/lʊk/",
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/u.mp3",
                phonetics: "/uː/",
              }),
              // food
              ...wordRowList({
                audio: "/assets/audio/general/food.mp3",
                parts: ["f", { part: "oo", type: "mark" }, "d"],
                phonetics: "/fuːd/",
              }),
              // moon
              ...wordRowList({
                audio: "/assets/audio/general/moon.mp3",
                parts: ["m", { part: "oo", type: "mark" }, "n"],
                phonetics: "/muːn/",
              }),
              // school
              ...wordRowList({
                audio: "/assets/audio/general/school.mp3",
                parts: ["sch", { part: "oo", type: "mark" }, "l"],
                phonetics: "/skuːl/",
              }),
              // room
              ...wordRowList({
                audio: "/assets/audio/general/room.mp3",
                parts: ["r", { part: "oo", type: "mark" }, "m"],
                phonetics: "/ruːm/",
              }),
              // too
              ...wordRowList({
                audio: "/assets/audio/general/to.mp3",
                parts: ["t", { part: "oo", type: "mark" }],
                phonetics: "/tuː/",
              }),
            ]}
          />
        </Section>

        {/* Letters 'ous': /əs/ */}
        <Section id="letters-ous" label="Letters 'ous': /əs/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/pronunciation/phonetics-letters/əs.mp3",
                phonetics: "/əs/",
              }),
              // curious
              ...wordRowList({
                audio: "/assets/audio/general/curious.mp3",
                parts: ["curi", { part: "ous", type: "mark" }],
                phonetics: "/ˈkjʊr.i.əs/",
              }),
              // dangerous
              ...wordRowList({
                audio: "/assets/audio/general/dangerous.mp3",
                parts: ["danger", { part: "ous", type: "mark" }],
                phonetics: "/ˈdeɪn.dʒɚ.əs/",
              }),
              // famous
              ...wordRowList({
                audio: "/assets/audio/general/famous.mp3",
                parts: ["fam", { part: "ous", type: "mark" }],
                phonetics: "/ˈfeɪ.məs/",
              }),
              // nervous
              ...wordRowList({
                audio: "/assets/audio/general/nervous.mp3",
                parts: ["nerv", { part: "ous", type: "mark" }],
                phonetics: "/ˈnɝː.vəs/",
              }),
              // serious
              ...wordRowList({
                audio: "/assets/audio/general/serious.mp3",
                parts: ["seri", { part: "ous", type: "mark" }],
                phonetics: "/ˈsɪr.i.əs/",
              }),
              // various
              ...wordRowList({
                audio: "/assets/audio/general/various.mp3",
                parts: ["vari", { part: "ous", type: "mark" }],
                phonetics: "/ˈver.i.əs/",
              }),
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
              ...attention({
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

        {/* Letters 'u': /ʌ/, /ɪ/, /ʊ/, /uː/, /juː/ */}
        <Section
          id="letter-u"
          label="Letters 'u': /ʌ/, /ɪ/, /ʊ/, /uː/, /juː/"
          heading={3}
        >
          <Line
            value={[
              {
                icons: ["attention", "us"],
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
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                phonetics: "/ɪ/",
              }),
              // business
              ...wordRowList({
                audio: "/assets/audio/general/business.mp3",
                parts: ["b", { part: "u", type: "mark" }, "siness"],
                phonetics: "/ˈbɪ.znəs/",
              }),
              // ...
              ...wordRowList({
                audio: "/assets/audio/general/busy.mp3",
                parts: ["b", { part: "u", type: "mark" }, "sy"],
                phonetics: "/ˈbɪz.i/",
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
                phonetics: "/ʊ/",
              }),
              // full
              ...wordRowList({
                audio: "/assets/audio/general/full.mp3",
                parts: ["f", { part: "u", type: "mark" }, "ll"],
                phonetics: "/fʊl/",
              }),
              // pull
              ...wordRowList({
                audio: "/assets/audio/general/pull.mp3",
                parts: ["p", { part: "u", type: "mark" }, "ll"],
                phonetics: "/pʊl/",
              }),
              // put
              ...wordRowList({
                audio: "/assets/audio/general/put.mp3",
                parts: ["p", { part: "u", type: "mark" }, "t"],
                phonetics: "/pʊt/",
              }),
            ]}
          />
          <LineBreak />

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
              // rule
              ...wordRowList({
                audio: "/assets/audio/general/rule.mp3",
                parts: ["r", { part: "u", type: "mark" }, "le"],
                phonetics: "/ruːl/",
              }),
            ]}
            word
          />
          <LineBreak />

          {/* /juː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio: "/assets/audio/pronunciation/phonetics-letters/ju.mp3",
                phonetics: "/juː/",
              }),
              // curious
              ...wordRowList({
                audio: "/assets/audio/general/curious.mp3",
                parts: ["c", { part: "u", type: "mark" }, "rious"],
                phonetics: "/ˈkjʊr.i.əs/",
              }),
              // music
              ...wordRowList({
                audio: "/assets/audio/general/music.mp3",
                parts: ["m", { part: "u", type: "mark" }, "sic"],
                phonetics: "/ˈmjuː.zɪk/",
              }),
              // university
              ...wordRowList({
                audio: "/assets/audio/general/university.mp3",
                parts: [{ part: "u", type: "mark" }, "niversity"],
                phonetics: "/ˌjuː.nəˈvɝː.sə.t̬i/",
              }),
              // use
              ...wordRowList({
                audio: "/assets/audio/general/use-verb.mp3",
                parts: [{ part: "u", type: "mark" }, "se"],
                phonetics: "/juːz/",
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
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                phonetics: "/ɪ/",
              }),
              // build
              ...wordRowList({
                audio: "/assets/audio/general/build.mp3",
                parts: ["b", { part: "ui", type: "mark" }, "ld"],
                phonetics: "/bɪld/",
              }),
              // built
              ...wordRowList({
                audio: "/assets/audio/general/built.mp3",
                parts: ["b", { part: "ui", type: "mark" }, "lt"],
                phonetics: "/bɪlt/",
              }),
              // guild
              ...wordRowList({
                audio: "/assets/audio/general/guild.mp3",
                parts: ["g", { part: "ui", type: "mark" }, "ld"],
                phonetics: "/ɡɪld/",
              }),
              // guilt
              ...wordRowList({
                audio: "/assets/audio/general/guilt.mp3",
                parts: ["g", { part: "ui", type: "mark" }, "lt"],
                phonetics: "/ɡɪlt/",
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/diphthongs/aɪ.mp3",
                phonetics: "/aɪ/",
              }),
              // guide
              ...wordRowList({
                audio: "/assets/audio/general/guide.mp3",
                parts: ["g", { part: "ui", type: "mark" }, "de"],
                phonetics: "/ɡaɪd/",
              }),
              // guile
              ...wordRowList({
                audio: "/assets/audio/general/guile.mp3",
                parts: ["g", { part: "ui", type: "mark" }, "le"],
                phonetics: "/ɡaɪl/",
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/vowels/u.mp3",
                phonetics: "/uː/",
              }),
              // fruit
              ...wordRowList({
                audio: "/assets/audio/general/fruit.mp3",
                parts: ["fr", { part: "ui", type: "mark" }, "t"],
                phonetics: "/fruːt/",
              }),
              // juice
              ...wordRowList({
                audio: "/assets/audio/general/juice.mp3",
                parts: ["j", { part: "ui", type: "mark" }, "ce"],
                phonetics: "/dʒuːs/",
              }),
              // nuisance
              ...wordRowList({
                audio: "/assets/audio/general/nuisance.mp3",
                parts: ["n", { part: "ui", type: "mark" }, "sance"],
                phonetics: "/ˈnuː.səns/",
              }),
              // suit
              ...wordRowList({
                audio: "/assets/audio/general/suit.mp3",
                parts: ["s", { part: "ui", type: "mark" }, "t"],
                phonetics: "/suːt/",
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
              // bonus
              ...wordRowList({
                audio: "/assets/audio/general/bonus.mp3",
                parts: ["bon", { part: "us", type: "mark" }],
                phonetics: "/ˈboʊ.nəs/",
              }),
              // campus
              ...wordRowList({
                audio: "/assets/audio/general/campus.mp3",
                parts: ["camp", { part: "us", type: "mark" }],
                phonetics: "/ˈkæm.pəs/",
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
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ʃ.mp3",
                phonetics: "/ʃ/",
              }),
              // she
              ...wordRowList({
                audio: "/assets/audio/general/she.mp3",
                parts: [{ part: "sh", type: "mark" }, "e"],
                phonetics: "/ʃiː/",
              }),
              // ship
              ...wordRowList({
                audio: "/assets/audio/general/ship.mp3",
                parts: [{ part: "sh", type: "mark" }, "ip"],
                phonetics: "/ʃɪp/",
              }),
              // shop
              ...wordRowList({
                audio: "/assets/audio/general/shop.mp3",
                parts: [{ part: "sh", type: "mark" }, "op"],
                phonetics: "/ʃɑːp/",
              }),
              // fish
              ...wordRowList({
                audio: "/assets/audio/general/fish.mp3",
                parts: ["fi", { part: "sh", type: "mark" }],
                phonetics: "/fɪʃ/",
              }),
              // wash
              ...wordRowList({
                audio: "/assets/audio/general/wash.mp3",
                parts: ["wa", { part: "sh", type: "mark" }],
                phonetics: "/wɑːʃ/",
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
          {/* /tʃ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/tʃ.mp3",
                phonetics: "/tʃ/",
              }),
              // arch
              ...wordRowList({
                audio: "/assets/audio/general/arch.mp3",
                parts: ["ar", mark("ch")],
                phonetics: "/ɑːrtʃ/",
              }),
              // chair
              ...wordRowList({
                audio: "/assets/audio/general/chair.mp3",
                parts: [mark("ch"), "air"],
                phonetics: "/tʃer/",
              }),
              // kitchen
              ...wordRowList({
                audio: "/assets/audio/general/kitchen.mp3",
                parts: ["ki", mark("tch"), "en"],
                phonetics: "/ˈkɪtʃ.ən/",
              }),
              // teach
              ...wordRowList({
                audio: "/assets/audio/general/teach.mp3",
                parts: ["tea", { part: "ch", type: "mark" }],
                phonetics: "/tiːtʃ/",
              }),
              // watch
              ...wordRowList({
                audio: "/assets/audio/general/watch.mp3",
                parts: ["wa", mark("ch")],
                phonetics: "/wɑːtʃ/",
              }),
            ]}
          />
          <LineBreak />

          {/* /ʃ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/ʃ.mp3",
                phonetics: "/ʃ/",
              }),
              // brochure
              ...wordRowList({
                audio: "/assets/audio/general/brochure.mp3",
                parts: ["bro", mark("ch"), "ure"],
                phonetics: "/broʊˈʃʊr/",
              }),
              // chef
              ...wordRowList({
                audio: "/assets/audio/general/chef.mp3",
                parts: [mark("ch"), "ef"],
                phonetics: "/ʃef/",
              }),
              // machine
              ...wordRowList({
                audio: "/assets/audio/general/machine.mp3",
                parts: ["ma", mark("ch"), "ine"],
                phonetics: "/məˈʃiːn/",
              }),
            ]}
          />
          <LineBreak />

          {/* /k/ */}
          <Phonetics
            value={[
              ...wordRowList({
                audio:
                  "/assets/audio/pronunciation/phonetics-letters/consonants/k.mp3",
                phonetics: "/k/",
              }),
              // architect
              ...wordRowList({
                audio: "/assets/audio/general/architect.mp3",
                parts: ["ar", mark("ch"), "itect"],
                phonetics: "/ˈɑːr.kə.tekt/",
              }),
              // chemistry
              ...wordRowList({
                audio: "/assets/audio/general/chemistry.mp3",
                parts: [mark("ch"), "emistry"],
                phonetics: "/ˈkem.ə.stri/",
              }),
              // chorus
              ...wordRowList({
                audio: "/assets/audio/general/chorus.mp3",
                parts: [mark("ch"), "orus"],
                phonetics: "/ˈkɔːr.əs/",
              }),
              // technology
              ...wordRowList({
                audio: "/assets/audio/general/technology.mp3",
                parts: ["te", mark("ch"), "nology"],
                phonetics: "/tekˈnɑː.lə.dʒi/",
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
          <Line
            value={[
              ...attention({
                parts: [],
                parts: [
                  "",
                  {
                    part: "t' silent in",
                    type: "bold",
                  },
                  " ",
                  {
                    part: "/nt/",
                    type: "phonetics",
                  },
                ],
              }),
            ]}
          />
          {/* center or. cen(t)er */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/center.mp3",
                  parts: ["center"],
                },
                right: {
                  audio: "/assets/audio/general/cen(t)er.mp3",
                  parts: ["cen(t)er"],
                },
              }),
            ]}
          />
          {/* dentist or. den(t)ist */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/dentist.mp3",
                  parts: ["dentist"],
                },
                right: {
                  audio: "/assets/audio/general/den(t)ist.mp3",
                  parts: ["den(t)ist"],
                },
              }),
            ]}
          />
          {/* identify or. iden(t)ify */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/identify.mp3",
                  parts: ["identify"],
                },
                right: {
                  audio: "/assets/audio/general/iden(t)ify.mp3",
                  parts: ["iden(t)ify"],
                },
              }),
            ]}
          />
          {/* identity or. iden(t)ity */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/identity.mp3",
                  parts: ["identity"],
                },
                right: {
                  audio: "/assets/audio/general/iden(t)ity.mp3",
                  parts: ["iden(t)ity"],
                },
              }),
            ]}
          />
          {/* international or. international */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/international.mp3",
                  parts: ["international"],
                },
                right: {
                  audio: "/assets/audio/general/in(t)ernational.mp3",
                  parts: ["in(t)ernational"],
                },
              }),
            ]}
          />
          {/* intervention or. intervention */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/intervention.mp3",
                  parts: ["intervention"],
                },
                right: {
                  audio: "/assets/audio/general/in(t)ervention.mp3",
                  parts: ["in(t)ervention"],
                },
              }),
            ]}
          />
          {/* interrupt or. interrupt */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  audio: "/assets/audio/general/interrupt.mp3",
                  parts: ["interrupt"],
                },
                right: {
                  audio: "/assets/audio/general/in(t)errupt.mp3",
                  parts: ["in(t)errupt"],
                },
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...attention({
                parts: [
                  {
                    icons: ["us"],
                    part: "Flap 't'",
                    type: "bold",
                  },
                ],
              }),
            ]}
          />
          {/* Flap 't' */}
          <Phonetics
            value={[
              // bottom
              ...wordRowList({
                audio: "/assets/audio/general/bottom-us.mp3",
                parts: ["bo", { part: "tt", type: "mark" }, "om"],
                phonetics: "/ˈbɑː.t̬əm/",
                pt: "fundo, parte de baixo; bunda",
              }),
              // butter
              ...wordRowList({
                audio: "/assets/audio/general/butter-us.mp3",
                parts: ["bu", { part: "tt", type: "mark" }, "er"],
                phonetics: "/ˈbʌt̬.ɚ/",
                pt: "manteiga",
              }),
              // party
              ...wordRowList({
                audio: "/assets/audio/general/party-us.mp3",
                parts: ["par", { part: "t", type: "mark" }, "y"],
                phonetics: "/ˈpɑːr.t̬i/",
                pt: "festa, grupo, partido político",
              }),
              // photo
              ...wordRowList({
                audio: "/assets/audio/general/photo-us.mp3",
                parts: ["pho", { part: "t", type: "mark" }, "o"],
                phonetics: "/ˈfoʊ.t̬oʊ/",
                pt: "foto",
              }),
              // later
              ...wordRowList({
                audio: "/assets/audio/general/later-us.mp3",
                parts: ["la", { part: "t", type: "mark" }, "er"],
                phonetics: "/ˈleɪ.t̬ɚ/",
                pt: "mais tarde (tempo)",
              }),
              // water (último sem square)
              ...wordRowList({
                audio: "/assets/audio/general/water-us.mp3",
                parts: ["wa", { part: "t", type: "mark" }, "er"],
                phonetics: "/ˈwɔː.t̬ər/",
                pt: "água",
                square: false,
              }),
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
        <Section id="letter-ye" label="Letters 'ye': /aɪ/" heading={3}>
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
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio:
                    "/assets/audio/pronunciation/phonetics-letters/vowels/æ.mp3",
                  phonetics: "/æ/",
                },
                right: {
                  audio:
                    "/assets/audio/pronunciation/phonetics-letters/vowels/e.mp3",
                  phonetics: "/e/",
                },
              }),
            ]}
          />
          <LineBreak />

          {/* and vs. end */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/and.mp3",
                  parts: [{ part: "a", type: "mark" }, "nd"],
                  phonetics: "/ænd/",
                  portugueseExample: "e",
                },
                right: {
                  audio: "/assets/audio/general/end.mp3",
                  parts: [{ part: "e", type: "mark" }, "nd"],
                  phonetics: "/end/",
                  portugueseExample: "acabar; fim",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • Bread and butter.
              example({
                audio: "/assets/audio/general/bread-and-butter.mp3",
                englishExample: ["Bread and butter."],
                portugueseExample: ["Pão e manteiga."],
              }),
              // • ...
              example({
                audio: "/assets/audio/general/this-is-the-end.mp3",
                englishExample: ["This is the end."],
                portugueseExample: ["Isso é o fim."],
              }),
            ]}
          />
          <LineBreak />

          {/* bad vs. bed */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/bad.mp3",
                  parts: ["b", { part: "a", type: "mark" }, "d"],
                  phonetics: "/bæd/",
                  portugueseExample: "ruim, péssimo",
                },
                right: {
                  audio: "/assets/audio/general/bed.mp3",
                  parts: ["b", { part: "e", type: "mark" }, "d"],
                  phonetics: "/bed/",
                  portugueseExample: "cama",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • ...
              example({
                audio: "/assets/audio/general/i-had-a-bad-day.mp3",
                englishExample: ["I had a bad day."],
                portugueseExample: ["Eu tive um péssimo dia."],
              }),
              // • ...
              example({
                audio: "/assets/audio/general/she-went-to-bed-early.mp3",
                englishExample: ["She went to bed early."],
                portugueseExample: ["Ela foi para a cama cedo."],
              }),
            ]}
          />
          <LineBreak />

          {/* bat vs. bet */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/bat.mp3",
                  parts: ["b", { part: "a", type: "mark" }, "t"],
                  phonetics: "/bæt/",
                  portugueseExample: "morcego; taco",
                },
                right: {
                  audio: "/assets/audio/general/bet.mp3",
                  parts: ["b", { part: "e", type: "mark" }, "t"],
                  phonetics: "/bet/",
                  portugueseExample: "apostar",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/he-hit-the-ball-with-a-bat.mp3",
                englishExample: ["He hit the ball with a bat."],
                portugueseExample: ["Ele acertou a bola com um bastão."],
              }),
              example({
                audio: "/assets/audio/general/i-bet-you-were-right.mp3",
                englishExample: ["I bet you are right."],
                portugueseExample: ["Aposto que você está certo."],
              }),
            ]}
          />
          <LineBreak />

          {/* dad vs. dead */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/dad.mp3",
                  parts: ["d", { part: "a", type: "mark" }, "d"],
                  phonetics: "/dæd/",
                  portugueseExample: "pai",
                },
                right: {
                  audio: "/assets/audio/general/dead.mp3",
                  parts: ["d", { part: "ea", type: "mark" }, "d"],
                  phonetics: "/ded/",
                  portugueseExample: "morto(a)",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/my-dad-is-cool.mp3",
                englishExample: ["My dad is cool."],
                portugueseExample: ["Meu pai é legal."],
              }),
              example({
                audio: "/assets/audio/general/the-plant-is-dead.mp3",
                englishExample: ["The plant is dead."],
                portugueseExample: ["A planta está morta."],
              }),
            ]}
          />
          <LineBreak />

          {/* had vs. head */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/had.mp3",
                  parts: ["h", { part: "a", type: "mark" }, "d"],
                  phonetics: "/hæd/",
                  pt: "teve, tinha",
                },
                right: {
                  audio: "/assets/audio/general/head.mp3",
                  parts: ["h", { part: "ea", type: "mark" }, "d"],
                  phonetics: "/hed/",
                  pt: "cabeça",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/john-had-a-good-time.mp3",
                englishExample: ["John had a good time."],
                portugueseExample: ["John se divertiu."],
              }),
              example({
                audio: "/assets/audio/general/he-hit-his-head.mp3",
                englishExample: ["He hit his head."],
                portugueseExample: ["Ele bateu a cabeça."],
              }),
            ]}
          />
          <LineBreak />

          {/* man vs. men */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/man.mp3",
                  parts: ["m", { part: "a", type: "mark" }, "n"],
                  phonetics: "/mæn/",
                  pt: "homem",
                },
                right: {
                  audio: "/assets/audio/general/men.mp3",
                  parts: ["m", { part: "e", type: "mark" }, "n"],
                  phonetics: "/men/",
                  pt: "homens",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-man-is-here.mp3",
                englishExample: ["The man is here."],
                portugueseExample: ["O homem está aqui."],
              }),
              example({
                audio: "/assets/audio/general/the-men-are-here.mp3",
                englishExample: ["The men are here."],
                portugueseExample: ["Os homens estão aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* pan vs. pen */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/pan.mp3",
                  parts: ["p", { part: "a", type: "mark" }, "n"],
                  phonetics: "/pæn/",
                  pt: "panela",
                },
                right: {
                  audio: "/assets/audio/general/pen.mp3",
                  parts: ["p", { part: "e", type: "mark" }, "n"],
                  phonetics: "/pen/",
                  pt: "caneta",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/put-the-eggs-in-the-pan.mp3",
                englishExample: ["Put the eggs in the pan."],
                portugueseExample: ["Coloque os ovos na panela."],
              }),
              example({
                audio: "/assets/audio/general/you-can-use-this-pen.mp3",
                englishExample: ["You can use this pen."],
                portugueseExample: ["Você pode usar esta caneta."],
              }),
            ]}
          />
          <LineBreak />

          {/* shad vs. shed */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/shad.mp3",
                  parts: ["sh", { part: "a", type: "mark" }, "d"],
                  phonetics: "/ʃæd/",
                  pt: "peixe (tipo de arenque)",
                },
                right: {
                  audio: "/assets/audio/general/shed.mp3",
                  parts: ["sh", { part: "e", type: "mark" }, "d"],
                  phonetics: "/ʃed/",
                  pt: "derramar; galpão",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-fisherman-caught-a-shad.mp3",
                englishExample: ["The fisherman caught a shad."],
                portugueseExample: ["O pescador pegou um peixe shad."],
              }),
              example({
                audio:
                  "/assets/audio/general/cats-shed-their-fur-every-day.mp3",
                englishExample: ["Cats shed their fur every day."],
                portugueseExample: ["Gatos soltam pelos todos os dias."],
              }),
            ]}
          />
          <LineBreak />

          {/* tan vs. ten */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/tan.mp3",
                  parts: ["t", { part: "a", type: "mark" }, "n"],
                  phonetics: "/tæn/",
                  pt: "bronzeado; bronzear",
                },
                right: {
                  audio: "/assets/audio/general/ten.mp3",
                  parts: ["t", { part: "e", type: "mark" }, "n"],
                  phonetics: "/ten/",
                  pt: "dez",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/she-got-a-tan-at-the-beach.mp3",
                englishExample: ["She got a tan at the beach."],
                portugueseExample: ["Ela ficou bronzeada na praia."],
              }),
              example({
                audio:
                  "/assets/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
                englishExample: ["I got ten out of ten on the test."],
                portugueseExample: ["Eu tirei nota máxima na prova."],
              }),
            ]}
          />
          <LineBreak />

          {/* than vs. then */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/than.mp3",
                  parts: ["th", { part: "a", type: "mark" }, "n"],
                  phonetics: "/ðæn/",
                  pt: "do que",
                },
                right: {
                  audio: "/assets/audio/general/then.mp3",
                  parts: ["th", { part: "e", type: "mark" }, "n"],
                  phonetics: "/ðen/",
                  pt: "então; depois",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/she-is-taller-than-me.mp3",
                englishExample: ["She is taller than me."],
                portugueseExample: ["Ela é mais alta do que eu."],
              }),
              example({
                audio:
                  "/assets/audio/general/finish-your-work-then-you-can-rest.mp3",
                englishExample: ["Finish your work, then you can rest."],
                portugueseExample: [
                  "Termine seu trabalho, depois você pode descansar.",
                ],
              }),
            ]}
          />
        </Section>

        {/* Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/ */}
        <Section
          id="letters-ea-ee-vs-i"
          label="Letters 'ea', 'ee': /iː/ vs. 'i': /ɪ/"
          heading={3}
        >
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio:
                    "/assets/audio/pronunciation/phonetics-letters/vowels/i.mp3",
                  phonetics: "/iː/",
                },
                right: {
                  audio:
                    "/assets/audio/pronunciation/phonetics-letters/vowels/ɪ.mp3",
                  phonetics: "/ɪ/",
                },
              }),
            ]}
          />
          <LineBreak />

          {/* eat vs it */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/eat.mp3",
                  parts: [{ part: "ea", type: "mark" }, "t"],
                  phonetics: "/iːt/",
                  pt: "comer",
                },
                right: {
                  audio: "/assets/audio/general/it.mp3",
                  parts: [{ part: "i", type: "mark" }, "t"],
                  phonetics: "/ɪt/",
                  pt: "isso; ele/ela (coisa)",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
                englishExample: ["I don’t usually eat breakfast."],
                portugueseExample: ["Normalmente eu não tomo café da manhã."],
              }),
              example({
                audio: "/assets/audio/general/it-is-very-cold-today.mp3",
                englishExample: ["It is very cold today."],
                portugueseExample: ["Está muito frio hoje."],
              }),
            ]}
          />
          <LineBreak />

          {/* feel vs fill */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/feel.mp3",
                  parts: ["f", { part: "ee", type: "mark" }, "l"],
                  phonetics: "/fiːl/",
                  pt: "sentir",
                },
                right: {
                  audio: "/assets/audio/general/fill.mp3",
                  parts: ["f", { part: "i", type: "mark" }, "ll"],
                  phonetics: "/fɪl/",
                  pt: "encher; preencher",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-feel-tired.mp3",
                englishExample: ["I feel tired."],
                portugueseExample: ["Eu me sinto cansado."],
              }),
              example({
                audio: "/assets/audio/general/fill-the-glass-please.mp3",
                englishExample: ["Fill the glass, please."],
                portugueseExample: ["Encha o copo, por favor."],
              }),
            ]}
          />
          <LineBreak />

          {/* leave vs live */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/leave.mp3",
                  parts: ["l", { part: "ea", type: "mark" }, "ve"],
                  phonetics: "/liːv/",
                  pt: "sair; partir",
                },
                right: {
                  audio: "/assets/audio/general/live1.mp3",
                  parts: ["l", { part: "i", type: "mark" }, "ve"],
                  phonetics: "/lɪv/",
                  pt: "viver",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-leave-at-six.mp3",
                englishExample: ["I leave at six."],
                portugueseExample: ["Eu saio às seis."],
              }),
              example({
                audio: "/assets/audio/general/i-live-here.mp3",
                englishExample: ["I live here."],
                portugueseExample: ["Eu moro aqui."],
              }),
            ]}
          />
          <LineBreak />

          {/* sheep vs ship */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/sheep.mp3",
                  parts: ["sh", { part: "ee", type: "mark" }, "p"],
                  phonetics: "/ʃiːp/",
                  pt: "ovelha",
                },
                right: {
                  audio: "/assets/audio/general/ship.mp3",
                  parts: ["sh", { part: "i", type: "mark" }, "p"],
                  phonetics: "/ʃɪp/",
                  pt: "navio",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-saw-a-sheep-on-the-farm.mp3",
                englishExample: ["I saw a sheep on the farm."],
                portugueseExample: ["Eu vi uma ovelha na fazenda."],
              }),
              example({
                audio: "/assets/audio/general/this-ship-is-huge.mp3",
                englishExample: ["This ship is huge."],
                portugueseExample: ["Este navio é enorme."],
              }),
            ]}
          />
          <LineBreak />

          {/* sleep vs slip */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/sleep.mp3",
                  parts: ["sl", { part: "ee", type: "mark" }, "p"],
                  phonetics: "/sliːp/",
                  pt: "dormir",
                },
                right: {
                  audio: "/assets/audio/general/slip.mp3",
                  parts: ["sl", { part: "i", type: "mark" }, "p"],
                  phonetics: "/slɪp/",
                  pt: "escorregar",
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-need-to-sleep.mp3",
                englishExample: ["I need to sleep."],
                portugueseExample: ["Eu preciso dormir."],
              }),
              example({
                audio: "/assets/audio/general/becareful-not-to-slip.mp3",
                englishExample: ["Be careful not to slip."],
                portugueseExample: ["Cuidado para não escorregar."],
              }),
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

          {/* sin vs sing */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/sin.mp3",
                  parts: ["si", { part: "n", type: "mark" }],
                  phonetics: "/sɪn/",
                  portugueseExample: "pecado",
                },
                right: {
                  audio: "/assets/audio/general/sing.mp3",
                  parts: ["si", { part: "ng", type: "mark" }],
                  phonetics: "/sɪŋ/",
                  portugueseExample: "cantar",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/he-confessed-his-sins.mp3",
                englishExample: ["He confessed his sins."],
                portugueseExample: ["Ele confessou seu pecado."],
              }),
              example({
                audio:
                  "/assets/audio/general/she-loves-to-sing-in-the-shower.mp3",
                englishExample: ["She loves to sing in the shower."],
                portugueseExample: ["Ela adora cantar no chuveiro."],
              }),
            ]}
          />
          <LineBreak />

          {/* thin vs thing */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/thin.mp3",
                  parts: ["thi", { part: "n", type: "mark" }],
                  phonetics: "/θɪn/",
                  portugueseExample: "fino, magro",
                },
                right: {
                  audio: "/assets/audio/general/thing.mp3",
                  parts: ["thi", { part: "ng", type: "mark" }],
                  phonetics: "/θɪŋ/",
                  portugueseExample: "coisa",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-ice-is-thin.mp3",
                englishExample: ["The ice is thin."],
                portugueseExample: ["O gelo está fino."],
              }),
              example({
                audio: "/assets/audio/general/this-thing-is-important.mp3",
                englishExample: ["This thing is important."],
                portugueseExample: ["Esta coisa é importante."],
              }),
            ]}
          />
        </Section>

        {/*  Letters 'oo' /uː/ vs. 'u' /ʊ/ */}
        <Section
          id="letters-oo-vs-u"
          label="Letters 'oo' /uː/ vs. 'u' /ʊ/"
          heading={3}
        >
          {/* fool vs full */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/fool.mp3",
                  parts: ["f", mark("oo"), "l"],
                  phonetics: "/fuːl/",
                },
                right: {
                  audio: "/assets/audio/general/full.mp3",
                  parts: ["f", mark("u"), "ll"],
                  phonetics: "/fʊl/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/dont-be-a-fool.mp3",
                englishExample: "Don’t be a fool.",
                portugueseExample: "Não seja um tolo.",
              }),
              example({
                audio: "/assets/audio/general/the-glass-is-full.mp3",
                englishExample: "The glass is full.",
                portugueseExample: "O copo está cheio.",
              }),
            ]}
          />
          <LineBreak />

          {/* pool vs pull */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/pool.mp3",
                  parts: ["p", mark("oo"), "l"],
                  phonetics: "/puːl/",
                },
                right: {
                  audio: "/assets/audio/general/pull.mp3",
                  parts: ["p", mark("u"), "ll"],
                  phonetics: "/pʊl/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio:
                  "/assets/audio/general/they-are-swimming-in-the-pool.mp3",
                englishExample: "They are swimming in the pool.",
                portugueseExample: "Eles estão nadando na piscina.",
              }),
              example({
                audio: "/assets/audio/general/pull-the-door.mp3",
                englishExample: "Pull the door.",
                portugueseExample: "Puxe a porta.",
              }),
            ]}
          />
          <LineBreak />

          {/* suit vs soot */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/suit.mp3",
                  parts: ["s", mark("ui"), "t"],
                  phonetics: "/suːt/",
                },
                right: {
                  audio: "/assets/audio/general/soot.mp3",
                  parts: ["s", mark("oo"), "t"],
                  phonetics: "/sʊt/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/he-is-wearing-a-suit.mp3",
                englishExample: "He is wearing a suit.",
                portugueseExample: "Ele está usando um terno.",
              }),
              example({
                audio:
                  "/assets/audio/general/the-chimney-was-covered-in-soot.mp3",
                englishExample: "The chimney was covered in soot.",
                portugueseExample: "A chaminé estava coberta de fuligem.",
              }),
            ]}
          />
        </Section>

        {/*  Letters 'sh': /ʃ/ vs. 'ch': /tʃ/ */}
        <Section
          id="letters-sh-vs-ch"
          label="Letters 'sh': /ʃ/ vs. 'ch': /tʃ/"
          heading={3}
        >
          {/* wash vs watch */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/wash.mp3",
                  parts: ["wa", mark("sh")],
                  phonetics: "/wɑːʃ/",
                },
                right: {
                  audio: "/assets/audio/general/watch.mp3",
                  parts: ["wa", mark("tch")],
                  phonetics: "/wɑːtʃ/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio:
                  "/assets/audio/general/dont-forget-to-wash-your-hands.mp3",
                englishExample: "Don’t forget to wash your hands.",
                portugueseExample: "Não se esqueça de lavar as suas mãos.",
              }),
              example({
                audio: "/assets/audio/general/i-usually-watch-tv-at-night.mp3",
                englishExample: "I usually watch TV at night.",
                portugueseExample: "Eu assisto TV à noite.",
              }),
            ]}
          />
          <LineBreak />

          {/* ship vs chip */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/ship.mp3",
                  parts: ["", mark("sh"), "ip"],
                  phonetics: "/ʃɪp/",
                },
                right: {
                  audio: "/assets/audio/general/chip.mp3",
                  parts: ["", mark("ch"), "ip"],
                  phonetics: "/tʃɪp/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-ship-is-really-big.mp3",
                englishExample: "The ship is really big.",
                portugueseExample: "O navio é grande.",
              }),
              example({
                audio: "/assets/audio/general/she-ate-a-chip.mp3",
                englishExample: "She ate a chip.",
                portugueseExample: "Ele comeu uma batata frita.",
              }),
            ]}
          />
          <LineBreak />

          {/* sheep vs cheap */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/sheep.mp3",
                  parts: ["", mark("sh"), "eep"],
                  phonetics: "/ʃiːp/",
                },
                right: {
                  audio: "/assets/audio/general/cheap.mp3",
                  parts: ["", mark("ch"), "eap"],
                  phonetics: "/tʃiːp/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-sheep-are-in-the-field.mp3",
                englishExample: "The sheep are in the field.",
                portugueseExample: "As ovelhas estão no campo.",
              }),
              example({
                audio: "/assets/audio/general/this-shirt-is-cheap.mp3",
                englishExample: "This shirt is cheap.",
                portugueseExample: "Esta camisa é barata.",
              }),
            ]}
          />
        </Section>

        {/* Letters 't': /t/ vs. 'ch': /tʃ/ */}
        <Section
          id="letters-t-vs-ch"
          label="Letters 't': /t/ vs. 'ch': /tʃ/"
          heading={3}
        >
          {/* tick vs chick */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/tick.mp3",
                  parts: [mark("t"), "ick"],
                  phonetics: "/tɪk/",
                },
                right: {
                  audio: "/assets/audio/general/chick.mp3",
                  parts: [mark("ch"), "ick"],
                  phonetics: "/tʃɪk/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-clock-ticks-every-second.mp3",
                englishExample: "The clock ticks every second.",
                portugueseExample: "O relógio marca cada segundo.",
              }),
              example({
                audio: "/assets/audio/general/the-chick-is-small.mp3",
                englishExample: "The chick is small.",
                portugueseExample: "O pintinho é pequeno.",
              }),
            ]}
          />
          <LineBreak />

          {/* tin vs chin */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/tin.mp3",
                  parts: [mark("t"), "in"],
                  phonetics: "/tɪn/",
                },
                right: {
                  audio: "/assets/audio/general/chin.mp3",
                  parts: [mark("ch"), "in"],
                  phonetics: "/tʃɪn/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/the-box-is-made-of-tin.mp3",
                englishExample: "The box is made of tin.",
                portugueseExample: "A caixa é feita de estanho.",
              }),
              example({
                audio: "/assets/audio/general/he-touched-his-chin.mp3",
                englishExample: "He touched his chin.",
                portugueseExample: "Ele tocou o queixo.",
              }),
            ]}
          />
          <LineBreak />

          {/* to vs chew */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  audio: "/assets/audio/general/to.mp3",
                  parts: [mark("t"), "o"],
                  phonetics: "/tuː/",
                },
                right: {
                  audio: "/assets/audio/general/chew.mp3",
                  parts: [mark("ch"), "ew"],
                  phonetics: "/tʃuː/",
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              example({
                audio: "/assets/audio/general/i-want-to-go-home.mp3",
                englishExample: "I want to go home.",
                portugueseExample: "Eu quero ir para casa.",
              }),
              example({
                audio: "/assets/audio/general/chew-your-food-slowly.mp3",
                englishExample: "Chew your food slowly.",
                portugueseExample: "Mastigue sua comida devagar.",
              }),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
