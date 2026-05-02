import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Line } from "@/components/molecules/Line";
import { Phonetics } from "@/components/molecules/Phonetics";
import { Examples } from "@/components/molecules/Examples";
import {
  content,
  audio,
  attention,
  bold,
  mark,
  italic,
  phonetics,
  wordRowList,
  wordComparison,
  wordVariant,
  portuguese,
  connector,
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
              title: [bold("a...")],
            },
            // Letter 'a':
            {
              href: "letter-a",
              label: ["Letter 'a':  ", phonetics("/æ/, /ɑː/, /eɪ/, /ə/")],
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
              label: ["Letter 'aw', 'awe':  ", phonetics("/ɔː/")],
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
              label: ["Letters 'ea':  ", phonetics("/e/, /iː/")],
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
              label: ["Letters 'ey': ", phonetics("/i/, /eɪ/")],
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
              label: ["Letter 'i': ", phonetics("/i/, /ɪ/, /ə/, /aɪ/")],
            },
            // Letters 'ie':
            {
              href: "letters-ie",
              label: ["Letters 'ie':  ", phonetics("/i/, /aɪ/")],
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
              label: ["Letters 'n', 'ng':  ", phonetics("/ŋ/")],
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
              label: ["Letter 'o':  ", phonetics("/ɑː/, /ɔː/, /oʊ/")],
            },
            // Letters 'oa':
            {
              href: "letters-oa",
              label: ["Letters 'oa':  ", phonetics("/ɔː/, /oʊ/")],
            },
            // Letters 'oo':
            {
              href: "letters-oo",
              label: ["Letters 'oo':  ", phonetics("/ʌ/, /ʊ/, /uː/")],
            },
            // Letters 'ous':
            {
              href: "letters-ous",
              label: ["Letters 'ous':  ", phonetics("/əs/")],
            },
            // Letters 'ow':
            {
              href: "letters-ow",
              label: ["Letters 'ow':  ", phonetics("/aʊ/, /oʊ/")],
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
              label: ["Letter 'u':  ", phonetics("/ʌ/, /ɪ/, /ʊ/, /uː/, /juː/")],
            },
            // Letters 'ui':
            {
              href: "letters-ui",
              label: ["Letters 'ui':  ", phonetics("/ɪ/, /aɪ/, /uː/")],
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
              label: ["Letters '(t)ch':  ", phonetics("/tʃ/, /ʃ/, /k/")],
            },
            // Letter 't' and its sounds
            {
              href: "letter-t-sounds",
              label: ["Letter 't'  and its sounds"],
            },
            // Letter 'y':
            {
              href: "letter-y",
              label: ["Letter 'y':  ", phonetics("/i/, /j/, /aɪ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/æ.mp3"), phonetics("/æ/")],
              }),
              // answer
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/answer.mp3"), mark("a"), "nswer", " ", phonetics("/ˈæn.sɚ/")],
              }),
              // ask
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/ask.mp3"), mark("a"), "sk", " ", phonetics("/æsk/")],
              }),
              // bath
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bath.mp3"), "b", mark("a"), "th", " ", phonetics("/bæθ/")],
              }),
              // cat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cat.mp3"), "c", mark("a"), "t", " ", phonetics("/kæt/")],
              }),
              // can’t
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cant.mp3"), "c", mark("a"), "n’t", " ", phonetics("/kænt/")],
              }),
              // dance
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dance.mp3"), "d", mark("a"), "nce", " ", phonetics("/dæns/")],
              }),
              // fat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fat.mp3"), "f", mark("a"), "t", " ", phonetics("/fæt/")],
              }),
              // fast
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fast.mp3"), "f", mark("a"), "st", " ", phonetics("/fæst/")],
              }),
              // last
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/last-us.mp3"), "l", mark("a"), "st", " ", phonetics("/læst/")],
              }),
              // man
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/man.mp3"), "m", mark("a"), "n", " ", phonetics("/mæn/")],
              }),
              // task
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/task-us.mp3"), "t", mark("a"), "sk", " ", phonetics("/tæsk/")],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                parts: [
                  "In British English, ",
                  phonetics("/æ/"),
                  " often becomes ",
                  phonetics("/ɑː/"),
                  " in certain words.",
                ],
              }),
            ]}
          />
          {/* uk words */}
          <Phonetics
            variant="uk"
            value={[
              // /ɑː/
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3"), phonetics("/ɑː/")],
              }),
              // answer
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/answer-uk.mp3"), mark("a"), "nswer", " ", phonetics("/ˈɑːn.sər/")],
              }),
              // ask
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/ask-uk.mp3"), mark("a"), "sk", " ", phonetics("/ɑːsk/")],
              }),
              // bath
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bath-uk.mp3"), "b", mark("a"), "th", " ", phonetics("/bɑːθ/")],
              }),
              // can’t
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cant-uk.mp3"), "c", mark("a"), "n’t", " ", phonetics("/kɑːnt/")],
              }),
              // dance
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dance-uk.mp3"), "d", mark("a"), "nce", " ", phonetics("/dɑːns/")],
              }),
              // fast
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fast-uk.mp3"), "f", mark("a"), "st", " ", phonetics("/fɑːst/")],
              }),
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/last-uk.mp3"), "l", mark("a"), "st", " ", phonetics("/lɑːst/")],
              }),
              // task
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/task-uk.mp3"), "t", mark("a"), "sk", " ", phonetics("/tɑːsk/")],
              }),
            ]}
          />

          <LineBreak />
          {/* /e/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/e.mp3"), phonetics("/e/")],
              }),
              // bed
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bed.mp3"), "b", mark("e"), "d", " ", phonetics("/bed/")],
              }),
              // head
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/head.mp3"), "h", mark("ea"), "d", " ", phonetics("/hed/")],
              }),
              // red
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/red.mp3"), "r", mark("e"), "d", " ", phonetics("/red/")],
              }),
            ]}
          />

          {/* /ɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3"), phonetics("/ɪ/")],
              }),
              // busy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/busy.mp3"), "b", mark("u"), "sy", " ", phonetics("/ˈbɪz.i/")],
              }),
              // English
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/e/english.mp3"), mark("E"), "nglish", " ", phonetics("/ˈɪŋ.ɡlɪʃ/")],
              }),
              // it
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/i/it.mp3"), mark("i"), "t", " ", phonetics("/ɪt/")],
              }),
            ]}
          />

          {/* /iː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
              }),
              // eat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/e/eat.mp3"), mark("ea"), "t ", phonetics("/iːt/")],
              }),
              // key
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/k/key.mp3"), "k", mark("e"), "y ", phonetics("/kiː/")],
              }),
              // sea
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sea-see.mp3"), "s", mark("ea"), " ", phonetics("/siː/")],
              }),
              // see
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sea-see.mp3"), "s", mark("ee"), " ", phonetics("/siː/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ə/"), " ", italic("unstressed schwa")],
              }),

              // about
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/about.mp3"), mark("a"), "bout", " ", phonetics("/əˈbaʊt/")],
              }),

              // above
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/above.mp3"), mark("a"), "bove", " ", phonetics("/əˈbʌv/")],
              }),

              // open
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/open.mp3"), "op", mark("e"), "n", " ", phonetics("/ˈoʊ.pən/")],
              }),

              // student
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/student.mp3"),
                  "stud",
                  mark("e"),
                  "nt",
                  " ",
                  phonetics("/ˈstuː.dənt/"),
                ],
              }),

              // the
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/the2.mp3"), "th", mark("e"), " ", phonetics("/ðə/")],
              }),
            ]}
          />

          {/* uk */}
          <Phonetics
            variant="uk"
            value={[
              // cinema
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cinema-uk.mp3"),
                  { part: "vocab", type: "italic" },
                  " cin",
                  mark("e"),
                  "m",
                  mark("a"),
                  "",
                  phonetics("/ˈsɪn.ə.mə/"),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* /ʌ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ʌ/"), " ", italic("stressed")],
              }),

              // but
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/but.mp3"), "b", mark("u"), "t", " ", phonetics("/bʌt/")],
              }),

              // cup
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cup.mp3"), "c", mark("u"), "p", " ", phonetics("/kʌp/")],
              }),

              // hulk
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hulk.mp3"), "H", mark("u"), "lk", " ", phonetics("/hʌk/")],
              }),

              // son
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/son-sun.mp3"), "s", mark("o"), "n", " ", phonetics("/sʌn/")],
              }),

              // sun
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/son-sun.mp3"), "s", mark("u"), "n", " ", phonetics("/sʌn/")],
              }),

              // under
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/u/under.mp3"), mark("u"), "nder", " ", phonetics("/ˈʌn.dɚ/")],
              }),
            ]}
          />

          {/* uk */}
          {/* /ʌ/ */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ʌ.mp3"), phonetics("/ʌ/")],
              }),

              // but
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/but-uk.mp3"), "b", mark("u"), "t", " ", phonetics("/bʌt/")],
              }),

              // cup
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cup-uk.mp3"), "c", mark("u"), "p", " ", phonetics("/kʌp/")],
              }),

              // son
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/son-sun-uk.mp3"), "s", mark("o"), "n", " ", phonetics("/sʌn/")],
              }),

              // sun
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/son-sun-uk.mp3"), "s", mark("u"), "n", " ", phonetics("/sʌn/")],
              }),

              // under
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/u/under-uk.mp3"), mark("u"), "nder", " ", phonetics("/ˈʌn.də/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɔː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), phonetics("/ɔː/")],
              }),
              // all
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/all.mp3"), mark("a"), "ll", " ", phonetics("/ɔːl/")],
              }),
              // bought
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bought.mp3"), "b", mark("o"), "ught", " ", phonetics("/bɔːt/")],
              }),
              // call
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/call.mp3"), "c", mark("a"), "ll", " ", phonetics("/kɔːl/")],
              }),
              // caught
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/caught.mp3"), "c", mark("augh"), "t", " ", phonetics("/kɔːt/")],
              }),
              // claw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/claw.mp3"), "cl", mark("aw"), " ", phonetics("/klɔː/")],
              }),
              // coffee
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/coffee.mp3"), "c", mark("o"), "ffee", " ", phonetics("/ˈkɔː.fi/")],
              }),
              // daughter
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/daughter.mp3"), "d", mark("au"), "ghter", " ", phonetics("/ˈdɔː.t̬ɚ/")],
              }),
              // dog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dog.mp3"), "d", mark("o"), "g", " ", phonetics("/dɔːg/")],
              }),
              // draw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/draw.mp3"), "dr", mark("aw"), " ", phonetics("/drɔː/")],
              }),
              // fog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fog.mp3"), "f", mark("o"), "g", " ", phonetics("/fɔːg/")],
              }),
              // jaw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/jaw.mp3"), "j", mark("aw"), " ", phonetics("/dʒɔː/")],
              }),
              // frog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/frog.mp3"), "fr", mark("o"), "g", " ", phonetics("/frɔːg/")],
              }),
              // law
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/law.mp3"), "l", mark("aw"), " ", phonetics("/lɔː/")],
              }),
              // raw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/raw.mp3"), "r", mark("aw"), " ", phonetics("/rɔː/")],
              }),
              // saw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/saw.mp3"), "s", mark("aw"), " ", phonetics("/sɔː/")],
              }),
              // talk
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/talk.mp3"), "t", mark("a"), "lk", " ", phonetics("/tɔːk/")],
              }),
              // walk
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/walk.mp3"), "w", mark("a"), "lk", " ", phonetics("/wɔːk/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɑː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3"), phonetics("/ɑː/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bottom-us.mp3"), "b", mark("o"), "ttom", " ", phonetics("/ˈbɑː.t̬əm/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/calm.mp3"), "c", mark("a"), "lm", " ", phonetics("/kɑːm/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cot.mp3"), "c", mark("o"), "t", " ", phonetics("/kɑːt/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/father.mp3"), "f", mark("a"), "ther", " ", phonetics("/ˈfɑːðər/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/god.mp3"), "g", mark("o"), "d", " ", phonetics("/ɡɑːd/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hot.mp3"), "h", mark("o"), "t", " ", phonetics("/hɑːt/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/job.mp3"), "j", mark("o"), "b", " ", phonetics("/dʒɑːb/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lock.mp3"), "l", mark("o"), "ck", " ", phonetics("/lɑːk/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lot.mp3"), "l", mark("o"), "t", " ", phonetics("/lɑːt/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/not.mp3"), "n", mark("o"), "t", " ", phonetics("/nɑːt/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/odd.mp3"), mark("o"), "dd", " ", phonetics("/ɑːd/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/office.mp3"), mark("o"), "ffice", " ", phonetics("/ˈɑː.fɪs/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/palm.mp3"), "p", mark("a"), "lm", " ", phonetics("/pɑːm/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rob.mp3"), "r", mark("o"), "b", " ", phonetics("/rɑːb/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rock.mp3"), "r", mark("o"), "ck", " ", phonetics("/rɑːk/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/shop.mp3"), "sh", mark("o"), "p", " ", phonetics("/ʃɑːp/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sock.mp3"), "s", mark("o"), "ck", " ", phonetics("/sɑːk/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/spa.mp3"), "sp", mark("a"), " ", phonetics("/spɑː/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/stop.mp3"), "st", mark("o"), "p", " ", phonetics("/stɑːp/")],
              }),

              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/top.mp3"), "t", mark("o"), "p", " ", phonetics("/tɑːp/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɒ.mp3"), phonetics("/ɒ/")],
              }),

              // dog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dog-uk.mp3"), "d", mark("o"), "g", " ", phonetics("/dɒɡ/")],
              }),

              // frog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/frog-uk.mp3"), "fr", mark("o"), "g", " ", phonetics("/frɒɡ/")],
              }),

              // hot
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hot-uk.mp3"), "h", mark("o"), "t", " ", phonetics("/hɒt/")],
              }),

              // shop
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/shop-uk.mp3"), "sh", mark("o"), "p", " ", phonetics("/ʃɒp/")],
              }),

              // stop
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/stop-uk.mp3"), "st", mark("o"), "p", " ", phonetics("/stɒp/")],
              }),

              // lot
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lot-uk.mp3"), "l", mark("o"), "t", " ", phonetics("/lɒt/")],
              }),

              // rob
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rob-uk.mp3"), "r", mark("o"), "b", " ", phonetics("/rɒb/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ʊ.mp3"), phonetics("/ʊ/")],
              }),

              // book
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/book.mp3"), "b", mark("oo"), "k", " ", phonetics("/bʊk/")],
              }),

              // good
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/good.mp3"), "g", mark("oo"), "d", " ", phonetics("/gʊd/")],
              }),

              // wood
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/wood-would.mp3"), "w", mark("oo"), "d", " ", phonetics("/wʊd/")],
              }),

              // would
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/wood-would.mp3"), "w", mark("oul"), "d", " ", phonetics("/wʊd/")],
              }),
            ]}
          />

          {/* /uː/ */}
          <Phonetics
            value={[
              // /uː/ (long)
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/u.mp3"), phonetics("/uː/")],
              }),

              // blue
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/blue.mp3"), "bl", mark("ue"), " ", phonetics("/bluː/")],
              }),

              // food
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/food.mp3"), "f", mark("oo"), "d", " ", phonetics("/fuːd/")],
              }),

              // student
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/student.mp3"),
                  "st",
                  mark("u"),
                  "dent",
                  " ",
                  phonetics("/ˈstuː.dənt/"),
                ],
              }),
            ]}
          />
        </Section>

        <Section id="diphthongs" label="Diphthongs" heading={3}>
          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),

              // buy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/buy.mp3"), "b", mark("uy"), " ", phonetics("/baɪ/")],
              }),

              // my
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/my.mp3"), "m", mark("y"), " ", phonetics("/maɪ/")],
              }),

              // time
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/time.mp3"), "t", mark("i"), "me", " ", phonetics("/taɪm/")],
              }),
            ]}
          />
          {/* /aʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aʊ.mp3"), phonetics("/aʊ/")],
              }),

              // cow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cow.mp3"), "c", mark("ow"), " ", phonetics("/kaʊ/")],
              }),

              // bow (verb)
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bow-verb.mp3"), "b", mark("ow"), " ", phonetics("/baʊ/")],
              }),

              // south
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/south.mp3"), "s", mark("ou"), "th", " ", phonetics("/saʊθ/")],
              }),
            ]}
          />
          {/* /eɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3"), phonetics("/eɪ/")],
              }),

              // day
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/day.mp3"), "d", mark("a"), "y", " ", phonetics("/deɪ/")],
              }),

              // make
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/make.mp3"), "m", mark("a"), "ke", " ", phonetics("/meɪk/")],
              }),

              // say
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/say.mp3"), "s", mark("a"), "y", " ", phonetics("/seɪ/")],
              }),
            ]}
          />
          {/* /ɔɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/ɔɪ.mp3"), phonetics("/ɔɪ/")],
              }),

              // boy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/boy.mp3"), "b", mark("oy"), " ", phonetics("/bɔɪ/")],
              }),

              // choice
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/choice.mp3"), "ch", mark("oi"), "ce", " ", phonetics("/tʃɔɪs/")],
              }),

              // toy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/toy.mp3"), "t", mark("oy"), " ", phonetics("/tɔɪ/")],
              }),
            ]}
          />
          {/* /oʊ/ — US */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3"), phonetics("/oʊ/")],
              }),

              // go
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/go.mp3"), "g", mark("o"), " ", phonetics("/goʊ/")],
              }),

              // show
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/show.mp3"), "sh", mark("ow"), " ", phonetics("/ʃoʊ/")],
              }),

              // slow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/slow.mp3"), "sl", mark("ow"), " ", phonetics("/sloʊ/")],
              }),
            ]}
          />
          {/* /əʊ/ — UK */}
          <Phonetics
            variant="uk"
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/əʊ.mp3"), phonetics("/əʊ/")],
              }),

              // go
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/go-uk.mp3"), "g", mark("o"), " ", phonetics("/gəʊ/")],
              }),

              // show
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/show-uk.mp3"), "sh", mark("ow"), " ", phonetics("/ʃəʊ/")],
              }),

              // slow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/slow-uk.mp3"), "sl", mark("ow"), " ", phonetics("/sləʊ/")],
              }),
            ]}
          />
        </Section>

        <Section id="consonants" label="Consonants" heading={3}>
          {/* /b/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/b.mp3"), phonetics("/b/")],
              }),

              // book
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/book.mp3"), mark("b"), "ook", " ", phonetics("/bʊk/")],
              }),

              // table
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/table.mp3"), "ta", mark("b"), "le", " ", phonetics("/ˈteɪ.bəl/")],
              }),
            ]}
          />
          {/* /d/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/d.mp3"), phonetics("/d/")],
              }),
              // do
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/do.mp3"), mark("d"), "o", " ", phonetics("/duː/")],
              }),
              // did
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/did.mp3"), mark("d"), "id", " ", phonetics("/dɪd/")],
              }),
            ]}
          />
          {/* /f/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/f.mp3"), phonetics("/f/")],
              }),

              // fish
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fish.mp3"), mark("f"), "ish", " ", phonetics("/fɪʃ/")],
              }),

              // coffee
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/coffee.mp3"), "co", mark("ff"), "ee", " ", phonetics("/ˈkɑː.fi/")],
              }),
            ]}
          />
          {/* /g/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/g.mp3"), phonetics("/g/")],
              }),

              // go
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/go.mp3"), mark("g"), "o", " ", phonetics("/goʊ/")],
              }),

              // bag
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bag.mp3"), "ba", mark("g"), " ", phonetics("/bæg/")],
              }),
            ]}
          />
          {/* /h/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/h.mp3"), phonetics("/h/")],
              }),

              // hat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hat.mp3"), mark("h"), "at", " ", phonetics("/hæt/")],
              }),

              // head
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/head.mp3"), mark("h"), "ead", " ", phonetics("/hed/")],
              }),
            ]}
          />
          {/* /j/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/j.mp3"), phonetics("/j/")],
              }),

              // university
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/u/university.mp3"),
                  mark("u"),
                  "niversity",
                  " ",
                  phonetics("/ˌjuː.nəˈvɝː.sə.t̬i/"),
                ],
              }),

              // yes
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/yes.mp3"), mark("y"), "es", " ", phonetics("/jɛs/")],
              }),

              // yellow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/yellow.mp3"), mark("y"), "ellow", " ", phonetics("/ˈjɛloʊ/")],
              }),
            ]}
          />
          {/* /k/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/k.mp3"), phonetics("/k/")],
              }),
              // cat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cat.mp3"), mark("c"), "at", " ", phonetics("/kæt/")],
              }),
              // back
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/back.mp3"), "ba", mark("ck"), " ", phonetics("/bæk/")],
              }),
            ]}
          />
          {/* /ʒ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3"), phonetics("/ʒ/")],
              }),
              // vision
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/v/vision.mp3"), "vi", mark("s"), "ion", " ", phonetics("/ˈvɪʒən/")],
              }),
              // measure
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/measure.mp3"), "mea", mark("su"), "re", " ", phonetics("/ˈmeʒ.ɚ/")],
              }),
            ]}
          />
          {/* /l/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/l.mp3"), phonetics("/l/")],
              }),
              // love
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/love.mp3"), mark("l"), "ove", " ", phonetics("/lʌv/")],
              }),
              // feel
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/feel.mp3"), "fee", mark("l"), " ", phonetics("/fiːl/")],
              }),
            ]}
          />
          {/* /m/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/m.mp3"), phonetics("/m/")],
              }),
              // man
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/man.mp3"), mark("m"), "an", " ", phonetics("/mæn/")],
              }),
              // summer
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/summer.mp3"), "su", mark("mm"), "er", " ", phonetics("/ˈsʌm.ɚ/")],
              }),
            ]}
          />
          {/* /n/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/n.mp3"), phonetics("/n/")],
              }),
              // no
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/no.mp3"), mark("n"), "o", " ", phonetics("/noʊ/")],
              }),
              // dinner
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dinner.mp3"), "di", mark("nn"), "er", " ", phonetics("/ˈdɪn.ɚ/")],
              }),
            ]}
          />
          {/* /ŋ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ŋ.mp3"), phonetics("/ŋ/")],
              }),
              // sing
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sing.mp3"), "si", mark("ng"), " ", phonetics("/sɪŋ/")],
              }),
              // long
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/long.mp3"), "lo", mark("ng"), " ", phonetics("/lɔŋ/")],
              }),
            ]}
          />
          {/* /p/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/p.mp3"), phonetics("/p/")],
              }),
              // pen
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pen.mp3"), mark("p"), "en", " ", phonetics("/pen/")],
              }),
              // map
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/map.mp3"), "ma", mark("p"), " ", phonetics("/mæp/")],
              }),
            ]}
          />
          {/* /r/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/r.mp3"), phonetics("/r/")],
              }),
              // red
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/red.mp3"), mark("r"), "ed", " ", phonetics("/red/")],
              }),
              // carry
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/carry.mp3"), "ca", mark("rr"), "y", " ", phonetics("/ˈkæri/")],
              }),
            ]}
          />
          {/* /s/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/s.mp3"), phonetics("/s/")],
              }),
              // see
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sea-see.mp3"), mark("s"), "ee", " ", phonetics("/siː/")],
              }),
              // city
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/city.mp3"), "ci", mark("t"), "y", " ", phonetics("/ˈsɪt̬.i/")],
              }),
            ]}
          />
          {/* /ʃ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ʃ.mp3"), phonetics("/ʃ/")],
              }),
              // she
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/she.mp3"), mark("sh"), "e", " ", phonetics("/ʃiː/")],
              }),
              // nation
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/nation.mp3"), "na", mark("ti"), "on", " ", phonetics("/ˈneɪʃən/")],
              }),
            ]}
          />
          {/* /t/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/t.mp3"), phonetics("/t/")],
              }),
              // ten
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/ten.mp3"), mark("t"), "en", " ", phonetics("/ten/")],
              }),
              // top
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/top.mp3"), mark("t"), "op", " ", phonetics("/tɑːp/")],
              }),
            ]}
          />
          {/* /θ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/θ.mp3"), phonetics("/θ/")],
              }),
              // think
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/think.mp3"), mark("th"), "ink", " ", phonetics("/θɪŋk/")],
              }),
              // bath
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bath.mp3"), "ba", mark("th"), " ", phonetics("/bæθ/")],
              }),
            ]}
          />
          {/* /ð/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ð.mp3"), phonetics("/ð/")],
              }),
              // this
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/this.mp3"), mark("th"), "is", " ", phonetics("/ðɪs/")],
              }),
              // mother
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/mother.mp3"), "mo", mark("th"), "er", " ", phonetics("/ˈmʌð.ɚ/")],
              }),
            ]}
          />
          {/* /v/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/v.mp3"), phonetics("/v/")],
              }),
              // very
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/v/very.mp3"), mark("v"), "ery", " ", phonetics("/ˈver.i/")],
              }),
              // over
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/over.mp3"), "o", mark("v"), "er", " ", phonetics("/ˈoʊ.vɚ/")],
              }),
            ]}
          />
          {/* /w/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/w.mp3"), phonetics("/w/")],
              }),
              // we
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/we.mp3"), mark("w"), "e", " ", phonetics("/wiː/")],
              }),
              // quick
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/q/quick.mp3"), "q", mark("u"), "ick", " ", phonetics("/kwɪk/")],
              }),
            ]}
          />
          {/* /z/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/z.mp3"), phonetics("/z/")],
              }),
              // zoo
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/z/zoo.mp3"), mark("z"), "oo", " ", phonetics("/zuː/")],
              }),
              // music
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/music.mp3"), "mu", mark("s"), "ic", " ", phonetics("/ˈmjuː.zɪk/")],
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
                parts: [audio("/assets/audio/dictionary/c/choir.mp3"), "cho", mark("ir"), " ", phonetics("/kwaɪr/")],
              }),
              // fire
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fire.mp3"), "f", mark("ir"), "(e)", " ", phonetics("/faɪr/")],
              }),
              // inspire
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/i/inspire.mp3"),
                  "insp",
                  mark("ir"),
                  "(e)",
                  " ",
                  phonetics("/ɪnˈspaɪr/"),
                ],
              }),
              // liar
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/liar.mp3"), "l", mark("iar"), " ", phonetics("/ˈlaɪr/")],
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
                parts: [audio("/assets/audio/dictionary/c/choir-uk.mp3"), "cho", mark("ir"), " ", phonetics("/ˈkwaɪə/")],
              }),
              // fire
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fire-uk.mp3"), "f", mark("ir"), "(e)", " ", phonetics("/ˈfaɪə/")],
              }),
              // inspire
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/i/inspire-uk.mp3"),
                  "insp",
                  mark("ir"),
                  "(e)",
                  " ",
                  phonetics("/ɪnˈspaɪə/"),
                ],
              }),
              // liar
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/liar-uk.mp3"), "l", mark("iar"), " ", phonetics("/ˈlaɪə/")],
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
                parts: [audio("/assets/audio/dictionary/a/air.mp3"), "a", mark("ir"), " ", phonetics("/eər/")],
              }),
              // hair
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hair.mp3"), "h", mark("air"), " ", phonetics("/heər/")],
              }),
              // pair
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pair.mp3"), "p", mark("air"), " ", phonetics("/peər/")],
              }),
              // where
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/where.mp3"), "wh", mark("er"), "(e)", " ", phonetics("/wer/")],
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
                parts: [audio("/assets/audio/dictionary/a/air-uk.mp3"), "a", mark("ir"), " ", phonetics("/eə/")],
              }),
              // hair
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hair-uk.mp3"), "h", mark("air"), " ", phonetics("/heə/")],
              }),
              // pair
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pair-uk.mp3"), "p", mark("air"), " ", phonetics("/peə/")],
              }),
              // where
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/where-uk.mp3"), "wh", mark("ere"), "(e)", " ", phonetics("/weə/")],
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
                parts: [audio("/assets/audio/dictionary/b/bird.mp3"), "b", mark("ir"), "d", " ", phonetics("/bɝːd/")],
              }),
              // girl
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/girl.mp3"), "g", mark("ir"), "l", " ", phonetics("/ɡɝːl/")],
              }),
              // learn
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/learn.mp3"), "l", mark("ear"), "n", " ", phonetics("/lɝːn/")],
              }),
              // were
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/were.mp3"), "w", mark("er"), "(e)", " ", phonetics("/wɝː/")],
              }),
              // world
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/world.mp3"), "w", mark("or"), "ld", " ", phonetics("/wɝːld/")],
              }),
              // word
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/word.mp3"), "w", mark("or"), "d", " ", phonetics("/wɝːd/")],
              }),
              // work
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/work.mp3"), "w", mark("or"), "k", " ", phonetics("/wɝːk/")],
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
                parts: [audio("/assets/audio/dictionary/b/bird-uk.mp3"), "b", mark("ir"), "d", " ", phonetics("/bɜːd/")],
              }),
              // learn
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/learn-uk.mp3"), "l", mark("ear"), "n", " ", phonetics("/lɜːn/")],
              }),
              // were
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/were-uk.mp3"), "w", mark("er"), "(e)", " ", phonetics("/wɜː/")],
              }),
              // world
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/world-uk.mp3"), "w", mark("orl"), "d", " ", phonetics("/wɜːld/")],
              }),
              // word
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/word-uk.mp3"), "w", mark("or"), "d", " ", phonetics("/wɜːd/")],
              }),
              // work
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/work-uk.mp3"), "w", mark("or"), "k", " ", phonetics("/wɜːk/")],
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
                parts: [audio("/assets/audio/dictionary/d/door.mp3"), "d", mark("oor"), " ", phonetics("/dɔːr/")],
              }),
              // four
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/four.mp3"), "f", mark("our"), " ", phonetics("/fɔːr/")],
              }),
              // north
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/north.mp3"), "n", mark("orth"), " ", phonetics("/nɔːrθ/")],
              }),
              // war
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/war.mp3"), "w", mark("ar"), " ", phonetics("/wɔːr/")],
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
                parts: [audio("/assets/audio/dictionary/d/door-uk.mp3"), "d", mark("oor"), " ", phonetics("/dɔː/")],
              }),
              // four
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/four-uk.mp3"), "f", mark("our"), " ", phonetics("/fɔː/")],
              }),
              // north
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/north-uk.mp3"), "n", mark("orth"), " ", phonetics("/nɔːθ/")],
              }),
              // war
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/war-uk.mp3"), "w", mark("ar"), " ", phonetics("/wɔː/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/æ.mp3"), phonetics("/æ/")],
              }),
              // apple
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/apple.mp3"),
                  mark("a"),
                  "pple",
                  " ",
                  phonetics("/ˈæp.əl/"),
                  portuguese("maçã"),
                ],
              }),
              // anniversary
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/anniversary.mp3"),
                  mark("a"),
                  "nniversary",
                  " ",
                  phonetics("/ˌæn.əˈvɝː.sɚ.i/"),
                ],
              }),
              // bad
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bad.mp3"), "b", mark("a"), "d", " ", phonetics("/bæd/")],
              }),
              // bat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bat.mp3"), "b", mark("a"), "t", " ", phonetics("/bæt/")],
              }),
              // cap
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cap.mp3"), "c", mark("a"), "p", " ", phonetics("/kæp/")],
              }),
              // cat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cat.mp3"), "c", mark("a"), "t", " ", phonetics("/kæt/")],
              }),
              // fat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fat.mp3"), "f", mark("a"), "t", " ", phonetics("/fæt/")],
              }),
              // habit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/habit.mp3"), "h", mark("a"), "bit", " ", phonetics("/ˈhæb.ɪt/")],
              }),
              // hat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hat.mp3"), "h", mark("a"), "t", " ", phonetics("/hæt/")],
              }),
              // has
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/has.mp3"), "h", mark("a"), "s", " ", phonetics("/hæz/")],
              }),
              // have
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/have.mp3"), "h", mark("a"), "ve", " ", phonetics("/hæv/")],
              }),
              // man
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/man.mp3"), "m", mark("a"), "n", " ", phonetics("/mæn/")],
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/b/bats-usually-eat-apples.mp3"),
                  "Bats usually eat apples. ",
                  portuguese("Morcegos normalmente comem maçã."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-cat-is-on-the-mat.mp3"),
                  "The cat is on the mat. ",
                  portuguese("O gato está no tapete."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-man-has-a-black-cat.mp3"),
                  "The man has a black hat. ",
                  portuguese("O homem tem um chapéu preto."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/s/she-has-a-bad-habit.mp3"),
                  "She has a bad habit. ",
                  portuguese("Ela tem um mau hábito."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-have-a-map-in-my-bag.mp3"),
                  "I have a map in my bag. ",
                  portuguese("Eu tenho um mapa na minha bolsa."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɑː/ */}
          <Phonetics
            value={[
              // /ɑː/ (long)
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3"), phonetics("/ɑː/")],
              }),
              // calm
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/calm.mp3"), "c", mark("a"), "lm", " ", phonetics("/kɑːm/")],
              }),
              // father
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/father.mp3"), "f", mark("a"), "ther", " ", phonetics("/ˈfɑːðər/")],
              }),
              // palm
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/palm.mp3"), "p", mark("a"), "lm", " ", phonetics("/pɑːm/")],
              }),
              // spa
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/spa.mp3"), "sp", mark("a"), " ", phonetics("/spɑː/")],
              }),
            ]}
          />
          <LineBreak />
         <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/k/keep-calm-and-hold-my-arm.mp3"),
                  "Keep calm and hold my arm. ",
                  portuguese("Fique calmo e segure o meu braço."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/m/my-father-drove-the-car-far-away.mp3"),
                  "My father drove the car far away. ",
                  portuguese("Meu pai dirigiu o carro para longe."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-could-really-use-a-spa-right-now.mp3"),
                  "I could really use a spa right now. ",
                  portuguese("Preciso de um spa no momento."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* /eɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3"), phonetics("/eɪ/")],
              }),
              // ate
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/ate.mp3"),
                  mark("a"),
                  "te",
                  " ",
                  phonetics("/eɪt/"),
                  portuguese("comi, comeu (passado verbo eat)"),
                ],
              }),
              // chase
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chase.mp3"), "ch", mark("a"), "se", " ", phonetics("/tʃeɪs/")],
              }),
              // day
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/day.mp3"), "d", mark("a"), "y", " ", phonetics("/deɪ/")],
              }),
              // game
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/game.mp3"), "g", mark("a"), "me", " ", phonetics("/ɡeɪm/")],
              }),
              // made
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/made.mp3"), "m", mark("a"), "de", " ", phonetics("/meɪd/")],
              }),
              // tape
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/tape.mp3"), "t", mark("a"), "pe", " ", phonetics("/teɪp/")],
              }),
              // pay
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pay.mp3"), "p", mark("a"), "y", " ", phonetics("/peɪ/")],
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-ate-a-sandwhich-this-morning.mp3"),
                  "I ate a sandwich this morning. ",
                  portuguese("Eu comi um sanduíche esta manhã."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/s/she-chased-the-dog-across-the-yard.mp3"),
                  "She chased the dog across the yard. ",
                  portuguese("Ela correu atrás do cachorro pelo quintal."),
                ],
              }),
              content({
                parts: [
                  "We played a fun game after school. ",
                  portuguese("Nós jogamos um jogo divertido depois da escola."),
                ],
              }),
            ]}
          />
          <LineBreak />
          {/* /ə/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ə/")],
              }),
              // a
              ...wordRowList({
                parts: [mark("a"), " ", phonetics("/ə/")],
              }),
              // about
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/about.mp3"), mark("a"), "bout", " ", phonetics("/əˈbaʊt/")],
              }),
              // above
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/above.mp3"), mark("a"), "bove", " ", phonetics("/əˈbʌv/")],
              }),
              // idea
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/i/idea.mp3"), "ide", mark("a"), " ", phonetics("/aɪˈdiː.ə/")],
              }),
              // of
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/of.mp3"), mark("o"), "f", " ", phonetics("/əv/")],
              }),
              // ago
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/ago.mp3"), mark("a"), "go", " ", phonetics("/əˈɡoʊ/")],
              }),
              // away
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/away.mp3"), mark("a"), "way", " ", phonetics("/əˈweɪ/")],
              }),
              // banana
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/banana.mp3"),
                  "b",
                  mark("a"),
                  "nan",
                  mark("a"),
                  " ",
                  phonetics("/bəˈnænə/"),
                ],
              }),
              // sofa
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sofa.mp3"), "sof", mark("a"), " ", phonetics("/ˈsoʊ.fə/")],
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/b/bananas-contain-a-lot-of-potassium.mp3"),
                  "Bananas contain a lot of potassium. ",
                  portuguese("Bananas contêm muito potássio."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/its-out-of-ideas.mp3"),
                  "It's out of ideas. ",
                  portuguese("Está sem ideias."),
                ],
              }),
              content({
                parts: [
                  "We sat on the sofa a few minutes ago. ",
                  portuguese("Nós sentamos no sofá há alguns minutos."),
                ],
              }),
            ]}
          />
        </Section>

        {/* Letters 'ai:' /e/ */}
        <Section id="letters-ai" label="Letters 'ai:' /e/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/e.mp3"), phonetics("/e/")],
              }),

              // said
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/said.mp3"), "s", mark("ai"), "d", " ", phonetics("/sed/")],
              }),

              // again
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/again.mp3"), "ag", mark("ai"), "n", " ", phonetics("/əˈɡen/")],
              }),

              // against
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/against.mp3"), "ag", mark("ai"), "nst", " ", phonetics("/əˈɡenst/")],
              }),
            ]}
          />
        </Section>

        {/* Letters 'au': /ɔː/ */}
        <Section id="letters-au" label="Letters 'au': /ɔː/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), phonetics("/ɔː/")],
              }),
              // audio
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/audio.mp3"), mark("au"), "dio", " ", phonetics("/ˈɔː.di.oʊ/")],
              }),
              // automatic
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/automatic.mp3"),
                  mark("au"),
                  "tomatic",
                  " ",
                  phonetics("/ˈɔː.t̬əˈmæt̬.ɪk/"),
                ],
              }),
              // automaton
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/automaton.mp3"),
                  mark("au"),
                  "tomaton",
                  " ",
                  phonetics("/ɔːˈtɑː.mə.tən/"),
                ],
              }),
              // daughter
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/daughter.mp3"), "d", mark("au"), "ghter", " ", phonetics("/ˈdɔː.t̬ɚ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), bold("'aw'"), " ", phonetics("/ɔː/")],
              }),
              // law
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/law.mp3"),
                  "l",
                  mark("aw"),
                  " ",
                  phonetics("/lɔː/"),
                  " ",
                  portuguese("lei"),
                ],
              }),

              // saw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/saw.mp3"),
                  "s",
                  mark("aw"),
                  " ",
                  phonetics("/sɔː/"),
                  " ",
                  portuguese("viu / serra"),
                ],
              }),

              // draw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/draw.mp3"),
                  "dr",
                  mark("aw"),
                  " ",
                  phonetics("/drɔː/"),
                  " ",
                  portuguese("desenhar / puxar / empatar"),
                ],
              }),

              // raw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/raw.mp3"),
                  "r",
                  mark("aw"),
                  " ",
                  phonetics("/rɔː/"),
                  " ",
                  portuguese("cru"),
                ],
              }),

              // claw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/claw.mp3"),
                  "cl",
                  mark("aw"),
                  " ",
                  phonetics("/klɔː/"),
                  " ",
                  portuguese("garra"),
                ],
              }),

              // jaw
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/jaw.mp3"),
                  "j",
                  mark("aw"),
                  " ",
                  phonetics("/dʒɔː/"),
                  " ",
                  portuguese("mandíbula"),
                ],
              }),
            ]}
          />
          {/* awe- */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), bold("'awe'"), " ", phonetics("/ɔː/")],
              }),
              // awe
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/awe.mp3"), mark("awe"), " ", phonetics("/ˈɔː/")],
              }),
              // awesome
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/awesome.mp3"), mark("awe"), "some", " ", phonetics("/ˈɔː.səm/")],
              }),
            ]}
          />
          <LineBreak />
         <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/this-is-the-law.mp3"), "This is the law. ", portuguese("Esta é a lei.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/i/i-saw-a-bird.mp3"), "I saw a bird. ", portuguese("Eu vi um pássaro.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/l/lets-draw-a-picture.mp3"), "Let’s draw a picture. ", portuguese("Vamos desenhar um desenho. ")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/t/the-meat-is-raw.mp3"), "The meat is raw. ", portuguese("A carne está crua.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/t/the-cat-has-a-sharp-claw.mp3"), "The cat has a sharp claw. ", portuguese("O gato tem uma garra afiada.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/m/my-jaw-hurts.mp3"), "My jaw hurts. ", portuguese("Minha mandíbula dói.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/t/that-movie-is-awesome.mp3"), "That movie is awesome. ", portuguese("Esse filme é incrível.")],
              }),

              content({
                parts: [audio("/assets/audio/dictionary/w/we-watched-in-awe.mp3"), "We watched in awe. ", portuguese("Nós assistimos com admiração.")],
              }),
            ]}
          />
        </Section>

        {/* Letters: 'ay': /eɪ/ */}
        <Section id="letters-ay" label="Letters: 'ay': /eɪ/'" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3"), phonetics("/eɪ/")],
              }),
              // day
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/day.mp3"), "d", mark("a"), "y", " ", phonetics("/deɪ/")],
              }),
              // lay
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lay.mp3"), "l", mark("a"), "y", " ", phonetics("/leɪ/")],
              }),
              // pay
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pay.mp3"), "p", mark("a"), "y", " ", phonetics("/peɪ/")],
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              // • I’ll pay you tomorrow.
              content({
                parts: [audio("/assets/audio/dictionary/i/ill-pay-you-tomorrow.mp3"),
                  "I’ll pay you tomorrow. ",
                  portuguese("Te pago amanhã."),
                ],
              }),
              // • She laid the book on the table.
              content({
                parts: [audio("/assets/audio/dictionary/s/she-laid-the-book-on-the-table.mp3"),
                  "She laid the book on the table. ",
                  portuguese("Ela colocou o livro na mesa."),
                ],
              }),
              // • It’s a beautiful day today.
              content({
                parts: [audio("/assets/audio/dictionary/i/its-a-beautiful-day-today.mp3"),
                  "It’s a beautiful day today. ",
                  portuguese("Hoje é um dia bonito."),
                ],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/e.mp3"), phonetics("/e/")],
              }),
              // bed
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bed.mp3"), "b", mark("e"), "d", " ", phonetics("/bed/")],
              }),
              // get
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/get.mp3"), "g", mark("e"), "t", " ", phonetics("/get/")],
              }),
              // men
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/men.mp3"), "m", mark("e"), "n", " ", phonetics("/men/")],
              }),
              // red
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/red.mp3"), "r", mark("e"), "d", " ", phonetics("/red/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ə/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ə/")],
              }),
              // business
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/business.mp3"), "busin", mark("e"), "ss", " ", phonetics("/ˈbɪ.znəs/")],
              }),
              // open
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/open.mp3"), "op", mark("e"), "n", " ", phonetics("/ˈoʊ.pən/")],
              }),
              // problem
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/problem.mp3"),
                  "probl",
                  mark("e"),
                  "m",
                  " ",
                  phonetics("/ˈprɑː.bləm/"),
                ],
              }),
              // taken
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/taken.mp3"), "tak", mark("e"), "n", " ", phonetics("/ˈteɪ.kən/")],
              }),
            ]}
          />
        </Section>

        {/* Letter 'e' silent */}
        <Section id="letter-e-silent" label="Letter 'e' silent" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [
                  bold("silent 'e'"),
                  " ",
                  phonetics("/changes vowel sound/"),
                ],
              }),
              // ate
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/ate.mp3"), "at", mark("e"), " ", phonetics("/eɪt/")],
              }),
              // fate
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fate.mp3"), "fat", mark("e"), " ", phonetics("/feɪt/")],
              }),
              // time
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/time.mp3"), "tim", mark("e"), " ", phonetics("/taɪm/")],
              }),
              // make
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/make.mp3"), "mak", mark("e"), " ", phonetics("/meɪk/")],
              }),
              // where
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/where.mp3"), "wher", mark("e"), " ", phonetics("/wer/")],
              }),
              // write
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/right-write.mp3"), "writ", mark("e"), " ", phonetics("/raɪt/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/e.mp3"), phonetics("/e/")],
              }),
              // bread
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bread.mp3"), "br", mark("ea"), "d", " ", phonetics("/bred/")],
              }),
              // head
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/head.mp3"), "h", mark("ea"), "d", " ", phonetics("/hed/")],
              }),
              // meant
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/meant.mp3"), "m", mark("ea"), "nt", " ", phonetics("/ment/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /iː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
              }),
              // eat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/e/eat.mp3"), mark("ea"), "t", " ", phonetics("/iːt/")],
              }),
              // meat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/meat.mp3"), "m", mark("ea"), "t", " ", phonetics("/miːt/")],
              }),
              // seat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/seat.mp3"), "s", mark("ea"), "t", " ", phonetics("/siːt/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/ju.mp3"), phonetics("/juː/")],
              }),
              // beauty
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/beauty.mp3"),
                  "b",
                  mark("eau"),
                  "ty",
                  " ",
                  phonetics("/ˈbjuː.t̬i/"),
                  " ",
                  portuguese("beleza"),
                ],
              }),

              // beautiful
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/beautiful.mp3"),
                  "b",
                  mark("eau"),
                  "tiful",
                  " ",
                  phonetics("/ˈbjuː.t̬ə.fəl/"),
                  " ",
                  portuguese("bonito / bonita"),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3"), phonetics("/oʊ/")],
              }),

              // beau
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/beau.mp3"), "b", mark("eau"), " ", phonetics("/boʊ/")],
              }),

              // bureau
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bureau.mp3"),
                  "bur",
                  mark("eau"),
                  " ",
                  phonetics("/ˈbjʊr.oʊ/"),
                  " ",
                  portuguese("escritório / departamento"),
                ],
              }),

              // plateau (último sem square)
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/plateau.mp3"),
                  "plat",
                  mark("eau"),
                  " ",
                  phonetics("/plæˈtoʊ/"),
                  " ",
                  portuguese("planalto / estabilizar"),
                ],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
              }),
              // see
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sea-see.mp3"), "s", mark("ee"), " ", phonetics("/siː/")],
              }),

              // green
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/green.mp3"), "gr", mark("ee"), "n", " ", phonetics("/ɡriːn/")],
              }),

              // meet
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/meet.mp3"), "m", mark("ee"), "t", " ", phonetics("/miːt/")],
              }),

              // need
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/need.mp3"), "n", mark("ee"), "d", " ", phonetics("/niːd/")],
              }),

              // sleep
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sleep.mp3"), "sl", mark("ee"), "p", " ", phonetics("/sliːp/")],
              }),

              // tree
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/tree.mp3"), "tr", mark("ee"), " ", phonetics("/triː/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3"), phonetics("/eɪ/")],
              }),

              // eight
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/e/eight.mp3"), mark("ei"), "ght", " ", phonetics("/eɪt/")],
              }),

              // vein
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/v/vein.mp3"), "v", mark("ei"), "n", " ", phonetics("/veɪn/")],
              }),

              // rein
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rein.mp3"), "r", mark("ei"), "n", " ", phonetics("/reɪn/")],
              }),

              // neighbor
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/neighbor.mp3"), "n", mark("ei"), "ghbor", " ", phonetics("/ˈneɪ.bɚ/")],
              }),

              // weight
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/weight.mp3"), "w", mark("ei"), "ght", " ", phonetics("/weɪt/")],
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
              // theory
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/theory.mp3"), "th", mark("eo"), "ry", " ", phonetics("/ˈθiːər.i/")],
              }),
              // theorem
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/theorem.mp3"), "th", mark("eo"), "rem", " ", phonetics("/ˈθiːə.rəm/")],
              }),
              // Theodore
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/theodore.mp3"),
                  "Th",
                  mark("eo"),
                  "dore",
                  " ",
                  phonetics("/ˈθiː.ə.dɔːr/"),
                ],
              }),
              // leotard
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/leotard.mp3"),
                  "l",
                  mark("eo"),
                  "tard",
                  " ",
                  phonetics("/ˈliː.ə.tɑːrd/"),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Phonetics
            value={[
              // neon
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/neon.mp3"), "n", mark("eo"), "n", " ", phonetics("/ˈniː.ɑːn/")],
              }),
              // peon
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/peon.mp3"), "p", mark("eo"), "n", " ", phonetics("/ˈpiː.ən/")],
              }),
              // theology
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/theology.mp3"),
                  "th",
                  mark("eo"),
                  "logy",
                  " ",
                  phonetics("/θiˈɑː.lə.dʒi/"),
                ],
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...attention({
                parts: [{ part: "Exception:", type: "bold" }],
              }),
            ]}
          />

          <Phonetics
            value={[
              // leopard
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/leopard.mp3"), "l", mark("eo"), "pard", " ", phonetics("/ˈlep.ɚd/")],
              }),
              // jeopardy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/jeopardy.mp3"),
                  "j",
                  mark("eo"),
                  "pardy",
                  " ",
                  phonetics("/ˈdʒep.ɚ.di/"),
                ],
              }),
              // people
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/people.mp3"), "p", mark("eo"), "ple", " ", phonetics("/ˈpiː.pəl/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/eɪ.mp3"), phonetics("/eɪ/")],
              }),

              // ballet
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/ballet.mp3"), "ball", mark("et"), " ", phonetics("/bæˈleɪ/")],
              }),

              // buffet
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/buffet.mp3"), "buff", mark("et"), " ", phonetics("/bəˈfeɪ/")],
              }),

              // gourmet
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/gourmet.mp3"), "gourm", mark("et"), " ", phonetics("/ɡʊrˈmeɪ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/i/")],
              }),
              // abbey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/abbey.mp3"), "abb", mark("ey"), " ", phonetics("/ˈæb.i/")],
              }),
              // disney
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/disney.mp3"), "Disn", mark("ey"), " ", phonetics("/ˈdɪz.ni/")],
              }),
              // donkey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/donkey.mp3"), "donk", mark("ey"), " ", phonetics("/ˈdɑːŋ.ki/")],
              }),
              // money
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/money.mp3"), "mon", mark("ey"), " ", phonetics("/ˈmʌn.i/")],
              }),
              // odyssey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/odyssey.mp3"), "odyss", mark("ey"), " ", phonetics("/ˈɑː.dɪ.si/")],
              }),
              // Sydney
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sydney.mp3"), "Sydn", mark("ey"), " ", phonetics("/ˈsɪd.ni/")],
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
              // /iː/
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
              }),
              // machine
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/machine.mp3"), "mach", mark("i"), "ne", " ", phonetics("/məˈʃiːn/")],
              }),
              // police
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/police.mp3"), "pol", mark("i"), "ce", " ", phonetics("/pəˈliːs/")],
              }),
              // ski
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/ski.mp3"), "sk", mark("i"), " ", phonetics("/skiː/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɪ/ */}
          <Phonetics
            value={[
              // /ɪ/
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3"), phonetics("/ɪ/")],
              }),
              // animal
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/animal.mp3"), "an", mark("i"), "mal", " ", phonetics("/ˈæn.ɪ.məl/")],
              }),
              // big
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/big.mp3"), "b", mark("i"), "g", " ", phonetics("/bɪɡ/")],
              }),
              // city
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/city.mp3"), "c", mark("i"), "ty", " ", phonetics("/ˈsɪt̬.i/")],
              }),
              // finish
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/finish.mp3"),
                  "f",
                  mark("i"),
                  "n",
                  mark("i"),
                  "sh",
                  " ",
                  phonetics("/ˈfɪn.ɪʃ/"),
                ],
              }),
              // limit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/limit.mp3"),
                  "l",
                  mark("i"),
                  "m",
                  mark("i"),
                  "t",
                  " ",
                  phonetics("/ˈlɪm.ɪt/"),
                ],
              }),
              // milk
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/milk.mp3"), "m", mark("i"), "lk", " ", phonetics("/mɪlk/")],
              }),
              // minute
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/minute.mp3"), "m", mark("i"), "nute", " ", phonetics("/ˈmɪn.ɪt/")],
              }),
              // sit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sit.mp3"), "s", mark("i"), "t", " ", phonetics("/sɪt/")],
              }),
              // visit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/v/visit.mp3"),
                  "v",
                  mark("i"),
                  "s",
                  mark("i"),
                  "t",
                  " ",
                  phonetics("/ˈvɪz.ɪt/"),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* /ə/ */}
          <Phonetics
            value={[
              // /ə/
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ə/")],
              }),
              // family
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/family.mp3"), "fam", mark("i"), "ly", " ", phonetics("/ˈfæm.əl.i/")],
              }),
              // possible
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/possible.mp3"),
                  "poss",
                  mark("i"),
                  "ble",
                  " ",
                  phonetics("/ˈpɑː.sə.bəl/"),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),
              // find
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/find.mp3"), "f", mark("i"), "nd", " ", phonetics("/faɪnd/")],
              }),
              // kind
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/k/kind.mp3"), "k", mark("i"), "nd", " ", phonetics("/kaɪnd/")],
              }),
              // kite
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/k/kite.mp3"), "k", mark("i"), "te", " ", phonetics("/kaɪt/")],
              }),
              // like
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/like.mp3"), "l", mark("i"), "ke", " ", phonetics("/laɪk/")],
              }),
              // time
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/time.mp3"), "t", mark("i"), "me", " ", phonetics("/taɪm/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
              }),
              // believe
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/believe.mp3"), "bel", mark("ie"), "ve", " ", phonetics("/bɪˈliːv/")],
              }),
              // brief
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/brief.mp3"), "br", mark("ie"), "f", " ", phonetics("/briːf/")],
              }),
              // chief
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chief.mp3"), "ch", mark("ie"), "f", " ", phonetics("/tʃiːf/")],
              }),
              // field
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/field.mp3"), "f", mark("ie"), "ld", " ", phonetics("/fiːld/")],
              }),
              // piece
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/piece.mp3"), "p", mark("ie"), "ce", " ", phonetics("/piːs/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),
              // cried
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cried.mp3"), "cr", mark("ie"), "d", " ", phonetics("/kraɪd/")],
              }),
              // die
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/die.mp3"), "d", mark("ie"), " ", phonetics("/daɪ/")],
              }),
              // lie
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lie.mp3"), "l", mark("ie"), " ", phonetics("/laɪ/")],
              }),
              // pie
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pie.mp3"), "p", mark("ie"), " ", phonetics("/paɪ/")],
              }),
              // tie
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/tie.mp3"), "t", mark("ie"), " ", phonetics("/taɪ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/n.mp3"), bold("'n' "), phonetics("/ŋ/")],
              }),

              // anger
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/anger.mp3"),
                  "a",
                  mark("n"),
                  "ger",
                  " ",
                  phonetics("/ˈæŋ.ɡɚ/"),
                  " ",
                  portuguese("raiva, braveza"),
                ],
              }),

              // angry
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/angry.mp3"),
                  "a",
                  mark("n"),
                  "gry",
                  " ",
                  phonetics("/ˈæŋ.ɡri/"),
                  " ",
                  portuguese("com raiva"),
                ],
              }),
            ]}
          />
          <LineBreak />
          {/* 'ng' */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ŋ.mp3"), bold("'ng'"), " ", phonetics("/ŋ/")],
              }),

              // going
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/going.mp3"),
                  "goi",
                  mark("ng"),
                  " ",
                  phonetics("/ɡoʊɪŋ/"),
                  " ",
                  portuguese("em andamento"),
                ],
              }),

              // interesting
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/i/interesting.mp3"),
                  "interesti",
                  mark("ng"),
                  " ",
                  phonetics("/ˈɪn.trə.stɪŋ/"),
                  " ",
                  portuguese("interessante"),
                ],
              }),

              // thing
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/thing.mp3"),
                  "thi",
                  mark("ng"),
                  " ",
                  phonetics("/θɪŋ/"),
                  " ",
                  portuguese("coisa"),
                ],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3"), phonetics("/ɑː/")],
              }),
              // donkey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/donkey.mp3"), "d", mark("o"), "nkey", " ", phonetics("/ˈdɑːŋ.ki/")],
              }),
              // hot
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hot.mp3"), "h", mark("o"), "t", " ", phonetics("/hɑːt/")],
              }),
              // job
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/job.mp3"), "j", mark("o"), "b", " ", phonetics("/dʒɑːb/")],
              }),
              // lot
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/lot.mp3"), "l", mark("o"), "t", " ", phonetics("/lɑːt/")],
              }),
              // not
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/not.mp3"), "n", mark("o"), "t", " ", phonetics("/nɑːt/")],
              }),
              // odyssey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/odyssey.mp3"), mark("o"), "dyssey", " ", phonetics("/ˈɑː.dɪ.si/")],
              }),
              // office
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/office.mp3"), mark("o"), "ffice", " ", phonetics("/ˈɑː.fɪs/")],
              }),
              // rob
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rob.mp3"), "r", mark("o"), "b", " ", phonetics("/rɑːb/")],
              }),
              // rock
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rock.mp3"), "r", mark("o"), "ck", " ", phonetics("/rɑːk/")],
              }),
              // shop
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/shop.mp3"), "sh", mark("o"), "p", " ", phonetics("/ʃɑːp/")],
              }),
              // stop
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/stop.mp3"), "st", mark("o"), "p", " ", phonetics("/stɑːp/")],
              }),
              // top
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/top.mp3"), "t", mark("o"), "p", " ", phonetics("/tɑːp/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɔː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), phonetics("/ɔː/")],
              }),
              // bought
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bought.mp3"), "b", mark("o"), "ught", " ", phonetics("/bɔːt/")],
              }),
              // coffee
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/coffee.mp3"), "c", mark("o"), "ffee", " ", phonetics("/ˈkɔː.fi/")],
              }),
              // dog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dog.mp3"), "d", mark("o"), "g", " ", phonetics("/dɔːg/")],
              }),
              // fog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fog.mp3"), "f", mark("o"), "g", " ", phonetics("/fɔːg/")],
              }),
              // frog
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/frog.mp3"), "fr", mark("o"), "g", " ", phonetics("/frɔːg/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /oʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3"), phonetics("/oʊ/")],
              }),
              // go
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/go.mp3"), "g", mark("o"), " ", phonetics("/ɡoʊ/")],
              }),
              // hotel
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hotel.mp3"), "h", mark("o"), "tel", " ", phonetics("/hoʊˈtel/")],
              }),
              // no
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/no.mp3"), "n", mark("o"), " ", phonetics("/noʊ/")],
              }),
              // open
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/open.mp3"), mark("o"), "pen", " ", phonetics("/ˈoʊ.pən/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3"), phonetics("/ɔː/")],
              }),
              // abroad
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/abroad.mp3"), "abr", mark("oa"), "d", " ", phonetics("/əˈbrɔːd/")],
              }),
              // broad
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/broad.mp3"), "br", mark("oa"), "d", " ", phonetics("/brɔːd/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /oʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3"), phonetics("/oʊ/")],
              }),
              // boat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/boat.mp3"), "b", mark("oa"), "t", " ", phonetics("/boʊt/")],
              }),
              // coat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/coat.mp3"), "c", mark("oa"), "t", " ", phonetics("/koʊt/")],
              }),
              // goat
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/goat.mp3"), "g", mark("oa"), "t", " ", phonetics("/goʊt/")],
              }),
              // road
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/road.mp3"), "r", mark("oa"), "d", " ", phonetics("/roʊd/")],
              }),
              // soap
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/soap.mp3"), "s", mark("oa"), "p", " ", phonetics("/soʊp/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ʌ/")],
              }),
              // blood
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/blood.mp3"), "bl", mark("oo"), "d", " ", phonetics("/blʌd/")],
              }),
              // flood
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/flood.mp3"), "fl", mark("oo"), "d", " ", phonetics("/flʌd/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ʊ.mp3"), phonetics("/ʊ/")],
              }),
              // book
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/book.mp3"), "b", mark("oo"), "k", " ", phonetics("/bʊk/")],
              }),
              // cook
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cook.mp3"), "c", mark("oo"), "k", " ", phonetics("/kʊk/")],
              }),
              // foot
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/foot.mp3"), "f", mark("oo"), "t", " ", phonetics("/fʊt/")],
              }),
              // good
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/good.mp3"), "g", mark("oo"), "d", " ", phonetics("/gʊd/")],
              }),
              // look
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/look.mp3"), "l", mark("oo"), "k", " ", phonetics("/lʊk/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/u.mp3"), phonetics("/uː/")],
              }),
              // food
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/food.mp3"), "f", mark("oo"), "d", " ", phonetics("/fuːd/")],
              }),
              // moon
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/moon.mp3"), "m", mark("oo"), "n", " ", phonetics("/muːn/")],
              }),
              // school
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/school.mp3"), "sch", mark("oo"), "l", " ", phonetics("/skuːl/")],
              }),
              // room
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/room.mp3"), "r", mark("oo"), "m", " ", phonetics("/ruːm/")],
              }),
              // too
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/to.mp3"), "t", mark("oo"), " ", phonetics("/tuː/")],
              }),
            ]}
          />
        </Section>

        {/* Letters 'ous': /əs/ */}
        <Section id="letters-ous" label="Letters 'ous': /əs/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/əs.mp3"), phonetics("/əs/")],
              }),
              // curious
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/curious.mp3"), "curi", mark("ous"), " ", phonetics("/ˈkjʊr.i.əs/")],
              }),
              // dangerous
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/d/dangerous.mp3"),
                  "danger",
                  mark("ous"),
                  " ",
                  phonetics("/ˈdeɪn.dʒɚ.əs/"),
                ],
              }),
              // famous
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/famous.mp3"), "fam", mark("ous"), " ", phonetics("/ˈfeɪ.məs/")],
              }),
              // nervous
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/nervous.mp3"), "nerv", mark("ous"), " ", phonetics("/ˈnɝː.vəs/")],
              }),
              // serious
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/serious.mp3"), "seri", mark("ous"), " ", phonetics("/ˈsɪr.i.əs/")],
              }),
              // various
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/v/various.mp3"), "vari", mark("ous"), " ", phonetics("/ˈver.i.əs/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aʊ.mp3"), phonetics("/aʊ/")],
              }),
              // bow (verb)
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bow-verb.mp3"),
                  "b",
                  mark("ow"),
                  " ",
                  italic("verb"),
                  " ",
                  phonetics("/baʊ/"),
                ],
              }),
              // brown
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/brown.mp3"), "br", mark("ow"), "n", " ", phonetics("/braʊn/")],
              }),
              // clown
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/clown.mp3"), "cl", mark("ow"), "n", " ", phonetics("/klaʊn/")],
              }),
              // cow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cow.mp3"), "c", mark("ow"), " ", phonetics("/kaʊ/")],
              }),
              // coward
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/coward.mp3"), "c", mark("ow"), "ard", " ", phonetics("/ˈkaʊ.ɚd/")],
              }),
              // frown
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/frown.mp3"), "fr", mark("ow"), "n", " ", phonetics("/fraʊn/")],
              }),
              // town
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/town.mp3"), "t", mark("ow"), "n", " ", phonetics("/taʊn/")],
              }),
            ]}
          />
          <LineBreak />
          {/* /oʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/oʊ.mp3"), phonetics("/oʊ/")],
              }),
              // bow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bow-noun.mp3"),
                  "b",
                  mark("ow"),
                  " ",
                  italic("noun"),
                  " ",
                  phonetics("/boʊ/"),
                ],
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
              // cow vs. call
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/c/cow.mp3"), "c", mark("ow"), " ", phonetics("/kaʊ/")],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/call.mp3"), "ca", mark("ll"), " ", phonetics("/kɔːl/")],
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
                  parts: [audio("/assets/audio/dictionary/b/bow-noun.mp3"), "b", mark("ow"), " ", phonetics("/boʊ/")],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/b/bowl.mp3"), "bow", mark("l"), " ", phonetics("/boʊl/")],
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
          {/* /ʌ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3"), phonetics("/ʌ/")],
              }),
              // but
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/but.mp3"), "b", mark("u"), "t", " ", phonetics("/bʌt/")],
              }),
              // cuff
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cuff.mp3"), "c", mark("u"), "ff", " ", phonetics("/kʌf/")],
              }),
              // cut
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/cut.mp3"), "c", mark("u"), "t", " ", phonetics("/kʌt/")],
              }),
              // hulk
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hulk.mp3"), "h", mark("u"), "lk", " ", phonetics("/hʌlk/")],
              }),
              // hut
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hut.mp3"), "h", mark("u"), "t", " ", phonetics("/hʌt/")],
              }),
              // success
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/success.mp3"), "s", mark("u"), "ccess", " ", phonetics("/səkˈses/")],
              }),
              // support
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/support.mp3"), "s", mark("u"), "pport", " ", phonetics("/səˈpɔːrt/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3"), phonetics("/ɪ/")],
              }),
              // business
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/business.mp3"), "b", mark("u"), "siness", " ", phonetics("/ˈbɪ.znəs/")],
              }),
              // busy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/busy.mp3"), "b", mark("u"), "sy", " ", phonetics("/ˈbɪz.i/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ʊ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ʊ.mp3"), phonetics("/ʊ/")],
              }),
              // full
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/full.mp3"), "f", mark("u"), "ll", " ", phonetics("/fʊl/")],
              }),
              // pull
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/pull.mp3"), "p", mark("u"), "ll", " ", phonetics("/pʊl/")],
              }),
              // put
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/put.mp3"), "p", mark("u"), "t", " ", phonetics("/pʊt/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/u.mp3"), phonetics("/uː/")],
              }),
              // student
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/student.mp3"),
                  "st",
                  mark("u"),
                  "dent",
                  " ",
                  phonetics("/ˈstuː.dənt/"),
                ],
              }),
              // rule
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/r/rule.mp3"), "r", mark("u"), "le", " ", phonetics("/ruːl/")],
              }),
            ]}
            word
          />
          <LineBreak />

          {/* /juː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/ju.mp3"), phonetics("/juː/")],
              }),
              // curious
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/curious.mp3"), "c", mark("u"), "rious ", phonetics("/ˈkjʊr.i.əs/")],
              }),
              // music
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/music.mp3"), "m", mark("u"), "sic ", phonetics("/ˈmjuː.zɪk/")],
              }),
              // university
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/u/university.mp3"),
                  mark("u"),
                  "niversity ",
                  phonetics("/ˌjuː.nəˈvɝː.sə.t̬i/"),
                ],
              }),
              // use
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/u/use-verb.mp3"), mark("u"), "se ", phonetics("/juːz/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3"), phonetics("/ɪ/")],
              }),
              // build
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/build.mp3"), "b", mark("ui"), "ld ", phonetics("/bɪld/")],
              }),
              // built
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/built.mp3"), "b", mark("ui"), "lt ", phonetics("/bɪlt/")],
              }),
              // guild
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/guild.mp3"), "g", mark("ui"), "ld ", phonetics("/ɡɪld/")],
              }),
              // guilt
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/guilt.mp3"), "g", mark("ui"), "lt ", phonetics("/ɡɪlt/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /aɪ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),
              // guide
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/guide.mp3"), "g", mark("ui"), "de ", phonetics("/ɡaɪd/")],
              }),
              // guile
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/g/guile.mp3"), "g", mark("ui"), "le ", phonetics("/ɡaɪl/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /uː/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/u.mp3"), phonetics("/uː/")],
              }),
              // fruit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fruit.mp3"), "fr", mark("ui"), "t ", phonetics("/fruːt/")],
              }),
              // juice
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/j/juice.mp3"), "j", mark("ui"), "ce ", phonetics("/dʒuːs/")],
              }),
              // nuisance
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/n/nuisance.mp3"), "n", mark("ui"), "sance ", phonetics("/ˈnuː.səns/")],
              }),
              // suit
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/suit.mp3"), "s", mark("ui"), "t ", phonetics("/suːt/")],
              }),
            ]}
          />
        </Section>

        {/* Letters 'us': /əs/ */}
        <Section id="letters-us" label="Letters 'us': /əs/" heading={3}>
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/əs.mp3"), phonetics("/əs/")],
              }),
              // bonus
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bonus.mp3"), "bon", mark("us"), " ", phonetics("/ˈboʊ.nəs/")],
              }),
              // campus
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/campus.mp3"), "camp", mark("us"), " ", phonetics("/ˈkæm.pəs/")],
              }),
              // focus
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/focus.mp3"), "foc", mark("us"), " ", phonetics("/ˈfoʊ.kəs/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ʃ.mp3"), phonetics("/ʃ/")],
              }),
              // she
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/she.mp3"), mark("sh"), "e ", phonetics("/ʃiː/")],
              }),
              // ship
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/ship.mp3"), mark("sh"), "ip ", phonetics("/ʃɪp/")],
              }),
              // shop
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/shop.mp3"), mark("sh"), "op ", phonetics("/ʃɑːp/")],
              }),
              // fish
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fish.mp3"), "fi", mark("sh"), " ", phonetics("/fɪʃ/")],
              }),
              // wash
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/wash.mp3"), "wa", mark("sh"), " ", phonetics("/wɑːʃ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/tʃ.mp3"), phonetics("/tʃ/")],
              }),
              // arch
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/arch.mp3"), "ar", mark("ch"), " ", phonetics("/ɑːrtʃ/")],
              }),
              // chair
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chair.mp3"), mark("ch"), "air ", phonetics("/tʃer/")],
              }),
              // kitchen
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/k/kitchen.mp3"), "ki", mark("tch"), "en ", phonetics("/ˈkɪtʃ.ən/")],
              }),
              // teach
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/teach.mp3"), "tea", mark("ch"), " ", phonetics("/tiːtʃ/")],
              }),
              // watch
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/watch.mp3"), "wa", mark("ch"), " ", phonetics("/wɑːtʃ/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /ʃ/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/ʃ.mp3"), phonetics("/ʃ/")],
              }),
              // brochure
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/brochure.mp3"), "bro", mark("ch"), "ure", " ", phonetics("/broʊˈʃʊr/")],
              }),
              // chef
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chef.mp3"), mark("ch"), "ef", " ", phonetics("/ʃef/")],
              }),
              // machine
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/m/machine.mp3"), "ma", mark("ch"), "ine", " ", phonetics("/məˈʃiːn/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /k/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/k.mp3"), phonetics("/k/")],
              }),
              // architect
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/architect.mp3"),
                  "ar",
                  mark("ch"),
                  "itect ",
                  phonetics("/ˈɑːr.kə.tekt/"),
                ],
              }),
              // chemistry
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chemistry.mp3"), mark("ch"), "emistry ", phonetics("/ˈkem.ə.stri/")],
              }),
              // chorus
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/chorus.mp3"), mark("ch"), "orus ", phonetics("/ˈkɔːr.əs/")],
              }),
              // technology
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/technology.mp3"),
                  "te",
                  mark("ch"),
                  "nology ",
                  phonetics("/tekˈnɑː.lə.dʒi/"),
                ],
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
              ...content({
                icons: ["attention"],
                parts: [bold("t' silent in"), " ", phonetics("/nt/")],
              }),
            ]}
          />
          {/* center or. cen(t)er */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/c/center.mp3"), "center"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/cen(t)er.mp3"), "cen(t)er"],
                },
              }),
            ]}
          />
          {/* dentist or. den(t)ist */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/d/dentist.mp3"), "dentist"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/d/den(t)ist.mp3"), "den(t)ist"],
                },
              }),
            ]}
          />
          {/* identify or. iden(t)ify */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/i/identify.mp3"), "identify"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/iden(t)ify.mp3"), "iden(t)ify"],
                },
              }),
            ]}
          />
          {/* identity or. iden(t)ity */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/i/identity.mp3"), "identity"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/iden(t)ity.mp3"), "iden(t)ity"],
                },
              }),
            ]}
          />
          {/* international or. international */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/i/international.mp3"), "international"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/in(t)ernational.mp3"), "in(t)ernational"],
                },
              }),
            ]}
          />
          {/* intervention or. intervention */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/i/intervention.mp3"), "intervention"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/in(t)ervention.mp3"), "in(t)ervention"],
                },
              }),
            ]}
          />
          {/* interrupt or. interrupt */}
          <Phonetics
            value={[
              ...wordVariant({
                left: {
                  parts: [audio("/assets/audio/dictionary/i/interrupt.mp3"), "interrupt"],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/in(t)errupt.mp3"), "in(t)errupt"],
                },
              }),
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                icons: ["attention", "us"],
                parts: [bold("Flap 't'")],
              }),
            ]}
          />
          {/* Flap 't' */}
          <Phonetics
            value={[
              // bottom
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/bottom-us.mp3"),
                  "bo",
                  mark("tt"),
                  "om ",
                  phonetics("/ˈbɑː.t̬əm/"),
                  " ",
                  portuguese("fundo, parte de baixo; bunda"),
                ],
              }),
              // butter
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/butter-us.mp3"),
                  "bu",
                  mark("tt"),
                  "er ",
                  phonetics("/ˈbʌt̬.ɚ/"),
                  " ",
                  portuguese("manteiga"),
                ],
              }),
              // party
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/party-us.mp3"),
                  "par",
                  mark("t"),
                  "y ",
                  phonetics("/ˈpɑːr.t̬i/"),
                  " ",
                  portuguese("festa, grupo, partido político"),
                ],
              }),
              // photo
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/p/photo-us.mp3"),
                  "pho",
                  mark("t"),
                  "o ",
                  phonetics("/ˈfoʊ.t̬oʊ/"),
                  " ",
                  portuguese("foto"),
                ],
              }),
              // later
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/l/later-us.mp3"),
                  "la",
                  mark("t"),
                  "er ",
                  phonetics("/ˈleɪ.t̬ɚ/"),
                  " ",
                  portuguese("mais tarde (tempo)"),
                ],
              }),
              // water
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/w/water-us.mp3"),
                  "wa",
                  mark("t"),
                  "er ",
                  phonetics("/ˈwɔː.t̬ər/"),
                  " ",
                  portuguese("água"),
                ],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),
              // by
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/by-bye.mp3"), "b", mark("y"), " ", phonetics("/baɪ/")],
              }),
              // fly
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/f/fly.mp3"), "fl", mark("y"), " ", phonetics("/flaɪ/")],
              }),
              // type
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/t/type.mp3"), "t", mark("y"), "pe ", phonetics("/taɪp/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /i/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/i/")],
              }),
              // angry
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/a/angry.mp3"), "angr", mark("y"), " ", phonetics("/ˈæŋ.ɡri/")],
              }),
              // crazy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/c/crazy.mp3"), "craz", mark("y"), " ", phonetics("/ˈkreɪ.zi/")],
              }),
              // hungry
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/h/hungry.mp3"), "hungr", mark("y"), " ", phonetics("/ˈhʌŋ.ɡri/")],
              }),
              // odyssey
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/o/odyssey.mp3"), "odysse", mark("y"), " ", phonetics("/ˈɑː.dɪ.si/")],
              }),
              // salty
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/salty.mp3"), "salt", mark("y"), " ", phonetics("/ˈsɑːl.t̬i/")],
              }),
              // sleepy
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/s/sleepy.mp3"), "sleep", mark("y"), " ", phonetics("/ˈsliː.pi/")],
              }),
            ]}
          />
          <LineBreak />

          {/* /j/ */}
          <Phonetics
            value={[
              ...wordRowList({
                parts: [audio("/assets/audio/pronunciation/phonetics/consonants/j.mp3"), phonetics("/j/")],
              }),
              // yes
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/yes.mp3"), mark("y"), "es ", phonetics("/jes/")],
              }),
              // year
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/year.mp3"), mark("y"), "ear ", phonetics("/jɪr/")],
              }),
              // yellow
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/yellow.mp3"), mark("y"), "ellow ", phonetics("/ˈjel.oʊ/")],
              }),
              // yesterday
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/y/yesterday.mp3"), mark("y"), "esterday ", phonetics("/ˈjes.tɚ.deɪ/")],
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
                parts: [audio("/assets/audio/pronunciation/phonetics/diphthongs/aɪ.mp3"), phonetics("/aɪ/")],
              }),
              // bye
              ...wordRowList({
                parts: [audio("/assets/audio/dictionary/b/by-bye.mp3"), "b", mark("ye"), " ", phonetics("/baɪ/")],
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
                  parts: [audio("/assets/audio/pronunciation/phonetics/vowels/æ.mp3"), phonetics("/æ/")],
                },
                right: {
                  parts: [audio("/assets/audio/pronunciation/phonetics/vowels/e.mp3"), phonetics("/e/")],
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
                  parts: [audio("/assets/audio/dictionary/a/and.mp3"),
                    "a",
                    mark("nd"),
                    " ",
                    phonetics("/ænd/"),
                    " ",
                    portuguese("e"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/e/end.mp3"),
                    "e",
                    mark("nd"),
                    " ",
                    phonetics("/end/"),
                    " ",
                    portuguese("fim; acabar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/b/bread-and-butter.mp3"), "Bread and butter. ", portuguese("Pão e manteiga.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/this-is-the-end.mp3"), "This is the end. ", portuguese("Isso é o fim.")],
              }),
            ]}
          />
          <LineBreak />

          {/* bad vs. bed */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/b/bad.mp3"),
                    "b",
                    mark("a"),
                    "d ",
                    phonetics("/bæd/"),
                    " ",
                    portuguese("ruim; péssimo"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/b/bed.mp3"),
                    "b",
                    mark("e"),
                    "d ",
                    phonetics("/bed/"),
                    " ",
                    portuguese("cama"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-had-a-bad-day.mp3"),
                  "I had a bad day. ",
                  portuguese("Eu tive um péssimo dia."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/s/she-went-to-bed-early.mp3"),
                  "She went to bed early. ",
                  portuguese("Ela foi para a cama cedo."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* bat vs. bet */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/b/bat.mp3"),
                    "b",
                    mark("a"),
                    "t ",
                    phonetics("/bæt/"),
                    " ",
                    portuguese("morcego; taco"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/b/bet.mp3"),
                    "b",
                    mark("e"),
                    "t ",
                    phonetics("/bet/"),
                    " ",
                    portuguese("apostar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/h/he-hit-the-ball-with-a-bat.mp3"),
                  "He hit the ball with a bat. ",
                  portuguese("Ele acertou a bola com um bastão."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-bet-you-were-right.mp3"),
                  "I bet you were right. ",
                  portuguese("Aposto que você estava certo."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* dad vs. dead */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/d/dad.mp3"),
                    "d",
                    mark("a"),
                    "d ",
                    phonetics("/dæd/"),
                    " ",
                    portuguese("pai"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/d/dead.mp3"),
                    "d",
                    mark("ea"),
                    "d ",
                    phonetics("/ded/"),
                    " ",
                    portuguese("morto(a)"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/m/my-dad-is-cool.mp3"), "My dad is cool. ", portuguese("Meu pai é legal.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-plant-is-dead.mp3"),
                  "The plant is dead. ",
                  portuguese("A planta está morta."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* had vs. head */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/h/had.mp3"),
                    "h",
                    mark("a"),
                    "d ",
                    phonetics("/hæd/"),
                    " ",
                    portuguese("teve; tinha"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/h/head.mp3"),
                    "h",
                    mark("ea"),
                    "d ",
                    phonetics("/hed/"),
                    " ",
                    portuguese("cabeça"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/j/john-had-a-good-time.mp3"),
                  "John had a good time. ",
                  portuguese("John se divertiu."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/h/he-hit-his-head.mp3"), "He hit his head. ", portuguese("Ele bateu a cabeça.")],
              }),
            ]}
          />
          <LineBreak />

          {/* man vs. men */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/m/man.mp3"),
                    "m",
                    mark("a"),
                    "n ",
                    phonetics("/mæn/"),
                    " ",
                    portuguese("homem"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/m/men.mp3"),
                    "m",
                    mark("e"),
                    "n ",
                    phonetics("/men/"),
                    " ",
                    portuguese("homens"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-man-is-here.mp3"), "The man is here. ", portuguese("O homem está aqui.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-men-are-here.mp3"),
                  "The men are here. ",
                  portuguese("Os homens estão aqui."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* pan vs. pen */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/p/pan.mp3"),
                    "p",
                    mark("a"),
                    "n ",
                    phonetics("/pæn/"),
                    " ",
                    portuguese("panela"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/p/pen.mp3"),
                    "p",
                    mark("e"),
                    "n ",
                    phonetics("/pen/"),
                    " ",
                    portuguese("caneta"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/p/put-the-eggs-in-the-pan.mp3"),
                  "Put the eggs in the pan. ",
                  portuguese("Coloque os ovos na panela."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/y/you-can-use-this-pen.mp3"),
                  "You can use this pen. ",
                  portuguese("Você pode usar esta caneta."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* shad vs. shed */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/shad.mp3"),
                    "sh",
                    mark("a"),
                    "d ",
                    phonetics("/ʃæd/"),
                    " ",
                    portuguese("peixe (tipo de arenque)"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/s/shed.mp3"),
                    "sh",
                    mark("e"),
                    "d ",
                    phonetics("/ʃed/"),
                    " ",
                    portuguese("derramar; galpão"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-fisherman-caught-a-shad.mp3"),
                  "The fisherman caught a shad. ",
                  portuguese("O pescador pegou um peixe shad."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/c/cats-shed-their-fur-every-day.mp3"),
                  "Cats shed their fur every day. ",
                  portuguese("Gatos soltam pelos todos os dias."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* tan vs. ten */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/tan.mp3"),
                    "t",
                    mark("a"),
                    "n ",
                    phonetics("/tæn/"),
                    " ",
                    portuguese("bronzeado; bronzear"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/t/ten.mp3"),
                    "t",
                    mark("e"),
                    "n ",
                    phonetics("/ten/"),
                    " ",
                    portuguese("dez"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/s/she-got-a-tan-at-the-beach.mp3"),
                  "She got a tan at the beach. ",
                  portuguese("Ela ficou bronzeada na praia."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-got-ten-out-of-ten-on-the-test.mp3"),
                  "I got ten out of ten on the test. ",
                  portuguese("Eu tirei nota máxima na prova."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* than vs. then */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/than.mp3"),
                    "th",
                    mark("a"),
                    "n ",
                    phonetics("/ðæn/"),
                    " ",
                    portuguese("do que"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/t/then.mp3"),
                    "th",
                    mark("e"),
                    "n ",
                    phonetics("/ðen/"),
                    " ",
                    portuguese("então; depois"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/s/she-is-taller-than-me.mp3"),
                  "She is taller than me. ",
                  portuguese("Ela é mais alta do que eu."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/f/finish-your-work-then-you-can-rest.mp3"),
                  "Finish your work, then you can rest. ",
                  portuguese(
                    "Termine seu trabalho, depois você pode descansar.",
                  ),
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
                  parts: [audio("/assets/audio/pronunciation/phonetics/vowels/i.mp3"), phonetics("/iː/")],
                },
                right: {
                  parts: [audio("/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3"), phonetics("/ɪ/")],
                },
              }),
            ]}
          />
          <LineBreak />

          {/* eat vs. it */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/e/eat.mp3"),
                    mark("ea"),
                    "t ",
                    phonetics("/iːt/"),
                    " ",
                    portuguese("comer"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/i/it.mp3"),
                    mark("i"),
                    "t ",
                    phonetics("/ɪt/"),
                    " ",
                    portuguese("isso; ele/ela (coisa)"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-dont-usually-eat-breakfast.mp3"),
                  "I don’t usually eat breakfast. ",
                  portuguese("Normalmente eu não tomo café da manhã."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/it-is-very-cold-today.mp3"),
                  "It is very cold today. ",
                  portuguese("Está muito frio hoje."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* feel vs. fill */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/f/feel.mp3"),
                    "f",
                    mark("ee"),
                    "l ",
                    phonetics("/fiːl/"),
                    " ",
                    portuguese("sentir"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/f/fill.mp3"),
                    "f",
                    mark("i"),
                    "ll ",
                    phonetics("/fɪl/"),
                    " ",
                    portuguese("encher; preencher"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-feel-tired.mp3"), "I feel tired. ", portuguese("Eu me sinto cansado.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/f/fill-the-glass-please.mp3"),
                  "Fill the glass, please. ",
                  portuguese("Encha o copo, por favor."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* leave vs. live */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/l/leave.mp3"),
                    "l",
                    mark("ea"),
                    "ve ",
                    phonetics("/liːv/"),
                    " ",
                    portuguese("sair; partir"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/l/live1.mp3"),
                    "l",
                    mark("i"),
                    "ve ",
                    phonetics("/lɪv/"),
                    " ",
                    portuguese("viver"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-leave-at-six.mp3"), "I leave at six. ", portuguese("Eu saio às seis.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-live-here.mp3"), "I live here. ", portuguese("Eu moro aqui.")],
              }),
            ]}
          />
          <LineBreak />

          {/* sheep vs. ship */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/sheep.mp3"),
                    "sh",
                    mark("ee"),
                    "p ",
                    phonetics("/ʃiːp/"),
                    " ",
                    portuguese("ovelha"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/s/ship.mp3"),
                    "sh",
                    mark("i"),
                    "p ",
                    phonetics("/ʃɪp/"),
                    " ",
                    portuguese("navio"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-saw-a-sheep-on-the-farm.mp3"),
                  "I saw a sheep on the farm. ",
                  portuguese("Eu vi uma ovelha na fazenda."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/this-ship-is-huge.mp3"),
                  "This ship is huge. ",
                  portuguese("Este navio é enorme."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* sleep vs. slip */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/sleep.mp3"),
                    "sl",
                    mark("ee"),
                    "p ",
                    phonetics("/sliːp/"),
                    " ",
                    portuguese("dormir"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/s/slip.mp3"),
                    "sl",
                    mark("i"),
                    "p ",
                    phonetics("/slɪp/"),
                    " ",
                    portuguese("escorregar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />
          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-need-to-sleep.mp3"), "I need to sleep. ", portuguese("Eu preciso dormir.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/b/becareful-not-to-slip.mp3"),
                  "Be careful not to slip. ",
                  portuguese("Cuidado para não escorregar."),
                ],
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
              audio("/assets/audio/pronunciation/phonetics/consonants/n.mp3"),
              "'n': ",
              phonetics("/n/"),
              " ",
              connector("vs."),
              " ",
              audio("/assets/audio/pronunciation/phonetics/consonants/ŋ.mp3"),
              "'ng': ",
              phonetics("/ŋ/"),
            ]}
          />

          {/* sin vs. sing */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/sin.mp3"),
                    "si",
                    mark("n"),
                    " ",
                    phonetics("/sɪn/"),
                    " ",
                    portuguese("pecado"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/s/sing.mp3"),
                    "si",
                    mark("ng"),
                    " ",
                    phonetics("/sɪŋ/"),
                    " ",
                    portuguese("cantar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/h/he-confessed-his-sins.mp3"),
                  "He confessed his sins. ",
                  portuguese("Ele confessou seu pecado."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/s/she-loves-to-sing-in-the-shower.mp3"),
                  "She loves to sing in the shower. ",
                  portuguese("Ela adora cantar no chuveiro."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* thin vs. thing */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/thin.mp3"),
                    "thi",
                    mark("n"),
                    " ",
                    phonetics("/θɪn/"),
                    " ",
                    portuguese("fino"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/t/thing.mp3"),
                    "thi",
                    mark("ng"),
                    " ",
                    phonetics("/θɪŋ/"),
                    " ",
                    portuguese("coisa"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-ice-is-thin.mp3"), "The ice is thin. ", portuguese("O gelo está fino.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/this-thing-is-important.mp3"),
                  "This thing is important. ",
                  portuguese("Esta coisa é importante."),
                ],
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
          {/* fool vs. full */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/f/fool.mp3"),
                    "f",
                    mark("oo"),
                    "l",
                    " ",
                    phonetics("/fuːl/"),
                    " ",
                    portuguese("tolo"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/f/full.mp3"),
                    "f",
                    mark("u"),
                    "ll",
                    " ",
                    phonetics("/fʊl/"),
                    " ",
                    portuguese("cheio"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/d/dont-be-a-fool.mp3"), "Don’t be a fool. ", portuguese("Não seja um tolo.")],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-glass-is-full.mp3"),
                  "The glass is full. ",
                  portuguese("O copo está cheio."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* pool vs. pull */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/p/pool.mp3"),
                    "p",
                    mark("oo"),
                    "l",
                    " ",
                    phonetics("/puːl/"),
                    " ",
                    portuguese("piscina"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/p/pull.mp3"),
                    "p",
                    mark("u"),
                    "ll",
                    " ",
                    phonetics("/pʊl/"),
                    " ",
                    portuguese("puxar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/they-are-swimming-in-the-pool.mp3"),
                  "They are swimming in the pool. ",
                  portuguese("Eles estão nadando na piscina."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/p/pull-the-door.mp3"), "Pull the door. ", portuguese("Puxe a porta.")],
              }),
            ]}
          />
          <LineBreak />

          {/* suit vs. soot */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/suit.mp3"),
                    "s",
                    mark("ui"),
                    "t",
                    " ",
                    phonetics("/suːt/"),
                    " ",
                    portuguese("terno"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/s/soot.mp3"),
                    "s",
                    mark("oo"),
                    "t",
                    " ",
                    phonetics("/sʊt/"),
                    " ",
                    portuguese("fuligem"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/h/he-is-wearing-a-suit.mp3"),
                  "He is wearing a suit. ",
                  portuguese("Ele está usando um terno."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-chimney-was-covered-in-soot.mp3"),
                  "The chimney was covered in soot. ",
                  portuguese("A chaminé estava coberta de fuligem."),
                ],
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
          {/* wash vs. watch */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/w/wash.mp3"),
                    "wa",
                    mark("sh"),
                    " ",
                    phonetics("/wɑːʃ/"),
                    " ",
                    portuguese("lavar"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/w/watch.mp3"),
                    "wa",
                    mark("tch"),
                    " ",
                    phonetics("/wɑːtʃ/"),
                    " ",
                    portuguese("relógio (pulso); assistir"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/d/dont-forget-to-wash-your-hands.mp3"),
                  "Don’t forget to wash your hands. ",
                  portuguese("Não se esqueça de lavar as suas mãos."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/i/i-usually-watch-tv-at-night.mp3"),
                  "I usually watch TV at night. ",
                  portuguese("Eu assisto TV à noite."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* ship vs. chip */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/ship.mp3"),
                    mark("sh"),
                    "ip",
                    " ",
                    phonetics("/ʃɪp/"),
                    " ",
                    portuguese("navio"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/chip.mp3"),
                    mark("ch"),
                    "ip",
                    " ",
                    phonetics("/tʃɪp/"),
                    " ",
                    portuguese("batata frita"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-ship-is-really-big.mp3"),
                  "The ship is really big. ",
                  portuguese("O navio é grande."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/s/she-ate-a-chip.mp3"),
                  "She ate a chip. ",
                  portuguese("Ela comeu uma batata frita."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* sheep vs. cheap */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/s/sheep.mp3"),
                    mark("sh"),
                    "eep",
                    " ",
                    phonetics("/ʃiːp/"),
                    " ",
                    portuguese("ovelha"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/cheap.mp3"),
                    mark("ch"),
                    "eap",
                    " ",
                    phonetics("/tʃiːp/"),
                    " ",
                    portuguese("barato"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-sheep-are-in-the-field.mp3"),
                  "The sheep are in the field. ",
                  portuguese("As ovelhas estão no campo."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/this-shirt-is-cheap.mp3"),
                  "This shirt is cheap. ",
                  portuguese("Esta camisa é barata."),
                ],
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
          {/* tick vs. chick */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/tick.mp3"),
                    mark("t"),
                    "ick",
                    " ",
                    phonetics("/tɪk/"),
                    " ",
                    portuguese("tique; marcação"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/chick.mp3"),
                    mark("ch"),
                    "ick",
                    " ",
                    phonetics("/tʃɪk/"),
                    " ",
                    portuguese("pintinho; garota (gíria)"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-clock-ticks-every-second.mp3"),
                  "The clock ticks every second. ",
                  portuguese("O relógio marca cada segundo."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/t/the-chick-is-small.mp3"),
                  "The chick is small. ",
                  portuguese("O pintinho é pequeno."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* tin vs. chin */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/tin.mp3"),
                    mark("t"),
                    "in",
                    " ",
                    phonetics("/tɪn/"),
                    " ",
                    portuguese("estanho"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/chin.mp3"),
                    mark("ch"),
                    "in",
                    " ",
                    phonetics("/tʃɪn/"),
                    " ",
                    portuguese("queixo"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/t/the-box-is-made-of-tin.mp3"),
                  "The box is made of tin. ",
                  portuguese("A caixa é feita de estanho."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/h/he-touched-his-chin.mp3"),
                  "He touched his chin. ",
                  portuguese("Ele tocou o queixo."),
                ],
              }),
            ]}
          />
          <LineBreak />

          {/* to vs. chew */}
          <Phonetics
            value={[
              ...wordComparison({
                left: {
                  parts: [audio("/assets/audio/dictionary/t/to.mp3"),
                    mark("t"),
                    "o",
                    " ",
                    phonetics("/tuː/"),
                    " ",
                    portuguese("para"),
                  ],
                },
                right: {
                  parts: [audio("/assets/audio/dictionary/c/chew.mp3"),
                    mark("ch"),
                    "ew",
                    " ",
                    phonetics("/tʃuː/"),
                    " ",
                    portuguese("mastigar"),
                  ],
                },
              }),
            ]}
          />
          <LineBreak />

          <Examples
            items={[
              content({
                parts: [audio("/assets/audio/dictionary/i/i-want-to-go-home.mp3"),
                  "I want to go home. ",
                  portuguese("Eu quero ir para casa."),
                ],
              }),
              content({
                parts: [audio("/assets/audio/dictionary/c/chew-your-food-slowly.mp3"),
                  "Chew your food slowly. ",
                  portuguese("Mastigue sua comida devagar."),
                ],
              }),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
