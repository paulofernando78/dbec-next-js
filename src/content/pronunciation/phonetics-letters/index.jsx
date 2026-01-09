import styles from "./phonetics.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Ribbon } from "@/components/atoms/Ribbon";
import { List } from "@/components/molecules/List";
import { Links } from "@/components/molecules/Links";

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

        <Ribbon label="Vowels" />
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/ə-ʌ.mp3",
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

        <Ribbon label="Diphthongs" />

        <List
          bullet={false}
          items={[
            // aɪ
            {
              text: [
                {
                  audio: "/assets/audio/pronunciation/phonetics/vowels/aɪ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/aʊ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/eɪ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/ɔɪ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/oʊ.mp3",
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
                  audio: "/assets/audio/pronunciation/phonetics/vowels/əʊ.mp3",
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

        <Ribbon label="Rhotic (Vowels + R)" />
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

        <Ribbon label="Consonants" />
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

        <Ribbon label="Sounds by letters (Graphemes)" />
        <Links
          groups={[
            {
              items: [
                // {
                //   href: "/pronunciation/phonetics-letters/letters-ea-ee-vs-i",
                //   label: 'Letters "a": ',
                //   phonetics: "/iː/",
                // },
                {
                  href: "/pronunciation/phonetics-letters/letters-a-vs-ea",
                  label: 'Letters "a" vs. "e(a)": ',
                  phonetics: "/æ/ vs. /e/",
                },
                // {
                //   href: "/pronunciation/phonetics-letters/letters-ea-ee-vs-i",
                //   label: 'Letters "e", "ea", "ee", "ei", "eo", "ey", "i", "ie", "y": ',
                //   phonetics: "/iː/",
                // },
                {
                  href: "/pronunciation/phonetics-letters/letters-ea-ee-vs-i",
                  label: 'Letters "ea", "ee" vs. "i": ',
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
