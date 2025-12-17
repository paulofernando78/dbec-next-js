import Text from "@/components/molecules/Text";
import Whiteboard from "@/components/molecules/Whiteboard";
import { Correct, Incorrect } from "@/lib/svg-imports";

export default function Collocations() {
  return (
    <>
      <Whiteboard
        title="VOCABULARY"
        subtitle="Collocations"
      />
      <div className="line-break">
        <Text bold>do / make</Text>
        <div>
          <Text lang="pt">Tenho que fazer minha lição (tarefa de casa).</Text>
          <Text incorrect>I have to make my homework</Text>
          <Text correct playAudio="/audio/general/i-have-to-do-my-homework.mp3">I have to do my homework.</Text>
        </div>
        <div>
          <Text lang="pt">Tenho que fazer a minha cama.</Text>
          <Text incorrect>I have to do my bed.</Text>
          <Text correct playAudio="/audio/general/i-have-to-make-my-bed.mp3">I have to make my bed.</Text>
        </div>
        <Text bold>for / with</Text>
        <div>
          <Text lang="pt">Estou apaixonado por você.</Text>
          <Text incorrect>I’m in love for you.</Text>
          <Text correct playAudio="/audio/general/im-in-love-with-you.mp3">I’m in love with you.</Text>
        </div>
        <div>
          <Text lang="pt">Estou preocupado com você.</Text>
          <Text incorrect>I’m worried with you.</Text>
          <Text correct playAudio="/audio/general/im-worried-about-you.mp3">I’m worried about you.</Text>
        </div>
        <Text bold>fast / quick</Text>
        <div>
          <Text lang="pt">Um carro rápido</Text>
          <Text incorrect>It’s a quick car.</Text>
          <Text correct playAudio="/audio/general/its-a-fast-car.mp3">It’s a fast car.</Text>
        </div>
        <div>
          <Text lang="pt">Psso ter uma palavrinha com você?</Text>
          <Text incorrect>Can I have a fast word with you?</Text>
          <Text correct playAudio="/audio/general/can-I-have-a-quick-word-with-you.mp3">Can I have a quick word with you?</Text>
        </div>
        <div>
        <Text lang="pt">Ele é um corredor rápido.</Text>
        <Text incorrect>He’s a quick runner.</Text>
        <Text correct playAudio="/audio/general/hes-a-fast-runner.mp3">He’s a fast runner.</Text>
        </div>
      </div>
    </>
  )
}