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
  }
]

export default function LettersEEeaI() {
  return (
    <>
      <Whiteboard
      title="Pronunciation"
      subtitle="Letters ee / ea vs. i"
      />
      <div className="line-break">
        
        <Comparison groups={lettersEEeaI} />
      </div>
    </>
  )
}