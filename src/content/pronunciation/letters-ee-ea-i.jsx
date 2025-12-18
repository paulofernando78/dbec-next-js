import { Bold } from "@/components/atoms/Bold";
import { BulletPoint } from "@/components/atoms/BulletPoint";
import { Phonetics } from "@/components/atoms/Phonetics/Phonetics";
import { Text }  from "@/components/molecules/Text";
import { Whiteboard }from "@/components/molecules/Whiteboard";

export default function LettersEEeaI() {
  return (
    <>
      <Whiteboard
      title="Pronunciation"
      subtitle="Letters ee / ea vs. i"
      />
      <div className="line-break">
        <Text bold playAudio="/audio/general/listen-to-the-difference.mp3">Listen to the difference.</Text>
        <div>
          <div className="flex">
            <Text playAudio=""><Bold label="ea"/>t <Phonetics phonetics="/iːt/"/></Text>
            <BulletPoint />
            <Text playAudio=""><Bold label="i"/>t <Phonetics phonetics="/ɪt/"/></Text>
          </div>
          <div className="flex">
            <Text playAudio="">b<Bold label="ea"/>d <Phonetics phonetics="/biːd/"/></Text>
            <BulletPoint />
            <Text playAudio="">b<Bold label="i"/>d <Phonetics phonetics="/bɪd/"/></Text>
          </div>
          <div className="flex">
            <Text playAudio="">b<Bold label="ea"/>t <Phonetics phonetics="/biːt/"/></Text>
            <BulletPoint />
            <Text playAudio="">b<Bold label="i"/>t <Phonetics phonetics="/bɪt/"/></Text>
          </div>
        </div>
        <Text bold>Examples:</Text>
        <Text playAudio=""><BulletPoint /> You have to eat it.</Text>
      </div>
    </>
  )
}