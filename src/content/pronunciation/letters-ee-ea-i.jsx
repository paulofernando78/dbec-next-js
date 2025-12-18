import { BulletPoint } from "@/components/atoms/BulletPoint";
import { Text }  from "@/components/molecules/Text";
import { Whiteboard }from "@/components/molecules/Whiteboard";
import { Comparison } from "../../components/molecules/Comparison/Comparison";

const lettersEEeaI = [
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "...",
        phonetics: "...",
        translation: "...",
      },
    ],
  },
]

export default function LettersEEeaI() {
  return (
    <>
      <Whiteboard
      title="Pronunciation"
      subtitle="Letters ee / ea vs. i"
      />
      <div className="line-break">
        <Text bold playAudio="/audio/general/listen-to-the-difference.mp3">Listen to the difference.</Text>
        <Comparison groups={lettersEEeaI} />
        <Text bold>Examples:</Text>
        <Text playAudio=""><BulletPoint /> You have to eat it.</Text>
      </div>
    </>
  )
}