"use client";

import styles from "./page.module.css";

import { Audio } from "@/components/atoms/Audio";
import { Line } from "@/components/molecules/Line";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import { content, bold, italic } from "@/helpers/content";

import { useState, useEffect } from "react";

const greetingsList = [
  "Hi there!",
  "How are you doing?",
  "How's it going?",
  "What's up?",
  "How are you?",
  "How are you feeling?",
];

const emojis = [
  {
    img: "/assets/img/emojis/good.gif",
    alt: '"thumb" up emoji',
    words: [
      {
        audio: "/assets/audio/words/g/good.mp3",
        word: "good",
      },
      {
        audio: "/assets/audio/words/w/well.mp3",
        word: "well",
      },
    ],
  },
  {
    img: "/assets/img/emojis/happy.gif",
    alt: '"happy" emoji',
    words: [
      {
        audio: "/assets/audio/words/h/happy.mp3",
        word: "happy",
      },
      {
        audio: "/assets/audio/words/g/glad.mp3",
        word: "glad",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sad.gif",
    alt: '"sad" emoji',
    words: [
      {
        audio: "/assets/audio/words/s/sad.mp3",
        word: "sad",
      },
      {
        audio: "/assets/audio/words/u/unhappy.mp3",
        word: "unhappy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/angry.gif",
    alt: '"angry" emoji',
    words: [
      {
        audio: "/assets/audio/words/a/angry.mp3",
        word: "angry (with)",
      },
      {
        audio: "/assets/audio/words/m/mad.mp3",
        word: "mad (at)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/annoyed.gif",
    alt: '"annoyed" emoji',
    words: [
      {
        audio: "/assets/audio/words/a/annoyed.mp3",
        word: "annoyed",
      },
      {
        audio: "/assets/audio/words/i/irritated.mp3",
        word: "irritated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/calm.gif",
    alt: '"calm" emoji',
    words: [
      {
        audio: "/assets/audio/words/c/calm.mp3",
        word: "calm",
      },
      {
        audio: "/assets/audio/words/r/relaxed.mp3",
        word: "relaxed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/crazy.gif",
    alt: '"crazy" emoji',
    words: [
      {
        audio: "/assets/audio/words/c/crazy.mp3",
        word: "crazy",
      },
      {
        audio: "/assets/audio/words/w/wacky.mp3",
        word: "wacky",
      },
    ],
  },
  {
    img: "/assets/img/emojis/tired.gif",
    alt: '"tired" emoji',
    words: [
      {
        audio: "/assets/audio/words/t/tired.mp3",
        word: "tired",
      },
      {
        audio: "/assets/audio/words/e/exhausted.mp3",
        word: "exhausted",
      },
    ],
  },
  {
    img: "/assets/img/emojis/anxious.gif",
    alt: '"anxious" emoji',
    words: [
      {
        audio: "/assets/audio/words/a/anxious.mp3",
        word: "anxious",
      },
      {
        audio: "/assets/audio/words/n/nervous.mp3",
        word: "nervous",
      },
    ],
  },
  {
    img: "/assets/img/emojis/bored.gif",
    alt: '"bored" emoji',
    words: [
      {
        audio: "/assets/audio/words/b/bored.mp3",
        word: "bored",
      },
      {
        audio: "/assets/audio/words/f/fed-up.mp3",
        word: "fed up (with)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/hot.gif",
    alt: '"hot" emoji',
    words: [
      {
        audio: "/assets/audio/words/h/hot.mp3",
        word: "hot",
      },
      {
        audio: "/assets/audio/words/o/overheating.mp3",
        word: "overheating",
      },
    ],
  },
  {
    img: "/assets/img/emojis/in-love.gif",
    alt: '"in love" emoji',
    words: [
      {
        audio: "/assets/audio/words/i/in-love.mp3",
        word: "in love",
      },
      {
        audio: "/assets/audio/words/r/romantic.mp3",
        word: "romantic",
      },
    ],
  },
  {
    img: "/assets/img/emojis/loved.gif",
    alt: '"loved" emoji',
    words: [
      {
        audio: "/assets/audio/words/l/loved.mp3",
        word: "loved",
      },
      {
        audio: "/assets/audio/words/a/appreciated.mp3",
        word: "appreciated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/heartbroken.gif",
    alt: '"heartbroken" emoji',
    words: [
      {
        audio: "/assets/audio/words/h/heartbroken.mp3",
        word: "heartbroken",
      },
      {
        audio: "/assets/audio/words/d/devastated.mp3",
        word: "devastated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/silly.gif",
    alt: '"silly" emoji',
    words: [
      {
        audio: "/assets/audio/words/s/silly.mp3",
        word: "silly",
      },
      {
        audio: "/assets/audio/words/g/goofy.mp3",
        word: "goofy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/scared.gif",
    alt: '"scared" emoji',
    words: [
      {
        audio: "/assets/audio/words/s/scared.mp3",
        word: "scared (of)",
      },
      {
        audio: "/assets/audio/words/a/afraid.mp3",
        word: "afraid (of)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thoughtful.gif",
    alt: '"thoughtful" emoji',
    words: [
      {
        audio: "/assets/audio/words/t/thoughtful.mp3",
        word: "thoughtful",
      },
      {
        audio: "/assets/audio/words/r/reflective.mp3",
        word: "reflective",
      },
    ],
  },
  {
    img: "/assets/img/emojis/frustrated.gif",
    alt: '"frustrated" emoji',
    words: [
      {
        audio: "/assets/audio/words/f/frustrated.mp3",
        word: "frustrated",
      },
      {
        audio: "/assets/audio/words/b/bothered.mp3",
        word: "bothered",
      },
    ],
  },
  {
    img: "/assets/img/emojis/disappointed.gif",
    alt: '"disappointed" emoji',
    words: [
      {
        audio: "/assets/audio/words/d/disappointed.mp3",
        word: "disappointed",
      },
      {
        audio: "/assets/audio/words/b/betrayed.mp3",
        word: "betrayed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/embarrassed.gif",
    alt: '"embarrassed" emoji',
    words: [
      {
        audio: "/assets/audio/words/e/embarrassed.mp3",
        word: "embarrassed",
      },
      {
        audio: "/assets/audio/words/a/ashamed.mp3",
        word: "ashamed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sleepy.gif",
    alt: '"sleepy" emoji',
    words: [
      {
        audio: "/assets/audio/words/s/sleepy.mp3",
        word: "sleepy",
      },
      {
        audio: "/assets/audio/words/t/tired.mp3",
        word: "tired",
      },
    ],
  },
  {
    img: "/assets/img/emojis/peaceful.gif",
    alt: '"peaceful" emoji',
    words: [
      {
        audio: "/assets/audio/words/p/peaceful.mp3",
        word: "peaceful",
      },
      {
        audio: "/assets/audio/words/s/serene.mp3",
        word: "serene",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thankful.gif",
    alt: '"thankful" emoji',
    words: [
      {
        audio: "/assets/audio/words/t/thankful.mp3",
        word: "thankful",
      },
      {
        audio: "/assets/audio/words/g/grateful.mp3",
        word: "grateful",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sick.gif",
    alt: '"sick" emoji',
    words: [
      {
        audio: "/assets/audio/words/s/sick.mp3",
        word: "sick",
      },
      {
        audio: "/assets/audio/words/i/ill.mp3",
        word: "ill",
      },
    ],
  },
  {
    img: "/assets/img/emojis/i-dont-know.gif",
    alt: '"i-dont-know" emoji',
    words: [
      {
        audio: "/assets/audio/words/i/i-dont-know.mp3",
        word: "I dont know",
      },
    ],
  },
];

export default function Home() {
  // greetingIndex = question current position
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // fade out
      
      setTimeout(() => {
        // % faz voltar para o início.
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);
        setOpacity(1); // fade in
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="line-break-double">
      <div className="line-break">
        <>
          <div className={styles.meComputerWrapper}>
            <Line
              value={[
                ...content({
                  icons: ["attention"],
                  parts: ["This website is currently under construction."],
                }),
              ]}
            />
            <Image
              src="/assets/img/home-me.png"
              alt="A pic of myself"
              width={200}
              className={styles.meComputer}
            />
            <ul>
              <li className={styles.greetings} style={{ opacity }}>
                {greetingsList[greetingIndex]}
              </li>
            </ul>
          </div>
          <Line
            value={[
              ...content({
                audio: "/assets/audio/welcome.mp3",
                parts: [
                  bold("DAILY BASIS ENGLISH COURSE"),
                  " offers specialized English classes focused on the four core language skills: ",
                  italic("Speaking "),
                  "(with an emphasis on conversation), ",
                  italic("Listening"),
                  " (listening comprehension), ",
                  italic("Reading, "),
                  "and ",
                  italic("Writing"),
                  ". On this web site, you’ll find a variety of useful learning materials. Please use them wisely.",
                ],
              }),
            ]}
          />
          <Line
            value={[
              ...content({
                audio: "/assets/audio/home/feeling.mp3",
                parts: ["How are you feeling today?"],
              }),
            ]}
          />
          <div className={styles.wrapper}>
            {emojis.map((emoji, emojiIndex) => (
              <Card key={emojiIndex}>
                <div className={`imgs ${styles.innerWrapper}`}>
                  <Image
                    src={emoji.img}
                    alt={emoji.alt}
                    width={60}
                    height={60}
                    className={styles.imgEmoji}
                  />
                  {emoji.words &&
                    emoji.words.map((word, wordIndex) => (
                      <div key={wordIndex} className={styles.wordAudioWrapper}>
                        {word.audio && <Audio src={word.audio} />}
                        <span key={wordIndex} className={styles.word}>
                          {word.word}
                        </span>
                      </div>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
