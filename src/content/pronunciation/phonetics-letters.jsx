import styles from "./phonetics.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Card } from "@/components/atoms/Card";
import { Comparison } from "@/components/molecules/Comparison/";
import { Example } from "@/components/molecules/Example/";
import { InlineText } from "@/components/molecules/InlineText";
import { List } from "@/components/molecules/List";

export default function PhoneticsLetters() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Phonetics + Letters" />
      <div className="line-break">
        <Contents
          items={[
            { href: "vowels", label: "Vowels" },
            { href: "diphthongs", label: "Diphthongs" },
            { href: "consonants", label: "Consonants" },
            {
              href: "rhotic-vowels-r",
              label: "Rhotic (Vowels + R)",
              phonetics: "/i/",
            },
            { href: "letter-a", label: "Letters 'a'" },
            {
              href: "letter e",
              label:
                "Letters 'e', 'ea', 'ee', 'ei', 'eo', 'ey', 'i', 'ie', 'y'",
            },
            { href: "letters-a-e", label: "Letters 'a' /æ/ vs. 'e(a)' /e/" },
            {
              href: "letters-ea-ee-i",
              label: "Letters 'ea', 'ee' /iː/ vs. 'i' /ɪ/",
            },
          ]}
        />
        <InlineText
          text={[
            {
              audio: "/assets/audio/phonetics/check-out.mp3",
              part: "Check out the phonetic sounds of American English plus British variants.",
              type: "bold",
            },
          ]}
        />
        <Section id="vowels" label="Vowels" heading={3}>
          <List
            bullet={false}
            items={[
              // æ
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/æ.mp3",
                    part: "/æ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/answer.mp3",
                  },
                  "answer ",
                  {
                    audio: "/assets/audio/general/ask.mp3",
                  },
                  "ask ",
                  {
                    audio: "/assets/audio/general/cat.mp3",
                  },
                  "cat ",
                  {
                    audio: "/assets/audio/general/cant.mp3",
                  },
                  "can’t ",
                  {
                    audio: "/assets/audio/general/dance.mp3",
                  },
                  "dance ",
                  {
                    audio: "/assets/audio/general/fat.mp3",
                  },
                  "fat ",
                  {
                    audio: "/assets/audio/general/fast.mp3",
                  },
                  "fast ",
                  {
                    audio: "/assets/audio/general/man.mp3",
                  },
                  "man",
                ],
              },
              // UK ɑ
              {
                text: [
                  {
                    ukFlag: true,
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
                    part: "/ɑː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(long)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                lineBreak: true,
              },
              // e
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/e.mp3",
                    part: "/e/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/bed.mp3",
                  },
                  "bed ",
                  {
                    audio: "/assets/audio/general/head.mp3",
                  },
                  "head ",
                  {
                    audio: "/assets/audio/general/red.mp3",
                  },
                  "red",
                ],
              },
              // ɪ
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɪ.mp3",
                    part: "/ɪ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/busy.mp3",
                  },
                  "busy ",
                  {
                    audio: "/assets/audio/general/English.mp3",
                  },
                  "English ",
                  {
                    audio: "/assets/audio/general/it.mp3",
                  },
                  "it",
                ],
              },
              // i
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/i.mp3",
                    part: "/iː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(long)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/eat.mp3",
                  },
                  "eat ",
                  {
                    audio: "/assets/audio/general/key.mp3",
                  },
                  "key ",
                  {
                    audio: "/assets/audio/general/see.mp3",
                  },
                  "see",
                ],
                lineBreak: true,
              },
              // ə-ʌ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3",
                    part: "/ə/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(schwa) ",
                  },
                  " ",
                  {
                    part: "unstressed",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/about.mp3",
                  },
                  "about ",
                  {
                    audio: "/assets/audio/general/above.mp3",
                  },
                  "above ",
                  {
                    audio: "/assets/audio/general/cinema.mp3",
                  },
                  "cinema ",
                  {
                    audio: "/assets/audio/general/the.mp3",
                  },
                  "the",
                ],
              },
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3",
                    part: "/ʌ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "stressed",
                    type: "italic",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/but.mp3",
                  },
                  "but ",
                  {
                    audio: "/assets/audio/general/son-sun.mp3",
                  },
                  "son / sun ",
                  {
                    audio: "/assets/audio/general/under.mp3",
                  },
                  "under",
                ],
              },
              {
                text: [
                  {
                    important: true,
                  },
                  "In Americann English, ",
                  {
                    part: "/ə/",
                    type: "phonetics",
                  },
                  " and ",
                  {
                    part: "/ʌ/ ",
                    type: "phonetics",
                  },
                  "are not distinguished, but they are in British English.",
                ],
              },
              {
                text: [
                  {
                    ukFlag: true,
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ʌ.mp3",
                    part: "/ʌ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/but-uk.mp3",
                  },
                  "but ",
                  {
                    audio: "/assets/audio/general/son-sun-uk.mp3",
                  },
                  "son / sun ",
                  {
                    audio: "/assets/audio/general/under-uk.mp3",
                  },
                  "under",
                ],
                lineBreak: true,
              },
              // ɑː
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɑ.mp3",
                    part: "/ɑː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(long)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/calm.mp3",
                  },
                  "calm ",
                  {
                    audio: "/assets/audio/general/father.mp3",
                  },
                  "father ",
                  {
                    audio: "/assets/audio/general/palm.mp3",
                  },
                  "palm ",
                  {
                    audio: "/assets/audio/general/spa.mp3",
                  },
                  "spa ",
                ],
                lineBreak: true,
              },
              // ɔː
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɔ.mp3",
                    part: "/ɔː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/dog.mp3",
                  },
                  "dog ",
                  {
                    audio: "/assets/audio/general/frog.mp3",
                  },
                  "frog ",
                  {
                    audio: "/assets/audio/general/hot.mp3",
                  },
                  "hot ",
                  {
                    audio: "/assets/audio/general/job.mp3",
                  },
                  "job ",
                  {
                    audio: "/assets/audio/general/law.mp3",
                  },
                  "law ",
                  {
                    audio: "/assets/audio/general/lot.mp3",
                  },
                  "lot ",
                  {
                    audio: "/assets/audio/general/not.mp3",
                  },
                  "not ",
                  {
                    audio: "/assets/audio/general/rob.mp3",
                  },
                  "rob ",
                  {
                    audio: "/assets/audio/general/rock.mp3",
                  },
                  "rock ",
                  {
                    audio: "/assets/audio/general/raw.mp3",
                  },
                  "raw ",
                  {
                    audio: "/assets/audio/general/top.mp3",
                  },
                  "top ",
                  {
                    audio: "/assets/audio/general/thought.mp3",
                  },
                  "thought ",
                ],
              },
              {
                text: [
                  {
                    important: true,
                    part: "(In some regions it’s pronounced ",
                  },
                  {
                    part: "/ɑː/ ",
                    type: "phonetics",
                  },
                  {
                    part: ")",
                  },
                ],
              },
              // UK ɒ
              {
                text: [
                  {
                    ukFlag: true,
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ɒ.mp3",
                    part: "/ɒ/ ",
                    type: "phonetics",
                  },
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/dog-uk.mp3",
                  },
                  "dog ",
                  {
                    audio: "/assets/audio/general/frog-uk.mp3",
                  },
                  "frog ",
                  {
                    audio: "/assets/audio/general/hot-uk.mp3",
                  },
                  "hot ",
                  {
                    audio: "/assets/audio/general/lot-uk.mp3",
                  },
                  "lot ",
                  {
                    audio: "/assets/audio/general/rob-uk.mp3",
                  },
                  "rob",
                ],
                lineBreak: true,
              },
              // ʊ
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/ʊ.mp3",
                    part: "/ʊ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(short)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/book.mp3",
                  },
                  "book ",
                  {
                    audio: "/assets/audio/general/good.mp3",
                  },
                  "good ",
                  {
                    audio: "/assets/audio/general/wood-would.mp3",
                  },
                  "wood ",
                  {
                    audio: "/assets/audio/general/wood-would.mp3",
                  },
                  "would",
                ],
              },
              // u
              {
                text: [
                  {
                    audio: "/assets/audio/pronunciation/phonetics/vowels/u.mp3",
                    part: "/uː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "(long)",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/blue.mp3",
                  },
                  "blue ",
                  {
                    audio: "/assets/audio/general/food.mp3",
                  },
                  "food ",
                  {
                    audio: "/assets/audio/general/student.mp3",
                  },
                  "student",
                ],
              },
            ]}
          />
        </Section>
        <Section id="diphthongs" label="Diphthongs" heading={3}>
          <List
            bullet={false}
            items={[
              // aɪ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/aɪ.mp3",
                    part: "/aɪ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/buy.mp3",
                  },
                  "buy ",
                  {
                    audio: "/assets/audio/general/my.mp3",
                  },
                  "my ",
                  {
                    audio: "/assets/audio/general/time.mp3",
                  },
                  "time ",
                ],
              },
              // aʊ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/aʊ.mp3",
                    part: "/aʊ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/cow.mp3",
                  },
                  "cow ",
                  {
                    audio: "/assets/audio/general/bow-verb.mp3",
                  },
                  "bow ",
                  {
                    audio: "/assets/audio/general/south.mp3",
                  },
                  "south",
                ],
              },
              // eɪ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/eɪ.mp3",
                    part: "/eɪ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/day.mp3",
                  },
                  "day ",
                  {
                    audio: "/assets/audio/general/make.mp3",
                  },
                  "make ",
                  {
                    audio: "/assets/audio/general/say.mp3",
                  },
                  "say",
                ],
              },
              // ɔɪ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/ɔɪ.mp3",
                    part: "/ɔɪ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/boy.mp3",
                  },
                  "boy ",
                  {
                    audio: "/assets/audio/general/choice.mp3",
                  },
                  "choice ",
                  {
                    audio: "/assets/audio/general/toy.mp3",
                  },
                  "toy",
                ],
              },
              // oʊ
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/oʊ.mp3",
                    part: "/oʊ/",
                    type: "phonetics",
                  },

                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/go.mp3",
                  },
                  "go ",
                  {
                    audio: "/assets/audio/general/show.mp3",
                  },
                  "show ",
                  {
                    audio: "/assets/audio/general/slow.mp3",
                  },
                  "slow",
                ],
              },
              // əʊ
              {
                text: [
                  {
                    ukFlag: true,
                    audio:
                      "/assets/audio/pronunciation/phonetics/vowels/əʊ.mp3",
                    part: "/əʊ/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/go-uk.mp3",
                  },
                  "go ",
                  {
                    audio: "/assets/audio/general/show-uk.mp3",
                  },
                  "show ",
                  {
                    audio: "/assets/audio/general/slow-uk.mp3",
                  },
                  "slow",
                ],
              },
            ]}
          />
        </Section>

        <Section id="consonants" label="Consonants" heading={3}>
          <List
            bullet={false}
            items={[
              // /p/
              {
                text: [
                  {
                    audio:
                      "/assets/audio/pronunciation/phonetics/consonants/p.mp3",
                    part: "/p/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/b.mp3",
                    part: "/b/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/d.mp3",
                    part: "/d/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/k.mp3",
                    part: "/k/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/g.mp3",
                    part: "/g/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/f.mp3",
                    part: "/f/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/v.mp3",
                    part: "/v/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/θ.mp3",
                    part: "/θ/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless dental fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/ð.mp3",
                    part: "/ð/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced dental fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/s.mp3",
                    part: "/s/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/z.mp3",
                    part: "/z/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/ʃ.mp3",
                    part: "/ʃ/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3",
                    part: "/ʒ/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiced fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/h.mp3",
                    part: "/h/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless glottal fricative)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/m.mp3",
                    part: "/m/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(nasal)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/n.mp3",
                    part: "/n/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(nasal)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/ŋ.mp3",
                    part: "/ŋ/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(nasal)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/l.mp3",
                    part: "/l/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(lateral approximant)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/r.mp3",
                    part: "/r/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(approximant)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/t.mp3",
                    part: "/t/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(voiceless plosive)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/j.mp3",
                    part: "/j/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(approximant)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
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
                      "/assets/audio/pronunciation/phonetics/consonants/w.mp3",
                    part: "/w/",
                    type: "phonetics",
                  },
                  " ",
                  { part: "(approximant)" },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  { audio: "/assets/audio/general/we.mp3" },
                  "we ",
                  { audio: "/assets/audio/general/quick.mp3" },
                  "quick",
                ],
              },
            ]}
          />
        </Section>
        <Section id="rhotic-vowels-r" label="Rhotic (Vowels + R)" heading={3}>
          <List
            bullet={false}
            items={[
              // ɑr
              {
                text: [
                  {
                    part: "/ɑːr/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/car.mp3",
                  },
                  "car ",
                  {
                    audio: "/assets/audio/general/far.mp3",
                  },
                  "far ",
                  {
                    audio: "/assets/audio/general/heart.mp3",
                  },
                  "heart ",
                  {
                    audio: "/assets/audio/general/start.mp3",
                  },
                  "start ",
                ],
              },
              // ɑː
              {
                text: [
                  {
                    ukFlag: true,
                    part: "/ɑː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/car-uk.mp3",
                  },
                  "car ",
                  {
                    audio: "/assets/audio/general/far-uk.mp3",
                  },
                  "far ",
                  {
                    audio: "/assets/audio/general/heart-uk.mp3",
                  },
                  "heart ",
                  {
                    audio: "/assets/audio/general/start-uk.mp3",
                  },
                  "start ",
                ],
                lineBreak: true,
              },
              // ɑɪr
              {
                text: [
                  {
                    part: "/ɑɪr/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/choir.mp3",
                  },
                  "choir ",
                  {
                    audio: "/assets/audio/general/fire.mp3",
                  },
                  "fire ",
                  {
                    audio: "/assets/audio/general/inspire.mp3",
                  },
                  "inspire ",
                  {
                    audio: "/assets/audio/general/liar.mp3",
                  },
                  "liar ",
                ],
              },
              // ɑɪə
              {
                text: [
                  {
                    ukFlag: true,
                    part: "/ɑɪə/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/choir-uk.mp3",
                  },
                  "choir ",
                  {
                    audio: "/assets/audio/general/fire-uk.mp3",
                  },
                  "fire ",
                  {
                    audio: "/assets/audio/general/inspire-uk.mp3",
                  },
                  "inspire ",
                  {
                    audio: "/assets/audio/general/liar-uk.mp3",
                  },
                  "liar ",
                ],
                lineBreak: true,
              },
              // er
              {
                text: [
                  {
                    part: "/er/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/air.mp3",
                  },
                  "air ",
                  {
                    audio: "/assets/audio/general/hair.mp3",
                  },
                  "hair ",
                  {
                    audio: "/assets/audio/general/pair.mp3",
                  },
                  "pair ",
                  {
                    audio: "/assets/audio/general/where.mp3",
                  },
                  "where ",
                ],
              },
              // eə
              {
                text: [
                  {
                    ukFlag: true,
                    part: "/eə/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/air-uk.mp3",
                  },
                  "air ",
                  {
                    audio: "/assets/audio/general/hair-uk.mp3",
                  },
                  "hair ",
                  {
                    audio: "/assets/audio/general/pair-uk.mp3",
                  },
                  "pair ",
                  {
                    audio: "/assets/audio/general/where-uk.mp3",
                  },
                  "where ",
                ],
                lineBreak: true,
              },
              // ɪr
              // ɝ
              {
                text: [
                  {
                    part: "/ɝː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/bird.mp3",
                  },
                  "bird ",
                  {
                    audio: "/assets/audio/general/learn.mp3",
                  },
                  "learn ",
                  {
                    audio: "/assets/audio/general/were.mp3",
                  },
                  "were ",
                  {
                    audio: "/assets/audio/general/word.mp3",
                  },
                  "word ",
                  {
                    audio: "/assets/audio/general/world.mp3",
                  },
                  "world ",
                  {
                    audio: "/assets/audio/general/work.mp3",
                  },
                  "work",
                ],
              },
              // ɜ
              {
                text: [
                  {
                    ukFlag: true,
                    part: "/ɜː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/bird-uk.mp3",
                  },
                  "bird ",
                  {
                    audio: "/assets/audio/general/learn-uk.mp3",
                  },
                  "learn ",
                  {
                    audio: "/assets/audio/general/were-uk.mp3",
                  },
                  "were ",
                  {
                    audio: "/assets/audio/general/word-uk.mp3",
                  },
                  "word ",
                  {
                    audio: "/assets/audio/general/world-uk.mp3",
                  },
                  "world ",
                  {
                    audio: "/assets/audio/general/work-uk.mp3",
                  },
                  "work",
                ],
                lineBreak: true,
              },
              // ɔːr
              {
                text: [
                  {
                    part: "/ɔːr/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/door.mp3",
                  },
                  "door ",
                  {
                    audio: "/assets/audio/general/four.mp3",
                  },
                  "four ",
                  {
                    audio: "/assets/audio/general/north.mp3",
                  },
                  "north ",
                  {
                    audio: "/assets/audio/general/war.mp3",
                  },
                  "war ",
                ],
              },
              // ɔː
              {
                text: [
                  {
                    ukFlag: true,
                    part: "/ɔː/",
                    type: "phonetics",
                  },
                  " ",
                  {
                    part: "•",
                    type: "bold",
                  },
                  " ",
                  {
                    audio: "/assets/audio/general/door-uk.mp3",
                  },
                  "door ",
                  {
                    audio: "/assets/audio/general/four-uk.mp3",
                  },
                  "four ",
                  {
                    audio: "/assets/audio/general/north-uk.mp3",
                  },
                  "north ",
                  {
                    audio: "/assets/audio/general/war-uk.mp3",
                  },
                  "war ",
                ],
              },
            ]}
          />
        </Section>
        <Section
          id="letters-a-e"
          label="Letters 'a' /æ/ vs. 'e' /e/"
          heading={3}
        >
          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/and.mp3",
                      word: "and",
                      phonetics: "/ænd/",
                      portuguese: "e",
                    },
                    {
                      audio: "/assets/audio/general/end.mp3",
                      word: "end",
                      phonetics: "/end/",
                      portuguese: "fim",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/bread-and-butter.mp3",
                  text: ["Bread ", { type: "mark", part: "and" }, " butter."],
                  portuguese: "Pão e manteiga.",
                },
                {
                  audioPlayer: "/assets/audio/general/this-is-the-end.mp3",
                  text: ["This is the ", { type: "mark", part: "end" }, "."],
                  portuguese: "Este é o fim.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/bad.mp3",
                      word: "bad",
                      phonetics: "/bæd/",
                      portuguese: "mal, ruim; péssimo",
                    },
                    {
                      audio: "/assets/audio/general/bed.mp3",
                      word: "bed",
                      phonetics: "/bed/",
                      portuguese: "cama",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/i-had-a-bad-day.mp3",
                  text: [
                    "I had a ",
                    {
                      type: "mark",
                      part: "bad",
                    },
                    " day.",
                  ],
                  portuguese: "Eu tive um dia ruim.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/she-went-to-bed-early.mp3",
                  text: [
                    "She went to ",
                    { type: "mark", part: "bed" },
                    " early.",
                  ],
                  portuguese: "Ela foi para a cama cedo.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/bat.mp3",
                      word: "bat",
                      phonetics: "/bæt/",
                      portuguese: "taco; morcego",
                    },
                    {
                      audio: "/assets/audio/general/bet.mp3",
                      word: "bet",
                      phonetics: "/bet/",
                      portuguese: "apostar; aposta",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/he-hit-the-ball-with-a-bat.mp3",
                  text: [
                    "He hit the ball with a ",
                    { type: "mark", part: "bat" },
                    ".",
                  ],
                  portuguese: "Ele acertou a bola com um bastão.",
                },
                {
                  audioPlayer: "/assets/audio/general/i-bet-you-were-right.mp3",
                  text: [
                    "I ",
                    { type: "mark", part: "bet" },
                    " you are right.",
                  ],
                  portuguese: "Aposto que você está certo.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/dad.mp3",
                      word: "dad",
                      phonetics: "/dæd/",
                      portuguese: "pai",
                    },
                    {
                      audio: "/assets/audio/general/dead.mp3",
                      word: "dead",
                      phonetics: "/ded/",
                      portuguese: "morto(a)",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/my-dad-is-cool.mp3",
                  text: ["My ", { type: "mark", part: "dad" }, " is cool."],
                  portuguese: "Meu pai é gentil.",
                },
                {
                  audioPlayer: "/assets/audio/general/the-plant-is-dead.mp3",
                  text: ["The plant is ", { type: "mark", part: "dead" }, "."],
                  portuguese: "A planta está morta.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/had.mp3",
                      word: "had",
                      phonetics: "/hæd/",
                      portuguese: "teve; tinha",
                    },
                    {
                      audio: "/assets/audio/general/head.mp3",
                      word: "head",
                      phonetics: "/hed/",
                      portuguese: "cabeça",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/john-had-a-good-time.mp3",
                  text: [
                    "John ",
                    { type: "mark", part: "had" },
                    " a good time.",
                  ],
                  portuguese: "John se divertiu.",
                },
                {
                  audioPlayer: "/assets/audio/general/he-hit-his-head.mp3",
                  text: ["He hit his ", { type: "mark", part: "head" }, "."],
                  portuguese: "Ele bateu a cabeça.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/man.mp3",
                      word: "man",
                      phonetics: "/mæn/",
                      portuguese: "homem",
                    },
                    {
                      audio: "/assets/audio/general/men.mp3",
                      word: "men",
                      phonetics: "/men/",
                      portuguese: "homens",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/that-man-is-tall.mp3",
                  text: ["That ", { type: "mark", part: "man" }, " is tall."],
                  portuguese: "O homem é alto.",
                },
                {
                  audioPlayer: "/assets/audio/general/the-men-are-here.mp3",
                  text: ["The ", { type: "mark", part: "men" }, " are here."],
                  portuguese: "Os homens estão aqui.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/pan.mp3",
                      word: "pan",
                      phonetics: "/pæn/",
                      portuguese: "panela",
                    },
                    {
                      audio: "/assets/audio/general/pen.mp3",
                      word: "pen",
                      phonetics: "/pen/",
                      portuguese: "caneta",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/put-the-eggs-in-the-pan.mp3",
                  text: [
                    "Put the eggs in the ",
                    { type: "mark", part: "pan" },
                    ".",
                  ],
                  portuguese: "Coloque os ovos na panela.",
                },
                {
                  audioPlayer: "/assets/audio/general/i-wrote-with-a-pen.mp3",
                  text: ["I wrote with a ", { type: "mark", part: "pen" }, "."],
                  portuguese: "Eu escrevi com uma caneta.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/tan.mp3",
                      word: "tan",
                      phonetics: "/tan/",
                      portuguese: "bronzeado(a); bronzear",
                    },
                    {
                      audio: "/assets/audio/general/ten.mp3",
                      word: "ten",
                      phonetics: "/ten/",
                      portuguese: "dez (número)",
                    },
                  ],
                },
              ]}
            />
            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/she-got-a-tan-at-the-beach.mp3",
                  text: [
                    "She got a ",
                    { type: "mark", part: "tan" },
                    " at the beach.",
                  ],
                  portuguese: "Ela ficou bronzeada na praia.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/i-got-ten-out-of-ten-on-the-test.mp3",
                  text: [
                    "I got ",
                    { type: "mark", part: "ten" },
                    " out of ",
                    { type: "mark", part: "ten" },
                    " on the test.",
                  ],
                  portuguese: "Eu tirei nota máxima na prova.",
                },
              ]}
            />
          </Card>
        </Section>
        <Section
          id="letters-ea-ee-i"
          label="Letters 'ea', 'ee' /iː/ vs. 'i' /ɪ/"
          heading={3}
        >
          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/eat.mp3",
                      word: "eat",
                      phonetics: "/iːt/",
                      portuguese: "comer",
                    },
                    {
                      audio: "/assets/audio/general/it.mp3",
                      word: "it",
                      phonetics: "/ɪt/",
                      portuguese: "isso / ele / ela (neutro)",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/i-dont-usually-eat-breakfast.mp3",
                  text: [
                    "I dont’t usually ",
                    { type: "mark", part: "eat" },
                    " breakfast.",
                  ],
                  portuguese: "Normalmente eu não tomo café da manhã.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/it-is-very-cold-today.mp3",
                  text: [
                    "",
                    { type: "mark", part: "It" },
                    " is very cold today.",
                  ],
                  portuguese: "Está muito frio hoje.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/feel.mp3",
                      word: "feel",
                      phonetics: "/fiːl/",
                      portuguese: "sentir",
                    },
                    {
                      audio: "/assets/audio/general/fill.mp3",
                      word: "fill",
                      phonetics: "/fɪl/",
                      portuguese: "encher",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/i-feel-tired.mp3",
                  text: ["I ", { type: "mark", part: "feel" }, " tired."],
                  portuguese: "Eu me sinto cansado.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/fill-the-glass-please.mp3",
                  text: [
                    "",
                    { type: "mark", part: "Fill" },
                    " the glass, please.",
                  ],
                  portuguese: "Encha o copo, por favor.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/heel.mp3",
                      word: "heel",
                      phonetics: "/hiːl/",
                      portuguese: "calcanhar",
                    },
                    {
                      audio: "/assets/audio/general/hill.mp3",
                      word: "hill",
                      phonetics: "/hɪl/",
                      portuguese: "colina",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/my-heel-hurts.mp3",
                  text: ["My ", { type: "mark", part: "heel" }, " hurts."],
                  portuguese: "Meu calcanhar dói.",
                },
                {
                  audioPlayer: "/assets/audio/general/lets-go-up-the-hill.mp3",
                  text: [
                    "Let’s go up the ",
                    { type: "mark", part: "hill" },
                    ".",
                  ],
                  portuguese: "Vamos subir a colina.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/leave.mp3",
                      word: "leave",
                      phonetics: "/liːv/",
                      portuguese: "sair; deixar",
                    },
                    {
                      audio: "/assets/audio/general/live1.mp3",
                      word: "live",
                      phonetics: "/lɪv/",
                      portuguese: "morar; viver",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/i-want-to-leave-now.mp3",
                  text: [
                    "I want to ",
                    { type: "mark", part: "leave" },
                    " now.",
                  ],
                  portuguese: "Eu quero sair agora.",
                },
                {
                  audioPlayer: "/assets/audio/general/i-live-in-brazil.mp3",
                  text: ["I ", { type: "mark", part: "live" }, " in Brazil."],
                  portuguese: "Eu moro no Brasil.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/meat.mp3",
                      word: "meat",
                      phonetics: "/miːt/",
                      portuguese: "carne",
                    },
                    {
                      audio: "/assets/audio/general/mint.mp3",
                      word: "mint",
                      phonetics: "/mɪnt/",
                      portuguese: "hortelã",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/i-dont-eat-meat.mp3",
                  text: ["I don't eat ", { type: "mark", part: "meat" }, "."],
                  portuguese: "Eu não como carne.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/this-tea-has-mint-in-it.mp3",
                  text: [
                    "This tea has ",
                    { type: "mark", part: "mint" },
                    " in it.",
                  ],
                  portuguese: "Este chá tem hortelã.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/reach.mp3",
                      word: "reach",
                      phonetics: "/riːtʃ/",
                      portuguese: "alcançar",
                    },
                    {
                      audio: "/assets/audio/general/rich.mp3",
                      word: "rich",
                      phonetics: "/rɪtʃ/",
                      portuguese: "rico",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/i-cant-reach-the-shelf.mp3",
                  text: [
                    "I can't ",
                    { type: "mark", part: "reach" },
                    " the shelf.",
                  ],
                  portuguese: "Eu não consigo alcançar a prateleira.",
                },
                {
                  audioPlayer: "/assets/audio/general/he-is-very-rich.mp3",
                  text: ["He is very ", { type: "mark", part: "rich" }, "."],
                  portuguese: "Ele é muito rico.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/seat.mp3",
                      word: "seat",
                      phonetics: "/siːt/",
                      portuguese: "assento",
                    },
                    {
                      audio: "/assets/audio/general/sit.mp3",
                      word: "sit",
                      phonetics: "/sɪt/",
                      portuguese: "sentar",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/please-take-a-seat.mp3",
                  text: [
                    "Take a ",
                    { type: "mark", part: "seat" },
                    ", please.",
                  ],
                  portuguese: "Sente-se, por favor.",
                },
                {
                  audioPlayer: "/assets/audio/general/please-sit-down.mp3",
                  text: ["Please ", { type: "mark", part: "sit" }, " down."],
                  portuguese: "Por favor, sente-se.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/sheep.mp3",
                      word: "sheep",
                      phonetics: "/ʃiːp/",
                      portuguese: "ovelha",
                    },
                    {
                      audio: "/assets/audio/general/ship.mp3",
                      word: "ship",
                      phonetics: "/ʃɪp/",
                      portuguese: "navio",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer:
                    "/assets/audio/general/i-saw-a-sheep-on-the-farm.mp3",
                  text: [
                    "I saw a ",
                    { type: "mark", part: "sheep" },
                    " on the farm.",
                  ],
                  portuguese: "Eu vi uma ovelha na fazenda.",
                },
                {
                  audioPlayer: "/assets/audio/general/this-ship-is-huge.mp3",
                  text: [
                    "This ",
                    { type: "mark", part: "ship" },
                    " arrived late.",
                  ],
                  portuguese: "Este navio é enorme.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/sleep.mp3",
                      word: "sleep",
                      phonetics: "/sliːp/",
                      portuguese: "dormir",
                    },
                    {
                      audio: "/assets/audio/general/slip.mp3",
                      word: "slip",
                      phonetics: "/slɪp/",
                      portuguese: "escorregar",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/i-need-to-sleep.mp3",
                  text: ["I need to ", { type: "mark", part: "sleep" }, "."],
                  portuguese: "Eu preciso dormir.",
                },
                {
                  audioPlayer:
                    "/assets/audio/general/be-careful-not-to-slip.mp3",
                  text: [
                    "Be careful not to ",
                    { type: "mark", part: "slip" },
                    ".",
                  ],
                  portuguese: "Cuidado para não escorregar.",
                },
              ]}
            />
          </Card>

          <Card className="line-break">
            <Comparison
              groups={[
                {
                  group: [
                    {
                      audio: "/assets/audio/general/these.mp3",
                      word: "these",
                      phonetics: "/ðiːz/",
                      portuguese: "estes / estas",
                    },
                    {
                      audio: "/assets/audio/general/this.mp3",
                      word: "this",
                      phonetics: "/ðɪs/",
                      portuguese: "este / esta",
                    },
                  ],
                },
              ]}
            />

            <Example
              examples={[
                {
                  audioPlayer: "/assets/audio/general/these-are-my-keys.mp3",
                  text: ["", { type: "mark", part: "These" }, " are my keys."],
                  portuguese: "Estas são minhas chaves.",
                },
                {
                  audioPlayer: "/assets/audio/general/this-is-my-house.mp3",
                  text: ["", { type: "mark", part: "This" }, " is my house."],
                  portuguese: "Esta é minha casa.",
                },
              ]}
            />
          </Card>
        </Section>
      </div>
    </>
  );
}
