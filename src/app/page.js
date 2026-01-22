import styles from "./page.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Audio } from "@/components/atoms/Audio";
import Image from "next/image";

const emojis = [
  {
    img: "/assets/img/emojis/good.gif",
    alt: '"thumb" up emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/good.mp3",
        word: "good",
      },
      {
        audio: "/assets/audio/home/feelings/well.mp3",
        word: "well",
      },
    ],
  },
  {
    img: "/assets/img/emojis/happy.gif",
    alt: '"happy" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/happy.mp3",
        word: "happy",
      },
      {
        audio: "/assets/audio/home/feelings/glad.mp3",
        word: "glad",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sad.gif",
    alt: '"sad" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/sad.mp3",
        word: "sad",
      },
      {
        audio: "/assets/audio/home/feelings/unhappy.mp3",
        word: "unhappy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/angry.gif",
    alt: '"angry" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/angry.mp3",
        word: "angry (with)",
      },
      {
        audio: "/assets/audio/home/feelings/mad.mp3",
        word: "mad (at)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/annoyed.gif",
    alt: '"annoyed" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/annoyed.mp3",
        word: "annoyed",
      },
      {
        audio: "/assets/audio/home/feelings/irritated.mp3",
        word: "irritated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/calm.gif",
    alt: '"calm" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/calm.mp3",
        word: "calm",
      },
      {
        audio: "/assets/audio/home/feelings/relaxed.mp3",
        word: "relaxed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/crazy.gif",
    alt: '"crazy" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/crazy.mp3",
        word: "crazy",
      },
      {
        audio: "/assets/audio/home/feelings/wacky.mp3",
        word: "wacky",
      },
    ],
  },
  {
    img: "/assets/img/emojis/tired.gif",
    alt: '"tired" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/tired.mp3",
        word: "tired",
      },
      {
        audio: "/assets/audio/home/feelings/exhausted.mp3",
        word: "exhausted",
      },
    ],
  },
  {
    img: "/assets/img/emojis/anxious.gif",
    alt: '"anxious" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/anxious.mp3",
        word: "anxious",
      },
      {
        audio: "/assets/audio/home/feelings/nervous.mp3",
        word: "nervous",
      },
    ],
  },
  {
    img: "/assets/img/emojis/bored.gif",
    alt: '"bored" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/bored.mp3",
        word: "bored",
      },
      {
        audio: "/assets/audio/home/feelings/fed-up.mp3",
        word: "fed up (with)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/hot.gif",
    alt: '"hot" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/hot.mp3",
        word: "hot",
      },
      {
        audio: "/assets/audio/home/feelings/overheating.mp3",
        word: "overheating",
      },
    ],
  },
  {
    img: "/assets/img/emojis/in-love.gif",
    alt: '"in love" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/in-love.mp3",
        word: "in love",
      },
      {
        audio: "/assets/audio/home/feelings/romantic.mp3",
        word: "romantic",
      },
    ],
  },
  {
    img: "/assets/img/emojis/loved.gif",
    alt: '"loved" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/loved.mp3",
        word: "loved",
      },
      {
        audio: "/assets/audio/home/feelings/appreciated.mp3",
        word: "appreciated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/heartbroken.gif",
    alt: '"heartbroken" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/heartbroken.mp3",
        word: "heartbroken",
      },
      {
        audio: "/assets/audio/home/feelings/devastated.mp3",
        word: "devastated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/silly.gif",
    alt: '"silly" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/silly.mp3",
        word: "silly",
      },
      {
        audio: "/assets/audio/home/feelings/goofy.mp3",
        word: "goofy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/scared.gif",
    alt: '"scared" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/scared.mp3",
        word: "scared (of)",
      },
      {
        audio: "/assets/audio/home/feelings/afraid.mp3",
        word: "afraid (of)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thoughtful.gif",
    alt: '"thoughtful" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/thoughtful.mp3",
        word: "thoughtful",
      },
      {
        audio: "/assets/audio/home/feelings/reflective.mp3",
        word: "reflective",
      },
    ],
  },
  {
    img: "/assets/img/emojis/frustrated.gif",
    alt: '"frustrated" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/frustrated.mp3",
        word: "frustrated",
      },
      {
        audio: "/assets/audio/home/feelings/bothered.mp3",
        word: "bothered",
      },
    ],
  },
  {
    img: "/assets/img/emojis/disappointed.gif",
    alt: '"disappointed" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/disappointed.mp3",
        word: "disappointed",
      },
      {
        audio: "/assets/audio/home/feelings/betrayed.mp3",
        word: "betrayed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/embarrassed.gif",
    alt: '"embarrassed" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/embarrassed.mp3",
        word: "embarrassed",
      },
      {
        audio: "/assets/audio/home/feelings/ashamed.mp3",
        word: "ashamed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sleepy.gif",
    alt: '"sleepy" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/sleepy.mp3",
        word: "sleepy",
      },
      {
        audio: "/assets/audio/home/feelings/tired.mp3",
        word: "tired",
      },
    ],
  },
  {
    img: "/assets/img/emojis/peaceful.gif",
    alt: '"peaceful" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/peaceful.mp3",
        word: "peaceful",
      },
      {
        audio: "/assets/audio/home/feelings/serene.mp3",
        word: "serene",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thankful.gif",
    alt: '"thankful" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/thankful.mp3",
        word: "thankful",
      },
      {
        audio: "/assets/audio/home/feelings/grateful.mp3",
        word: "grateful",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sick.gif",
    alt: '"sick" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/sick.mp3",
        word: "sick",
      },
      {
        audio: "/assets/audio/home/feelings/ill.mp3",
        word: "ill",
      },
    ],
  },
  {
    img: "/assets/img/emojis/i-dont-know.gif",
    alt: '"i-dont-know" emoji',
    words: [
      {
        audio: "/assets/audio/home/feelings/i-dont-know.mp3",
        word: "I dont know",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="line-break-double">
      <Whiteboard title="Home Page" />
      <div className="line-break">
        <>
          <Paragraph
            blocks={[
              {
                audioPlayer: "/assets/audio/home/welcome.mp3",
                lines: [
                  {
                    text: [
                      "Hey there! Welcome to ",
                      {
                        part: "DAILY BASIS ENGLISH COURSE",
                        type: "bold",
                      },
                      " website. Here, you’ll find a lot of interesting materials. Please, use it wisely. ",
                    ],
                    lineBreak: true,
                  },
                ],
              },
              {
                audioPlayer: "/assets/audio/home/below.mp3",
                lines: [
                  {
                    text: [
                      "Below, you can listen to some adjectives that describe how you’re feeling.",
                    ],
                    lineBreak: true,
                  },
                  {
                    text: [
                      {
                        audio: "/assets/audio/home/feeling.mp3",
                        part: "How are you feeling today?",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <p></p>
          <div className={styles.wrapper}>
            {emojis.map((emoji, emojiIndex) => (
              <div key={emojiIndex} className={`imgs ${styles.innerWrapper}`}>
                <Image src={emoji.img} alt={emoji.alt} width={60} height={60} />
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
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
